import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_8px_24px_-8px_rgb(79_70_229/0.6)] hover:bg-accent-strong hover:-translate-y-0.5",
  secondary:
    "border border-border bg-surface text-fg hover:border-accent hover:text-accent-text hover:-translate-y-0.5",
  ghost: "text-fg hover:bg-surface-2",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[15px]",
  sm: "h-9 px-3.5 text-sm",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium whitespace-nowrap transition-all duration-200",
    "disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );
}

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

/** Internal links use next/link; external links open in a new tab. */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  external,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const classes = buttonClasses(variant, size, className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
