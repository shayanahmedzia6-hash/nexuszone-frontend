import { type Partner } from "@/types/partner";
import { cn } from "@/lib/utils/cn";

type PartnerCardProps = {
  partner: Partner;
  className?: string;
};

export function PartnerCard({ partner, className }: PartnerCardProps) {
  const content = (
    <span className="text-sm font-medium text-text">{partner.name}</span>
  );

  return (
    <article className={cn("py-3", className)}>
      {partner.websiteUrl ? (
        <a
          href={partner.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </article>
  );
}
