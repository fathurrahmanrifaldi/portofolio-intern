"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import logoImage from "@/public/logo.png";
import { profile } from "@/data/profile";
import { Close, Menu } from "@/components/icons";
import { cn } from "@/lib/utils";
import { buttonClasses } from "@/components/ui/Button";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-border bg-bg/80 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-semibold tracking-tight"
          aria-label={`${profile.name}, home`}
        >
          <span className="border-border/80 bg-surface-2 ring-accent/30 group-hover:ring-accent relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full border ring-2 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(79,70,229,0.35)]">
            <Image
              src={logoImage}
              alt={`${profile.name} logo`}
              width={32}
              height={32}
              priority
              className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted hover:bg-surface-2 hover:text-fg rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Link
            href="/#contact"
            className={buttonClasses("primary", "sm", "hidden md:inline-flex")}
          >
            Contact
          </Link>
          <button
            type="button"
            id="mobile-menu-toggle"
            className="text-fg hover:bg-surface-2 inline-flex size-10 items-center justify-center rounded-xl md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={cn("border-border border-t md:hidden", open ? "block" : "hidden")}
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
          {[...nav, { href: "/#contact", label: "Contact" }].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-fg hover:bg-surface-2 block rounded-lg px-3 py-3 text-base font-medium"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
