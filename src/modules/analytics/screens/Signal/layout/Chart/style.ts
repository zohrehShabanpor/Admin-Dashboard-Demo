import styled from "@emotion/styled/macro";
import { withStyle } from "_/utilities";
import ReactEcharts from "echarts-for-react";
import { Card, Table, Chart, TextInput, Button, Select } from "#";
import { colors } from "_/constants";

export const UserChart = withStyle(ReactEcharts, styled("div")``);

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

export const DateSelect = withStyle(
  Select,
  styled.select`
    @media (max-width: 576px) {
      width: 100%;
    }
  `
);

export const DateSelectContainer = styled.div`
  background-color: ${({ theme }): string => theme.colors.grayedButtonHover};
  padding: 0 16px;
  margin-right: 20px;
  border-radius: 5px;

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

export const SearchContainer = styled.div`
  display: flex;
  @media (max-width:576px){
    flex-direction:column;
  align-items: start; 
  padding: 0 10px;
  }
  justify-content: space-between;
  align-items: center; 
  color:#ffffff;
  & svg {
    margin: 0 5px;
    & path {
        stroke: #ffffff; 
        fill : #ffffff;
      },
    },
`;

export const ChartContainer = styled.div`
  border-radius: 10px;
  grid-area: chart-section;
  padding: 12px;
  @media (max-width: 576px) {
    height: 155vw;
  }
  background-color: ${colors.DarkGunmetal90};
  height: 100%;
  & > * {
  }
`;
