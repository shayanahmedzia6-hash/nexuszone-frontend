import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";

export function ServicesHero() {
  return (
    <SectionWrapper id="services-hero" className="pb-0">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          Our Services
        </p>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-text md:text-5xl">
          Everything Your Business Needs,{" "}
          <span className="text-primary">In One Place</span>
        </h1>
        <AccentBar variant="tri" />
        <p className="max-w-2xl text-base text-text-muted md:text-lg">
          From day-one setup to ongoing compliance, explore the full range
          of services Nexus Zone offers to help your business start, run
          and grow in the UAE.
        </p>
      </div>
    </SectionWrapper>
  );
}
