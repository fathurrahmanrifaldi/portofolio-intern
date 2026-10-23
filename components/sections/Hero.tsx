import Image from "next/image";
import photo from "@/public/profile.png";
import { profile } from "@/data/profile";
import { ArrowRight, Download, GraduationCap, MapPin, Mail, Calendar } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { TodoText } from "@/components/ui/TodoText";
import { RotatingStack } from "@/components/sections/RotatingStack";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      {/* Decorative background */}
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div
        className="bg-accent/20 pointer-events-none absolute -top-40 left-1/2 -z-10 h-[480px] w-[720px] -translate-x-1/2 rounded-full blur-[120px] dark:bg-accent/25"
        aria-hidden
      />

      <Container className="grid items-center gap-12 pt-14 pb-20 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:pt-28 lg:pb-32">
        <div className="lg:col-span-7">
          <p className="border-border bg-surface/70 text-muted animate-fade-up inline-flex items-center gap-2.5 rounded-full border py-1.5 pr-4 pl-3 text-sm backdrop-blur">
            <span className="relative flex size-2.5" aria-hidden>
              <span className="animate-ping-soft bg-accent absolute inline-flex size-full rounded-full" />
              <span className="bg-accent relative inline-flex size-2.5 rounded-full" />
            </span>
            <span>
              Open for internship - <TodoText>{profile.availability}</TodoText>
            </span>
          </p>

          <h1
            id="hero-heading"
            className="animate-fade-up mt-6 text-4xl font-semibold tracking-tight text-balance [animation-delay:60ms] sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </h1>
          <p className="text-accent-text animate-fade-up mt-3 font-mono text-base [animation-delay:120ms] sm:text-lg">
            {profile.role}
          </p>
          <p className="text-muted animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-pretty [animation-delay:180ms] sm:text-xl">
            {profile.tagline}
          </p>

          <div className="animate-fade-up mt-9 flex flex-wrap gap-3 [animation-delay:240ms]">
            <ButtonLink href="#projects" id="cta-projects">
              View Projects
              <ArrowRight width={18} height={18} />
            </ButtonLink>
            <ButtonLink href={profile.cvUrl} external variant="secondary" id="cta-cv">
              <Download width={18} height={18} />
              Download CV
            </ButtonLink>
          </div>

          <ul className="text-muted animate-fade-up mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm [animation-delay:300ms]">
            <li className="flex items-center gap-2">
              <GraduationCap width={16} height={16} />
              Information Systems · GPA 3.7/4.0
            </li>
            <li className="flex items-center gap-2">
              <MapPin width={16} height={16} />
              {profile.location}
            </li>
          </ul>
        </div>

        <div className="animate-fade-up mx-auto w-full max-w-sm [animation-delay:150ms] lg:col-span-5 lg:max-w-none">
          <div className="relative">
            <div
              className="border-accent/40 absolute -inset-3 rotate-3 rounded-[2rem] border border-dashed"
              aria-hidden
            />
            <div className="border-border relative overflow-hidden rounded-[1.75rem] border bg-white shadow-[0_30px_80px_-30px_rgb(79_70_229/0.45)]">
              <Image
                src={photo}
                alt={`Portrait of ${profile.name}`}
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 420px, 384px"
                className="h-auto w-full"
              />
            </div>
            <RotatingStack />
          </div>
        </div>
      </Container>
    </section>
  );
}
