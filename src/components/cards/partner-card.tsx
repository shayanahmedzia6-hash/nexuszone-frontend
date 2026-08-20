import { type Partner } from "@/types/partner";
import { OptimizedImage } from "@/components/media/optimized-image";
import { cn } from "@/lib/utils/cn";

type PartnerCardProps = {
  partner: Partner;
  className?: string;
};

export function PartnerCard({ partner, className }: PartnerCardProps) {
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
          width={120}
          height={48}
          className="h-10 w-auto object-contain"
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
