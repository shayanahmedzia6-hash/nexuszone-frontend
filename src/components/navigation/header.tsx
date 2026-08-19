"use client";

import { MessageCircle, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { BrandLogo } from "@/components/navigation/brand-logo";
import { DesktopNavigation } from "@/components/navigation/desktop-navigation";
import { LanguageSwitcher } from "@/components/navigation/language-switcher";
import { MobileNavigation } from "@/components/navigation/mobile-navigation";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { Container } from "@/components/ui/container";
import { siteContact } from "@/data/site-contact";
import { cn } from "@/lib/utils/cn";

type HeaderProps = {
  className?: string;
};

export function Header({ className }: HeaderProps) {
  const t = useTranslations("header");

  return (
    <header className={cn("sticky top-0 z-50", className)}>
      <div className="border-b border-glass-border bg-glass/90 backdrop-blur-md">
        <Container className="py-1.5">
          <div className="mb-1.5 hidden items-center justify-end gap-4 text-xs text-text-muted lg:flex">
            <a
              href={siteContact.phoneHref}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-text"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden />
              {siteContact.phoneDisplay}
            </a>
            <span className="h-3 w-px bg-border" aria-hidden />
            <a
              href={siteContact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-text"
            >
              <MessageCircle className="h-3.5 w-3.5" aria-hidden />
              {t("whatsappUs")}
            </a>
            <span className="h-3 w-px bg-border" aria-hidden />
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <div className="flex min-w-0 items-center justify-between gap-1.5 sm:gap-4 xl:grid xl:grid-cols-[1fr_auto_1fr]">
            <BrandLogo priority />
            <DesktopNavigation />
            <div className="justify-self-end">
              <MobileNavigation />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
