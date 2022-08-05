import { makeAutoObservable, runInAction } from "mobx";
import { enableStaticRendering } from "mobx-react";
import { useMemo } from "react";

export type trader = {
  username: string;
  email: string;
  number: string;
  rank: string;
};

enableStaticRendering(typeof window === "undefined");

let store: TraderStore;

export class TraderStore {
  public topTraders?: Array<trader>;

  constructor() {
    makeAutoObservable(this);
    this.topTraders = [
      {
        username: "trader1",
        email: "zohreshp03@gmail.com",
        number: "09031907022",
        rank: "3",
      },
      {
        username: "trader2",
        email: "zohreshp03@gmail.com",
        number: "09031907022",
        rank: "3",
      },
      {
        username: "trader3",
        email: "zohreshp03@gmail.com",
        number: "09031907022",
        rank: "3",
      },
      {
        username: "trader4",
        email: "zohreshp03@gmail.com",
        number: "09031907022",
        rank: "3",
      },
      {
        username: "trader5",
        email: "zohreshp03@gmail.com",
        number: "09031907022",
        rank: "3",
      },
      {
        username: "zohreShp03",
        email: "zohreshp03@gmail.com",
        number: "09031907022",
        rank: "3",
      },
    ];
  }

  hydrate(data: any) {
    if (!data) return;
  }
}

function initializeStore(initialData = null) {
  const _store = store ?? new TraderStore();

  if (initialData) {
    _store.hydrate(initialData);
  }
  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
}

export function useTraderStore(initialState?: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
