import { ChildrenProps } from "@/types";
import React from "react";
import { ThemeProvider } from "./theme";

export default function Provider({ children }: ChildrenProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
