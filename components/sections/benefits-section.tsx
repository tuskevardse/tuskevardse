import { homepageContent } from "@/content/homepage";

import { Card } from "../ui/card";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

export function BenefitsSection() {
  const { benefits } = homepageContent;

  return (
    <section id="elonyok" className="py-18 sm:py-24" data-editor-block="home.benefits">
      <Container>
        <SectionHeading
          description={benefits.description}
          editorId="home.benefits"
          eyebrow={benefits.eyebrow}
          title={benefits.title}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.items.map((item, index) => (
            <Card key={item.title} className="h-full" data-editor-block={`home.benefits.item.${index}`}>
              <div className="flex size-11 items-center justify-center rounded-2xl bg-brand-sky text-sm font-bold text-brand-navy">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-ink" data-editor-text={`home.benefits.item.${index}.title`}>
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted" data-editor-text={`home.benefits.item.${index}.description`}>
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
