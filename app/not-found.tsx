import { ArrowLeft } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="text-accent-text font-mono text-sm">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-muted mt-4 max-w-md text-lg">
        The link may be old or mistyped. Head back to the homepage to see my projects.
      </p>
      <ButtonLink href="/" className="mt-8">
        <ArrowLeft width={18} height={18} />
        Back home
      </ButtonLink>
    </Container>
  );
}
