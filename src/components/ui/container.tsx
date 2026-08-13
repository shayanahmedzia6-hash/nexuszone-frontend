import { type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type ContainerWidth = "sm" | "md" | "lg" | "xl" | "2xl";

const widthClasses: Record<ContainerWidth, string> = {
  sm: "max-w-[var(--container-sm)]",
  md: "max-w-[var(--container-md)]",
  lg: "max-w-[var(--container-lg)]",
  xl: "max-w-[var(--container-xl)]",
  "2xl": "max-w-[var(--container-2xl)]",
};

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  width?: ContainerWidth;
};

export function Container({
  children,
  className,
  width = "xl",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 md:px-6 lg:px-8",
        widthClasses[width],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
