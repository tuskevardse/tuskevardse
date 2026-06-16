# 0 Ft-os uzemeltetesi modell

Ez a projekt statikus Cloudflare Pages oldalra van allitva, hogy a domain regisztracios dijan kivul ne legyen havi uzemeltetesi koltseg.

## Mit hasznal

- GitHub repository: forraskod es valtozaskezeles
- Cloudflare Pages Free: statikus build kiszolgalasa
- Google Workspace for Nonprofits: sajat domaines e-mail
- Mailto alapu kapcsolatfelvetel: nincs szerveroldali kuldesi koltseg
- Kliensoldali asszisztens: nincs OpenAI vagy mas fizetos API

## Cloudflare Pages beallitas

Az elso Cloudflare projekt letrehozasa utan a napi munka csak commit es push.

- Build command: `npm run build`
- Build output directory: `out`
- Root directory: `/`
- Environment variables: nincs kotelezo
- KV / D1 / R2 / Workers binding: nem kell

## Lokalis fejlesztes

```bash
npm ci
npm run dev
npm run lint
npm run build
```

Az `npm run build` statikus `out/` kimenetet keszit, ezt fogja a Cloudflare Pages kiszolgalni.

## Koltsegkontroll

Ne adjatok hozza az alabbiakat, ha a 0 Ft-os havi koltseg garantalt cel:

- fizetos AI API kulcs
- serverless adatbazis vagy KV kotelezo runtime-kent
- kulso e-mail kuldo API
- Cloudflare Workers kotelezo backend logika
- GitHub Actions fizetos runner igeny
