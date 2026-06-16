import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { knowledgeBaseCategories } from "@/content/resources";

export const metadata: Metadata = {
  title: "Tudásbázis – Tüskevár DSE",
  description: "Gyakorlati tudásbázis a csatlakozásról, az első alkalomról, a szülői tájékozódásról és a támogatói kérdésekről.",
};

const decisionFriction = [
  "Melyik sportág lehetne jó első irány?",
  "Mit kell tudnunk még az első alkalom előtt?",
  "Mikor érdemes inkább már írni vagy kérdezni?",
];

export default function KnowledgeBasePage() {
  return (
    <>
      <PageHero
        eyebrow="Tudásbázis"
        title="A jó tájékoztatás nem hosszabb szöveg, hanem jobban rendezett válasz."
        description="A tudásbázis azért fontos, mert a szülői és támogatói kérdések egy része ismétlődő, és jobb, ha ezek célzott, gyorsan átlátható formában érhetők el."
      />

      <section className="py-18 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="GYIK és eligazítás"
            title="Szülői, indulási és támogatói kérdések külön kezelve."
            description="A mostani struktúra már alkalmas rá, hogy később részletesebb cikkek, kereshető témák és AI-ra támaszkodó ajánlások épüljenek rá."
          />

          <Card tone="sky" className="mt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">A legtöbb döntés itt szokott megakadni</p>
            <div className="mt-5 grid gap-3 lg:grid-cols-3">
              {decisionFriction.map((item, index) => (
                <div key={item} className="rounded-[1.4rem] bg-white/80 px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue">0{index + 1}</p>
                  <p className="mt-3 text-base leading-7 text-ink">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-brand-navy/72">
              Nem az a cél, hogy itt mindent lezárjatok, hanem hogy a következő jó kérdés már világos legyen.
            </p>
          </Card>

          <div className="mt-12 grid gap-6">
            {knowledgeBaseCategories.map((category) => (
              <Card key={category.title}>
                <div className="grid gap-6 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">{category.audience}</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ink">{category.title}</h2>
                    <p className="mt-4 text-base leading-7 text-muted">{category.description}</p>
                  </div>
                  <div className="grid gap-4">
                    {category.questions.map((item, index) => {
                      const nextQuestion = category.questions[index + 1]?.question;

                      return (
                      <div key={item.question} className="rounded-[1.4rem] bg-white/75 px-5 py-5 ring-1 ring-brand-navy/10">
                        <h3 className="text-lg font-semibold text-ink">{item.question}</h3>
                        <p className="mt-3 text-base leading-7 text-muted">{item.answer}</p>
                        <div className="mt-4 rounded-[1.1rem] bg-brand-sky/55 px-4 py-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue">
                            {nextQuestion ? "A következő kérdés gyakran ez" : "A következő lépés már személyesebb"}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-ink">
                            {nextQuestion
                              ? nextQuestion
                              : "Ha ez a pont már tiszta, az AI asszisztens vagy a kapcsolat oldal segít a maradék bizonytalanságot lezárni."}
                          </p>
                        </div>
                      </div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card tone="navy" className="mt-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-sky">AI + tudásbázis</p>
                <p className="mt-4 text-base leading-7 text-white/82">
                  Ez az egyik legerősebb későbbi irány: a tudásbázis tartalma összehangolható az AI asszisztenssel, így a kérdésekre nem csak chatválasz, hanem strukturált háttéranyag is adható.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <ButtonLink href="/ai-asszisztens" size="lg" variant="secondary">
                  AI asszisztens
                </ButtonLink>
                <ButtonLink href="/kapcsolat" size="lg" variant="ghost">
                  További kérdésem van
                </ButtonLink>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
