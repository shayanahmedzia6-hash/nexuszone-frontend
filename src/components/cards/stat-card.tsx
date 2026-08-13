import { cn } from "@/lib/utils/cn";

type StatCardProps = {
  label: string;
  value: string;
  className?: string;
};

export function StatCard({ label, value, className }: StatCardProps) {
  return (
    <div className={cn("flex flex-col gap-1 py-2", className)}>
      <p className="text-3xl font-semibold text-text">{value}</p>
      <p className="text-sm text-text-muted">{label}</p>
    </div>
  );
}
