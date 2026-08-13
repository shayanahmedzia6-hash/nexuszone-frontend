import { OptimizedImage } from "@/components/media/optimized-image";
import { cn } from "@/lib/utils/cn";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
};

export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className,
  priority = false,
}: ResponsiveImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={cn("h-auto w-full", className)}
    />
  );
}
