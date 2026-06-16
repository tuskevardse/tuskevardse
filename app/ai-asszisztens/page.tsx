import type { Metadata } from "next";

import { ChatAssistant } from "@/components/chat/chat-assistant";
import { PageHero } from "@/components/layout/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "AI asszisztens – Tüskevár DSE",
  description:
    "A Tüskevár DSE beépített AI asszisztense segít a sportágválasztásban, az első kérdések összerendezésében és a támogatói lehetőségek feltérképezésében a teljes sportkínálat mentén.",
};

const useCases = [
  {
    title: "Sportágválasztás támogatása",
    description: "Segíthet összevetni a labdarúgás, a kosárlabda, az úszás, a kenu, a falmászás és a túra fő karakterét a gyermek érdeklődése és indulási helyzete alapján.",
  },
  {
    title: "Első alkalom előkészítése",
    description: "Összeszedi, milyen kérdéseket érdemes feltenni, mire jó gondolni indulás előtt és hogyan lehet csökkenteni az első alkalom bizonytalanságát.",
  },
  {
    title: "Szülői GYIK gyorsítása",
    description: "Segít eligazodni a kapcsolati pontok, jelentkezési lépések és alapinformációk között anélkül, hogy a szülőnek mindent külön ki kellene keresnie.",
  },
  {
    title: "Támogatói ötletadás",
    description: "Ötleteket adhat arra, hogy egy szülő, cég vagy közösségi partner milyen formában tudna hasznosan kapcsolódni a DSE-hez.",
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
        description="Az AI asszisztens itt nem öncélú funkció: arra készült, hogy a szülők, érdeklődők és támogatók gyorsabban jussanak el a releváns kérdésektől a következő lépésig."
        eyebrow="AI asszisztens"
        title="Itt már nem csak olvasni lehet, hanem célzottan kérdezni is."
      />

      <section className="py-18 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)]">
          <ChatAssistant />

          <div className="grid gap-6">
            <Card tone="sky">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Miért hasznos ez egy ilyen oldalon?</p>
              <div className="mt-4 space-y-4 text-base leading-7 text-ink">
                <p>
                  Sok szülő nem kész válaszokkal érkezik, hanem bizonytalansággal. Az AI első körben segíthet összerendezni a kérdéseket,
                  hogy a kapcsolatfelvétel már tisztább helyzetből induljon.
                </p>
                <p>
                  Ugyanez igaz a támogatókra is: a chat gyorsan meg tudja mutatni, milyen típusú kapcsolódási lehetőségek jöhetnek szóba.
                </p>
              </div>
            </Card>

            <Card>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Konkrét use case-ek</p>
              <ul className="mt-5 space-y-4 text-base leading-7 text-ink">
                {useCases.map((item) => (
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
