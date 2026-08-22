"use client";

import { scroller } from "react-scroll";
import { usePathname } from "@/i18n/navigation";
import { useEffect, useRef } from "react";

import {
  SECTION_SCROLL_DURATION,
  SECTION_SCROLL_OFFSET,
} from "@/lib/navigation/section-scroll";
import { routes } from "@/lib/constants/routes";
import { useUiStore } from "@/store/ui-store";

function scrollToSection(sectionId: string) {
  scroller.scrollTo(sectionId, {
    smooth: true,
    duration: SECTION_SCROLL_DURATION,
    offset: SECTION_SCROLL_OFFSET,
  });
}

function waitForSectionAndScroll(
  sectionId: string,
  onComplete?: () => void,
): () => void {
  let attempts = 0;
  let frame = 0;
  const maxAttempts = 60;

  const tryScroll = () => {
    if (document.getElementById(sectionId)) {
      scrollToSection(sectionId);
      onComplete?.();
      return;
    }

    attempts += 1;
    if (attempts < maxAttempts) {
      frame = requestAnimationFrame(tryScroll);
    }
  };

  frame = requestAnimationFrame(tryScroll);

  return () => cancelAnimationFrame(frame);
}

/** Cross-page and direct-hash section scrolling via react-scroll (not Lenis). */
export function SectionScrollSync() {
  const pathname = usePathname();
  const pendingSectionId = useUiStore((state) => state.pendingSectionId);
  const setPendingSectionId = useUiStore((state) => state.setPendingSectionId);
  const handledHashRef = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (pathname !== routes.home) return;

    if (pendingSectionId) {
      return waitForSectionAndScroll(pendingSectionId, () => {
        setPendingSectionId(null);
      });
    }

    const hashSectionId = window.location.hash.slice(1);
    if (!hashSectionId) return;

    const key = `${pathname}#${hashSectionId}`;
    if (handledHashRef.current === key) return;
    handledHashRef.current = key;

    return waitForSectionAndScroll(hashSectionId);
  }, [pathname, pendingSectionId, setPendingSectionId]);

  return null;
}
