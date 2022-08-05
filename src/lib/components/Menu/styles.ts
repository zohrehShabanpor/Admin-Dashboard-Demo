import styled from "@emotion/styled/macro";

export const Body = styled.ul`
  background-color: ${({ theme }): string => theme.colors.grayedButtonHover};
  padding: 10px 20px;
  border-radius: 15px;
  .dropdown-item {
    background-color: ${({ theme }): string =>
      theme.colors.grayedButtonHover}!important;
  }
`;

export const Item = styled.li`
  padding: 5px;
  cursor: pointer;
`;

export const Container = styled.div`
  & * {
    color: #ffffff !important;
  }
`;

export const Icon = styled.span`
  padding-right: 10px;
`;

export const StyledResource = styled.div`
  display: flex;
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }): string => theme.colors.buttonText};
`;
