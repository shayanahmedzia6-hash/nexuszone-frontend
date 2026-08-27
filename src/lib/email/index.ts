export {
  careersCompanyEmailTemplate,
  companyEmailSubjects,
  contactCompanyEmailTemplate,
  leadCompanyEmailTemplate,
  type CareersCompanyTemplateData,
  type ContactCompanyTemplateData,
  type LeadCompanyTemplateData,
} from "./templates/company";

export {
  careersThankYouEmailTemplate,
  contactThankYouEmailTemplate,
  leadThankYouEmailTemplate,
  thankYouEmailSubjects,
  type ThankYouTemplateData,
} from "./templates/thank-you";

export {
  assertEmailEnv,
  careersEmail,
  companyEmail,
  emailConfig,
  transporter,
} from "./config";

export { emailLogoSrc, EMAIL_LOGO_CID, getEmailLogoAttachment } from "./logo";

export {
  sendCareersEmails,
  sendContactEmails,
  sendLeadEmails,
  type CareersAttachment,
} from "./service";
