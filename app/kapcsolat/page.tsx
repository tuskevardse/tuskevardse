import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { siteContact } from "@/content/site";

export const metadata: Metadata = {
  title: "Kapcsolat - Tüskevár DSE",
  description:
    "Kapcsolatfelvétel szülői érdeklődéshez, sportági kérdésekhez és támogatói megkeresésekhez.",
};

const checklist = [
  "milyen korosztályról vagy érintett csoportról van szó",
  "melyik sportág érdekel benneteket, vagy milyen támogatási szándékkal érkeztek",
  "van-e bármilyen fontos indulási szempont, amit jó előre tudnunk",
];

const supporterIdeas = [
  "anyagi támogatás vagy célzott hozzájárulás egy programhoz",
  "sporteszköz, mez vagy egyéb tárgyi felajánlás",
  "rendezvénytámogatás, önkéntes segítség vagy szakmai együttműködés",
];

const minimumStartInfo = [
  "ki miatt írtok, vagy milyen típusú megkereséssel érkeztek",
  "melyik sportág vagy kapcsolódási irány tűnik most a legvalószínűbbnek",
  "mi az az egy kérdés vagy szempont, amit mindenképp tisztázni szeretnétek",
];

const canWait = [
  "nem kell most végleges sportágat vagy csoportot választani",
  "nem kell minden részletet tudni az első alkalomról",
  "nem kell teljes támogatói tervvel érkezni ahhoz, hogy el tudjon indulni a beszélgetés",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        description="Írjatok akkor is, ha még nem minden részlet biztos. Egy rövid első üzenet már elég ahhoz, hogy elinduljon az egyeztetés."
        editorId="contact"
        eyebrow="Kapcsolat"
        title="Kezdjük el a beszélgetést világos, egyszerű első lépéssel."
      />

      <section className="py-18 sm:py-24" data-editor-block="contact.pageContent">
        <Container className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.95fr)]">
          <div className="grid gap-6">
            <Card tone="sky" data-editor-block="contact.startInfo">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="contact.startInfo.eyebrow">Nem kell mindent most leírni</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-ink" data-editor-text="contact.startInfo.title">Egy jó első üzenethez három dolog már elég.</h2>
              <ul className="mt-5 space-y-4">
                {minimumStartInfo.map((item, index) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-ink" data-editor-block={`contact.startInfo.item.${index}`}>
                    <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                    <span data-editor-text={`contact.startInfo.item.${index}.text`}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-[1.4rem] bg-white/80 px-5 py-5" data-editor-block="contact.startInfo.canWait">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="contact.startInfo.canWait.title">Ez későbbre is maradhat</p>
                <ul className="mt-3 space-y-3">
                  {canWait.map((item, index) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-muted" data-editor-block={`contact.startInfo.canWait.item.${index}`}>
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-brand-blue/40" />
                      <span data-editor-text={`contact.startInfo.canWait.item.${index}.text`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <ContactForm />
          </div>

          <div className="grid gap-6">
            <Card tone="sky" data-editor-block="contact.details">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="contact.details.title">Elérhetőségek</p>
              <div className="mt-5 space-y-4 text-base leading-7 text-ink">
                <p className="font-semibold" data-editor-text="contact.details.school">{siteContact.school}</p>
                <p data-editor-text="contact.details.address">{siteContact.address}</p>
                <p>
                  <a className="underline decoration-brand-blue/35 underline-offset-4" data-editor-text="contact.details.phone" href={siteContact.phoneHref}>
                    {siteContact.phoneLabel}
                  </a>
                </p>
                <p>
                  <a className="underline decoration-brand-blue/35 underline-offset-4" data-editor-text="contact.details.email" href={siteContact.emailHref}>
                    {siteContact.emailLabel}
                  </a>
                </p>
              </div>
            </Card>

            <Card data-editor-block="contact.checklist">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="contact.checklist.title">Mit érdemes megírni?</p>
              <ul className="mt-5 space-y-4">
                {checklist.map((item, index) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-ink" data-editor-block={`contact.checklist.item.${index}`}>
                    <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                    <span data-editor-text={`contact.checklist.item.${index}.text`}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-6 text-brand-navy/72" data-editor-text="contact.checklist.note">
                Ha ezek közül csak kettő biztos, az is elég ahhoz, hogy el tudjon indulni az egyeztetés.
              </p>
            </Card>

            <Card data-editor-block="contact.supporterIdeas">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="contact.supporterIdeas.title">Ha támogatóként írnátok</p>
              <ul className="mt-5 space-y-4">
                {supporterIdeas.map((item, index) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-ink" data-editor-block={`contact.supporterIdeas.item.${index}`}>
                    <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                    <span data-editor-text={`contact.supporterIdeas.item.${index}.text`}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink data-editor-text="contact.supporterIdeas.action" href="/tamogatok" size="lg" variant="ghost">
                  Támogatási lehetőségek
                </ButtonLink>
              </div>
            </Card>

            <Card tone="sky" data-editor-block="contact.aiPromptCard">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="contact.aiPromptCard.title">Előbb inkább kérdeznétek?</p>
              <p className="mt-4 text-base leading-7 text-ink" data-editor-text="contact.aiPromptCard.description">
                Ha a sportágválasztás, az első alkalom vagy a támogatás kapcsán még bizonytalanok vagytok, előbb kérdezhettek röviden.
              </p>
              <div className="mt-8">
                <ButtonLink data-editor-text="contact.aiPromptCard.action" href="/ai-asszisztens" size="lg" variant="secondary">
                  Előbb kérdezek
                </ButtonLink>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
