export const calculatorOptions = {
  businessType: [
    { value: "trading", label: "Trading" },
    { value: "consulting", label: "Consulting" },
    { value: "e-commerce", label: "E-Commerce" },
    { value: "professional-services", label: "Professional Services" },
    { value: "other", label: "Other" },
  ],
  jurisdiction: [
    { value: "mainland", label: "Mainland" },
    { value: "free-zone", label: "Free Zone" },
    { value: "offshore", label: "Offshore" },
  ],
  visaCount: [
    { value: "0", label: "No Visas" },
    { value: "1-2", label: "1 - 2 Visas" },
    { value: "3-5", label: "3 - 5 Visas" },
    { value: "6+", label: "6+ Visas" },
  ],
  officeSpace: [
    { value: "flexi-desk", label: "Flexi Desk" },
    { value: "shared-office", label: "Shared Office" },
    { value: "private-office", label: "Private Office" },
    { value: "none", label: "Not Required" },
  ],
} as const;

export const calculatorHighlights = [
  {
    id: "instant",
    icon: "sparkles",
    title: "Instant Estimate",
    description: "Get real-time cost estimates instantly.",
  },
  {
    id: "transparent",
    icon: "shield-check",
    title: "No Hidden Fees",
    description: "Transparent pricing you can trust.",
  },
  {
    id: "save-time",
    icon: "clipboard-list",
    title: "Save Time",
    description: "Plan your budget and launch faster.",
  },
] as const;
