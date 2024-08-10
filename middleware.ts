import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en"],

  defaultLocale: "en",

  localePrefix: "never",
});

export const config = {
  matcher: ["/", "/(en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
