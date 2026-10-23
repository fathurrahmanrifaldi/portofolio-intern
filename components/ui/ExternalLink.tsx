import type { ReactNode } from "react";
import { isUrl, cn } from "@/lib/utils";
import { ArrowUpRight } from "@/components/icons";

type Props = {
  href: string;
  label: string;
  icon?: ReactNode;
  className?: string;
};

/**
 * External link that degrades to a visible TODO chip when the URL is still a placeholder.
 */
export function ExternalLink({ href, label, icon, className }: Props) {
  if (!isUrl(href)) {
    return (
      <span
        className={cn("todo inline-flex items-center gap-1.5 py-1 text-xs", className)}
        title={href}
      >
        {icon}
        {label}: TODO
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group text-fg hover:text-accent-text inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
        className,
      )}
    >
      {icon}
      {label}
      <ArrowUpRight
        width={14}
        height={14}
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
