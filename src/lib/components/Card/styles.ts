import styled from "@emotion/styled/macro";

import { Props } from ".";

export const CardBody = styled.div`
  background-color: ${({ theme }): string => theme.colors.inputBackground};
`;

export const HeaderText = styled.div`
  color: ${({ theme }): string => theme.colors.white};
  font-weight: 500;
  font-size: 16px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 10px;
`;

export const StyledCard = styled.div<Props>`
  border-radius: 5px;
  background-color: ${({ theme }): string =>
    theme.colors.grayedButtonBackground};

  ${({ children }): string => (children == null ? "height: 50px;" : "")}
`;
