"use client";

import { useState } from "react";

import { TestimonialCard } from "@/components/cards/testimonial-card";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { AccentBar } from "@/components/ui/accent-bar";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils/cn";

const PAGE_SIZE = 3;

export function Testimonials() {
  const pageCount = Math.ceil(testimonials.length / PAGE_SIZE);
  const [page, setPage] = useState(0);

  if (testimonials.length === 0) return null;

  const visible = testimonials.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE,
  );

  return (
    <SectionWrapper id="testimonials" className="bg-background-secondary">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          Client Testimonials
        </p>
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-text md:text-4xl">
          Trusted by Businesses, Recommended for{" "}
          <span className="text-primary">Results</span>
        </h2>
        <AccentBar variant="duo" />
        <p className="max-w-lg text-base text-text-muted">
          We value long-term relationships built on trust, transparency and
          real results.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {visible.map((testimonial) => (
          <div
            key={testimonial.id}
            className="rounded-xl border border-border bg-background p-6"
          >
            <TestimonialCard testimonial={testimonial} className="border-0 p-0" />
          </div>
        ))}
      </div>

      {pageCount > 1 ? (
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show testimonials page ${index + 1}`}
              onClick={() => setPage(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                index === page ? "w-6 bg-primary" : "w-2 bg-border",
              )}
            />
          ))}
        </div>
      ) : null}
    </SectionWrapper>
  );
}
