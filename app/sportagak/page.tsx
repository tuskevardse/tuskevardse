import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Sportágak - Tüskevár DSE",
  description:
    "Labdarúgás, kosárlabda, úszás, kenu, falmászás és túra a Tüskevár DSE-ben, szülői szempontokkal és első lépésekkel.",
};

const sports = [
  {
    name: "Labdarúgás",
    badge: "Lendület és csapatjáték",
    summary:
      "A labdarúgás sok gyerek számára természetes első sport: sok futás, gyors döntések, közös játék és azonnal érthető helyzetek.",
    forWho:
      "Azoknak lehet jó választás, akik szeretnek futni, reagálni, helyzeteket megoldani és motiválja őket a csapat közös energiája.",
    helps: ["mozgásigény levezetése", "csapatban való játék", "gyors helyzetfelismerés", "állóképesség"],
    questions: [
      "Szereti-e a gyermek a sok mozgást és a folyamatos játékhelyzeteket?",
      "Fontos-e számára, hogy a csapat lendülete húzza előre?",
      "Jól érzi-e magát olyan játékban, ahol gyorsan változnak a helyzetek?",
    ],
  },
  {
    name: "Kosárlabda",
    badge: "Tempó és koncentráció",
    summary:
      "A kosárlabda egyszerre fejleszti a koordinációt, a figyelmet és a gyors döntéshozást. Sok gyerek azért szereti, mert hamar látszik, ha ügyesebben bánik a labdával.",
    forWho:
      "Azoknak lehet jó választás, akik szeretik a pörgést, örülnek a technikai fejlődésnek és motiválja őket, amikor a mozgás és a gondolkodás egyszerre áll össze.",
    helps: ["koordináció és koncentráció", "tempóérzék", "labdabiztonság apró lépésekben", "egyéni és csapatszerepek váltása"],
    questions: [
      "Szereti-e a gyermek a változatos, gyorsan váltakozó helyzeteket?",
      "Örül-e annak, amikor a technikai fejlődés gyorsan érezhető?",
      "Jól tud-e figyelni egyszerre a labdára, a társakra és a térre?",
    ],
  },
  {
    name: "Úszás",
    badge: "Vízbiztonság és állóképesség",
    summary:
      "Az úszás sok gyereknek stabil, jól követhető sport: egyszerre épít állóképességet, testtudatot és magabiztosságot a vízben.",
    forWho:
      "Azoknak lehet jó választás, akik jól reagálnak a fokozatos fejlődésre, fontos nekik a vízbiztonság, és szívesen mozognak egyéni fókuszú, mégis jól követhető rendszerben.",
    helps: ["vízbiztonság", "állóképesség", "egyenletes terhelhetőség", "testtudat és koordináció"],
    questions: [
      "Jót tesz-e a gyermeknek a kiszámítható, ismételhető fejlődési környezet?",
      "Motiválja-e, amikor a teljesítmény apró lépésekben is jól mérhető?",
      "Fontos-e számotokra, hogy a vízbiztonság is tudatosan fejlődjön?",
    ],
  },
  {
    name: "Kenu",
    badge: "Természet és kitartás",
    summary:
      "A kenu vízen végzett, szabadtéri sport, ahol az egyensúly, a figyelem és a kitartás egyszerre számít. Más hangulatú, mint a tornatermi vagy pályás sportok.",
    forWho:
      "Azoknak lehet jó választás, akik szeretnek szabadtéren mozogni, nyitottak a vízi sportokra, és jól bírják a hosszabb figyelmet igénylő helyzeteket.",
    helps: ["egyensúlyérzék", "állóképesség", "szabadtéri mozgás", "kitartó figyelem"],
    questions: [
      "Motiválja-e a gyermeket a természetes környezetben végzett mozgás?",
      "Jól tud-e hosszabb ideig figyelni és kitartani?",
      "Fontos-e, hogy a sport ne csak teremhez vagy pályához kötődjön?",
    ],
  },
  {
    name: "Falmászás",
    badge: "Fókusz és bátorság",
    summary:
      "A falmászás egyéni kihívás: koncentrációt, testtudatot és bátorságot kér, közben pedig nagyon konkrétan látszik, ha a gyerek egyre feljebb jut.",
    forWho:
      "Azoknak lehet jó választás, akik szeretik a koncentrált, egyéni feladatokat, és örülnek annak, ha a saját tempójukban tudnak egy-egy kihívást legyőzni.",
    helps: ["koncentráció", "problémamegoldás", "bátorság", "finom koordináció"],
    questions: [
      "Szereti-e a gyermek a fókuszált, önálló kihívásokat?",
      "Jót tesz-e neki, ha a fejlődés egy-egy konkrét akadály leküzdésében látható?",
      "Motiválja-e az a helyzet, ahol a testi és mentális jelenlét egyszerre fontos?",
    ],
  },
  {
    name: "Túra",
    badge: "Közös út és természet",
    summary:
      "A túra nem a versenyről szól, hanem a közös útról, a kitartásról és a felfedezésről. Sok gyereknek ezért lehet jó belépő a rendszeres mozgáshoz.",
    forWho:
      "Azoknak lehet jó választás, akiknek fontos a szabadtér, a természet közelsége és a közösségi, mégis nyugodtabb mozgásforma.",
    helps: ["terhelhetőség", "szabadtéri mozgás", "közös program", "hosszabb távú kitartás"],
    questions: [
      "Szívesebben mozog-e a gyermek nyílt térben, mint teremben?",
      "Jól érzi-e magát olyan programon, ahol nem a gyorsaság az egyetlen mérce?",
      "Segítene-e neki, ha a mozgás mellett felfedezés is lenne a programban?",
    ],
  },
];

const commonPoints = [
  "a különböző sportágak közös célja, hogy a gyerek szívesen mozogjon rendszeresen",
  "a választásnál nem csak a sportág, hanem a gyermek indulási helyzete és komfortja is fontos",
  "szülőként nem kell elsőre mindent tudni: elég, ha megfogalmazzátok az első kérdéseiteket",
];

const selectionPath = [
  {
    step: "01",
    title: "Szűkítsetek két irányra",
    description: "Nem végleges döntést kell hozni, csak annyit látni, hogy melyik két sportág tűnik most a leginkább élhető első lépésnek.",
  },
  {
    step: "02",
    title: "Nézzétek meg, hol kezdene szívesen",
    description: "A kérdés nem az, melyik sport a legerősebb, hanem az, melyik helyzetben menne be könnyebben az első alkalomra.",
  },
  {
    step: "03",
    title: "Maradjon egy nyitott kérdés",
    description: "Ha egy bizonytalanság még megmarad, az teljesen rendben van. Ilyenkor érdemes kérdezni, nem tovább halogatni.",
  },
];

export default function SportsPage() {
  return (
    <>
      <PageHero
        description="A Tüskevár DSE sportkínálatában a csapatsportok, a vízi sportok, a mászás és a természetközeli mozgás is helyet kap. A cél, hogy szülőként gyorsan átlássátok, melyik irány miért lehet jó első lépés."
        editorId="sports"
        eyebrow="Sportágak"
        title="Több sportág, többféle indulás, közös figyelemmel a gyerekre."
      />

      <section id="valasztas" className="py-18 sm:py-24" data-editor-block="sports.selection">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Választás"
            editorId="sports.selection"
            title="Nem csak az számít, mit szeret a gyerek. Az is, hogyan szeret benne jelen lenni."
            description="Az alábbi szempontok segítenek szűkíteni a sportágválasztást."
          />

          <Card tone="sky" className="mx-auto mt-10 max-w-5xl" data-editor-block="sports.selection.path">
            <div className="grid gap-4 lg:grid-cols-3">
              {selectionPath.map((item, index) => (
                <div key={item.step} className="rounded-[1.4rem] bg-white/80 px-5 py-5" data-editor-block={`sports.selection.path.step.${index}`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text={`sports.selection.path.step.${index}.step`}>
                    {item.step}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-ink" data-editor-text={`sports.selection.path.step.${index}.title`}>
                    {item.title}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-muted" data-editor-text={`sports.selection.path.step.${index}.description`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-brand-navy/72" data-editor-text="sports.selection.path.note">
              A legtöbb jó döntés itt nem lezárással kezdődik, hanem azzal, hogy egy sportág már közelebb kerül, egy másik pedig hátrébb.
            </p>
          </Card>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sports.map((sport, index) => (
              <Card key={sport.name} className="h-full border border-white/80 bg-white" data-editor-block={`sports.item.${index}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue" data-editor-text={`sports.item.${index}.badge`}>
                  {sport.badge}
                </p>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-ink" data-editor-text={`sports.item.${index}.name`}>
                  {sport.name}
                </h2>
                <p className="mt-4 text-base leading-7 text-muted" data-editor-text={`sports.item.${index}.summary`}>
                  {sport.summary}
                </p>

                <div className="mt-6 rounded-[1.4rem] bg-brand-sky/65 p-5" data-editor-block={`sports.item.${index}.forWho`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-navy/70" data-editor-text={`sports.item.${index}.forWho.label`}>
                    Kinek lehet jó?
                  </p>
                  <p className="mt-3 text-base leading-7 text-ink" data-editor-text={`sports.item.${index}.forWho.text`}>
                    {sport.forWho}
                  </p>
                </div>

                <div className="mt-6 grid gap-5 xl:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text={`sports.item.${index}.helps.label`}>Miben segíthet?</p>
                    <ul className="mt-4 space-y-3">
                      {sport.helps.map((item, helpIndex) => (
                        <li key={item} className="flex gap-3 text-base leading-7 text-ink" data-editor-block={`sports.item.${index}.helps.${helpIndex}`}>
                          <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                          <span data-editor-text={`sports.item.${index}.helps.${helpIndex}.text`}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text={`sports.item.${index}.questions.label`}>Érdemes végiggondolni</p>
                    <ul className="mt-4 space-y-3">
                      {sport.questions.map((item, questionIndex) => (
                        <li key={item} className="flex gap-3 text-base leading-7 text-ink" data-editor-block={`sports.item.${index}.questions.${questionIndex}`}>
                          <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                          <span data-editor-text={`sports.item.${index}.questions.${questionIndex}.text`}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink data-editor-text={`sports.item.${index}.action.0`} href="/kapcsolat" variant="primary">
                    Érdekel ez a sportág
                  </ButtonLink>
                  <ButtonLink data-editor-text={`sports.item.${index}.action.1`} href="/ai-asszisztens" variant="ghost">
                    Kérdeznék róla
                  </ButtonLink>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/70 py-18 sm:py-24" data-editor-block="sports.common">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Közös alap"
              editorId="sports.common"
              title="A sportágválasztásnál nem kell azonnal tökéletes döntést hozni."
              description="A legfontosabb, hogy a gyerek szívesen próbálja ki, a szülő pedig tudjon kérdezni, mielőtt dönt."
            />
            <ul className="mt-8 space-y-4">
              {commonPoints.map((item, index) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-ink" data-editor-block={`sports.common.point.${index}`}>
                  <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                  <span data-editor-text={`sports.common.point.${index}.text`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card data-editor-block="sports.common.helpCard">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="sports.common.helpCard.title">
              Miben segítünk kérdezés előtt?
            </p>
            <div className="mt-5 space-y-4 text-base leading-7 text-muted">
              <p data-editor-text="sports.common.helpCard.paragraph.0">összevetni a labdarúgás, kosárlabda, úszás, kenu, falmászás és túra fő karakterét szülői szempontból</p>
              <p data-editor-text="sports.common.helpCard.paragraph.1">ötletet adni, milyen kérdéseket tegyetek fel az első kapcsolatfelvételnél</p>
              <p data-editor-text="sports.common.helpCard.paragraph.2">segíteni abban, hogyan készítsétek fel a gyermeket az első alkalomra</p>
            </div>
            <p className="mt-5 text-sm leading-6 text-brand-navy/72" data-editor-text="sports.common.helpCard.note">
              Ha még két sportág között vacilláltok, az már elég jó állapot ahhoz, hogy érdemes legyen továbbkérdezni.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink data-editor-text="sports.common.helpCard.action.0" href="/ai-asszisztens" size="lg" variant="secondary">
                Felteszem a kérdésem
              </ButtonLink>
              <ButtonLink data-editor-text="sports.common.helpCard.action.1" href="/kapcsolat" size="lg" variant="ghost">
                Inkább írnék
              </ButtonLink>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
