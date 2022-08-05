import styled from "@emotion/styled/macro";

import { withStyle } from "_/utilities";
import { Avatar } from "#";

export const Logo = withStyle(
  Avatar,
  styled("div")`
    width: 28px;
    height: 28px;
    padding: 0 !important;

    margin: 8px 0;
    @media (max-width: 576px) {
      width: 30px;
      height: 30px;
    }
  `
);
