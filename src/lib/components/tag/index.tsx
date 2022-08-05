import React from "react";
import { memo } from "_/utilities/memo";

import { Container, Title, Value } from "./styles";

export type Props = {
  className?: string;
  title: string;
  value?: number;
  gridArea?: string;
};

function TagComponent({
  title,
  value,
  gridArea,
}: React.PropsWithChildren<Props>): React.ReactElement {
  return (
    <Container style={{ gridArea: `\`${gridArea}\`` }}>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Container>
  );
}

export default memo(TagComponent);
