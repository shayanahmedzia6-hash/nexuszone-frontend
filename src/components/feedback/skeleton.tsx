import { cn } from "@/lib/utils/cn";

type SkeletonProps = {
  className?: string;
};

/** Lightweight skeleton for async regions — avoid spinner spam. */
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("animate-pulse rounded-md bg-surface", className)}
    />
  );
}
