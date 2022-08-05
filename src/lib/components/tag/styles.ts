import styled from "@emotion/styled/macro";

import { Props } from ".";
import { colors } from "_/constants";

export const Value = styled.div`
  color: ${colors.Sunray100};
  font-weight: 700;
  font-size: 18px;
`;

export const Title = styled.div`
  color: ${colors.Platinum100};
  font-weight: 400;
  font-size: 13px;
`;

export const Container = styled.div`
  background-color: ${colors.DarkGunmetal90};
  display: flex;
  align-items: center;
  justify-content: start;
  column-gap: 13px;

  border-radius: 8px;
  height: 100%;
  padding: 10px;
`;
