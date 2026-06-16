import { resourceHubCards } from "@/content/resources";

import { ButtonLink } from "../ui/button-link";
import { Card } from "../ui/card";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

export function ResourceHubSection() {
  return (
    <section className="py-18 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Információs központ"
          title="Az oldal most már nem csak bemutatkozó felület, hanem bővíthető tájékozódási rendszer."
          description="Külön aloldalak segítik a hírek, az edzésrend, a dokumentumok, az események, a galéria és a tudásbázis átlátható kezelését."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {resourceHubCards.map((item) => (
            <Card key={item.href} className="h-full">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">{item.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-ink">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
              <p className="mt-4 text-sm leading-6 text-ink/78">Elsősorban: {item.audience}</p>
              <div className="mt-6">
                <ButtonLink href={item.href} variant="secondary">
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
