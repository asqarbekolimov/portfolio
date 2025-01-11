import type { Metadata } from "next";
import { Sora, Source_Code_Pro, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import LayoutPages from "@/components/ui/layout";
import Provider from "@/providers";

const arialFont = localFont({
  src: "../fonts/ARIAL.woff",
  display: "swap",
  variable: "--font-arial",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio of Asqarbek Olimov. Frontend & Mobile App Developer based in Uzbekistan. Specializing in React, React Native, and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body
        className={`${sora.variable} ${sourceCodePro.variable} ${inter.variable} ${arialFont.variable} antialiased`}
      >
        <>
          <Provider>
            <LayoutPages>{children}</LayoutPages>
          </Provider>
        </>
      </body>
    </html>
  );
}
