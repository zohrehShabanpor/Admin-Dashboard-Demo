import styled from "@emotion/styled/macro";
import { colors } from "_/constants";

export const Container = styled.div`
  width: 230px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;

  padding: 14px 16px;
  border-radius: 8px;

  color: ${colors.Platinum100};
  background-color: ${colors.DarkGunmetal90};

  &.active {
    color: ${colors.Sunray100};
    & svg {
      & path {
        fill: ${colors.Sunray100};
      }
    }
  }

  &.deActive {
    color: ${colors.Platinum100};
    & svg {
      & path {
        fill: ${colors.Platinum100};
      }
    }
  }
`;
