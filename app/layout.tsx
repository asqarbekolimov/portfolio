import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from '@/provider';
import { ReactNode } from 'react';
import Left from '@/components/shared/left/left';
import Right from '@/components/shared/right/right';
import Navbar from '@/components/shared/navbar/navbar';
import NextTopLoader from 'nextjs-toploader';
const inter = Inter({ subsets: ['latin'] });
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  referrer: 'origin-when-cross-origin',
  title: {
    template: '%s | Asqarbek',
    default: 'Asqarbek',
  },
  description:
    'Askarbek Olimov`s portfolio website. Make your dream come true with programming.',
  authors: {
    name: 'Asqarbek Olimov',
    url: 'info@asqarbekdev.uz',
  },
  creator: 'Asqarbek Olimov',
  publisher: 'Asqarbek OLimov',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  keywords: [
    'Asqarbek Olimov',
    'React.js developer',
    'Software Engineer',
    'Frontend Developer',
    'asqarbek',
    'olimov',
    'asqardev',
    'mrcoderx',
    'top developer',
    'portfolio',
    'asqarbek portfolio',
    'portfolio website',
    'Nextjs',
    'o`zbek dasturchi',
    'I am Asqarbek Olimov, a 18-year-old Software Engineer from Navoi, Uzbekistan.',
  ],
  metadataBase: new URL('https://asqarbekdev.uz'),
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/dev.png',
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['info@asqarbek.uz', 'https://asqarbekdev.uz'],
    },
  },
  openGraph: {
    title: 'Asqarbek`s Portfolio',
    description:
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand',
    url: 'https://asqarbekdev.uz',
    siteName: 'Portfolio website',
    emails: 'info@asqarbekdev.uz',

    images: [
      {
        url: 'https://asqarbekdev.uz/dev.png',
        width: 1250,
        height: 800,
      },
    ],
    locale: 'uz_UZ',
    type: 'website',
    countryName: 'Uzbekistan',
  },
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative dark:bg-[#0a192f]`}>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          zIndex={50}
        />
        <Provider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Left />
          <Right />
          <main className="mt-32  flex w-full items-start justify-start px-4 md:px-10 lg:px-[150px]">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </Provider>
      </body>
    </html>
  );
}
