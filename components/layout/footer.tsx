import Link from "next/link";

import { homepageContent } from "@/content/homepage";
import { siteFooterSections } from "@/content/site";

import { Container } from "../ui/container";

export function Footer() {
  return (
    <footer className="border-t border-brand-navy/10 bg-brand-navy py-10 text-white">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start">
        <div className="max-w-2xl">
          <p className="font-heading text-xl font-semibold">Tüskevár Diák Sportegyesület</p>
          <p className="mt-3 text-sm leading-7 text-white/72">{homepageContent.footer.note}</p>
          <a className="mt-5 inline-flex text-sm font-medium text-brand-sky transition hover:text-white" href={homepageContent.footer.schoolLink.href}>
            {homepageContent.footer.schoolLink.label}
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {siteFooterSections.map((section) => (
            <div key={section.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-sky">{section.title}</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/78">
                {section.links.map((item) => (
                  <Link key={item.href} className="transition hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
}
