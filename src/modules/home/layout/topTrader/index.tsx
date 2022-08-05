import React, { useState, useEffect } from "react";
import { memo } from "_/utilities/memo";
import { Star } from "_/assets/images";
import { TableCard } from "#";
import { Logo } from "./styles";
import { uuid } from "_/utilities";
import { trader, useTraderStore } from "store/topTraders";

function TopTraderTableComponent(): React.ReactElement {
  const [data, setData] = useState<Array<trader>>();
  const traderStore = useTraderStore();

  useEffect(() => {
    setData(traderStore.topTraders);
  }, [traderStore]);

  return (
    <TableCard
      gridArea="traders-table"
      title="Top Traders"
      icon={<Star />}
      hasSearch={false}
      column={["Profile", "Username", "Phone n.", "Rank"]}
      bodyData={data?.map((item) => {
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
              <span className="container">{username}</span>
            </td>
            <td>
              <span className="container">{number}</span>
            </td>
            <td>
              <span className="container">{rank}</span>
            </td>
          </tr>
        );
      })}
    />
  );
}

export default memo(TopTraderTableComponent);
