import type { Metadata } from "next";

import { CopyablePreprompt } from "@/components/ai/copyable-preprompt";
import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { externalAiLinks } from "@/content/ai-preprompt";

export const metadata: Metadata = {
  title: "AI prompt kipróbálása - Tüskevár DSE",
  description:
    "Másolható Tüskevár DSE AI preprompt és külső AI chatbot linkek saját szerver, API kulcs és költségkockázat nélkül.",
};

export default function AiPromptPage() {
  return (
    <>
      <PageHero
        description="Itt kipróbálható az a megoldás, amelynél a látogató kimásol egy előkészített Tüskevár DSE promptot, majd a saját AI chatbotjában használja."
        eyebrow="AI prompt"
        title="Másolható segédprompt külső AI chatbotokhoz."
      />

      <section className="py-18 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Kipróbálás"
            title="Két publikus megoldás, amely GitHub és Cloudflare alatt is működik."
            description="Az első megoldás a biztos: preprompt másolása. A második a külső AI felület megnyitása, ahol a felhasználó saját fiókjában használja a kimásolt szöveget."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
            <Card>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">1. Biztos megoldás</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-ink">Preprompt másolása</h2>
              <p className="mt-4 text-base leading-7 text-muted">
                A szöveg tartalmazza a Tüskevár DSE alapvető tájékoztatási kereteit. Másolás után az utolsó sorban
                cserélhető ki a kérdés.
              </p>
              <div className="mt-6">
                <CopyablePreprompt />
              </div>
            </Card>

            <div className="grid gap-6">
              <Card tone="sky">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">2. Külső AI felület</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-ink">AI chatbot megnyitása</h2>
                <p className="mt-4 text-base leading-7 text-ink">
                  A ChatGPT és más AI szolgáltatások nem megbízhatóan ágyazhatók be idegen oldalba, ezért itt új ablakban
                  nyithatók meg. A prepromptot előtte másoljátok ki.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  {externalAiLinks.map((link) => (
                    <ButtonLink href={link.href} key={link.href} rel="noreferrer" target="_blank" variant="secondary">
                      {link.label}
                    </ButtonLink>
                  ))}
                </div>
              </Card>

              <Card>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Tesztelési sorrend</p>
                <ol className="mt-5 list-decimal space-y-3 pl-5 text-base leading-7 text-ink">
                  <li>Kattints a Preprompt másolása gombra.</li>
                  <li>Nyisd meg a választott AI chatbotot.</li>
                  <li>Illeszd be a promptot.</li>
                  <li>Cseréld ki az utolsó sort a saját kérdésedre.</li>
                </ol>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
