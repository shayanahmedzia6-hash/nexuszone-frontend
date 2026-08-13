"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { SectionWrapper } from "@/components/sections/section-wrapper";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils/cn";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  if (faqs.length === 0) return null;

  return (
    <SectionWrapper id="faq" className="bg-background-secondary">
      <div className="grid gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text md:text-4xl">
            Got Questions? <span className="text-primary">We&apos;ve Got Answers.</span>
          </h2>
          <p className="max-w-sm text-base text-text-muted">
            Find quick answers to common questions about our services and
            processes.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-border rounded-xl border border-border bg-background">
          {faqs.map((faq) => {
            const isOpen = faq.id === openId;
            return (
              <div key={faq.id}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-5"
                >
                  <span className="text-sm font-medium text-text md:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-primary transition-transform",
                      isOpen && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                {isOpen ? (
                  <p className="px-4 pb-4 text-sm leading-relaxed text-text-muted sm:px-5">
                    {faq.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
