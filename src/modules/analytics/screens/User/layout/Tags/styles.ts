import styled from "@emotion/styled/macro";
import { withStyle } from "_/utilities";

import { Tag } from "#";

export const UserTag = withStyle(Tag, styled("div")``);

export const MainColumn = styled.div`
  display: grid;
  width: 100%;
  padding: 12px;

  grid-template-areas:
    "viewer-count trader-count viewer-table viewer-table viewer-table"
    "trader-table trader-table viewer-table viewer-table viewer-table"
    "trader-table trader-table viewer-table viewer-table viewer-table";

  grid-template-rows: 0fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  grid-row-gap: 10px;
  grid-column-gap: 10px;

  @media (max-width: 576px) {
    display: block;
    padding: 0 15px;

    & > div {
      height: fit-content;
      margin-top: 20px;
    }
`;
