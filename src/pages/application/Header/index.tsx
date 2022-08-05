import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { memo } from "_/utilities/memo";
import { capexLogo } from "_/assets/images";
import { getTime, getDate, User, uuid } from "_/utilities";
import {
  Link,
  StyledHeader,
  IconTitleWrapper,
  Icon,
  Title,
  Title2,
  UserInfo,
  UserAvatar,
  NameAndRoleWrapper,
  NameWrapper,
  ExpandIconWrapper,
  Name,
  Role,
  DateTime,
  DateWrapper,
  TimeWrapper,
  CurrentModule,
  CurrentModuleDisplayName,
  ModuleSeparator,
  InfoContainer,
} from "./styles";
import { useStore } from "store";

interface Props {
  className?: string;
  style?: any;
  currentModuleDisplayName?: string;
}

function HeaderComponent({
  className,
  style,
  currentModuleDisplayName,
}: Props): React.ReactElement {
  const [currentDate, setCurrentDate] = useState(new Date());
  const store = useStore();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 30000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <header style={style} className={className}>
      <IconTitleWrapper>
        <Icon alt="Capex logo" src={capexLogo} />
        <Link href="/">
          <Title2>Capex</Title2>
          <Title>Dashboard</Title>
        </Link>
      </IconTitleWrapper>

      <InfoContainer>
        <UserInfo>
          <UserAvatar src={""} />
          <NameAndRoleWrapper>
            <NameWrapper>
              <Name>{store.loggedUser?.username}</Name>
            </NameWrapper>
            <Role>admin</Role>
          </NameAndRoleWrapper>
        </UserInfo>
        <DateTime>
          <TimeWrapper>{getTime(currentDate)}</TimeWrapper>
          <DateWrapper>{getDate(currentDate)}</DateWrapper>
        </DateTime>
      </InfoContainer>
    </header>
  );
}

export default memo(HeaderComponent, StyledHeader);
