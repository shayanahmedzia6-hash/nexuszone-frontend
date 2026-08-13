import { type ReactNode } from "react";

import { OptimizedImage } from "@/components/media/optimized-image";
import { SplitSection } from "@/components/sections/split-section";
import { SectionHeading } from "@/components/ui/section-heading";

type ImageTextSectionProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  children?: ReactNode;
};

export function ImageTextSection({
  title,
  description,
  eyebrow,
  imageSrc,
  imageAlt,
  reverse = false,
  children,
}: ImageTextSectionProps) {
  return (
    <SplitSection
      reverse={reverse}
      left={
        <div className="flex flex-col gap-4">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          {children}
        </div>
      }
      right={
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-surface">
          <OptimizedImage
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      }
    />
  );
}
