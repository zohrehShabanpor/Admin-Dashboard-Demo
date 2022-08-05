import React, {useEffect, useState} from 'react';
import {memo} from '_/utilities/memo';

import {StyledVerificationInput} from './styles';


interface Props{
  className?: string;
  value: number
}

function VerificationInputComponent({className, value}:Props):React.ReactElement{

  const [showPassword, setShowPassword] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setShowPassword(false);
    }, 2000);
  }, [value]);

  return(
    <div className={className}>
      <input type={showPassword ? 'text' : 'password'}
        value={value}
      />
    </div>
  );
}

export default memo(VerificationInputComponent, StyledVerificationInput);
