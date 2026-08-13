import Link from "next/link";

import { type ServiceListItem } from "@/types/service";
import { cn } from "@/lib/utils/cn";

type ServiceCardProps = {
  service: ServiceListItem;
  className?: string;
};

/** Typed stub — visual design in a later phase. */
export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col gap-2 border-b border-border py-4",
        className,
      )}
    >
      <h3 className="text-lg font-semibold text-text">
        <Link href={`/services/${service.slug}`}>{service.title}</Link>
      </h3>
      <p className="text-sm text-text-muted">{service.summary}</p>
    </article>
  );
}
