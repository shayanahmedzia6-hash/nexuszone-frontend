"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useId, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";

import { BrandLogo } from "@/components/navigation/brand-logo";
import { LanguageSwitcher } from "@/components/navigation/language-switcher";
import { DynamicIcon } from "@/components/navigation/nav-icons";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  navigationItems,
  type MegaMenuColumn,
  type NavLinkItem,
  type NavigationItem,
} from "@/data/navigation";
import { siteContact } from "@/data/site-contact";
import { NAV_LABEL_KEYS } from "@/lib/i18n/nav-labels";
import { cn } from "@/lib/utils/cn";
import { useUiStore } from "@/store/ui-store";

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.34,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.16 },
  },
};

function AccordionPanel({
  id,
  open,
  children,
  className,
}: {
  id: string;
  open: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <MotionConfig reducedMotion="never">
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={id}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <motion.div
              className={className}
              variants={listVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {children}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </MotionConfig>
  );
}

function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

function NavLinkRow({
  link,
  onNavigate,
  className,
}: {
  link: NavLinkItem;
  onNavigate: () => void;
  className?: string;
}) {
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className={cn(
        "flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-text-muted transition-colors hover:bg-surface hover:text-text",
        className,
      )}
    >
      <DynamicIcon name={link.icon} className="h-4 w-4 shrink-0" />
      <span>{link.label}</span>
    </Link>
  );
}

function NestedAccordionGroup({
  column,
  openId,
  onToggle,
  onNavigate,
}: {
  column: MegaMenuColumn;
  openId: string | null;
  onToggle: (id: string) => void;
  onNavigate: () => void;
}) {
  const panelId = useId();
  const isOpen = openId === column.title;

  return (
    <StaggerItem>
      <div className="rounded-lg border border-border/70 bg-background/60">
        <button
          type="button"
          className="flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left text-sm font-medium text-text"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => onToggle(column.title)}
        >
          <span>{column.title}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-text-muted transition-transform duration-300 ease-out",
              isOpen && "rotate-180 text-primary",
            )}
            aria-hidden
          />
        </button>
        <AccordionPanel
          id={panelId}
          open={isOpen}
          className="space-y-0.5 border-t border-border/60 px-1.5 py-2"
        >
          {column.items.map((link) => (
            <StaggerItem key={link.href + link.label}>
              <NavLinkRow link={link} onNavigate={onNavigate} />
            </StaggerItem>
          ))}
          {column.footerLink ? (
            <StaggerItem>
              <Link
                href={column.footerLink.href}
                onClick={onNavigate}
                className="mt-1 block px-3 py-2 text-sm font-medium text-primary"
              >
                {column.footerLink.label} →
              </Link>
            </StaggerItem>
          ) : null}
        </AccordionPanel>
      </div>
    </StaggerItem>
  );
}

function MobileNavItem({
  item,
  isOpen,
  onToggle,
  onNavigate,
}: {
  item: NavigationItem;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const t = useTranslations("nav");
  const labelKey = NAV_LABEL_KEYS[item.id];
  const label =
    labelKey && t.has(labelKey) ? t(labelKey) : item.label;
  const panelId = useId();
  const [openNestedId, setOpenNestedId] = useState<string | null>(null);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (!isOpen) setOpenNestedId(null);
  }

  if (item.type === "link") {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className="block rounded-lg px-3 py-3 text-base font-medium text-text transition-colors hover:bg-surface"
      >
        {label}
      </Link>
    );
  }

  const isMega = item.type === "mega";
  const flatLinks = item.type === "dropdown" ? item.items : [];
  const overviewLink = isMega ? item.sidebar?.[0] : undefined;
  const extraSidebarLinks = isMega
    ? (item.sidebar ?? []).slice(1).filter((sidebarLink) => {
        const columnLabels = new Set(
          item.columns.flatMap((column) =>
            column.items.map((entry) => entry.label.toLowerCase()),
          ),
        );
        return !columnLabels.has(sidebarLink.label.toLowerCase());
      })
    : [];

  return (
    <div className="rounded-lg">
      <button
        type="button"
        className={cn(
          "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-3 text-left text-base font-medium transition-colors",
          isOpen ? "bg-surface text-primary" : "text-text hover:bg-surface",
        )}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span>{label}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-300 ease-out",
            isOpen && "rotate-180",
          )}
          aria-hidden
        />
      </button>

      <AccordionPanel
        id={panelId}
        open={isOpen}
        className="mt-1 space-y-1.5 pb-2 pl-2"
      >
        {item.type === "dropdown"
          ? flatLinks.map((link) => (
              <StaggerItem key={link.href + link.label}>
                <NavLinkRow link={link} onNavigate={onNavigate} />
              </StaggerItem>
            ))
          : null}

        {isMega ? (
          <>
            {overviewLink ? (
              <StaggerItem>
                <NavLinkRow
                  link={overviewLink}
                  onNavigate={onNavigate}
                  className="font-medium text-text"
                />
              </StaggerItem>
            ) : null}

            {item.columns.map((column) => (
              <NestedAccordionGroup
                key={column.title}
                column={column}
                openId={openNestedId}
                onToggle={(id) =>
                  setOpenNestedId((current) => (current === id ? null : id))
                }
                onNavigate={onNavigate}
              />
            ))}

            {extraSidebarLinks.map((link) => (
              <StaggerItem key={link.href + link.label}>
                <NavLinkRow link={link} onNavigate={onNavigate} />
              </StaggerItem>
            ))}

            {item.cta ? (
              <StaggerItem className="pt-2">
                <Button
                  href={item.cta.href}
                  size="sm"
                  className="w-full"
                  onClick={onNavigate}
                >
                  {item.cta.buttonLabel}
                </Button>
              </StaggerItem>
            ) : null}
          </>
        ) : null}
      </AccordionPanel>
    </div>
  );
}

const sidebarPanelVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      type: "tween" as const,
      duration: 0.48,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    x: "100%",
    transition: {
      type: "tween" as const,
      duration: 0.36,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

const sidebarNavListVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.18,
    },
  },
};

const sidebarNavItemVariants = {
  hidden: {
    opacity: 0,
    x: 24,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.32,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function MobileNavigation() {
  const t = useTranslations("header");
  const isOpen = useUiStore((state) => state.isMobileNavOpen);
  const openMobileNav = useUiStore((state) => state.openMobileNav);
  const closeMobileNav = useUiStore((state) => state.closeMobileNav);
  const lenis = useLenis();
  const [openItemId, setOpenItemId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- standard client-mount guard for the portal below
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- bundled with the DOM/lenis side effects below, not standalone state derivation
      setOpenItemId(null);
      return;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenis?.stop();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileNav();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      lenis?.start();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeMobileNav, lenis]);

  const drawer =
    mounted &&
    createPortal(
      <MotionConfig reducedMotion="never">
        <AnimatePresence>
          {isOpen ? (
            <motion.button
              key="mobile-nav-overlay"
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed inset-0 z-[100] bg-black/45 xl:hidden"
              aria-label="Close menu overlay"
              onClick={closeMobileNav}
            />
          ) : null}

          {isOpen ? (
            <motion.aside
              key="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              variants={sidebarPanelVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="fixed inset-y-0 right-0 z-[101] flex h-dvh w-[min(100%,22rem)] flex-col border-l border-border bg-background shadow-2xl xl:hidden"
            >
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

              <nav
                className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-3"
                data-lenis-prevent
                aria-label="Mobile primary"
              >
                <motion.ul
                  className="flex flex-col gap-1"
                  variants={sidebarNavListVariants}
                  initial="hidden"
                  animate="show"
                >
                  {navigationItems.map((item) => (
                    <motion.li key={item.id} variants={sidebarNavItemVariants}>
                      <MobileNavItem
                        item={item}
                        isOpen={openItemId === item.id}
                        onToggle={() =>
                          setOpenItemId((current) =>
                            current === item.id ? null : item.id,
                          )
                        }
                        onNavigate={closeMobileNav}
                      />
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>

              <div className="shrink-0 space-y-3 border-t border-border p-4">
                <LanguageSwitcher className="text-text" />
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
                  {t("whatsappUs")}
                </a>
              </div>
            </motion.aside>
          ) : null}
        </AnimatePresence>
      </MotionConfig>,
      document.body,
    );

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
      {drawer}
    </>
  );
}
