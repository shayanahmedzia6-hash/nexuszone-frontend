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

function fieldRow(label: string, value: string): string {
  return `
    <tr>
      <td style="padding-bottom:14px;">
        <span style="display:block;font-size:11px;font-weight:600;color:#5b6575;text-transform:uppercase;letter-spacing:0.06em;">${escapeHtml(label)}</span>
        <p style="margin:5px 0 0;font-size:15px;font-weight:600;color:#0b1220;word-break:break-word;">${escapeHtml(value)}</p>
      </td>
    </tr>`;
}

function companyShell(options: {
  title: string;
  subtitle: string;
  source: string;
  fieldsHtml: string;
  messageHtml?: string;
}): string {
  const { title, subtitle, source, fieldsHtml, messageHtml } = options;
  const receivedAt = new Date().toLocaleString("en-AE", {
    timeZone: "Asia/Dubai",
  });

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
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="width:100%;max-width:600px;background:#ffffff;border-radius:14px;border:1px solid #e2e5eb;overflow:hidden;">
          <tr>
            <td style="padding:24px 28px;border-bottom:3px solid #e31e24;background:#ffffff;">
              <img
                src="${logoUrl()}"
                alt="Nexus Zone"
                width="200"
                style="display:block;width:200px;max-width:70%;height:auto;border:0;"
              />
              <p style="margin:14px 0 0;font-size:18px;font-weight:700;color:#0b1220;">${escapeHtml(title)}</p>
              <p style="margin:4px 0 0;font-size:13px;color:#5b6575;">${escapeHtml(subtitle)}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;">
              <p style="margin:0 0 14px;font-size:15px;font-weight:700;color:#0b1220;">Submission details</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f7f7f8;border-radius:10px;">
                <tr>
                  <td style="padding:18px 20px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      ${fieldsHtml}
                    </table>
                  </td>
                </tr>
              </table>
              ${messageHtml ?? ""}
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:22px;">
                <tr>
                  <td style="padding-top:16px;border-top:1px solid #e2e5eb;">
                    <p style="margin:0;font-size:12px;line-height:1.6;color:#5b6575;">
                      <strong style="color:#0b1220;">Received:</strong> ${escapeHtml(receivedAt)} (GST)<br />
                      <strong style="color:#0b1220;">Source:</strong> ${escapeHtml(source)}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:14px 28px;background:#0b1220;text-align:center;">
              <p style="margin:0;font-size:12px;color:#a8b0bd;">Nexus Zone — Connect. Comply. Scale.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function messageBlock(message: string): string {
  return `
    <p style="margin:22px 0 12px;font-size:15px;font-weight:700;color:#0b1220;">Message</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#fff5f5;border-left:4px solid #e31e24;border-radius:8px;">
      <tr>
        <td style="padding:16px 18px;">
          <p style="margin:0;font-size:14px;line-height:1.65;color:#0b1220;white-space:pre-wrap;">${escapeHtml(message)}</p>
        </td>
      </tr>
    </table>`;
}

export type ContactCompanyTemplateData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

/** Company inbox — Contact page form */
export function contactCompanyEmailTemplate(
  data: ContactCompanyTemplateData,
): string {
  const phone = data.phone?.trim() || "Not provided";

  return companyShell({
    title: "New contact enquiry",
    subtitle: `From ${data.name}`,
    source: "Nexus Zone website — Contact form",
    fieldsHtml: [
      fieldRow("Name", data.name),
      fieldRow("Email", data.email),
      fieldRow("Phone", phone),
    ].join(""),
    messageHtml: messageBlock(data.message),
  });
}

export type CareersCompanyTemplateData = {
  name: string;
  email: string;
  phone?: string;
  position: string;
  message: string;
  cvFileName?: string;
};

/** Company inbox — Careers application form */
export function careersCompanyEmailTemplate(
  data: CareersCompanyTemplateData,
): string {
  const phone = data.phone?.trim() || "Not provided";
  const cv = data.cvFileName?.trim() || "Not attached";

  return companyShell({
    title: "Job application received",
    subtitle: `${data.position} — ${data.name}`,
    source: "Nexus Zone website — Careers form",
    fieldsHtml: [
      fieldRow("Name", data.name),
      fieldRow("Email", data.email),
      fieldRow("Phone", phone),
      fieldRow("Position applying for", data.position),
      fieldRow("CV", cv),
    ].join(""),
    messageHtml: messageBlock(data.message),
  });
}

export type LeadCompanyTemplateData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  helpType: string;
  businessType?: string;
};

/** Company inbox — Connect With Us popup */
export function leadCompanyEmailTemplate(data: LeadCompanyTemplateData): string {
  const fullName = `${data.firstName} ${data.lastName}`.trim();
  const business = data.businessType?.trim() || "Not provided";

  return companyShell({
    title: "Website lead",
    subtitle: `From ${fullName}`,
    source: "Nexus Zone website — Connect With Us popup",
    fieldsHtml: [
      fieldRow("Name", fullName),
      fieldRow("Email", data.email),
      fieldRow("Phone", data.phone),
      fieldRow("How can we help", data.helpType),
      fieldRow("Business type", business),
    ].join(""),
  });
}

export const companyEmailSubjects = {
  contact: (name: string) => `New contact enquiry from ${name}`,
  careers: (position: string, name: string) =>
    `Job application: ${position} — ${name}`,
  lead: (firstName: string, lastName: string) =>
    `Website lead from ${firstName} ${lastName}`,
} as const;
