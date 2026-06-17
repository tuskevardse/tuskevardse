import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { spawn } from "node:child_process";

const DEFAULT_CONTEXT_PATH = "AI/ai-assistant-context-hu.md";
const DEFAULT_OUTPUT_PATH = "AI/generated-chatgpt-prompt.md";
const CHATGPT_URL = "https://chatgpt.com/";

function fail(message) {
  console.error(`Hiba: ${message}`);
  process.exit(1);
}

function parseArgs(argv) {
  const args = {};

  for (let index = 0; index < argv.length; index += 1) {
    const item = argv[index];
    if (!item.startsWith("--")) {
      continue;
    }

    const key = item.slice(2);
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
      continue;
    }

    args[key] = next;
    index += 1;
  }

  return args;
}

function showHelp() {
  console.log(`
ChatGPT prompt előkészítő és kísérleti automatizáló

Biztosan működő használat:
  npm run chatgpt -- --question "Melyik sportág lenne jó egy 10 éves gyereknek?" --copy --open

Kérdés fájlból:
  npm run chatgpt -- --question-file kerdes.txt --copy

Kísérleti ChatGPT.com beillesztés Playwrighttal:
  npm run chatgpt -- --question "Mikor érdemes kapcsolatot felvenni?" --browser

Opcionális automatikus küldés:
  npm run chatgpt -- --question "Mikor érdemes kapcsolatot felvenni?" --browser --send

Fontos:
  A --browser módhoz Playwright kell: npm install -D playwright
  A script nem tárol ChatGPT jelszót, nem kezeli a belépést. Ha kell, a megnyíló böngészőben kézzel kell belépni.
`);
}

function readText(path) {
  const absolutePath = resolve(path);
  if (!existsSync(absolutePath)) {
    fail(`nem található fájl: ${absolutePath}`);
  }

  return readFileSync(absolutePath, "utf8");
}

function resolveQuestion(args) {
  if (args.question) {
    return args.question.trim();
  }

  if (args["question-file"]) {
    return readText(args["question-file"]).trim();
  }

  fail("add meg a kérdést --question vagy --question-file paraméterrel");
}

function buildPrompt(context, question) {
  return `Az alábbi dokumentum a Tüskevár DSE AI asszisztens háttéranyaga.

Feladat:
- A kérdésre a dokumentum alapján válaszolj magyarul.
- Ha valamire nincs biztos információ a dokumentumban, ne találj ki választ.
- Gyerekadatoknál, egészségügyi vagy érzékeny kérdésnél legyél óvatos, és irányíts személyes egyeztetésre.
- A válasz legyen rövid, praktikus és látogatói szemléletű.

--- AI HÁTTÉRANYAG KEZDETE ---

${context}

--- AI HÁTTÉRANYAG VÉGE ---

Kérdés:
${question}
`;
}

function writePrompt(path, prompt) {
  const absolutePath = resolve(path);
  mkdirSync(dirname(absolutePath), { recursive: true });
  writeFileSync(absolutePath, prompt, "utf8");
  return absolutePath;
}

function runPowerShell(args) {
  return new Promise((resolvePromise, rejectPromise) => {
    const child = spawn("powershell.exe", ["-NoProfile", ...args], {
      stdio: "ignore",
      windowsHide: true,
    });

    child.on("error", rejectPromise);
    child.on("exit", (code) => {
      if (code === 0) {
        resolvePromise();
      } else {
        rejectPromise(new Error(`PowerShell kilépési kód: ${code}`));
      }
    });
  });
}

async function copyToClipboard(promptPath) {
  await runPowerShell([
    "-Command",
    "$text = Get-Content -Raw -LiteralPath $args[0]; Set-Clipboard -Value $text",
    promptPath,
  ]);
}

async function openChatGpt() {
  await runPowerShell(["-Command", "Start-Process $args[0]", CHATGPT_URL]);
}

async function automateChatGpt(prompt, shouldSend) {
  let playwright;
  try {
    playwright = await import("playwright");
  } catch {
    fail("a Playwright nincs telepítve. Telepítés: npm install -D playwright");
  }

  const profileDir = resolve(".chatgpt-profile");
  mkdirSync(profileDir, { recursive: true });

  const context = await playwright.chromium.launchPersistentContext(profileDir, {
    channel: "msedge",
    headless: false,
    viewport: { width: 1280, height: 900 },
  });
  const page = context.pages()[0] || (await context.newPage());

  await page.goto(CHATGPT_URL, { waitUntil: "domcontentloaded" });
  console.log("Ha a ChatGPT belépést kér, jelentkezz be a megnyílt böngészőben.");

  const promptBox = page
    .locator('textarea[data-testid="prompt-textarea"], #prompt-textarea, [contenteditable="true"]')
    .first();

  await promptBox.waitFor({ timeout: 120000 });
  await promptBox.click();

  await page.evaluate(async (text) => {
    await navigator.clipboard.writeText(text);
  }, prompt);
  await page.keyboard.press("Control+V");

  if (shouldSend) {
    await page.keyboard.press("Enter");
  }

  console.log(shouldSend ? "A prompt beillesztve és elküldve." : "A prompt beillesztve. Küldéshez nyomj Entert.");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    showHelp();
    return;
  }

  const contextPath = args.context || DEFAULT_CONTEXT_PATH;
  const outputPath = args.output || DEFAULT_OUTPUT_PATH;
  const context = readText(contextPath);
  const question = resolveQuestion(args);
  const prompt = buildPrompt(context, question);
  const writtenPath = writePrompt(outputPath, prompt);

  console.log(`Prompt elkészült: ${writtenPath}`);

  if (args.copy) {
    await copyToClipboard(writtenPath);
    console.log("Prompt vágólapra másolva.");
  }

  if (args.open) {
    await openChatGpt();
    console.log("ChatGPT.com megnyitva.");
  }

  if (args.browser) {
    await automateChatGpt(prompt, Boolean(args.send));
  }
}

main().catch((error) => fail(error.stack || error.message));
