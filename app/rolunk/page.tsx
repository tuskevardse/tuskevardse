import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Rólunk – Tüskevár DSE",
  description:
    "A Tüskevár DSE küldetése, működési elvei, szülőknek szóló szemlélete és az a közeg, amelyre a sportegyesületi oldal épül.",
};

const principles = [
  {
    title: "Emberközpontú sportközeg",
    description:
      "A sport nálunk nem válik el a személyes figyelemtől. Fontos, hogy a gyerek ne csak résztvevő legyen, hanem észrevett résztvevő.",
  },
  {
    title: "Fokozatos belépés",
    description:
      "Nem mindenki ugyanonnan indul. Ezért az első kapcsolatfelvételtől kezdve arra törekszünk, hogy a szülő és a gyermek is értse a következő lépést.",
  },
  {
    title: "Bizalom és átláthatóság",
    description:
      "A bizalom ott kezdődik, ahol minden világos. A Tüskevár DSE-ben fontosnak tartjuk, hogy a szülők és az érdeklődők könnyen eligazodjanak: egyértelmű információkat, jól követhető tudnivalókat és elérhető kapcsolati pontokat biztosítunk. Hiszünk abban, hogy a rendezett, nyílt kommunikáció nemcsak tájékoztat, hanem biztonságot is ad, és ez egy erős sportközösség egyik alapja.",
  },
];

const associationFocus = [
  "szülői tájékoztatás és könnyen követhető kapcsolatfelvétel",
  "sportágválasztási eligazítás bizonytalan indulás esetén is",
  "közösségi és támogatói kapcsolódási pontok megmutatása",
  "AI asszisztens integráció a gyakori kérdések gyors megválaszolásához",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        description="A Tüskevár DSE nem csak sportprogramként, hanem közösségi térként épül: olyan felületként, ahol a mozgás, az emberi figyelem és az átlátható kommunikáció együtt tud működni."
        eyebrow="Rólunk"
        title="A Tüskevár DSE célja nem csak az, hogy legyen edzés. Hanem az is, hogy legyen jó közeg hozzá."
      />

      <section className="py-18 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Kiindulópont"
              title="A Tüskevár iskolai karaktere jó alap egy sportegyesületi márkához is."
            />
            <div className="mt-8 space-y-5 text-lg leading-8 text-muted">
              <p>
                A Tüskevár Diák Sportegyesület azért fontos, mert nem egy plusz programot akar a gyerekek mellé tenni, hanem valódi
                sportközeget épít köréjük. Olyan helyet, ahol a mozgás nem elszigetelt teljesítmény, hanem közösségi élmény, ritmus és
                fokozatos fejlődés is egyszerre.
              </p>
              <p>
                A sport itt nem külön világ az iskola mellett, hanem annak természetes folytatása: ugyanarra a figyelemre, ugyanarra a
                személyesebb közegre és ugyanarra a bizalomra épül. Ez ad értelmet annak is, hogy a szülő ne csak sportágat lásson,
                hanem azt is, milyen környezetbe érkezik a gyermeke.
              </p>
              <p>
                A DSE célja ezért nem pusztán az, hogy legyenek edzések, hanem hogy legyen egy biztonságos, támogató és lelkesítő közeg
                azoknak a diákoknak, akik szeretnének rendszeresen mozogni, csapatban jelen lenni, kitartást tanulni és közben jól
                érezni magukat.
              </p>
            </div>
          </div>

          <Card tone="sky">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Kulcsmondat</p>
            <p className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-brand-navy">
              Mozgásban a test, közösségben a lélek, fejlődésben a gyermek.
            </p>
          </Card>
        </Container>
      </section>

      <section className="bg-white/70 py-18 sm:py-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Alapelvek"
            title="Három dologban nem érdemes kompromisszumot kötni."
            description="A Tüskevár DSE tartalmi és közösségi működésének alapjai."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {principles.map((item) => (
              <Card key={item.title} className="h-full">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">{item.title}</h2>
                <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-18 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Mire kell figyelni egy sportegyesületi oldalon?"
              title="A jó honlap nem csak szép, hanem bizonytalanságot csökkent."
              description="A DSE weboldalának egyszerre kell megszólítania a szülőket, a gyerekeket, a leendő tagokat és a támogatókat."
            />
            <ul className="mt-8 space-y-4">
              {associationFocus.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-ink">
                  <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Miért fontos ez?</p>
            <div className="mt-5 space-y-4 text-base leading-7 text-muted">
              <p>
                Sok szülő nem rögtön választ sportágat, hanem először azt próbálja megérteni, hogy jó kezekben lesz-e a gyermeke.
                Ezért az oldal feladata nem csak az informálás, hanem a bizalomépítés is.
              </p>
              <p>
                Ugyanez igaz a támogató oldalra is: a lehetséges partnereknek azt kell látniuk, hogy van világos küldetés,
                van kapcsolódási lehetőség és van emberi arca a kezdeményezésnek.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/tamogatok" size="lg" variant="secondary">
                Támogatói oldal
              </ButtonLink>
              <ButtonLink href="/ai-asszisztens" size="lg" variant="ghost">
                AI asszisztens
              </ButtonLink>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
