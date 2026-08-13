import { type BusinessSetupOption } from "@/types/business-setup";
import { routes } from "@/lib/constants/routes";

export const businessSetupOptions: BusinessSetupOption[] = [
  {
    id: "mainland",
    type: "mainland",
    slug: "mainland",
    title: "Mainland Company",
    summary:
      "Operate anywhere in the UAE market and internationally with full flexibility.",
    icon: "building-2",
    href: routes.businessSetupMainland,
  },
  {
    id: "free-zone",
    type: "free-zone",
    slug: "free-zone",
    title: "Free Zone Company",
    summary:
      "100% foreign ownership, full profit repatriation and world-class infrastructure.",
    icon: "globe",
    href: routes.businessSetupFreeZone,
  },
  {
    id: "offshore",
    type: "offshore",
    slug: "offshore",
    title: "Offshore Company",
    summary:
      "Ideal for asset protection, international trade and global business operations.",
    icon: "landmark",
    href: routes.businessSetupOffshore,
  },
  {
    id: "branch",
    type: "branch",
    slug: "branch-office",
    title: "Branch Office",
    summary: "Expand your existing business to the UAE seamlessly.",
    icon: "home",
    href: `${routes.businessSetup}#branch-office`,
  },
  {
    id: "professional-license",
    type: "professional-license",
    slug: "professional-license",
    title: "Professional Services License",
    summary:
      "Perfect for consultants, freelancers and service-based businesses.",
    icon: "users",
    href: `${routes.businessSetup}#professional-license`,
  },
];
