import { spawn } from "node:child_process";
import { join } from "node:path";

const variableNames = [
  "PERXONA_API_BASE_URL",
  "PERXONA_CONNECT_EMAIL",
  "PERXONA_CONNECT_PASSWORD",
];
const targets = ["preview", "production"];
const vercelCli = join(
  process.env.APPDATA,
  "npm",
  "node_modules",
  "vercel",
  "dist",
  "vc.js",
);

for (const name of variableNames) {
  if (!process.env[name]) {
    throw new Error(`${name} is missing. Run this script with --env-file=.env.`);
  }
}

function addEnvironmentVariable(name, target) {
  return new Promise((resolve, reject) => {
    const targetArguments =
      target === "preview"
        ? [name, target, "codex/preview"]
        : [name, target];
    const child = spawn(
      process.execPath,
      [
        vercelCli,
        "env",
        "add",
        ...targetArguments,
        "--sensitive",
        "--yes",
        "--force",
        "--no-color",
        "--value",
        process.env[name],
      ],
      { cwd: process.cwd(), shell: false, stdio: ["ignore", "pipe", "pipe"] },
    );

    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => {
      stdout += chunk;
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
    });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        console.log(`Configured ${name} for ${target}.`);
        resolve();
        return;
      }

      let safeError = `${stdout}\n${stderr}`;
      for (const variableName of variableNames) {
        safeError = safeError.replaceAll(
          process.env[variableName] ?? "",
          "[redacted]",
        );
      }
      reject(
        new Error(
          `Vercel rejected ${name} for ${target}. ${safeError.trim()}`,
        ),
      );
    });
  });
}

for (const target of targets) {
  for (const name of variableNames) {
    await addEnvironmentVariable(name, target);
  }
}

console.log("Vercel environment configuration complete.");
