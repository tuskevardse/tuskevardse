import { createSign } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const DEFAULT_CREDENTIALS_PATH = ".secrets/google-calendar-service-account.json";
const DEFAULT_TIMEZONE = "Europe/Budapest";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const CALENDAR_API_BASE = "https://www.googleapis.com/calendar/v3";
const CALENDAR_SCOPE = "https://www.googleapis.com/auth/calendar.events";

function fail(message) {
  console.error(`Hiba: ${message}`);
  process.exit(1);
}

function base64Url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");
}

function parseArgs(argv) {
  const [command, ...rest] = argv;
  const args = { _: [] };

  for (let index = 0; index < rest.length; index += 1) {
    const item = rest[index];
    if (!item.startsWith("--")) {
      args._.push(item);
      continue;
    }

    const key = item.slice(2);
    const next = rest[index + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
      continue;
    }

    args[key] = next;
    index += 1;
  }

  return { command, args };
}

function showHelp() {
  console.log(`
Google Calendar eseménykezelő

Környezeti változók:
  GOOGLE_CALENDAR_ID                 Alapértelmezés: tuskevardse@gmail.com
  GOOGLE_APPLICATION_CREDENTIALS     Alapértelmezés: .secrets/google-calendar-service-account.json

Parancsok:
  npm run calendar -- list --from 2026-06-01 --to 2026-07-01
  npm run calendar -- create --title "Nyílt sportnap" --date 2026-06-20 --start 15:00 --end 17:00 --location "Tüskevár iskolaudvar" --description "Nyilvános program."
  npm run calendar -- update --id EVENT_ID --title "Új cím" --date 2026-06-21 --start 16:00 --end 18:00
  npm run calendar -- delete --id EVENT_ID

Egész napos esemény:
  npm run calendar -- create --title "Családi sportnap" --date 2026-06-20 --all-day --location "Tüskevár iskolaudvar"
`);
}

function loadCredentials() {
  const credentialsPath = resolve(process.env.GOOGLE_APPLICATION_CREDENTIALS || DEFAULT_CREDENTIALS_PATH);
  if (!existsSync(credentialsPath)) {
    fail(`nem található a service account kulcs: ${credentialsPath}`);
  }

  const credentials = JSON.parse(readFileSync(credentialsPath, "utf8"));
  if (!credentials.client_email || !credentials.private_key) {
    fail("a service account JSON nem tartalmaz client_email vagy private_key mezőt");
  }

  return credentials;
}

async function getAccessToken(credentials) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = base64Url(
    JSON.stringify({
      iss: credentials.client_email,
      scope: CALENDAR_SCOPE,
      aud: TOKEN_URL,
      exp: now + 3600,
      iat: now,
    }),
  );
  const unsignedJwt = `${header}.${claim}`;
  const signature = createSign("RSA-SHA256").update(unsignedJwt).sign(credentials.private_key);
  const jwt = `${unsignedJwt}.${base64Url(signature)}`;

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  const payload = await response.json();
  if (!response.ok) {
    fail(`Google token kérés sikertelen: ${JSON.stringify(payload)}`);
  }

  return payload.access_token;
}

function calendarId() {
  return process.env.GOOGLE_CALENDAR_ID || "tuskevardse@gmail.com";
}

function eventTime(args, prefix) {
  const date = args.date;
  const value = args[prefix];

  if (!date || !value) {
    return undefined;
  }

  return {
    dateTime: `${date}T${value}:00`,
    timeZone: DEFAULT_TIMEZONE,
  };
}

function buildEvent(args) {
  if (!args.title) {
    fail("a --title kötelező");
  }
  if (!args.date) {
    fail("a --date kötelező YYYY-MM-DD formában");
  }

  const event = {
    summary: args.title,
    location: args.location || undefined,
    description: args.description || undefined,
  };

  if (args["all-day"]) {
    const endDate = new Date(`${args.date}T00:00:00Z`);
    endDate.setUTCDate(endDate.getUTCDate() + 1);
    event.start = { date: args.date };
    event.end = { date: endDate.toISOString().slice(0, 10) };
    return event;
  }

  if (!args.start || !args.end) {
    fail("időpontos eseménynél --start és --end is kötelező HH:MM formában");
  }

  event.start = eventTime(args, "start");
  event.end = eventTime(args, "end");
  return event;
}

function buildPatch(args) {
  const patch = {};

  if (args.title) patch.summary = args.title;
  if (args.location) patch.location = args.location;
  if (args.description) patch.description = args.description;

  if (args.date && args["all-day"]) {
    const endDate = new Date(`${args.date}T00:00:00Z`);
    endDate.setUTCDate(endDate.getUTCDate() + 1);
    patch.start = { date: args.date };
    patch.end = { date: endDate.toISOString().slice(0, 10) };
  } else if (args.date || args.start || args.end) {
    if (!args.date || !args.start || !args.end) {
      fail("időpont módosításához --date, --start és --end együtt szükséges");
    }
    patch.start = eventTime(args, "start");
    patch.end = eventTime(args, "end");
  }

  if (Object.keys(patch).length === 0) {
    fail("nincs módosítandó mező");
  }

  return patch;
}

async function googleRequest(token, path, options = {}) {
  const response = await fetch(`${CALENDAR_API_BASE}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (response.status === 204) {
    return null;
  }

  const text = await response.text();
  const payload = text ? JSON.parse(text) : null;
  if (!response.ok) {
    fail(`Google Calendar API hiba: ${JSON.stringify(payload)}`);
  }

  return payload;
}

async function listEvents(token, args) {
  const from = args.from || new Date().toISOString().slice(0, 10);
  const to = args.to || from;
  const params = new URLSearchParams({
    timeMin: `${from}T00:00:00+02:00`,
    timeMax: `${to}T23:59:59+02:00`,
    singleEvents: "true",
    orderBy: "startTime",
  });

  const payload = await googleRequest(token, `/calendars/${encodeURIComponent(calendarId())}/events?${params}`);
  const events = payload.items || [];

  if (events.length === 0) {
    console.log("Nincs esemény a megadott időszakban.");
    return;
  }

  for (const event of events) {
    const start = event.start?.dateTime || event.start?.date || "nincs időpont";
    console.log(`${event.id}\n  ${start} - ${event.summary || "(nincs cím)"}\n`);
  }
}

async function createEvent(token, args) {
  const event = buildEvent(args);
  const payload = await googleRequest(token, `/calendars/${encodeURIComponent(calendarId())}/events`, {
    method: "POST",
    body: JSON.stringify(event),
  });

  console.log(`Létrehozva: ${payload.summary}`);
  console.log(`Event ID: ${payload.id}`);
  console.log(`Link: ${payload.htmlLink}`);
}

async function updateEvent(token, args) {
  if (!args.id) {
    fail("az --id kötelező módosításhoz");
  }

  const payload = await googleRequest(
    token,
    `/calendars/${encodeURIComponent(calendarId())}/events/${encodeURIComponent(args.id)}`,
    {
      method: "PATCH",
      body: JSON.stringify(buildPatch(args)),
    },
  );

  console.log(`Módosítva: ${payload.summary}`);
  console.log(`Event ID: ${payload.id}`);
  console.log(`Link: ${payload.htmlLink}`);
}

async function deleteEvent(token, args) {
  if (!args.id) {
    fail("az --id kötelező törléshez");
  }

  await googleRequest(token, `/calendars/${encodeURIComponent(calendarId())}/events/${encodeURIComponent(args.id)}`, {
    method: "DELETE",
  });

  console.log(`Törölve: ${args.id}`);
}

async function main() {
  const { command, args } = parseArgs(process.argv.slice(2));
  if (!command || command === "help" || args.help) {
    showHelp();
    return;
  }

  const token = await getAccessToken(loadCredentials());

  if (command === "list") return listEvents(token, args);
  if (command === "create") return createEvent(token, args);
  if (command === "update") return updateEvent(token, args);
  if (command === "delete") return deleteEvent(token, args);

  fail(`ismeretlen parancs: ${command}`);
}

main().catch((error) => fail(error.stack || error.message));
