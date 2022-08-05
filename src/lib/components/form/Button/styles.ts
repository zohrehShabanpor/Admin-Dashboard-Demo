import styled from "@emotion/styled/macro";
import { colors } from "_/constants";

import { Props, IconPlacement } from ".";

export const StyledButton = styled.button<Props>`
  display: flex;
  text-align: center;
  ${({ disabled }): string => (disabled ? "opacity: 0.5;" : "")};
  flex-direction: ${({ iconPlacement }): string =>
    iconPlacement === IconPlacement.Left ? "row" : "row-reverse"};
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 12px 18px;
  border: unset;
  border-radius: 11px;
  color: #000000;
  font-size: 18px;
  font-weight: 600;

  ${({ disabled }): string => (disabled ? "" : "cursor: pointer;")};
  background-color: ${colors.Sunray100};

  & svg {
    width: 24px;
    ${({ iconPlacement }): string =>
      iconPlacement === IconPlacement.Left ? "margin-right: 24px;" : ""};
    ${({ iconPlacement }): string =>
      iconPlacement === IconPlacement.Right ? "margin-left: 24px;" : ""};
  }

  ${({ grayed, theme, iconPlacement, disabled }): string =>
    grayed
      ? `
    ${iconPlacement === IconPlacement.Left ? " margin-right: 32px;" : ""};
    ${iconPlacement === IconPlacement.Right ? "margin-left: 32px;" : ""};
    border-radius: 5px;
    color: ${theme.colors.grayedButtonText};
    background-color: ${theme.colors.inputBackground};
    &:hover {
      ${disabled ? "" : `background-color: ${theme.colors.grayedButtonHover};`}
    }
  `
      : ""};

  ${({ children, Icon }): string =>
    !children && Icon
      ? `
    background-color: transparent;
    padding: 0;
    height: unset;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  `
      : ""};
`;
