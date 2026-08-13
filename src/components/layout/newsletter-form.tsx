"use client";

import { type FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

import { Input } from "@/components/ui/input";
import { footerContent } from "@/data/footer";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <form onSubmit={onSubmit} className="mt-4 flex gap-2">
      <label htmlFor="footer-newsletter-email" className="sr-only">
        Email address
      </label>
      <Input
        id="footer-newsletter-email"
        type="email"
        name="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={footerContent.newsletter.placeholder}
        className="border-border bg-background/40"
      />
      <button
        type="submit"
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-white transition-colors hover:bg-primary-hover"
        aria-label="Subscribe"
      >
        <ArrowRight className="h-4 w-4" aria-hidden />
      </button>
    </form>
  );
}
