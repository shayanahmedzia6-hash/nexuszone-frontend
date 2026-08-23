import { type ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils/cn";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  contained?: boolean;
  as?: "section" | "div";
};

export function SectionWrapper({
  children,
  className,
  id,
  contained = true,
  as: Component = "section",
}: SectionWrapperProps) {
  const content = contained ? <Container>{children}</Container> : children;

  return (
    <Component
      id={id}
      className={cn("scroll-mt-28 py-8 md:py-10 lg:py-12", className)}
    >
      {content}
    </Component>
  );
}
