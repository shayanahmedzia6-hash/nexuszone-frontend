export type PartnerCategory = "free-zone" | "bank";

export type Partner = {
  id: string;
  name: string;
  /** Left unset until a real logo file is supplied — falls back to a text badge. */
  logoUrl?: string;
  websiteUrl?: string;
  category: PartnerCategory;
};
