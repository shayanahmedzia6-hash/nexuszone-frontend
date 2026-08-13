import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroContent } from "@/data/hero";

export function HeroContent() {
  return (
    <div className="relative z-10 flex max-w-xl flex-col items-start gap-6 pt-10 pb-10 md:pt-14 lg:max-w-2xl lg:pt-16 lg:pb-16">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2" aria-hidden>
          <span className="h-0.5 w-8 bg-primary" />
          <span className="h-0.5 w-4 bg-[var(--color-success)]" />
        </div>
        <p className="text-xs font-medium tracking-[0.14em] text-text-muted uppercase md:text-sm">
          {heroContent.eyebrow}
        </p>
      </div>

      <h1
        id="hero-heading"
        className="text-4xl leading-[1.05] font-bold tracking-tight text-text uppercase sm:text-5xl lg:text-6xl xl:text-[3.75rem]"
      >
        <span className="block">{heroContent.headlinePrimary}</span>
        <span className="mt-1 block text-primary">
          {heroContent.headlineAccent}
        </span>
      </h1>

      <p className="max-w-lg text-base leading-relaxed text-text-muted md:text-lg">
        {heroContent.description}
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button href={heroContent.primaryCta.href} size="lg" className="gap-2">
          {heroContent.primaryCta.label}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
        <Button
          href={heroContent.secondaryCta.href}
          variant="outline"
          size="lg"
          className="gap-2 border-text/20 bg-background/40"
        >
          {heroContent.secondaryCta.label}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </div>
  );
}
