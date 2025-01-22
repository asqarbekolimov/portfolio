import React, { ReactNode } from "react";
import LenisScrollProvider from "./lenis-provider";
import { HydrationProvider } from "react-hydration-provider";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <LenisScrollProvider>
      <HydrationProvider>{children}</HydrationProvider>
    </LenisScrollProvider>
  );
};

export default Provider;
