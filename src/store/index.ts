import { makeAutoObservable, runInAction } from "mobx";
import { enableStaticRendering } from "mobx-react";
import { useMemo } from "react";

enableStaticRendering(typeof window === "undefined");

let store: Store;

export class Store {
  public loggedUser?: { username: string } | null;

  constructor() {
    makeAutoObservable(this);
  }

  public setUserName(user: { username: string }) {
    this.loggedUser = user;
  }

  hydrate(data: any) {
    if (!data) return;
  }
}

function initializeStore(initialData = null) {
  const _store = store ?? new Store();

  if (initialData) {
    _store.hydrate(initialData);
  }
  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
}

export function useStore(initialState?: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
