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

const initialState: FormState = { name: "", email: "", phone: "", message: "" };

/**
 * No backend/email service is configured yet (see src/lib/api), so this
 * opens a pre-filled mailto: to the team inbox instead of posting anywhere.
 * Swap this handler for a real API route once an email provider is set up.
 */
export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
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
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    const subject = encodeURIComponent(`Website enquiry from ${result.data.name}`);
    const body = encodeURIComponent(
      `Name: ${result.data.name}\nEmail: ${result.data.email}\nPhone: ${result.data.phone ?? "—"}\n\n${result.data.message}`,
    );
    window.location.href = `mailto:${siteContact.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setValues(initialState);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-xl border border-primary/30 bg-background-secondary p-6">
        <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden />
        <p className="text-base font-semibold text-text">
          Your email client should now be open
        </p>
        <p className="text-sm text-text-muted">
          Send the pre-filled message and our team will get back to you
          shortly. Prefer another way? Call or WhatsApp us using the
          details alongside this form.
        </p>
        <Button variant="outline" size="sm" onClick={() => setSubmitted(false)} type="button">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <FormField id="contact-name" label="Full Name" error={errors.name}>
        <Input
          id="contact-name"
          name="name"
          value={values.name}
          onChange={handleChange("name")}
          placeholder="Your name"
          required
        />
      </FormField>

      <FormField id="contact-email" label="Email" error={errors.email}>
        <Input
          id="contact-email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
          placeholder="you@example.com"
          required
        />
      </FormField>

      <FormField
        id="contact-phone"
        label="Phone (optional)"
        error={errors.phone}
      >
        <Input
          id="contact-phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange("phone")}
          placeholder="+971 5X XXX XXXX"
        />
      </FormField>

      <FormField id="contact-message" label="Message" error={errors.message}>
        <textarea
          id="contact-message"
          name="message"
          value={values.message}
          onChange={handleChange("message")}
          placeholder="Tell us about your business and what you need help with."
          rows={5}
          required
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-text placeholder:text-text-muted focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:outline-none"
        />
      </FormField>

      <Button type="submit" size="lg" className="gap-2 self-start">
        Send Message
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Button>
    </form>
  );
}
