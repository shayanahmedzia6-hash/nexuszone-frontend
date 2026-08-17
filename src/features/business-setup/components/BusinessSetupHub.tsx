import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

import { DynamicIcon } from "@/components/navigation/nav-icons";
import { CTASection } from "@/components/sections/cta-section";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";
import { Button } from "@/components/ui/button";
import { businessSetupOptions } from "@/data/business-setup";
import { routes } from "@/lib/constants/routes";

export function BusinessSetupHub() {
  return (
    <>
      <SectionWrapper id="business-setup-hero" className="pb-0">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Business Setup
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-text md:text-5xl">
            Choose the Right Setup for <span className="text-primary">Your Business</span>
          </h1>
          <AccentBar variant="tri" />
          <p className="max-w-2xl text-base text-text-muted md:text-lg">
            Whether you&apos;re a startup, investor, or established brand, we
            offer flexible business structures in the UAE designed to help
            you grow with confidence.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="setup-options">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {businessSetupOptions.map((option) => (
            <Link
              key={option.id}
              href={option.href ?? routes.businessSetup}
              className="group flex flex-col gap-4 rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary/40 hover:bg-surface/60"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 text-primary">
                <DynamicIcon name={option.icon} className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div className="flex-1">
                <h2 className="text-base font-semibold text-text md:text-lg">
                  {option.title}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">
                  {option.summary}
                </p>
              </div>
              <ArrowRight
                className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="branch-office" className="scroll-mt-28 bg-background-secondary">
        <h2 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">
          Branch Office
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-text-muted">
          A branch office lets an existing foreign or UAE company establish
          a presence in the UAE without incorporating a new legal entity.
          It operates as an extension of the parent company, carrying out
          the same licensed activities under UAE trade licensing rules.
        </p>
        <Button href={routes.contact} variant="outline" className="mt-6 gap-2">
          Ask About Branch Offices
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </SectionWrapper>

      <SectionWrapper id="professional-license" className="scroll-mt-28">
        <h2 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">
          Professional Services License
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-text-muted">
          A professional license is designed for consultants, freelancers
          and service providers. It allows full ownership for many
          professional activities and typically doesn&apos;t require share
          capital, making it a lightweight route to operate as a licensed
          professional in the UAE.
        </p>
        <Button href={routes.contact} variant="outline" className="mt-6 gap-2">
          Ask About Professional Licenses
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </SectionWrapper>

      <CTASection
        title="Not Sure Which One Fits You?"
        description="Our experts will help you choose the perfect setup for your business."
        actions={
          <Button href={routes.contact} className="gap-2">
            Get Free Consultation
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        }
      />
    </>
  );
}
