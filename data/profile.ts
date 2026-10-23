import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Fathur Rahman Rifaldi",
  shortName: "Fathur",
  role: "AI Engineer | Fullstack Developer | IT Support",
  tagline:
    "Full-stack developer who digitizes real operational workflows Laravel & React/Supabase apps built with a focus on data integrity, from community waste management to salon booking systems",
  status: "7th-semester Information Systems student",
  location: "Bekasi, Indonesia",
  availability: "3-6 Months",
  email: "fathurrahmanrifaldi@gmail.com",
  cvUrl:
    "https://drive.google.com/file/d/105-EoiMJ52m5PMxY9GzkyY_7VbiJv4J0/view?usp=sharing",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/fathurrahmanrifaldi",
      handle: "fathurrahmanrifaldi",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fathurrahmanrifaldi",
      handle: "fathurrahmanrifaldi",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:fathurrahmanrifaldi@gmail.com",
      handle: "fathurrahmanrifaldi@gmail.com",
      icon: "mail",
    },
  ],
  about: [
    "I study Information Systems at Universitas Bina Sarana Informatika, now in my 7th semester. I build fullstack web apps with Laravel and React/Supabase, store data in PostgreSQL or MySQL, and ship with Docker to Vercel or Railway.",
    "I work by first mapping the business logic and data flow using ERDs and use case diagrams before writing code, then implementing it with transaction-safe, maintainable code. Before shipping, I stress-test critical flows like concurrent bookings or stock updates to catch race conditions early, not after deployment. ",
  ],
  lookingFor:
    "I’m looking for a Fullstack/Web Developer internship (PKL/magang) on-site or remote, available for 3-6 months",
  facts: [
    { label: "Focus", value: "Fullstack web development" },
    { label: "Study", value: "Information Systems, 7th semester" },
    { label: "GPA", value: "3.7 / 4.0" },
    { label: "Based in", value: "Bekasi, Indonesia" },
    { label: "Availability", value: "Available, 3-6 months, on-site/remote" },
  ],
};
