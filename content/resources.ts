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
    eyebrow: "Frissülő tartalom",
    description: "Klubhírek, közösségi pillanatok, fejlesztések és rövid beszámolók egy helyen.",
    audience: "szülőknek, érdeklődőknek, támogatóknak",
  },
  {
    title: "Edzésrend",
    href: "/edzesrend",
    eyebrow: "Átlátható működés",
    description: "Sportáganként, korosztályonként és helyszínenként rendezett edzésinformációk.",
    audience: "szülőknek és jelentkezőknek",
  },
  {
    title: "Dokumentumok",
    href: "/dokumentumok",
    eyebrow: "Letölthető anyagok",
    description: "Jelentkezési, tájékoztató és partneri dokumentumok strukturált formában.",
    audience: "szülőknek és partnereknek",
  },
  {
    title: "Események",
    href: "/esemenyek",
    eyebrow: "Közösségi naptár",
    description: "Közelgő sportnapok, nyílt alkalmak, családi események és klubpillanatok.",
    audience: "közösségnek és támogatóknak",
  },
  {
    title: "Galéria",
    href: "/galeria",
    eyebrow: "Élményarchívum",
    description: "Edzésekhez, mérkőzésnapokhoz és közösségi alkalmakhoz kapcsolódó válogatások.",
    audience: "szülőknek és közösségi követőknek",
  },
  {
    title: "Tudásbázis",
    href: "/tudasbazis",
    eyebrow: "Gyakorlati eligazítás",
    description: "GYIK, csatlakozási lépések, első alkalom, szülői és támogatói kérdések rendszerezve.",
    audience: "szülőknek, támogatóknak, új érdeklődőknek",
  },
];

export const newsItems: NewsItem[] = [
  {
    title: "Elindult a Tüskevár DSE új többoldalas tájékoztató felülete",
    category: "Fejlesztés",
    date: "2026. március 15.",
    summary:
      "A megújult oldal célja, hogy a szülők, jelentkezők és támogatók gyorsabban megtalálják a számukra fontos információkat, és könnyebben eljussanak a kapcsolatfelvételig.",
    audience: "minden érdeklődőnek",
  },
  {
    title: "Külön támogató oldal és partneri kapcsolódási pontok kerültek fel",
    category: "Közösség",
    date: "2026. március 12.",
    summary:
      "Az új támogató felület már nem csak általános bemutatkozás, hanem konkrét kapcsolódási formákat is összefoglal cégek, szülők és közösségi partnerek számára.",
    audience: "támogatóknak és partnereknek",
  },
  {
    title: "AI asszisztens a szülői kérdések első körös rendezésére",
    category: "Digitális fejlesztés",
    date: "2026. március 10.",
    summary:
      "Az AI asszisztens elsődlegesen arra készült, hogy segítsen összerendezni a sportágválasztással, az első alkalommal és a jelentkezéssel kapcsolatos kérdéseket.",
    audience: "szülőknek és új érdeklődőknek",
  },
  {
    title: "Bővült a bemutatott sportkínálat: úszás, kenu, falmászás és túra is bekerült",
    category: "Sportágak",
    date: "2026. március 16.",
    summary:
      "A Tüskevár DSE oldala már nem csak a klasszikus csapatsportokat mutatja be, hanem a vízi, mászó és természetközeli irányokat is, hogy többféle indulási út legyen látható a szülők számára.",
    audience: "szülőknek és új érdeklődőknek",
  },
];

export const trainingGroups: TrainingGroup[] = [
  {
    sport: "Labdarúgás",
    group: "Alsó tagozatos alapozó csoport",
    focus: "mozgásöröm, koordináció, csapatba érkezés",
    note: "Ajánlott azoknak, akik most ismerkednek a rendszeres egyesületi sporttal.",
    slots: [
      {
        day: "Hétfő",
        time: "16:00–17:15",
        location: "Tüskevár iskolaudvar / kültéri pálya",
        note: "Eső esetén beltéri mozgásos blokkra válthat.",
      },
      {
        day: "Szerda",
        time: "16:00–17:15",
        location: "Tüskevár iskolaudvar / kültéri pálya",
        note: "Szülői egyeztetés az első alkalom előtt ajánlott.",
      },
    ],
  },
  {
    sport: "Labdarúgás",
    group: "Felső tagozatos fejlesztő csoport",
    focus: "játékhelyzetek, ritmus, együttműködés",
    note: "Stabilabb edzésritmust kereső gyerekeknek és fejlődő játékosoknak.",
    slots: [
      {
        day: "Kedd",
        time: "17:00–18:30",
        location: "Külső partnerpálya / egyeztetés szerint",
        note: "Helyszínváltozásról külön értesítés megy.",
      },
      {
        day: "Csütörtök",
        time: "17:00–18:30",
        location: "Külső partnerpálya / egyeztetés szerint",
        note: "Edzés előtti érkezés 10 perccel ajánlott.",
      },
    ],
  },
  {
    sport: "Kosárlabda",
    group: "Belépő kosárlabda csoport",
    focus: "ritmus, alaptechnikák, sikerélmény",
    note: "Különösen jó első lépés lehet bizonytalanabb indulásnál is.",
    slots: [
      {
        day: "Hétfő",
        time: "17:15–18:30",
        location: "Tüskevár tornaterem",
        note: "Kényelmes váltócipő és kulacs javasolt.",
      },
      {
        day: "Csütörtök",
        time: "16:30–17:45",
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
        time: "17:30–19:00",
        location: "Tüskevár tornaterem",
        note: "Bemelegítés pontos kezdéssel indul.",
      },
      {
        day: "Péntek",
        time: "16:30–18:00",
        location: "Tüskevár tornaterem",
        note: "Heti összefoglaló és visszajelzés gyakran ezen az alkalmon történik.",
      },
    ],
  },
  {
    sport: "Úszás",
    group: "Úszó alapozó csoport",
    focus: "vízbiztonság, légzésritmus, fokozatos állóképesség",
    note: "Az első belépésnél a vízhez való viszony és az előzetes tapasztalat különösen fontos egyeztetési pont.",
    slots: [
      {
        day: "Kedd",
        time: "16:30–17:30",
        location: "partner uszoda / egyeztetés szerint",
        note: "A pontos helyszín és felszereléslista jelentkezés után kerül egyeztetésre.",
      },
      {
        day: "Péntek",
        time: "16:00–17:00",
        location: "partner uszoda / egyeztetés szerint",
        note: "Első alkalom előtt rövid szülői állapotfelmérés ajánlott.",
      },
    ],
  },
  {
    sport: "Kenu",
    group: "Vízisport előkészítő csoport",
    focus: "egyensúly, állóképesség, természetközeli fókusz",
    note: "Szezonális és időjárásfüggő sportág, ezért a részletek mindig külön egyeztetéshez kötöttek.",
    slots: [
      {
        day: "Szerda",
        time: "16:30–18:00",
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
        time: "17:00–18:15",
        location: "partner mászóterem",
        note: "A belépési és biztosítási részletek előzetes egyeztetést igényelnek.",
      },
    ],
  },
  {
    sport: "Túra",
    group: "Szabadtéri közösségi túracsoport",
    focus: "kitartás, természetkapcsolat, közös ritmus",
    note: "A túra alkalmak általában hétvégi vagy külön meghirdetett idősávban szerveződnek.",
    slots: [
      {
        day: "Szombat",
        time: "09:00–13:00",
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
        description: "Mit érdemes hozni, mire jó felkészülni és hogyan érdemes érkezni.",
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
    description: "Azok az anyagok, amelyek segítenek gyorsan megérteni a kapcsolódási lehetőségeket.",
    items: [
      {
        title: "Rövid partneri bemutató",
        format: "PDF",
        status: "hamarosan",
        description: "Összefoglaló a DSE küldetéséről, kapcsolódási pontjairól és együttműködési irányairól.",
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
    summary: "Közösségi mozgásos alkalom, ahol a sport és a klubközeg együtt mutatkozhat meg.",
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
    description: "Mozgás, figyelem, érkezés és apró sikerélmények az edzésközegből.",
    accent: "from-brand-blue/20 via-white to-brand-sky/80",
  },
  {
    title: "Mérkőzésnapi ritmus",
    season: "2025/26",
    countLabel: "12 történetkártya",
    description: "Azok a pillanatok, amikor a közös játék, a jelenlét és a csapatérzet egyszerre látszik.",
    accent: "from-amber-200/70 via-white to-brand-green/20",
  },
  {
    title: "Szülői és közösségi jelenlét",
    season: "2025/26",
    countLabel: "10 hangulatkép",
    description: "A háttérben működő figyelem, közös alkalmak és a klub köré szerveződő jelenlét.",
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
          "A legjobb első lépés a kapcsolat oldalon egy rövid érdeklődés elküldése, ahol megírható, melyik sportág érdekel benneteket, milyen korosztályról van szó, és van-e valamilyen fontos szempont.",
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
        question: "Hol jelenik meg az aktuális információ?",
        answer:
          "A cél az, hogy az edzésrend, hírek, események és dokumentumok külön oldalon, követhető struktúrában legyenek elérhetők, ne csak elszórt üzenetekben.",
      },
      {
        question: "Mitől más ez a közeg egy sima sportfelületnél?",
        answer:
          "Nem pusztán sportági információt ad, hanem segít a döntésben, az első érkezés előkészítésében és a hosszabb távú kapcsolódás megértésében is.",
      },
      {
        question: "Hogyan segíthet az AI asszisztens?",
        answer:
          "Első körben összerendezi a kérdéseket, segít a sportágválasztásban, az első alkalom előkészítésében és a következő lépés tisztázásában.",
      },
    ],
  },
  {
    title: "Támogatói tudásbázis",
    audience: "cégeknek és partnereknek",
    description: "Gyors eligazítás azoknak, akik nem csak nézőként, hanem partnerként kapcsolódnának.",
    questions: [
      {
        question: "Milyen formában lehet támogatni az egyesületet?",
        answer:
          "Anyagi, tárgyi, szakmai vagy szervezői támogatással. A fontos az, hogy a kapcsolódás illeszkedjen a DSE céljaihoz és a közeg valódi szükségleteihez.",
      },
      {
        question: "Mivel érdemes érkezni az első partneri beszélgetésre?",
        answer:
          "Az segít a legtöbbet, ha látszik, milyen típusú együttműködés áll közel hozzátok: egyszeri segítség, hosszabb távú partnerség, tárgyi felajánlás vagy közösségi jelenlét.",
      },
      {
        question: "Miért erős egy külön támogatói információs oldal?",
        answer:
          "Mert a partneri oldal nem csak kapcsolatot kér, hanem értelmes, strukturált belépési pontot ad a támogatóknak is.",
      },
    ],
  },
];
