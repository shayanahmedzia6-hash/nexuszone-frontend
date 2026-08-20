"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { type FormEvent, useState } from "react";

import { FormField } from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteContact } from "@/data/site-contact";
import { careerApplicationSchema } from "@/lib/validations/careers";

type FormState = {
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  position: "",
  message: "",
};

/**
 * No backend/email service is configured yet (see src/lib/api), so this
 * opens a pre-filled mailto: to the careers inbox instead of posting
 * anywhere. mailto: can't attach files, so applicants are asked to attach
 * their CV in the email client before sending.
 */
export function CareerApplicationForm() {
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

    const result = careerApplicationSchema.safeParse({
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

    const subject = encodeURIComponent(
      `Job application: ${result.data.position} — ${result.data.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${result.data.name}\nEmail: ${result.data.email}\nPhone: ${result.data.phone ?? "—"}\nPosition: ${result.data.position}\n\n${result.data.message}\n\n(Please remember to attach your CV before sending.)`,
    );
    window.location.href = `mailto:${siteContact.careersEmail}?subject=${subject}&body=${body}`;

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
          Attach your CV to the pre-filled email and send it — our team
          reviews every application.
        </p>
        <Button variant="outline" size="sm" onClick={() => setSubmitted(false)} type="button">
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <FormField id="career-name" label="Full Name" error={errors.name}>
        <Input
          id="career-name"
          name="name"
          value={values.name}
          onChange={handleChange("name")}
          placeholder="Your name"
          required
        />
      </FormField>

      <FormField id="career-email" label="Email" error={errors.email}>
        <Input
          id="career-email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
          placeholder="you@example.com"
          required
        />
      </FormField>

      <FormField id="career-phone" label="Phone (optional)" error={errors.phone}>
        <Input
          id="career-phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange("phone")}
          placeholder="+971 5X XXX XXXX"
        />
      </FormField>

      <FormField
        id="career-position"
        label="Position"
        error={errors.position}
        hint="Enter the role you're applying for, or 'General Application' if nothing listed fits."
      >
        <Input
          id="career-position"
          name="position"
          value={values.position}
          onChange={handleChange("position")}
          placeholder="e.g. General Application"
          required
        />
      </FormField>

      <FormField
        id="career-message"
        label="Message"
        error={errors.message}
        hint="Your email client will open with this pre-filled — attach your CV before sending."
      >
        <textarea
          id="career-message"
          name="message"
          value={values.message}
          onChange={handleChange("message")}
          placeholder="Tell us a bit about yourself and why you'd be a great fit."
          rows={5}
          required
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-text placeholder:text-text-muted focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:outline-none"
        />
      </FormField>

      <Button type="submit" size="lg" className="gap-2 self-start">
        Submit Application
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Button>
    </form>
  );
}
