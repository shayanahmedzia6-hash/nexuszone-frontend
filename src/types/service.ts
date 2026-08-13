export type Service = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description?: string;
  icon?: string;
};

export type ServiceListItem = Pick<
  Service,
  "id" | "slug" | "title" | "summary" | "icon"
>;
