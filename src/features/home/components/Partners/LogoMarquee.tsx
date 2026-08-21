import { PartnerCard } from "@/components/cards/partner-card";
import { type Partner } from "@/types/partner";

type LogoMarqueeProps = {
  items: Partner[];
  reverse?: boolean;
};

/**
 * Infinite horizontal scroll: the track renders the list twice back-to-back
 * and animates exactly -50% so the loop seams invisibly. Pauses on hover and
 * on prefers-reduced-motion (global rule in globals.css).
 */
export function LogoMarquee({ items, reverse = false }: LogoMarqueeProps) {
  if (items.length === 0) return null;

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div
        className="marquee-track flex w-max gap-3"
        style={{
          animationDuration: `${items.length * 2.4}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[...items, ...items].map((partner, index) => (
          <PartnerCard
            key={`${partner.id}-${index}`}
            partner={partner}
            className="w-44 shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
