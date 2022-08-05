import React, { useState } from "react";
import { memo } from "_/utilities/memo";
import { Container } from "./styles";

interface props {
  title: string;
  item: number;
  size: number;
  activeItem: number;
  icon: React.ReactElement;
  getMenuItem: (data: number) => void;
}

function MenuItem({
  title,
  icon,
  item,
  size,
  activeItem,
  getMenuItem,
}: props): React.ReactElement {
  return (
    <Container
      style={size === 1 ? { width: `200px` } : { width: `180px` }}
      onClick={() => {
        getMenuItem(item);
      }}
      className={activeItem === item ? "active" : "deActive"}
    >
      {icon}
      {title}
    </Container>
  );
}

export default memo(MenuItem);
