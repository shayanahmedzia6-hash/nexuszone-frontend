import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";
import { partners } from "@/data/partners";
import { LogoMarquee } from "@/features/home/components/Partners/LogoMarquee";

type PartnersProps = {
  /** Render the anchor + heading even with no data yet, instead of hiding entirely. */
  emptyState?: boolean;
};

export function Partners({ emptyState = false }: PartnersProps) {
  const freeZones = partners.filter((partner) => partner.category === "free-zone");
  const banks = partners.filter((partner) => partner.category === "bank");

  if (partners.length === 0 && !emptyState) return null;

  return (
    <SectionWrapper id="partners" className="bg-background-secondary">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          Free Zone & Banking Partners
        </p>
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-text md:text-4xl">
          Wherever You Set Up. <span className="text-primary">Whoever You Bank With.</span>
        </h2>
        <AccentBar variant="tri" />
        <p className="max-w-lg text-base text-text-muted">
          We help clients set up across every UAE free zone and open corporate
          accounts with the UAE&apos;s leading banks.
        </p>
      </div>

      {freeZones.length > 0 ? (
        <div className="mt-10">
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-text uppercase">
            Free Zone Partners
          </h3>
          <LogoMarquee items={freeZones} />
        </div>
      ) : null}

      {banks.length > 0 ? (
        <div className="mt-8">
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-text uppercase">
            Banking Partners
          </h3>
          <LogoMarquee items={banks} reverse />
        </div>
      ) : null}

      {partners.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-border bg-background p-8 text-center text-sm text-text-muted">
          Partner details are being added soon.
        </div>
      ) : null}
    </SectionWrapper>
  );
}
