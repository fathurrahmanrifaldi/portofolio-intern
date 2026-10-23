import Link from "next/link";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ArrowRight, GitHub } from "@/components/icons";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { TodoText } from "@/components/ui/TodoText";
import { ProjectVisual } from "./ProjectVisual";

type Props = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: Props) {
  const reversed = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      aria-labelledby={`project-${project.slug}-title`}
      className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
    >
      <Link
        href={`/projects/${project.slug}`}
        tabIndex={-1}
        aria-hidden
        className={cn(
          "block transition-transform duration-500 group-hover:-translate-y-1 lg:col-span-7",
          reversed && "lg:order-2",
        )}
      >
        <ProjectVisual project={project} priority={index === 0} />
      </Link>

      <div className="lg:col-span-5">
        <p className="text-accent-text font-mono text-sm">{number}</p>
        <h3
          id={`project-${project.slug}-title`}
          className="mt-2 text-2xl font-semibold tracking-tight text-balance"
        >
          <Link
            href={`/projects/${project.slug}`}
            className="hover:text-accent-text transition-colors"
          >
            {project.title}
          </Link>
        </h3>
        <p className="text-muted mt-1 text-sm italic">{project.originalName}</p>

        <dl className="mt-5 space-y-3 text-[15px] leading-relaxed">
          <div>
            <dt className="text-fg font-medium">Problem</dt>
            <dd className="text-muted">
              <TodoText>{project.problem}</TodoText>
            </dd>
          </div>
          <div>
            <dt className="text-fg font-medium">My role</dt>
            <dd className="text-muted">
              <TodoText>{project.role}</TodoText>
            </dd>
          </div>
        </dl>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <Link
            href={`/projects/${project.slug}`}
            className="text-accent-text inline-flex items-center gap-1.5 text-sm font-semibold"
          >
            Read case study
            <ArrowRight width={16} height={16} className="transition-transform group-hover:translate-x-1" />
            <span className="sr-only">: {project.title}</span>
          </Link>          
          <ExternalLink href={project.liveUrl} label="Live demo" />
        </div>
      </div>
    </article>
  );
}
