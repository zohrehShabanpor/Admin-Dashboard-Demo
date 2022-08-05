import styled from "@emotion/styled/macro";
import { withStyle } from "_/utilities";
import { Avatar } from "#";

export const UserInfoContainer = styled.div`
  padding: 0 10px;
  width: 100%;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  border: solid ${({ theme }): string => theme.colors.inputText} 1px;
  padding: 15px;
  border-radius: 15px;
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
  margin-top: 40px;
`;

export const Title = styled.a`
  color: ${({ theme }): string => theme.colors.grayedButtonText};
  letter-spacing: 1px;
  font-size: 17px;
  margin-left: 30px;
  :hover {
    color: ${({ theme }): string => theme.colors.grayedButtonText};
  }
`;

export const SubTitleWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: solid ${({ theme }): string => theme.colors.inputText} 1px;
`;

export const SubTitleItem = styled.a`
  color: #ffffff;
  padding: 12px 15px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  margin: 6px 20px 0 20px;
  
  :hover{
    color: #ffffff;
  }

  & svg {
    width:20px;
    height:20px;
    & path {
        stroke: #ffffff; 
        fill:#ffffff; 
      },
    },

  &.active{
    background-color: ${({ theme }): string => theme.colors.grayedButtonHover};
    color: ${({ theme }): string => theme.colors.buttonBackground};
    & svg {
      & path {
        stroke: ${({ theme }): string => theme.colors.buttonBackground};
        fill: ${({ theme }): string => theme.colors.buttonBackground};
      },
    },
  }

`;

export const SubTitle = styled.span`
  font-weight: 500;
  font-size: 15px;
`;

export const MenuIconContainer = styled.div`
  margin-right: 12px;
`;
