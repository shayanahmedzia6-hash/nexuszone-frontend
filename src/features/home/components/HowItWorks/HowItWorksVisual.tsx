"use client";

import Image from "next/image";

import { cn } from "@/lib/utils/cn";
import { useThemeStore } from "@/store/theme-store";

type HowItWorksVisualProps = {
  className?: string;
};

const HOW_IT_WORKS_IMAGES = {
  light: "/images/how-it-works/light-mode.png",
  dark: "/images/how-it-works/dark-mode.png",
} as const;

/**
 * Both section assets stay mounted and crossfade so theme toggles do not
 * remount/re-crop. Shared object-position keeps the terrace + skyline framed.
 */
export function HowItWorksVisual({ className }: HowItWorksVisualProps) {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";

  return (
    <div
      className={cn("absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <div className="absolute inset-0">
        <Image
          src={HOW_IT_WORKS_IMAGES.light}
          alt=""
          fill
          sizes="100vw"
          quality={85}
          className={cn(
            "object-cover object-[50%_45%] transition-opacity duration-500 ease-out motion-reduce:transition-none lg:object-[50%_40%]",
            isDark ? "opacity-0" : "opacity-100",
          )}
        />
        <Image
          src={HOW_IT_WORKS_IMAGES.dark}
          alt=""
          fill
          sizes="100vw"
          quality={85}
          className={cn(
            "object-cover object-[50%_45%] transition-opacity duration-500 ease-out motion-reduce:transition-none lg:object-[50%_40%]",
            isDark ? "opacity-100" : "opacity-0",
          )}
        />
      </div>

      <div
        className={cn(
          "absolute inset-0 lg:hidden",
          isDark ? "bg-background/70" : "bg-background/60",
        )}
      />
      <div
        className={cn(
          "absolute inset-0 hidden transition-opacity duration-500 motion-reduce:transition-none lg:block",
          isDark
            ? "bg-gradient-to-b from-background/55 via-background/35 to-background/50"
            : "bg-gradient-to-b from-background/40 via-background/20 to-background/35",
        )}
      />
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-16 bg-gradient-to-b to-transparent transition-opacity duration-500 motion-reduce:transition-none",
          isDark ? "from-background/50" : "from-background/30",
        )}
      />
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t to-transparent transition-opacity duration-500 motion-reduce:transition-none",
          isDark ? "from-background/50" : "from-background/30",
        )}
      />
    </div>
  );
}
