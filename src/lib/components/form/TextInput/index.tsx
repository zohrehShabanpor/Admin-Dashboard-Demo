import React, { useCallback, useMemo, useState } from "react";
import { Eye } from "_/assets/images";
import { uuid } from "_/utilities";
import { memo } from "_/utilities/memo";

import {
  StyledInput,
  Container,
  InputIconWrapper,
  Label,
  Input,
} from "./styles";

import { Button } from "#";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  hint?: string;
  activeBorderColor?: string;
  alertMode?: boolean;
  alertMessage?: any;
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  iconActionCallback?: () => void;
  iconActionName?: string;
}

function InputComponent({
  className,
  label,
  type,
  Icon,
  hint,
  alertMode = false,
  alertMessage,
  activeBorderColor,
  iconActionCallback,
  iconActionName,
  ...props
}: Props): React.ReactElement {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const inputId = useMemo(() => uuid(), []);

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  return (
    <div className={className}>
      {label ? <Label htmlFor={inputId}>{label}</Label> : null}
      <Container>
        <InputIconWrapper
          style={{
            border: alertMode
              ? `solid 1px #FF3B30`
              : isFocused
              ? activeBorderColor
              : undefined,
          }}
          className="container"
        >
          {type === "password" ? (
            <Button
              Icon={Eye}
              type="button"
              onClick={togglePasswordVisibility}
            />
          ) : null}

          <Input
            {...props}
            onBlur={() => {
              setIsFocused(false);
            }}
            onFocus={() => {
              setIsFocused(true);
            }}
            id={inputId}
            style={{ letterSpacing: type === "password" ? `6px` : undefined }}
            placeholder={hint}
            type={
              type === "password"
                ? isPasswordVisible
                  ? "text"
                  : "password"
                : type
            }
          />
          {Icon ? (
            <Button
              Icon={Icon}
              title={iconActionName}
              onClick={iconActionCallback}
            />
          ) : null}
        </InputIconWrapper>
        {alertMode ? <span>{alertMessage}</span> : null}
      </Container>
    </div>
  );
}

export default memo(InputComponent, StyledInput);
