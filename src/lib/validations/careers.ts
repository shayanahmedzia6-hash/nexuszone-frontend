import { z } from "zod";

export const careerApplicationSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(254),
  phone: z.string().min(7).max(30).optional(),
  position: z.string().min(2).max(150),
  message: z.string().min(10).max(5000),
});

export type CareerApplicationValues = z.infer<typeof careerApplicationSchema>;
