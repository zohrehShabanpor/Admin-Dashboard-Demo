import React from "react";
import { memo } from "_/utilities/memo";

import { StyledButton } from "./styles";

export enum IconPlacement {
  Right,
  Left,
}

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  grayed?: boolean;
  iconPlacement?: IconPlacement;
}

function ButtonComponent({
  children,
  Icon,
  ...props
}: Props): React.ReactElement {
  return (
    <button {...props}>
      {Icon ? <Icon /> : null}
      {children}
    </button>
  );
}

export default memo(ButtonComponent, StyledButton);
