import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { trainingGroups } from "@/content/resources";

export const metadata: Metadata = {
  title: "Edzésrend - Tüskevár DSE",
  description: "Sportáganként és csoportonként rendezett edzésrend a Tüskevár Diák Sportegyesülethez kapcsolódó alkalmakhoz.",
};

export default function TrainingSchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="Edzésrend"
        title="Az edzésrend segít elképzelni, hogyan indulhat a rendszeres sport."
        description="Itt sportág, csoport és helyszín szerint nézhetitek át a fő alkalmakat. A konkrét belépési pontról mindig érdemes röviden egyeztetni."
      />

      <section className="py-18 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Heti ritmus"
            title="Sportáganként és csoportonként rendezett alkalmak."
            description="Az első érdeklődés után segítünk megtalálni, melyik csoport és időpont lehet reális első lépés."
          />

          <div className="mt-12 grid gap-6">
            {trainingGroups.map((group) => (
              <Card key={`${group.sport}-${group.group}`} className="overflow-hidden p-0">
                <div className="border-b border-brand-navy/10 bg-white/92 px-6 py-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">{group.sport}</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-ink">{group.group}</h2>
                  <p className="mt-3 text-base leading-7 text-muted">
                    Fókusz: {group.focus}. {group.note}
                  </p>
                </div>

                <div className="grid gap-4 px-6 py-6 md:grid-cols-2">
                  {group.slots.map((slot) => (
                    <div key={`${slot.day}-${slot.time}`} className="rounded-[1.4rem] bg-brand-sky/60 px-5 py-5">
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-lg font-semibold text-brand-navy">{slot.day}</p>
                        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-blue">{slot.time}</p>
                      </div>
                      <p className="mt-4 text-base leading-7 text-ink">{slot.location}</p>
                      <p className="mt-3 text-sm leading-6 text-muted">{slot.note}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card tone="sky" className="mt-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Szülői megjegyzés</p>
                <p className="mt-4 text-base leading-7 text-ink">
                  A konkrét csoportba lépés előtt érdemes rövid egyeztetést kérni, hogy az első alkalom valóban jó ritmusban induljon.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <ButtonLink href="/tudasbazis" size="lg" variant="secondary">
                  Tudásbázis
                </ButtonLink>
                <ButtonLink href="/kapcsolat" size="lg" variant="primary">
                  Egyeztetést kérek
                </ButtonLink>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
