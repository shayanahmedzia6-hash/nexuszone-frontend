import { ArrowRight } from "lucide-react";

import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { processSteps } from "@/data/how-it-works";
import { HowItWorksVisual } from "@/features/home/components/HowItWorks/HowItWorksVisual";
import { routes } from "@/lib/constants/routes";

export function HowItWorks() {
  if (processSteps.length === 0) return null;

  return (
    <SectionWrapper
      id="how-it-works"
      contained={false}
      className="relative overflow-hidden"
    >
      <HowItWorksVisual />

      <Container className="relative z-10">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            How It Works
          </p>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white drop-shadow-sm md:text-4xl">
            Simple Process.{" "}
            <span className="text-primary">Seamless Experience.</span>
          </h2>
          <p className="max-w-lg text-base text-white/85 md:text-lg">
            We make business setup in the UAE simple, transparent and
            hassle-free.
          </p>
        </div>

        <ol className="mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
          {processSteps.map((step, index) => (
            <li
              key={step.id}
              className="relative flex flex-col gap-3 rounded-xl border border-white/20 bg-black/55 p-5 shadow-lg backdrop-blur-md"
            >
              {index < processSteps.length - 1 ? (
                <span
                  className="absolute top-8 left-[calc(100%-0.5rem)] hidden h-px w-[calc(100%-1rem)] border-t border-dashed border-white/40 md:block"
                  aria-hidden
                />
              ) : null}
              <span className="text-2xl font-bold text-primary drop-shadow-sm">
                {step.step}
              </span>
              <h3 className="text-base font-semibold text-white drop-shadow-sm md:text-lg">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/90">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-stretch gap-4 rounded-xl border border-white/15 bg-black/40 p-6 shadow-sm backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Ready to Begin?
            </h3>
            <p className="text-sm text-white/85">
              Kickstart your business journey in the UAE today.
            </p>
          </div>
          <Button
            href={routes.contact}
            className="w-full justify-center gap-2 sm:w-auto"
          >
            Talk to an Expert
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  );
}
