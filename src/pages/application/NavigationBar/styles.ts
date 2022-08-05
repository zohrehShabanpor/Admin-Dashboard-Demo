import styled from "@emotion/styled/macro";
import { colors } from "_/constants";

export const NavigationBarList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const StyledNavigationBar = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${colors.DarkGunmetal100};
`;
