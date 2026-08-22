"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NavigationLink } from "@/components/navigation/navigation-link";

import { Button } from "@/components/ui/button";
import { getNavIcon } from "@/components/navigation/nav-icons";
import {
  type MegaMenuColumn,
  type MegaMenuCta,
  type NavLinkItem,
} from "@/data/navigation";
import { useNavMega } from "@/lib/i18n/nav-mega";
import { cn } from "@/lib/utils/cn";

type MegaMenuProps = {
  menuId: string;
  id: string;
  sidebarTitle?: string;
  sidebar?: NavLinkItem[];
  columns: MegaMenuColumn[];
  cta?: MegaMenuCta;
  onNavigate?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export function MegaMenu({
  menuId,
  id,
  sidebarTitle,
  sidebar,
  columns,
  cta,
  onNavigate,
  onMouseEnter,
  onMouseLeave,
}: MegaMenuProps) {
  const { text } = useNavMega(menuId);
  const panelRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- portal mount guard
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;

    const panel = panelRef.current;
    const header = document.querySelector("header");
    if (!panel || !header) return;

    const updatePosition = () => {
      panel.style.top = `${header.getBoundingClientRect().bottom + 12}px`;
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [mounted]);

  if (!mounted) return null;

  return createPortal(
    <div
      ref={panelRef}
      id={id}
      role="region"
      aria-label="Submenu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "fixed top-24 left-1/2 z-[60] w-[min(72rem,calc(100vw-2rem))] -translate-x-1/2",
        "rounded-2xl border border-border bg-background/95 p-5 shadow-lg backdrop-blur-3xl",
      )}
    >
      <div
        className={cn(
          "grid gap-6",
          sidebar ? "lg:grid-cols-[14rem_1fr_14rem]" : "lg:grid-cols-[1fr_14rem]",
        )}
      >
        {sidebar ? (
          <div className="border-border/60 lg:border-r lg:pr-4">
            {sidebarTitle ? (
              <p className="mb-3 text-xs font-semibold tracking-wide text-text-muted uppercase">
                {text("sidebarTitle", sidebarTitle)}
              </p>
            ) : null}
            <ul className="flex flex-col gap-1">
              {sidebar.map((item, index) => {
                const Icon = getNavIcon(item.icon);
                const isActive = index === 0;
                return (
                  <li key={item.id}>
                    <NavigationLink
                      href={item.href}
                      scroll={false}
                      onClick={onNavigate}
                      className={cn(
                        "flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm transition-colors",
                        isActive
                          ? "bg-primary/10 font-medium text-primary"
                          : "text-text-muted hover:bg-surface hover:text-text",
                      )}
                    >
                      {Icon ? (
                        <Icon className="h-4 w-4 shrink-0" aria-hidden />
                      ) : null}
                      <span>{text(`sidebar.${item.id}`, item.label)}</span>
                    </NavigationLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}

        <div
          className={cn(
            "grid gap-6",
            columns.length > 1 ? "sm:grid-cols-2" : "grid-cols-1",
          )}
        >
          {columns.map((column) => (
            <div key={column.id} className="min-w-0">
              <p className="mb-3 text-sm font-semibold text-text">
                {text(`columns.${column.id}.title`, column.title)}
              </p>
              <ul className="flex flex-col gap-1">
                {column.items.map((item) => {
                  const Icon = getNavIcon(item.icon);
                  return (
                    <li key={item.id}>
                      <NavigationLink
                        href={item.href}
                        scroll={false}
                        onClick={onNavigate}
                        className="group flex items-start gap-2.5 rounded-lg px-2 py-2 text-sm text-text-muted transition-colors hover:bg-surface hover:text-text"
                      >
                        {Icon ? (
                          <Icon
                            className="mt-0.5 h-4 w-4 shrink-0 text-text-muted group-hover:text-primary"
                            aria-hidden
                          />
                        ) : null}
                        <span>
                          <span className="block font-medium text-text">
                            {text(
                              `columns.${column.id}.items.${item.id}.label`,
                              item.label,
                            )}
                          </span>
                          {item.description ? (
                            <span className="mt-0.5 block text-xs text-text-muted">
                              {text(
                                `columns.${column.id}.items.${item.id}.description`,
                                item.description,
                              )}
                            </span>
                          ) : null}
                        </span>
                      </NavigationLink>
                    </li>
                  );
                })}
              </ul>
              {column.footerLink ? (
                <NavigationLink
                  href={column.footerLink.href}
                  scroll={false}
                  onClick={onNavigate}
                  className="mt-3 inline-flex items-center gap-1 px-2 text-sm font-medium text-primary hover:underline"
                >
                  {text(
                    `columns.${column.id}.footerLink`,
                    column.footerLink.label,
                  )}
                  <span aria-hidden>→</span>
                </NavigationLink>
              ) : null}
            </div>
          ))}
        </div>

        {cta ? (
          <div className="rounded-xl border border-border/70 bg-background/70 p-5">
            <div className="mb-3 h-0.5 w-10 bg-primary" />
            {(() => {
              const Icon = getNavIcon("headset");
              return Icon ? (
                <Icon className="mb-3 h-6 w-6 text-primary" aria-hidden />
              ) : null;
            })()}
            <p className="mb-2 text-sm font-semibold text-text">
              {text("cta.title", cta.title)}
            </p>
            <p className="mb-4 text-sm text-text-muted">
              {text("cta.description", cta.description)}
            </p>
            <Button href={cta.href} size="sm">
              {text("cta.buttonLabel", cta.buttonLabel)}
            </Button>
          </div>
        ) : null}
      </div>
    </div>,
    document.body,
  );
}
