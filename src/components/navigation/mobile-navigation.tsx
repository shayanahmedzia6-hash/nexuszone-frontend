"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";

import { BrandLogo } from "@/components/navigation/brand-logo";
import { getNavIcon } from "@/components/navigation/nav-icons";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { Button } from "@/components/ui/button";
import { navigationItems, type NavigationItem } from "@/data/navigation";
import { siteContact } from "@/data/site-contact";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";
import { useUiStore } from "@/store/ui-store";

function MobileAccordionItem({
  item,
  onNavigate,
}: {
  item: NavigationItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  if (item.type === "link") {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className="block border-b border-border px-1 py-3 text-base font-medium text-text"
      >
        {item.label}
      </Link>
    );
  }

  const links =
    item.type === "dropdown"
      ? item.items
      : [
          ...(item.sidebar ?? []),
          ...item.columns.flatMap((column) => column.items),
        ];

  return (
    <div className="border-b border-border">
      <button
        type="button"
        className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-text"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {item.label}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>
      {open ? (
        <ul id={panelId} className="flex flex-col gap-1 pb-3">
          {links.map((link) => {
            const Icon = getNavIcon(link.icon);
            return (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-text-muted hover:bg-surface hover:text-text"
                >
                  {Icon ? <Icon className="h-4 w-4" aria-hidden /> : null}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export function MobileNavigation() {
  const isOpen = useUiStore((state) => state.isMobileNavOpen);
  const openMobileNav = useUiStore((state) => state.openMobileNav);
  const closeMobileNav = useUiStore((state) => state.closeMobileNav);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileNav();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeMobileNav]);

  return (
    <>
      <div className="flex items-center gap-2 xl:hidden">
        <ThemeToggle />
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-text"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => (isOpen ? closeMobileNav() : openMobileNav())}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[60] xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu overlay"
            onClick={closeMobileNav}
          />
          <div className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-background shadow-lg">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <BrandLogo />
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
                aria-label="Close menu"
                onClick={closeMobileNav}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-2">
              {navigationItems.map((item) => (
                <MobileAccordionItem
                  key={item.id}
                  item={item}
                  onNavigate={closeMobileNav}
                />
              ))}
            </div>

            <div className="space-y-3 border-t border-border p-4">
              <a
                href={siteContact.phoneHref}
                className="flex items-center gap-2 text-sm text-text-muted"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {siteContact.phoneDisplay}
              </a>
              <a
                href={siteContact.whatsappHref}
                className="flex items-center gap-2 text-sm text-text-muted"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                {siteContact.whatsappDisplay}
              </a>
              <Button href={routes.contact} className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
