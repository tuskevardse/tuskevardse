export type CallToAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

export type Sport = {
  name: string;
  summary: string;
  audience: string;
  accent: string;
  badge: string;
};

export type Benefit = {
  title: string;
  description: string;
};

export type ValuePoint = {
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  source: string;
};

export type JoinStep = {
  step: string;
  title: string;
  description: string;
};

export type SupporterPoint = {
  title: string;
  description: string;
};

export type AiUseCase = {
  title: string;
  description: string;
};

export type DecisionStep = {
  step: string;
  title: string;
  description: string;
};

export const homepageContent = {
  hero: {
    eyebrow: "Tüskevár Diák Sportegyesület",
    title: "Sport azoknak is, akik még csak keresik a helyüket.",
    subtitle:
      "A Tüskevár DSE-ben nem kell eleve versenyző alkatnak lenni. Segítünk megtalálni, melyik sportág lehet jó első próbálkozás, mire számítsatok az első alkalmon, és hogyan tudtok kérdezni, mielőtt döntötök.",
    microcopy: ["Labdarúgás", "Kosárlabda", "Úszás", "Kenu", "Falmászás", "Túra"],
    openLoop: {
      eyebrow: "Nem kell most végleges döntés",
      title: "Elég, ha most egy sportág közelebb kerül hozzátok.",
      description:
        "Sok család először csak azt szeretné tudni, hogy a gyerek inkább csapatban, vízben, mászófalon vagy szabadban érezné-e jól magát. Innen már könnyebb kérdezni.",
      note: "Ha egy kérdés még nyitva marad, az teljesen rendben van. Erre való a kapcsolatfelvétel.",
      steps: [
        {
          step: "01",
          title: "Milyen helyzetben oldódik fel könnyebben?",
          description: "Van, aki csapatban kap lendületet, másnak az egyéni feladat vagy a víz ad nyugodtabb kezdést.",
        },
        {
          step: "02",
          title: "Mi lenne vállalható első próba?",
          description: "Nem kell egész szezonban gondolkodni. Elég tisztázni, milyen alkalomra merne szívesen eljönni.",
        },
        {
          step: "03",
          title: "Mit kell még tudnotok előtte?",
          description: "Korosztály, felszerelés, időpont, első alkalom: ezekre érdemes rákérdezni, mielőtt döntötök.",
        },
      ] satisfies DecisionStep[],
    },
    quickFacts: [
      "Több sportág, eltérő tempó és többféle első próba",
      "Szülőknek szóló válaszok az első kérdésekre",
      "Támogatóknak külön oldal a lehetséges segítségről",
    ],
    actions: [
      { label: "Sportágak megnézése", href: "/sportagak", variant: "primary" },
      { label: "Kérdés küldése", href: "/kapcsolat", variant: "secondary" },
    ] satisfies CallToAction[],
  },
  mission: {
    eyebrow: "Miért jött létre?",
    title: "A sport akkor működik jól, ha a gyerek szívesen megy vissza.",
    lead: [
      "A Tüskevár Diák Sportegyesület azoknak a gyerekeknek is helyet szeretne adni, akik még nem biztosak magukban, nem versenyzőként gondolnak magukra, vagy csak szeretnének rendszeresen mozogni.",
      "A cél egyszerű: legyen olyan sportolási lehetőség, ahol lehet kérdezni, lehet próbálkozni, és nem baj, ha valaki nem első nap találja meg a saját sportágát.",
    ],
    highlight:
      "Egy jó csapat értéke nem csak az eredményekben látszik, hanem abban is, ha egy gyerek újra kedvet kap a mozgáshoz.",
    supportingPoints: [
      "Nem csak az számít, ki ügyes elsőre, hanem az is, ki mer újra próbálkozni.",
      "A Tüskevár iskolai szemléletéből a sportban is fontos marad a személyes figyelem.",
      "Szülőként nem kell egyedül kitalálni mindent: kérdezhettek sportágról, első alkalomról és jelentkezésről is.",
    ],
  },
  sports: {
    eyebrow: "Sportágak",
    title: "Más gyereknek más sport ad jó kezdést.",
    description:
      "A labdarúgás, a kosárlabda, az úszás, a kenu, a falmászás és a túra más-más gyereket szólít meg. Van, akinek a csapat segít, másnak az egyéni feladat, a víz vagy a természet.",
    items: [
      {
        name: "Labdarúgás",
        badge: "Lendület, futás, csapatmunka",
        summary:
          "A labdarúgás sok futással, játékkal és gyors döntésekkel jár. Jó választás lehet, ha a gyerek szeret mozogni, figyelni a társakra és helyzeteket megoldani.",
        audience:
          "Azoknak ajánljuk, akik szeretnek futni, labdázni, kezdeményezni, és akiket húz magával a csapat tempója.",
        accent: "from-brand-blue/20 via-white to-brand-green/20",
      },
      {
        name: "Kosárlabda",
        badge: "Tempó, figyelem, koordináció",
        summary:
          "A kosárlabdában gyorsan váltanak a helyzetek: figyelni kell a labdára, a társakra és a pályára. A fejlődés sokszor apró mozdulatokban látszik meg.",
        audience:
          "Azoknak ajánljuk, akik bírják a tempót, szeretik, ha mindig történik valami a pályán, és megélik, amikor egy jó passz, gyors döntés vagy szép dobás élvezetessé teszi a játékot.",
        accent: "from-amber-200/70 via-white to-brand-sky/80",
      },
      {
        name: "Úszás",
        badge: "Állóképesség, vízbiztonság, technika",
        summary:
          "Az úszás kiszámítható, egyéni tempójú sport. Erősíti az állóképességet, javítja a mozgáskoordinációt, és segít magabiztosabban mozogni a vízben.",
        audience:
          "Azoknak ajánljuk, akiknek jólesik az ismétlődő gyakorlás, fontos a vízbiztonság, és szívesen haladnak lépésről lépésre.",
        accent: "from-cyan-200/70 via-white to-brand-sky/90",
      },
      {
        name: "Kenu",
        badge: "Természet, egyensúly, kitartás",
        summary:
          "A kenuzás vízhez, időjáráshoz és szabad térhez kötődik. Fejleszti az egyensúlyt, a kitartást és azt, hogy a gyerek hosszabb ideig is tudjon figyelni.",
        audience:
          "Azoknak ajánljuk, akik szeretnek víz közelében lenni, bírják a hosszabb terhelést, és jól érzik magukat szabadtéren.",
        accent: "from-emerald-200/70 via-white to-cyan-100/80",
      },
      {
        name: "Falmászás",
        badge: "Bátorság, koncentráció, testtudat",
        summary:
          "A falmászásnál minden útvonal egy feladat. A gyerek saját tempóban próbálkozik, közben figyelnie kell a testére, a fogásokra és a következő mozdulatra.",
        audience:
          "Azoknak ajánljuk, akik szeretik az egyéni kihívásokat, és örülnek, amikor egy-egy nehezebb mozdulat végre sikerül.",
        accent: "from-stone-200/70 via-white to-amber-100/90",
      },
      {
        name: "Túra",
        badge: "Állhatatosság, szabadtér, közös út",
        summary:
          "A túra nem verseny. Közös út, beszélgetés, kitartás és természetjárás. Jó belépő lehet azoknak is, akik nem a klasszikus csapatsportokban érzik jól magukat.",
        audience:
          "Azoknak ajánljuk, akik szeretnek szabadban lenni, nem bánják a hosszabb utat, és a felfedezés legalább annyira motiválja őket, mint a teljesítmény.",
        accent: "from-lime-200/70 via-white to-green-100/80",
      },
    ] satisfies Sport[],
  },
  benefits: {
    eyebrow: "Mit adhat a sport?",
    title: "A szülő sokszor apró változásokat vesz észre először.",
    description:
      "Nem minden változás látványos. Néha az is nagy dolog, ha a gyerek szívesebben indul el, bátrabban kérdez, vagy kevésbé fél attól, hogy hibázik.",
    items: [
      {
        title: "Közösséget",
        description:
          "A gyerekek megtapasztalhatják, milyen másokkal együtt figyelni, várni, segíteni és közösen játszani.",
      },
      {
        title: "Örömöt a mozgásban",
        description:
          "A cél az, hogy a mozgás ne csak kötelező program legyen, hanem valami, amihez jó érzés visszatérni.",
      },
      {
        title: "Figyelmet és biztatást",
        description:
          "Egy bátorabb próbálkozás, egy pontosabb mozdulat vagy egy jobb döntés sokat számít, ha valaki észreveszi.",
      },
      {
        title: "Rendszerességet",
        description:
          "A heti alkalmak segíthetnek abban, hogy a sport beépüljön a mindennapokba.",
      },
      {
        title: "Látható fejlődést",
        description:
          "Nem csak a győzelem számít. Egy jól sikerült passz, hosszabb táv vagy legyőzött félelem is fontos lehet.",
      },
      {
        title: "Önbizalmat",
        description:
          "Ha a gyerek látja, hogy valamiben ügyesebb lett, az az iskolában és a társas helyzetekben is erősítheti.",
      },
    ] satisfies Benefit[],
  },
  differentiator: {
    eyebrow: "Mitől más a Tüskevár DSE?",
    title:
      "Nem csak sportágat választotok. Azt is nézitek, hol tud a gyerek jól kezdeni.",
    intro:
      "A Tüskevár DSE az iskola világából indul, ezért fontos a személyes hang, az átlátható tájékoztatás és az, hogy a szülő merjen kérdezni. A teljesítmény fontos lehet, de az első lépésnél sokszor az számít, hogy a gyerek ne szorongva menjen be.",
    closing:
      "Ez különösen azoknál a gyerekeknél számít, akik még nem biztosak abban, hogy a sport nekik való.",
    points: [
      {
        title: "Keretek és biztonság",
        description: "Legyen világos, mikor van edzés, mit kell hozni, kinek lehet írni, és mire számíthat az első alkalmon.",
      },
      {
        title: "Személyes figyelem",
        description: "Fontos, hogy a gyerek ne vesszen el a csoportban, a szülő pedig kapjon érthető választ.",
      },
      {
        title: "Fejlődés nyomás nélkül",
        description: "Nem kell mindenkinek ugyanúgy indulnia. A bátorabb részvétel is lehet előrelépés.",
      },
    ] satisfies ValuePoint[],
  },
  testimonials: {
    eyebrow: "Szülői szempontok",
    title: "A bizalom abból épül, ha a család érti, mi fog történni.",
    description:
      "Itt nem idézeteket gyűjtünk, hanem azokat a kérdéseket vesszük komolyan, amelyekkel egy család elindul.",
    quoteHighlight:
      "Ha a gyerek szívesen megy, a szülő pedig tudja, mire számítson, a sport kevésbé lesz plusz teher.",
    items: [
      {
        quote: "Mi történik, ha a gyerek első alkalommal bizonytalan vagy visszahúzódó?",
        source: "Gyakori szülői kérdés",
      },
      {
        quote: "Kell-e előre sportágat választani, vagy lehet több irányról kérdezni?",
        source: "Döntés előtti kérdés",
      },
      {
        quote: "Milyen felszerelést, időpontot és csoportot érdemes elsőként tisztázni?",
        source: "Gyakorlati kérdés",
      },
    ] satisfies Testimonial[],
  },
  join: {
    eyebrow: "Csatlakozás",
    title: "Az első üzenetnek nem kell tökéletesnek lennie.",
    description:
      "Elég, ha megírod, ki miatt érdeklődsz, melyik sportág merült fel, és mi az, amit még nem láttok tisztán.",
    steps: [
      {
        step: "01",
        title: "Írjatok nekünk",
        description: "Írjátok meg a korosztályt, a sportági érdeklődést és azt, ha van valamilyen fontos szempont.",
      },
      {
        step: "02",
        title: "Választ kaptok az első kérdésekre",
        description: "Időpont, helyszín, felszerelés, próbaalkalom: ezekkel érdemes kezdeni.",
      },
      {
        step: "03",
        title: "Könnyebb lesz dönteni",
        description: "Ha már tudjátok, mire számítsatok, nyugodtabban lehet kiválasztani az első alkalmat.",
      },
    ] satisfies JoinStep[],
    actions: [
      { label: "Kapcsolatfelvétel", href: "/kapcsolat", variant: "primary" },
      { label: "Előbb kérdeznék", href: "/ai-asszisztens", variant: "ghost" },
    ] satisfies CallToAction[],
  },
  supporters: {
    eyebrow: "Támogatók és partnerek",
    title: "Egy sportegyesületet nem csak a pályán lehet erősíteni.",
    description:
      "Szülők, cégek és helyi partnerek pénzzel, eszközzel, szakmai segítséggel vagy szervezéssel is segíthetnek. A legjobb támogatás konkrét szükségletre ad választ.",
    items: [
      {
        title: "Anyagi támogatás",
        description: "Felszerelés, program, utazás vagy rendezvény támogatása előre egyeztetett célra.",
      },
      {
        title: "Tárgyi felajánlás",
        description: "Labdák, mezek, sporteszközök vagy rendezvényhez használható eszközök felajánlása.",
      },
      {
        title: "Szakmai együttműködés",
        description: "Olyan tudás, szolgáltatás vagy helyi kapcsolat, amely segíti a programok megszervezését.",
      },
      {
        title: "Önkéntes segítség",
        description: "Segítség eseményeknél, kommunikációban vagy háttérfeladatokban.",
      },
    ] satisfies SupporterPoint[],
    actions: [
      { label: "Támogatási lehetőségek", href: "/tamogatok", variant: "primary" },
      { label: "Támogatói érdeklődés küldése", href: "/kapcsolat", variant: "secondary" },
    ] satisfies CallToAction[],
  },
  aiAssistant: {
    eyebrow: "Kérdezz tőlünk",
    title: "Ha bizonytalanok vagytok, kezdjétek egy konkrét kérdéssel.",
    description:
      "A kérdező felület segít megfogalmazni, mit szeretnétek tisztázni sportágválasztás, első alkalom, jelentkezés vagy támogatás előtt. Nem helyettesíti a személyes egyeztetést.",
    useCases: [
      {
        title: "Sportágválasztási eligazítás",
        description: "Segít szűkíteni, hogy csapatsport, víz, mászás vagy túra lehet-e jobb első irány.",
      },
      {
        title: "Első alkalomra felkészítés",
        description: "Összeszedi, mit vigyetek, mire kérdezzetek rá, és hogyan készüljetek nyugodtabban.",
      },
      {
        title: "Szülői kérdések tisztázása",
        description: "Segít röviden megfogalmazni az első érdeklődő üzenetet.",
      },
      {
        title: "Támogatói ötletek",
        description: "Segít végiggondolni, milyen segítség lenne reális: pénz, eszköz, szakmai támogatás vagy önkéntes munka.",
      },
    ] satisfies AiUseCase[],
  },
  contact: {
    eyebrow: "Kapcsolat",
    title: "Írjatok, ha kérdeznétek vagy elindulnátok.",
    description:
      "Sportág, időpont, első alkalom, jelentkezés vagy támogatás: egy rövid üzenet elég az egyeztetés elindításához.",
    details: {
      school: "Tüskevár Általános Iskola és Gimnázium",
      address: "1041 Budapest, Lőrincz utca 40-42.",
      phoneLabel: "+36 1 274 4097",
      phoneHref: "tel:+3612744097",
      emailLabel: "tuskevar@tuskevar.edu.hu",
      emailHref:
        "mailto:tuskevar@tuskevar.edu.hu?subject=T%C3%BCskev%C3%A1r%20DSE%20%C3%A9rdekl%C5%91d%C3%A9s",
    },
    checklist: [
      "Ki iránt érdeklődtök és milyen korosztályról van szó",
      "Melyik sportág vagy támogatási forma áll legközelebb hozzátok",
      "Van-e bármi fontos szempont, amit jó előre tudnunk",
    ],
    actions: [
      {
        label: "Kapcsolatfelvétel",
        href: "/kapcsolat",
        variant: "primary",
      },
      { label: "Előbb kérdeznék", href: "/ai-asszisztens", variant: "secondary" },
    ] satisfies CallToAction[],
  },
  footer: {
    note:
      "A Tüskevár DSE oldalai abban segítenek, hogy szülőként, érdeklődőként vagy támogatóként gyorsan megtaláld, hol érdemes kezdeni.",
    schoolLink: {
      label: "Tüskevár Iskola",
      href: "https://tuskevariskola.net/",
    },
  },
};
