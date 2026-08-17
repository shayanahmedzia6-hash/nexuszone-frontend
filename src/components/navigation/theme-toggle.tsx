"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils/cn";
import { useThemeStore } from "@/store/theme-store";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const t = useTranslations("header");
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t("switchToLight") : t("switchToDark")}
      title={isDark ? t("switchToLight") : t("switchToDark")}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/60 text-text transition-colors",
        "hover:border-primary/40 hover:text-primary",
        className,
      )}
    >
      {isDark ? (
        <Sun className="h-4 w-4" aria-hidden />
      ) : (
        <Moon className="h-4 w-4" aria-hidden />
      )}
    </button>
  );
}
