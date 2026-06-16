import { homepageContent } from "@/content/homepage";

import { ButtonLink } from "../ui/button-link";
import { Card } from "../ui/card";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

export function SupportersSection() {
  const { supporters } = homepageContent;

  return (
    <section className="bg-white/70 py-18 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          description={supporters.description}
          eyebrow={supporters.eyebrow}
          title={supporters.title}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {supporters.items.map((item) => (
            <Card key={item.title} className="h-full">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          {supporters.actions.map((action) => (
            <ButtonLink key={action.label} href={action.href} size="lg" variant={action.variant}>
              {action.label}
            </ButtonLink>
          ))}
        </div>
      </Container>
    </section>
  );
}
