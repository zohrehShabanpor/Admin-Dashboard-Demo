import React, { useState, useMemo } from "react";
import { memo } from "_/utilities/memo";
import { UserTag } from "./styles";

interface Props {
  className?: string;
}

function Tags(): React.ReactElement {
  const [totalViewerCount, setTotalViewerCount] = useState(0);
  const [totalTraderCount, setTotalTraderCount] = useState(0);

  return (
    <>
      <UserTag
        gridArea="viewer-count"
        title="Total Viewer :"
        value={totalViewerCount}
      />
      <UserTag
        gridArea="trader-count"
        title="Total Trader :"
        value={totalTraderCount}
      />
    </>
  );
}

export default memo(Tags);
