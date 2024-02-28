import type { Metadata } from "next";
import { Inter, Fira_Code, Work_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Provider } from "@/provider/provider";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});
const firaCode = Fira_Code({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-firaCode",
});
const workSans = Work_Sans({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-workSans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.asqarbekdev.uz"),
  title: {
    template: "%s | Portfolio",
    default: "Portfolio",
  },
  description:
    "Askarbek Olimov`s portfolio website. Make your dream come true with programming.",
  authors: [{ name: "Asqarbek Olimov", url: "https://asqarbekdev.uz" }],
  icons: { icon: "/favicon.svg" },
  keywords:
    "Asqarbek Olimov, React.js developer, Software Engineer, Frontend Developer,    asqarbek,    olimov,    asqardev,    mrcoderx,    top developer,    portfolio,    asqarbek portfolio,    portfolio website,    Nextjs,    o`zbek dasturchi,    I am Asqarbek Olimov, a 18-year-old Software Engineer from Navoi, Uzbekistan.",
  openGraph: {
    title: "Asqarbek`s Portfolio",
    description:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
    type: "website",
    url: "https://www.asqarbekdev.uz",
    locale: "uz_UZ",
    images: "/dev.png",
    countryName: "Uzbekistan",
    siteName: "Portfolio website",
    emails: "info@asqarbekdev.uz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.variable, firaCode.variable, workSans.variable)}
      >
        <Provider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader showSpinner={false} />
          {children}
          <Analytics />
          <SpeedInsights />
          <Toaster position="top-center" />
        </Provider>
      </body>
    </html>
  );
}
