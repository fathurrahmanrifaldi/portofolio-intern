import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/utils";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Fullstack Web Developer (Intern candidate)",
    url: siteUrl,
    email: `mailto:${profile.email}`,
    alumniOf: "Universitas Bina Sarana Informatika",
    sameAs: profile.socials.filter((s) => s.icon !== "mail").map((s) => s.href),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <FeaturedProjects />
      <Skills />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
