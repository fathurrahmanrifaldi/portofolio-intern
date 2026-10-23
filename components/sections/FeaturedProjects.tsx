import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function FeaturedProjects() {
  return (
    <Section
      id="projects"
      index="01"
      eyebrow="Projects"
      title="AI Automation I Built For Financial Tracker, Customer Feedback Sentiment Analyzer, And Home AI Agent"
      intro="Each case study covers the problem, my part in it, the architecture, and the parts I would change next."
    >
      <div className="space-y-24 sm:space-y-32">
        {projects.map((project, i) => (
          <Reveal key={project.slug}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
