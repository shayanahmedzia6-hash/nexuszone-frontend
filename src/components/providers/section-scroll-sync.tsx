"use client";

import { scroller } from "react-scroll";
import { usePathname } from "@/i18n/navigation";
import { useEffect, useRef } from "react";

import {
  SECTION_SCROLL_DURATION,
  SECTION_SCROLL_OFFSET,
} from "@/lib/navigation/section-scroll";
import { useUiStore } from "@/store/ui-store";

function scrollToSection(sectionId: string) {
  scroller.scrollTo(sectionId, {
    smooth: true,
    duration: SECTION_SCROLL_DURATION,
    offset: SECTION_SCROLL_OFFSET,
  });
}

function syncHash(sectionId: string) {
  if (typeof window === "undefined") return;
  const nextUrl = `${window.location.pathname}${window.location.search}#${sectionId}`;
  window.history.replaceState(null, "", nextUrl);
}

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function waitForSectionAndScroll(
  sectionId: string,
  onComplete?: () => void,
  onGiveUp?: () => void,
): () => void {
  let attempts = 0;
  let frame = 0;
  const maxAttempts = 120;

  const tryScroll = () => {
    if (document.getElementById(sectionId)) {
      scrollToSection(sectionId);
      syncHash(sectionId);
      onComplete?.();
      return;
    }

    attempts += 1;
    if (attempts < maxAttempts) {
      frame = requestAnimationFrame(tryScroll);
      return;
    }

    onGiveUp?.();
  };

  frame = requestAnimationFrame(tryScroll);

  return () => cancelAnimationFrame(frame);
}

/** Cross-page and direct-hash section scrolling via react-scroll (not Lenis). */
export function SectionScrollSync() {
  const pathname = usePathname();
  const pendingScroll = useUiStore((state) => state.pendingScroll);
  const setPendingScroll = useUiStore((state) => state.setPendingScroll);
  const handledHashRef = useRef<string | null>(null);
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const pathnameChanged = prevPathnameRef.current !== pathname;
    prevPathnameRef.current = pathname;

    if (pendingScroll) {
      if (pendingScroll.path === pathname) {
        const { sectionId } = pendingScroll;

        return waitForSectionAndScroll(
          sectionId,
          () => {
            handledHashRef.current = `${pathname}#${sectionId}`;
            setPendingScroll(null);
          },
          () => {
            setPendingScroll(null);
            scrollToTop();
          },
        );
      }

      if (pathnameChanged) {
        setPendingScroll(null);
      }
    }

    const hashSectionId = window.location.hash.slice(1);
    if (hashSectionId) {
      const key = `${pathname}#${hashSectionId}`;
      if (handledHashRef.current === key) return;

      return waitForSectionAndScroll(
        hashSectionId,
        () => {
          handledHashRef.current = key;
        },
        () => {
          scrollToTop();
        },
      );
    }

    if (pathnameChanged) {
      scrollToTop();
    }
  }, [pathname, pendingScroll, setPendingScroll]);

  return null;
}
