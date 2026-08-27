import nodemailer from "nodemailer";

export const emailConfig = {
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "587", 10),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

/** Main company inbox (contact + lead forms). */
export const companyEmail =
  process.env.COMPANY_EMAIL || process.env.EMAIL_USER || "info@nexuszone.ae";

/** Careers / HR inbox. */
export const careersEmail =
  process.env.CAREERS_EMAIL || "careers@nexuszone.ae";

export const transporter = nodemailer.createTransport(emailConfig);

export function assertEmailEnv(): void {
  const required = [
    "EMAIL_HOST",
    "EMAIL_PORT",
    "EMAIL_USER",
    "EMAIL_PASSWORD",
  ] as const;

  const missing = required.filter((key) => !process.env[key]?.trim());
  if (missing.length > 0) {
    throw new Error(
      `Email is not configured. Missing: ${missing.join(", ")}`,
    );
  }
}
