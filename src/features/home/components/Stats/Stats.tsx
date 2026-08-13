import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";
import { heroContent } from "@/data/hero";

const STAT_IDS = ["businesses", "years", "countries"];

/**
 * Reuses the already-approved numbers from heroContent.trustItems instead of
 * introducing new, unverified figures — swap in a dedicated data/stats.ts
 * once real numbers for this section are confirmed.
 */
export function Stats() {
  const stats = heroContent.trustItems.filter((item) =>
    STAT_IDS.includes(item.id),
  );

  if (stats.length === 0) return null;

  return (
    <SectionWrapper id="stats" className="bg-background-secondary">
      <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-16">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Our Impact in Numbers
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text md:text-4xl">
            Results That Reflect <span className="text-primary">Our Commitment</span>
          </h2>
          <AccentBar variant="duo" />
          <p className="max-w-md text-base text-text-muted">
            We take pride in the trust our clients place in us and the
            impact we create together.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 divide-border sm:gap-8 sm:divide-x">
          {stats.map((stat) => (
            <div key={stat.id} className="flex min-w-0 flex-col gap-1 px-1 first:pl-0 sm:px-2">
              <p className="text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
                {stat.value}
              </p>
              <p className="text-sm text-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
