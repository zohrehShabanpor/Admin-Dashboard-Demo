import React from "react";
import { memo } from "_/utilities/memo";
import { SearchContainer } from "#";
import { Table, Container } from "./styles";
import { headerJustify } from "../SearchContainer";

interface Props {
  gridArea?: string;
  title: string;
  value?: number;
  icon: React.ReactElement;
  headerItemsPlacement?: headerJustify;
  hasSearch?: boolean;
  hasPlus?: boolean;
  getSearch?: { (query: string): void };
  bodyData?: any;
  column: Array<any>;
  loading?: boolean;
  search?: string;
  plusModalTarget?: string;
  totalCount?: number;
  onCurrentPageChange?: Function;
  onRowPerPageChange?: Function;
}

function TableCard({
  gridArea,
  title,
  value,
  icon,
  hasSearch = true,
  getSearch = () => {},
  column,
  bodyData,
  plusModalTarget,
  headerItemsPlacement = headerJustify.start,
  loading,
  search,
  hasPlus = false,
  onCurrentPageChange,
  onRowPerPageChange,
  totalCount,
}: Props): React.ReactElement {
  return (
    <Container style={{ gridArea: `${gridArea}` }}>
      <SearchContainer
        headerItemsPlacement={headerItemsPlacement}
        title={title}
        plusModalTarget={plusModalTarget}
        value={value}
        icon={icon}
        hasPlus={hasPlus}
        hasSearch={hasSearch}
        getSearch={(query) => getSearch(query)}
      />

      <Table
        column={column}
        loading={loading}
        search={search}
        bodyData={bodyData}
        defaultRowPerPage={10}
        hasPagination={true}
        onCurrentPageChange={onCurrentPageChange}
        onRowPerPageChange={onRowPerPageChange}
        totalCount={totalCount}
      />
    </Container>
  );
}

export default memo(TableCard);
