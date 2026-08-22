import { type NeedCategory } from "@/types/what-you-need";
import { routes } from "@/lib/constants/routes";

export const needCategories: NeedCategory[] = [
  {
    id: "start-a-business",
    icon: "building-2",
    title: "Start a Business",
    description:
      "Launch your company in Mainland, Free Zone, Offshore or International.",
    href: routes.businessSetup,
  },
  {
    id: "visa-pro",
    icon: "id-card",
    title: "Visa & PRO Services",
    description:
      "Investor, Partner, Employment Visas and all PRO services under one roof.",
    href: routes.services,
  },
  {
    id: "banking",
    icon: "landmark",
    title: "Banking Solutions",
    description:
      "Open corporate bank accounts with our trusted banking partners.",
    href: routes.services,
  },
  {
    id: "tax-accounting",
    icon: "calculator",
    title: "Tax & Accounting",
    description:
      "Corporate Tax, VAT, Accounting & Bookkeeping — we handle it all.",
    href: routes.services,
  },
  {
    id: "legal-compliance",
    icon: "scale",
    title: "Legal & Compliance",
    description:
      "Legal advisory, contract drafting and full compliance support.",
    href: routes.services,
  },
];
