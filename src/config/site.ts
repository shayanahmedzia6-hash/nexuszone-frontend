import {
  SITE_DEFAULT_LOCALE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/constants/site";

function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv && fromEnv.length > 0) {
    return fromEnv.replace(/\/$/, "");
  }
  return "http://localhost:3000";
}

export const siteConfig = {
  name: SITE_NAME,
  tagline: SITE_TAGLINE,
  description: SITE_DESCRIPTION,
  locale: SITE_DEFAULT_LOCALE,
  url: resolveSiteUrl(),
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "",
} as const;

export type SiteConfig = typeof siteConfig;
