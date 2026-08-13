export type BusinessSetupType =
  | "mainland"
  | "free-zone"
  | "offshore"
  | "branch"
  | "professional-license";

export type BusinessSetupOption = {
  id: string;
  type: BusinessSetupType;
  slug: string;
  title: string;
  summary: string;
  icon?: string;
  href?: string;
};
