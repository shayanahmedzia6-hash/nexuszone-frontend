"use client";

import { MessageCircle, Phone } from "lucide-react";

import { BrandLogo } from "@/components/navigation/brand-logo";
import { DesktopNavigation } from "@/components/navigation/desktop-navigation";
import { LanguageSwitcher } from "@/components/navigation/language-switcher";
import { MobileNavigation } from "@/components/navigation/mobile-navigation";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteContact } from "@/data/site-contact";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";

type HeaderProps = {
  className?: string;
};

export function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50",
        className,
      )}
    >
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
              {siteContact.whatsappDisplay}
            </a>
            <span className="h-3 w-px bg-border" aria-hidden />
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <div className="flex items-center justify-between gap-4">
            <BrandLogo priority />
            <DesktopNavigation />
            <div className="hidden items-center gap-3 xl:flex">
              <Button href={routes.contact} size="sm">
                Get Started
              </Button>
            </div>
            <MobileNavigation />
          </div>
        </Container>
      </div>
    </header>
  );
}
