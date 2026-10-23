import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { isTodo } from "@/lib/utils";
import { ArrowLeft, ArrowRight, GitHub } from "@/components/icons";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Container } from "@/components/ui/Section";
import { TodoText } from "@/components/ui/TodoText";
import { ProjectVisual } from "@/components/ProjectVisual";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const description = isTodo(project.problem)
    ? `Case study: ${project.originalName}. Problem, role, architecture, and lessons learned.`
    : project.problem;
  return {
    title: project.title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.title, description, type: "article" },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="pt-10 pb-24 sm:pt-16">
      <Container>
        <Link
          href="/#projects"
          className="text-muted hover:text-fg inline-flex items-center gap-2 text-sm font-medium transition-colors"
        >
          <ArrowLeft width={16} height={16} />
          All projects
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="text-accent-text font-mono text-sm">
            Case study {String(index + 1).padStart(2, "0")}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            {project.title}
          </h1>
          <p className="text-muted mt-3 italic">{project.originalName}</p>
          <p className="text-muted mt-6 text-lg leading-relaxed">
            <TodoText>{project.problem}</TodoText>
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <ExternalLink href={project.liveUrl} label="Live demo" />
            <ExternalLink
              href={project.githubUrl}
              label="GitHub"
              icon={<GitHub width={16} height={16} />}
            />
          </div>
        </header>

        <ProjectVisual
          project={project}
          priority
          sizes="(min-width: 1152px) 1088px, 100vw"
          className="mt-12"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-24">
              <YouTubeEmbed
                url={project.youtubeUrl}
                title={`${project.title} Video Presentation`}
              />

              <dl className="border-border bg-surface divide-border divide-y rounded-2xl border">
                <div className="p-5">
                  <dt className="text-muted font-mono text-xs uppercase">My role</dt>
                  <dd className="text-fg mt-1.5 font-medium">
                    <TodoText>{project.role}</TodoText>
                  </dd>
                </div>
                <div className="p-5">
                  <dt className="text-muted font-mono text-xs uppercase">Tech stack</dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </dd>
                </div>
                <div className="p-5">
                  <dt className="text-muted font-mono text-xs uppercase">Outcome</dt>
                  <dd className="text-fg mt-1.5">
                    <TodoText>{project.outcome}</TodoText>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>

          <div className="space-y-14 lg:col-span-8">
            <CaseSection title="The problem">
              <p>
                <TodoText>{project.problem}</TodoText>
              </p>
            </CaseSection>

            <CaseSection title="My role">
              <p>
                <TodoText>{project.role}</TodoText>
              </p>
            </CaseSection>

            <CaseSection title="Architecture overview">
              <p>
                <TodoText>{project.architecture}</TodoText>
              </p>
            </CaseSection>

            <CaseSection title="Key features">
              <ul className="space-y-3">
                {project.features.map((f, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="bg-accent mt-2.5 size-1.5 shrink-0 rounded-full" aria-hidden />
                    <span>
                      <TodoText>{f}</TodoText>
                    </span>
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection title="Challenges and solutions">
              <div className="space-y-4">
                {project.challenges.map((c, i) => (
                  <div key={i} className="border-border bg-surface rounded-2xl border p-5">
                    <p className="text-fg font-medium">
                      <span className="text-accent-text font-mono text-sm">Challenge · </span>
                      <TodoText>{c.challenge}</TodoText>
                    </p>
                    <p className="mt-2">
                      <span className="text-accent-text font-mono text-sm">Solution · </span>
                      <TodoText>{c.solution}</TodoText>
                    </p>
                  </div>
                ))}
              </div>
            </CaseSection>

            <CaseSection title="Outcome">
              <p>
                <TodoText>{project.outcome}</TodoText>
              </p>
            </CaseSection>

            <CaseSection title="What I'd improve next">
              <ul className="list-disc space-y-2 pl-5">
                {project.nextSteps.map((s, i) => (
                  <li key={i}>
                    <TodoText>{s}</TodoText>
                  </li>
                ))}
              </ul>
            </CaseSection>
          </div>
        </div>

        {next && next.slug !== project.slug && (
          <nav aria-label="Next project" className="border-border mt-24 border-t pt-10">
            <Link href={`/projects/${next.slug}`} className="group block">
              <p className="text-muted font-mono text-sm">Next project</p>
              <p className="group-hover:text-accent-text mt-2 flex items-center gap-3 text-2xl font-semibold tracking-tight transition-colors">
                {next.title}
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </p>
            </Link>
          </nav>
        )}
      </Container>
    </article>
  );
}

function CaseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="text-muted mt-4 text-[17px] leading-relaxed">{children}</div>
    </section>
  );
}
