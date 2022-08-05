import React, { useState, useMemo, useEffect } from "react";
import { memo } from "_/utilities/memo";
import { Arrow, Story } from "_/assets/images";
import { MoreMenu, TableCard } from "#";
import { Container, Logo } from "./styles";
import { uuid } from "_/utilities";
import { MessageBox } from "_/components";
import { MessageBoxResponse } from "_/components/MessageBox";
import { exchanger, useExchangerStore } from "store/exchangers";

interface Props {
  className?: string;
}

function ResourceComponent({ className }: Props): React.ReactElement {
  const [exchangers, setExchangers] = useState<Array<exchanger>>();
  const [search, setSearch] = useState("");
  const exchangerStore = useExchangerStore();
  const [selectedRow, setSelectedRow] = useState<exchanger>();

  useEffect(() => {
    setExchangers(exchangerStore.exchangers);
  }, [exchangerStore]);

  useMemo(() => {
    if (search)
      setExchangers(exchangers?.filter((e) => e.username.includes(search)));
    else setExchangers(exchangerStore.exchangers);
  }, [search]);

  return (
    <Container>
      <TableCard
        gridArea="table"
        title="Exchangers"
        icon={<Arrow />}
        getSearch={(query) => setSearch(query)}
        plusModalTarget="exchangerAddModal"
        hasPlus={true}
        search={search}
        column={[
          "",
          "Name",
          "Logo",
          "Country",
          "API verify",
          "Enable",
          "Tools",
        ]}
        bodyData={exchangers?.map((item, index) => {
          const { username, verify, enable } = item;
          const key = uuid();

          return (
            <tr key={key}>
              <td>
                <span className="container">
                  <span className="rowNum">{index + 1}</span>
                </span>
              </td>
              <td>
                <span className="container">{username}</span>
              </td>
              <td>
                <span className="container">
                  <Logo imageUrl={""} />
                </span>
              </td>
              <td>
                <span className="container">Foreign</span>
              </td>
              <td>
                <span className="container">{verify}</span>
              </td>
              <td>
                <span className="container">-</span>
              </td>
              <td>
                <span className="container">
                  <MoreMenu modalId="" deleteBoxId="" />
                </span>
              </td>
            </tr>
          );
        })}
      />
    </Container>
  );
}

export default memo(ResourceComponent);
