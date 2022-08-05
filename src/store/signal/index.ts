import { makeAutoObservable, runInAction } from "mobx";
import { enableStaticRendering } from "mobx-react";
import { useMemo } from "react";

export type signal = {
  status: string;
  coin: string;
  user: string;
};

enableStaticRendering(typeof window === "undefined");

let store: SignalStore;

export class SignalStore {
  public signals: Array<signal>;
  public openSignalsCount: number;
  public passSignalsCount: number;
  public progressSignalsCount: number;
  public lossSignalsCount: number;
  public expiredSignalsCount: number;

  constructor() {
    makeAutoObservable(this);
    this.signals = [
      {
        coin: "Bitcoin",
        user: "zohreshp03",
        status: "open",
      },
      {
        coin: "Bitcoin",
        user: "zohreshp03",
        status: "open",
      },
      {
        coin: "Bitcoin",
        user: "zohreshp03",
        status: "open",
      },
      {
        coin: "Bitcoin",
        user: "zohreshp03",
        status: "open",
      },
      {
        coin: "Bitcoin",
        user: "zohreshp03",
        status: "open",
      },
      {
        coin: "Bitcoin",
        user: "zohreshp03",
        status: "open",
      },
    ];
    this.openSignalsCount = 4;
    this.passSignalsCount = 8;
    this.progressSignalsCount = 12;
    this.lossSignalsCount = 32;
    this.expiredSignalsCount = 5;
  }

  hydrate(data: any) {
    if (!data) return;
  }
}

function initializeStore(initialData = null) {
  const _store = store ?? new SignalStore();

  if (initialData) {
    _store.hydrate(initialData);
  }
  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
}

export function useSignalStore(initialState?: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
