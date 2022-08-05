import React, {useCallback} from 'react';
import {useMemo} from 'react';
import {uuid} from '_/utilities';
import {memo} from '_/utilities/memo';

import {StyledSwitch, Label, Input, SwitchItem, ActiveOverlay, SwitchItemsWrapper} from './styles';



type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  checked: boolean;
  onChange: (checked: boolean) => void;
} & (
  {
    label: string;
    labels: [string, string];
  } |
  {
    label: string;
    labels?: undefined;
  } |
  {
    label?: undefined;
    labels: [string, string];
  }
)

function SwitchComponent({className, checked, label, labels, onChange, ...props}: Props): React.ReactElement {
  const inputId = useMemo(() => uuid(), []);
  
  const handleClick = useCallback(() =>{
    // TODO: onChecked should be called by the input directly
    onChange(!checked);
  }, [onChange, checked]);

  const handleKeyPress = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === ' ') {
      onChange(!checked);
    }
  }, [onChange, checked]);

  return(
    // TODO: improve accessiblity
    <div className={className} role='button' tabIndex={0} onClick={handleClick} onKeyPress={handleKeyPress}>
      {label
        ? <Label htmlFor={inputId}>
          {label}
        </Label>
        : null}
      {/* TODO: provided onChange */}
      <Input
        {...props}
        checked={checked}
        id={inputId}
        type='checkbox'
      /> 
      <SwitchItemsWrapper>
        <ActiveOverlay/>
        <SwitchItem isActive={checked}>{labels ? labels[0] : null}</SwitchItem>
        <SwitchItem isActive={!checked}>{labels ? labels[1] : null}</SwitchItem>
      </SwitchItemsWrapper>
    </div>
  );
};

export default memo(SwitchComponent, StyledSwitch);

