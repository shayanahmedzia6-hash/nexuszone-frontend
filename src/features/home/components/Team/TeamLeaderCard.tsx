"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { OptimizedImage } from "@/components/media/optimized-image";
import { cn } from "@/lib/utils/cn";

export type FounderStorySection = {
  heading?: string;
  paragraphs: string[];
};

type TeamLeaderCardProps = {
  name: string;
  roleLabel: string;
  imageUrl?: string;
  initials?: string;
  sections: FounderStorySection[];
  tagline: string;
  outro: string;
  seeMore: string;
  seeLess: string;
  className?: string;
};

export function TeamLeaderCard({
  name,
  roleLabel,
  imageUrl,
  initials,
  sections,
  tagline,
  outro,
  seeMore,
  seeLess,
  className,
}: TeamLeaderCardProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  const syncPanelHeight = useCallback(() => {
    if (!imageRef.current) return;
    setPanelHeight(imageRef.current.offsetHeight);
  }, []);

  useEffect(() => {
    syncPanelHeight();

    const imageEl = imageRef.current;
    if (!imageEl) return;

    const observer = new ResizeObserver(syncPanelHeight);
    observer.observe(imageEl);

    return () => observer.disconnect();
  }, [syncPanelHeight]);

  useEffect(() => {
    const contentEl = contentRef.current;
    if (!contentEl || panelHeight === null) return;

    const checkOverflow = () => {
      setHasOverflow(contentEl.scrollHeight > contentEl.clientHeight + 1);
    };

    checkOverflow();

    const observer = new ResizeObserver(checkOverflow);
    observer.observe(contentEl);

    return () => observer.disconnect();
  }, [panelHeight, sections, name, roleLabel, tagline, outro, expanded]);

  const storyBody = (
    <article className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-text">{name}</h3>
        <p className="text-sm font-medium text-primary">{roleLabel}</p>
      </div>

      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="flex flex-col gap-3">
          {section.heading ? (
            <h4 className="text-base font-semibold text-text">{section.heading}</h4>
          ) : null}
          {section.paragraphs.map((paragraph, paragraphIndex) => (
            <p
              key={paragraphIndex}
              className="text-base leading-relaxed text-text-muted"
            >
              {paragraph}
            </p>
          ))}
        </div>
      ))}

      <div className="flex flex-col gap-1 border-t border-border pt-4">
        <p className="text-base font-semibold text-primary">{tagline}</p>
        <p className="text-base italic text-text-muted">{outro}</p>
      </div>
    </article>
  );

  return (
    <div
      className={cn(
        "mt-6 grid gap-8 rounded-2xl border border-border bg-background-secondary p-6 sm:p-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:items-start",
        className,
      )}
    >
      <div
        ref={imageRef}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-surface"
      >
        {imageUrl ? (
          <OptimizedImage
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl font-semibold text-text-muted">
            {initials}
          </div>
        )}
      </div>

      <div
        className="flex min-h-0 flex-col"
        style={panelHeight !== null ? { height: panelHeight } : undefined}
      >
        <div className="relative min-h-0 flex-1">
          <div
            ref={contentRef}
            className={cn(
              "h-full",
              expanded
                ? "founder-story-scroll overflow-y-auto overscroll-contain pe-2 [scrollbar-gutter:stable]"
                : "overflow-hidden",
            )}
          >
            {storyBody}
          </div>

          {!expanded && hasOverflow ? (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background-secondary to-transparent"
            />
          ) : null}
        </div>

        {hasOverflow ? (
          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            className="mt-3 shrink-0 self-start text-sm font-semibold text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline"
          >
            {expanded ? seeLess : seeMore}
          </button>
        ) : null}
      </div>
    </div>
  );
}
