import { routes } from "@/lib/constants/routes";

export type NavLinkItem = {
  id: string;
  label: string;
  href: string;
  description?: string;
  icon?: string;
};

export type MegaMenuColumn = {
  id: string;
  title: string;
  items: NavLinkItem[];
  footerLink?: NavLinkItem;
};

export type MegaMenuCta = {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
};

export type NavigationItem =
  | {
      id: string;
      label: string;
      type: "link";
      href: string;
    }
  | {
      id: string;
      label: string;
      type: "dropdown";
      items: NavLinkItem[];
    }
  | {
      id: string;
      label: string;
      type: "mega";
      columns: MegaMenuColumn[];
      cta?: MegaMenuCta;
      sidebar?: NavLinkItem[];
      sidebarTitle?: string;
    };

export const navigationItems: NavigationItem[] = [
  {
    id: "home",
    label: "Home",
    type: "link",
    href: routes.home,
  },
  {
    id: "business-setup",
    label: "Business Setup",
    type: "link",
    href: routes.businessSetup,
  },
  {
    id: "services",
    label: "Services",
    type: "mega",
    sidebarTitle: "Explore Our Services",
    sidebar: [
      {
        id: "all-services",
        label: "All Services",
        href: routes.services,
        icon: "layout-grid",
      },
      {
        id: "visa-pro",
        label: "Visa & PRO Services",
        href: `${routes.services}#visa-pro`,
        icon: "id-card",
      },
      {
        id: "banking",
        label: "Banking Solutions",
        href: `${routes.services}#banking`,
        icon: "landmark",
      },
      {
        id: "tax-accounting",
        label: "Tax & Accounting",
        href: `${routes.services}#tax`,
        icon: "calculator",
      },
      {
        id: "legal-compliance",
        label: "Legal & Compliance",
        href: `${routes.services}#legal`,
        icon: "scale",
      },
      {
        id: "corporate-services",
        label: "Corporate Services",
        href: `${routes.services}#corporate`,
        icon: "building",
      },
      {
        id: "real-estate",
        label: "Real Estate Services",
        href: `${routes.services}#real-estate`,
        icon: "home",
      },
    ],
    columns: [
      {
        id: "ongoing-support",
        title: "Ongoing Business Support",
        items: [
          {
            id: "accounting",
            label: "Accounting & Bookkeeping",
            href: `${routes.services}#accounting`,
            icon: "book-open",
          },
          {
            id: "vat",
            label: "VAT & Corporate Tax",
            href: `${routes.services}#vat`,
            icon: "receipt",
          },
          {
            id: "audit",
            label: "Audit & Assurance",
            href: `${routes.services}#audit`,
            icon: "search-check",
          },
          {
            id: "aml-compliance",
            label: "AML Compliance",
            href: `${routes.services}#compliance`,
            icon: "shield-check",
          },
          {
            id: "golden-visa",
            label: "Golden Visa",
            href: `${routes.services}#golden-visa`,
            icon: "award",
          },
        ],
        footerLink: {
          id: "view-all-services",
          label: "View All Services",
          href: routes.services,
        },
      },
    ],
    cta: {
      title: "Need Help Choosing?",
      description:
        "Our experts are ready to help you find the right solution for your business.",
      buttonLabel: "Talk to an Expert",
      href: routes.contact,
    },
  },
  {
    id: "faq",
    label: "FAQs",
    type: "link",
    href: routes.faq,
  },
  {
    id: "about",
    label: "About Us",
    type: "dropdown",
    items: [
      {
        id: "founder-ceo",
        label: "Founder & CEO",
        href: `${routes.about}#founder-ceo`,
        icon: "user-circle",
      },
      {
        id: "our-team",
        label: "Our Team",
        href: `${routes.about}#founder-ceo`,
        icon: "users",
      },
      {
        id: "about-nexus",
        label: "About Nexus Zone",
        href: `${routes.about}#about-intro`,
        icon: "info",
      },
      {
        id: "partners-awards",
        label: "Partners & Awards",
        href: `${routes.about}#partners`,
        icon: "award",
      },
      {
        id: "why-nexus",
        label: "Why Nexus Zone",
        href: `${routes.about}#why-us`,
        icon: "sparkles",
      },
    ],
  },
  {
    id: "careers",
    label: "Careers",
    type: "link",
    href: routes.careers,
  },
  {
    id: "contact",
    label: "Contact Us",
    type: "link",
    href: routes.contact,
  },
];
