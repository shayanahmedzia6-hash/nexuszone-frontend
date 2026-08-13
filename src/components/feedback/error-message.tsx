import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

type ErrorMessageProps = {
  title?: string;
  message: string;
  onRetry?: () => void;
  className?: string;
};

export function ErrorMessage({
  title = "Something went wrong",
  message,
  onRetry,
  className,
}: ErrorMessageProps) {
  return (
    <div
      role="alert"
      className={cn(
        "flex flex-col gap-3 rounded-md border border-border bg-surface p-4",
        className,
      )}
    >
      <h2 className="text-base font-semibold text-text">{title}</h2>
      <p className="text-sm text-text-muted">{message}</p>
      {onRetry ? (
        <div>
          <Button type="button" variant="secondary" size="sm" onClick={onRetry}>
            Try again
          </Button>
        </div>
      ) : null}
    </div>
  );
}
