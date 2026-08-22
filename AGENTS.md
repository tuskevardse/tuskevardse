# AGENTS.md

## Projekt alapelv

A Tüskevár DSE honlap statikus Next.js exportként működik GitHub + Cloudflare alapon. A cél a havi 0 Ft-os üzemeltetés, saját webszerver, backend, adatbázis és fizetős runtime nélkül.

## Fejlesztési szabályok

- Módosítás után futtasd: `npm run lint`.
- Nagyobb vagy deploy előtti módosítás után futtasd: `npm run build`.
- Teljes tartalmi refaktor vagy publikálás előtti tartalmi ellenőrzés esetén futtasd: `npm run content:audit`.
- Ne adj hozzá szerveroldali vagy fizetős szolgáltatást külön jóváhagyás nélkül.
- Ne commitolj titkokat, tokeneket, jelszavakat vagy privát Google/Cloudflare/GitHub adatokat.
- A `docs/DNS Manager - ZeroTime Services Kft_.pdf` fájlt ne add hozzá automatikusan a commitokhoz.

## Szerkesztői azonosítók

A honlap látogatói felületén a szerkeszthető elemeket `data-editor-block` és `data-editor-text` attribútumok azonosítják. Ezekre a humán szerkesztő Codex-kérésekben hivatkozhat, például: `home.hero.title`, `home.sports.item.1.audience`.

- Meglévő `data-editor-*` azonosítót ne törölj és ne nevezz át indokolatlanul.
- Új tartalmi blokkhoz adj `data-editor-block` attribútumot.
- Új szerkeszthető szöveghez, címhez, listaelemhez, gombhoz vagy űrlapfelirathoz adj `data-editor-text` attribútumot.
- Az azonosító legyen stabil, rövid, angol alapú, pontokkal tagolt, és ne függjön a magyar szövegtől.
- Listaelemeknél indexelt azonosítót használj, például `sports.item.0.title`.

Használat böngészőben: `Ctrl + kattintás` megjeleníti az azonosítót, `Ctrl + Shift + kattintás` másolja is. Részletek: `docs/07-szerkesztoi-azonositok-hu.html`.

## Tartalmi minőség

Publikus magyar szöveg módosítása előtt olvasd el a `docs/content/` alatti összes tartalmi útmutatót. A meglévő szöveg forrásanyag, nem védett megfogalmazás: a hiteles tényeket, URL-eket és stabil `data-editor-*` azonosítókat meg kell őrizni, de a redundáns, absztrakt vagy nem látogatóbarát szöveg átírható, összevonható vagy törölhető.

Ne találj ki hiányzó tényt; jelöld `NEEDS_VERIFICATION` megjegyzéssel. Teljes tartalmi refaktor esetén először a teljes publikus oldalt és információs architektúrát auditáld, csak utána írj mondatszinten. A végén fusson: `npm run lint`, `npm run build`, `npm run content:audit`.
