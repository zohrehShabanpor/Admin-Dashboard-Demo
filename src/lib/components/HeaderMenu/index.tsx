import React, { useState, useMemo } from "react";
import { memo } from "_/utilities/memo";
import { MainColumn } from "./styles";
import MenuItem from "./MenuItem";
import { uuid } from "_/utilities";

interface props {
  defaultActiveItem: number;
  size?: number;
  category: string;
  items: { title: string; icon: React.ReactElement; item: number }[];
  getMenuItem: (data: number) => void;
}

function HeaderMenu({
  items,
  size = 1,
  defaultActiveItem,
  category,
  getMenuItem,
}: props): React.ReactElement {
  const [activeItem, setActiveItem] = useState(defaultActiveItem);

  return (
    <MainColumn className="headerMenu">
      {items.map((item) => {
        const key = uuid();
        return (
          <MenuItem
            key={key}
            size={size}
            activeItem={activeItem}
            getMenuItem={(data) => {
              getMenuItem(data);
              setActiveItem(data);
              window.localStorage.setItem(category, String(item.item));
            }}
            item={item.item}
            title={item.title}
            icon={item.icon}
          />
        );
      })}
    </MainColumn>
  );
}

export default memo(HeaderMenu);
