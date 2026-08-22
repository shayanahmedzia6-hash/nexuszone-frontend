export type ServiceGroup = "core" | "support";

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

/** Catalog rows store structure only; title/summary come from messages. */
export type ServiceCatalogItem = Omit<Service, "title" | "summary">;

export type ServiceListItem = Pick<
  Service,
  "id" | "slug" | "title" | "summary" | "icon" | "href"
>;
