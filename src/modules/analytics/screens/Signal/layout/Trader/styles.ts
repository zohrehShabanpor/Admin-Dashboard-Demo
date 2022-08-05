import styled from "@emotion/styled/macro";
import { withStyle } from "_/utilities";
import { Avatar } from "#";

export const Logo = withStyle(
  Avatar,
  styled("div")`
    width: 60px;
    height: 60px;
    margin: 8px 0;
    padding: 0 !important;
    @media (max-width: 576px) {
      width: 30px;
      height: 30px;
    }
  `
);
