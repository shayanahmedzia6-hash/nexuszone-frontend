import { type ReactNode } from "react";

import { SectionWrapper } from "@/components/sections/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils/cn";

type CTASectionProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
};

export function CTASection({
  title,
  description,
  actions,
  className,
}: CTASectionProps) {
  return (
    <SectionWrapper className={cn("bg-background-secondary", className)}>
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <SectionHeading title={title} description={description} />
        {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </SectionWrapper>
  );
}
