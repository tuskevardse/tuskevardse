import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { documentGroups } from "@/content/resources";

export const metadata: Metadata = {
  title: "Dokumentumok – Tüskevár DSE",
  description: "Szülői, egyesületi és támogatói dokumentumok strukturált áttekintése a Tüskevár DSE oldalán.",
};

const statusTone: Record<string, string> = {
  hamarosan: "bg-brand-sky text-brand-navy",
  "előkészítés alatt": "bg-amber-100 text-amber-900",
  "frissítés alatt": "bg-amber-100 text-amber-900",
  "elérhető kérésre": "bg-brand-green/20 text-brand-navy",
};

export default function DocumentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Dokumentumok"
        title="A fontos anyagoknak külön, követhető hely kell."
        description="A dokumentumoldal azt szolgálja, hogy a szülőknek és partnereknek ne kelljen szétszórt üzenetekből összerakni az alapinformációkat."
      />

      <section className="py-18 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Dokumentumtár"
            title="Külön kezelve az induló, működési és partneri anyagok."
            description="A mostani lista vázként és tájékoztató felületként működik, de később konkrét letöltésekkel és verziózással is tovább bővíthető."
          />

          <div className="mt-12 grid gap-6">
            {documentGroups.map((group) => (
              <Card key={group.title}>
                <div className="grid gap-6 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">{group.audience}</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ink">{group.title}</h2>
                    <p className="mt-4 text-base leading-7 text-muted">{group.description}</p>
                  </div>
                  <div className="grid gap-4">
                    {group.items.map((item) => (
                      <div key={item.title} className="rounded-[1.4rem] bg-white/75 px-5 py-5 ring-1 ring-brand-navy/10">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                          <span className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-navy ring-1 ring-brand-navy/10">
                            {item.format}
                          </span>
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${
                              statusTone[item.status] ?? "bg-brand-sky text-brand-navy"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                        <p className="mt-3 text-base leading-7 text-muted">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Következő lépés</p>
                <p className="mt-4 text-base leading-7 text-ink">
                  Ha valamelyik anyag már most fontos lenne, a kapcsolatfelvételi oldalon jelezhető, hogy szülői vagy partneri dokumentumra van szükség. Így a dokumentumtár nem üres polc, hanem működő információs pont marad.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <ButtonLink href="/kapcsolat" size="lg" variant="primary">
                  Dokumentumot kérek
                </ButtonLink>
                <ButtonLink href="/tamogatok" size="lg" variant="ghost">
                  Támogatói oldal
                </ButtonLink>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
