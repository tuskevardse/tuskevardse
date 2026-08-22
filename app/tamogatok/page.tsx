import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Támogatók - Tüskevár DSE",
  description:
    "Támogatói és partneri információk: anyagi, tárgyi, szakmai és önkéntes segítség a Tüskevár DSE közösségének.",
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
      "Sporteszköz, ruházat, technikai háttér vagy rendezvényhez szükséges eszköz felajánlása, ha ezek illeszkednek a DSE mindennapi működéséhez.",
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
  "milyen célt támogatnátok szívesen",
  "egyszeri vagy hosszabb távú együttműködésben gondolkodtok",
  "anyagi, tárgyi, szakmai vagy önkéntes segítség áll közel hozzátok",
];

export default function SupportersPage() {
  return (
    <>
      <PageHero
        description="Ha szülőként, cégként vagy közösségi partnerként segítenétek, itt láthatjátok, milyen formában érdemes elindítani a beszélgetést."
        editorId="supporters"
        eyebrow="Támogatók"
        title="A támogatás akkor ér sokat, ha konkrét segítséggé válik a gyerekeknek."
      />

      <section className="py-18 sm:py-24" data-editor-block="supporters.types">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Kapcsolódási formák"
            editorId="supporters.types"
            title="Többféleképpen is lehet segíteni a DSE működését."
            description="A támogatás lehet pénzügyi, tárgyi, szakmai vagy közösségi jellegű is. A legjobb forma mindig attól függ, miben tudtok valódi segítséget adni."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {supportTypes.map((item, index) => (
              <Card key={item.title} className="h-full" data-editor-block={`supporters.type.${index}`}>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink" data-editor-text={`supporters.type.${index}.title`}>
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-muted" data-editor-text={`supporters.type.${index}.description`}>
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/70 py-18 sm:py-24" data-editor-block="supporters.why">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Miért lehet értelmes támogatás?"
              editorId="supporters.why"
              title="A támogatás akkor jó, ha látható segítséggé válik."
              description="A cél, hogy a felajánlás a gyerekek mozgását, a közösségi alkalmakat vagy a DSE működését erősítse."
            />
            <ul className="mt-8 space-y-4">
              {whySupport.map((item, index) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-ink" data-editor-block={`supporters.why.point.${index}`}>
                  <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                  <span data-editor-text={`supporters.why.point.${index}.text`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card data-editor-block="supporters.questions">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="supporters.questions.title">
              Mit érdemes átgondolni?
            </p>
            <ul className="mt-5 space-y-4 text-base leading-7 text-ink">
              {sponsorQuestions.map((item, index) => (
                <li key={item} className="flex gap-3" data-editor-block={`supporters.questions.item.${index}`}>
                  <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                  <span data-editor-text={`supporters.questions.item.${index}.text`}>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink data-editor-text="supporters.questions.action.0" href="/kapcsolat" size="lg" variant="secondary">
                Támogatói kapcsolatfelvétel
              </ButtonLink>
              <ButtonLink data-editor-text="supporters.questions.action.1" href="/ai-asszisztens" size="lg" variant="ghost">
                Kérdezek előbb
              </ButtonLink>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
