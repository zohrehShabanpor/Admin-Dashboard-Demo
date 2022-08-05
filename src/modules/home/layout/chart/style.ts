import styled from "@emotion/styled/macro";
import { withStyle } from "_/utilities";
import ReactEcharts from "echarts-for-react";
import { Card, Table, Chart, TextInput, Button, Select } from "#";
import { colors } from "_/constants";

export const UserChart = withStyle(
  ReactEcharts,
  styled("div")`
    // width: 100%;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // height: 80% !important;
  `
);

export const IconContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: end;

  @media (max-width: 576px) {
    padding-left: 22px;
  }
`;

export const DateSelectWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    width: 100%;
    flex-direction: row-reverse;
  }
`;

export const DateSelect = withStyle(Select, styled.select``);

export const DateSelectContainer = styled.div`
  padding: 0 4px;
  margin-right: 20px;

  @media (max-width: 576px) {
    flex-grow: 1;
    margin: 0;
  }
`;

export const Input = styled.input`
  width: 170px;
  height: 37px;
  padding: 0 16px;
  border: solid 1px;
  border-radius: 5px;
  color: ${({ theme }): string => theme.colors.inputText};
  font-size: 16px;
  background-color: ${({ theme }): string => theme.colors.inputBackground};
  &:focus {
    // border: unset;
    outline: none;
  }
`;

export const UsersChart = withStyle(
  Chart,
  styled("div")`
    // grid-area: users-chart;
  `
);

export const ChartContainer = styled.div`
  grid-area: users-chart;
  background-color: ${colors.DarkGunmetal90};
  border-radius: 10px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  overflow: hidden;
`;
