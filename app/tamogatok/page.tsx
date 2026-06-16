import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Támogatók – Tüskevár DSE",
  description:
    "Támogatói és partneri információk a Tüskevár DSE számára: anyagi, tárgyi, szakmai és önkéntes kapcsolódási lehetőségek.",
};

const supportTypes = [
  {
    title: "Anyagi támogatás",
    description:
      "Konkrét sportprogramok, közösségi alkalmak, felszerelések vagy működési elemek támogatása olyan módon, amely illeszkedik a DSE küldetéséhez.",
  },
  {
    title: "Tárgyi felajánlás",
    description:
      "Sporteszköz, ruházat, technikai háttér vagy rendezvényhez kapcsolódó eszközök felajánlása, ha ezek valós segítséget jelentenek a gyerekeknek és a szervezésnek.",
  },
  {
    title: "Szakmai partnerség",
    description:
      "Helyi cégek, szakemberek, közösségi szereplők vagy civil partnerek tudásukkal, kapcsolataikkal vagy programjaikkal is kapcsolódhatnak.",
  },
  {
    title: "Önkéntes jelenlét",
    description:
      "Egy sportegyesület mögött sok láthatatlan szervezési munka van. Egy-egy esemény, kommunikációs feladat vagy koordinációs segítség is sokat érhet.",
  },
];

const whySupport = [
  "mert a sport nem csak teljesítményt, hanem közösségi megtartó erőt is adhat",
  "mert a szülői és helyi közösségi bizalom akkor erősödik, ha a támogatásnak is van látható helye",
  "mert egy iskolai kötődésű sportegyesület sokszor több generációt és több szereplőt tud összekapcsolni",
];

const sponsorQuestions = [
  "milyen típusú célhoz szeretnének kapcsolódni",
  "inkább egyszeri vagy hosszabb távú együttműködésben gondolkodnak",
  "inkább anyagi, tárgyi, szakmai vagy önkéntes hozzájárulás áll közel hozzájuk",
];

export default function SupportersPage() {
  return (
    <>
      <PageHero
        description="A Tüskevár DSE támogatói oldala azért fontos, mert egy sportegyesületet nem csak a pályán lehet építeni. A közösségi, szülői és partneri kapcsolódás is része a hosszabb távú stabilitásnak."
        eyebrow="Támogatók"
        title="Aki egy ilyen közeghez kapcsolódik, nem csak programot támogat. Hanem lehetőséget is."
      />

      <section className="py-18 sm:py-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Kapcsolódási formák"
            title="Többféleképpen is lehet segíteni a DSE működését."
            description="A támogatás lehet pénzügyi, tárgyi, szakmai vagy közösségi jellegű is."
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
              title="Mert a sportegyesület egyszerre hat a mozgásra, a közösségre és a bizalomra."
              description="A támogatás akkor működik jól, ha a támogató is érti, mihez kapcsolódik."
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
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Milyen kérdésekben segíthet az AI?</p>
            <ul className="mt-5 space-y-4 text-base leading-7 text-ink">
              {sponsorQuestions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/ai-asszisztens" size="lg" variant="secondary">
                AI asszisztens megnyitása
              </ButtonLink>
              <ButtonLink href="/kapcsolat" size="lg" variant="ghost">
                Támogatói kapcsolatfelvétel
              </ButtonLink>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
