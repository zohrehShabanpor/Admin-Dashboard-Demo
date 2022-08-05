import React, { useState, useMemo, useEffect, useCallback } from "react";
import { memo } from "_/utilities/memo";
import { Arrow } from "_/assets/images";
import { TableCard } from "#";
import { Logo } from "./styles";
import { uuid } from "_/utilities";
import { trader, useTraderStore } from "store/topTraders";

function TraderTable(): React.ReactElement {
  const [data, setData] = useState<Array<trader>>();
  const traderStore = useTraderStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);

  useEffect(() => {
    setData(traderStore.topTraders);
  }, [traderStore]);

  return (
    <TableCard
      gridArea="trader-table"
      title="Traders"
      icon={<Arrow />}
      onCurrentPageChange={setCurrentPage}
      onRowPerPageChange={setRowPerPage}
      hasSearch={false}
      column={["", "Photo", "Username", "Rank", "Phone n."]}
      bodyData={data?.map((item, index) => {
        const { username, email, number, rank } = item;
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
              <span className="container">
                <Logo imageUrl={""} />
              </span>
            </td>
            <td>
              <span className="container">{username}</span>
            </td>
            <td>
              <span className="container">{rank}</span>
            </td>
            <td>
              <span className="container">{number}</span>
            </td>
          </tr>
        );
      })}
    />
  );
}

export default memo(TraderTable);
