import { homepageContent } from "@/content/homepage";

import { ButtonLink } from "../ui/button-link";
import { Card } from "../ui/card";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

export function SupportersSection() {
  const { supporters } = homepageContent;

  return (
    <section className="bg-white/70 py-18 sm:py-24" data-editor-block="home.supporters">
      <Container>
        <SectionHeading
          align="center"
          description={supporters.description}
          editorId="home.supporters"
          eyebrow={supporters.eyebrow}
          title={supporters.title}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {supporters.items.map((item, index) => (
            <Card key={item.title} className="h-full" data-editor-block={`home.supporters.item.${index}`}>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink" data-editor-text={`home.supporters.item.${index}.title`}>
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted" data-editor-text={`home.supporters.item.${index}.description`}>
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          {supporters.actions.map((action, index) => (
            <ButtonLink
              key={action.label}
              data-editor-text={`home.supporters.action.${index}`}
              href={action.href}
              size="lg"
              variant={action.variant}
            >
              {action.label}
            </ButtonLink>
          ))}
        </div>
      </Container>
    </section>
  );
}
