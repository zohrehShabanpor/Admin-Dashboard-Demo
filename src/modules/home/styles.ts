import styled from "@emotion/styled/macro";
import { colors } from "_/constants";

export const MainColumn = styled.div`
  display: grid;
  width: 100%;

  min-height: 0; /* NEW */
  min-width: 0;
  grid-template-areas:
    "tags tags tags tags tags"
    "users-table users-table users-table traders-table traders-table"
    "exchangers-table exchangers-table users-chart users-chart users-chart";

  grid-template-rows: 0fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  grid-row-gap: 8px;
  grid-column-gap: 8px;

  @media (max-width: 576px) {
    display: block;
    padding: 0 15px;
    width: 100vw;

    & > div {
      margin-top: 15px;
    }
  }
`;

export const StyledHome = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 32px 12px 20px;
  background-color: ${colors.DarkGunmetal100};
  @media (max-width: 576px) {
    padding: 0;
  }
`;
