import { type ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils/cn";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "main" | "div" | "section";
};

export function PageContainer({
  children,
  className,
  as: Component = "main",
}: PageContainerProps) {
  return (
    <Component className={cn("flex-1 py-10 md:py-14", className)}>
      <Container>{children}</Container>
    </Component>
  );
}
