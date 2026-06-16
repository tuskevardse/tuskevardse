import { homepageContent } from "@/content/homepage";

import { Card } from "../ui/card";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

export function DifferentiatorSection() {
  const { differentiator } = homepageContent;

  return (
    <section className="bg-brand-navy py-18 text-white sm:py-24">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.95fr)]">
        <div>
          <SectionHeading
            className="max-w-4xl"
            description={differentiator.intro}
            eyebrow={differentiator.eyebrow}
            tone="inverse"
            title={differentiator.title}
          />
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/78">{differentiator.closing}</p>
        </div>

        <Card tone="default" className="space-y-4 bg-white text-ink">
          {differentiator.points.map((point) => (
            <div key={point.title} className="rounded-[1.35rem] bg-brand-sky/55 p-5">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-brand-navy">{point.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{point.description}</p>
            </div>
          ))}
        </Card>
      </Container>
    </section>
  );
}
