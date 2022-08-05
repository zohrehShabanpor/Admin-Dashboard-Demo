import styled from "@emotion/styled/macro";

import { Props } from ".";

export const Table = styled.table`
  color: white;
  background-color: ${({ theme }): string => theme.colors.inputBackground};
  height: 100%;
  width: 100%;
`;

export const TableHead = styled.thead`
  background-color: #44463e;
`;

export const TableCell = styled.td`
  text-align: center;
  padding: 15px 10px;
  background-color: ${({ theme }): string => theme.colors.error};
`;

export const TableBody = styled.tbody``;
export const TableRow = styled.tr`
  &:hover {
    background-color: #444d54;
  }
`;

export const CardBody = styled.div`
  background-color: ${({ theme }): string => theme.colors.inputBackground};
`;

export const HeaderText = styled.div`
  color: ${({ theme }): string => theme.colors.white};
  font-weight: 700;
  font-size: 18px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 16px;
`;

export const StyledTable = styled.div<Props>`
  border-radius: 5px;
  background-color: ${({ theme }): string =>
    theme.colors.grayedButtonBackground};
`;
//   ${({ children }): string => (children == null ? "height: 56px;" : "")}
