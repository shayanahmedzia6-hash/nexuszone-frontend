import { defineRouting } from "next-intl/routing";

export const locales = [
  "en",
  "ar",
  // "fr",
  // "es",
] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  // fr: "Français",
  // es: "Español",
};

export const rtlLocales: readonly Locale[] = ["ar"];

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});
