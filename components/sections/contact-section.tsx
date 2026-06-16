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
    <section id="kapcsolat" className="py-18 sm:py-24">
      <Container className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]">
        <div>
          <SectionHeading description={contact.description} eyebrow={contact.eyebrow} title={contact.title} />

          <Card className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Intézményi elérhetőség</p>
            <div className="mt-5 space-y-4 text-base leading-7 text-ink">
              <p className="font-semibold">{siteContact.school}</p>
              <p>{siteContact.address}</p>
              <p>
                <a className="underline decoration-brand-blue/35 underline-offset-4" href={siteContact.phoneHref}>
                  {siteContact.phoneLabel}
                </a>
              </p>
              <p>
                <a className="underline decoration-brand-blue/35 underline-offset-4" href={siteContact.emailHref}>
                  {siteContact.emailLabel}
                </a>
              </p>
            </div>
          </Card>
        </div>

        <div className="grid gap-6">
          <ContactForm />
          <Card tone="sky" className="h-fit">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Mit írjatok meg?</p>
            <ul className="mt-6 space-y-4">
              {contact.checklist.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-ink">
                  <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              {contact.actions.map((action) => (
                <ButtonLink key={action.label} href={action.href} size="lg" variant={action.variant}>
                  {action.label}
                </ButtonLink>
              ))}
            </div>
          </Card>
          <Card tone="sky" className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Miben tudunk segíteni?</p>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3 text-base leading-7 text-ink">
                <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                <span>sportágválasztás és első lépés átgondolása</span>
              </li>
              <li className="flex gap-3 text-base leading-7 text-ink">
                <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                <span>szülői kérdések és egyedi szempontok összegyűjtése</span>
              </li>
              <li className="flex gap-3 text-base leading-7 text-ink">
                <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                <span>támogatói vagy partneri kapcsolódás elindítása</span>
              </li>
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
