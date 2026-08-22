import { PartnerCard } from "@/components/cards/partner-card";
import { type Partner } from "@/types/partner";

type LogoMarqueeProps = {
  items: Partner[];
  reverse?: boolean;
};

/** Seconds for one full loop — capped so long partner lists stay visibly in motion. */
function marqueeDuration(itemCount: number) {
  return Math.min(Math.max(itemCount * 1.1, 18), 30);
}

/**
 * Infinite horizontal scroll: the track renders the list twice back-to-back
 * and animates exactly -50% so the loop seams invisibly. Pauses on hover.
 */
export function LogoMarquee({ items, reverse = false }: LogoMarqueeProps) {
  if (items.length === 0) return null;

  return (
    <div
      dir="ltr"
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
    >
      <div
        className="marquee-track flex w-max gap-3 will-change-transform"
        style={{
          animationDuration: `${marqueeDuration(items.length)}s`,
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
