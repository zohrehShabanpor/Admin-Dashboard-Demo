import React, { useState, useMemo, useEffect } from "react";
import { memo } from "_/utilities/memo";
import {
  Tags,
  ActiveUsersCard,
  TotalOrdersCard,
  TotalUsersCard,
  RegisteredCoin,
  AllRegisterExchange,
} from "./styles";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { TOKEN } from "_/constants";
import { useUserStore } from "store/users";
import { useCoinStore } from "store/coin";
import { useExchangerStore } from "store/exchangers";

interface Props {
  className?: string;
}

function TagsComponent({ className }: Props): React.ReactElement {
  const [coinCount, setCoinCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [exchangerCount, setExchangerCount] = useState(0);
  const [lastDayUserCount, setLastDayUserCount] = useState(0);
  const [onlineUserCount, setOnlineUserCount] = useState(0);
  const userStore = useUserStore();
  const coinStore = useCoinStore();
  const exchangerStore = useExchangerStore();

  useEffect(() => {
    setUserCount(userStore.users?.length);
    setOnlineUserCount(userStore.totalOnlineUsers);
    setLastDayUserCount(userStore.lastDayRegisteredUser);
    setCoinCount(coinStore.coins.length);
    setExchangerCount(exchangerStore.exchangers?.length);
  }, [userStore]);

  return (
    <Tags>
      <ActiveUsersCard title="Total User" value={userCount} />
      <TotalOrdersCard title="Total Online User" value={onlineUserCount} />
      <TotalUsersCard
        title="Last Day Registered User"
        value={lastDayUserCount}
      />
      <AllRegisterExchange
        title="All Register Exchanger"
        value={exchangerCount}
      />
      <RegisteredCoin title="All Registered Coin" value={coinCount} />
    </Tags>
  );
}

export default memo(TagsComponent);
