import React from "react";
import { Link } from "react-router-dom";
import { memo } from "_/utilities/memo";
import { breakPoints } from "_/utilities";
import { MessageBox } from "#";
import { StyledNavigationBarItem, Text } from "./styles";
import { MessageBoxResponse } from "_/components/MessageBox";

export interface NavigationBarItem {
  id: string;
  url: string;
  text: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export interface Props {
  className?: string;
  item: NavigationBarItem;
  isActive?: boolean;
}

function NavigationBarItemComponent({
  className,
  item,
  isActive,
}: Props): React.ReactElement {
  const isLogout = item.url === "logout";

  return (
    <>
      <MessageBox
        question="Do you want to Log Out ?"
        activeItem="Log Out"
        getResponse={(data) => {
          if (data === MessageBoxResponse.Yes) {
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            localStorage.removeItem("role");
            window.location.reload();
          }
        }}
        id="logoutBox"
      />
      <div
        data-bs-toggle="modal"
        data-bs-target={isLogout ? "#logoutBox" : ""}
        role="button"
        style={
          isLogout && window.innerWidth <= breakPoints["xSmall"]
            ? { display: `none` }
            : undefined
        }
        onKeyPress={() => {}}
        className={className}
        title={item.text}
        tabIndex={-1}
      >
        <Link to={isLogout ? "#" : "/" + item.url}>
          <item.Icon />
          <Text>{item.text}</Text>
        </Link>
      </div>
    </>
  );
}

export default memo(NavigationBarItemComponent, StyledNavigationBarItem);
