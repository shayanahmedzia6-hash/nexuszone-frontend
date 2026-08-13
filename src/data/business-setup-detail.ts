import { type BusinessSetupDetail } from "@/types/business-setup-detail";

/**
 * General, publicly-known characteristics of each UAE company structure —
 * not legal or tax advice, and specifics vary by emirate/authority/activity.
 * See the disclaimer rendered on each detail page.
 */
export const businessSetupDetails: Record<
  "mainland" | "free-zone" | "offshore",
  BusinessSetupDetail
> = {
  mainland: {
    type: "mainland",
    heroTitle: "Mainland Company Setup",
    heroDescription:
      "Register a mainland company to trade freely across the UAE and internationally, with access to government contracts and the local market.",
    benefits: [
      {
        title: "Trade Anywhere in the UAE",
        description: "Operate across all Emirates without free zone restrictions.",
      },
      {
        title: "Access Government Contracts",
        description:
          "Mainland companies can bid on government and public-sector tenders.",
      },
      {
        title: "Flexible Office Locations",
        description:
          "Choose office space anywhere on the mainland, not limited to a specific zone.",
      },
      {
        title: "Broad Business Activities",
        description:
          "License a wide range of commercial, professional and industrial activities.",
      },
    ],
    idealFor: [
      "Businesses trading directly with the local UAE market",
      "Retail, contracting and service businesses needing a mainland presence",
      "Companies bidding for government contracts",
    ],
  },
  "free-zone": {
    type: "free-zone",
    heroTitle: "Free Zone Company Setup",
    heroDescription:
      "Set up in one of the UAE's free zones for 100% foreign ownership, streamlined licensing, and zone-specific incentives.",
    benefits: [
      {
        title: "100% Foreign Ownership",
        description: "No local sponsor required in most free zones.",
      },
      {
        title: "Full Profit Repatriation",
        description: "Move 100% of profits and capital out of the UAE.",
      },
      {
        title: "Streamlined Setup",
        description:
          "Many free zones offer fast, largely digital registration processes.",
      },
      {
        title: "Zone-Specific Infrastructure",
        description:
          "Access shared facilities, warehousing or office space depending on the zone.",
      },
    ],
    idealFor: [
      "Import/export and trading businesses",
      "Startups and consultancies wanting full ownership",
      "Companies not needing to trade directly in the local mainland market",
    ],
  },
  offshore: {
    type: "offshore",
    heroTitle: "Offshore Company Setup",
    heroDescription:
      "Establish an offshore company for international trade, asset holding and structuring — without a physical UAE office requirement.",
    benefits: [
      {
        title: "Asset Protection",
        description:
          "Hold international assets, shares or property under a separate corporate structure.",
      },
      {
        title: "No Physical Office Required",
        description: "Offshore companies generally do not need UAE office space.",
      },
      {
        title: "Confidential Structuring",
        description: "Commonly used for holding companies and international structuring.",
      },
      {
        title: "International Trade",
        description: "Operate and invoice internationally outside the UAE market.",
      },
    ],
    idealFor: [
      "International holding companies",
      "Businesses focused on global trade rather than the UAE market",
      "Investors structuring cross-border assets",
    ],
  },
};
