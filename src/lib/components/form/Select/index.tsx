import React, { useEffect, useState, useRef, useMemo } from "react";
import { Eye } from "_/assets/images";
import { uuid } from "_/utilities";
import { memo } from "_/utilities/memo";

import {
  Container,
  Wrapper,
  Label,
  Select,
  Arrow,
  Option,
  OptionContainer,
  Container2,
} from "./styles";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  onChange?: any;
  value?: any;
  radius?: number;
  paddingLeft?: number;
  disabled?: boolean;
  items?: { text: string; tag?: any }[];
}

function InputComponent({
  className,
  label,
  value,
  onChange,
  disabled = false,
  radius = 5,
  paddingLeft = 8,
  items = [{ text: "Empty" }],
}: Props): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<
    { text: string; tag: number } | undefined
  >(undefined);
  const selectRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!value) return;
    onChange(value);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (selectRef?.current && !selectRef?.current?.contains(event?.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  useMemo(() => {
    setSelected(value);
  }, [value]);

  return (
    <Wrapper ref={selectRef} className={className}>
      {label ? <span className="label">{label}</span> : null}
      <Container className="select-container">
        <Select
          className="select"
          style={{
            borderRadius: isOpen
              ? `${radius}px ${radius}px 0 0`
              : `${radius}px`,
            paddingLeft: `${paddingLeft}px`,
          }}
          onClick={() => {
            if (disabled) return;
            setIsOpen(!isOpen);
          }}
        >
          {selected?.text}
        </Select>
        {isOpen ? (
          <Container2>
            {items?.map((item: any, index: any) => {
              const key = uuid();
              return (
                <OptionContainer
                  key={key}
                  style={{
                    bottom: `-${25 * (index + 1)}px`,
                  }}
                >
                  <Option
                    style={{
                      paddingLeft: `${paddingLeft}px`,
                    }}
                    onClick={() => {
                      setIsOpen(false);
                      if (!item) return;
                      onChange(item);
                    }}
                  >
                    {item.text}
                  </Option>
                </OptionContainer>
              );
            })}
          </Container2>
        ) : null}
        <Arrow />
      </Container>
    </Wrapper>
  );
}

export default memo(InputComponent);
