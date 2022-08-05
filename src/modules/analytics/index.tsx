import React, { useState } from "react";
import { memo } from "_/utilities/memo";
import { Users, Airdrop } from "_/assets/images";
import { HeaderMenu } from "#";
import { User, Signal } from "./screens/index";

export enum menu {
  user,
  signal,
}

function AnalyticsComponent(): React.ReactElement {
  const [activeItem, setActiveItem] = useState(
    parseInt(localStorage.getItem("analytics") || "0")
  );
  const [Items] = useState([
    { title: "User Analytics", icon: <Users />, item: menu.user },
    { title: "Signal Analytics", icon: <Airdrop />, item: menu.signal },
  ]);

  return (
    <>
      <HeaderMenu
        category="analytics"
        items={Items}
        defaultActiveItem={activeItem}
        getMenuItem={(data) => {
          setActiveItem(data);
        }}
      />
      {activeItem === menu.user ? <User /> : <Signal />}
    </>
  );
}

export default memo(AnalyticsComponent);
