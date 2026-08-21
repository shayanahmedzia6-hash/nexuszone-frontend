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
      "Simplify UAE visa applications and government-related procedures with dedicated PRO support. From employment and investor visas to document processing and government submissions, we help reduce administrative work and delays.",
    icon: "id-card",
  },
  {
    id: "banking",
    slug: "banking",
    group: "core",
    title: "Banking Solutions",
    summary:
      "Get practical support for opening and managing your UAE business bank account. We help you understand banking requirements, prepare the necessary documentation, and navigate the application process with greater confidence.",
    icon: "landmark",
  },
  {
    id: "tax",
    slug: "tax",
    group: "core",
    title: "Tax & Accounting",
    summary:
      "Manage your business finances with professional tax and accounting support. From bookkeeping and financial reporting to VAT and Corporate Tax compliance, we help keep your financial operations accurate and organized.",
    icon: "calculator",
  },
  {
    id: "legal",
    slug: "legal",
    group: "core",
    title: "Legal & Compliance",
    summary:
      "Protect your business with reliable legal and regulatory support tailored to your needs. We help you understand applicable requirements, manage corporate documentation, and maintain compliance as your business grows.",
    icon: "scale",
  },
  {
    id: "corporate",
    slug: "corporate",
    group: "core",
    title: "Corporate Services",
    summary:
      "Keep your company running smoothly with essential corporate and administrative services. Our support covers ongoing business requirements, documentation, company changes, renewals, and other important corporate processes.",
    icon: "briefcase",
  },
  {
    id: "real-estate",
    slug: "real-estate",
    group: "core",
    title: "Real Estate Services",
    summary:
      "Find practical UAE property solutions for business, investment, and relocation requirements. We assist with property-related needs and help you navigate opportunities across commercial and residential real estate.",
    icon: "home",
  },
  {
    id: "golden-visa",
    slug: "golden-visa",
    group: "core",
    title: "Golden Visa",
    summary:
      "Explore long-term UAE residency options for investors, entrepreneurs, professionals, and eligible individuals. Our team guides you through the requirements, documentation, application process, and relevant procedures for obtaining your Golden Visa.",
    icon: "award",
  },
  {
    id: "company-formation",
    slug: "company-formation",
    group: "core",
    title: "Business Setup",
    summary:
      "Launch your UAE business with the right company structure and licensing solution. We assist with mainland, free zone, and offshore setups, helping you navigate registration, documentation, licensing, and other essential requirements.",
    icon: "building-2",
    href: routes.businessSetup,
  },

  // Ongoing Business Support
  {
    id: "accounting",
    slug: "accounting",
    group: "support",
    title: "Accounting & Bookkeeping",
    summary:
      "Keep your business finances organized with accurate bookkeeping, financial records, and reporting. Our accounting support helps you maintain clear financial visibility while staying prepared for your ongoing business and compliance requirements.",
    icon: "book-open",
  },
  {
    id: "vat",
    slug: "vat",
    group: "support",
    title: "VAT & Corporate Tax",
    summary:
      "Navigate UAE VAT and Corporate Tax requirements with professional support tailored to your business. We assist with registration, filing, calculations, and compliance so your business can meet its tax obligations confidently.",
    icon: "receipt",
  },
  {
    id: "audit",
    slug: "audit",
    group: "support",
    title: "Audit & Assurance",
    summary:
      "Gain greater confidence in your financial information with reliable audit and assurance services. Our team reviews your records, identifies potential issues, and helps ensure your financial reporting meets the relevant requirements.",
    icon: "search-check",
  },
  {
    id: "compliance",
    slug: "compliance",
    group: "support",
    title: "AML Compliance",
    summary:
      "Protect your business and meet UAE regulatory requirements with practical AML compliance support. We help businesses understand their obligations, establish appropriate procedures, and maintain the documentation required for ongoing compliance.",
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
