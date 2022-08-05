import React from "react";
import { memo } from "_/utilities/memo";
import { Item, Icon } from "./styles";

interface Props {
  Title: string;
  ClickEvent?: any;
  ModalId?: string;
  CustomIcon: React.ReactElement;
}

function MoreMenu({
  Title,
  ClickEvent,
  CustomIcon,
  ModalId,
}: Props): React.ReactElement {
  return (
    <Item
      data-bs-target={`#${ModalId}`}
      data-bs-toggle="modal"
      className="dropdown-item"
      onClick={ClickEvent}
    >
      <Icon>{CustomIcon}</Icon>
      <span>{Title}</span>
    </Item>
  );
}

export default memo(MoreMenu);
