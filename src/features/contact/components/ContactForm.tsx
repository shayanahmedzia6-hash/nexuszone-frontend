"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { type FormEvent, useState } from "react";

import { FormField } from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteContact } from "@/data/site-contact";
import { contactFormSchema } from "@/lib/validations/contact";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactFormCopy = {
  fullName: string;
  fullNamePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  message: string;
  messagePlaceholder: string;
  send: string;
  sentTitle: string;
  sentBody: string;
  sendAnother: string;
  mailSubject: string;
  mailBody: string;
  phoneFallback: string;
  errors: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
};

const initialState: FormState = { name: "", email: "", phone: "", message: "" };

function fillTemplate(
  template: string,
  values: Record<string, string>,
): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "");
}

/**
 * No backend/email service is configured yet (see src/lib/api), so this
 * opens a pre-filled mailto: to the team inbox instead of posting anywhere.
 * Swap this handler for a real API route once an email provider is set up.
 *
 * Copy is passed from the server page so AR/EN never depends on client
 * message hydration for the visible labels.
 */
export function ContactForm({ copy }: { copy: ContactFormCopy }) {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = contactFormSchema.safeParse({
      ...values,
      phone: values.phone || undefined,
    });

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FormState;
        if (fieldErrors[field]) continue;
        if (field === "name") fieldErrors.name = copy.errors.name;
        else if (field === "email") fieldErrors.email = copy.errors.email;
        else if (field === "phone") fieldErrors.phone = copy.errors.phone;
        else if (field === "message") fieldErrors.message = copy.errors.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    const phone = result.data.phone ?? copy.phoneFallback;
    const subject = encodeURIComponent(
      fillTemplate(copy.mailSubject, { name: result.data.name }),
    );
    const body = encodeURIComponent(
      fillTemplate(copy.mailBody, {
        name: result.data.name,
        email: result.data.email,
        phone,
        message: result.data.message,
      }),
    );
    window.location.href = `mailto:${siteContact.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setValues(initialState);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-xl border border-primary/30 bg-background-secondary p-6">
        <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden />
        <p className="text-base font-semibold text-text">{copy.sentTitle}</p>
        <p className="text-sm text-text-muted">{copy.sentBody}</p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSubmitted(false)}
          type="button"
        >
          {copy.sendAnother}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <FormField id="contact-name" label={copy.fullName} error={errors.name}>
        <Input
          id="contact-name"
          name="name"
          value={values.name}
          onChange={handleChange("name")}
          placeholder={copy.fullNamePlaceholder}
          required
        />
      </FormField>

      <FormField id="contact-email" label={copy.email} error={errors.email}>
        <Input
          id="contact-email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
          placeholder={copy.emailPlaceholder}
          required
        />
      </FormField>

      <FormField id="contact-phone" label={copy.phone} error={errors.phone}>
        <Input
          id="contact-phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange("phone")}
          placeholder={copy.phonePlaceholder}
        />
      </FormField>

      <FormField
        id="contact-message"
        label={copy.message}
        error={errors.message}
      >
        <textarea
          id="contact-message"
          name="message"
          value={values.message}
          onChange={handleChange("message")}
          placeholder={copy.messagePlaceholder}
          rows={5}
          required
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-text placeholder:text-text-muted focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:outline-none"
        />
      </FormField>

      <Button type="submit" size="lg" className="gap-2 self-start">
        {copy.send}
        <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
      </Button>
    </form>
  );
}
