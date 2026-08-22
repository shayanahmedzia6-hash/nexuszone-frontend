import { type Service } from "@/types/service";

/**
 * Full services catalog structure for /services.
 * Titles and summaries live in `servicesCatalogPage` messages (EN/AR).
 */
export const servicesCatalog: Omit<Service, "title" | "summary">[] = [
  // Core Services
  {
    id: "visa-pro",
    slug: "visa-pro",
    group: "core",
    icon: "id-card",
  },
  {
    id: "banking",
    slug: "banking",
    group: "core",
    icon: "landmark",
  },
  {
    id: "tax",
    slug: "tax",
    group: "core",
    icon: "calculator",
  },
  {
    id: "legal",
    slug: "legal",
    group: "core",
    icon: "scale",
  },
  {
    id: "corporate",
    slug: "corporate",
    group: "core",
    icon: "briefcase",
  },
  {
    id: "real-estate",
    slug: "real-estate",
    group: "core",
    icon: "home",
  },
  {
    id: "golden-visa",
    slug: "golden-visa",
    group: "core",
    icon: "award",
  },

  // Ongoing Business Support
  {
    id: "accounting",
    slug: "accounting",
    group: "support",
    icon: "book-open",
  },
  {
    id: "vat",
    slug: "vat",
    group: "support",
    icon: "receipt",
  },
  {
    id: "audit",
    slug: "audit",
    group: "support",
    icon: "search-check",
  },
  {
    id: "compliance",
    slug: "compliance",
    group: "support",
    icon: "shield-check",
  },
];

export const serviceGroupIds = ["core", "support"] as const;
