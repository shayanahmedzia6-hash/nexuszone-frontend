import { z } from "zod";

export const calculatorInputSchema = z.object({
  setupType: z.string().min(1),
  visaCount: z.number().int().min(0).max(100),
  activityCount: z.number().int().min(1).max(50),
});

export type CalculatorInputValues = z.infer<typeof calculatorInputSchema>;
