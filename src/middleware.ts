import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

export default createMiddleware({
  defaultLocale: "hr",
  localePrefix,
  locales,
});
export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(hr)/:path*"],
};
