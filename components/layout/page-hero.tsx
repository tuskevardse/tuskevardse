import { Container } from "../ui/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  accent?: string;
};

export function PageHero({ eyebrow, title, description, accent }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-14 pt-12 sm:pb-18 sm:pt-16">
      <div
        className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,128,237,0.14),transparent_36%),radial-gradient(circle_at_78%_18%,rgba(140,203,94,0.12),transparent_26%),linear-gradient(180deg,#ffffff_0%,#f5faff_60%,#edf4fb_100%)] ${accent ?? ""}`}
      />
      <Container className="relative">
        <p className="inline-flex rounded-full bg-brand-sky px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-brand-navy">
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">{description}</p>
      </Container>
    </section>
  );
}
