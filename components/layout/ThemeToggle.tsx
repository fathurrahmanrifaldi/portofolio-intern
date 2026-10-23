"use client";

import { Moon, Sun } from "@/components/icons";

/**
 * Toggles the `dark` class on <html> and stores the choice.
 * Icons switch with CSS (dark: variants), so server and client markup match
 * and there is no hydration flash.
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage blocked: theme still applies for this visit */
    }
  }

  return (
    <button
      type="button"
      id="theme-toggle"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="text-muted hover:bg-surface-2 hover:text-fg inline-flex size-10 items-center justify-center rounded-xl transition-colors"
    >
      <Sun className="hidden dark:block" />
      <Moon className="block dark:hidden" />
    </button>
  );
}

/** Inline script for <head>: applies the saved or system theme before paint. */
export const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;
