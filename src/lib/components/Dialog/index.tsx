import React, { useRef, useMemo, ReactElement } from "react";
import { memo } from "_/utilities/memo";
import { Close } from "_/assets/images";
import { modalSizesEnum } from "_/utilities";
import {
  Container,
  CloseBtn,
  Content,
  Header,
  Dialog,
  Body,
  Container2,
} from "./styles";

export type Props = {
  className?: string;
  title?: string | ReactElement;
  onlyCloseItself?: boolean;
  loading?: boolean;
  autoRefresh?: boolean;
  closeModal?: boolean;
  size?: number;
  id: string;
  ref?: any;
};

function DialogComponent({
  onlyCloseItself = false,
  children,
  className,
  size,
  id,
  loading = false,
  closeModal = false,
  ref,
}: React.PropsWithChildren<Props>): React.ReactElement {
  const close = useRef<HTMLInputElement>(null);

  const closeButtonProps = onlyCloseItself
    ? {
        "data-bs-toggle": "modal",
        "data-bs-target": `#${id}`,
      }
    : {
        "data-bs-dismiss": "modal",
      };

  useMemo(() => {
    if (closeModal === true) close?.current?.click();
  }, [closeModal]);

  return (
    <Dialog
      ref={ref}
      id={id}
      tabIndex={-1}
      aria-hidden="true"
      className={"modal fade " + className}
    >
      <input hidden data-bs-dismiss="modal" ref={close} />
      {loading ? (
        <Container2>
          <div
            style={{ color: `#E2B04C` }}
            className="spinner-border"
            role="status"
          ></div>
        </Container2>
      ) : undefined}
      <Container
        className={
          "modal-dialog modal-dialog-centered " + modalSizesEnum[size || 2]
        }
      >
        <Content className="modal-content">
          {/* <Header className="modal-header"> */}
          {/* {title || ""} */}
          {/* </Header> */}
          <CloseBtn
            {...closeButtonProps}
            style={{ cursor: `pointer` }}
            width={15}
          />
          <Body className="modal-body">{children}</Body>
        </Content>
      </Container>
    </Dialog>
  );
}

export default memo(DialogComponent);
