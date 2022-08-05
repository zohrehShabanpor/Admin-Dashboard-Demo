import React, { useState, useMemo, useEffect } from "react";
import { memo } from "_/utilities/memo";
import { Users } from "_/assets/images";
import { uuid } from "_/utilities";
import { MoreMenu, TableCard } from "#";
import { Container } from "./styles";
import { roleEnum } from "_/utilities";
import { headerJustify } from "_/components/SearchContainer";
import { user, useUserStore } from "store/users";

interface Props {
  className?: string;
}

function UsersComponent({ className }: Props): React.ReactElement {
  const [users, setUsers] = useState<Array<user>>();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);
  const userStore = useUserStore();

  useEffect(() => {
    setUsers(userStore.users);
  }, [userStore]);

  useMemo(() => {
    if (search) setUsers(users?.filter((e) => e.username.includes(search)));
    else setUsers(userStore.users);
  }, [search]);

  return (
    <Container>
      <TableCard
        headerItemsPlacement={headerJustify.spaceBetween}
        gridArea="table"
        onCurrentPageChange={setCurrentPage}
        onRowPerPageChange={setRowPerPage}
        title="Users"
        icon={<Users />}
        getSearch={(query) => setSearch(query)}
        hasPlus={false}
        search={search}
        column={["", "UserName", "Role", "Email", "Phone", "Enable", "Tools"]}
        bodyData={users?.map((item, index) => {
          const { username, email, number, device } = item;
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
                <span className="container">{username}</span>
              </td>
              <td>
                <span className="container">unknown</span>
              </td>
              <td>
                <span className="container">{email}</span>
              </td>
              <td>
                <span className="container">{number}</span>
              </td>
              <td>
                <span className="container">-</span>
              </td>
              <td>
                <span className="container">
                  <MoreMenu modalId="" />
                </span>
              </td>
            </tr>
          );
        })}
      />
    </Container>
  );
}

export default memo(UsersComponent);
