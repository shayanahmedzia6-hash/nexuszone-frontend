import { ArrowRight } from "lucide-react";

import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Button } from "@/components/ui/button";
import { processSteps } from "@/data/how-it-works";
import { routes } from "@/lib/constants/routes";

export function HowItWorks() {
  if (processSteps.length === 0) return null;

  return (
    <SectionWrapper id="how-it-works" className="bg-background-secondary">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          How It Works
        </p>
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-text md:text-4xl">
          Simple Process. <span className="text-primary">Seamless Experience.</span>
        </h2>
        <p className="max-w-lg text-base text-text-muted md:text-lg">
          We make business setup in the UAE simple, transparent and
          hassle-free.
        </p>
      </div>

      <ol className="mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
        {processSteps.map((step, index) => (
          <li key={step.id} className="relative flex flex-col gap-3">
            {index < processSteps.length - 1 ? (
              <span
                className="absolute top-4 left-[calc(100%-1rem)] hidden h-px w-[calc(100%-2rem)] border-t border-dashed border-border md:block"
                aria-hidden
              />
            ) : null}
            <span className="text-2xl font-bold text-primary">
              {step.step}
            </span>
            <h3 className="text-base font-semibold text-text md:text-lg">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-text-muted">
              {step.description}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-12 flex flex-col items-start gap-4 rounded-xl border border-border bg-background p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-text">
            Ready to Get Started?
          </h3>
          <p className="text-sm text-text-muted">
            Kickstart your business journey in the UAE today.
          </p>
        </div>
        <Button href={routes.contact} className="gap-2">
          Talk to an Expert
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </SectionWrapper>
  );
}
