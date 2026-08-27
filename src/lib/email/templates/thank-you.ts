import { emailLogoSrc } from "../logo";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function logoUrl(): string {
  return emailLogoSrc();
}

function paragraph(text: string, options?: { bold?: boolean; marginBottom?: number }): string {
  const marginBottom = options?.marginBottom ?? 16;
  const weight = options?.bold ? "700" : "400";
  return `<p style="margin:0 0 ${marginBottom}px;font-size:15px;line-height:1.7;font-weight:${weight};color:#0b1220;">${escapeHtml(text)}</p>`;
}

/** Logo on top + message body only. */
function thankYouShell(options: {
  title: string;
  bodyHtml: string;
}): string {
  const { title, bodyHtml } = options;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)} — Nexus Zone</title>
</head>
<body style="margin:0;padding:0;background:#f0f1f3;font-family:'Segoe UI',Arial,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0;padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="560" style="width:100%;max-width:560px;background:#ffffff;border-radius:14px;border:1px solid #e2e5eb;overflow:hidden;">
          <tr>
            <td style="padding:24px 28px;border-bottom:3px solid #e31e24;background:#ffffff;">
              <img
                src="${logoUrl()}"
                alt="Nexus Zone"
                width="200"
                style="display:block;width:200px;max-width:70%;height:auto;border:0;"
              />
            </td>
          </tr>
          <tr>
            <td style="padding:28px;">
              ${bodyHtml}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export type ThankYouTemplateData = {
  name: string;
};

/** Shared thank-you for Contact + Lead (Connect With Us). */
function enquiryThankYouBody(): string {
  return [
    paragraph("Thank You for Choosing Nexus Zone", {
      bold: true,
      marginBottom: 18,
    }),
    paragraph(
      "We've received your enquiry and our team will review your requirements and get in touch with you shortly.",
    ),
    paragraph(
      "We look forward to helping you start, structure and grow your business in the UAE.",
    ),
    paragraph(
      "Meanwhile, feel free to explore our social media platforms and stay connected with Nexus Zone for the latest updates, insights and UAE business opportunities.",
    ),
    paragraph("Nexus Zone — Connect. Comply. Scale.", {
      bold: true,
      marginBottom: 0,
    }),
  ].join("");
}

function careersThankYouBody(): string {
  return [
    paragraph("Thank you for applying to Nexus Zone.", {
      bold: true,
      marginBottom: 18,
    }),
    paragraph(
      "We have received your application and appreciate your interest in joining our team. Our team will review your application and contact you if your profile is shortlisted.",
    ),
    paragraph("Best regards,"),
    paragraph("Nexus Zone Team", { bold: true, marginBottom: 0 }),
  ].join("");
}

/** User confirmation — Contact page */
export function contactThankYouEmailTemplate(
  _data?: ThankYouTemplateData,
): string {
  return thankYouShell({
    title: "Thank You for Choosing Nexus Zone",
    bodyHtml: enquiryThankYouBody(),
  });
}

/** User confirmation — Careers application */
export function careersThankYouEmailTemplate(
  _data?: ThankYouTemplateData,
): string {
  return thankYouShell({
    title: "Thank you for applying to Nexus Zone",
    bodyHtml: careersThankYouBody(),
  });
}

/** User confirmation — Connect With Us popup (same as contact) */
export function leadThankYouEmailTemplate(
  _data?: ThankYouTemplateData,
): string {
  return thankYouShell({
    title: "Thank You for Choosing Nexus Zone",
    bodyHtml: enquiryThankYouBody(),
  });
}

export const thankYouEmailSubjects = {
  contact: "Thank You for Choosing Nexus Zone",
  careers: "Thank you for applying to Nexus Zone",
  lead: "Thank You for Choosing Nexus Zone",
} as const;
