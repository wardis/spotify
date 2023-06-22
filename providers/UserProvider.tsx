"use client";

import { MyUserContextProvider } from "@/hooks/useUser";
import { PropsWithChildren } from "react";

type UserProviderProps = PropsWithChildren<{}>;

const UserProvider = ({ children }: UserProviderProps) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
