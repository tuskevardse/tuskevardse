import { homepageContent } from "@/content/homepage";

import { Card } from "../ui/card";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

export function TestimonialsSection() {
  const { testimonials } = homepageContent;

  return (
    <section className="py-18 sm:py-24" data-editor-block="home.testimonials">
      <Container>
        <SectionHeading
          align="center"
          description={testimonials.description}
          editorId="home.testimonials"
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {testimonials.items.map((item, index) => (
              <Card key={item.quote} className="h-full" data-editor-block={`home.testimonials.item.${index}`}>
                <p className="text-lg leading-8 text-ink" data-editor-text={`home.testimonials.item.${index}.quote`}>
                  “{item.quote}”
                </p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-brand-blue" data-editor-text={`home.testimonials.item.${index}.source`}>
                  {item.source}
                </p>
              </Card>
            ))}
          </div>

          <Card tone="navy" className="flex items-center" data-editor-block="home.testimonials.highlight">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70" data-editor-text="home.testimonials.highlight.label">
                Kiemelt gondolat
              </p>
              <p className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-balance" data-editor-text="home.testimonials.highlight.quote">
                “{testimonials.quoteHighlight}”
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
