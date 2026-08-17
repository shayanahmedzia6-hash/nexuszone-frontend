import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

import { DynamicIcon } from "@/components/navigation/nav-icons";
import { type ServiceListItem } from "@/types/service";
import { cn } from "@/lib/utils/cn";

type ServiceCardProps = {
  service: ServiceListItem;
  className?: string;
};

/** Anchors to `#slug` on the page unless `service.href` points elsewhere. */
export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <article
      id={service.href ? undefined : service.slug}
      className={cn(
        "flex scroll-mt-28 flex-col gap-4 rounded-xl border border-border bg-background p-6",
        className,
      )}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 text-primary">
        <DynamicIcon name={service.icon} className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div className="flex-1">
        <h3 className="text-base font-semibold text-text md:text-lg">
          {service.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-text-muted">
          {service.summary}
        </p>
      </div>
      {service.href ? (
        <Link
          href={service.href}
          className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
        >
          Learn more
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      ) : null}
    </article>
  );
}
