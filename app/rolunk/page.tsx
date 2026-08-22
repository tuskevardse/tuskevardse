import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Rólunk - Tüskevár DSE",
  description:
    "A Tüskevár DSE küldetése, működési elvei és gyakorlati tájékoztatása gyerekeknek, szülőknek és támogatóknak.",
};

const principles = [
  {
    title: "Figyelem a gyerekre",
    description:
      "A sport nálunk nem válik el a személyes figyelemtől. Fontos, hogy a gyerek ne csak résztvevő legyen, hanem észrevett résztvevő.",
  },
  {
    title: "Fokozatos belépés",
    description:
      "Nem mindenki ugyanonnan indul. Ezért az első kapcsolatfelvételtől kezdve arra törekszünk, hogy a szülő és a gyermek is értse, mi történik ezután.",
  },
  {
    title: "Bizalom és átláthatóság",
    description:
      "A bizalom ott kezdődik, ahol minden világos. Fontos, hogy a szülők és az érdeklődők könnyen eligazodjanak: érthető információkat, követhető tudnivalókat és elérhető kapcsolati pontokat kapjanak.",
  },
];

const firstQuestions = [
  "milyen lesz az első alkalom a gyermeknek",
  "melyik sportág lehet jó első lépés",
  "hogyan lehet kérdezni vagy kapcsolatba lépni",
  "milyen módon lehet támogatni az egyesületet",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        description="A Tüskevár DSE olyan sportközösséget épít, ahol a gyerekek több sportágat is kipróbálhatnak, a szülők pedig érthető információt kapnak az induláshoz."
        editorId="about"
        eyebrow="Rólunk"
        title="A célunk, hogy a gyerek jó érzéssel kezdjen el sportolni."
      />

      <section className="py-18 sm:py-24" data-editor-block="about.intro">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Kiindulópont"
              editorId="about.intro"
              title="Az iskola természetes alapot ad a sportközösséghez."
            />
            <div className="mt-8 space-y-5 text-lg leading-8 text-muted">
              <p data-editor-text="about.intro.paragraph.0">
                A Tüskevár Diák Sportegyesület azért fontos, mert nem egyszerűen plusz délutáni programot kínál,
                hanem rendszeres mozgási lehetőséget ad azoknak is, akik még csak keresik a saját sportjukat.
              </p>
              <p data-editor-text="about.intro.paragraph.1">
                A sport itt nem külön világ az iskola mellett, hanem annak természetes folytatása: ismerős helyzetekre,
                figyelmes kommunikációra és szülőkkel egyeztetett indulásra épül. Ez segít abban, hogy a család ne csak
                sportágat válasszon, hanem az első alkalomra is fel tudjon készülni.
              </p>
              <p data-editor-text="about.intro.paragraph.2">
                A DSE célja, hogy a diákok rendszeresen mozogjanak, csapatban is tanuljanak jelen lenni, kitartást
                építsenek, és közben legyen kedvük visszamenni a következő alkalomra is.
              </p>
            </div>
          </div>

          <Card data-editor-block="about.intro.keySentence" tone="sky">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="about.intro.keySentence.label">
              Kulcsmondat
            </p>
            <p className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-brand-navy" data-editor-text="about.intro.keySentence.text">
              Mozgásban a test, közösségben a lélek, fejlődésben a gyermek.
            </p>
          </Card>
        </Container>
      </section>

      <section className="bg-white/70 py-18 sm:py-24" data-editor-block="about.principles">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Alapelvek"
            editorId="about.principles"
            title="Három dologban nem érdemes kompromisszumot kötni."
            description="Ezek adják azt a keretet, amelyben a gyerekek sportolni tudnak, a szülők pedig követhető információt kapnak."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {principles.map((item, index) => (
              <Card key={item.title} className="h-full" data-editor-block={`about.principles.item.${index}`}>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink" data-editor-text={`about.principles.item.${index}.title`}>
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-muted" data-editor-text={`about.principles.item.${index}.description`}>
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-18 sm:py-24" data-editor-block="about.help">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Miben segítünk?"
              editorId="about.help"
              title="Az első döntéshez nem kell mindent előre tudni."
              description="Sok család először csak tájékozódik. Mi abban szeretnénk segíteni, hogy az első kérdés és az első üzenet egyszerű legyen."
            />
            <ul className="mt-8 space-y-4">
              {firstQuestions.map((item, index) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-ink" data-editor-block={`about.help.question.${index}`}>
                  <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                  <span data-editor-text={`about.help.question.${index}.text`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card data-editor-block="about.help.importance">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="about.help.importance.title">
              Miért fontos ez?
            </p>
            <div className="mt-5 space-y-4 text-base leading-7 text-muted">
              <p data-editor-text="about.help.importance.paragraph.0">
                Sok szülő nem rögtön sportágat választ, hanem először azt próbálja megérteni, hogy jó kezekben lesz-e a
                gyermeke. Ezért a világos tájékoztatás és az egyszerű kapcsolatfelvétel a bizalom része.
              </p>
              <p data-editor-text="about.help.importance.paragraph.1">
                A támogatók számára is fontos, hogy lássák: van világos cél, van konkrét segítségkérési lehetőség, és
                érthető, mire fordítódhat a felajánlásuk.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink data-editor-text="about.help.importance.action.0" href="/tamogatok" size="lg" variant="secondary">
                Támogatási lehetőségek
              </ButtonLink>
              <ButtonLink data-editor-text="about.help.importance.action.1" href="/kapcsolat" size="lg" variant="ghost">
                Kapcsolatfelvétel
              </ButtonLink>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
