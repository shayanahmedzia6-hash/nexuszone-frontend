import { type Service } from "@/types/service";

/** Static seed data — replace with API/CMS later. No invented business content. */
export const services: Service[] = [
  {
    id: "business-setup",
    slug: "business-setup",
    title: "Business Setup Services",
    summary:
      "Company formation across Mainland, Free Zone and Offshore tailored to your needs.",
    icon: "building-2",
  },
  {
    id: "pro-services",
    slug: "pro-services",
    title: "PRO Services",
    summary:
      "Visa processing, license renewals, document clearing and all government related services.",
    icon: "id-card",
  },
  {
    id: "corporate-services",
    slug: "corporate-services",
    title: "Corporate Services",
    summary:
      "Compliance, corporate governance, and business support to keep you ahead.",
    icon: "briefcase",
  },
  {
    id: "banking-assistance",
    slug: "banking-assistance",
    title: "Banking Assistance",
    summary:
      "Support in corporate bank account opening with leading banks in the UAE.",
    icon: "wallet",
  },
  {
    id: "consulting-services",
    slug: "consulting-services",
    title: "Consulting Services",
    summary:
      "Expert advice and strategies to help you start, manage and scale with confidence.",
    icon: "lightbulb",
  },
];
