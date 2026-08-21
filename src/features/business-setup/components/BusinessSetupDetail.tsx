import { ArrowRight, Check } from "lucide-react";

import { CTASection } from "@/components/sections/cta-section";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";
import { Button } from "@/components/ui/button";
import { type BusinessSetupDetail as BusinessSetupDetailType } from "@/types/business-setup-detail";
import { routes } from "@/lib/constants/routes";

type BusinessSetupDetailProps = {
  detail: BusinessSetupDetailType;
};

export function BusinessSetupDetail({ detail }: BusinessSetupDetailProps) {
  return (
    <>
      <SectionWrapper id="overview" className="pb-0">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Business Setup
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-text md:text-5xl">
            {detail.heroTitle}
          </h1>
          <AccentBar variant="tri" />
          <div className="flex max-w-2xl flex-col gap-4 text-base text-text-muted md:text-lg">
            {detail.heroDescription.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={routes.contact} className="gap-2">
              Talk to an Expert
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href={routes.contact} variant="outline">
              Estimate Setup Cost
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="benefits">
        <h2 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">
          {detail.whyChooseTitle}
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {detail.benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl border border-border bg-background p-6"
            >
              <h3 className="font-semibold text-text">{benefit.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-text-muted">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="ideal-for" className="bg-background-secondary">
        <h2 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">
          {detail.idealForTitle}
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {detail.idealFor.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base text-text-muted">
              <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </SectionWrapper>

      <SectionWrapper id="process">
        <h2 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">
          {detail.processTitle}
        </h2>
        <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {detail.process.map((step) => (
            <li
              key={step.step}
              className="rounded-xl border border-border bg-background p-6"
            >
              <span className="text-2xl font-bold text-primary">{step.step}</span>
              <h3 className="mt-3 font-semibold text-text">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </SectionWrapper>

      {detail.extraSection ? (
        <SectionWrapper id="considerations" className="bg-background-secondary">
          <h2 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">
            {detail.extraSection.title}
          </h2>
          <div className="mt-4 flex max-w-3xl flex-col gap-4 text-base text-text-muted">
            {detail.extraSection.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </SectionWrapper>
      ) : null}

      <SectionWrapper
        id="why-us"
        className={detail.extraSection ? undefined : "bg-background-secondary"}
      >
        <h2 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">
          {detail.whyWorkWithUs.title}
        </h2>
        <div className="mt-4 flex max-w-3xl flex-col gap-4 text-base text-text-muted">
          {detail.whyWorkWithUs.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-xs text-text-muted">{detail.disclaimer}</p>
      </SectionWrapper>

      <CTASection
        title={detail.finalCta.title}
        description={detail.finalCta.description}
        actions={
          <Button href={routes.contact} className="gap-2">
            Talk to an Expert
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        }
      />
    </>
  );
}
