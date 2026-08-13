import { ArrowRight } from "lucide-react";

import { BrandSphere } from "@/components/media/brand-sphere";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Button } from "@/components/ui/button";
import { finalCtaContent } from "@/data/final-cta";

export function FinalCTA() {
  return (
    <SectionWrapper
      id="get-started"
      contained={false}
      className="relative overflow-hidden bg-background-secondary py-16 md:py-24"
    >
      <div
        className="pointer-events-none absolute top-1/2 right-0 h-80 w-80 -translate-y-1/2 translate-x-1/4 opacity-50 md:h-[28rem] md:w-[28rem]"
        aria-hidden
      >
        <BrandSphere />
      </div>

      <div className="relative mx-auto w-full max-w-[var(--container-xl)] px-4 md:px-6 lg:px-8">
        <div className="flex max-w-2xl flex-col gap-5">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            {finalCtaContent.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text md:text-5xl">
            {finalCtaContent.titlePrimary}{" "}
            <span className="text-primary">{finalCtaContent.titleAccent}</span>
          </h2>
          <p className="max-w-xl text-base text-text-muted md:text-lg">
            {finalCtaContent.description}
          </p>
          <div className="mt-2 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href={finalCtaContent.primaryCta.href}
              size="lg"
              className="w-full justify-center gap-2 sm:w-auto"
            >
              {finalCtaContent.primaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              href={finalCtaContent.secondaryCta.href}
              variant="outline"
              size="lg"
              className="w-full justify-center sm:w-auto"
            >
              {finalCtaContent.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
