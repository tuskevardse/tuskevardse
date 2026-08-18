import type { Metadata } from "next";

import { CopyablePreprompt } from "@/components/ai/copyable-preprompt";
import { ChatAssistant } from "@/components/chat/chat-assistant";
import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { externalAiLinks } from "@/content/ai-preprompt";

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
        editorId="aiAssistant"
        eyebrow="Kérdezz tőlünk"
        title="Nem kell kész döntéssel érkezni. Elég egy jó első kérdés."
      />

      <section className="py-18 sm:py-24" data-editor-block="aiAssistant.main">
        <Container className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)]">
          <ChatAssistant />

          <div className="grid gap-6">
            <Card tone="sky" data-editor-block="aiAssistant.help">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="aiAssistant.help.title">Miben segít?</p>
              <div className="mt-4 space-y-4 text-base leading-7 text-ink">
                <p data-editor-text="aiAssistant.help.paragraph.0">
                  Sok szülő nem kész válaszokkal érkezik, hanem bizonytalansággal. Az első kérdések átgondolása abban segít, hogy
                  az első érdeklődés már tisztább helyzetből induljon.
                </p>
                <p data-editor-text="aiAssistant.help.paragraph.1">
                  Ugyanez igaz a támogatókra is: néhány kérdés után könnyebb látni, milyen kapcsolódási forma lehet
                  hasznos és reális.
                </p>
              </div>
            </Card>

            <Card data-editor-block="aiAssistant.helpTopics">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="aiAssistant.helpTopics.title">Gyakori témák</p>
              <ul className="mt-5 space-y-4 text-base leading-7 text-ink">
                {helpTopics.map((item, index) => (
                  <li key={item.title} className="flex gap-3" data-editor-block={`aiAssistant.helpTopics.item.${index}`}>
                    <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                    <span data-editor-text={`aiAssistant.helpTopics.item.${index}.text`}>
                      <strong>{item.title}:</strong> {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card data-editor-block="aiAssistant.samplePrompts">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="aiAssistant.samplePrompts.title">Kipróbálható kérdések</p>
              <ul className="mt-5 space-y-4 text-base leading-7 text-ink">
                {prompts.map((item, index) => (
                  <li key={item} className="rounded-[1.2rem] bg-brand-sky/70 px-4 py-4" data-editor-text={`aiAssistant.samplePrompts.item.${index}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      <section className="bg-white/70 py-18 sm:py-24" data-editor-block="aiAssistant.externalAi">
        <Container>
          <SectionHeading
            eyebrow="Külső AI chatbot"
            editorId="aiAssistant.externalAi"
            title="Két publikus megoldás, amely saját szerver nélkül is használható."
            description="A preprompt bármelyik AI chatbotba bemásolható. A külső AI linkek új oldalon nyílnak meg, a kérdést és a prepromptot a felhasználó saját fiókjában használja."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
            <Card data-editor-block="aiAssistant.externalAi.copySolution">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="aiAssistant.externalAi.copySolution.eyebrow">1. Biztos megoldás</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-ink" data-editor-text="aiAssistant.externalAi.copySolution.title">Preprompt másolása</h2>
              <p className="mt-4 text-base leading-7 text-muted" data-editor-text="aiAssistant.externalAi.copySolution.description">
                Másoljátok ki ezt a szöveget, majd illesszétek be a választott AI chatbotba. A kérdést az utolsó sorban
                lehet kicserélni.
              </p>
              <div className="mt-6">
                <CopyablePreprompt />
              </div>
            </Card>

            <div className="grid gap-6">
              <Card tone="sky" data-editor-block="aiAssistant.externalAi.links">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="aiAssistant.externalAi.links.eyebrow">2. Kísérleti irány</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-ink" data-editor-text="aiAssistant.externalAi.links.title">Külső AI megnyitása</h2>
                <p className="mt-4 text-base leading-7 text-ink" data-editor-text="aiAssistant.externalAi.links.description">
                  A ChatGPT és más AI szolgáltatások nem megbízhatóan ágyazhatók be idegen oldalba. Ezért a stabil
                  megoldás az, hogy a prepromptot kimásoljátok, majd külső AI felületen használjátok.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  {externalAiLinks.map((link, index) => (
                    <ButtonLink
                      href={link.href}
                      key={link.href}
                      data-editor-text={`aiAssistant.externalAi.links.item.${index}`}
                      rel="noreferrer"
                      target="_blank"
                      variant="secondary"
                    >
                      {link.label}
                    </ButtonLink>
                  ))}
                </div>
              </Card>

              <Card data-editor-block="aiAssistant.externalAi.choice">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="aiAssistant.externalAi.choice.title">Mikor melyiket?</p>
                <ul className="mt-5 space-y-4 text-base leading-7 text-ink">
                  <li data-editor-text="aiAssistant.externalAi.choice.item.0">Ha biztos működés kell: preprompt másolása bármely AI chatbotba.</li>
                  <li data-editor-text="aiAssistant.externalAi.choice.item.1">Ha később lesz saját GPT link: ide külön gombként betehető.</li>
                  <li data-editor-text="aiAssistant.externalAi.choice.item.2">Ha beágyazott chat kellene: ahhoz API, backend és költségkontroll kellene.</li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
