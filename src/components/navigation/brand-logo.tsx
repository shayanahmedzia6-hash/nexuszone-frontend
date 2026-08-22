"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";

import { cn } from "@/lib/utils/cn";
import { routes } from "@/lib/constants/routes";
import { useThemeStore } from "@/store/theme-store";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

const LOGO_IMAGES = {
  light: "/logos/light-mode.png",
  dark: "/logos/dark-mode.png",
} as const;

/**
 * Theme-aware brand mark. Both assets stay mounted and crossfade so
 * toggles do not remount or jump. Do not recolor these PNGs in CSS.
 */
export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";

  return (
    <Link
      href={routes.home}
      className={cn(
        "relative inline-flex h-11 shrink-0 items-center leading-none sm:h-12 md:h-14",
        className,
      )}
      style={{ width: "clamp(11rem, calc(100vw - 6.5rem), 15rem)" }}
      aria-label="Nexus Zone home"
    >
      <Image
        src={LOGO_IMAGES.light}
        alt="Nexus Zone"
        width={560}
        height={160}
        priority={priority}
        sizes="(max-width: 768px) 272px, 280px"
        className={cn(
          "absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-300 ease-out motion-reduce:transition-none",
          isDark ? "opacity-0" : "opacity-100",
        )}
      />
      <Image
        src={LOGO_IMAGES.dark}
        alt=""
        width={560}
        height={160}
        priority={priority}
        sizes="(max-width: 768px) 272px, 280px"
        aria-hidden
        className={cn(
          "absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-300 ease-out motion-reduce:transition-none",
          isDark ? "opacity-100" : "opacity-0",
        )}
      />
    </Link>
  );
}
