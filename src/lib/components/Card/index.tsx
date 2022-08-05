import React from 'react';
import {memo} from '_/utilities/memo';

import {StyledCard, CardHeader, HeaderText, CardBody} from './styles';


export type Props = {
  className?: string;
} & (
  {
    headerText : string;
    header?: undefined;
  } |
  {
    headerText?: undefined;
    header: React.ReactNode;
  }
)

function CardComponent({
  className,
  header,
  headerText,
  children,
}: React.PropsWithChildren<Props>): React.ReactElement{
  return(
    <div className={className}>
      <CardHeader>
        {header
          ? {header}
        : <HeaderText>
          {headerText}
        </HeaderText>
      }
      </CardHeader>
      {children 
        ? <CardBody>
          {children}
        </CardBody>
        : null
      }
    </div>
  );
}

export default memo(CardComponent, StyledCard);
