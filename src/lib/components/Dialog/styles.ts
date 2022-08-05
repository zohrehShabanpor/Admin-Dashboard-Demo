import styled from "@emotion/styled/macro";
import { Close } from "_/assets/images";
import { colors } from "_/constants";
import { withStyle } from "_/utilities";

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
  overflow: hidden;
`;

export const Container = styled.div``;

export const Content = styled.div`
  position: relative;
  border-radius: 12px;
  color: #ffffff;
  background-color: ${colors.DarkGunmetal90};
  border: solid 1px ${colors.Platinum60};
  max-height: 85vh;
`;

export const Header = styled.div``;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 30px 35px;
  flex-direction: column;
  border-radius: 12px;
`;

export const Container2 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(3px);
  border-radius: 12px;
`;
