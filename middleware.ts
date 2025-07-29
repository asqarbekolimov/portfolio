import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "uz", "ru"],
  defaultLocale: "en",
});

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
