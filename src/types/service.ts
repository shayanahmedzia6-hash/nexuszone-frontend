export type ServiceGroup = "core" | "growth" | "support";

export type Service = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description?: string;
  icon?: string;
  group?: ServiceGroup;
  /** Overrides the default same-page `#slug` anchor (e.g. links to its own page instead). */
  href?: string;
};

export type ServiceListItem = Pick<
  Service,
  "id" | "slug" | "title" | "summary" | "icon" | "href"
>;
