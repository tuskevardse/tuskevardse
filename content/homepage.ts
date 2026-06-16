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
    title: "Ahol a mozgásból közösség, a közösségből önbizalom lehet.",
    subtitle:
      "A Tüskevár DSE azért épül, hogy a sport ne csak edzés legyen, hanem biztonságos érkezés, fokozatos fejlődés és valódi közösségi élmény. A szülők világos információt, a gyerekek bátorító közeget, a támogatók pedig értelmes kapcsolódási pontokat kapnak.",
    microcopy: ["Labdarúgás", "Kosárlabda", "Úszás", "Kenu", "Falmászás", "Túra"],
    openLoop: {
      eyebrow: "Nem kell most végleges döntés",
      title: "Elég, ha most csak a következő kérdésre találtok választ.",
      description:
        "A legtöbb család nem ott akad el, hogy nincs elég információja, hanem ott, hogy túl korán akar végleges sportágat választani. Itt most elég egy kisebb következő lépést megtenni.",
      note: "Ha ebből csak az első pontra tudtok válaszolni, már érdemes továbblépni a sportágoldalra vagy az AI asszisztenshez.",
      steps: [
        {
          step: "01",
          title: "Mi illene jobban?",
          description: "Elég annyit látni, hogy inkább csapat, víz, mászás vagy természetközeli mozgás lenne jó első irány.",
        },
        {
          step: "02",
          title: "Mi adna jó első élményt?",
          description: "Nem a teljes szezon a kérdés, hanem az, milyen közegben tudna a gyerek könnyebben megérkezni.",
        },
        {
          step: "03",
          title: "Mi az első kérdés, amit feltennétek?",
          description: "Ha ez megvan, az AI és a kapcsolatfelvétel már nem nagy ugrás, hanem természetes folytatás lesz.",
        },
      ] satisfies DecisionStep[],
    },
    quickFacts: [
      "Befogadó, emberközpontú sportközeg a Tüskevár szemléletéhez igazítva",
      "Átlátható út a sportágválasztástól a kapcsolatfelvételig",
      "Külön támogató és partneri információk szülőknek, segítőknek, cégeknek",
    ],
    actions: [
      { label: "Sportágak megismerése", href: "/sportagak", variant: "primary" },
      { label: "Csatlakozom / Érdeklődöm", href: "/kapcsolat", variant: "secondary" },
    ] satisfies CallToAction[],
  },
  mission: {
    eyebrow: "Miért jött létre?",
    title: "Van, amikor a sport ott kezdődik, hogy végre jó érzés legyen megérkezni.",
    lead: [
      "A Tüskevár Diák Sportegyesület azért jött létre, hogy a gyerekek ne csak mozogjanak, hanem tartozzanak is valahová: egy csapathoz, egy ritmushoz, egy olyan közeghez, ahol számít a személyes figyelem.",
      "A cél nem az, hogy mindenki ugyanúgy induljon, hanem az, hogy mindenki el tudjon indulni. Ezért a sport nálunk közösség, kapaszkodó, szokás és öröm egyszerre.",
    ],
    highlight:
      "A jó csapat sokszor nem a tabellán kezdődik, hanem annál a pontnál, amikor egy gyerek újra kedvet kap a mozgáshoz.",
    supportingPoints: [
      "A fejlődést nem csak eredményben, hanem részvételben, önbizalomban és kapcsolódásban is mérjük.",
      "A Tüskevár iskolai szemlélete a sportban is tovább él: figyelem, bizalom, személyesség.",
      "A szülőknek nem csak jelentkezési felületet, hanem eligazodást is adunk a döntéshez.",
    ],
  },
  sports: {
    eyebrow: "Sportágak",
    title: "Többféle sportirány, többféle belépési élmény, közös emberközpontú szemlélettel.",
    description:
      "A Tüskevár DSE sportkínálata nem egyetlen karakterre épül. A labdarúgás, a kosárlabda, az úszás, a kenu, a falmászás és a túra eltérő élményt adnak, ezért a választásnál az is fontos, milyen közeg, ritmus és kihívás illik a gyermekhez.",
    items: [
      {
        name: "Labdarúgás",
        badge: "Lendület, ritmus, csapatmunka",
        summary:
          "A labdarúgás egyszerre ad mozgást, játékosságot, gyors helyzetfelismerést és sok közös élményt. Segít levezetni az energiát, miközben megtanít együtt gondolkodni és alkalmazkodni.",
        audience:
          "Azoknak ajánljuk, akik szeretnek futni, játszani, kezdeményezni, és motiválja őket a csapat közös lendülete.",
        accent: "from-brand-blue/20 via-white to-brand-green/20",
      },
      {
        name: "Kosárlabda",
        badge: "Tempó, figyelem, koordináció",
        summary:
          "A kosárlabda fejleszti a koncentrációt, a koordinációt, a ritmusérzéket és a gyors döntéshozást. Minden kis előrelépés azonnal érezhető, ezért sok gyereknek erős sikerélményforrás.",
        audience:
          "Azoknak ajánljuk, akik szeretik a pörgést, a változatos helyzeteket, és örülnek annak, amikor a mozgás és a gondolkodás egyszerre áll össze játékká.",
        accent: "from-amber-200/70 via-white to-brand-sky/80",
      },
      {
        name: "Úszás",
        badge: "Állóképesség, vízbiztonság, ritmus",
        summary:
          "Az úszás egyszerre fejleszt mozgáskoordinációt, állóképességet és testtudatot. Sok gyereknek azért jó irány, mert egyéni fókuszt ad, miközben stabil, ismételhető fejlődési pályát kínál.",
        audience:
          "Azoknak ajánljuk, akiknek jót tesz a kiszámítható ritmus, fontos a vízbiztonság, és szívesen fejlődnek fokozatos, jól mérhető lépésekben.",
        accent: "from-cyan-200/70 via-white to-brand-sky/90",
      },
      {
        name: "Kenu",
        badge: "Természet, egyensúly, kitartás",
        summary:
          "A kenuzás különleges kapcsolatot ad a természettel, miközben erősíti az egyensúlyérzéket, a kitartást és a figyelmet. Jó választás lehet azoknak, akik a szabadban találnak könnyebben fókuszt.",
        audience:
          "Azoknak ajánljuk, akik szeretnek víz közelében lenni, nyitottak az állóképességi kihívásokra, és motiválja őket a természetes környezetben végzett mozgás.",
        accent: "from-emerald-200/70 via-white to-cyan-100/80",
      },
      {
        name: "Falmászás",
        badge: "Bátorság, koncentráció, testtudat",
        summary:
          "A falmászás egyszerre dolgozik a koncentrációval, a problémamegoldással és a bátorsággal. Különösen erős lehet azoknál a gyerekeknél, akik szeretnek saját tempóban, mégis kihívást jelentő helyzetekben fejlődni.",
        audience:
          "Azoknak ajánljuk, akik szeretik a fókuszált, egyéni kihívásokat, és örülnek annak, amikor egy-egy kisebb akadály leküzdése gyors sikerélményt ad.",
        accent: "from-stone-200/70 via-white to-amber-100/90",
      },
      {
        name: "Túra",
        badge: "Állhatatosság, természetkapcsolat, közös élmény",
        summary:
          "A túra nem versenyhelyzetből indul, hanem közös ritmusból, jelenlétből és kitartásból. Erős közösségi és természetkapcsolati élményt adhat, miközben mozgásba hozza azokat is, akik nem feltétlenül a klasszikus csapatsportokban találják meg magukat.",
        audience:
          "Azoknak ajánljuk, akiknek fontos a szabad tér, a közös útélmény, és jól kapcsolódnak olyan mozgáshoz, ahol a teljesítmény mellett a felfedezés is hangsúlyos.",
        accent: "from-lime-200/70 via-white to-green-100/80",
      },
    ] satisfies Sport[],
  },
  benefits: {
    eyebrow: "Mit adhat a sport?",
    title: "És itt jön az, ami a szülőnek is hamar láthatóvá válik.",
    description:
      "A sport akkor válik megtartó erővé, ha a gyerek nem csak mozog, hanem közben kapaszkodót, ritmust és saját sikerélményeket is talál benne.",
    items: [
      {
        title: "Közösséget",
        description:
          "A gyerekek nem elszigetelten teljesítenek, hanem egy csapat részeként tanulnak figyelni, kapcsolódni és együtt haladni.",
      },
      {
        title: "Örömöt a mozgásban",
        description:
          "A cél az, hogy a mozgás ne kötelezettség, hanem visszaváró élmény legyen, amihez jó érzés újra és újra csatlakozni.",
      },
      {
        title: "Figyelmet és biztatást",
        description:
          "A fejlődés gyakran apró lépésekből áll. Ezek akkor válnak valódi építőkővé, ha valaki észreveszi és megerősíti őket.",
      },
      {
        title: "Rendszerességet",
        description:
          "A heti ritmus, az ismétlődő találkozások és a kiszámítható keretek sok gyerek számára önmagukban is stabilizálóak.",
      },
      {
        title: "Sikerélményt",
        description:
          "Nem csak a nagy eredmények számítanak. Egy jól sikerült helyzet, pontosabb mozdulat vagy bátrabb részvétel is fontos fordulópont lehet.",
      },
      {
        title: "Önbizalmat",
        description:
          "Ha a gyerek megtapasztalja, hogy képes fejlődni, annak hatása a pályán túl is megjelenik: az iskolában, a kapcsolatokban és a mindennapi jelenlétben.",
      },
    ] satisfies Benefit[],
  },
  differentiator: {
    eyebrow: "Mitől más a Tüskevár DSE?",
    title:
      "Nem csak az a kérdés, milyen sportot választ a gyerek. Az is, milyen közeg fogja megtartani benne.",
    intro:
      "A Tüskevár Iskola publikus oldala is egy személyes, kapcsolódásra építő, közösségi kultúrát mutat: hírekkel, szülői jelenléttel, eseményekkel és közös élményekkel. A DSE ezt az emberközpontú karaktert fordítja le a sport nyelvére.",
    closing:
      "A jó közeg itt nem kiegészítő elem, hanem az egyik legerősebb sportfejlesztési eszköz.",
    points: [
      {
        title: "Keretek és biztonság",
        description: "Kiszámítható működés, követhető információk és olyan közeg, ahol a gyerek tudja, mire számíthat.",
      },
      {
        title: "Személyes figyelem",
        description: "Fontos, hogy a gyerek ne vesszen el a tömegben, a szülő pedig ne maradjon bizonytalanságban.",
      },
      {
        title: "Fejlődés nyomás nélkül",
        description: "A sport itt lehetőség a fokozatos kibontakozásra, nem puszta elvárásrendszer.",
      },
    ] satisfies ValuePoint[],
  },
  testimonials: {
    eyebrow: "Szülői bizalom",
    title: "A támogató közeg általában nem bemondásra működik. Hanem érezhetően.",
    description:
      "A Tüskevár iskolai közegének nyilvános kommunikációjából is az látszik, hogy a közösség, a párbeszéd és a személyes jelenlét fontos érték. Egy sportegyesület akkor hiteles, ha ezt a pályán kívül is képviseli.",
    quoteHighlight:
      "Ha a gyerek szívesen megy, a szülő pedig érti, mi történik vele, akkor a sport nem plusz teher lesz, hanem valódi erőforrás.",
    items: [
      {
        quote: "A jó sportközeg számunkra azt jelenti, hogy a fejlődés és az emberi figyelem egyszerre van jelen.",
        source: "Szülői nézőpont",
      },
      {
        quote: "Nem csak az eredmény számít, hanem az is, hogyan érkezik haza a gyerek egy-egy alkalom után.",
        source: "Szülői nézőpont",
      },
      {
        quote: "Az átlátható kommunikáció a bizalom része, nem csak kiegészítő szolgáltatás.",
        source: "Közösségi elvárás",
      },
    ] satisfies Testimonial[],
  },
  join: {
    eyebrow: "Csatlakozás",
    title: "A következő lépés legyen egyszerű, nyugodt és emberi.",
    description:
      "Az első kapcsolatfelvételnél nem adminisztratív falakra van szükség, hanem világos tájékoztatásra és olyan kérdésekre, amelyek tényleg segítenek eldönteni a jó indulást.",
    steps: [
      {
        step: "01",
        title: "Írjatok nekünk",
        description: "Jelezzétek, melyik sportág érdekel benneteket, milyen korosztályról van szó, és mi lenne fontos a gyermek szempontjából.",
      },
      {
        step: "02",
        title: "Segítünk eligazodni",
        description: "Átbeszéljük, melyik sportág, milyen indulás és milyen első lépés lehet a legjobb döntés.",
      },
      {
        step: "03",
        title: "Elindul a kapcsolódás",
        description: "A gyermek megismeri a közeget, a szülő pedig nem kívülről követi az egészet, hanem értelmezhető kereteket kap hozzá.",
      },
    ] satisfies JoinStep[],
    actions: [
      { label: "Kapcsolatfelvétel", href: "/kapcsolat", variant: "primary" },
      { label: "Kérdezek az AI asszisztenstől", href: "/ai-asszisztens", variant: "ghost" },
    ] satisfies CallToAction[],
  },
  supporters: {
    eyebrow: "Támogatók és partnerek",
    title: "Egy sportegyesületet nem csak a pályán lehet erősíteni.",
    description:
      "A Tüskevár DSE oldalán külön helyet kapnak azok a lehetőségek is, ahol cégek, szülők, közösségi partnerek vagy önkéntesek kapcsolódhatnak. A támogatás lehet anyagi, tárgyi, szakmai vagy szervezői jellegű is.",
    items: [
      {
        title: "Anyagi támogatás",
        description: "Edzésfeltételek, felszerelések, programok vagy közösségi események támogatása átlátható, értelmes célok mentén.",
      },
      {
        title: "Tárgyi felajánlás",
        description: "Sporteszközök, mezek, utazási vagy rendezvényhez kapcsolódó hozzájárulások, amelyek közvetlenül hasznosulhatnak.",
      },
      {
        title: "Szakmai együttműködés",
        description: "Céges, civil vagy helyi közösségi partnerségek, amelyek élményeket, tudást vagy hosszabb távú stabilitást hozhatnak.",
      },
      {
        title: "Önkéntes segítség",
        description: "Rendezvények, szervezés, kommunikáció vagy kapcsolati támogatás ott, ahol egy kis plusz jelenlét is sokat számít.",
      },
    ] satisfies SupporterPoint[],
    actions: [
      { label: "Támogatói oldal megnyitása", href: "/tamogatok", variant: "primary" },
      { label: "Támogatói érdeklődés küldése", href: "/kapcsolat", variant: "secondary" },
    ] satisfies CallToAction[],
  },
  aiAssistant: {
    eyebrow: "AI asszisztens",
    title: "A beépített AI akkor hasznos, ha konkrét bizonytalanságokat old fel.",
    description:
      "A Tüskevár DSE oldalán az AI asszisztens nem általános chatdísz, hanem olyan segítő felület lehet, amely a szülőket, érdeklődőket és támogatókat gyors, értelmes válaszokkal viszi közelebb a következő lépéshez.",
    useCases: [
      {
        title: "Sportágválasztási eligazítás",
        description: "Kérdésekre válaszolhat arról, hogy a gyermek temperamentuma, érdeklődése vagy első sportélménye alapján melyik sportág lehet közelebb hozzá.",
      },
      {
        title: "Első alkalomra felkészítés",
        description: "Segíthet összerakni, mit érdemes vinni, mire érdemes készülni, hogyan lehet csökkenteni az első alkalommal járó bizonytalanságot.",
      },
      {
        title: "Szülői GYIK és összefoglalók",
        description: "Egyszerűen elmagyarázhatja a jelentkezési lépéseket, a kapcsolatfelvétel menetét, valamint összefoglalhatja a sportágak közötti fő különbségeket.",
      },
      {
        title: "Támogatói kapcsolódási ötletek",
        description: "Ötleteket adhat arra, hogyan tud egy cég, szülő vagy helyi partner a DSE-hez illeszkedő módon kapcsolódni és támogatást adni.",
      },
    ] satisfies AiUseCase[],
  },
  contact: {
    eyebrow: "Kapcsolat",
    title: "Lehet, hogy itt kezdődik valami, amire most valóban szükség van.",
    description:
      "Ha kérdésetek van a sportágakról, a csatlakozásról, a támogatási lehetőségekről vagy csak szeretnétek tisztábban látni, vegyétek fel velünk a kapcsolatot.",
    details: {
      school: "Tüskevár Általános Iskola és Gimnázium",
      address: "1041 Budapest, Lőrincz utca 40–42.",
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
        label: "Kapcsolati oldal",
        href: "/kapcsolat",
        variant: "primary",
      },
      { label: "AI asszisztens", href: "/ai-asszisztens", variant: "secondary" },
    ] satisfies CallToAction[],
  },
  footer: {
    note:
      "Az oldal tudatosan többoldalas alapként készült: később hírekkel, edzésrenddel, dokumentumokkal, eseményekkel, galériával és tudásbázissal bővíthető, miközben a szülői és támogatói tájékozódást is erősíti.",
    schoolLink: {
      label: "Tüskevár Iskola",
      href: "https://tuskevariskola.net/",
    },
  },
};
