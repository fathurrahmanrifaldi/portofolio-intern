"use client";

import { useState } from "react";
import { Check, Copy } from "@/components/icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the mailto link still works */
    }
  }

  return (
    <button
      type="button"
      id="copy-email"
      onClick={copy}
      aria-label={copied ? "Email copied" : "Copy email address"}
      className="text-muted hover:bg-surface-2 hover:text-fg inline-flex size-9 shrink-0 items-center justify-center rounded-lg transition-colors"
    >
      {copied ? <Check width={16} height={16} /> : <Copy width={16} height={16} />}
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
}
