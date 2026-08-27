import {
  careersEmail,
  companyEmail,
  transporter,
  assertEmailEnv,
} from "./config";
import { getEmailLogoAttachment } from "./logo";
import {
  careersCompanyEmailTemplate,
  companyEmailSubjects,
  contactCompanyEmailTemplate,
  leadCompanyEmailTemplate,
  type CareersCompanyTemplateData,
  type ContactCompanyTemplateData,
  type LeadCompanyTemplateData,
} from "./templates/company";
import {
  careersThankYouEmailTemplate,
  contactThankYouEmailTemplate,
  leadThankYouEmailTemplate,
  thankYouEmailSubjects,
} from "./templates/thank-you";

type EmailResult = {
  success: true;
  message: string;
};

export type CareersAttachment = {
  filename: string;
  content: Buffer;
  contentType?: string;
};

async function sendPair(options: {
  companyTo: string;
  companySubject: string;
  companyHtml: string;
  userTo: string;
  userSubject: string;
  userHtml: string;
  attachments?: CareersAttachment[];
}): Promise<void> {
  assertEmailEnv();

  const from = process.env.EMAIL_USER;
  const logo = getEmailLogoAttachment();
  const extraAttachments = (options.attachments ?? []).map((file) => ({
    filename: file.filename,
    content: file.content,
    contentType: file.contentType,
  }));

  await transporter.sendMail({
    from,
    to: options.companyTo,
    subject: options.companySubject,
    html: options.companyHtml,
    replyTo: options.userTo,
    attachments: [logo, ...extraAttachments],
  });

  await transporter.sendMail({
    from,
    to: options.userTo,
    subject: options.userSubject,
    html: options.userHtml,
    attachments: [logo],
  });
}

export async function sendContactEmails(
  data: ContactCompanyTemplateData,
): Promise<EmailResult> {
  try {
    await sendPair({
      companyTo: companyEmail,
      companySubject: companyEmailSubjects.contact(data.name),
      companyHtml: contactCompanyEmailTemplate(data),
      userTo: data.email,
      userSubject: thankYouEmailSubjects.contact,
      userHtml: contactThankYouEmailTemplate({ name: data.name }),
    });

    return {
      success: true,
      message: "Your message has been sent successfully.",
    };
  } catch (error) {
    console.error("Contact email failed:", error);
    throw new Error("Failed to send email. Please try again later.");
  }
}

export async function sendCareersEmails(
  data: CareersCompanyTemplateData,
  attachment?: CareersAttachment,
): Promise<EmailResult> {
  try {
    await sendPair({
      companyTo: careersEmail,
      companySubject: companyEmailSubjects.careers(data.position, data.name),
      companyHtml: careersCompanyEmailTemplate(data),
      userTo: data.email,
      userSubject: thankYouEmailSubjects.careers,
      userHtml: careersThankYouEmailTemplate({ name: data.name }),
      attachments: attachment ? [attachment] : undefined,
    });

    return {
      success: true,
      message: "Your application has been sent successfully.",
    };
  } catch (error) {
    console.error("Careers email failed:", error);
    throw new Error("Failed to send application. Please try again later.");
  }
}

export async function sendLeadEmails(
  data: LeadCompanyTemplateData,
): Promise<EmailResult> {
  try {
    const fullName = `${data.firstName} ${data.lastName}`.trim();

    await sendPair({
      companyTo: companyEmail,
      companySubject: companyEmailSubjects.lead(data.firstName, data.lastName),
      companyHtml: leadCompanyEmailTemplate(data),
      userTo: data.email,
      userSubject: thankYouEmailSubjects.lead,
      userHtml: leadThankYouEmailTemplate({ name: fullName }),
    });

    return {
      success: true,
      message: "Your details have been sent successfully.",
    };
  } catch (error) {
    console.error("Lead email failed:", error);
    throw new Error("Failed to send details. Please try again later.");
  }
}
