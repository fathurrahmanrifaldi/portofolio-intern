import { profile } from "@/data/profile";
import { socialIcons } from "@/components/icons";
import { Container } from "@/components/ui/Section";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-border border-t py-10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-muted text-sm">
          © {year} {profile.name}. Built with Next.js and Tailwind CSS.
        </p>
        <ul className="flex items-center gap-1" aria-label="Social links">
          {profile.socials.map((s) => {
            const Icon = socialIcons[s.icon];
            const external = !s.href.startsWith("mailto:");
            return (
              <li key={s.label}>
                <a
                  href={s.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={s.label}
                  className="text-muted hover:bg-surface-2 hover:text-fg inline-flex size-10 items-center justify-center rounded-xl transition-colors"
                >
                  <Icon />
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </footer>
  );
}
