import { type ServiceListItem as ServiceListItemType } from "@/types/service";
import { DynamicIcon } from "@/components/navigation/nav-icons";

type ServiceListItemProps = {
  service: ServiceListItemType;
  title: string;
  summary: string;
};

export function ServiceListItem({ service, title, summary }: ServiceListItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <DynamicIcon
          name={service.icon}
          className="h-4 w-4 text-primary"
          strokeWidth={2}
        />
        <h3 className="text-base font-semibold text-text md:text-lg">
          {title}
        </h3>
      </div>
      <span className="h-0.5 w-8 bg-primary" aria-hidden />
      <p className="text-sm leading-relaxed text-text-muted">{summary}</p>
    </div>
  );
}
