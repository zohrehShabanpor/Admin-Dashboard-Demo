import React, { useState, useMemo, ReactElement } from "react";
import { memo } from "_/utilities/memo";
import { Close } from "_/assets/images";
import { modalSizesEnum } from "_/utilities";
import {
  Question,
  Content,
  Container,
  Button,
  Header,
  Dialog,
  Body,
} from "./styles";

export type Props = {
  className?: string;
  question: string;
  activeItem: string;
  getResponse: (res: MessageBoxResponse) => void;
  id: string;
};

export enum MessageBoxResponse {
  Cancel,
  Yes,
}

function DialogComponent({
  question,
  activeItem,
  className,
  getResponse,
  id,
}: React.PropsWithChildren<Props>): React.ReactElement {
  const [respond, setRespond] = useState<MessageBoxResponse | undefined>(
    undefined
  );

  useMemo(() => {
    if (respond) getResponse(respond);
  }, [respond]);

  return (
    <Dialog
      id={id}
      tabIndex={-1}
      aria-hidden="true"
      className={"modal fade " + className}
    >
      <div
        style={{ width: `400px` }}
        className={"modal-dialog modal-dialog-centered"}
      >
        <Content className="modal-content">
          <Question>{question}</Question>
          <Container>
            <Button
              onClick={() => {
                setRespond(MessageBoxResponse.Yes);
              }}
              data-bs-dismiss="modal"
              className="active"
            >
              {activeItem}
            </Button>
            <Button
              onClick={() => {
                setRespond(MessageBoxResponse.Cancel);
              }}
              data-bs-dismiss="modal"
            >
              Cancel
            </Button>
          </Container>
        </Content>
      </div>
    </Dialog>
  );
}

export default memo(DialogComponent);
