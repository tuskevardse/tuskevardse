import Link from "next/link";

import { siteNavigation, sitePrimaryNavigation } from "@/content/site";

import { BrandLockup } from "../ui/brand-lockup";
import { ButtonLink, buttonLinkClassName } from "../ui/button-link";
import { Container } from "../ui/container";

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-white/55 bg-white/78 backdrop-blur-xl"
      data-editor-block="layout.header"
    >
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link className="shrink-0" data-editor-block="layout.header.brandLink" href="/">
          <BrandLockup compact logoId="header-brand-logo" />
        </Link>

        <nav aria-label="Fő navigáció" className="hidden items-center gap-2 lg:flex">
          {sitePrimaryNavigation.map((item, index) => (
            <Link
              key={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted transition hover:bg-brand-sky/70 hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              data-editor-text={`layout.header.primaryNav.${index}`}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink data-editor-text="layout.header.contactCta" href="/kapcsolat" size="md" variant="primary">
            Kapcsolatfelvétel
          </ButtonLink>
        </div>

        <details className="group relative lg:hidden" data-editor-block="layout.header.mobileMenu">
          <summary
            className={buttonLinkClassName({ variant: "secondary", className: "list-none cursor-pointer px-4" })}
            data-editor-text="layout.header.mobileMenu.summary"
          >
            Menü
          </summary>
          <div className="absolute right-0 top-[calc(100%+0.75rem)] w-72 rounded-[1.5rem] border border-white/70 bg-white/95 p-3 shadow-[0_30px_80px_-36px_rgba(19,34,56,0.42)]">
            <nav aria-label="Mobil navigáció" className="flex flex-col gap-1">
              {siteNavigation.map((item, index) => (
                <Link
                  key={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-ink transition hover:bg-brand-sky/75"
                  data-editor-text={`layout.header.mobileNav.${index}`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink
                className="mt-2 w-full"
                data-editor-text="layout.header.mobileContactCta"
                href="/kapcsolat"
                variant="primary"
              >
                Kapcsolatfelvétel
              </ButtonLink>
            </nav>
          </div>
        </details>
      </Container>
    </header>
  );
}
