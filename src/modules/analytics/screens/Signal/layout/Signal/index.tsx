import React, { useState, useMemo, useEffect, useCallback } from "react";
import { memo } from "_/utilities/memo";
import { Airdrop } from "_/assets/images";
import { uuid } from "_/utilities";
import { MoreMenu, TableCard } from "#";
import { signalOptions } from "_/utilities";
import { signal, useSignalStore } from "store/signal";
interface Props {
  data: any;
  totalCount: number;
  current: number;
  row: number;
  loading: boolean;
  onCurrentPageChange: Function;
  onRowPerPageChange: Function;
}

function SignalTable({
  data,
  totalCount,
  row,
  current,
  loading,
  onCurrentPageChange,
  onRowPerPageChange,
}: Props): React.ReactElement {
  const [signal, setSignal] = useState<Array<signal>>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowPerPage, setRowPerPage] = useState<number>(5);
  const signalStore = useSignalStore();

  useMemo(() => {
    setCurrentPage(current);
    setRowPerPage(row);
  }, [row, current]);

  useMemo(() => {
    setSignal(data);
  }, [data]);

  useEffect(() => {
    setSignal(signalStore.signals);
  }, [signalStore]);

  return (
    <>
      <TableCard
        onCurrentPageChange={onCurrentPageChange}
        onRowPerPageChange={onRowPerPageChange}
        totalCount={totalCount}
        gridArea="signal-table"
        title={"Signals"}
        icon={<Airdrop />}
        column={["", "Status", "Coin", "User", "Tools"]}
        loading={loading}
        hasSearch={false}
        bodyData={signal?.map((item, index) => {
          const { status, coin, user } = item;
          const key = uuid();

          return (
            <tr key={key}>
              <td>
                <span className="container">
                  <span className="rowNum">
                    {index + 1 + rowPerPage * (currentPage - 1)}
                  </span>
                </span>
              </td>
              <td>
                <span className="container">{status}</span>
              </td>
              <td>
                <span className="container">{coin}</span>
              </td>
              <td>
                <span className="container">{user}</span>
              </td>
              <td>
                <span className="container">
                  <MoreMenu
                    modalId=""
                  />
                </span>
              </td>
            </tr>
          );
        })}
      />
    </>
  );
}

export default memo(SignalTable);
