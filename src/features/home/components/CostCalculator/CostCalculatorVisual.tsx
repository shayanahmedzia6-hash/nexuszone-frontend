"use client";

import Image from "next/image";

import { cn } from "@/lib/utils/cn";
import { useThemeStore } from "@/store/theme-store";

type CostCalculatorVisualProps = {
  className?: string;
};

const CALCULATOR_IMAGES = {
  light: "/images/calculator/light-mode.png",
  dark: "/images/calculator/dark-mode.png",
} as const;

/**
 * Both calculator assets stay mounted and crossfade so theme toggles do not
 * remount/re-crop and jump. Shared object-position keeps the consultation
 * and skyline framed the same in light and dark.
 */
export function CostCalculatorVisual({ className }: CostCalculatorVisualProps) {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";

  return (
    <div
      className={cn("absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <div className="absolute inset-0">
        <Image
          src={CALCULATOR_IMAGES.light}
          alt=""
          fill
          sizes="100vw"
          quality={85}
          className={cn(
            "object-cover object-[42%_48%] transition-opacity duration-500 ease-out motion-reduce:transition-none lg:object-[48%_58%]",
            isDark ? "opacity-0" : "opacity-100",
          )}
        />
        <Image
          src={CALCULATOR_IMAGES.dark}
          alt=""
          fill
          sizes="100vw"
          quality={85}
          className={cn(
            "object-cover object-[42%_48%] transition-opacity duration-500 ease-out motion-reduce:transition-none lg:object-[48%_58%]",
            isDark ? "opacity-100" : "opacity-0",
          )}
        />
      </div>

      <div
        className={cn(
          "absolute inset-0 lg:hidden",
          isDark ? "bg-background/70" : "bg-background/65",
        )}
      />
      <div
        className={cn(
          "absolute inset-0 hidden transition-opacity duration-500 motion-reduce:transition-none lg:block",
          isDark
            ? "bg-gradient-to-r from-background/50 via-background/25 to-transparent"
            : "bg-gradient-to-r from-background/45 via-background/15 to-transparent",
        )}
      />
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-12 bg-gradient-to-b to-transparent transition-opacity duration-500 motion-reduce:transition-none",
          isDark ? "from-background/40" : "from-background/25",
        )}
      />
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t to-transparent transition-opacity duration-500 motion-reduce:transition-none",
          isDark ? "from-background/40" : "from-background/25",
        )}
      />
    </div>
  );
}
