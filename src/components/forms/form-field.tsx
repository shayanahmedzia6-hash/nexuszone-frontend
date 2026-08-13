import { type ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type FormFieldProps = {
  id: string;
  label: string;
  children: ReactNode;
  hint?: string;
  error?: string;
  className?: string;
};

export function FormField({
  id,
  label,
  children,
  hint,
  error,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-sm font-medium text-text">
        {label}
      </label>
      {children}
      {hint && !error ? (
        <p className="text-xs text-text-muted">{hint}</p>
      ) : null}
      {error ? (
        <p className="text-xs text-primary" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
