import { routes } from "@/lib/constants/routes";

export const finalCtaContent = {
  eyebrow: "Ready to Get Started?",
  titlePrimary: "Let's Build Your",
  titleAccent: "Success Story Together",
  description:
    "Partner with Nexus Zone and experience seamless business setup and corporate solutions that drive real growth.",
  primaryCta: {
    label: "Get Started Today",
    href: routes.contact,
  },
  secondaryCta: {
    label: "Schedule a Consultation",
    href: routes.contact,
  },
} as const;
