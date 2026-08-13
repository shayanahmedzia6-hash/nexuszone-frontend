import { type MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { staticMarketingPaths } from "@/lib/constants/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return staticMarketingPaths.map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
