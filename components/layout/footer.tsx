import Link from "next/link";

import { homepageContent } from "@/content/homepage";
import { siteFooterSections } from "@/content/site";

import { Container } from "../ui/container";

export function Footer() {
  return (
    <footer className="border-t border-brand-navy/10 bg-brand-navy py-10 text-white" data-editor-block="layout.footer">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start">
        <div className="max-w-2xl">
          <p className="font-heading text-xl font-semibold" data-editor-text="layout.footer.title">
            Tüskevár Diák Sportegyesület
          </p>
          <p className="mt-3 text-sm leading-7 text-white/72" data-editor-text="layout.footer.note">
            {homepageContent.footer.note}
          </p>
          <a
            className="mt-5 inline-flex text-sm font-medium text-brand-sky transition hover:text-white"
            data-editor-text="layout.footer.schoolLink"
            href={homepageContent.footer.schoolLink.href}
          >
            {homepageContent.footer.schoolLink.label}
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {siteFooterSections.map((section, sectionIndex) => (
            <div key={section.title} data-editor-block={`layout.footer.section.${sectionIndex}`}>
              <p
                className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-sky"
                data-editor-text={`layout.footer.section.${sectionIndex}.title`}
              >
                {section.title}
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/78">
                {section.links.map((item, linkIndex) => (
                  <Link
                    key={item.href}
                    className="transition hover:text-white"
                    data-editor-text={`layout.footer.section.${sectionIndex}.link.${linkIndex}`}
                    href={item.href}
                  >
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
