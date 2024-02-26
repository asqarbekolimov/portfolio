"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import i18n from "@/i18n";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Client, HydrationProvider } from "react-hydration-provider";
import { I18nextProvider } from "react-i18next";

export function Provider({ children, ...props }: ThemeProviderProps) {
  return (
    <HydrationProvider>
      <I18nextProvider i18n={i18n}>
        <NextThemesProvider {...props}>
          <Client>{children}</Client>
        </NextThemesProvider>
      </I18nextProvider>
    </HydrationProvider>
  );
}
