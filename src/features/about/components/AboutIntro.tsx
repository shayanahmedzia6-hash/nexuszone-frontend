import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";

export function AboutIntro() {
  return (
    <SectionWrapper id="about-intro">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          About Nexus Zone
        </p>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-text md:text-5xl">
          Your Trusted Partner for{" "}
          <span className="text-primary">Business Setup in the UAE</span>
        </h1>
        <AccentBar variant="tri" />
        <p className="max-w-2xl text-base text-text-muted md:text-lg">
          Nexus Zone helps entrepreneurs, investors and growing companies
          navigate company formation, compliance and ongoing business
          support across the UAE — so you can focus on running your
          business, not the paperwork behind it.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-background-secondary p-6">
          <h2 className="text-lg font-semibold text-text">Our Mission</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            To make business setup and compliance in the UAE simple,
            transparent and accessible — guiding every client with clear
            advice and honest pricing.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-background-secondary p-6">
          <h2 className="text-lg font-semibold text-text">Our Vision</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            To be the long-term growth partner businesses turn to at every
            stage — from first registration to ongoing operations in the
            UAE.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
