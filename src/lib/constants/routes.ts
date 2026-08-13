export const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  businessSetup: "/business-setup",
  businessSetupMainland: "/business-setup/mainland",
  businessSetupFreeZone: "/business-setup/free-zone",
  businessSetupOffshore: "/business-setup/offshore",
  costCalculator: "/cost-calculator",
  howItWorks: "/how-it-works",
  blog: "/blog",
  contact: "/contact",
  faq: "/faq",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];

/** Static marketing paths used by sitemap and navigation foundations. */
export const staticMarketingPaths: readonly string[] = [
  routes.home,
  routes.about,
  routes.services,
  routes.businessSetup,
  routes.businessSetupMainland,
  routes.businessSetupFreeZone,
  routes.businessSetupOffshore,
  routes.costCalculator,
  routes.howItWorks,
  routes.blog,
  routes.contact,
  routes.faq,
];
