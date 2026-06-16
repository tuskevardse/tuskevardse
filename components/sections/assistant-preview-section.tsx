import { homepageContent } from "@/content/homepage";

import { ButtonLink } from "../ui/button-link";
import { Card } from "../ui/card";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

export function AssistantPreviewSection() {
  const { aiAssistant } = homepageContent;

  return (
    <section className="bg-white/70 py-18 sm:py-24">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)]">
        <div>
          <SectionHeading
            eyebrow={aiAssistant.eyebrow}
            title={aiAssistant.title}
            description={aiAssistant.description}
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/ai-asszisztens" size="lg" variant="primary">
              AI asszisztens megnyitása
            </ButtonLink>
            <ButtonLink href="/kapcsolat" size="lg" variant="ghost">
              Inkább kapcsolatot vennék fel
            </ButtonLink>
          </div>
        </div>

        <Card tone="navy" className="space-y-4">
          {aiAssistant.useCases.map((item) => (
            <div key={item.title} className="rounded-[1.4rem] bg-white/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/68">{item.title}</p>
              <p className="mt-3 text-base leading-7 text-white/84">{item.description}</p>
            </div>
          ))}
        </Card>
      </Container>
    </section>
  );
}
