import { needCategories } from "@/data/what-you-need";

export const leadCaptureContent = {
  title: "Connect With Us",
  tabLabel: "Connect With Us",
  subtitle: "Enter Your Contact Details",
  submitLabel: "Submit",
  successTitle: "Thanks — We've Got Your Details",
  successBody:
    "Your message has been sent. We've emailed you a confirmation and our team will be in touch shortly.",
  submittingLabel: "Sending…",
  submitError: "Something went wrong. Please try again.",
} as const;

export const helpTypeOptions = needCategories.map((category) => category.title);
