import { makeAutoObservable, runInAction } from "mobx";
import { enableStaticRendering } from "mobx-react";
import { useMemo } from "react";

export type coin = {
  name: string;
  symbol: string;
  source: boolean;
};

enableStaticRendering(typeof window === "undefined");

let store: CoinStore;

export class CoinStore {
  public coins: Array<coin>;

  constructor() {
    makeAutoObservable(this);
    this.coins = [
      {
        name: "Bitcoin",
        symbol: "btc",
        source: false,
      },
      {
        name: "Bitcoin",
        symbol: "btc",
        source: false,
      },
      {
        name: "Bitcoin",
        symbol: "btc",
        source: false,
      },
      {
        name: "Bitcoin",
        symbol: "btc",
        source: false,
      },
      {
        name: "Bitcoin",
        symbol: "btc",
        source: false,
      },
      {
        name: "Bitcoin",
        symbol: "btc",
        source: false,
      },
      {
        name: "Bitcoin",
        symbol: "btc",
        source: false,
      },
      {
        name: "Bitcoin",
        symbol: "btc",
        source: false,
      },
    ];
  }

  hydrate(data: any) {
    if (!data) return;
  }
}

function initializeStore(initialData = null) {
  const _store = store ?? new CoinStore();

  if (initialData) {
    _store.hydrate(initialData);
  }
  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
}

export function useCoinStore(initialState?: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
