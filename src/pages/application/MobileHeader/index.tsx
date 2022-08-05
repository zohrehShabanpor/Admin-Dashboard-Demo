import React from "react";
import { memo } from "_/utilities/memo";
import { User } from "_/utilities";
import SubItem from "./MenuItem";
import {
  capexLogo,
  HomeFill,
  UserFill,
  SignalFill,
  ExchangerFill,
  CoinFill,
  StarFill,
  LogoutFill,
} from "_/assets/images";
import {
  StyledHeader,
  Menu,
  OffCanvas,
  LogoWrapper,
  Logo,
  SideBarHeader,
  BtnClose,
  SideBarBody,
  UserInfoContainer,
  UserInfo,
  UserAvatar,
  UserDetailWrapper,
  UserName,
  UserRole,
  MenuContainer,
} from "./styles";

interface Props {
  className?: string;
  style?: any;
  user: User;
}

function MobileHeaderComponent({
  className,
  user,
  style,
}: Props): React.ReactElement {
  const sidebarItems = [
    {
      Title: { content: "Home", url: "/" },
      Item: [{ subTitle: "Dashboard", icon: <HomeFill />, url: "/home" }],
    },
    {
      Title: { content: "Analytics", url: "/analytics" },
      Item: [
        {
          subTitle: "User Analytics",
          icon: <UserFill />,
          url: "/analytics/users",
        },
        {
          subTitle: "Signal Analytics",
          icon: <SignalFill />,
          url: "/analytics/signals",
        },
      ],
    },
    {
      Title: { content: "Resource", url: "/resource" },
      Item: [
        {
          subTitle: "Exchangers",
          icon: <ExchangerFill />,
          url: "/resource/exchangers",
        },
        {
          subTitle: "Users",
          icon: <UserFill />,
          url: "/resource/users",
        },
        {
          subTitle: "Coins",
          icon: <CoinFill />,
          url: "/resource/coins",
        },
        {
          subTitle: "Rank",
          icon: <StarFill />,
          url: "/resource/rank",
        },
      ],
    },
    {
      Title: { content: "Settings" },
      Item: [{ subTitle: "Log out", icon: <LogoutFill /> }],
    },
  ];

  return (
    <header
      style={style}
      className={
        className + " d-flex justify-content-between align-items-center px-3"
      }
    >
      <Menu
        role="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#SideMenu"
        aria-controls="SideMenu"
      >
        <i className="fas fa-bars fa-lg"></i>
      </Menu>

      <OffCanvas
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="SideMenu"
        aria-labelledby="SideMenuLabel"
      >
        <SideBarHeader className="offcanvas-header">
          <LogoWrapper href="/home">
            <Logo src={capexLogo} />
            Capex
          </LogoWrapper>
          <BtnClose
            role="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fas fa-times"></i>
          </BtnClose>
        </SideBarHeader>

        <SideBarBody>
          <UserInfoContainer>
            <UserInfo>
              <UserAvatar src={user.imageUrl} />
              <UserDetailWrapper>
                <UserName>{user.name}</UserName>
                <UserRole>{user.role}</UserRole>
              </UserDetailWrapper>
            </UserInfo>
          </UserInfoContainer>

          <MenuContainer>
            {sidebarItems.map((item) => {
              return <SubItem title={item.Title} subTitleItem={item.Item} />;
            })}
          </MenuContainer>
        </SideBarBody>
      </OffCanvas>
    </header>
  );
}

export default memo(MobileHeaderComponent, StyledHeader);
