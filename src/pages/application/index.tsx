import React, { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter,
  useRouteMatch,
  useParams,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import { ThemeProvider, Global } from "@emotion/react/macro";
import { User, breakPoints } from "_/utilities";
import { MODULES, THEMES } from "_/constants";
import { observer } from "mobx-react-lite";
import { useBind } from "_/hooks";
import SignInComponent from "../../modules/SignIn";
import CoinsComponent from "../../modules/resource/screens/coins";
import ExchangersComponent from "../../modules/resource/screens/exchangers";
import UsersComponent from "../../modules/resource/screens/users";
import HomeComponent from "../../modules/home";
import AnalyticsComponent from "../../modules/analytics";
import SignalAnalyticsComponent from "../../modules/analytics/screens/Signal";
import UserAnalyticsComponent from "../../modules/analytics/screens/User";
import ResourceComponent from "../../modules/resource";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import {
  Content,
  globalStyles,
  NavigationBarWrapper,
  Container,
  OfflinePage,
} from "./styles";
import NavigationBar, { NavigationBarItem } from "./NavigationBar";
import { useStore } from "store";

const USER: User = {
  name: localStorage.getItem("username") || "unknown",
  role: localStorage.getItem("role")?.toLowerCase() || "unknown",
};

const navigationBarItems: NavigationBarItem[] = MODULES.map(
  ({ Icon, id, module, text }) => ({
    Icon,
    id,
    text,
    url: module,
  })
);

enum Theme {
  Light = "light",
  Dark = "dark",
}

interface Props {
  theme: Theme;
}
function ApplicationComponent({ theme }: Props): React.ReactElement {
  const {
    params: { activeModule },
  } = useRouteMatch<{ activeModule: string }>("/:activeModule?/")!;
  const [_item, set_item] = useState<NavigationBarItem>();
  const client = new QueryClient();
  const store = useStore();

  useMemo(() => {
    navigationBarItems?.map((item: NavigationBarItem) => {
      if (window.location.pathname.split("-")[0].replace("/", "") === item.url)
        set_item(item);
    });
  }, [window.location.pathname]);

  const [activeNavigationBarItem, setActiveNavigationBarItem] =
    useState<NavigationBarItem>(
      navigationBarItems.find(({ id }) => id === activeModule) ||
        navigationBarItems[0]
    );

  const history = useHistory();

  useBind({
    setter1: (value) => {
      const module = MODULES.find((moduleItem) => moduleItem.module === value);

      if (module) {
        setActiveNavigationBarItem(
          navigationBarItems.find(
            ({ id }) => id === module.module
          ) as NavigationBarItem
        );
      }

      return true;
    },
    setter2: (value) => {
      history.push(`/${value}`);

      return true;
    },
    value1: activeNavigationBarItem.id,
    value2: activeModule,
  });

  const isAuth = localStorage.getItem("username") !== null;
  const width = window.innerWidth;

  useEffect(() => {
    if (localStorage.getItem("username"))
      store.setUserName({
        username: localStorage.getItem("username") || "unknown",
      });
  }, []);

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={THEMES[theme]}>
        <Global styles={globalStyles(THEMES[theme])} />
        {navigator.onLine ? (
          <Container
            style={isAuth ? { display: `grid` } : { display: `block` }}
          >
            {width <= breakPoints["xSmall"] ? (
              ""
            ) : (
              <NavigationBarWrapper
                style={isAuth ? { display: `block` } : { display: `none` }}
              >
                <NavigationBar
                  activeItem={_item || activeNavigationBarItem}
                  items={navigationBarItems}
                />
              </NavigationBarWrapper>
            )}

            {isAuth ? (
              width <= breakPoints["xSmall"] ? (
                <MobileHeader user={USER} />
              ) : (
                <Header
                  currentModuleDisplayName={activeNavigationBarItem.text}
                />
              )
            ) : (
              ""
            )}

            <Content style={isAuth ? {} : { height: `100%` }}>
              <Switch>
                <Route exact path="/signIn">
                  {isAuth ? <Redirect to="/home" /> : null}
                  <SignInComponent />
                </Route>
                {!isAuth ? <Redirect to="/signIn" /> : null}
                <Route exact path="/home">
                  <HomeComponent />
                </Route>
                {/*        Resource         */}
                <Route exact path="/resource">
                  <ResourceComponent />
                </Route>
                <Route exact path="/resource-exchanger">
                  <ExchangersComponent />
                </Route>
                <Route exact path="/resource-user">
                  <UsersComponent />
                </Route>
                <Route exact path="/resource-coin">
                  <CoinsComponent />
                </Route>

                {/*        Analytics         */}
                <Route exact path="/analytics">
                  <AnalyticsComponent />
                </Route>
                <Route exact path="/analytics-user">
                  <UserAnalyticsComponent />
                </Route>
                <Route exact path="/analytics-signal">
                  <SignalAnalyticsComponent />
                </Route>

                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
              </Switch>
            </Content>
          </Container>
        ) : (
          <OfflinePage>No internet !</OfflinePage>
        )}
      </ThemeProvider>
    </QueryClientProvider>
  );
}

const ObservedApplication = observer(ApplicationComponent);

export default function RouterWrapper(): React.ReactElement {
  const [theme, setTheme] = useState(Theme.Light);

  useEffect(() => {
    const handler = (event: KeyboardEvent): void => {
      if (event.code === "KeyT" && event.shiftKey && event.altKey) {
        setTheme((theme_) =>
          theme_ === Theme.Light ? Theme.Dark : Theme.Light
        );
      }
    };

    window.addEventListener("keypress", handler);

    return (): void => window.removeEventListener("keypress", handler);
  }, []);

  return (
    <BrowserRouter>
      <ObservedApplication theme={theme} />
    </BrowserRouter>
  );
}
