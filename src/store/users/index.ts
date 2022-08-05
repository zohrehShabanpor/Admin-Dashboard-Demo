import { makeAutoObservable, runInAction } from "mobx";
import { enableStaticRendering } from "mobx-react";
import { useMemo } from "react";

export type user = {
  username: string;
  email: string;
  number: string;
  device: string;
};

enableStaticRendering(typeof window === "undefined");

let store: UserStore;

export class UserStore {
  public users: Array<user>;
  public totalOnlineUsers: number;
  public lastDayRegisteredUser: number;

  constructor() {
    makeAutoObservable(this);
    this.users = [
      {
        username: "zohreShp03",
        email: "zohreshp03@gmail.com",
        number: "09031907022",
        device: "pc",
      },
      {
        username: "user1",
        email: "zohreshp03@gmail.com",
        number: "09031907022",
        device: "pc",
      },
      {
        username: "user2",
        email: "zohreshp03@gmail.com",
        number: "09031907022",
        device: "pc",
      },
      {
        username: "user3",
        email: "zohreshp03@gmail.com",
        number: "09031907022",
        device: "pc",
      },
      {
        username: "user4",
        email: "zohreshp03@gmail.com",
        number: "09031907022",
        device: "pc",
      },
      {
        username: "user5",
        email: "zohreshp03@gmail.com",
        number: "09031907022",
        device: "pc",
      },
    ];
    this.lastDayRegisteredUser = 4;
    this.totalOnlineUsers = 2;
  }

  hydrate(data: any) {
    if (!data) return;
  }
}

function initializeStore(initialData = null) {
  const _store = store ?? new UserStore();

  if (initialData) {
    _store.hydrate(initialData);
  }
  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
}

export function useUserStore(initialState?: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
