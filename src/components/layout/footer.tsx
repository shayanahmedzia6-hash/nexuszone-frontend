import { Link } from "@/i18n/navigation";
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { BrandLogo } from "@/components/navigation/brand-logo";
import { getSocialIcon } from "@/components/navigation/nav-icons";
import { NavigationLink } from "@/components/navigation/navigation-link";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { Container } from "@/components/ui/container";
import { footerContent } from "@/data/footer";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";

function FooterColumnHeading({ children }: { children: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-sm font-semibold tracking-wide text-text">
        {children}
      </h2>
      <span className="mt-2 block h-0.5 w-8 bg-primary" aria-hidden />
    </div>
  );
}

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  const linkLabel = (group: "quick" | "services", id: string, fallback: string) => {
    const key = `links.${group}.${id}` as const;
    return t.has(key) ? t(key) : fallback;
  };

  return (
    <footer
      className={cn(
        "relative mt-auto overflow-hidden border-t border-border bg-background-secondary text-text",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />

      <Container className="relative py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-5">
          <div className="space-y-4 md:col-span-2 xl:col-span-2">
            <BrandLogo />
            <p className="max-w-sm text-sm leading-relaxed text-text-muted">
              {t("tagline")}
            </p>
            <ul className="flex items-center gap-2">
              {footerContent.social.map((item) => {
                const Icon = getSocialIcon(item.icon);
                const socialLabel = t.has(`social.${item.id}`)
                  ? t(`social.${item.id}`)
                  : item.label;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={socialLabel}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface/60 text-text transition-colors hover:border-primary hover:text-primary"
                    >
                      {Icon ? <Icon className="h-4 w-4" /> : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <FooterColumnHeading>{t("quickLinks")}</FooterColumnHeading>
            <ul className="space-y-2.5">
              {footerContent.quickLinks.map((link) => (
                <li key={link.id}>
                  <NavigationLink
                    href={link.href}
                    className="cursor-pointer text-sm text-text-muted transition-colors hover:text-primary"
                  >
                    {linkLabel("quick", link.id, link.label)}
                  </NavigationLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterColumnHeading>{t("ourServices")}</FooterColumnHeading>
            <ul className="space-y-2.5">
              {footerContent.services.map((link) => (
                <li key={link.id}>
                  <NavigationLink
                    href={link.href}
                    className="cursor-pointer text-sm text-text-muted transition-colors hover:text-primary"
                  >
                    {linkLabel("services", link.id, link.label)}
                  </NavigationLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterColumnHeading>{t("contactUs")}</FooterColumnHeading>
            <ul className="space-y-3 text-sm text-text-muted">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{t("contactInfo.address")}</span>
              </li>
              <li>
                <a
                  href={footerContent.contact.phoneHref}
                  className="flex gap-2.5 transition-colors hover:text-primary"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{footerContent.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={footerContent.contact.emailHref}
                  className="flex gap-2.5 transition-colors hover:text-primary"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{footerContent.contact.email}</span>
                </a>
              </li>
              <li className="flex gap-2.5">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{t("hours")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 max-w-md">
          <FooterColumnHeading>{t("newsletterTitle")}</FooterColumnHeading>
          <p className="text-sm text-text-muted">{t("newsletterDescription")}</p>
          <NewsletterForm />
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{t("copyright", { year })}</p>
          <p className="flex flex-wrap gap-x-3 gap-y-1">
            <span className="inline-flex items-center gap-3">
              <Link href={routes.privacy} className="hover:text-primary">
                {t("privacyPolicy")}
              </Link>
            </span>
            <span className="inline-flex items-center gap-3">
              <span aria-hidden>|</span>
              <Link href={routes.terms} className="hover:text-primary">
                {t("termsConditions")}
              </Link>
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
