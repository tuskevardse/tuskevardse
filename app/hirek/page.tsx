import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { newsItems } from "@/content/resources";

export const metadata: Metadata = {
  title: "Hírek – Tüskevár DSE",
  description: "Friss hírek, fejlesztések és közösségi beszámolók a Tüskevár Diák Sportegyesület életéből.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Hírek"
        title="Frissülő hírek, hogy a közeg ne csak működjön, hanem látható is legyen."
        description="A híroldal segít abban, hogy a szülők és a támogatók ne csak információt kapjanak, hanem kontextust is: mi történik, mi épül, és merre halad a Tüskevár DSE."
      />

      <section className="py-18 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Aktuális tartalmak"
            title="A kommunikáció itt a bizalom része, nem utólagos kiegészítés."
            description="A hírekben nem csak eredmények, hanem fejlesztések, közösségi mozzanatok és fontos mérföldkövek is helyet kapnak."
          />

          <div className="mt-12 grid gap-6">
            {newsItems.map((item) => (
              <Card key={`${item.date}-${item.title}`} className="grid gap-5 lg:grid-cols-[180px_minmax(0,1fr)_220px] lg:items-start">
                <div className="rounded-[1.4rem] bg-brand-sky/75 px-4 py-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">{item.category}</p>
                  <p className="mt-3 text-base font-medium text-brand-navy">{item.date}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">{item.title}</h2>
                  <p className="mt-4 text-base leading-7 text-muted">{item.summary}</p>
                </div>
                <div className="rounded-[1.4rem] bg-white/70 px-4 py-4 ring-1 ring-brand-navy/10">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Kinek szól?</p>
                  <p className="mt-3 text-base leading-7 text-ink">{item.audience}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-10 bg-[linear-gradient(135deg,rgba(19,34,56,0.96),rgba(18,60,115,0.95))] text-white ring-0">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-sky">Következő bővítés</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">A híroldal később egyedi hírbejegyzésekkel és archiválással is továbbvihető.</h2>
                <p className="mt-4 text-base leading-7 text-white/78">
                  A mostani struktúra már alkalmas arra, hogy kategóriák, dátumok és rövid összefoglalók mentén később részletesebb tartalommodulok épüljenek rá.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <ButtonLink href="/esemenyek" size="lg" variant="secondary">
                  Események megnyitása
                </ButtonLink>
                <ButtonLink href="/kapcsolat" size="lg" variant="ghost">
                  Kapcsolatfelvétel
                </ButtonLink>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
