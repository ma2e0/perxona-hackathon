import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const publicDir = path.join(projectRoot, "public");
const sourcePath = path.join(
  publicDir,
  "Food-Spirit-Submission-Storyboard.html",
);
const outputPath = path.join(
  publicDir,
  "Food-Spirit-Submission-Storyboard-Download.html",
);

async function dataUrl(filename, mimeType) {
  const bytes = await readFile(path.join(publicDir, "food-spirit", filename));
  return `data:${mimeType};base64,${bytes.toString("base64")}`;
}

const [source, heroArtwork, bananaPhoto] = await Promise.all([
  readFile(sourcePath, "utf8"),
  dataUrl("og.png", "image/png"),
  dataUrl("sample-banana.jpg", "image/jpeg"),
]);

const output = source
  .replace(
    "https://food-spirit.vercel.app/food-spirit/og.png",
    heroArtwork,
  )
  .replace(
    "https://food-spirit.vercel.app/food-spirit/sample-banana.jpg",
    bananaPhoto,
  )
  .replace(
    "<title>Food Spirit — Submission Storyboard</title>",
    "<title>Food Spirit — Offline Submission Storyboard</title>",
  )
  .replace(
    "<body>",
    "<!-- Offline package: CSS, JavaScript, and presentation artwork are embedded in this file. -->\n  <body>",
  );

await writeFile(outputPath, output, "utf8");
console.log(`Built ${path.relative(projectRoot, outputPath)}`);
