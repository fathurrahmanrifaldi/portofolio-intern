import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

/** Page section with a numbered eyebrow and a single h2. */
export function Section({ id, index, eyebrow, title, intro, children, className }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={cn("py-20 sm:py-28", className)}>
      <Container>
        <Reveal>
          <p className="text-accent-text flex items-center gap-3 font-mono text-sm">
            <span>{index}</span>
            <span className="bg-border h-px w-8" aria-hidden />
            <span className="tracking-wide uppercase">{eyebrow}</span>
          </p>
          <h2
            id={headingId}
            className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            {title}
          </h2>
          {intro && <p className="text-muted mt-4 max-w-2xl text-lg leading-relaxed">{intro}</p>}
        </Reveal>
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}
