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
  "w-full rounded-xl border-0 bg-surface px-4 py-3 text-sm text-text placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40";

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

function UaeFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 27 18" className={className} aria-hidden>
      <rect x="7" width="20" height="6" fill="#00732f" />
      <rect x="7" y="6" width="20" height="6" fill="#fff" />
      <rect x="7" y="12" width="20" height="6" fill="#000" />
      <rect width="7" height="18" fill="#ff0000" />
    </svg>
  );
}

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
      <FloatingActions />

      <div
        className="fixed z-[60] flex items-stretch"
        style={{ top: panelTop, right: 0 }}
      >
        {open ? (
          <div className="relative">
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              className="bg-primary hover:bg-primary-hover absolute z-10 flex h-9 w-9 items-center justify-center rounded-full text-white shadow-md"
              style={{ top: "-0.75rem", right: "-0.75rem" }}
            >
              <X className="h-4 w-4" aria-hidden />
            </button>

            <div
              role="dialog"
              aria-modal="true"
              aria-label={leadCaptureContent.title}
              className="bg-background flex w-[92vw] max-w-sm flex-col overflow-hidden rounded-l-2xl shadow-2xl sm:w-[26rem]"
              style={{ maxHeight: `calc(100vh - ${panelTop}px - 1rem)` }}
            >
              {submitted ? (
                <div className="flex flex-col items-start gap-3 p-6 sm:p-8">
                  <CheckCircle2 className="text-primary h-8 w-8" aria-hidden />
                  <h2 className="text-text text-xl font-bold">
                    {leadCaptureContent.successTitle}
                  </h2>
                  <p className="text-text-muted text-sm">
                    {leadCaptureContent.successBody}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 overflow-y-auto p-6 sm:p-8"
                  style={{ paddingTop: "3rem" }}
                  noValidate
                >
                  <div>
                    <h2 className="text-text text-2xl font-bold sm:text-3xl">
                      {leadCaptureContent.title}
                    </h2>
                    <p className="text-text-muted mt-2 text-sm font-medium">
                      {leadCaptureContent.subtitle}
                    </p>
                  </div>

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
                    <div className="focus-within:ring-primary/40 flex overflow-hidden rounded-xl focus-within:ring-2">
                      <span className="bg-surface text-text flex items-center gap-1.5 py-3 pr-2 pl-3 text-sm font-medium">
                        <UaeFlag className="h-3 w-5 rounded-[1px]" />
                        +971
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
                        style={{ appearance: "none" }}
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
                        className="text-text-muted pointer-events-none absolute h-4 w-4"
                        style={{
                          top: "50%",
                          right: "0.75rem",
                          transform: "translateY(-50%)",
                        }}
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
                      "bg-surface text-text flex cursor-pointer items-center gap-3 rounded-xl p-3 text-sm",
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
              )}
            </div>
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
