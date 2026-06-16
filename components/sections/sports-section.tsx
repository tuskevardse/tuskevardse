import { homepageContent } from "@/content/homepage";

import { ButtonLink } from "../ui/button-link";
import { Card } from "../ui/card";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

export function SportsSection() {
  const { sports } = homepageContent;

  return (
    <section id="sportagak" className="bg-white/65 py-18 sm:py-24">
      <Container>
        <SectionHeading align="center" description={sports.description} eyebrow={sports.eyebrow} title={sports.title} />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sports.items.map((sport) => (
            <Card key={sport.name} className="relative overflow-hidden border border-white/80 p-0">
              <div className={`absolute inset-0 bg-gradient-to-br ${sport.accent}`} />
              <div className="relative flex h-full flex-col p-7 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">{sport.badge}</p>
                <h3 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-ink">{sport.name}</h3>
                <p className="mt-4 text-base leading-7 text-muted">{sport.summary}</p>

                <div className="mt-6 rounded-[1.4rem] bg-white/88 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-navy/70">Kinek ajánljuk?</p>
                  <p className="mt-3 text-base leading-7 text-ink">{sport.audience}</p>
                </div>

                <div className="mt-6">
                  <ButtonLink href="#kapcsolat" variant="secondary">
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
