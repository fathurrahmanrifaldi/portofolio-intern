ROLE
You are a senior fullstack engineer and UI designer who has hired and reviewed
junior candidates. Build a personal portfolio website for an internship
candidate. Optimize it for recruiters who skim for 30-60 seconds.

CANDIDATE

- Name: Fathur Rahman Rifaldi
- Status: 7th-semester Information Systems student, Indonesia
- Goal: Seeking a Fullstack / Web Developer internship (PKL/magang)
- Availability: [start date, duration, remote/onsite/hybrid, city]
- Tech skills: [JavaScript, Tailwind, 
Laravel, PHP,
PostgreSQL, MySQL, 
Git, github, Docker, CI/CD, Vercel, Render, 
Figma, Linux, Postman,
Codex, GitHub copilot, Antigravity, OpenCode]. Group by Frontend, Backend, Database, Cloud & DevOps, Tools, AI Coding.
- Projects (3-4 max, ordered by strength). For each, I will provide:
  title, one-line problem statement, my specific role, tech stack, key features, live demo URL, GitHub URL.
  [PROJECT 1: Sistem Aplikasi Bank Sampah RW 042 (BASARA)] [PROJECT 2: Website Booking Eva Salon] [PROJECT 3: Sistem inventaris dan penyesuaian stok - Warung Sembako Pak Raswan]
- Education: [Universitas Bina Sarana Informatika, GPA 3.7/4.0]
- Other: [Organization: Himpunan Mahasiswa Sistem Informasi as member of Kominfo, certifications: Database Administrator 2026 by LSP BSI, Data Fundamentals 2026 by IBM SkillsBuild]
- Contact: [email: fathurrahmanrifaldi@gmail.com, GitHub:github.com/fathurrahmanrifaldi, LinkedIn: linkedin.com/in/fathurrifaldi, CV PDF: https://drive.google.com/drive/folders/1c0MO0Me3gWy0X6Afk5jIkpq92qbi8WCk?usp=sharing]

STRICT CONTENT RULES

- Use ONLY the information I provide. Never invent projects, metrics, companies,
  testimonials, or skills. If something is missing, insert a clearly marked
  placeholder like [TODO: add X] and list all TODOs at the end.
- Write in English: concise, specific, active voice, no buzzword filler
  ("passionate", "hardworking", "team player") without evidence.
- Each project description: problem -> my contribution -> tech -> outcome.

TECH STACK

- Next.js (App Router) + TypeScript + Tailwind CSS, static-first.
- Content stored in typed data files (e.g., /data/projects.ts), not hardcoded in JSX.
- Contact form via a Next.js API route (Route Handler) with server-side validation
  (zod), basic rate limiting/honeypot spam protection, and email delivery through
  an env-configured provider. No secrets in the repo; provide .env.example.
- Deployable to Vercel with zero extra config.

PAGE STRUCTURE (single page + project detail pages)

1. Hero: name, role ("Fullstack Web Developer - Open for Internship"),
   one-sentence value proposition, CTAs: "View Projects", "Download CV", "Contact".
2. Featured Projects: cards with screenshot, stack badges, Live Demo + GitHub links.
3. Project detail page: problem, role, architecture overview, key features,
   challenges and solutions, what I'd improve next.
4. Skills: grouped, no percentage bars (they're meaningless to recruiters).
5. About: short, focused on how I work and what I'm looking for.
6. Education & Experience (including organizational/academic work).
7. Contact: form + direct email + social links.

DESIGN

- Clean, modern, minimal, professional. One accent color, strong typography
  hierarchy, generous whitespace.
- Light and dark mode.
- Mobile-first, fully responsive.
- Subtle animations only (Framer Motion optional); respect prefers-reduced-motion.

QUALITY BAR

- Lighthouse target: 90+ Performance, Accessibility, Best Practices, SEO.
- Semantic HTML, keyboard navigable, alt text, sufficient color contrast.
- SEO: metadata, Open Graph image, sitemap, robots.txt.
- Optimized images (next/image), no layout shift.
- Clean folder structure, reusable components, ESLint/Prettier configured.

PROCESS
Step 1: Before writing code, give a short plan: file structure, component list,
and any assumptions or questions. Wait for my confirmation.
Step 2: Generate the full code file by file, with exact paths.
Step 3: Provide setup, run, and Vercel deployment instructions.
Step 4: End with a checklist of TODO placeholders I must fill in, plus 5 concrete
suggestions to improve how recruiters perceive this portfolio.

OUT OF SCOPE
No CMS, no auth, no database, no heavy 3D effects, no unnecessary libraries.
Keep it simple enough that I can explain every part in an interview.

Language: English