export type CalculatorInput = {
  setupType: string;
  visaCount: number;
  activityCount: number;
};

export type CalculatorResult = {
  currency: "AED";
  estimatedTotal: number;
  breakdown: Array<{
    label: string;
    amount: number;
  }>;
};
