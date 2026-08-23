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
  // Some source logos are white (or white + a colored accent) on transparent,
  // made for dark surfaces. Keep every tile on the same clean light card and
  // crush those specific logos to a solid black silhouette in light mode so
  // they read against it — brightness(0) avoids the hue-shift a plain invert
  // would cause on any colored accent. In dark mode the page is already
  // dark, so the original artwork shows fine as-is with no filter needed.
  const needsSilhouetteInLight = Boolean(
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
        "flex h-full min-h-20 w-full items-center justify-center rounded-xl border border-border bg-background-secondary p-4 text-center transition-colors",
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
            needsSilhouetteInLight && "brightness-0",
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
