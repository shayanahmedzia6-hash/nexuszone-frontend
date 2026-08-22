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
  const showLogoBackground =
    Boolean(partner.logoLightBackground && partner.logoUrl && !isDark);
  const logoPath = partner.logoUrl
    ? decodeURIComponent(partner.logoUrl.split("?")[0]).toLowerCase()
    : "";
  const useUnoptimizedLogo =
    logoPath.endsWith(".svg") || logoPath.endsWith(".jfif");

  const tile = (
    <div
      className={cn(
        "flex h-full min-h-20 w-full items-center justify-center rounded-xl border border-border bg-background-secondary p-4 text-center transition-colors",
        partner.websiteUrl && "hover:border-primary/40",
      )}
    >
      {partner.logoUrl ? (
        <span
          className={cn(
            "inline-flex items-center justify-center",
            showLogoBackground &&
              "rounded-md bg-neutral-500/90 px-4 py-2.5",
          )}
        >
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
        </span>
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
