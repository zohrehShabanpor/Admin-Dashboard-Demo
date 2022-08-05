import React, { useEffect, useState } from "react";
import { memo } from "_/utilities/memo";
import { Star } from "_/assets/images";
import { MoreMenu, TableCard } from "#";
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
    <>
      <TableCard
        onCurrentPageChange={setCurrentPage}
        onRowPerPageChange={setRowPerPage}
        gridArea="trader-table"
        title="Traders"
        icon={<Star />}
        column={["Photo", "Rank", "Username", "Follower", "Following", "Tools"]}
        hasSearch={false}
        bodyData={data?.map((item, index) => {
          const { username, email, number, rank } = item;
          const key = uuid();

          return (
            <tr key={key}>
              <td>
                <span className="container">
                  <Logo imageUrl={""} />
                </span>
              </td>
              <td>
                <span className="container">{rank || "-"}</span>
              </td>
              <td>
                <span className="container">{username}</span>
              </td>
              <td>
                <span className="container">23</span>
              </td>
              <td>
                <span className="container">12</span>
              </td>
              <td>
                <span className="container">
                  <MoreMenu modalId="viewMoreTrader" onView={() => {}} />
                </span>
              </td>
            </tr>
          );
        })}
      />
    </>
  );
}

export default memo(TraderTable);
