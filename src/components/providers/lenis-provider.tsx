"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

/** Matches `--header-height` so in-page anchors clear the sticky header. */
const ANCHOR_OFFSET = -88;

type LenisProviderProps = {
  children: ReactNode;
};

function LenisRouteSync() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const hash = window.location.hash;
    if (hash) {
      lenis.scrollTo(hash, { immediate: true, offset: ANCHOR_OFFSET });
      return;
    }

    lenis.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return null;
}

/**
 * Site-wide Lenis smooth scroll. Uses the document as the scroll root so
 * sticky header and native overflow still behave as expected.
 */
export function LenisProvider({ children }: LenisProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        lerp: 0.1,
        anchors: { offset: ANCHOR_OFFSET },
        allowNestedScroll: true,
        stopInertiaOnNavigate: true,
      }}
    >
      <LenisRouteSync />
      {children}
    </ReactLenis>
  );
}
