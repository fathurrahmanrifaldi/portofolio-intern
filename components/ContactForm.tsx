"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { contactSchema, type ContactFieldErrors } from "@/lib/validation";
import { buttonClasses } from "@/components/ui/Button";
import { ArrowRight, Check } from "@/components/icons";
import { cn } from "@/lib/utils";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "success" }
  | { state: "error"; message: string };

const fieldClass =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-fg placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus-visible:outline-none focus:ring-4 focus:ring-accent/15 aria-[invalid=true]:border-red-500";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [errors, setErrors] = useState<ContactFieldErrors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // Validate in the browser first for instant feedback. The server validates again.
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: ContactFieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactFieldErrors;
        if (key === "name" || key === "email" || key === "message") {
          fieldErrors[key] = [...(fieldErrors[key] ?? []), issue.message];
        }
      }
      setErrors(fieldErrors);
      setStatus({ state: "idle" });
      return;
    }

    setErrors({});
    setStatus({ state: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as {
        error?: string;
        fieldErrors?: ContactFieldErrors;
      };

      if (!res.ok) {
        if (body.fieldErrors) setErrors(body.fieldErrors);
        setStatus({ state: "error", message: body.error ?? "Something went wrong. Try again." });
        return;
      }

      form.reset();
      setStatus({ state: "success" });
    } catch {
      setStatus({
        state: "error",
        message: "Network error. Check your connection or email me directly.",
      });
    }
  }

  const sending = status.state === "sending";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-describedby="form-status"
      className="border-border bg-surface relative space-y-5 rounded-2xl border p-6 sm:p-8"
    >
      <Field id="contact-name" label="Name" error={errors.name?.[0]}>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={80}
          placeholder="Your name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={fieldClass}
        />
      </Field>

      <Field id="contact-email" label="Email" error={errors.email?.[0]}>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={120}
          placeholder="you@company.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={fieldClass}
        />
      </Field>

      <Field id="contact-message" label="Message" error={errors.message?.[0]}>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          maxLength={2000}
          placeholder="Tell me about the internship role and your team."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={cn(fieldClass, "resize-y")}
        />
      </Field>

      {/* Honeypot: hidden from people and screen readers, bots tend to fill it. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          id="contact-submit"
          disabled={sending}
          className={buttonClasses("primary", "md", "w-full sm:w-auto")}
        >
          {sending ? "Sending..." : "Send message"}
          {!sending && <ArrowRight width={18} height={18} />}
        </button>

        <p id="form-status" role="status" aria-live="polite" className="text-sm">
          {status.state === "success" && (
            <span className="text-accent-text inline-flex items-center gap-1.5 font-medium">
              <Check width={16} height={16} /> Thanks, I got your message. I&apos;ll reply by email.
            </span>
          )}
          {status.state === "error" && (
            <span className="text-red-600 dark:text-red-400">{status.message}</span>
          )}
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-fg mb-2 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
