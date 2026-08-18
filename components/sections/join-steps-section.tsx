import { homepageContent } from "@/content/homepage";

import { ButtonLink } from "../ui/button-link";
import { Card } from "../ui/card";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

export function JoinStepsSection() {
  const { join } = homepageContent;

  return (
    <section id="csatlakozas" className="bg-white/70 py-18 sm:py-24" data-editor-block="home.join">
      <Container>
        <SectionHeading description={join.description} editorId="home.join" eyebrow={join.eyebrow} title={join.title} />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {join.steps.map((step, index) => (
            <Card key={step.step} className="h-full" data-editor-block={`home.join.step.${index}`}>
              <div className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text={`home.join.step.${index}.step`}>
                {step.step}
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-ink" data-editor-text={`home.join.step.${index}.title`}>
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted" data-editor-text={`home.join.step.${index}.description`}>
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          {join.actions.map((action, index) => (
            <ButtonLink key={action.label} data-editor-text={`home.join.action.${index}`} href={action.href} size="lg" variant={action.variant}>
              {action.label}
            </ButtonLink>
          ))}
        </div>
      </Container>
    </section>
  );
}
