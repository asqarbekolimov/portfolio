"use client";
import i18n from "@/i18n";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Client, HydrationProvider } from "react-hydration-provider";
import { I18nextProvider } from "react-i18next";

export function Provider({ children }: ThemeProviderProps) {
  return (
    <HydrationProvider>
      <I18nextProvider i18n={i18n}>
        <Client>{children}</Client>
      </I18nextProvider>
      ;
    </HydrationProvider>
  );
}
