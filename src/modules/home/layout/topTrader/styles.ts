import styled from "@emotion/styled/macro";
import { Avatar } from "_/components";
import { withStyle } from "_/utilities";

export const Logo = withStyle(
  Avatar,
  styled("div")`
    padding: 0;
  `
);
