import { profile } from "@/data/profile";
import { socialIcons } from "@/components/icons";
import { ContactForm } from "@/components/ContactForm";
import { CopyEmail } from "@/components/CopyEmail";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Contact() {
  const links = profile.socials.filter((s) => s.icon !== "mail");

  return (
    <Section
      id="contact"
      index="05"
      eyebrow="Contact"
      title="Tell me about your internship opening"
      intro="Use the form or email me directly. Include the role and the start date, and I'll reply by email."
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <Reveal className="space-y-6 lg:col-span-5">
          <div className="border-border bg-surface rounded-2xl border p-6">
            <p className="text-muted font-mono text-sm">Email</p>
            <div className="mt-2 flex items-center gap-2">
              <a
                href={`mailto:${profile.email}`}
                id="contact-email-link"
                className="text-fg hover:text-accent-text text-lg font-semibold break-all transition-colors"
              >
                {profile.email}
              </a>
              <CopyEmail email={profile.email} />
            </div>
          </div>

          <ul className="space-y-3">
            {links.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-border bg-surface hover:border-accent/50 flex items-center gap-4 rounded-2xl border p-4 transition-colors"
                  >
                    <span className="bg-surface-2 text-fg group-hover:bg-accent-soft group-hover:text-accent-text grid size-10 place-items-center rounded-xl transition-colors">
                      <Icon />
                    </span>
                    <span>
                      <span className="text-fg block font-medium">{s.label}</span>
                      <span className="text-muted block text-sm">{s.handle}</span>
                    </span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
