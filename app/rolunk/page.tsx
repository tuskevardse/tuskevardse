import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Rólunk - Tüskevár DSE",
  description:
    "A Tüskevár DSE küldetése, működési elvei és az a figyelmes sportközeg, amelyhez a gyerekek, szülők és támogatók kapcsolódhatnak.",
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
      "A bizalom ott kezdődik, ahol minden világos. Fontos, hogy a szülők és az érdeklődők könnyen eligazodjanak: érthető információkat, követhető tudnivalókat és elérhető kapcsolati pontokat kapjanak.",
  },
];

const firstQuestions = [
  "milyen közegbe érkezik a gyermek",
  "melyik sportág lehet jó első lépés",
  "hogyan lehet kérdezni vagy kapcsolatba lépni",
  "milyen módon lehet támogatóként kapcsolódni",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        description="A Tüskevár DSE olyan sportközösséget épít, ahol a mozgás, az emberi figyelem és az átlátható kommunikáció együtt ad kapaszkodót a gyerekeknek és a családoknak."
        eyebrow="Rólunk"
        title="A célunk nem csak az, hogy legyen edzés. Hanem az is, hogy a gyerek jó közegbe érkezzen."
      />

      <section className="py-18 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Kiindulópont"
              title="Az iskolai közeg természetes alapot ad a sportközösséghez."
            />
            <div className="mt-8 space-y-5 text-lg leading-8 text-muted">
              <p>
                A Tüskevár Diák Sportegyesület azért fontos, mert nem egyszerűen plusz programot kínál a gyerekeknek,
                hanem olyan sportközeget, ahol a mozgás közösségi élmény, ritmus és fokozatos fejlődés is egyszerre.
              </p>
              <p>
                A sport itt nem külön világ az iskola mellett, hanem annak természetes folytatása: ugyanarra a
                figyelemre, személyesebb közegre és bizalomra épül. Ez segít abban, hogy a szülő ne csak sportágat
                lásson, hanem azt is, milyen környezetbe érkezik a gyermeke.
              </p>
              <p>
                A DSE célja, hogy biztonságos, támogató és lelkesítő közeg legyen azoknak a diákoknak, akik szeretnének
                rendszeresen mozogni, csapatban jelen lenni, kitartást tanulni és közben jól érezni magukat.
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
            description="Ezek adják azt a keretet, amelyben a gyerekek, a szülők és a támogatók is biztonságosan tudnak kapcsolódni."
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
              eyebrow="Miben segítünk?"
              title="Az első döntéshez nem kell mindent előre tudni."
              description="Sok család először csak tájékozódik. Mi abban szeretnénk segíteni, hogy a következő lépés érthető és vállalható legyen."
            />
            <ul className="mt-8 space-y-4">
              {firstQuestions.map((item) => (
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
                Sok szülő nem rögtön sportágat választ, hanem először azt próbálja megérteni, hogy jó kezekben lesz-e a
                gyermeke. Ezért a világos tájékoztatás és az egyszerű kapcsolatfelvétel a bizalom része.
              </p>
              <p>
                A támogatók számára is fontos, hogy lássák: van világos küldetés, van kapcsolódási lehetőség, és van
                emberi arca annak a közösségnek, amelyhez csatlakoznának.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/tamogatok" size="lg" variant="secondary">
                Támogatási lehetőségek
              </ButtonLink>
              <ButtonLink href="/kapcsolat" size="lg" variant="ghost">
                Kapcsolatfelvétel
              </ButtonLink>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
