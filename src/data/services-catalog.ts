import { type Service } from "@/types/service";
import { routes } from "@/lib/constants/routes";

/**
 * Full services catalog for the /services page — mirrors the categories
 * already defined in the mega-menu (data/navigation.ts) and footer
 * (data/footer.ts) so every #anchor those already link to resolves here.
 */
export const servicesCatalog: Service[] = [
  // Core Services
  {
    id: "visa-pro",
    slug: "visa-pro",
    group: "core",
    title: "Visa & PRO Services",
    summary:
      "Investor, partner and employment visas, plus all PRO and government-related processing.",
    icon: "id-card",
  },
  {
    id: "banking",
    slug: "banking",
    group: "core",
    title: "Banking Solutions",
    summary:
      "Support opening and managing corporate bank accounts with leading UAE banks.",
    icon: "landmark",
  },
  {
    id: "tax",
    slug: "tax",
    group: "core",
    title: "Tax & Accounting",
    summary: "Corporate tax, VAT registration, and accurate day-to-day bookkeeping.",
    icon: "calculator",
  },
  {
    id: "legal",
    slug: "legal",
    group: "core",
    title: "Legal & Compliance",
    summary: "Contract drafting, legal advisory, and ongoing regulatory compliance.",
    icon: "scale",
  },
  {
    id: "corporate",
    slug: "corporate",
    group: "core",
    title: "Corporate Services",
    summary:
      "Corporate governance, documentation, and business support to keep you ahead.",
    icon: "briefcase",
  },
  {
    id: "real-estate",
    slug: "real-estate",
    group: "core",
    title: "Real Estate Services",
    summary: "Finding, leasing or buying the right office and commercial space.",
    icon: "home",
  },
  {
    id: "golden-visa",
    slug: "golden-visa",
    group: "core",
    title: "Golden Visa",
    summary:
      "Guidance on eligibility and documentation for the UAE's long-term Golden Visa residency for investors, entrepreneurs and specialized talent.",
    icon: "award",
  },
  {
    id: "company-formation",
    slug: "company-formation",
    group: "core",
    title: "Company Formation",
    summary: "Full company formation across Mainland, Free Zone and Offshore.",
    icon: "building-2",
    href: routes.businessSetup,
  },

  // Ongoing Business Support
  {
    id: "accounting",
    slug: "accounting",
    group: "support",
    title: "Accounting & Bookkeeping",
    summary: "Day-to-day bookkeeping and financial record-keeping support.",
    icon: "book-open",
  },
  {
    id: "vat",
    slug: "vat",
    group: "support",
    title: "VAT & Corporate Tax",
    summary: "VAT filing and corporate tax compliance handled end-to-end.",
    icon: "receipt",
  },
  {
    id: "audit",
    slug: "audit",
    group: "support",
    title: "Audit & Assurance",
    summary:
      "Independent audit and assurance services for regulatory and stakeholder confidence.",
    icon: "search-check",
  },
  {
    id: "compliance",
    slug: "compliance",
    group: "support",
    title: "AML Compliance",
    summary:
      "Anti-money laundering policy setup, risk assessments, and UBO/goAML registration support to meet UAE AML/CFT obligations.",
    icon: "shield-check",
  },
];

export const serviceGroupMeta = {
  core: {
    title: "Core Services",
    description:
      "The essentials most businesses need to operate compliantly in the UAE.",
  },
  support: {
    title: "Ongoing Business Support",
    description: "Keep your business compliant and running smoothly, year-round.",
  },
} as const;
