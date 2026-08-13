"use client";

import { ChevronDown, Globe } from "lucide-react";

import { cn } from "@/lib/utils/cn";

type LanguageSwitcherProps = {
  className?: string;
};

/** Visual-only language control for Phase 2 — no i18n backend. */
export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text",
        className,
      )}
      aria-haspopup="listbox"
      aria-expanded={false}
      aria-label="Language: English"
    >
      <Globe className="h-3.5 w-3.5" aria-hidden />
      <span>EN</span>
      <ChevronDown className="h-3 w-3" aria-hidden />
    </button>
  );
}
