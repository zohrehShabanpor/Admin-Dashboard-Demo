import styled from "@emotion/styled/macro";
import { colors } from "_/constants";
import { ArrowDown } from "_/assets/images";
import { withStyle } from "_/utilities";

export const Select = styled.div`
  font-size: 10px;
  font-weight: 400;
  color: ${colors.Platinum100};
  background-color: ${colors.DarkGunmetal100};
  height: 100%;
  width: 100%;
  user-select: none;

  flex-grow: 1;
  padding: 3px 26px 3px 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: none;

  & svg {
    & path {
      fill: ${colors.DarkGunmetal100};
    }
  }
`;

export const Label = styled.label`
  margin-bottom: 8px;
  color: ${colors.Platinum100};
  font-size: 14px;
`;

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 90px;
  height: 34px;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute !important;
  padding: 0 0 5px;
  z-index: 100;
  top: 34px;
  border-radius: 0 0 5px 5px;
  background-color: ${colors.DarkGunmetal100};
`;

export const Option = styled.div`
  background-color: ${colors.DarkGunmetal100};
  color: ${colors.Platinum100};
  width: calc(100% - 16px);
  height: 100%;
  font-size: 10px;
  display: flex;
  align-items: center;
  border-radius: 0 4px 4px 0;
  padding: 6px 8px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${colors.DarkGunmetal85};
  }
`;

export const OptionContainer = styled.div`
  width: 100%;
`;

export const Arrow = withStyle(
  ArrowDown,
  styled.div`
    position: absolute;
    right: 8px;
  `
);
