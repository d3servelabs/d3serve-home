"use client";

import { createContext, useContext, useMemo, ReactNode, useState } from "react";

export interface ConstantsProviderProps {
  children: ReactNode;
}

export interface IConstantsContext {
  client: boolean;
}

export const ConstantsContext = createContext<IConstantsContext>({
  client: typeof window !== "undefined",
});

export function ConstantsProvider({
  children,
}: Readonly<ConstantsProviderProps>) {
  const [client] = useState(typeof window !== "undefined");

  const value = useMemo((): IConstantsContext => ({ client }), [client]);

  return (
    <ConstantsContext.Provider value={value}>
      {children}
    </ConstantsContext.Provider>
  );
}

export const useConstants = (): IConstantsContext => {
  const context = useContext(ConstantsContext);
  if (!context) {
    throw new Error(
      `"useConstants" must be used within an "ConstantsProvider"`,
    );
  }
  return context;
};
