import styled from '@emotion/styled/macro';


export const SwitchItem = styled.span<{isActive: boolean}>`
  display: flex;
  z-index:1;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 8px 16px;
  height: 100%;
  color: ${({theme, isActive}): string => isActive ? theme.colors.white : theme.colors.grayedButtonText};
  user-select: none;
`;

export const SwitchItemsWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
`;

export const ActiveOverlay = styled.div`
  opacity: 0.5;
  position: absolute;
  top: 4px;
  bottom: 4px;
  right: 4px;
  /* half of the whole switch component which is 100% - [total horizontal margin] */
  width: calc(50% - 4px);
  border: unset;
  border-radius: 5px;
  background: ${({theme}): string => theme.colors.inputBackground};
  transition: 0.2s;
`;

export const Input = styled.input`
  visibility: hidden;
  position: absolute;
  width: 0;
  height: 0;
  margin: 0;

  :checked + ${SwitchItemsWrapper} {
    ${ActiveOverlay} {
      right: unset;
      left: 4px;
    }
  }
`;

export const Label = styled.label``;

export const StyledSwitch = styled.div`
  background-color: ${({theme}): string => theme.colors.toggleBackground};
  width: max-content;
  cursor: pointer;
`;
