"use client";

import { ChevronDown, Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils/cn";

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("header");
  const tLang = useTranslations("languages");

  const handleSelect = (next: Locale) => {
    setOpen(false);
    router.replace(pathname, { locale: next });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text",
          className,
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("languageLabel", { language: tLang(locale) })}
      >
        <Globe className="h-3.5 w-3.5" aria-hidden />
        <span className="uppercase">{locale}</span>
        <ChevronDown className="h-3 w-3" aria-hidden />
      </button>

      {open ? (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <ul
            role="listbox"
            className="absolute top-full right-0 z-50 mt-2 w-36 overflow-hidden rounded-md border border-border bg-background py-1 shadow-lg"
          >
            {locales.map((code) => (
              <li key={code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={code === locale}
                  onClick={() => handleSelect(code)}
                  className={cn(
                    "flex w-full items-center justify-between px-3 py-2 text-left text-sm transition-colors hover:bg-surface",
                    code === locale
                      ? "font-semibold text-primary"
                      : "text-text",
                  )}
                >
                  {tLang(code)}
                  <span className="text-xs text-text-muted uppercase">
                    {code}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}
