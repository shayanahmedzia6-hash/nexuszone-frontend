import { routes } from "@/lib/constants/routes";
import { siteContact } from "@/data/site-contact";

export type FooterLink = {
  id: string;
  label: string;
  href: string;
};

export type FooterSocialLink = {
  id: string;
  label: string;
  href: string;
  icon: string;
};

export const footerContent = {
  description:
    "Your trusted partner for business setup and corporate solutions across the UAE and beyond.",
  social: [
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: "linkedin",
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/",
      icon: "facebook",
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: "instagram",
    },
    // Temporarily hidden
    // { id: "youtube", label: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
  ] satisfies FooterSocialLink[],
  quickLinks: [
    { id: "home", label: "Home", href: routes.home },
    { id: "about", label: "About Us", href: routes.about },
    { id: "services", label: "Services", href: routes.services },
    { id: "how-it-works", label: "How It Works", href: "/#how-it-works" },
    { id: "faq", label: "FAQ", href: routes.faq },
    { id: "careers", label: "Careers", href: routes.careers },
    { id: "contact", label: "Contact Us", href: routes.contact },
  ] satisfies FooterLink[],
  services: [
    { id: "business-setup", label: "Business Setup", href: routes.businessSetup },
    { id: "pro-services", label: "PRO Services", href: `${routes.services}#visa-pro` },
    {
      id: "corporate-services",
      label: "Corporate Services",
      href: `${routes.services}#corporate`,
    },
    {
      id: "banking-assistance",
      label: "Banking Assistance",
      href: `${routes.services}#banking`,
    },
    {
      id: "consulting-services",
      label: "Consulting Services",
      href: `${routes.services}#corporate`,
    },
    { id: "visa-services", label: "Visa Services", href: `${routes.services}#visa-pro` },
  ] satisfies FooterLink[],
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
    { id: "privacy", label: "Privacy Policy", href: routes.privacy },
    { id: "terms", label: "Terms & Conditions", href: routes.terms },
  ] satisfies FooterLink[],
} as const;
