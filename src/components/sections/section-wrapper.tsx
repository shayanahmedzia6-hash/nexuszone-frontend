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
    <Component id={id} className={cn("py-12 md:py-16 lg:py-20", className)}>
      {content}
    </Component>
  );
}
