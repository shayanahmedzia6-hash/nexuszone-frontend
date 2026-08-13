import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils/cn";
import { routes } from "@/lib/constants/routes";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

/**
 * Original Nexus Zone logo — do not recolor between themes.
 * Balanced header size: larger than compact nav icons, without
 * stretching the sticky header to multi-rem empty height.
 */
export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <Link
      href={routes.home}
      className={cn(
        "inline-flex h-16 shrink-0 items-center leading-none md:h-20",
        className,
      )}
      aria-label="Nexus Zone home"
    >
      <Image
        src="/logos/logo.png"
        alt="Nexus Zone"
        width={280}
        height={80}
        priority={priority}
        className="h-full w-auto object-contain object-left"
      />
    </Link>
  );
}
