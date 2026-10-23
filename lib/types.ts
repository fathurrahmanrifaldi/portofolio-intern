/**
 * Content types. Every section of the site reads from typed data in /data.
 * Strings that start with "[TODO:" render as visible placeholders (see TodoText).
 */

export type Project = {
  slug: string;
  title: string;
  /** Original (Indonesian) project name */
  originalName: string;
  /** One-line problem statement */
  problem: string;
  role: string;
  stack: string[];
  features: string[];
  outcome: string;
  architecture: string;
  challenges: { challenge: string; solution: string }[];
  nextSteps: string[];
  /** Absolute URL or a "[TODO: ...]" string */
  liveUrl: string;
  /** Absolute URL or a "[TODO: ...]" string */
  githubUrl: string;
  /** Path under /public, e.g. "/projects/basara.png". null shows a placeholder. */
  image: string | null;
  imageAlt: string;
};

export type SkillGroup = {
  name: string;
  icon: "frontend" | "backend" | "database" | "cloud" | "tools" | "ai";
  items: string[];
};

export type TimelineEntry = {
  kind: "education" | "organization" | "certification";
  title: string;
  org: string;
  period: string;
  details: string[];
  link?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
  icon: "github" | "linkedin" | "mail";
};

export type Profile = {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  status: string;
  location: string;
  availability: string;
  email: string;
  cvUrl: string;
  socials: SocialLink[];
  about: string[];
  lookingFor: string;
  facts: { label: string; value: string }[];
};
