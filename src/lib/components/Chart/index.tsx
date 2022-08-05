import React, { useState, useEffect } from "react";
import { memo } from "_/utilities/memo";

import {
  StyledTable,
  CardHeader,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "./styles";

export type Props = {
  className?: string;
  bodyData?: any;
  column?: Array<any>;
};

function ChartComponent({
  className,
  children,
  column,
  bodyData,
}: React.PropsWithChildren<Props>): React.ReactElement {
  return (
    <div className={className}>
      <Table>
        <TableBody>{bodyData}</TableBody>
      </Table>
    </div>
  );
}

export default memo(ChartComponent, StyledTable);
