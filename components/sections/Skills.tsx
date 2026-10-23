import { skills } from "@/data/skills";
import { skillIcons } from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Skills"
      title="Tools I use to build and ship"
      className="bg-surface-2/50"
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = skillIcons[group.icon];
          return (
            <li key={group.name}>
              <Reveal delay={i * 60} className="h-full">
                <div className="border-border bg-surface hover:border-accent/50 h-full rounded-2xl border p-6 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="bg-accent-soft text-accent-text grid size-10 place-items-center rounded-xl">
                      <Icon />
                    </span>
                    <h3 className="text-lg font-semibold">{group.name}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border-border text-fg rounded-lg border px-3 py-1.5 text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
