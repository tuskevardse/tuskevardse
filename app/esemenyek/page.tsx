import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { eventItems } from "@/content/resources";

export const metadata: Metadata = {
  title: "Események - Tüskevár DSE",
  description: "Közelgő közösségi és sportesemények a Tüskevár Diák Sportegyesület körül.",
};

const publicCalendarUrl =
  "https://calendar.google.com/calendar/embed?src=tuskevardse%40gmail.com&ctz=Europe%2FBudapest&hl=hu&mode=AGENDA";

const publicCalendarDirectUrl = "https://calendar.google.com/calendar/u/0?cid=dHVza2V2YXJkc2VAZ21haWwuY29t";

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Események"
        title="A közösséghez nem csak edzések, hanem közös alkalmak is kellenek."
        description="Itt találjátok azokat az alkalmakat, ahol szülőként, érdeklődőként vagy támogatóként közelebbről is kapcsolódhattok a DSE életéhez."
      />

      <section className="py-18 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Nyilvános programnaptár"
            title="Az egyesület által szervezett vagy támogatott nyilvános programok."
            description="A naptárat Google Calendarban kezeljük, ezért a friss események külön honlapfrissítés nélkül is megjelenhetnek ezen az oldalon."
          />

          <div className="mt-10 overflow-hidden rounded-[1.5rem] bg-white shadow-[0_24px_80px_-48px_rgba(18,60,115,0.45)] ring-1 ring-brand-navy/10">
            <iframe
              title="Tüskevár DSE nyilvános programnaptár"
              src={publicCalendarUrl}
              className="h-[680px] w-full border-0"
              loading="lazy"
            />
          </div>

          <Card tone="sky" className="mt-6">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Fontos adatvédelmi elv</p>
                <p className="mt-4 text-base leading-7 text-ink">
                  Ebben a naptárban csak nyilvános programok szerepeljenek. Belső sportági alkalmakat, zárt csoportos
                  eseményeket vagy érzékeny gyermekadatot tartalmazó információkat külön, jogosultsággal védett Google
                  Calendarban érdemes kezelni.
                </p>
              </div>
              <ButtonLink href={publicCalendarDirectUrl} size="lg" variant="secondary">
                Megnyitás Google Calendarban
              </ButtonLink>
            </div>
          </Card>
        </Container>
      </section>

      <section className="bg-white/70 py-18 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Közelgő alkalmak"
            title="Sportnapok, tájékoztatók és közösségi találkozások."
            description="Az alábbi kiemelt események segítenek felkészülni, kérdezni, jelen lenni és jobban megismerni a DSE közegét."
          />

          <div className="mt-12 grid gap-6">
            {eventItems.map((item) => (
              <Card key={`${item.date}-${item.title}`} className="grid gap-5 lg:grid-cols-[160px_minmax(0,1fr)_220px] lg:items-start">
                <div className="rounded-[1.4rem] bg-brand-navy px-4 py-4 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-sky">{item.status}</p>
                  <p className="mt-3 text-lg font-semibold">{item.date}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">{item.title}</h2>
                  <p className="mt-4 text-base leading-7 text-muted">{item.summary}</p>
                </div>

                <div className="rounded-[1.4rem] bg-white/75 px-4 py-4 ring-1 ring-brand-navy/10">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Helyszín</p>
                  <p className="mt-3 text-base leading-7 text-ink">{item.location}</p>
                  <p className="mt-4 text-sm leading-6 text-muted">Elsősorban: {item.audience}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card tone="sky" className="mt-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Kérdeznétek egy eseményről?</p>
                <p className="mt-4 text-base leading-7 text-ink">
                  Ha nem egyértelmű, kinek szól egy alkalom, mit érdemes vinni, vagy hogyan lehet csatlakozni, írjatok röviden.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <ButtonLink href="/hirek" size="lg" variant="secondary">
                  Hírek
                </ButtonLink>
                <ButtonLink href="/kapcsolat" size="lg" variant="primary">
                  Eseményről kérdezek
                </ButtonLink>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
