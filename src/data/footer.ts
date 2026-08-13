import { routes } from "@/lib/constants/routes";
import { siteContact } from "@/data/site-contact";

export const footerContent = {
  description:
    "Your trusted partner for business setup and corporate solutions across the UAE and beyond.",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
    { label: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: "instagram",
    },
    { label: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
  ],
  quickLinks: [
    { label: "Home", href: routes.home },
    { label: "About Us", href: routes.about },
    { label: "Services", href: routes.services },
    { label: "How It Works", href: routes.howItWorks },
    { label: "Blog", href: routes.blog },
    { label: "FAQ", href: routes.faq },
    { label: "Contact Us", href: routes.contact },
  ],
  services: [
    { label: "Business Setup", href: routes.businessSetup },
    { label: "PRO Services", href: `${routes.services}#visa-pro` },
    { label: "Corporate Services", href: `${routes.services}#corporate` },
    { label: "Banking Assistance", href: `${routes.services}#banking` },
    { label: "Consulting Services", href: `${routes.services}#advisory` },
    { label: "Visa Services", href: `${routes.services}#visa-pro` },
  ],
  resources: [
    { label: "Blog", href: routes.blog },
    { label: "Guides", href: `${routes.blog}#guides` },
    { label: "Case Studies", href: `${routes.blog}#case-studies` },
    { label: "Free Consultation", href: routes.contact },
    { label: "FAQs", href: routes.faq },
  ],
  contact: {
    address: siteContact.address,
    phone: siteContact.phoneDisplay,
    phoneHref: siteContact.phoneHref,
    email: siteContact.email,
    emailHref: siteContact.emailHref,
    hours: siteContact.hours,
  },
  newsletter: {
    title: "Subscribe to Our Newsletter",
    description: "Get the latest updates and insights delivered to your inbox.",
    placeholder: "Enter your email",
  },
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;
