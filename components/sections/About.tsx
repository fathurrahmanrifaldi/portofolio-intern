import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TodoText } from "@/components/ui/TodoText";

export function About() {
  return (
    <Section id="about" index="03" eyebrow="About" title="How I work and what I want next">
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="space-y-5 text-lg leading-relaxed lg:col-span-7">
          {profile.about.map((paragraph, i) => (
            <p key={i} className="text-muted">
              <TodoText>{paragraph}</TodoText>
            </p>
          ))}
          <p className="text-fg border-accent border-l-2 pl-5 font-medium">
            <TodoText>{profile.lookingFor}</TodoText>
          </p>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-5">
          <dl className="border-border bg-surface divide-border divide-y rounded-2xl border">
            {profile.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:gap-6">
                <dt className="text-muted w-28 shrink-0 font-mono text-sm">{fact.label}</dt>
                <dd className="text-fg font-medium">
                  <TodoText>{fact.value}</TodoText>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
