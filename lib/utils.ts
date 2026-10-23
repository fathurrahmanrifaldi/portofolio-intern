/** Matches a placeholder such as "[TODO: add live demo URL]". */
export const TODO_PATTERN = /(\[TODO:[^\]]*\])/g;

export function isTodo(value: string | null | undefined): boolean {
  return !value || value.trim().startsWith("[TODO");
}

export function isUrl(value: string | null | undefined): value is string {
  return !!value && /^https?:\/\//.test(value);
}

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
  /\/$/,
  "",
);

export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
