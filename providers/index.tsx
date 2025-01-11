import React, { ReactNode } from "react";
import LenisScrollProvider from "./lenis-provider";

const Provider = ({ children }: { children: ReactNode }) => {
  return <LenisScrollProvider>{children}</LenisScrollProvider>;
};

export default Provider;
