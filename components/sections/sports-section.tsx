import { homepageContent } from "@/content/homepage";

import { ButtonLink } from "../ui/button-link";
import { Card } from "../ui/card";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

export function SportsSection() {
  const { sports } = homepageContent;

  return (
    <section id="sportagak" className="bg-white/65 py-18 sm:py-24" data-editor-block="home.sports">
      <Container>
        <SectionHeading
          align="center"
          description={sports.description}
          editorId="home.sports"
          eyebrow={sports.eyebrow}
          title={sports.title}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sports.items.map((sport, index) => (
            <Card
              key={sport.name}
              className="relative overflow-hidden border border-white/80 p-0"
              data-editor-block={`home.sports.item.${index}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${sport.accent}`} />
              <div className="relative flex h-full flex-col p-7 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue" data-editor-text={`home.sports.item.${index}.badge`}>
                  {sport.badge}
                </p>
                <h3 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-ink" data-editor-text={`home.sports.item.${index}.name`}>
                  {sport.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-muted" data-editor-text={`home.sports.item.${index}.summary`}>
                  {sport.summary}
                </p>

                <div className="mt-6 rounded-[1.4rem] bg-white/88 p-5" data-editor-block={`home.sports.item.${index}.audienceCard`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-navy/70" data-editor-text={`home.sports.item.${index}.audienceLabel`}>
                    Kinek ajánljuk?
                  </p>
                  <p className="mt-3 text-base leading-7 text-ink" data-editor-text={`home.sports.item.${index}.audience`}>
                    {sport.audience}
                  </p>
                </div>

                <div className="mt-6">
                  <ButtonLink data-editor-text={`home.sports.item.${index}.cta`} href="#kapcsolat" variant="secondary">
                    Érdekel ez a sportág
                  </ButtonLink>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
