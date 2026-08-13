import { routes } from "@/lib/constants/routes";

export type NavLinkItem = {
  label: string;
  href: string;
  description?: string;
  icon?: string;
};

export type MegaMenuColumn = {
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
    type: "mega",
    sidebarTitle: "Setup Options",
    sidebar: [
      {
        label: "All Setup Options",
        href: routes.businessSetup,
        icon: "layout-grid",
      },
      {
        label: "Mainland Company",
        href: routes.businessSetupMainland,
        icon: "building-2",
      },
      {
        label: "Free Zone Company",
        href: routes.businessSetupFreeZone,
        icon: "landmark",
      },
      {
        label: "Offshore Company",
        href: routes.businessSetupOffshore,
        icon: "globe-2",
      },
      {
        label: "Branch Office",
        href: `${routes.businessSetup}#branch-office`,
        icon: "git-branch",
      },
      {
        label: "Professional License",
        href: `${routes.businessSetup}#professional-license`,
        icon: "badge-check",
      },
    ],
    columns: [
      {
        title: "Popular Routes",
        items: [
          {
            label: "Mainland Company",
            href: routes.businessSetupMainland,
            icon: "building-2",
            description: "Trade freely across the UAE mainland.",
          },
          {
            label: "Free Zone Company",
            href: routes.businessSetupFreeZone,
            icon: "landmark",
            description: "100% ownership with zone incentives.",
          },
          {
            label: "Offshore Company",
            href: routes.businessSetupOffshore,
            icon: "globe-2",
            description: "International holding and asset structures.",
          },
        ],
        footerLink: {
          label: "View All Setup Options",
          href: routes.businessSetup,
        },
      },
      {
        title: "Need Guidance?",
        items: [
          {
            label: "Cost Calculator",
            href: routes.costCalculator,
            icon: "calculator",
            description: "Estimate setup costs in minutes.",
          },
          {
            label: "Talk to an Expert",
            href: routes.contact,
            icon: "headset",
            description: "Get a tailored setup recommendation.",
          },
        ],
      },
    ],
    cta: {
      title: "Need Help Choosing?",
      description:
        "Our experts are ready to help you find the right setup for your business.",
      buttonLabel: "Talk to an Expert",
      href: routes.contact,
    },
  },
  {
    id: "services",
    label: "Services",
    type: "mega",
    sidebarTitle: "Explore Our Services",
    sidebar: [
      { label: "All Services", href: routes.services, icon: "layout-grid" },
      {
        label: "Business Setup",
        href: routes.businessSetup,
        icon: "briefcase",
      },
      {
        label: "Visa & PRO Services",
        href: `${routes.services}#visa-pro`,
        icon: "id-card",
      },
      {
        label: "Banking Solutions",
        href: `${routes.services}#banking`,
        icon: "landmark",
      },
      {
        label: "Tax & Accounting",
        href: `${routes.services}#tax`,
        icon: "calculator",
      },
      {
        label: "Legal & Compliance",
        href: `${routes.services}#legal`,
        icon: "scale",
      },
      {
        label: "Corporate Services",
        href: `${routes.services}#corporate`,
        icon: "building",
      },
      {
        label: "Real Estate Services",
        href: `${routes.services}#real-estate`,
        icon: "home",
      },
    ],
    columns: [
      {
        title: "Business Growth Solutions",
        items: [
          {
            label: "Market Entry Strategy",
            href: `${routes.services}#market-entry`,
            icon: "target",
          },
          {
            label: "Company Formation",
            href: routes.businessSetup,
            icon: "building-2",
          },
          {
            label: "Trade License Services",
            href: `${routes.services}#trade-license`,
            icon: "file-check",
          },
          {
            label: "Feasibility Study",
            href: `${routes.services}#feasibility`,
            icon: "clipboard-list",
          },
          {
            label: "Business Advisory",
            href: `${routes.services}#advisory`,
            icon: "lightbulb",
          },
        ],
        footerLink: { label: "View All Services", href: routes.services },
      },
      {
        title: "Ongoing Business Support",
        items: [
          {
            label: "Accounting & Bookkeeping",
            href: `${routes.services}#accounting`,
            icon: "book-open",
          },
          {
            label: "VAT & Corporate Tax",
            href: `${routes.services}#vat`,
            icon: "receipt",
          },
          {
            label: "Payroll Management",
            href: `${routes.services}#payroll`,
            icon: "wallet",
          },
          {
            label: "Audit & Assurance",
            href: `${routes.services}#audit`,
            icon: "search-check",
          },
          {
            label: "Compliance Management",
            href: `${routes.services}#compliance`,
            icon: "shield-check",
          },
        ],
        footerLink: { label: "View All Services", href: routes.services },
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
    id: "resources",
    label: "Resources",
    type: "dropdown",
    items: [
      { label: "Blog", href: routes.blog, icon: "newspaper" },
      { label: "Guides", href: `${routes.blog}#guides`, icon: "book-marked" },
      { label: "FAQs", href: routes.faq, icon: "circle-help" },
      {
        label: "Case Studies",
        href: `${routes.blog}#case-studies`,
        icon: "folder-kanban",
      },
      {
        label: "Cost Calculator",
        href: routes.costCalculator,
        icon: "calculator",
      },
    ],
  },
  {
    id: "about",
    label: "About Us",
    type: "dropdown",
    items: [
      { label: "About Nexus Zone", href: routes.about, icon: "info" },
      { label: "Our Team", href: `${routes.about}#team`, icon: "users" },
      {
        label: "Partners & Awards",
        href: `${routes.about}#partners`,
        icon: "award",
      },
      {
        label: "Why Nexus Zone",
        href: `${routes.about}#why-us`,
        icon: "sparkles",
      },
    ],
  },
  {
    id: "contact",
    label: "Contact Us",
    type: "link",
    href: routes.contact,
  },
];
