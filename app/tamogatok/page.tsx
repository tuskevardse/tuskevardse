import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Támogatók - Tüskevár DSE",
  description:
    "Támogatói és partneri információk: anyagi, tárgyi, szakmai és önkéntes kapcsolódási lehetőségek a Tüskevár DSE közösségéhez.",
};

const supportTypes = [
  {
    title: "Anyagi támogatás",
    description:
      "Konkrét sportprogramok, közösségi alkalmak, felszerelések vagy működési elemek támogatása olyan módon, amely valódi segítséget jelent a gyerekeknek.",
  },
  {
    title: "Tárgyi felajánlás",
    description:
      "Sporteszköz, ruházat, technikai háttér vagy rendezvényhez kapcsolódó eszközök felajánlása, ha ezek illeszkednek a DSE mindennapi működéséhez.",
  },
  {
    title: "Szakmai partnerség",
    description:
      "Helyi cégek, szakemberek, közösségi szereplők vagy civil partnerek tudásukkal, kapcsolataikkal vagy programjaikkal is segíthetnek.",
  },
  {
    title: "Önkéntes jelenlét",
    description:
      "Egy-egy esemény, kommunikációs feladat vagy szervezési segítség is sokat érhet, ha a közösség működését teszi könnyebbé.",
  },
];

const whySupport = [
  "mert a sport közösségi megtartó erőt adhat a gyerekeknek",
  "mert a helyi támogatás látható, közvetlen segítséggé válhat",
  "mert egy iskolai kötődésű sportegyesület több generációt és több szereplőt tud összekapcsolni",
];

const sponsorQuestions = [
  "milyen célhoz kapcsolódnátok szívesen",
  "egyszeri vagy hosszabb távú együttműködésben gondolkodtok",
  "anyagi, tárgyi, szakmai vagy önkéntes segítség áll közel hozzátok",
];

export default function SupportersPage() {
  return (
    <>
      <PageHero
        description="Ha szülőként, cégként vagy közösségi partnerként segítenétek, itt láthatjátok a legfontosabb kapcsolódási lehetőségeket."
        eyebrow="Támogatók"
        title="Aki ehhez a közeghez kapcsolódik, nem csak programot támogat. Lehetőséget ad."
      />

      <section className="py-18 sm:py-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Kapcsolódási formák"
            title="Többféleképpen is lehet segíteni a DSE működését."
            description="A támogatás lehet pénzügyi, tárgyi, szakmai vagy közösségi jellegű is. A legjobb forma mindig attól függ, miben tudtok valódi segítséget adni."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {supportTypes.map((item) => (
              <Card key={item.title} className="h-full">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">{item.title}</h2>
                <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/70 py-18 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Miért lehet értelmes támogatás?"
              title="A támogatás akkor jó, ha látható segítséggé válik."
              description="A cél, hogy a felajánlás a gyerekek mozgását, a közösségi alkalmakat vagy a DSE működését erősítse."
            />
            <ul className="mt-8 space-y-4">
              {whySupport.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-ink">
                  <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Mit érdemes átgondolni?</p>
            <ul className="mt-5 space-y-4 text-base leading-7 text-ink">
              {sponsorQuestions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/kapcsolat" size="lg" variant="secondary">
                Támogatói kapcsolatfelvétel
              </ButtonLink>
              <ButtonLink href="/ai-asszisztens" size="lg" variant="ghost">
                Kérdezek előbb
              </ButtonLink>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
