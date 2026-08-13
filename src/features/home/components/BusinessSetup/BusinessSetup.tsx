import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

import { DynamicIcon } from "@/components/navigation/nav-icons";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";
import { Button } from "@/components/ui/button";
import { businessSetupOptions } from "@/data/business-setup";
import { routes } from "@/lib/constants/routes";

export function BusinessSetup() {
  if (businessSetupOptions.length === 0) return null;

  return (
    <SectionWrapper id="business-setup">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          Business Setup Options
        </p>
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-text md:text-4xl">
          Choose the Right Setup for <span className="text-primary">Your Business</span>
        </h2>
        <AccentBar variant="tri" />
        <p className="max-w-xl text-base text-text-muted md:text-lg">
          Whether you&apos;re a startup, investor, or established brand, we
          offer flexible business structures in the UAE designed to help you
          grow with confidence.
        </p>
      </div>

      <div className="mt-10 divide-y divide-border border-y border-border">
        {businessSetupOptions.map((option) => (
          <Link
            key={option.id}
            href={option.href ?? routes.businessSetup}
            className="group flex items-center gap-3 py-5 transition-colors hover:bg-surface/60 sm:gap-6"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/20 text-primary">
              <DynamicIcon
                name={option.icon}
                className="h-5 w-5"
                strokeWidth={1.75}
              />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-base font-semibold text-text md:text-lg">
                {option.title}
              </span>
              <span className="block text-sm text-text-muted">
                {option.summary}
              </span>
            </span>
            <ArrowRight
              className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-stretch gap-4 rounded-xl bg-background-secondary p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-text text-background">
            <FileText className="h-4 w-4" aria-hidden />
          </span>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-text">
              Not Sure Which One Fits You?
            </h3>
            <p className="text-sm text-text-muted">
              Our experts will help you choose the perfect setup.
            </p>
          </div>
        </div>
        <Button href={routes.contact} variant="secondary" className="w-full justify-center gap-2 bg-text text-background hover:opacity-90 sm:w-auto">
          Get Free Consultation
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </SectionWrapper>
  );
}
