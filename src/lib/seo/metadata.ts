import { type Metadata } from "next";

import { siteConfig } from "@/config/site";

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}

export type PageMetadataInput = {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  imagePath?: string;
};

export function createPageMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  noIndex = false,
  imagePath,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = imagePath ? absoluteUrl(imagePath) : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      ...(ogImage
        ? {
            images: [{ url: ogImage }],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}
