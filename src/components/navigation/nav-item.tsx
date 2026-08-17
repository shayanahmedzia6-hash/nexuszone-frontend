"use client";

import { Link } from "@/i18n/navigation";
import { usePathname } from "@/i18n/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

import { DropdownMenu } from "@/components/navigation/dropdown-menu";
import { MegaMenu } from "@/components/navigation/mega-menu";
import { type NavigationItem } from "@/data/navigation";
import { NAV_LABEL_KEYS } from "@/lib/i18n/nav-labels";
import { cn } from "@/lib/utils/cn";

type NavItemProps = {
  item: NavigationItem;
};

export function NavItem({ item }: NavItemProps) {
  const t = useTranslations("nav");
  const labelKey = NAV_LABEL_KEYS[item.id];
  const label = labelKey ? t(labelKey) : item.label;
  const pathname = usePathname();
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rootRef = useRef<HTMLLIElement>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) close();
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onPointerDown);
    };
  }, [open, close]);

  useEffect(() => () => clearCloseTimer(), []);

  if (item.type === "link") {
    const isActive = pathname === item.href;
    return (
      <li>
        <Link
          href={item.href}
          className={cn(
            "relative inline-flex items-center px-2 py-2 text-sm font-medium transition-colors",
            isActive ? "text-primary" : "text-text hover:text-primary",
          )}
        >
          {label}
          {isActive ? (
            <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-primary" />
          ) : null}
        </Link>
      </li>
    );
  }

  const isOpen = open;
  const triggerLabel = label;

  const onTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen((value) => !value);
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
    }
  };

  return (
    <li
      ref={rootRef}
      className="relative"
      onMouseEnter={() => {
        clearCloseTimer();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        className={cn(
          "relative inline-flex items-center gap-1 px-2 py-2 text-sm font-medium transition-colors",
          isOpen ? "text-primary" : "text-text hover:text-primary",
        )}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-haspopup={item.type === "mega" ? "dialog" : "menu"}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={onTriggerKeyDown}
        onFocus={() => setOpen(true)}
      >
        {triggerLabel}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform",
            isOpen && "rotate-180",
          )}
          aria-hidden
        />
        {isOpen ? (
          <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-primary" />
        ) : null}
      </button>

      {isOpen && item.type === "dropdown" ? (
        <DropdownMenu id={menuId} items={item.items} onNavigate={close} />
      ) : null}

      {isOpen && item.type === "mega" ? (
        <MegaMenu
          id={menuId}
          sidebarTitle={item.sidebarTitle}
          sidebar={item.sidebar}
          columns={item.columns}
          cta={item.cta}
          onNavigate={close}
        />
      ) : null}
    </li>
  );
}
