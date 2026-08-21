"use client";

import { useState } from "react";
import { Users2 } from "lucide-react";

import { DynamicIcon } from "@/components/navigation/nav-icons";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { BrandSphere } from "@/components/media/brand-sphere";
import { OptimizedImage } from "@/components/media/optimized-image";
import { AccentBar } from "@/components/ui/accent-bar";
import { whyNexusPillars } from "@/data/why-nexus";
import { cn } from "@/lib/utils/cn";

export function WhyNexus() {
  const [activeId, setActiveId] = useState(whyNexusPillars[0]?.id);

  if (whyNexusPillars.length === 0) return null;

  const active =
    whyNexusPillars.find((pillar) => pillar.id === activeId) ??
    whyNexusPillars[0]!;

  return (
    // id="why-us" matches the About-page nav anchor (data/navigation.ts).
    <SectionWrapper id="why-us" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-10 right-0 h-64 w-64 opacity-40 md:h-80 md:w-80"
        aria-hidden
      >
        <BrandSphere />
      </div>

      <div className="relative flex flex-col items-center gap-4 text-center">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          Why Nexus Zone?
        </p>
        <AccentBar variant="tri" align="center" />
        <h2 className="text-3xl font-bold tracking-tight text-text md:text-5xl">
          Why Choose <span className="text-primary">Nexus Zone?</span>
        </h2>
        <p className="max-w-2xl text-base text-text-muted md:text-lg">
          We go beyond just services — we become your growth partner.
          Here&apos;s what sets us apart.
        </p>
      </div>

      <div className="relative mt-10 border-b border-border">
        <div className="-mx-4 flex gap-x-6 overflow-x-auto px-4 pb-4 [scrollbar-width:none] md:mx-0 md:flex-wrap md:justify-center md:gap-x-8 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden">
          {whyNexusPillars.map((pillar) => {
            const isActive = pillar.id === active.id;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActiveId(pillar.id)}
                className={cn(
                  "relative flex shrink-0 items-center gap-2 pb-4 text-sm font-medium whitespace-nowrap transition-colors",
                  isActive ? "text-primary" : "text-text-muted hover:text-text",
                )}
              >
                <DynamicIcon name={pillar.icon} className="h-4 w-4" />
                {pillar.tabLabel}
                {isActive ? (
                  <span className="absolute -bottom-px left-0 h-0.5 w-full bg-primary" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative mt-10 grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-background-secondary">
          <OptimizedImage
            src="/images/why-nexus/team-discussion.jpg"
            alt="Nexus Zone advisors discussing a client's business setup"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
          <span className="absolute right-5 bottom-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg">
            <Users2 className="h-5 w-5" aria-hidden />
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            {active.eyebrow}
          </p>
          <h3 className="text-2xl font-semibold text-text md:text-3xl">
            {active.title}{" "}
            <span className="text-primary">{active.titleAccent}</span>
          </h3>
          <span className="h-0.5 w-10 bg-text" aria-hidden />
          <p className="text-base leading-relaxed text-text-muted">
            {active.description}
          </p>
          <div className="mt-2 flex items-start gap-3 rounded-xl bg-background-secondary p-4">
            <Users2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
            <p className="text-sm leading-relaxed text-text-muted">
              {active.highlight}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
