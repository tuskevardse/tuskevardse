# ChatGPT.com automatizálás tesztelése

Ez a dokumentum a kísérleti ChatGPT.com automatizálási megoldás használatát írja le.

## Mit csinál?

A script az `AI/ai-assistant-context-hu.md` háttéranyagot és a megadott kérdést egyetlen ChatGPT prompttá fűzi össze.

Három módon használható:

1. prompt fájl generálása,
2. prompt vágólapra másolása és ChatGPT.com megnyitása,
3. kísérleti Playwright automatizálás, amely megpróbálja beilleszteni a promptot a ChatGPT.com mezőbe.

## Biztos használat

```powershell
npm run chatgpt -- --question "Melyik sportág lenne jó egy 10 éves gyereknek, aki szeret szabadban lenni?" --copy --open
```

Ez:

- létrehozza az `AI/generated-chatgpt-prompt.md` fájlt,
- vágólapra másolja a promptot,
- megnyitja a ChatGPT.com oldalt.

Ezután kézzel beilleszthető vagy már a vágólapról használható a prompt.

## Kérdés fájlból

```powershell
npm run chatgpt -- --question-file kerdes.txt --copy
```

## Kísérleti böngésző-automatizálás

Ehhez Playwright kell:

```powershell
npm install -D playwright
```

Utána:

```powershell
npm run chatgpt -- --question "Mikor érdemes kapcsolatot felvenni a DSE-vel?" --browser
```

Ez megnyit egy böngészőt, ahol kézzel be kell jelentkezni ChatGPT-be, ha szükséges. A script megpróbálja beilleszteni a promptot a ChatGPT szövegmezőjébe.

Automatikus küldéshez:

```powershell
npm run chatgpt -- --question "Mikor érdemes kapcsolatot felvenni a DSE-vel?" --browser --send
```

## Fontos korlátok

- A ChatGPT.com felülete változhat, ezért a böngésző-automatizálás törékeny.
- A script nem tárol ChatGPT jelszót.
- A script nem kezeli automatikusan a bejelentkezést.
- A stabil, ajánlott mód továbbra is a prompt generálása és kézi használata.
- OpenAI API kulcsot nem használ.
- Billing vagy bankkártya nem szükséges ehhez a prompt-generálós megoldáshoz.

## Generált fájlok

Az `AI/generated-*.md` fájlokat a `.gitignore` kizárja, mert ezek egyszeri kérdésekből készült munkafájlok.
