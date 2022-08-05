import styled from "@emotion/styled/macro";

import { Button } from "#";
import { colors } from "_/constants";

export const Input = styled.input`
  height: 100%;
  width: 100%;
  flex-grow: 1;
  border: unset;
  color: ${colors.Platinum60};
  background-color: ${colors.DarkGunmetal100};

  font-size: 10px;
  font-weight: 400;

  ::placeholder {
    font-size: 10px;
    color: ${colors.Platinum60};
    letter-spacing: normal !important;
  }

  &:autofill {
    background-color: ${colors.DarkGunmetal100}!important;
  }
  &:-webkit-autofill {
    background-color: ${colors.DarkGunmetal100}!important;
  }
  &:focus {
    border: unset;
    outline: none;
  }
`;

export const InputIconWrapper = styled.div`
  padding: 3px 8px;
  width: 130px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;

  border-radius: 12px;
  border: none;
  background-color: ${colors.DarkGunmetal100};

  & svg {
    & path {
      fill: ${colors.Platinum60};
    }
  }

  &:focus-within {
    outline: none;
  }
`;

export const Label = styled.label`
  margin-bottom: 8px;
  color: ${colors.Platinum100};
  font-size: 14px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  & span {
    font-weight: 400;
    font-size: 10px;
    color: ${colors.CoralRed100};
  }
`;

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;

  & button {
    & svg {
      width: 12px;
      height: 12px;
      & path {
        fill: ${colors.Platinum60};
      }
    }
  }
`;
