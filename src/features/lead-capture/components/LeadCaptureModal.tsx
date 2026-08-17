"use client";

import { CheckCircle2, ChevronDown, X } from "lucide-react";
import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { helpTypeOptions, leadCaptureContent } from "@/data/lead-capture";
import { siteContact } from "@/data/site-contact";
import { leadCaptureSchema } from "@/lib/validations/lead-capture";
import { cn } from "@/lib/utils/cn";

import { FloatingActions } from "./FloatingActions";

const DISMISSED_KEY = "nexus-zone-lead-capture-dismissed";
const OPEN_DELAY_MS = 6000;

const fieldClass =
  "w-full rounded-lg border-0 bg-surface px-4 py-3 text-sm text-text placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  helpType: string;
  businessType: string;
  notRobot: boolean;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  helpType: "",
  businessType: "",
  notRobot: false,
};

/**
 * Auto-opens once per browser session, a few seconds after landing, as a
 * docked panel (not a blocking modal — the page stays usable behind it).
 * "notRobot" is a plain confirmation checkbox, not real Google reCAPTCHA —
 * swap in an actual reCAPTCHA site key before relying on it to stop bots.
 * No backend/email service exists yet, so submitting opens a pre-filled
 * mailto: instead of posting anywhere (same approach as the Contact page).
 */
export function LeadCaptureModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [panelTop, setPanelTop] = useState(96);

  useEffect(() => {
    const headerEl = document.querySelector("header");
    if (!headerEl) return;

    const updateOffset = () =>
      setPanelTop(headerEl.getBoundingClientRect().height + 16);

    updateOffset();
    const observer = new ResizeObserver(updateOffset);
    observer.observe(headerEl);
    return () => observer.disconnect();
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem(DISMISSED_KEY, "1");
  };

  useEffect(() => {
    if (sessionStorage.getItem(DISMISSED_KEY)) return;

    const timer = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleChange =
    (field: keyof FormState) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      const value =
        field === "notRobot"
          ? (event.target as HTMLInputElement).checked
          : event.target.value;
      setValues((prev) => ({ ...prev, [field]: value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = leadCaptureSchema.safeParse(values);
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
      `Website enquiry from ${result.data.firstName} ${result.data.lastName}`,
    );
    const body = encodeURIComponent(
      `Name: ${result.data.firstName} ${result.data.lastName}\nEmail: ${result.data.email}\nPhone: +971 ${result.data.phone}\nHow can we help: ${result.data.helpType}\nBusiness type: ${result.data.businessType || "—"}`,
    );
    window.location.href = `mailto:${siteContact.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    sessionStorage.setItem(DISMISSED_KEY, "1");
    setValues(initialState);
  };

  return (
    <>
      <FloatingActions onOpenLeadForm={() => setOpen(true)} />

      <div
        className="fixed right-0 z-[60] flex items-stretch"
        style={{ top: panelTop }}
      >
        {open ? (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={leadCaptureContent.title}
            className="bg-background relative w-[92vw] max-w-sm overflow-y-auto rounded-l-2xl p-6 shadow-2xl sm:w-[26rem] sm:p-8"
            style={{ maxHeight: `calc(100vh - ${panelTop}px - 1rem)` }}
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              className="bg-primary hover:bg-primary-hover absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full text-white shadow-md"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>

            {submitted ? (
              <div className="flex flex-col items-start gap-3">
                <CheckCircle2 className="text-primary h-8 w-8" aria-hidden />
                <h2 className="text-text text-xl font-bold">
                  {leadCaptureContent.successTitle}
                </h2>
                <p className="text-text-muted text-sm">
                  {leadCaptureContent.successBody}
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-text text-2xl font-bold sm:text-3xl">
                  {leadCaptureContent.title}
                </h2>
                <p className="text-text-muted mt-2 text-sm font-medium">
                  {leadCaptureContent.subtitle}
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-6 flex flex-col gap-3"
                  noValidate
                >
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="lead-first-name" className="sr-only">
                        First Name
                      </label>
                      <input
                        id="lead-first-name"
                        value={values.firstName}
                        onChange={handleChange("firstName")}
                        placeholder="First Name"
                        className={fieldClass}
                      />
                      {errors.firstName ? (
                        <p className="text-primary mt-1 text-xs">
                          {errors.firstName}
                        </p>
                      ) : null}
                    </div>
                    <div>
                      <label htmlFor="lead-last-name" className="sr-only">
                        Last Name
                      </label>
                      <input
                        id="lead-last-name"
                        value={values.lastName}
                        onChange={handleChange("lastName")}
                        placeholder="Last Name"
                        className={fieldClass}
                      />
                      {errors.lastName ? (
                        <p className="text-primary mt-1 text-xs">
                          {errors.lastName}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lead-email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      value={values.email}
                      onChange={handleChange("email")}
                      placeholder="Email"
                      className={fieldClass}
                    />
                    {errors.email ? (
                      <p className="text-primary mt-1 text-xs">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="lead-phone" className="sr-only">
                      Phone
                    </label>
                    <div className="focus-within:ring-primary/40 flex overflow-hidden rounded-lg focus-within:ring-2">
                      <span className="bg-surface text-text flex items-center gap-1.5 pr-2 pl-3 text-sm font-medium">
                        <span aria-hidden>🇦🇪</span>
                        +971
                        <ChevronDown
                          className="text-text-muted h-3.5 w-3.5"
                          aria-hidden
                        />
                      </span>
                      <input
                        id="lead-phone"
                        type="tel"
                        value={values.phone}
                        onChange={handleChange("phone")}
                        placeholder="50 123 4567"
                        className="bg-surface text-text placeholder:text-text-muted w-full px-3 py-3 text-sm focus:outline-none"
                      />
                    </div>
                    {errors.phone ? (
                      <p className="text-primary mt-1 text-xs">
                        {errors.phone}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="lead-help-type" className="sr-only">
                      How Can We Help You?
                    </label>
                    <div className="relative">
                      <select
                        id="lead-help-type"
                        value={values.helpType}
                        onChange={handleChange("helpType")}
                        className={cn(
                          fieldClass,
                          "appearance-none pr-9",
                          !values.helpType && "text-text-muted",
                        )}
                      >
                        <option value="">How Can We Help You?</option>
                        {helpTypeOptions.map((option) => (
                          <option
                            key={option}
                            value={option}
                            className="text-text"
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="text-text-muted pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2"
                        aria-hidden
                      />
                    </div>
                    {errors.helpType ? (
                      <p className="text-primary mt-1 text-xs">
                        {errors.helpType}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="lead-business-type" className="sr-only">
                      What type of business are you looking to set up?
                    </label>
                    <textarea
                      id="lead-business-type"
                      value={values.businessType}
                      onChange={handleChange("businessType")}
                      rows={3}
                      placeholder="What type of business are you looking to set up?"
                      className={cn(fieldClass, "resize-none")}
                    />
                  </div>

                  <label
                    htmlFor="lead-not-robot"
                    className={cn(
                      "bg-surface text-text flex cursor-pointer items-center gap-3 rounded-lg p-3 text-sm",
                      errors.notRobot && "ring-primary/40 ring-2",
                    )}
                  >
                    <input
                      id="lead-not-robot"
                      type="checkbox"
                      checked={values.notRobot}
                      onChange={handleChange("notRobot")}
                      className="accent-primary h-4 w-4"
                    />
                    I&apos;m not a robot
                  </label>
                  {errors.notRobot ? (
                    <p className="text-primary -mt-2 text-xs">
                      {errors.notRobot}
                    </p>
                  ) : null}

                  <Button
                    type="submit"
                    variant="success"
                    size="lg"
                    className="mt-1"
                  >
                    {leadCaptureContent.submitLabel}
                  </Button>
                </form>
              </>
            )}
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex min-h-56 items-center justify-center rounded-l-md bg-[var(--color-success)] px-2 py-4 text-xs font-semibold tracking-wide whitespace-nowrap text-white shadow-lg"
          style={{ writingMode: "vertical-rl" }}
        >
          {leadCaptureContent.tabLabel}
        </button>
      </div>
    </>
  );
}
