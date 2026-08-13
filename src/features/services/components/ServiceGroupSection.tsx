import { ServiceCard } from "@/components/cards/service-card";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { serviceGroupMeta, servicesCatalog } from "@/data/services-catalog";
import { type ServiceGroup } from "@/types/service";
import { cn } from "@/lib/utils/cn";

type ServiceGroupSectionProps = {
  group: ServiceGroup;
  className?: string;
};

export function ServiceGroupSection({
  group,
  className,
}: ServiceGroupSectionProps) {
  const items = servicesCatalog.filter((service) => service.group === group);
  const meta = serviceGroupMeta[group];

  if (items.length === 0) return null;

  return (
    <SectionWrapper id={`${group}-services`} className={cn(className)}>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">
          {meta.title}
        </h2>
        <p className="max-w-xl text-base text-text-muted">{meta.description}</p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </SectionWrapper>
  );
}
