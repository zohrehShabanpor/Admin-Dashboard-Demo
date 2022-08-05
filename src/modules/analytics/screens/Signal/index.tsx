import React, { useState, useMemo, useEffect } from "react";
import { memo } from "_/utilities/memo";
import TraderTable from "./layout/Trader";
import SignalTable from "./layout/Signal";
import Chart from "./layout/Chart";
import { SignalTag, MainColumn } from "./styles";
import { useSignalStore } from "store/signal";

interface Props {
  className?: string;
}

function SignalAnalyticsComponent({ className }: Props): React.ReactElement {
  const [items, setItems] = useState({
    achieved: 0,
    failed: 0,
    inProgress: 0,
    open: 0,
    expired: 0,
    total: 0,
  });
  const [signalData, setSignalData] = useState();
  const [totalCount, setTotalCount] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);
  const signalStore = useSignalStore();

  useEffect(() => {
    setItems({
      achieved: signalStore.passSignalsCount,
      failed: signalStore.lossSignalsCount,
      inProgress: signalStore.progressSignalsCount,
      open: signalStore.openSignalsCount,
      expired: signalStore.expiredSignalsCount,
      total: signalStore.signals.length,
    });
  }, [signalStore]);

  return (
    <MainColumn>
      <SignalTag
        gridArea="signal-total"
        title="Total Signal"
        value={items.total}
      />
      <SignalTag
        gridArea="signal-open"
        title="Total Open Signal"
        value={items.open}
      />
      <SignalTag
        gridArea="signal-pass"
        title="Total Pass Signal"
        value={items.achieved}
      />
      <SignalTag
        gridArea="signal-progress"
        title="Total In Progress Signal"
        value={items.inProgress}
      />
      <SignalTag
        gridArea="signal-loss"
        title="Total Loss Signal"
        value={items.failed}
      />
      <SignalTag
        gridArea="signal-expired"
        title="Total Expired Signal"
        value={items.failed}
      />
      <TraderTable />
      <SignalTable
        current={currentPage}
        row={rowPerPage}
        totalCount={totalCount}
        onCurrentPageChange={setCurrentPage}
        onRowPerPageChange={setRowPerPage}
        loading={false}
        data={signalData}
      />
      <Chart />
    </MainColumn>
  );
}

export default memo(SignalAnalyticsComponent);
