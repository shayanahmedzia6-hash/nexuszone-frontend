import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils/cn";

type OptimizedImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
};

/**
 * Preferred image wrapper for marketing media.
 * - Default: lazy loading (Next.js default when priority is false)
 * - Pass `loading="eager"` / `priority` when a page must wait for assets (e.g. home gate)
 * - Always provide meaningful `alt` for accessibility and SEO
 */
export function OptimizedImage({
  alt,
  className,
  priority = false,
  quality = 80,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      alt={alt}
      priority={priority}
      quality={quality}
      className={cn(className)}
      {...props}
    />
  );
}
