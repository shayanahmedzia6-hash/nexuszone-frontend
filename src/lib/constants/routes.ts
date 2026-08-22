export const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  businessSetup: "/#business-setup",
  businessSetupMainland: "/business-setup/mainland",
  businessSetupFreeZone: "/business-setup/free-zone",
  businessSetupOffshore: "/business-setup/offshore",
  howItWorks: "/how-it-works",
  blog: "/blog",
  careers: "/careers",
  contact: "/contact",
  faq: "/#faq",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];

/** Static marketing paths used by sitemap and navigation foundations. */
export const staticMarketingPaths: readonly string[] = [
  routes.home,
  routes.about,
  routes.services,
  routes.businessSetupMainland,
  routes.businessSetupFreeZone,
  routes.businessSetupOffshore,
  routes.howItWorks,
  routes.careers,
  routes.contact,
  // privacy/terms are intentionally excluded while marked noIndex (draft legal content)
];
