import React, { useState, useEffect, useMemo } from "react";
import { memo } from "_/utilities/memo";
import { Arrow } from "_/assets/images";
import { TableCard, Avatar } from "#";
import { uuid } from "_/utilities";
import { headerJustify } from "#/SearchContainer";
import { exchanger, useExchangerStore } from "store/exchangers";

interface Props {
  className?: string;
}
function ExchangerTableComponent({ className }: Props): React.ReactElement {
  const [exchangers, setExchangers] = useState<Array<exchanger>>();
  const exchangerStore = useExchangerStore();

  useEffect(() => {
    setExchangers(exchangerStore.exchangers);
  }, [exchangerStore]);

  return (
    <TableCard
      headerItemsPlacement={headerJustify.spaceBetween}
      gridArea="exchangers-table"
      title="Exchangers"
      icon={<Arrow />}
      column={["Logo", "Name", "API verify", "Enable"]}
      hasSearch={false}
      bodyData={exchangers?.map((item, index) => {
        const { username, verify, enable } = item;
        const key = uuid();

        return (
          <tr key={key}>
            <td>
              <span className="container">
                <Avatar imageUrl={""} />
              </span>
            </td>
            <td>
              <span className="container">{username}</span>
            </td>
            <td>
              <span className="container">{verify}</span>
            </td>
            <td>
              <span className="container">{enable}</span>
            </td>
          </tr>
        );
      })}
    />
  );
}

export default memo(ExchangerTableComponent);
