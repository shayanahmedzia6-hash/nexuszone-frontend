import { PartnerCard } from "@/components/cards/partner-card";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";
import { partners } from "@/data/partners";

type PartnersProps = {
  /** Render the anchor + heading even with no data yet, instead of hiding entirely. */
  emptyState?: boolean;
};

export function Partners({ emptyState = false }: PartnersProps) {
  if (partners.length === 0 && !emptyState) return null;

  return (
    <SectionWrapper id="partners" className="bg-background-secondary">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          Partners & Recognitions
        </p>
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-text md:text-4xl">
          Proud Partnerships. <span className="text-primary">Industry Recognition.</span>
        </h2>
        <AccentBar variant="tri" />
        <p className="max-w-lg text-base text-text-muted">
          We collaborate with leading organizations and uphold the highest
          standards of excellence.
        </p>
      </div>

      {partners.length > 0 ? (
        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
          {partners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-border bg-background p-8 text-center text-sm text-text-muted">
          Partner and award details are being added soon.
        </div>
      )}
    </SectionWrapper>
  );
}
