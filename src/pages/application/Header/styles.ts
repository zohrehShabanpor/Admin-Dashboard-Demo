import styled from "@emotion/styled/macro";
import { withStyle } from "_/utilities";
import { colors } from "_/constants";
import { Avatar } from "#";

export const DateWrapper = styled.div`
  font-weight: 400;
  font-size: 10px;
`;

export const TimeWrapper = styled.div`
  margin-bottom: 2px;
  font-weight: 500;
  font-size: 12px;
`;

export const DateTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.Platinum100};
`;

export const ExpandIconWrapper = styled.span`
  display: flex;
  opacity: 0.3;
  justify-content: center;
  align-items: center;

  :hover {
    opacity: unset;
    cursor: pointer;
  }

  :focus {
    outline: solid 1px ${({ theme }): string => theme.colors.inputText};
  }
`;

export const Name = styled.div`
  color: ${colors.Platinum100};
  font-weight: 700;
  font-size: 14px;
`;

export const Role = styled.div`
  color: ${colors.Platinum100};
  font-size: 10px;
  font-weight: 400;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NameAndRoleWrapper = styled.div`
  margin-left: 16px;
`;

export const UserAvatar = withStyle(
  Avatar,
  styled("img")`
    width: 32px;
    height: 32px;
  `
);

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const CurrentModuleDisplayName = styled.a`
  color: ${({ theme }): string => theme.colors.buttonBackground};
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  :hover {
    color: ${({ theme }): string => theme.colors.buttonBackground};
  }
`;

export const ModuleSeparator = styled.span`
  color: #ffffff;
  font-weight: 600;
  cursor: default;
`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  width: 202px !important;
  display: flex;
  align-items: start;
  justify-content: start;
`;

export const CurrentModule = styled.span`
  color: ${({ theme }): string => theme.colors.white};
  font-weight: 300;
  white-space: nowrap;
  display: flex;
  column-gap: 5px;
  margin-left: 5px;
`;

export const Title = styled.div`
  color: ${colors.Platinum100};
  font-weight: 300;
  font-size: 14px;
`;

export const Title2 = styled.div`
  color: ${colors.Sunray100};
  font-weight: 700;
  font-size: 18px;
`;

export const Icon = styled.img`
  height: 95%;
`;

export const NavigationBarWrapper = styled.div`
  overflow-y: hidden;
`;

export const IconTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  height: 100%;
  text-decoration: none;
  a {
    height: 100%;

    :-webkit-any(:link) {
      text-decoration: none;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 32px;
  background-color: ${colors.DarkGunmetal100};
  grid-area: header;
`;
