// Scans index.html for every "uploads/..." reference and fails if the
// file it points at isn't actually in the repo. Catches broken image
// links (typo'd filenames, forgotten uploads) before they hit main.
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..", "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");

const refs = [...html.matchAll(/uploads\/[^"'()]+/g)].map((m) => m[0]);
const unique = [...new Set(refs)];

if (unique.length === 0) {
  console.error("No uploads/ references found in index.html — check the regex still matches.");
  process.exit(1);
}

const missing = unique.filter((ref) => !fs.existsSync(path.join(root, ref)));

if (missing.length > 0) {
  console.error("Broken asset references in index.html:");
  for (const m of missing) console.error(`  - ${m}`);
  process.exit(1);
}

console.log(`All ${unique.length} referenced assets exist:`);
for (const ref of unique) console.log(`  - ${ref}`);
