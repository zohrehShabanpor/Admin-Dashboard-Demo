import styled from "@emotion/styled/macro";
import { withStyle } from "_/utilities";
import { Table } from "#";

export const ExchangersTable = withStyle(
  Table,
  styled("div")`
    overflow-y: scroll;
    flex: 1;
    width: 100%;
  `
);

export const ExchangerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }): string => theme.colors.inputBackground};
  @media (max-width: 576px) {
    height: fit-content;
  }
`;

export const Container = styled.div`
  display: grid;
  width: 100%;
  padding: 12px 32px 12px 20px;

  grid-template-areas:
    "table table table"
    "table table table";
`;
