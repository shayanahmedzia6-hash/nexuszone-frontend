import { cn } from "@/lib/utils/cn";

type AccentBarProps = {
  variant?: "duo" | "tri";
  align?: "left" | "center";
  className?: string;
};

/** Red/green (or red/black/green) dash mark used under section eyebrows. */
export function AccentBar({
  variant = "duo",
  align = "left",
  className,
}: AccentBarProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5",
        align === "center" && "justify-center",
        className,
      )}
      aria-hidden
    >
      <span className="h-0.5 w-8 bg-primary" />
      {variant === "tri" ? (
        <span className="h-0.5 w-4 bg-text" />
      ) : null}
      <span className="h-0.5 w-4 bg-[var(--color-success)]" />
    </div>
  );
}
