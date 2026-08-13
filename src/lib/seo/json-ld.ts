import { siteConfig } from "@/config/site";

/** Organization JSON-LD foundation for future rich results. */
export function organizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: "AE",
  };
}

export function jsonLdScript(data: Record<string, unknown>): string {
  return JSON.stringify(data);
}
