import Link from "next/link";
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { BrandLogo } from "@/components/navigation/brand-logo";
import { getSocialIcon } from "@/components/navigation/nav-icons";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { Container } from "@/components/ui/container";
import { footerContent } from "@/data/footer";
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
  const year = new Date().getFullYear();

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
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-6">
          <div className="space-y-4 md:col-span-2 xl:col-span-2">
            <BrandLogo />
            <p className="max-w-sm text-sm leading-relaxed text-text-muted">
              {footerContent.description}
            </p>
            <ul className="flex items-center gap-2">
              {footerContent.social.map((item) => {
                const Icon = getSocialIcon(item.icon);
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
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
            <FooterColumnHeading>Quick Links</FooterColumnHeading>
            <ul className="space-y-2.5">
              {footerContent.quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterColumnHeading>Our Services</FooterColumnHeading>
            <ul className="space-y-2.5">
              {footerContent.services.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterColumnHeading>Resources</FooterColumnHeading>
            <ul className="space-y-2.5">
              {footerContent.resources.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8 md:col-span-2 xl:col-span-1">
            <div>
              <FooterColumnHeading>Contact Us</FooterColumnHeading>
              <ul className="space-y-3 text-sm text-text-muted">
                <li className="flex gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{footerContent.contact.address}</span>
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
                  <span>{footerContent.contact.hours}</span>
                </li>
              </ul>
            </div>

            <div>
              <FooterColumnHeading>
                {footerContent.newsletter.title}
              </FooterColumnHeading>
              <p className="text-sm text-text-muted">
                {footerContent.newsletter.description}
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Nexus Zone. All Rights Reserved.</p>
          <p className="flex flex-wrap gap-x-3 gap-y-1">
            {footerContent.legal.map((item, index) => (
              <span key={item.href} className="inline-flex items-center gap-3">
                {index > 0 ? <span aria-hidden>|</span> : null}
                <Link href={item.href} className="hover:text-primary">
                  {item.label}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </Container>
    </footer>
  );
}
