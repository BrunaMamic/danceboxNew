import { createNavigation } from "next-intl/navigation";

export const locales = ["hr"] as const;
export const localePrefix = "always" as const; // Default

export const { Link, redirect, usePathname, useRouter } =
  createNavigation({ locales, localePrefix });
