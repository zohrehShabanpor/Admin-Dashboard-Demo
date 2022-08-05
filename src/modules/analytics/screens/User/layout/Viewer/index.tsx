import React, { useState, useEffect } from "react";
import { memo } from "_/utilities/memo";
import { Users } from "_/assets/images";
import { MoreMenu, TableCard } from "#";
import { Logo } from "./styles";
import { uuid } from "_/utilities";
import { user, useUserStore } from "store/users";

interface Props {
  className?: string;
}

function SignalTable({ className }: Props): React.ReactElement {
  const [users, setUsers] = useState<Array<user>>();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);
  const userStore = useUserStore();

  useEffect(() => {
    setUsers(userStore.users);
  }, [userStore]);

  return (
    <>
      <TableCard
        gridArea="viewer-table"
        title="Viewer"
        onCurrentPageChange={setCurrentPage}
        onRowPerPageChange={setRowPerPage}
        icon={<Users />}
        column={["Photo", "Username", "Follower", "Following", "Tools"]}
        hasSearch={false}
        bodyData={users?.map((item, index) => {
          const { username, email, number, device } = item;
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
                <span className="container">{12}</span>
              </td>
              <td>
                <span className="container">{5}</span>
              </td>
              <td>
                <span className="container">
                  <MoreMenu modalId="" onView={() => {}} />
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
