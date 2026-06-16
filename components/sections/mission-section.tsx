import { homepageContent } from "@/content/homepage";

import { Card } from "../ui/card";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

export function MissionSection() {
  const { mission } = homepageContent;

  return (
    <section id="kuldetes" className="py-18 sm:py-24">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.9fr)] lg:items-start">
        <div>
          <SectionHeading eyebrow={mission.eyebrow} title={mission.title} />
          <div className="mt-8 space-y-5 text-lg leading-8 text-muted">
            {mission.lead.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <Card tone="sky">
            <p className="text-2xl font-semibold tracking-[-0.03em] text-brand-navy">{mission.highlight}</p>
          </Card>

          <Card>
            <ul className="space-y-4">
              {mission.supportingPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand-green" />
                  <span className="text-base leading-7 text-ink">{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
