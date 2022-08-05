import styled from "@emotion/styled/macro";
import { withStyle } from "_/utilities";
import { HomeModule } from "_/assets/images";
import { Avatar } from "#";

export const Menu = styled.div`
  color: ${({ theme }): string => theme.colors.buttonBackground};
`;

export const OffCanvas = styled.div`
  width: 70% !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }): string =>
    theme.colors.grayedButtonBackground};
  color: #ffffff;
  overflow-y: hidden;
  & nav {
    background-color: ${({ theme }): string =>
      theme.colors.grayedButtonBackground};
    width: fit-content;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 32px;
  background-color: ${({ theme }): string => theme.colors.headerBackground};
  grid-area: header;
`;

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #ffffff;

  :hover {
    color: #ffffff;
  }
`;

export const Logo = styled.img`
  object-fit: contain;
  width: 40px;
  height: 40px;
  margin-right: 7px;
`;

export const SideBarHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 25px 30px;
  border-bottom: solid ${({ theme }): string => theme.colors.inputText} 1px;
`;

export const BtnClose = styled.span``;

export const SideBarBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0 0 30px 0;
  overflow-y: scroll;
  background-color: transparent;
  position: relative;
  z-index: -11;
`;

export const UserInfoContainer = styled.div`
  padding: 0 30px;
  width: 100%;
  padding-bottom: 70px;
  padding-top: 30px;
  background-image: linear-gradient(
    to bottom,
    rgb(47, 57, 65) 60%,
    rgba(47, 57, 65, 0)
  );
`;
// rgba(255, 0, 0, 1),

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  border-bottom: solid ${({ theme }): string => theme.colors.inputText} 1px;
  padding: 15px 0;
  width: 100%;
`;

export const UserAvatar = withStyle(
  Avatar,
  styled("img")`
    width: 50px;
    height: 50px;
    margin-right: 15px;
  `
);

export const UserDetailWrapper = styled.div``;

export const UserName = styled.div`
  font-weight: 600;
  font-size: 18px;
`;

export const UserRole = styled.div`
  opacity: 0.4;
  color: ${({ theme }): string => theme.colors.white};
  font-size: 14px;
`;

export const MenuContainer = styled.div`
  width: 100%;

  position: absolute;
  top: 0;
  padding-top: 150px;
  max-height: 100%;
  z-index: -10;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none !important;
  }
`;
