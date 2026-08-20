import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";
import { CareerApplicationForm } from "@/features/careers/components/CareerApplicationForm";
import { JobOpenings } from "@/features/careers/components/JobOpenings";
import { routes } from "@/lib/constants/routes";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Careers",
  path: routes.careers,
  description:
    "Join Nexus Zone. Explore current openings or send a speculative application to work with our UAE business setup team.",
});

export default function CareersPage() {
  return (
    <SectionWrapper id="careers">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          Careers
        </p>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-text md:text-5xl">
          Build Your Career at <span className="text-primary">Nexus Zone</span>
        </h1>
        <AccentBar variant="tri" />
        <p className="max-w-2xl text-base text-text-muted md:text-lg">
          We&apos;re a team of business setup and corporate services
          professionals helping clients navigate the UAE. Explore current
          openings below, or apply speculatively if nothing matches yet.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-text">Open Positions</h2>
          <JobOpenings />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-text">Apply Now</h2>
          <CareerApplicationForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
