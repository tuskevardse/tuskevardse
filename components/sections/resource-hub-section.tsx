import { resourceHubCards } from "@/content/resources";

import { ButtonLink } from "../ui/button-link";
import { Card } from "../ui/card";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

export function ResourceHubSection() {
  return (
    <section className="py-18 sm:py-24" data-editor-block="home.resourceHub">
      <Container>
        <SectionHeading
          align="center"
          editorId="home.resourceHub"
          eyebrow="Információs központ"
          title="Minden fontos tudnivaló egy helyen, hogy könnyebb legyen elindulni."
          description="Hírek, edzésrend, dokumentumok, események, galéria és gyakori kérdések segítenek abban, hogy szülőként vagy támogatóként gyorsan megtaláljátok, hol érdemes kezdeni."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {resourceHubCards.map((item, index) => (
            <Card key={item.href} className="h-full" data-editor-block={`home.resourceHub.card.${index}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text={`home.resourceHub.card.${index}.eyebrow`}>
                {item.eyebrow}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-ink" data-editor-text={`home.resourceHub.card.${index}.title`}>
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted" data-editor-text={`home.resourceHub.card.${index}.description`}>
                {item.description}
              </p>
              <p className="mt-4 text-sm leading-6 text-ink/78" data-editor-text={`home.resourceHub.card.${index}.audience`}>
                Elsősorban: {item.audience}
              </p>
              <div className="mt-6">
                <ButtonLink data-editor-text={`home.resourceHub.card.${index}.cta`} href={item.href} variant="secondary">
                  Megnyitás
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
