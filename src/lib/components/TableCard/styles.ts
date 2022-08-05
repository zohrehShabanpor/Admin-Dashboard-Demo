import styled from "@emotion/styled/macro";
import { withStyle } from "_/utilities";
import { colors } from "_/constants";

import { Table as table, TextInput } from "#";

export const Table = withStyle(
  table,
  styled("div")`
    padding: 0 20px;
    overflow-y: scroll !important;
    flex-grow: 1;
  `
);

export const TableRow = styled.tr`
  height: 50px;
  &:hover {
    background-color: #444d54;
  }
`;

export const Container = styled.div`
  background-color: ${colors.DarkGunmetal90};
  border-radius: 10px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  overflow: hidden;
`;
