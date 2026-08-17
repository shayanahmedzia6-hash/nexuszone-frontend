import { type MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { locales } from "@/i18n/routing";
import { staticMarketingPaths } from "@/lib/constants/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return staticMarketingPaths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteConfig.url}/${locale}${path === "/" ? "" : path}`,
      lastModified,
      changeFrequency: (path === "/" ? "weekly" : "monthly") as
        | "weekly"
        | "monthly",
      priority: path === "/" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((altLocale) => [
            altLocale,
            `${siteConfig.url}/${altLocale}${path === "/" ? "" : path}`,
          ]),
        ),
      },
    })),
  );
}
