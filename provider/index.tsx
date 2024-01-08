'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { Client, HydrationProvider } from 'react-hydration-provider';
import { Toaster } from '@/components/ui/toaster';

export function Provider({ children, ...props }: ThemeProviderProps) {
  return (
    <HydrationProvider>
      <I18nextProvider i18n={i18n}>
        <NextThemesProvider {...props}>
          <Client>
            {children}
            <Toaster />
          </Client>
        </NextThemesProvider>
      </I18nextProvider>
    </HydrationProvider>
  );
}
