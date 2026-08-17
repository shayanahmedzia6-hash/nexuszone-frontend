import { ArrowRight, Users } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import { DynamicIcon } from "@/components/navigation/nav-icons";
import { BrandSphere } from "@/components/media/brand-sphere";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/data/hero";
import { needCategories } from "@/data/what-you-need";
import { routes } from "@/lib/constants/routes";

export function WhatYouNeed() {
  const t = useTranslations("hero.trust");

  if (needCategories.length === 0) return null;

  const businessesStat = heroContent.trustItems.find(
    (item) => item.id === "businesses",
  );

  return (
    <SectionWrapper
      id="what-you-need"
      className="relative overflow-hidden bg-background-secondary"
    >
      <div
        className="pointer-events-none absolute top-1/2 left-0 h-72 w-72 -translate-x-1/3 -translate-y-1/2 opacity-60 md:h-96 md:w-96"
        aria-hidden
      >
        <BrandSphere />
      </div>

      <div className="relative flex flex-col items-center gap-4 text-center">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          What Do You Need?
        </p>
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-text md:text-5xl">
          Find the Right Solution for{" "}
          <span className="text-primary">Your Business</span>
        </h2>
        <p className="max-w-2xl text-base text-text-muted md:text-lg">
          Whether you&apos;re starting, expanding, or optimizing — we have the
          expertise and resources to help you move forward with confidence.
        </p>
        <AccentBar variant="duo" align="center" className="mt-1" />
      </div>

      <div className="relative mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {needCategories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className="group flex flex-col gap-4 rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary/40 hover:bg-surface"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 text-primary">
              <DynamicIcon name={category.icon} className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-semibold text-text">{category.title}</h3>
              <p className="mt-1 text-sm text-text-muted">
                {category.description}
              </p>
            </div>
            <ArrowRight
              className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        ))}
      </div>

      <div className="relative mt-10 flex flex-col items-stretch gap-6 rounded-2xl border border-primary/30 bg-background p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/30 text-primary">
            <Users className="h-6 w-6" aria-hidden />
          </span>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-text">
              Not sure what you need?
            </h3>
            <p className="text-sm text-text-muted">
              Our experts are ready to understand your goals and recommend
              the best solution for your business.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
          <Button href={routes.contact} className="w-full justify-center gap-2 sm:w-auto">
            Talk to an Expert
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
          {businessesStat ? (
            <p className="text-sm text-text-muted">
              <span className="font-semibold text-primary">
                {businessesStat.value}
              </span>{" "}
              {t(businessesStat.id)}
            </p>
          ) : null}
        </div>
      </div>
    </SectionWrapper>
  );
}
