// Generate individual tool and comparison page wrappers for static chunking.
import { mkdir, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { TOOLS, COMPARISONS } from "../src/data/tools.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.resolve(__dirname, "../src/pages/tools");
const outDirTools = path.join(baseDir, "tools");
const outDirCompare = path.join(baseDir, "compare");
const indexFile = path.join(baseDir, "generatedRoutes.jsx");

const header = `import React from "react";\n`;

const exists = async (targetPath) => {
  try {
    await stat(targetPath);
    return true;
  } catch {
    return false;
  }
};

async function ensureDirs() {
  await mkdir(outDirTools, { recursive: true });
  await mkdir(outDirCompare, { recursive: true });
}

function toolPageContent(slug) {
  return `${header}import ToolDetail from "../ToolDetail.jsx";
export default function ToolPage() {
  return <ToolDetail slugOverride="${slug}" />;
}
`;
}

function comparisonPageContent(slug) {
  return `${header}import ToolComparison from "../ToolComparison.jsx";
export default function ToolComparisonPage() {
  return <ToolComparison slugOverride="${slug}" />;
}
`;
}

function buildIndexContent() {
  const lines = [
    `import React from "react";`,
    ...TOOLS.map((t) => `const ${varSafe(t.slug)} = React.lazy(() => import("./tools/${t.slug}.jsx"));`),
    ...COMPARISONS.map(
      (c) => `const ${varSafe("cmp_" + c.slug)} = React.lazy(() => import("./compare/${c.slug}.jsx"));`
    ),
    "",
    "export const toolRoutes = [",
    ...TOOLS.map(
      (t) =>
        `  { path: "/tools/${t.slug}", element: React.createElement(${varSafe(t.slug)}) },`
    ),
    "];",
    "",
    "export const comparisonRoutes = [",
    ...COMPARISONS.map(
      (c) =>
        `  { path: "/tools/compare/${c.slug}", element: React.createElement(${varSafe("cmp_" + c.slug)}) },`
    ),
    "];",
  ];
  return lines.join("\n") + "\n";
}

function varSafe(slug) {
  return slug
    .replace(/[^a-zA-Z0-9_]/g, "_")
    .replace(/(^\d)/, "_$1");
}

async function run() {
  await ensureDirs();

  let createdTools = 0;
  let createdComparisons = 0;

  // Write tool pages (preserve existing custom pages)
  await Promise.all(
    TOOLS.map(async (tool) => {
      const filepath = path.join(outDirTools, `${tool.slug}.jsx`);
      if (await exists(filepath)) return;
      await writeFile(filepath, toolPageContent(tool.slug), "utf8");
      createdTools += 1;
    })
  );

  // Write comparison pages (preserve existing custom pages)
  await Promise.all(
    COMPARISONS.map(async (comp) => {
      const filepath = path.join(outDirCompare, `${comp.slug}.jsx`);
      if (await exists(filepath)) return;
      await writeFile(filepath, comparisonPageContent(comp.slug), "utf8");
      createdComparisons += 1;
    })
  );

  // Build index with lazy routes
  await writeFile(indexFile, buildIndexContent(), "utf8");
  console.log(
    `Generated ${createdTools} new tool pages, ${createdComparisons} new comparison pages. Total routes: ${TOOLS.length} tools, ${COMPARISONS.length} comparisons.`
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
