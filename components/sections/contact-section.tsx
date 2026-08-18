import { homepageContent } from "@/content/homepage";
import { siteContact } from "@/content/site";

import { ContactForm } from "../forms/contact-form";
import { ButtonLink } from "../ui/button-link";
import { Card } from "../ui/card";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

export function ContactSection() {
  const { contact } = homepageContent;

  return (
    <section id="kapcsolat" className="py-18 sm:py-24" data-editor-block="home.contact">
      <Container className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]">
        <div>
          <SectionHeading description={contact.description} editorId="home.contact" eyebrow={contact.eyebrow} title={contact.title} />

          <Card className="mt-8" data-editor-block="home.contact.details">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="home.contact.details.title">
              Intézményi elérhetőség
            </p>
            <div className="mt-5 space-y-4 text-base leading-7 text-ink">
              <p className="font-semibold" data-editor-text="home.contact.details.school">{siteContact.school}</p>
              <p data-editor-text="home.contact.details.address">{siteContact.address}</p>
              <p>
                <a className="underline decoration-brand-blue/35 underline-offset-4" data-editor-text="home.contact.details.phone" href={siteContact.phoneHref}>
                  {siteContact.phoneLabel}
                </a>
              </p>
              <p>
                <a className="underline decoration-brand-blue/35 underline-offset-4" data-editor-text="home.contact.details.email" href={siteContact.emailHref}>
                  {siteContact.emailLabel}
                </a>
              </p>
            </div>
          </Card>
        </div>

        <div className="grid gap-6">
          <ContactForm />
          <Card tone="sky" className="h-fit" data-editor-block="home.contact.checklist">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="home.contact.checklist.title">
              Mit írjatok meg?
            </p>
            <ul className="mt-6 space-y-4">
              {contact.checklist.map((item, index) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-ink" data-editor-block={`home.contact.checklist.item.${index}`}>
                  <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                  <span data-editor-text={`home.contact.checklist.item.${index}.text`}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              {contact.actions.map((action, index) => (
                <ButtonLink key={action.label} data-editor-text={`home.contact.action.${index}`} href={action.href} size="lg" variant={action.variant}>
                  {action.label}
                </ButtonLink>
              ))}
            </div>
          </Card>
          <Card tone="sky" className="mt-6" data-editor-block="home.contact.help">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="home.contact.help.title">
              Miben tudunk segíteni?
            </p>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3 text-base leading-7 text-ink" data-editor-block="home.contact.help.item.0">
                <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                <span data-editor-text="home.contact.help.item.0.text">sportágválasztás és első lépés átgondolása</span>
              </li>
              <li className="flex gap-3 text-base leading-7 text-ink" data-editor-block="home.contact.help.item.1">
                <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                <span data-editor-text="home.contact.help.item.1.text">szülői kérdések és egyedi szempontok összegyűjtése</span>
              </li>
              <li className="flex gap-3 text-base leading-7 text-ink" data-editor-block="home.contact.help.item.2">
                <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                <span data-editor-text="home.contact.help.item.2.text">támogatói vagy partneri kapcsolódás elindítása</span>
              </li>
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
