"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ChevronDown, X } from "lucide-react";
import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";

import { Button } from "@/components/ui/button";
import { helpTypeOptions, leadCaptureContent } from "@/data/lead-capture";
import { siteContact } from "@/data/site-contact";
import { leadCaptureSchema } from "@/lib/validations/lead-capture";
import { cn } from "@/lib/utils/cn";

import { FloatingActions } from "./FloatingActions";

const DISMISSED_KEY = "nexus-zone-lead-capture-dismissed";
const OPEN_DELAY_MS = 6000;

const modalBackdropTransition = { duration: 0.28, ease: [0.16, 1, 0.3, 1] as const };
const modalPanelTransition = { duration: 0.32, ease: [0.16, 1, 0.3, 1] as const };

const fieldClass =
  "w-full rounded-lg bg-glass/50 px-3.5 py-2.5 text-sm text-text ring-1 ring-glass-border backdrop-blur-sm placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40";

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
 * centered modal with backdrop. "notRobot" is a plain confirmation checkbox,
 * not real Google reCAPTCHA — swap in an actual reCAPTCHA site key before
 * relying on it to stop bots. No backend/email service exists yet, so
 * submitting opens a pre-filled mailto: instead of posting anywhere (same
 * approach as the Contact page).
 */
export function LeadCaptureModal() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-mount guard for portal
    setMounted(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setSubmitted(false);
    sessionStorage.setItem(DISMISSED_KEY, "1");
  };

  const handleOpen = () => {
    setSubmitted(false);
    setOpen(true);
  };

  useEffect(() => {
    if (sessionStorage.getItem(DISMISSED_KEY)) return;

    const timer = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
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

  const modal =
    mounted ? (
      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              key="lead-capture-backdrop"
              role="presentation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={modalBackdropTransition}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
              onClick={handleClose}
            />

            <div className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center p-4">
              <motion.div
                key="lead-capture-panel"
                role="dialog"
                aria-modal="true"
                aria-label={leadCaptureContent.title}
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 10 }}
                transition={modalPanelTransition}
                className="border-glass-border pointer-events-auto relative flex max-h-[min(88dvh,40rem)] w-[min(100%,22rem)] flex-col overflow-hidden rounded-2xl border bg-glass/35 shadow-[0_24px_80px_-16px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
                onClick={(event) => event.stopPropagation()}
              >
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="text-text-muted hover:text-text hover:bg-glass/60 absolute top-3.5 right-3.5 z-10 flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-sm transition-colors"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>

          <div className="shrink-0 px-5 pt-5 pb-1 text-center">
            <h2 className="text-text text-lg font-bold tracking-tight">
              {submitted
                ? leadCaptureContent.successTitle
                : leadCaptureContent.title}
            </h2>
            {!submitted ? (
              <p className="text-text-muted mt-1 text-xs font-medium">
                {leadCaptureContent.subtitle}
              </p>
            ) : null}
          </div>

          {submitted ? (
            <div className="flex flex-col items-start gap-3 overflow-y-auto px-5 py-4">
              <CheckCircle2 className="text-primary h-8 w-8" aria-hidden />
              <p className="text-text-muted text-sm">
                {leadCaptureContent.successBody}
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={handleClose}
              >
                Close
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 overflow-y-auto px-5 pt-3 pb-5"
              noValidate
            >
              <div className="flex flex-col gap-3">
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
                  <p className="text-primary mt-1 text-xs">{errors.email}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="lead-phone" className="sr-only">
                  Phone
                </label>
                <div className="focus-within:ring-primary/40 ring-glass-border flex overflow-hidden rounded-lg ring-1 focus-within:ring-2">
                  <span className="bg-glass/50 text-text flex items-center gap-1.5 py-2.5 pr-2 pl-3 text-sm font-medium backdrop-blur-sm">
                    <UaeFlag className="h-3 w-5 rounded-[1px]" />
                    +971
                  </span>
                  <input
                    id="lead-phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange("phone")}
                    placeholder="50 123 4567"
                    className="bg-glass/50 text-text placeholder:text-text-muted w-full px-3 py-2.5 text-sm backdrop-blur-sm focus:outline-none"
                  />
                </div>
                {errors.phone ? (
                  <p className="text-primary mt-1 text-xs">{errors.phone}</p>
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
                      <option key={option} value={option} className="text-text">
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
                  <p className="text-primary mt-1 text-xs">{errors.helpType}</p>
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
                  rows={2}
                  placeholder="What type of business are you looking to set up?"
                  className={cn(fieldClass, "resize-none")}
                />
              </div>

              <label
                htmlFor="lead-not-robot"
                className={cn(
                  "bg-glass/50 text-text ring-glass-border flex cursor-pointer items-center gap-2.5 rounded-lg p-2.5 text-xs ring-1 backdrop-blur-sm",
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
                <p className="text-primary -mt-2 text-xs">{errors.notRobot}</p>
              ) : null}

              <Button type="submit" variant="success" className="mt-0.5 w-full">
                {leadCaptureContent.submitLabel}
              </Button>
            </form>
          )}
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>
    ) : null;

  return (
    <>
      <FloatingActions />

      {!open ? (
        <button
          type="button"
          onClick={handleOpen}
          className="fixed right-5 bottom-[5.75rem] z-30 rounded-full bg-[var(--color-success)] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
        >
          {leadCaptureContent.tabLabel}
        </button>
      ) : null}

      {modal && createPortal(modal, document.body)}
    </>
  );
}
