export type SiteNavigationItem = {
  label: string;
  href: string;
};

export type SiteNavigationSection = {
  title: string;
  links: SiteNavigationItem[];
};

export const siteNavigation: SiteNavigationItem[] = [
  { label: "Főoldal", href: "/" },
  { label: "Rólunk", href: "/rolunk" },
  { label: "Sportágak", href: "/sportagak" },
  { label: "Hírek", href: "/hirek" },
  { label: "Edzésrend", href: "/edzesrend" },
  { label: "Dokumentumok", href: "/dokumentumok" },
  { label: "Események", href: "/esemenyek" },
  { label: "Galéria", href: "/galeria" },
  { label: "Tudásbázis", href: "/tudasbazis" },
  { label: "Támogatók", href: "/tamogatok" },
  { label: "AI prompt", href: "/ai-prompt" },
  { label: "Kapcsolat", href: "/kapcsolat" },
  { label: "Kérdezz tőlünk", href: "/ai-asszisztens" },
];

export const sitePrimaryNavigation: SiteNavigationItem[] = [
  { label: "Rólunk", href: "/rolunk" },
  { label: "Sportágak", href: "/sportagak" },
  { label: "Hírek", href: "/hirek" },
  { label: "Edzésrend", href: "/edzesrend" },
  { label: "Tudásbázis", href: "/tudasbazis" },
  { label: "Támogatók", href: "/tamogatok" },
  { label: "AI prompt", href: "/ai-prompt" },
  { label: "Kapcsolat", href: "/kapcsolat" },
];

export const siteFooterSections: SiteNavigationSection[] = [
  {
    title: "Tájékozódás",
    links: [
      { label: "Főoldal", href: "/" },
      { label: "Hírek", href: "/hirek" },
      { label: "Edzésrend", href: "/edzesrend" },
      { label: "Dokumentumok", href: "/dokumentumok" },
    ],
  },
  {
    title: "Közösség",
    links: [
      { label: "Események", href: "/esemenyek" },
      { label: "Galéria", href: "/galeria" },
      { label: "Sportágak", href: "/sportagak" },
      { label: "Rólunk", href: "/rolunk" },
    ],
  },
  {
    title: "Segítség",
    links: [
      { label: "Tudásbázis", href: "/tudasbazis" },
      { label: "AI prompt", href: "/ai-prompt" },
      { label: "Támogatók", href: "/tamogatok" },
      { label: "Kapcsolat", href: "/kapcsolat" },
      { label: "Kérdezz tőlünk", href: "/ai-asszisztens" },
    ],
  },
];

export const siteContact = {
  school: "Tüskevár Általános Iskola és Gimnázium",
  association: "Tüskevár Diák Sportegyesület",
  address: "1041 Budapest, Lőrincz utca 40-42.",
  phoneLabel: "+36 1 274 4097",
  phoneHref: "tel:+3612744097",
  emailLabel: "tuskevar@tuskevar.edu.hu",
  emailBaseHref: "mailto:tuskevar@tuskevar.edu.hu",
  emailHref: "mailto:tuskevar@tuskevar.edu.hu?subject=T%C3%BCskev%C3%A1r%20DSE%20%C3%A9rdekl%C5%91d%C3%A9s",
  websiteLabel: "tuskevariskola.net",
  websiteHref: "https://tuskevariskola.net/",
};

export const siteSeo = {
  title: "Tüskevár DSE - Tüskevár Diák Sportegyesület",
  description:
    "A Tüskevár Diák Sportegyesület befogadó, bizalomépítő sportközösséget épít labdarúgással, kosárlabdával, úszással, kenuval, falmászással és túrával, szülői tájékoztatással és támogatói együttműködési lehetőségekkel.",
  ogTitle: "Tüskevár DSE - ahol a mozgásból közösség, a közösségből önbizalom lesz",
  ogDescription:
    "Labdarúgás, kosárlabda, úszás, kenu, falmászás, túra, közösség, szülői tájékoztatás és támogatási lehetőségek egy helyen.",
  keywords: [
    "Tüskevár DSE",
    "Tüskevár Diák Sportegyesület",
    "Tüskevár Iskola sport",
    "iskolai sportegyesület Budapest",
    "gyerek sport Budapest",
    "labdarúgás gyerekeknek Budapest",
    "kosárlabda gyerekeknek Budapest",
    "úszás gyerekeknek Budapest",
    "kenu gyerekeknek Budapest",
    "falmászás gyerekeknek Budapest",
    "túra gyerekeknek Budapest",
    "edzésrend Budapest gyerekeknek",
    "sportegyesület hírek",
    "sportegyesület dokumentumok",
    "sportesemények iskola",
    "sportegyesület tudásbázis",
    "diák sportegyesület támogatás",
    "iskolai sport szponzoráció",
    "szülői tájékoztatás sportegyesület",
  ],
};
