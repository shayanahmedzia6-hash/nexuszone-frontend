import { type ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

import { SectionWrapper } from "@/components/sections/section-wrapper";

type LegalSection = {
  heading: string;
  body: ReactNode;
};

type LegalPageLayoutProps = {
  title: string;
  updatedLabel: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPageLayout({
  title,
  updatedLabel,
  intro,
  sections,
}: LegalPageLayoutProps) {
  return (
    <SectionWrapper id="legal-content">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
            {title}
          </h1>
          <p className="text-sm text-text-muted">{updatedLabel}</p>
          <p className="text-base text-text-muted">{intro}</p>
        </div>

        <div className="flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4">
          <AlertTriangle
            className="mt-0.5 h-5 w-5 shrink-0 text-primary"
            aria-hidden
          />
          <p className="text-sm leading-relaxed text-text">
            <strong>Draft content.</strong> This page is a general template
            and has not been reviewed by a lawyer. Replace it with policy
            text confirmed by qualified legal counsel before relying on it.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {sections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-text">
                {section.heading}
              </h2>
              <div className="text-base leading-relaxed text-text-muted">
                {section.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
