import React, { useState } from "react";
import { memo } from "_/utilities/memo";
import TraderTable from "./layout/Trader";
import ViewerTable from "./layout/Viewer";
import Tags from "./layout/Tags";
import { MainColumn } from "./styles";

interface Props {
  className?: string;
}

function UserAnalytics({ className }: Props): React.ReactElement {
  return (
    <MainColumn>
      {/* <Tags /> */}
      <TraderTable />
      <ViewerTable />
    </MainColumn>
  );
}

export default memo(UserAnalytics);
