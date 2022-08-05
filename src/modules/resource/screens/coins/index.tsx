import React, { useState, useMemo, useEffect } from "react";
import { memo } from "_/utilities/memo";
import { Coin } from "_/assets/images";
import { MoreMenu, TableCard } from "#";
import { Container, Logo, Toggle } from "./styles";
import { uuid } from "_/utilities";
import { MessageBoxResponse } from "_/components/MessageBox";
import { MessageBox } from "_/components";
import { coin, useCoinStore } from "store/coin";

interface Props {
  className?: string;
}

function CoinsComponent({ className }: Props): React.ReactElement {
  const [coins, setCoins] = useState<Array<coin>>();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(15);
  const [search, setSearch] = useState("");
  const coinStore = useCoinStore();

  useEffect(() => {
    setCoins(coinStore.coins);
  }, [coinStore]);

  useMemo(() => {
    if (search) setCoins(coins?.filter((e) => e.name.includes(search)));
    else setCoins(coinStore.coins);
  }, [search]);

  return (
    <Container>
      <TableCard
        gridArea="table"
        title="Coins"
        icon={<Coin />}
        getSearch={(query) => setSearch(query)}
        plusModalTarget="coinAddModal"
        hasPlus={true}
        search={search}
        column={["", "Name", "Logo", "Symbol", "Source", "Tools"]}
        bodyData={coins?.map((item, index) => {
          const { name, symbol, source } = item;
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
                <span className="container">{name}</span>
              </td>
              <td>
                <span className="container">
                  <Logo imageUrl={""} />
                </span>
              </td>
              <td>
                <span className="container">{symbol}</span>
              </td>
              <td>
                <span className="container">
                  <Toggle
                    onChange={() => {}}
                    type="checkbox"
                    checked={source}
                  />
                </span>
              </td>
              <td>
                <span className="container">
                  <MoreMenu modalId="" />
                </span>
              </td>
            </tr>
          );
        })}
        onCurrentPageChange={setCurrentPage}
        onRowPerPageChange={setRowPerPage}
      />
    </Container>
  );
}

export default memo(CoinsComponent);
