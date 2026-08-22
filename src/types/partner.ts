export type PartnerCategory = "free-zone" | "bank";

export type Partner = {
  id: string;
  name: string;
  /** Left unset until a real logo file is supplied — falls back to a text badge. */
  logoUrl?: string;
  /** Light logos that need a grey backing tile in light mode only. */
  logoLightBackground?: boolean;
  /** Render the logo larger inside the partner tile (small source assets). */
  logoLarge?: boolean;
  websiteUrl?: string;
  category: PartnerCategory;
};
