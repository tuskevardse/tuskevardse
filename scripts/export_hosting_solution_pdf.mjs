import { mkdir } from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFilePath);
const projectRoot = path.resolve(currentDir, "..");

const htmlPath = process.argv[2] ? path.resolve(process.argv[2]) : path.join(projectRoot, "HOSTING_SOLUTION_HU.html");
const pdfPath = process.argv[3] ? path.resolve(process.argv[3]) : path.join(projectRoot, "HOSTING_SOLUTION_HU.pdf");
const chromePath = process.env.CHROME_BIN ?? "/usr/bin/google-chrome";

async function runChromePdfExport() {
  await mkdir(path.dirname(pdfPath), { recursive: true });

  const fileUrl = pathToFileURL(htmlPath).href;
  const args = [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--disable-dev-shm-usage",
    `--print-to-pdf=${pdfPath}`,
    fileUrl,
  ];

  await new Promise((resolve, reject) => {
    const chrome = spawn(chromePath, args, {
      stdio: ["ignore", "pipe", "pipe"],
    });

    let stderr = "";
    let stdout = "";

    chrome.stdout.setEncoding("utf8");
    chrome.stderr.setEncoding("utf8");

    chrome.stdout.on("data", (chunk) => {
      stdout += chunk;
    });

    chrome.stderr.on("data", (chunk) => {
      stderr += chunk;
    });

    chrome.on("error", (error) => {
      reject(error);
    });

    chrome.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(
        new Error(
          `A Chrome PDF export hibaval allt le (exit code: ${code ?? "unknown"}).\n${stdout}${stderr}`.trim(),
        ),
      );
    });
  });
}

runChromePdfExport().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
