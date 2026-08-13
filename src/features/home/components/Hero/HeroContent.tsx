import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroContent } from "@/data/hero";

export function HeroContent() {
  return (
    <div className="relative z-10 flex w-full max-w-xl flex-col items-start gap-4 pt-2 pb-2 md:gap-6 md:pt-14 md:pb-10 lg:max-w-2xl lg:pt-16 lg:pb-16">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2" aria-hidden>
          <span className="h-0.5 w-8 bg-primary" />
          <span className="h-0.5 w-4 bg-[var(--color-success)]" />
        </div>
        <p className="text-[0.65rem] font-medium tracking-[0.12em] text-text-muted uppercase sm:text-xs sm:tracking-[0.14em] md:text-sm">
          {heroContent.eyebrow}
        </p>
      </div>

      <h1
        id="hero-heading"
        className="text-[1.75rem] leading-[1.12] font-bold tracking-tight text-text uppercase sm:text-5xl sm:leading-[1.05] lg:text-6xl xl:text-[3.75rem]"
      >
        <span className="block">{heroContent.headlinePrimary}</span>
        <span className="mt-1 block text-primary">
          {heroContent.headlineAccent}
        </span>
      </h1>

      <p className="max-w-lg text-sm leading-relaxed text-text-muted md:text-lg">
        {heroContent.description}
      </p>

      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          href={heroContent.primaryCta.href}
          size="lg"
          className="w-full gap-2 sm:w-auto"
        >
          {heroContent.primaryCta.label}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
        <Button
          href={heroContent.secondaryCta.href}
          variant="outline"
          size="lg"
          className="w-full gap-2 border-text/20 bg-background/40 sm:w-auto"
        >
          {heroContent.secondaryCta.label}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </div>
  );
}
