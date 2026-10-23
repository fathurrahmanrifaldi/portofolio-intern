import type { SkillGroup } from "@/lib/types";

export const skills: SkillGroup[] = [
  { name: "Frontend", icon: "frontend", items: ["React","Next.js","JavaScript", "Tailwind CSS"] },
  { name: "Backend", icon: "backend", items: ["Laravel", "PHP", "Supabase"] },
  { name: "Database", icon: "database", items: ["PostgreSQL", "MySQL"] },
  { name: "Deployment", icon: "cloud", items: ["Docker", "Vercel", "Railway"] },
  { name: "Tools", icon: "tools", items: ["Git", "GitHub", "Linux", "Postman"] },
  { name: "Analysis & Modeling", icon: "ai", items: ["ER Diagram","UML Diagram","Data Modeling","Figma"] },
];
