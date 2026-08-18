import { homepageContent } from "@/content/homepage";

import { BrandLockup } from "../ui/brand-lockup";
import { ButtonLink } from "../ui/button-link";
import { Card } from "../ui/card";
import { Container } from "../ui/container";

export function HeroSection() {
  const { hero } = homepageContent;

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-18 pt-10 sm:pb-24 sm:pt-14"
      data-editor-block="home.hero"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top_left,rgba(47,128,237,0.16),transparent_42%),radial-gradient(circle_at_85%_12%,rgba(140,203,94,0.15),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f7fbff_66%,#eef6ff_100%)]" />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-12">
        <div className="max-w-3xl">
          <p
            className="inline-flex rounded-full bg-brand-sky px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand-navy"
            data-editor-text="home.hero.eyebrow"
          >
            {hero.eyebrow}
          </p>
          <h1
            className="mt-6 text-balance text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl lg:text-7xl"
            data-editor-text="home.hero.title"
          >
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl" data-editor-text="home.hero.subtitle">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {hero.actions.map((action, index) => (
              <ButtonLink
                key={action.label}
                data-editor-text={`home.hero.action.${index}`}
                href={action.href}
                size="lg"
                variant={action.variant}
              >
                {action.label}
              </ButtonLink>
            ))}
          </div>

          <div
            className="mt-8 rounded-[1.75rem] border border-brand-blue/10 bg-white/88 p-5 shadow-[0_30px_80px_-48px_rgba(19,34,56,0.35)] sm:p-6"
            data-editor-block="home.hero.openLoop"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text="home.hero.openLoop.eyebrow">
              {hero.openLoop.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink" data-editor-text="home.hero.openLoop.title">
              {hero.openLoop.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted" data-editor-text="home.hero.openLoop.description">
              {hero.openLoop.description}
            </p>

            <div className="mt-6 grid gap-3 lg:grid-cols-3">
              {hero.openLoop.steps.map((step, index) => (
                <div key={step.step} className="rounded-[1.35rem] bg-brand-sky/55 px-4 py-4" data-editor-block={`home.hero.openLoop.step.${index}`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue" data-editor-text={`home.hero.openLoop.step.${index}.step`}>
                    {step.step}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-ink" data-editor-text={`home.hero.openLoop.step.${index}.title`}>
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted" data-editor-text={`home.hero.openLoop.step.${index}.description`}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-6 text-brand-navy/72" data-editor-text="home.hero.openLoop.note">
              {hero.openLoop.note}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-medium text-muted">
            {hero.microcopy.map((item, index) => (
              <span
                key={item}
                className="rounded-full border border-brand-navy/10 bg-white/90 px-4 py-2"
                data-editor-text={`home.hero.microcopy.${index}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <Card className="relative overflow-hidden border border-white/70 bg-white/80 p-6 sm:p-8" data-editor-block="home.hero.summaryCard">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,128,237,0.16),transparent_36%),radial-gradient(circle_at_20%_80%,rgba(140,203,94,0.15),transparent_28%)]" />
          <div className="relative">
            <BrandLockup />
            <p
              className="mt-5 max-w-sm text-sm font-medium uppercase tracking-[0.16em] text-brand-blue"
              data-editor-text="home.hero.summaryCard.eyebrow"
            >
              Befogadó sportközeg Budapest szívében
            </p>

            <div className="mt-6 grid gap-3">
              {hero.quickFacts.map((fact, index) => (
                <div
                  key={fact}
                  className="flex items-start gap-3 rounded-[1.35rem] bg-white/92 px-4 py-4 shadow-[0_24px_55px_-38px_rgba(19,34,56,0.45)]"
                  data-editor-block={`home.hero.quickFact.${index}`}
                >
                  <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-sky text-xs font-bold text-brand-navy">
                    0{index + 1}
                  </div>
                  <p className="text-sm leading-6 text-ink" data-editor-text={`home.hero.quickFact.${index}.text`}>
                    {fact}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3" data-editor-block="home.hero.summaryCard.tiles">
              <div className="rounded-[1.5rem] bg-brand-navy px-4 py-5 text-white" data-editor-block="home.hero.summaryCard.tile.0">
                <div className="text-xs uppercase tracking-[0.16em] text-white/68" data-editor-text="home.hero.summaryCard.tile.0.label">Fókusz</div>
                <div className="mt-2 text-lg font-semibold" data-editor-text="home.hero.summaryCard.tile.0.value">Közösség</div>
              </div>
              <div className="rounded-[1.5rem] bg-brand-sky px-4 py-5 text-brand-navy" data-editor-block="home.hero.summaryCard.tile.1">
                <div className="text-xs uppercase tracking-[0.16em] text-brand-navy/58" data-editor-text="home.hero.summaryCard.tile.1.label">Sport</div>
                <div className="mt-2 text-lg font-semibold" data-editor-text="home.hero.summaryCard.tile.1.value">Foci</div>
              </div>
              <div className="rounded-[1.5rem] bg-brand-green/20 px-4 py-5 text-brand-navy" data-editor-block="home.hero.summaryCard.tile.2">
                <div className="text-xs uppercase tracking-[0.16em] text-brand-navy/58" data-editor-text="home.hero.summaryCard.tile.2.label">Sport</div>
                <div className="mt-2 text-lg font-semibold" data-editor-text="home.hero.summaryCard.tile.2.value">Kosár</div>
              </div>
              <div className="rounded-[1.5rem] bg-cyan-100 px-4 py-5 text-brand-navy" data-editor-block="home.hero.summaryCard.tile.3">
                <div className="text-xs uppercase tracking-[0.16em] text-brand-navy/58" data-editor-text="home.hero.summaryCard.tile.3.label">Irányok</div>
                <div className="mt-2 text-lg font-semibold" data-editor-text="home.hero.summaryCard.tile.3.value">Víz, mászás, túra</div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
