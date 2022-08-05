import React, { useRef, useState, FC } from "react";
import { memo } from "_/utilities/memo";
import { Delete, Edit, View, ThreeDotMenu } from "_/assets/images";
import { Body, Icon, Container, StyledResource } from "./styles";
import Item from "./MenuItem";
import { Action } from "react-query/types/core/query";
import { uuid } from "_/utilities";
interface Props {
  onDelete?: any;
  onEdit?: any;
  onView?: any;
  modalId?: string;
  deleteBoxId?: string;
  items?: [
    {
      ClickEvent?: () => void;
      Title: string;
      Icon: React.ReactElement;
      modalId?: string;
    }
  ];
}

function MoreMenu({
  onDelete,
  onEdit,
  onView,
  modalId,
  deleteBoxId,
  items,
}: Props): React.ReactElement {
  return (
    <Container>
      <span
        style={{ cursor: `pointer` }}
        className="px-2 py-1"
        // data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <ThreeDotMenu />
      </span>

      <Body className="dropdown-menu">
        <div>
          {onDelete || deleteBoxId ? (
            <Item
              ClickEvent={onDelete}
              CustomIcon={<Delete />}
              Title="Delete"
              ModalId={deleteBoxId}
            />
          ) : null}

          {onEdit ? (
            <Item
              ModalId={modalId}
              ClickEvent={onEdit}
              CustomIcon={<Edit />}
              Title="Edit"
            />
          ) : null}

          {onView ? (
            <Item
              ModalId={modalId}
              ClickEvent={onView}
              CustomIcon={<View />}
              Title="View"
            />
          ) : null}

          {items
            ? items.map((data) => {
                const key = uuid();
                return (
                  <Item
                    key={key}
                    ModalId={data?.modalId || ""}
                    ClickEvent={data?.ClickEvent}
                    CustomIcon={data?.Icon || ""}
                    Title={data?.Title || ""}
                  />
                );
              })
            : null}
        </div>
      </Body>
    </Container>
  );
}

export default memo(MoreMenu, StyledResource);
