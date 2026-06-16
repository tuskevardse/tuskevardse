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
      "A labdarúgás sok gyerek számára természetes belépő a sport világába: mozgalmas, játékos, közösségi és gyorsan átélhető benne az együttműködés öröme.",
    forWho:
      "Azoknak lehet jó választás, akik szeretnek futni, reagálni, helyzeteket megoldani és motiválja őket a csapat közös energiája.",
    helps: ["mozgásigény levezetése", "csapatban való jelenlét", "gyors helyzetfelismerés", "ritmus és állóképesség"],
    questions: [
      "Szereti-e a gyermek a sok mozgást és a folyamatos játékhelyzeteket?",
      "Fontos-e számára, hogy a csapat lendülete húzza előre?",
      "Jól kapcsolódik-e olyan közegben, ahol a játék gyorsan változik?",
    ],
  },
  {
    name: "Kosárlabda",
    badge: "Tempó és koncentráció",
    summary:
      "A kosárlabda egyszerre fejleszti a koordinációt, a figyelmet és a gyors döntéshozást. Sok gyerek azért szereti, mert hamar érezhető benne a fejlődés és a játék ritmusa.",
    forWho:
      "Azoknak lehet jó választás, akik szeretik a pörgést, örülnek a technikai fejlődésnek és motiválja őket, amikor a mozgás és a gondolkodás egyszerre áll össze.",
    helps: ["koordináció és koncentráció", "tempóérzék", "sikerélmény apró lépésekből", "egyéni és csapatszerepek váltása"],
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
      "Az úszás sok gyereknek stabil, kiszámítható fejlődési utat ad: egyszerre épít állóképességet, testtudatot és magabiztosságot a vízben.",
    forWho:
      "Azoknak lehet jó választás, akik jól reagálnak a fokozatos fejlődésre, fontos nekik a vízbiztonság, és szívesen mozognak egyéni fókuszú, mégis jól követhető rendszerben.",
    helps: ["vízbiztonság", "állóképesség", "ritmusos terhelhetőség", "testtudat és koordináció"],
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
      "A kenu olyan sportélményt adhat, ahol a természet, az egyensúly és a kitartás egyszerre jelenik meg. Más ritmus, mint a tornatermi vagy pályás sportok, ezért sok gyereknek friss belépő lehet.",
    forWho:
      "Azoknak lehet jó választás, akik szeretnek szabadtéren mozogni, nyitottak a vízi közegre, és jól kapcsolódnak hosszabb fókuszt igénylő helyzetekhez.",
    helps: ["egyensúlyérzék", "állóképesség", "természetkapcsolat", "kitartó figyelem"],
    questions: [
      "Motiválja-e a gyermeket a természetes környezetben végzett mozgás?",
      "Jól tud-e hosszabb ritmusban figyelni és kitartani?",
      "Fontos-e, hogy a sport ne csak teremhez vagy pályához kötődjön?",
    ],
  },
  {
    name: "Falmászás",
    badge: "Fókusz és bátorság",
    summary:
      "A falmászás egyszerre egyéni kihívás és mentális fejlődési tér: koncentrációt, testtudatot és bátorságot kér, de gyorsan vissza is adja a sikerélményt.",
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
      "A túra más típusú sportkapcsolatot ad: nem annyira versenyből, inkább közös ritmusból, kitartásból és felfedezésből épül. Sok gyereknek éppen ezért lehet jó belépő a rendszeres mozgáshoz.",
    forWho:
      "Azoknak lehet jó választás, akiknek fontos a szabadtér, a természet közelsége és a közösségi, mégis nyugodtabb mozgásforma.",
    helps: ["terhelhetőség", "természetkapcsolat", "közös élmény", "hosszabb távú kitartás"],
    questions: [
      "Szívesebben mozog-e a gyermek nyílt térben, mint zárt sportközegben?",
      "Jól kapcsolódik-e olyan ritmushoz, ahol a közös út legalább annyira fontos, mint a teljesítmény?",
      "Segítene-e neki, ha a mozgás mellett a felfedezés élménye is jelen lenne?",
    ],
  },
];

const commonPoints = [
  "a különböző sportágak közös célja a mozgás megszerettetése és a hosszabb távú sportkapcsolat építése",
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
    title: "Keressetek egy jó első élményt",
    description: "A kérdés nem az, melyik sport a legerősebb, hanem az, melyik közegbe lenne könnyebb jó érzéssel megérkezni.",
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
        eyebrow="Sportágak"
        title="Több sportág, többféle belépési élmény, közös emberközpontú szemlélettel."
      />

      <section id="valasztas" className="py-18 sm:py-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Választás"
            title="Nem csak az számít, mit szeret a gyerek. Az is, hogyan szeret benne jelen lenni."
            description="Az alábbi szempontok első kapaszkodót adnak a sportágválasztáshoz."
          />

          <Card tone="sky" className="mx-auto mt-10 max-w-5xl">
            <div className="grid gap-4 lg:grid-cols-3">
              {selectionPath.map((item) => (
                <div key={item.step} className="rounded-[1.4rem] bg-white/80 px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue">{item.step}</p>
                  <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-ink">{item.title}</h2>
                  <p className="mt-3 text-base leading-7 text-muted">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-brand-navy/72">
              A legtöbb jó döntés itt nem lezárással kezdődik, hanem azzal, hogy egy sportág már közelebb kerül, egy másik pedig hátrébb.
            </p>
          </Card>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sports.map((sport) => (
              <Card key={sport.name} className="h-full border border-white/80 bg-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">{sport.badge}</p>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-ink">{sport.name}</h2>
                <p className="mt-4 text-base leading-7 text-muted">{sport.summary}</p>

                <div className="mt-6 rounded-[1.4rem] bg-brand-sky/65 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-navy/70">Kinek lehet jó?</p>
                  <p className="mt-3 text-base leading-7 text-ink">{sport.forWho}</p>
                </div>

                <div className="mt-6 grid gap-5 xl:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Miben segíthet?</p>
                    <ul className="mt-4 space-y-3">
                      {sport.helps.map((item) => (
                        <li key={item} className="flex gap-3 text-base leading-7 text-ink">
                          <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Érdemes végiggondolni</p>
                    <ul className="mt-4 space-y-3">
                      {sport.questions.map((item) => (
                        <li key={item} className="flex gap-3 text-base leading-7 text-ink">
                          <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/kapcsolat" variant="primary">
                    Érdekel ez a sportág
                  </ButtonLink>
                  <ButtonLink href="/ai-asszisztens" variant="ghost">
                    Kérdeznék róla
                  </ButtonLink>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/70 py-18 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Közös alap"
              title="A sportágválasztásnál nem kell azonnal tökéletes döntést hozni."
              description="A legfontosabb, hogy legyen jó első élmény, legyen következő lépés és legyen lehetőség kérdezni."
            />
            <ul className="mt-8 space-y-4">
              {commonPoints.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-ink">
                  <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Miben segítünk kérdezés előtt?</p>
            <div className="mt-5 space-y-4 text-base leading-7 text-muted">
              <p>összevetni a labdarúgás, kosárlabda, úszás, kenu, falmászás és túra fő karakterét szülői szempontból</p>
              <p>ötletet adni, milyen kérdéseket tegyetek fel az első kapcsolatfelvételnél</p>
              <p>segíteni abban, hogyan készítsétek fel a gyermeket az első alkalomra</p>
            </div>
            <p className="mt-5 text-sm leading-6 text-brand-navy/72">
              Ha még két sportág között vacilláltok, az már elég jó állapot ahhoz, hogy érdemes legyen továbbkérdezni.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/ai-asszisztens" size="lg" variant="secondary">
                Felteszem a kérdésem
              </ButtonLink>
              <ButtonLink href="/kapcsolat" size="lg" variant="ghost">
                Inkább írnék
              </ButtonLink>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
