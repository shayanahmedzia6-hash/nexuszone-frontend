import { type ReactNode } from "react";

import { OptimizedImage } from "@/components/media/optimized-image";
import { cn } from "@/lib/utils/cn";

type BackgroundImageProps = {
  src: string;
  alt: string;
  children?: ReactNode;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Prefer next/image fill over CSS background-image for LCP-critical hero media.
 * Use CSS background-image only when technically necessary (rare).
 */
export function BackgroundImage({
  src,
  alt,
  children,
  className,
  imageClassName,
  priority = false,
  sizes = "100vw",
}: BackgroundImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
      {children ? <div className="relative z-10">{children}</div> : null}
    </div>
  );
}
