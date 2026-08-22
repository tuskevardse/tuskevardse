import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { knowledgeBaseCategories } from "@/content/resources";

export const metadata: Metadata = {
  title: "Tudásbázis - Tüskevár DSE",
  description: "Gyakorlati válaszok csatlakozásról, első alkalomról, szülői tájékozódásról és támogatói kérdésekről.",
};

const decisionFriction = [
  "Melyik sportág lehetne jó első irány?",
  "Mit kell tudnunk még az első alkalom előtt?",
  "Mikor érdemes már írni vagy kérdezni?",
];

export default function KnowledgeBasePage() {
  return (
    <>
      <PageHero
        eyebrow="Tudásbázis"
        editorId="knowledge"
        title="A jó tájékoztatás abban segít, hogy könnyebb legyen elindulni."
        description="Itt a gyakran felmerülő szülői és támogatói kérdésekre adunk rövid, követhető válaszokat."
      />

      <section className="py-18 sm:py-24" data-editor-block="knowledge.content">
        <Container>
          <SectionHeading
            eyebrow="GYIK és eligazítás"
            editorId="knowledge.content"
            title="Szülői, indulási és támogatói kérdések külön kezelve."
            description="A válaszok abban segítenek, hogy ne kelljen találgatni, mit érdemes először megkérdezni vagy megírni."
          />

          <Card tone="sky" className="mt-10" data-editor-block="knowledge.friction">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="knowledge.friction.title">
              A legtöbb döntés itt szokott megakadni
            </p>
            <div className="mt-5 grid gap-3 lg:grid-cols-3">
              {decisionFriction.map((item, index) => (
                <div key={item} className="rounded-[1.4rem] bg-white/80 px-5 py-5" data-editor-block={`knowledge.friction.item.${index}`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue">0{index + 1}</p>
                  <p className="mt-3 text-base leading-7 text-ink" data-editor-text={`knowledge.friction.item.${index}.text`}>{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-brand-navy/72" data-editor-text="knowledge.friction.note">
              Nem az a cél, hogy itt mindent lezárjatok, hanem hogy a következő jó kérdés már világos legyen.
            </p>
          </Card>

          <div className="mt-12 grid gap-6">
            {knowledgeBaseCategories.map((category, categoryIndex) => (
              <Card key={category.title} data-editor-block={`knowledge.category.${categoryIndex}`}>
                <div className="grid gap-6 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text={`knowledge.category.${categoryIndex}.audience`}>
                      {category.audience}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ink" data-editor-text={`knowledge.category.${categoryIndex}.title`}>
                      {category.title}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-muted" data-editor-text={`knowledge.category.${categoryIndex}.description`}>
                      {category.description}
                    </p>
                  </div>
                  <div className="grid gap-4">
                    {category.questions.map((item, index) => {
                      const nextQuestion = category.questions[index + 1]?.question;

                      return (
                        <div key={item.question} className="rounded-[1.4rem] bg-white/75 px-5 py-5 ring-1 ring-brand-navy/10">
                          <h3 className="text-lg font-semibold text-ink" data-editor-text={`knowledge.category.${categoryIndex}.question.${index}.question`}>
                            {item.question}
                          </h3>
                          <p className="mt-3 text-base leading-7 text-muted" data-editor-text={`knowledge.category.${categoryIndex}.question.${index}.answer`}>
                            {item.answer}
                          </p>
                          <div className="mt-4 rounded-[1.1rem] bg-brand-sky/55 px-4 py-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue">
                              {nextQuestion ? "Ezt is gyakran megkérdezik" : "Innen már érdemes írni"}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-ink" data-editor-text={`knowledge.category.${categoryIndex}.question.${index}.next`}>
                              {nextQuestion
                                ? nextQuestion
                                : "Ha ez a pont már tiszta, a kapcsolat oldalon megírhatjátok a konkrét kérdéseteket."}
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

          <Card tone="navy" className="mt-10" data-editor-block="knowledge.finalCta">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-sky" data-editor-text="knowledge.finalCta.title">Van még kérdésetek?</p>
                <p className="mt-4 text-base leading-7 text-white/82" data-editor-text="knowledge.finalCta.description">
                  Ha a válaszok után is maradt bizonytalanság, kérdezhettek röviden, vagy elküldhetitek az első érdeklődő üzenetet.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <ButtonLink data-editor-text="knowledge.finalCta.action.0" href="/ai-asszisztens" size="lg" variant="secondary">
                  Kérdezek
                </ButtonLink>
                <ButtonLink data-editor-text="knowledge.finalCta.action.1" href="/kapcsolat" size="lg" variant="ghost">
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
