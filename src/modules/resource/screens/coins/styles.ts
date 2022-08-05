import styled from "@emotion/styled/macro";
import { withStyle } from "_/utilities";
import { Avatar, Table, Chart, TextInput, Switch } from "#";

export const Toggle = styled.input`
  width: 20px;
  height: 20px;
  @media (max-width: 576px) {
    width: 15px;
    height: 15px;
  }
`;

export const Logo = withStyle(
  Avatar,
  styled("div")`
    width: 60px;
    height: 60px;
    background-color: white;
    margin: 8px 0;
    @media (max-width: 576px) {
      width: 30px;
      height: 30px;
    }
  `
);

export const Container = styled.div`
  display: grid;
  width: 100%;
  padding: 12px 32px 12px 20px;

  grid-template-areas:
    "table table table"
    "table table table";
`;
