import { needCategories } from "@/data/what-you-need";

export const leadCaptureContent = {
  title: "Connect With Us",
  tabLabel: "Connect With Us",
  subtitle: "Enter Your Contact Details",
  submitLabel: "Submit",
  successTitle: "Thanks — We've Got Your Details",
  successBody:
    "Your email client should now be open with your message ready to send. We'll be in touch shortly.",
} as const;

export const helpTypeOptions = needCategories.map((category) => category.title);
