import Image from "next/image";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

/**
 * Screenshot inside a browser-style frame. Without an image it shows a
 * labelled placeholder with the same aspect ratio, so swapping in a real
 * screenshot causes no layout shift.
 */
export function ProjectVisual({ project, priority, className, sizes }: Props) {
  return (
    <div
      className={cn(
        "border-border bg-surface overflow-hidden rounded-2xl border shadow-[0_24px_60px_-30px_rgb(15_16_32/0.35)]",
        className,
      )}
    >
      <div className="border-border bg-surface-2 flex h-8 items-center gap-1.5 border-b px-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="size-2.5 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="size-2.5 rounded-full bg-[#28c840]" aria-hidden />
      </div>
      <div className="relative aspect-[16/10]">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority={priority}
            sizes={sizes ?? "(min-width: 1024px) 560px, 100vw"}
            className="object-cover object-top"
          />
        ) : (
          <div
            role="img"
            aria-label={`Screenshot placeholder for ${project.title}`}
            className="from-accent-soft via-surface to-surface absolute inset-0 grid place-items-center bg-gradient-to-br p-6"
          >
            <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
            <div className="relative text-center">
              <p className="text-accent-text font-mono text-xs tracking-widest uppercase">
                {project.slug.replace(/-/g, " ")}
              </p>
              <p className="text-fg mt-2 text-lg font-semibold text-balance sm:text-xl">
                {project.title.split(":")[0]}
              </p>
              <p className="todo mt-4 inline-block">[TODO: add screenshot]</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
