import { type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-text",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
