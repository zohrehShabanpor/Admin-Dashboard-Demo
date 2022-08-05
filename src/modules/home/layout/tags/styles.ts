import styled from "@emotion/styled/macro";
import { withStyle } from "_/utilities";

import { Tag } from "#";

export const ActiveUsersCard = withStyle(
  Tag,
  styled("div")`
    grid-area: total-active-users;
  `
);

export const TotalOrdersCard = withStyle(
  Tag,
  styled("div")`
    grid-area: total-orders;
  `
);

export const TotalUsersCard = withStyle(
  Tag,
  styled("div")`
    grid-area: total-users;
  `
);

export const TotalUsersCard2 = withStyle(
  Tag,
  styled("div")`
    grid-area: total-users2;
  `
);

export const OpenOrdersCard = withStyle(
  Tag,
  styled("div")`
    grid-area: open-orders;
  `
);

export const RegisteredCoin = withStyle(
  Tag,
  styled("div")`
    grid-area: registered-coin;
  `
);
export const AllRegisterExchange = withStyle(
  Tag,
  styled("div")`
    grid-area: register-exchange;
  `
);

export const Tags = styled.div`
  grid-area: tags;
  display: grid;
  width: 100%;
  padding: 0 0 12px;

  grid-template-areas:
    "total-active-users total-orders total-users registered-coin register-exchange"
    "total-active-users total-orders total-users registered-coin register-exchange";

  grid-template-columns: auto auto auto auto;

  grid-column-gap: 16px;

  @media (max-width: 576px) {
      display: flex;
      flex-direction: column;
      margin-top:10px!important;
      margin-bottom:5px;

      & > *{
        margin-bottom: 7px;
        display: flex;
        align-items:center;
        font-size:small;
      }
    },
`;
