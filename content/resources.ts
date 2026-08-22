export type ResourceCard = {
  title: string;
  href: string;
  eyebrow: string;
  description: string;
  audience: string;
};

export type NewsItem = {
  title: string;
  category: string;
  date: string;
  summary: string;
  audience: string;
};

export type TrainingSlot = {
  day: string;
  time: string;
  location: string;
  note: string;
};

export type TrainingGroup = {
  sport: string;
  group: string;
  focus: string;
  note: string;
  slots: TrainingSlot[];
};

export type DocumentItem = {
  title: string;
  format: string;
  status: string;
  description: string;
};

export type DocumentGroup = {
  title: string;
  audience: string;
  description: string;
  items: DocumentItem[];
};

export type EventItem = {
  title: string;
  date: string;
  location: string;
  audience: string;
  status: string;
  summary: string;
};

export type GalleryAlbum = {
  title: string;
  season: string;
  countLabel: string;
  description: string;
  accent: string;
};

export type KnowledgeBaseCategory = {
  title: string;
  audience: string;
  description: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
};

export const resourceHubCards: ResourceCard[] = [
  {
    title: "Hírek",
    href: "/hirek",
    eyebrow: "Friss információk",
    description: "Klubhírek, közösségi pillanatok és rövid beszámolók arról, mi történik a Tüskevár DSE körül.",
    audience: "szülőknek, érdeklődőknek, támogatóknak",
  },
  {
    title: "Edzésrend",
    href: "/edzesrend",
    eyebrow: "Időpontok és helyszínek",
    description: "Sportáganként és korosztályonként követhető edzésinformációk, első alkalom előtti megjegyzésekkel.",
    audience: "szülőknek és jelentkezőknek",
  },
  {
    title: "Dokumentumok",
    href: "/dokumentumok",
    eyebrow: "Fontos anyagok",
    description: "Jelentkezési, tájékoztató és partneri dokumentumok, amelyeket kérésre segítünk megtalálni.",
    audience: "szülőknek és partnereknek",
  },
  {
    title: "Események",
    href: "/esemenyek",
    eyebrow: "Közösségi alkalmak",
    description: "Közelgő sportnapok, nyílt alkalmak, családi események és klubpillanatok.",
    audience: "közösségnek és támogatóknak",
  },
  {
    title: "Galéria",
    href: "/galeria",
    eyebrow: "Képek programokról",
    description: "Képes válogatások edzésekről, mérkőzésnapokról és családi programokról.",
    audience: "szülőknek és közösségi követőknek",
  },
  {
    title: "Tudásbázis",
    href: "/tudasbazis",
    eyebrow: "Gyakori kérdések",
    description: "Csatlakozási lépések, első alkalom, szülői és támogatói kérdések rövid válaszokkal.",
    audience: "szülőknek, támogatóknak, új érdeklődőknek",
  },
];

export const newsItems: NewsItem[] = [
  {
    title: "Könnyebben megtaláljátok a Tüskevár DSE legfontosabb információit",
    category: "Tájékoztatás",
    date: "2026. március 15.",
    summary:
      "A sportágak, az edzésrend, a dokumentumok és a kapcsolatfelvétel külön oldalon érhetők el, hogy ne kelljen keresgélni az induláshoz szükséges információkat.",
    audience: "minden érdeklődőnek",
  },
  {
    title: "Többféle segítség is hasznos lehet a DSE számára",
    category: "Közösség",
    date: "2026. március 12.",
    summary:
      "Pénzügyi támogatás, sporteszköz, szakmai segítség vagy önkéntes munka is szóba jöhet. A támogatók oldalán összefoglaltuk, mivel érdemes kezdeni.",
    audience: "támogatóknak és partnereknek",
  },
  {
    title: "Gyors segítség a szülői kérdések első tisztázásához",
    category: "Segítség",
    date: "2026. március 10.",
    summary:
      "Ha még nem világos, melyik sportág lenne jó első lépés, mit érdemes kérdezni vagy hogyan készüljetek az első alkalomra, a kérdezési lehetőség segít összerakni az első üzenetet.",
    audience: "szülőknek és új érdeklődőknek",
  },
  {
    title: "Labdarúgás, kosárlabda, úszás, kenu, falmászás és túra is választható irány",
    category: "Sportágak",
    date: "2026. március 16.",
    summary:
      "Van, akinek a csapatjáték jó kezdés, másnak az úszás, a kenu, a falmászás vagy a túra. A sportágak oldala segít összehasonlítani az irányokat.",
    audience: "szülőknek és új érdeklődőknek",
  },
];

export const trainingGroups: TrainingGroup[] = [
  {
    sport: "Labdarúgás",
    group: "Alsó tagozatos alapozó csoport",
    focus: "mozgásöröm, koordináció, csapatjáték",
    note: "Ajánlott azoknak, akik most ismerkednek a rendszeres egyesületi sporttal.",
    slots: [
      {
        day: "Hétfő",
        time: "16:00-17:15",
        location: "Tüskevár iskolaudvar / kültéri pálya",
        note: "Eső esetén beltéri mozgásos blokkra válthat.",
      },
      {
        day: "Szerda",
        time: "16:00-17:15",
        location: "Tüskevár iskolaudvar / kültéri pálya",
        note: "Szülői egyeztetés az első alkalom előtt ajánlott.",
      },
    ],
  },
  {
    sport: "Labdarúgás",
    group: "Felső tagozatos fejlesztő csoport",
    focus: "játékhelyzetek, tempó, együttműködés",
    note: "Azoknak, akik már rendszeresebb edzést keresnek.",
    slots: [
      {
        day: "Kedd",
        time: "17:00-18:30",
        location: "Külső partnerpálya / egyeztetés szerint",
        note: "Helyszínváltozásról külön értesítés megy.",
      },
      {
        day: "Csütörtök",
        time: "17:00-18:30",
        location: "Külső partnerpálya / egyeztetés szerint",
        note: "Érdemes 10 perccel kezdés előtt odaérni.",
      },
    ],
  },
  {
    sport: "Kosárlabda",
    group: "Belépő kosárlabda csoport",
    focus: "alaptechnikák, figyelem, labdabiztonság",
    note: "Különösen jó első lépés lehet bizonytalanabb indulásnál is.",
    slots: [
      {
        day: "Hétfő",
        time: "17:15-18:30",
        location: "Tüskevár tornaterem",
        note: "Kényelmes váltócipő és kulacs javasolt.",
      },
      {
        day: "Csütörtök",
        time: "16:30-17:45",
        location: "Tüskevár tornaterem",
        note: "Első alkalom előtt rövid szülői egyeztetés hasznos.",
      },
    ],
  },
  {
    sport: "Kosárlabda",
    group: "Haladóbb vegyes csoport",
    focus: "játékolvasás, tempó, koncentráció",
    note: "Azoknak, akik szeretik a pörgést és a gyors visszajelzést adó helyzeteket.",
    slots: [
      {
        day: "Szerda",
        time: "17:30-19:00",
        location: "Tüskevár tornaterem",
        note: "Bemelegítés pontos kezdéssel indul.",
      },
      {
        day: "Péntek",
        time: "16:30-18:00",
        location: "Tüskevár tornaterem",
        note: "Heti összefoglaló és visszajelzés gyakran ezen az alkalmon történik.",
      },
    ],
  },
  {
    sport: "Úszás",
    group: "Úszó alapozó csoport",
    focus: "vízbiztonság, légzéstechnika, fokozatos állóképesség",
    note: "Az első belépésnél a vízhez való viszony és az előzetes tapasztalat különösen fontos egyeztetési pont.",
    slots: [
      {
        day: "Kedd",
        time: "16:30-17:30",
        location: "partner uszoda / egyeztetés szerint",
        note: "A pontos helyszín és felszereléslista jelentkezés után kerül egyeztetésre.",
      },
      {
        day: "Péntek",
        time: "16:00-17:00",
        location: "partner uszoda / egyeztetés szerint",
        note: "Első alkalom előtt rövid szülői állapotfelmérés ajánlott.",
      },
    ],
  },
  {
    sport: "Kenu",
    group: "Vízi sport előkészítő csoport",
    focus: "egyensúly, állóképesség, természetközeli fókusz",
    note: "Szezonális és időjárásfüggő sportág, ezért a részletek mindig külön egyeztetéshez kötöttek.",
    slots: [
      {
        day: "Szerda",
        time: "16:30-18:00",
        location: "külső vízisport helyszín",
        note: "Kiemelten fontos a megfelelő ruházat és a szülői előzetes egyeztetés.",
      },
    ],
  },
  {
    sport: "Falmászás",
    group: "Mászó alapozó csoport",
    focus: "koncentráció, testtudat, bátorság",
    note: "Különösen jó választás lehet egyéni fókuszt kedvelő gyerekeknek.",
    slots: [
      {
        day: "Csütörtök",
        time: "17:00-18:15",
        location: "partner mászóterem",
        note: "A belépési és biztosítási részletek előzetes egyeztetést igényelnek.",
      },
    ],
  },
  {
    sport: "Túra",
    group: "Szabadtéri közösségi túracsoport",
    focus: "kitartás, természetjárás, közös út",
    note: "A túra alkalmak általában hétvégi vagy külön meghirdetett idősávban szerveződnek.",
    slots: [
      {
        day: "Szombat",
        time: "09:00-13:00",
        location: "változó külső helyszínek",
        note: "Útvonal, terhelés és felszerelés mindig az adott alkalomhoz igazodik.",
      },
    ],
  },
];

export const documentGroups: DocumentGroup[] = [
  {
    title: "Szülői induló csomag",
    audience: "új érdeklődőknek",
    description: "Az első kapcsolatfelvételhez, csatlakozáshoz és az első alkalomhoz szükséges alapanyagok.",
    items: [
      {
        title: "Érdeklődési és jelentkezési adatlap",
        format: "PDF / online űrlap",
        status: "előkészítés alatt",
        description: "Rövid adatlap sportági érdeklődéssel, elérhetőségekkel és fontos szempontokkal.",
      },
      {
        title: "Első alkalom tájékoztató",
        format: "PDF",
        status: "hamarosan",
        description: "Mit érdemes hozni, mire jó felkészülni és mikor érdemes odaérni.",
      },
    ],
  },
  {
    title: "Egyesületi működés",
    audience: "szülőknek és közösségi tagoknak",
    description: "Az átlátható működést támogató alapdokumentumok és tájékoztatók.",
    items: [
      {
        title: "Házirend és jelenléti alapelvek",
        format: "PDF",
        status: "frissítés alatt",
        description: "Rövid, jól követhető keretek a rendszeres részvételhez és a közösségi működéshez.",
      },
      {
        title: "Kapcsolattartási rend",
        format: "PDF",
        status: "elérhető kérésre",
        description: "Kinek, milyen helyzetben és milyen csatornán érdemes jelezni.",
      },
    ],
  },
  {
    title: "Támogatói és partneri anyagok",
    audience: "cégeknek és támogatóknak",
    description: "Anyagok azoknak, akik támogatást vagy együttműködést ajánlanának fel.",
    items: [
      {
        title: "Rövid partneri bemutató",
        format: "PDF",
        status: "hamarosan",
        description: "Összefoglaló a DSE céljáról és a lehetséges együttműködési formákról.",
      },
      {
        title: "Támogatói egyeztetési sablon",
        format: "DOCX / PDF",
        status: "előkészítés alatt",
        description: "Segédanyag a célzottabb első partneri beszélgetésekhez.",
      },
    ],
  },
];

export const eventItems: EventItem[] = [
  {
    title: "Nyitott sportági bemutató délután",
    date: "2026. április 9.",
    location: "Tüskevár tornaterem és udvar",
    audience: "új érdeklődőknek és szülőknek",
    status: "közelgő",
    summary: "Labdarúgás, kosárlabda, úszás, kenu, falmászás és túra rövid bemutatása, kérdezési lehetőséggel és szülői tájékoztatással.",
  },
  {
    title: "Tavaszi közösségi sportnap",
    date: "2026. május 11.",
    location: "Tüskevár iskolaudvar",
    audience: "családoknak és támogatóknak",
    status: "tervezett",
    summary: "Mozgásos családi program, ahol több sportág és közös játék is helyet kaphat.",
  },
  {
    title: "Szülői információs est",
    date: "2026. március 27.",
    location: "iskolai közösségi tér",
    audience: "szülőknek",
    status: "regisztrációhoz kötött",
    summary: "Első kérdések, csatlakozási út és gyakorlati tudnivalók egy helyen.",
  },
];

export const galleryAlbums: GalleryAlbum[] = [
  {
    title: "Edzésből közösség",
    season: "2025/26",
    countLabel: "18 válogatott pillanat",
    description: "Mozgás, figyelem és látható fejlődés az edzésekről.",
    accent: "from-brand-blue/20 via-white to-brand-sky/80",
  },
  {
    title: "Mérkőzésnapi pillanatok",
    season: "2025/26",
    countLabel: "12 történetkártya",
    description: "Azok a pillanatok, amikor a közös játék, a figyelem és a csapatmunka egyszerre látszik.",
    accent: "from-amber-200/70 via-white to-brand-green/20",
  },
  {
    title: "Szülői és közösségi jelenlét",
    season: "2025/26",
    countLabel: "10 hangulatkép",
    description: "Szülők, segítők és családok a programok körül, a háttérben és a pálya szélén.",
    accent: "from-brand-green/20 via-white to-brand-sky/70",
  },
];

export const knowledgeBaseCategories: KnowledgeBaseCategory[] = [
  {
    title: "Első lépések",
    audience: "új érdeklődőknek",
    description: "Az indulás előtti legalapvetőbb kérdések röviden és tisztán.",
    questions: [
      {
        question: "Honnan érdemes elindítani a kapcsolatfelvételt?",
        answer:
          "A legjobb első lépés egy rövid érdeklődő üzenet elküldése, ahol megírjátok, melyik sportág érdekel benneteket, milyen korosztályról van szó, és van-e valamilyen fontos szempont.",
      },
      {
        question: "Mit vigyünk az első alkalomra?",
        answer:
          "Kényelmes sportfelszerelést, kulacsot, beltéri alkalomnál váltócipőt, és ha segít, előre összegyűjtött kérdéseket is a szülő részéről.",
      },
      {
        question: "Ha még nem dőlt el a sportág, akkor is lehet érdeklődni?",
        answer:
          "Igen. A Tüskevár DSE egyik fontos célja éppen az, hogy a szülő és a gyermek közösen, informáltabban tudjon dönteni a jó első irányról.",
      },
    ],
  },
  {
    title: "Szülői tájékozódás",
    audience: "szülőknek",
    description: "Azok a kérdések, amelyek a rendszeres részvételhez és a bizalomhoz kellenek.",
    questions: [
      {
        question: "Hol találjuk az aktuális információkat?",
        answer:
          "A hírek, az edzésrend, az események és a dokumentumok külön menüpontban érhetők el, hogy ne kelljen üzenetek között keresgélni a legfontosabb tudnivalókat.",
      },
      {
        question: "Mitől más ez egy egyszerű sportválasztásnál?",
        answer:
          "Nem csak sportágakról szól, hanem arról is, hogyan induljon el a gyerek, és mit érdemes előre tisztázni.",
      },
      {
        question: "Miben segít, ha előbb kérdeztek?",
        answer:
          "Segít összeszedni, mit szeretnétek tudni a sportágról, az első alkalomról vagy a jelentkezésről.",
      },
    ],
  },
  {
    title: "Támogatói tudásbázis",
    audience: "cégeknek és partnereknek",
    description: "Gyors eligazítás cégeknek, szülőknek és segítőknek.",
    questions: [
      {
        question: "Milyen formában lehet támogatni az egyesületet?",
        answer:
          "Anyagi, tárgyi, szakmai vagy szervezői támogatással. A legfontosabb, hogy a segítség konkrét szükséglethez illeszkedjen.",
      },
      {
        question: "Mivel érdemes készülni az első partneri beszélgetésre?",
        answer:
          "Az segít a legtöbbet, ha látszik, milyen típusú együttműködés áll közel hozzátok: egyszeri segítség, hosszabb távú partnerség, tárgyi felajánlás vagy közösségi jelenlét.",
      },
      {
        question: "Miért érdemes előre átgondolni a támogatási formát?",
        answer:
          "Mert így gyorsabban kiderül, hol tud valóban hasznosulni a segítség, és milyen együttműködés ad értéket a gyerekeknek, a közösségnek és a támogatónak is.",
      },
    ],
  },
];
