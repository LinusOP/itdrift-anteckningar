"use client";

import { createContext, useState } from "react";

export const NavStateContext = createContext<{
  navOpen: boolean;
  toggle: (state: boolean) => void;
}>({
  navOpen: false,
  toggle() {},
});

export default function NavStateProvider({
  children,
}: React.PropsWithChildren) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <NavStateContext.Provider
      value={{ navOpen, toggle: (state) => setNavOpen(state) }}
    >
      {children}
    </NavStateContext.Provider>
  );
}
