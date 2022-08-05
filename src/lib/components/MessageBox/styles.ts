import styled from "@emotion/styled/macro";
import { Close } from "_/assets/images";
import { colors } from "_/constants";
import { withStyle } from "_/utilities";
import { Button as Btn } from "./../form";

import { Props } from ".";

export const CloseBtn = withStyle(
  Close,
  styled.span`
    position: absolute;
    top: 22px;
    right: 22px;
    z-index: 100;
    stroke: #ffffff;
    fill: #ffffff;
    width: 10px;
    height: 10px;
  `
);

export const Dialog = styled.div`
  backdrop-filter: blur(5px);
  background: rgba(32, 34, 41, 0.3);
`;

export const Content = styled.div`
  position: relative;
  border-radius: 12px;
  color: #ffffff;
  background-color: ${colors.DarkGunmetal90};
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`;

export const Header = styled.div``;

export const Body = styled.div``;

export const Question = styled.div`
  width: 100%;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 5px;
`;

export const Button = withStyle(
  Btn,
  styled.div`
    width: 130px;
    height: 46px;
    font-weight: 400;
    font-size: 16px;
    color: ${colors.Platinum100};
    background-color: ${colors.DarkGunmetal100};
    &.active {
      background-color: ${colors.CoralRed100};
    }
  `
);
