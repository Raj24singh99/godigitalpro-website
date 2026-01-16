import { uploadSvg } from "./storage.ts";

function buildSvg({ title, subtitle }: { title: string; subtitle: string }) {
  const safeTitle = title.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const safeSubtitle = subtitle.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2027" />
      <stop offset="50%" stop-color="#203a43" />
      <stop offset="100%" stop-color="#2c5364" />
    </linearGradient>
  </defs>
  <rect width="1080" height="1080" fill="url(#bg)" />
  <rect x="120" y="120" width="840" height="840" rx="28" fill="#0d1418" opacity="0.65" />
  <text x="540" y="420" font-family="Georgia, serif" font-size="64" fill="#f1f5f9" text-anchor="middle">
    ${safeTitle}
  </text>
  <text x="540" y="520" font-family="Georgia, serif" font-size="36" fill="#cbd5f5" text-anchor="middle">
    ${safeSubtitle}
  </text>
  <text x="540" y="880" font-family="Georgia, serif" font-size="28" fill="#94a3b8" text-anchor="middle">
    The Daily Compounding
  </text>
</svg>`;
}

export async function generateQuoteImage({
  caption,
  keyQuote,
  filenamePrefix,
}: {
  caption: string;
  keyQuote?: string;
  filenamePrefix?: string;
}) {
  const title = keyQuote || caption?.split(".")[0] || "Daily Systems";
  const subtitle = caption?.split(".")[1]?.trim() || "Discipline compounds.";
  const svgContent = buildSvg({ title, subtitle });
  const filename = `${filenamePrefix || "daily"}-${Date.now()}.svg`;
  const imageUrl = await uploadSvg({ filename, svgContent });

  return { imageUrl, template: "svg-quote" };
}
