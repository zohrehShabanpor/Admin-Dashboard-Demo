import React, { useState, useMemo, useRef, useEffect } from "react";
import { uuid } from "_/utilities";
import { memo } from "_/utilities/memo";
import { AngleLeft, AngleRight } from "_/assets/images";
import {
  Container,
  StyledTable,
  Table,
  TableHead,
  TableBody,
  TableRow,
  HeadContainer,
  StyledPaginationButton,
  StyledPaginationWrapper,
  Input,
  Message,
  PageNumberWrapper,
  RawPerPageSelect,
} from "./styles";

export type Props = {
  id?: string;
  className?: string;
  search?: string;
  bodyData?: any;
  column?: Array<any>;
  headerFixed?: boolean;
  loading?: boolean;
  hasPagination?: boolean;
  defaultRowPerPage?: number;
  totalCount?: number;
  onCurrentPageChange?: Function;
  onRowPerPageChange?: Function;
};

function TableComponent({
  className,
  column,
  bodyData,
  headerFixed,
  loading,
  search = undefined,
  hasPagination = true,
  defaultRowPerPage,
  onCurrentPageChange,
  onRowPerPageChange,
  totalCount,
  id,
}: React.PropsWithChildren<Props>): React.ReactElement {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(defaultRowPerPage || 5);
  const [pageInputData, setPageInputData] = useState(currentPage.toString());
  const inputRef = useRef<HTMLInputElement>(null);
  const hasSSPagination = totalCount !== undefined;
  if (!hasSSPagination) {
    totalCount = bodyData?.length || 0;
  }
  const lastPage = useMemo(() => {
    if (typeof totalCount === "number")
      return Math.ceil(totalCount / rowPerPage);
    return 1;
  }, [totalCount, rowPerPage]);

  const currentData = useMemo(() => {
    if (!bodyData) return;
    if (hasSSPagination) return bodyData.slice(0, rowPerPage);

    const lastDataIndex = currentPage * rowPerPage;
    const firstDataIndex = lastDataIndex - rowPerPage;
    return bodyData?.slice(firstDataIndex, lastDataIndex);
  }, [bodyData, currentPage, rowPerPage, hasSSPagination]);

  useEffect(() => {
    if (onRowPerPageChange) onRowPerPageChange(rowPerPage);
    if (currentPage > lastPage && lastPage) {
      setCurrentPage(lastPage);
    }
  }, [rowPerPage]);

  useEffect(() => {
    setPageInputData(currentPage.toString());
    if (onCurrentPageChange) onCurrentPageChange(currentPage);
  }, [currentPage]);

  return (
    <>
      <Container
        id={id}
        style={
          loading === true
            ? {
                display: `flex`,
                width: `100%`,
                height: `100%`,
                alignItems: `center`,
                justifyContent: `center`,
              }
            : undefined
        }
        className={className}
      >
        {loading === true ? (
          <div
            style={{ color: `#E2B04C` }}
            className="spinner-border"
            role="status"
          >
            <span className="visually-hidden">Loading </span>
          </div>
        ) : bodyData?.length === 0 ? (
          <Message>
            {search
              ? `There is no result for "${search}"`
              : "There is no record"}
          </Message>
        ) : (
          <Table
            style={{
              width: `100%!important`,
            }}
          >
            <TableHead>
              <TableRow>
                {column
                  ? column.map((item) => {
                      const key = uuid();
                      return (
                        <HeadContainer
                          key={key}
                          style={
                            headerFixed === false
                              ? undefined
                              : { position: `sticky` }
                          }
                        >
                          <span className="container">{item}</span>
                        </HeadContainer>
                      );
                    })
                  : ""}
              </TableRow>
            </TableHead>
            <TableBody>{currentData}</TableBody>
          </Table>
        )}
      </Container>
      {hasPagination ? (
        <StyledPaginationWrapper>
          <StyledPaginationButton
            className={currentPage !== 1 ? "" : "disabled"}
            onClick={() => {
              if (currentPage !== 1) setCurrentPage((oldState) => oldState - 1);
            }}
          >
            <AngleLeft />
          </StyledPaginationButton>

          <StyledPaginationButton
            className={currentPage < lastPage ? "" : " disabled"}
            onClick={() => {
              if (currentPage < lastPage)
                setCurrentPage((oldState) => oldState + 1);
            }}
          >
            <AngleRight />
          </StyledPaginationButton>

          <PageNumberWrapper
            style={{ position: "absolute", right: 0, margin: "9px" }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();

                if (+pageInputData !== 0 && +pageInputData <= lastPage) {
                  setCurrentPage(+pageInputData);
                } else {
                  setPageInputData(currentPage.toString());
                }

                inputRef.current?.blur();
              }}
            >
              <Input
                type="text"
                ref={inputRef}
                value={lastPage !== 0 ? pageInputData : 0}
                onChange={({ target }) =>
                  setPageInputData((+target.value || "").toString())
                }
              />
            </form>
            /<span>{lastPage}</span>
          </PageNumberWrapper>

          <RawPerPageSelect
            disabled={bodyData?.length === 0}
            value={rowPerPage}
            onChange={({ target }) => setRowPerPage(+target.value)}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </RawPerPageSelect>
        </StyledPaginationWrapper>
      ) : null}
    </>
  );
}

export default memo(TableComponent, StyledTable);
