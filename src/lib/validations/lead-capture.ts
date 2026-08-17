import { z } from "zod";

export const leadCaptureSchema = z.object({
  firstName: z.string().min(1, "Required").max(80),
  lastName: z.string().min(1, "Required").max(80),
  email: z.string().email("Enter a valid email").max(254),
  phone: z.string().min(6, "Enter a valid number").max(20),
  helpType: z.string().min(1, "Please select an option"),
  businessType: z.string().max(2000).optional(),
  notRobot: z.literal(true, {
    message: "Please confirm you're not a robot",
  }),
});

export type LeadCaptureValues = z.infer<typeof leadCaptureSchema>;
