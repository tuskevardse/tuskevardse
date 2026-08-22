import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { trainingGroups } from "@/content/resources";

export const metadata: Metadata = {
  title: "Edzésrend - Tüskevár DSE",
  description: "Sportáganként és csoportonként rendezett edzésrend a Tüskevár Diák Sportegyesület alkalmaihoz.",
};

export default function TrainingSchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="Edzésrend"
        editorId="training"
        title="Az edzésrend segít elképzelni, hogyan indulhat a rendszeres sport."
        description="Itt sportág, csoport és helyszín szerint nézhetitek át a fő alkalmakat. A konkrét belépési pontról mindig érdemes röviden egyeztetni."
      />

      <section className="py-18 sm:py-24" data-editor-block="training.schedule">
        <Container>
          <SectionHeading
            eyebrow="Heti alkalmak"
            editorId="training.schedule"
            title="Sportáganként és csoportonként rendezett alkalmak."
            description="Az első érdeklődés után segítünk megtalálni, melyik csoport és időpont lehet reális első lépés."
          />

          <div className="mt-12 grid gap-6">
            {trainingGroups.map((group, groupIndex) => (
              <Card key={`${group.sport}-${group.group}`} className="overflow-hidden p-0" data-editor-block={`training.group.${groupIndex}`}>
                <div className="border-b border-brand-navy/10 bg-white/92 px-6 py-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text={`training.group.${groupIndex}.sport`}>
                    {group.sport}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-ink" data-editor-text={`training.group.${groupIndex}.name`}>
                    {group.group}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-muted" data-editor-text={`training.group.${groupIndex}.summary`}>
                    Fókusz: {group.focus}. {group.note}
                  </p>
                </div>

                <div className="grid gap-4 px-6 py-6 md:grid-cols-2">
                  {group.slots.map((slot, slotIndex) => (
                    <div key={`${slot.day}-${slot.time}`} className="rounded-[1.4rem] bg-brand-sky/60 px-5 py-5" data-editor-block={`training.group.${groupIndex}.slot.${slotIndex}`}>
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-lg font-semibold text-brand-navy" data-editor-text={`training.group.${groupIndex}.slot.${slotIndex}.day`}>
                          {slot.day}
                        </p>
                        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-blue" data-editor-text={`training.group.${groupIndex}.slot.${slotIndex}.time`}>
                          {slot.time}
                        </p>
                      </div>
                      <p className="mt-4 text-base leading-7 text-ink" data-editor-text={`training.group.${groupIndex}.slot.${slotIndex}.location`}>
                        {slot.location}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-muted" data-editor-text={`training.group.${groupIndex}.slot.${slotIndex}.note`}>
                        {slot.note}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card tone="sky" className="mt-10" data-editor-block="training.parentNote">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="training.parentNote.title">Szülői megjegyzés</p>
                <p className="mt-4 text-base leading-7 text-ink" data-editor-text="training.parentNote.description">
                  A konkrét csoportba lépés előtt érdemes rövid egyeztetést kérni, hogy az első alkalom a megfelelő korosztályban és helyszínen induljon.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <ButtonLink data-editor-text="training.parentNote.action.0" href="/tudasbazis" size="lg" variant="secondary">
                  Tudásbázis
                </ButtonLink>
                <ButtonLink data-editor-text="training.parentNote.action.1" href="/kapcsolat" size="lg" variant="primary">
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
