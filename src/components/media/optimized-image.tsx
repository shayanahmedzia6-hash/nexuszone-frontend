import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils/cn";

type OptimizedImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
};

/**
 * Preferred image wrapper for marketing media.
 * - Default: lazy loading (Next.js default when priority is false)
 * - Set `priority` only for critical above-the-fold / LCP images (usually Hero)
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
