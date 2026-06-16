import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryAlbums } from "@/content/resources";

export const metadata: Metadata = {
  title: "Galéria - Tüskevár DSE",
  description: "Képes és hangulati válogatások a Tüskevár DSE sport- és közösségi életéből.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Galéria"
        title="A jó közeg sokszor képekből is látszik."
        description="A galéria abban segít, hogy a családok és támogatók ne csak leírásból, hanem hangulatból, jelenlétből és közösségi pillanatokból is megismerjék a DSE-t."
      />

      <section className="py-18 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Képes válogatások"
            title="Pillanatok sportból, közösségből és közös élményekből."
            description="Az albumok azt mutatják meg, milyen élményhez kapcsolódhatnak a gyerekek, a családok és a támogatók."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {galleryAlbums.map((album) => (
              <Card key={album.title} className="overflow-hidden p-0">
                <div className={`min-h-48 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${album.accent}`} />
                <div className="px-6 py-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">{album.season}</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ink">{album.title}</h2>
                  <p className="mt-4 text-base leading-7 text-muted">{album.description}</p>
                  <p className="mt-4 text-sm font-medium text-ink">{album.countLabel}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Szeretnétek többet látni?</p>
                <p className="mt-4 text-base leading-7 text-ink">
                  A hírek és események között további közösségi alkalmakat és kapcsolódási pontokat találtok.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <ButtonLink href="/hirek" size="lg" variant="secondary">
                  Hírek
                </ButtonLink>
                <ButtonLink href="/esemenyek" size="lg" variant="ghost">
                  Események
                </ButtonLink>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
