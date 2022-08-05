import styled from "@emotion/styled/macro";
import { withStyle } from "_/utilities";

import { Tag } from "#";

export const SignalTag = withStyle(Tag, styled.div``);

export const MainColumn = styled.div`
  display: grid;
  width: 100%;
  padding: 12px 32px 12px 20px;
  overflow-y: hidden;

  grid-template-areas:
    "signal-total signal-open signal-pass signal-progress signal-loss signal-expired"
    "trader-table trader-table trader-table signal-table signal-table signal-table"
    "trader-table trader-table trader-table chart-section chart-section chart-section";

  grid-template-rows: 0fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  grid-row-gap: 10px;
  grid-column-gap: 10px;
`;
