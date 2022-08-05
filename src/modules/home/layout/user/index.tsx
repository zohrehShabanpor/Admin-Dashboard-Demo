import React, { useState, useMemo, useEffect } from "react";
import { memo } from "_/utilities/memo";
import { Users } from "_/assets/images";
import { TableCard } from "#";
import { uuid } from "_/utilities";
import { headerJustify } from "_/components/SearchContainer";
import { user, useUserStore } from "store/users";

function UserTableComponent(): React.ReactElement {
  const [users, setUsers] = useState<Array<user>>();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);
  const userStore = useUserStore();

  useEffect(() => {
    setUsers(userStore.users);
  }, [userStore]);

  return (
    <TableCard
      gridArea="users-table"
      headerItemsPlacement={headerJustify.spaceBetween}
      title="Users"
      icon={<Users />}
      column={["Username", "Email", "Phone n.", "Device"]}
      hasSearch={false}
      bodyData={users?.map((item) => {
        const { username, email, number, device } = item;
        const key = uuid();

        return (
          <tr key={key}>
            <td>
              <span className="container">{username}</span>
            </td>
            <td>
              <span className="container">{email || "-"}</span>
            </td>
            <td>
              <span className="container">{number || "-"}</span>
            </td>
            <td>
              <span className="container">{device || "-"}</span>
            </td>
          </tr>
        );
      })}
      onCurrentPageChange={setCurrentPage}
      onRowPerPageChange={setRowPerPage}
    />
  );
}

export default memo(UserTableComponent);
