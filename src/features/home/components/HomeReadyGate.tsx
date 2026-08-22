"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

import { BrandLogo } from "@/components/navigation/brand-logo";
import { partners } from "@/data/partners";
import { whyNexusPillars } from "@/data/why-nexus";
import { cn } from "@/lib/utils/cn";

type HomeReadyGateProps = {
  children: ReactNode;
};

const HERO_ASSETS = [
  "/images/hero/light-mode.jpeg",
  "/images/hero/dark-mode.jpeg",
] as const;

const HOW_IT_WORKS_ASSETS = [
  "/images/how-it-works/light-mode.png",
  "/images/how-it-works/dark-mode.png",
] as const;

function collectHomeAssetUrls(): string[] {
  const urls = new Set<string>([
    ...HERO_ASSETS,
    ...HOW_IT_WORKS_ASSETS,
    ...whyNexusPillars.map((pillar) => pillar.image),
  ]);

  for (const partner of partners) {
    if (partner.logoUrl) {
      urls.add(decodeURIComponent(partner.logoUrl));
    }
  }

  return [...urls];
}

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const image = new window.Image();
    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = src;
  });
}

function waitForWindowLoad(): Promise<void> {
  if (document.readyState === "complete") {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    window.addEventListener("load", () => resolve(), { once: true });
  });
}

function waitForDomImages(root: HTMLElement): Promise<void> {
  const images = Array.from(root.querySelectorAll("img"));

  return Promise.all(
    images.map((image) => {
      if (image.complete) return Promise.resolve();

      return new Promise<void>((resolve) => {
        image.addEventListener("load", () => resolve(), { once: true });
        image.addEventListener("error", () => resolve(), { once: true });
      });
    }),
  ).then(() => undefined);
}

/**
 * Keeps the home page hidden behind a full-screen loader until fonts,
 * window assets, and home media have finished loading.
 */
export function HomeReadyGate({ children }: HomeReadyGateProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function waitUntilReady() {
      const assetUrls = collectHomeAssetUrls();
      const maxWaitMs = 12_000;

      await Promise.race([
        Promise.all([
          waitForWindowLoad(),
          document.fonts?.ready ?? Promise.resolve(),
          Promise.all(assetUrls.map(preloadImage)),
        ]),
        new Promise<void>((resolve) => {
          window.setTimeout(resolve, maxWaitMs);
        }),
      ]);

      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => resolve());
      });

      if (contentRef.current) {
        await Promise.race([
          waitForDomImages(contentRef.current),
          new Promise<void>((resolve) => {
            window.setTimeout(resolve, 2_000);
          }),
        ]);
      }

      if (!cancelled) {
        setReady(true);
      }
    }

    void waitUntilReady();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (ready) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [ready]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-background transition-opacity duration-300",
          ready ? "pointer-events-none opacity-0" : "opacity-100",
        )}
        aria-hidden={ready}
        aria-busy={!ready}
      >
        <BrandLogo priority className="pointer-events-none" />
        <div
          className="h-10 w-10 animate-spin rounded-full border-2 border-border border-t-primary"
          role="status"
          aria-label="Loading home page"
        />
      </div>

      <div
        ref={contentRef}
        className={cn(
          "transition-opacity duration-300",
          ready ? "opacity-100" : "invisible opacity-0",
        )}
      >
        {children}
      </div>
    </>
  );
}
