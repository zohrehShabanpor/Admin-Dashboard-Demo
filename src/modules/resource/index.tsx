import React, { useState } from "react";
import { memo } from "_/utilities/memo";
import { Users, Coin as Coins, Exchanger as Exchangers } from "_/assets/images";
import { Coin, Exchanger, User } from "./screens/index";
import { HeaderMenu } from "#";

export enum menu {
  Exchangers,
  Users,
  Coins,
  Rank,
  Advertises,
}

function ResourceComponent(): React.ReactElement {
  const [activeItem, setActiveItem] = useState(
    parseInt(localStorage.getItem("resource") || "0")
  );
  const [items] = useState([
    { title: "Exchangers", icon: <Exchangers />, item: menu.Exchangers },
    { title: "Users", icon: <Users />, item: menu.Users },
    { title: "Coins", icon: <Coins />, item: menu.Coins },
  ]);

  return (
    <>
      <HeaderMenu
        category="resource"
        size={2}
        items={items}
        defaultActiveItem={activeItem}
        getMenuItem={(data) => {
          setActiveItem(data);
        }}
      />
      {activeItem === menu.Coins ? (
        <Coin />
      ) : activeItem === menu.Exchangers ? (
        <Exchanger />
      ) : (
        <User />
      )}
    </>
  );
}

export default memo(ResourceComponent);
