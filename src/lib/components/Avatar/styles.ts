import styled from "@emotion/styled/macro";
import { colors } from "_/constants";

export const StyledAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
`;

export const Container = styled.div`
  width: 105px;
  height: 105px;
  display: flex;
  border-radius: 50%;
  background-color: ${colors.DarkGunmetal80};
  align-items: center;
  justify-content: center;
`;
