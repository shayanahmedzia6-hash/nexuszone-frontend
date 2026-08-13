import { type MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Nexus Zone",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#070B14",
    theme_color: "#E10600",
    lang: "en-AE",
  };
}
