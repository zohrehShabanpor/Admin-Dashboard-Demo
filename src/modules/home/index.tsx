import React, { useState, useEffect } from "react";
import { memo } from "_/utilities/memo";
import ExchangerTableComponent from "./layout/exchanger";
import UserTableComponent from "./layout/user";
import ChartSectionComponent from "./layout/chart";
import TopTraderTableComponent from "./layout/topTrader";
import TagsComponent from "./layout/tags";

import { MainColumn, StyledHome } from "./styles";

interface Props {
  className?: string;
}

function HomeComponent({ className }: Props): React.ReactElement {
  return (
    <div className={className}>
      <MainColumn>
        <TagsComponent />
        <UserTableComponent />
        <TopTraderTableComponent />
        <ExchangerTableComponent />
        <ChartSectionComponent />
      </MainColumn>
    </div>
  );
}

export default memo(HomeComponent, StyledHome);
