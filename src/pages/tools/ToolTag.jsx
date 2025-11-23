import React, { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Search, Tag as TagIcon, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import SeoHelmet from "../../components/SeoHelmet";
import { buildCanonical } from "../../utils/seo";
import { TAGS, getToolsByTag, buildItemListSchema } from "../../data/tools";

const Section = ({ className = "", children }) => (
  <section className={`py-12 md:py-16 ${className}`}>{children}</section>
);
const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-5xl px-6 md:px-10 ${className}`}>{children}</div>
);

export default function ToolTag() {
  const { tag } = useParams();
  const decodedTag = decodeURIComponent(tag || "").toLowerCase();

  if (!decodedTag || !TAGS.map((t) => t.toLowerCase()).includes(decodedTag)) {
    return <Navigate to="/tools" replace />;
  }

  const tools = getToolsByTag(decodedTag);
  const canonical = buildCanonical(`/tools/tag/${encodeURIComponent(decodedTag)}`);
  const itemListSchema = useMemo(() => buildItemListSchema(tools), [tools]);

  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      <SeoHelmet
        title={`Best ${decodedTag} tools | GoDigitalPro`}
        description={`Curated ${decodedTag} tools vetted by GoDigitalPro. Updated automatically when new tools are added.`}
        canonical={canonical}
        keywords={`${decodedTag} tools, best ${decodedTag}, ${decodedTag} software`}
        schema={[itemListSchema]}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Tools Hub", url: buildCanonical("/tools") },
          { name: decodedTag, url: canonical },
        ]}
      />

      <Section className="border-b border-slate-200 bg-white">
        <Container className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link to="/tools" className="inline-flex items-center gap-1 text-emerald-700 hover:underline">
              <ArrowLeft className="h-4 w-4" />
              Back to Tools Hub
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Tag</p>
            <h1 className="text-3xl font-semibold text-slate-900">Best {decodedTag} tools</h1>
            <p className="text-slate-700">Automatically generated list. Add tools to the data file and this page refreshes.</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-4">
          {tools.map((tool) => (
            <article key={tool.slug} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{tool.category}</p>
                  <h2 className="text-xl font-semibold text-slate-900">{tool.name}</h2>
                  <p className="mt-2 text-sm text-slate-700">{tool.headline}</p>
                  <p className="mt-1 text-xs text-slate-500">Pricing: {tool.pricing || "See site"}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tool.tags.slice(0, 6).map((t) => (
                      <Link
                        key={t}
                        to={`/tools/tag/${encodeURIComponent(t)}`}
                        className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-700 hover:bg-slate-200"
                      >
                        <TagIcon className="h-3.5 w-3.5" />
                        {t}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1 text-[11px] font-medium text-white hover:opacity-90"
                  >
                    Visit <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <Link
                    to={`/tools/${tool.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:underline"
                  >
                    View details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {tools.length === 0 && (
            <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-700">No tools for this tag yet. Add one in <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">src/data/tools.js</code>.</p>
            </div>
          )}
        </Container>
      </Section>
    </main>
  );
}
