import { makeAutoObservable, runInAction } from "mobx";
import { enableStaticRendering } from "mobx-react";
import { useMemo } from "react";

export type exchanger = {
  username: string;
  verify: string;
  enable: string;
};

enableStaticRendering(typeof window === "undefined");

let store: ExchangerStore;

export class ExchangerStore {
  public exchangers: Array<exchanger>;

  constructor() {
    makeAutoObservable(this);
    this.exchangers = [
      {
        username: "zohreShp03",
        verify: "verified",
        enable: "enable",
      },
      {
        username: "zohreShp03",
        verify: "verified",
        enable: "enable",
      },
      {
        username: "zohreShp03",
        verify: "verified",
        enable: "enable",
      },
      {
        username: "zohreShp03",
        verify: "verified",
        enable: "enable",
      },
      {
        username: "zohreShp03",
        verify: "verified",
        enable: "enable",
      },
      {
        username: "zohreShp03",
        verify: "verified",
        enable: "enable",
      },
      {
        username: "zohreShp03",
        verify: "verified",
        enable: "enable",
      },
      {
        username: "zohreShp03",
        verify: "verified",
        enable: "enable",
      },
      {
        username: "zohreShp03",
        verify: "verified",
        enable: "enable",
      },
    ];
  }

  hydrate(data: any) {
    if (!data) return;
  }
}

function initializeStore(initialData = null) {
  const _store = store ?? new ExchangerStore();

  if (initialData) {
    _store.hydrate(initialData);
  }
  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
}

export function useExchangerStore(initialState?: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
