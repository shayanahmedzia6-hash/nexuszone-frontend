export type BusinessSetupType = "mainland" | "free-zone" | "offshore";

export type BusinessSetupOption = {
  id: string;
  type: BusinessSetupType;
  slug: string;
  title: string;
  summary: string;
};
