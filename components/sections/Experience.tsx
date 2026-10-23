import { timeline } from "@/data/timeline";
import { timelineIcons } from "@/components/icons";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TodoText } from "@/components/ui/TodoText";

const kindLabel = {
  education: "Education",
  organization: "Organization",
  certification: "Certification",
} as const;

export function Experience() {
  return (
    <Section
      id="experience"
      index="04"
      eyebrow="Education & Experience"
      title="Study, campus work, and certifications"
      className="bg-surface-2/50"
    >
      <ol className="border-border relative ml-5 border-l">
        {timeline.map((entry, i) => {
          const Icon = timelineIcons[entry.kind];
          return (
            <li key={`${entry.title}-${entry.org}`} className="relative pb-10 pl-10 last:pb-0">
              <span
                className="border-border bg-surface text-accent-text absolute top-0 -left-5 grid size-10 place-items-center rounded-full border"
                aria-hidden
              >
                <Icon width={18} height={18} />
              </span>
              <Reveal delay={i * 60}>
                <div className="border-border bg-surface rounded-2xl border p-6">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                    <div>
                      <p className="text-accent-text font-mono text-xs tracking-wide uppercase">
                        {kindLabel[entry.kind]}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold">{entry.title}</h3>
                      <p className="text-muted">{entry.org}</p>
                    </div>
                    <p className="text-muted font-mono text-sm">
                      <TodoText>{entry.period}</TodoText>
                    </p>
                  </div>
                  {entry.details.length > 0 && (
                    <ul className="text-muted mt-4 list-disc space-y-1.5 pl-5">
                      {entry.details.map((d) => (
                        <li key={d}>
                          <TodoText>{d}</TodoText>
                        </li>
                      ))}
                    </ul>
                  )}
                  {entry.link && (
                    <div className="mt-4">
                      <ExternalLink href={entry.link} label="View credential" />
                    </div>
                  )}
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
