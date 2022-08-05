import styled from '@emotion/styled/macro';


export const StyledVerificationInput = styled.div`
  & input {
    width: 56px ;
    height: 56px;
    border: solid 1px ${({theme}): string => theme.colors.inputBorder};
    border-radius: 5px;
    color: ${({theme}): string => theme.colors.inputText};
    font-size: 20px;
    text-align: center;
    background-color: ${({theme}): string => theme.colors.inputBackground};

    &:focus{
      border: solid 1px ${({theme}): string => theme.colors.inputText};
      outline: none;
    }
  }
`;
