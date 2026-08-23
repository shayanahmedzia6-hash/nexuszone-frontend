"use client";

import { type Partner } from "@/types/partner";
import { OptimizedImage } from "@/components/media/optimized-image";
import { cn } from "@/lib/utils/cn";
import { useThemeStore } from "@/store/theme-store";

type PartnerCardProps = {
  partner: Partner;
  className?: string;
};

export function PartnerCard({ partner, className }: PartnerCardProps) {
  const isDark = useThemeStore((state) => state.theme) === "dark";
  // Some source logos are white-on-transparent (made for dark surfaces) — give
  // those a dark tile of their own instead of a floating grey patch, so every
  // card reads as a clean, deliberate tile rather than a mismatched fix-up.
  const needsDarkTile = Boolean(
    partner.logoLightBackground && partner.logoUrl && !isDark,
  );
  const logoPath = partner.logoUrl
    ? decodeURIComponent(
        partner.logoUrl.split("?")[0] ?? partner.logoUrl,
      ).toLowerCase()
    : "";
  const useUnoptimizedLogo =
    logoPath.endsWith(".svg") || logoPath.endsWith(".jfif");

  const tile = (
    <div
      className={cn(
        "flex h-full min-h-20 w-full items-center justify-center rounded-xl border p-4 text-center transition-colors",
        needsDarkTile
          ? "border-transparent bg-text"
          : "border-border bg-background-secondary",
        partner.websiteUrl && "hover:border-primary/40",
      )}
    >
      {partner.logoUrl ? (
        <OptimizedImage
          src={partner.logoUrl}
          alt={partner.name}
          width={partner.logoLarge ? 160 : 120}
          height={partner.logoLarge ? 72 : 48}
          loading="eager"
          unoptimized={useUnoptimizedLogo}
          className={cn(
            "w-auto object-contain",
            partner.logoLarge ? "h-14" : "h-10",
          )}
        />
      ) : (
        <span className="text-sm leading-snug font-medium text-text-muted">
          {partner.name}
        </span>
      )}
    </div>
  );

  return (
    <article className={cn("h-full", className)}>
      {partner.websiteUrl ? (
        <a
          href={partner.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {tile}
        </a>
      ) : (
        tile
      )}
    </article>
  );
}
