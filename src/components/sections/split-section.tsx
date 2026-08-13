import { type ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type SplitSectionProps = {
  left: ReactNode;
  right: ReactNode;
  reverse?: boolean;
  className?: string;
};

export function SplitSection({
  left,
  right,
  reverse = false,
  className,
}: SplitSectionProps) {
  return (
    <div
      className={cn(
        "grid items-center gap-8 md:grid-cols-2 md:gap-12",
        reverse && "md:[&>*:first-child]:order-2",
        className,
      )}
    >
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}
