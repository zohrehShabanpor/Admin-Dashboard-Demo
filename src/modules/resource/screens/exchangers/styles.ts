import styled from "@emotion/styled/macro";
import { withStyle } from "_/utilities";
import { Avatar } from "#";

export const Logo = withStyle(
  Avatar,
  styled("div")`
    width: 60px;
    height: 60px;

    margin: 8px 0;

    @media (max-width: 576px) {
      width: 30px;
      height: 30px;
    }
  `
);

export const Container = styled.div`
  display: grid;
  width: 100%;
  padding: 12px 32px 12px 20px;

  grid-template-areas:
    "table table table"
    "table table table";
`;
