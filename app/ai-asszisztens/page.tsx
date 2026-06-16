import type { Metadata } from "next";

import { ChatAssistant } from "@/components/chat/chat-assistant";
import { PageHero } from "@/components/layout/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Kérdezz tőlünk - Tüskevár DSE",
  description:
    "Gyors segítség sportágválasztáshoz, első alkalomhoz, jelentkezési kérdésekhez és támogatói kapcsolódáshoz.",
};

const helpTopics = [
  {
    title: "Sportágválasztás",
    description:
      "Segít átgondolni, hogy a labdarúgás, kosárlabda, úszás, kenu, falmászás vagy túra közül melyik lehet jó első irány.",
  },
  {
    title: "Első alkalom",
    description:
      "Összeszedi, mire érdemes figyelni indulás előtt, mit vigyetek magatokkal, és milyen kérdéseket jó előre tisztázni.",
  },
  {
    title: "Jelentkezés és kapcsolat",
    description:
      "Segít megfogalmazni az első érdeklődő üzenetet, ha még nem biztos, pontosan melyik csoport vagy sportág lenne megfelelő.",
  },
  {
    title: "Támogatói lehetőségek",
    description:
      "Megmutatja, milyen formában kapcsolódhat egy szülő, cég vagy közösségi partner a DSE munkájához.",
  },
];

const prompts = [
  "Melyik sportág lehet jó első lépés egy bizonytalanabb indulásnál?",
  "Az úszás, a kenu, a falmászás vagy a túra közül melyik illene jobban?",
  "Mit érdemes megkérdezni első kapcsolatfelvételkor?",
  "Mit vigyünk az első alkalomra?",
  "Hogyan tud egy cég vagy szülő támogatóként segíteni?",
];

export default function AssistantPage() {
  return (
    <>
      <PageHero
        description="Ha még nem tudjátok pontosan, merre induljatok, itt gyorsan végiggondolhatjátok a legfontosabb kérdéseket."
        eyebrow="Kérdezz tőlünk"
        title="Nem kell kész döntéssel érkezni. Elég egy jó első kérdés."
      />

      <section className="py-18 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)]">
          <ChatAssistant />

          <div className="grid gap-6">
            <Card tone="sky">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Miben segít?</p>
              <div className="mt-4 space-y-4 text-base leading-7 text-ink">
                <p>
                  Sok szülő nem kész válaszokkal érkezik, hanem bizonytalansággal. Az első kérdések átgondolása abban segít, hogy
                  az első érdeklődés már tisztább helyzetből induljon.
                </p>
                <p>
                  Ugyanez igaz a támogatókra is: néhány kérdés után könnyebb látni, milyen kapcsolódási forma lehet
                  hasznos és reális.
                </p>
              </div>
            </Card>

            <Card>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Gyakori témák</p>
              <ul className="mt-5 space-y-4 text-base leading-7 text-ink">
                {helpTopics.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                    <span>
                      <strong>{item.title}:</strong> {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Kipróbálható kérdések</p>
              <ul className="mt-5 space-y-4 text-base leading-7 text-ink">
                {prompts.map((item) => (
                  <li key={item} className="rounded-[1.2rem] bg-brand-sky/70 px-4 py-4">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
