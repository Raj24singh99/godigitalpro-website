import React from "react";
import { Link } from "react-router-dom";

const slugify = (value = "") =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/**
 * Reusable “Detailed pros & cons” grid for compare pages.
 * Links always point to internal tool detail pages.
 */
export default function ProsConsSection({ title = "Detailed pros & cons", contenders = [], prosCons = {}, className = "" }) {
  const normalized = contenders.length
    ? contenders
    : Object.entries(prosCons || {}).map(([key, value]) => ({ key, name: key, blurb: value?.blurb || "" }));

  const toolPath = (item) => item.toolPath || `/tools/${slugify(item.slug || item.key || item.name)}`;
  const fallbackPros = (item) => [
    `${item.name} focuses on ${item.blurb || "its core niche"}.`,
    "Solid essentials for most teams it targets.",
    "Predictable value if you stay within plan limits.",
  ];
  const fallbackCons = () => [
    "Advanced needs may require higher tiers or add-ons.",
    "Setup/governance depend on your stack and team.",
    "Always validate limits, pricing, and support for scale.",
  ];

  return (
    <section className={`mt-12 ${className}`}>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:px-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {normalized.map((c) => (
            <div key={c.key || c.name} className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold">{c.name}</h3>
              {c.blurb ? <p className="text-sm text-slate-700 leading-relaxed">Value prop: {c.blurb}</p> : null}
              <p className="mt-2 text-sm font-semibold text-emerald-700">Pros</p>
              <ul className="mb-3 mt-1 space-y-1 text-sm text-slate-700 leading-relaxed">
                {(prosCons[c.key || c.name]?.pros || fallbackPros(c)).map((p) => (
                  <li key={`${c.key || c.name}-pro-${p}`}>{p}</li>
                ))}
              </ul>
              <p className="text-sm font-semibold text-slate-700">Cons</p>
              <ul className="mt-1 space-y-1 text-sm text-slate-600 leading-relaxed">
                {(prosCons[c.key || c.name]?.cons || fallbackCons(c)).map((p) => (
                  <li key={`${c.key || c.name}-con-${p}`}>{p}</li>
                ))}
              </ul>
              <div className="mt-2 flex gap-2 text-sm">
                {toolPath(c).startsWith("http") ? (
                  <a className="rounded-full bg-emerald-600 px-3 py-1 font-semibold text-white" href={toolPath(c)} target="_blank" rel="noreferrer">
                    Visit tool
                  </a>
                ) : (
                  <Link className="rounded-full bg-emerald-600 px-3 py-1 font-semibold text-white" to={toolPath(c)}>
                    Visit tool
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
