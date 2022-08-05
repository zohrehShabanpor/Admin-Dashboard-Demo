import styled from "@emotion/styled/macro";
import color from "color";
import { colors } from "_/constants";

import { Props } from ".";

export const Text = styled.span`
  margin-bottom: 2px;
`;

export const StyledNavigationBarItem = styled.li<Props>`
  a {
    display: flex;
    justify-content: start;
    align-items: center;
    column-gap: 20px;
    padding: 14px;
    margin: 15px 0 0 32px;
    color: ${colors.Platinum100};
    background-color: ${({ isActive }): string =>
      isActive ? colors.Sunray100 : colors.DarkGunmetal100};
    border-radius: 8px 0 0 8px;
    font-size: 14px;
    font-weight: ${({ isActive }): string => (isActive ? `700` : `400`)};

    :-webkit-any(:link) {
      text-decoration: none;
    }
  }

  svg {
    width: 30px;
    height: 30px;
    margin-bottom: 3px;
    & path {
      fill: ${colors.Platinum100};
    }
  }

  :first-of-type {
    a {
      margin-top: 3px;
    }
  }
`;
