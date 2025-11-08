import React from "react";

export const meta = {
  title: "Performance Marketing: The 80/20 Guide",
  slug: "80-20-performance-marketing",
  excerpt: "A practical blueprint to structure accounts, protect budgets, and scale winners on Google & Meta.",
  date: "2025-11-07",
  updated: "2025-11-07",
  category: "performance",
  tags: ["performance marketing", "google ads", "meta ads", "scaling", "budget pacing"],
  cover: "https://www.godigitalpro.in/public/blog/performance-80-20.jpg",
  readingTime: "7 min read",
  author: { name: "Raj Singh", url: "https://www.linkedin.com/in/raj24singh99/" },
  draft: false
};

export default function Post() {
  return (
    <>
      <p><strong>Principle:</strong> protect budget with guardrails, concentrate spend on proven asset groups, and iterate creatives weekly.</p>
      <h2>1) Account structure</h2>
      <ul>
        <li>Google: split by objective; PMax with brand exclusions where needed; Search with intent clusters.</li>
        <li>Meta: keep it simple — CBO for scale, ABO for clean tests; use Advantage+ only where it wins.</li>
      </ul>
      <h2>2) Measurement</h2>
      <ul>
        <li>GA4 + CAPI, enhanced conversions; push offline outcomes for quality learning (GCLID/FBCLID).</li>
      </ul>
      <h2>3) Pacing & safety</h2>
      <ul>
        <li>Portfolio budgets with daily/weekly deviation alerts; frequency caps; placement filters.</li>
      </ul>
      <h2>4) Creatives</h2>
      <ul>
        <li>Hooks first; multiple angles; rotate weekly; name assets with pattern for honest readouts.</li>
      </ul>
    </>
  );
}
