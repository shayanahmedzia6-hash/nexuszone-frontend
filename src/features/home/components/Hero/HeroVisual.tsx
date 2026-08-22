"use client";

import Image from "next/image";

import { cn } from "@/lib/utils/cn";
import { useThemeStore } from "@/store/theme-store";

type HeroVisualProps = {
  className?: string;
};

const HERO_IMAGES = {
  light: "/images/hero/light-mode.jpeg",
  dark: "/images/hero/dark-mode.jpeg",
} as const;

/**
 * Both hero assets stay mounted and crossfade so theme toggles do not
 * remount/re-crop and jump. Ken Burns zoom runs on a dedicated layer so
 * Next/Image absolute positioning does not cancel the transform.
 */
export function HeroVisual({ className }: HeroVisualProps) {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";

  return (
    <div
      className={cn("absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <div className="hero-ken-burns absolute -inset-[9%]">
        <div className="relative h-full w-full">
          <Image
            src={HERO_IMAGES.light}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={85}
            className={cn(
              "object-cover object-[40%_38%] transition-opacity duration-500 ease-out motion-reduce:transition-none lg:object-[52%_40%]",
              isDark ? "opacity-0" : "opacity-100",
            )}
          />
          <Image
            src={HERO_IMAGES.dark}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={85}
            className={cn(
              "object-cover object-[40%_38%] transition-opacity duration-500 ease-out motion-reduce:transition-none lg:object-[52%_40%]",
              isDark ? "opacity-100" : "opacity-0",
            )}
          />
        </div>
      </div>

      <div
        className={cn(
          "absolute inset-0 lg:hidden",
          isDark ? "bg-background/80" : "bg-background/75",
        )}
      />
      <div
        className={cn(
          "absolute inset-0 hidden transition-opacity duration-500 motion-reduce:transition-none lg:block",
          isDark
            ? "bg-gradient-to-r from-background via-background/70 to-transparent"
            : "bg-gradient-to-r from-background/75 via-background/25 to-transparent",
        )}
      />
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t to-transparent transition-opacity duration-500 motion-reduce:transition-none",
          isDark ? "from-background" : "from-background/40",
        )}
      />
    </div>
  );
}
