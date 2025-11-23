import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Sparkles,
  Search,
  Layers3,
  Star,
  Rocket,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Tag,
} from "lucide-react";
import SeoHelmet from "../../components/SeoHelmet";
import { buildCanonical } from "../../utils/seo";
import { TOOLS, COMPARISONS, TAGS, buildItemListSchema, searchTools } from "../../data/tools";

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-14 md:py-20 ${className}`}>{children}</section>
);
const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-6xl px-6 md:px-10 ${className}`}>{children}</div>
);

export default function ToolsHub() {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedToolForCompare, setSelectedToolForCompare] = useState("");
  const [selectedComparisonSlug, setSelectedComparisonSlug] = useState("");
  const navigate = useNavigate();

  const filteredTools = useMemo(() => searchTools(query), [query]);

  const groupedByCategory = useMemo(() => {
    return filteredTools.reduce((acc, tool) => {
      const key = tool.category || "Other";
      acc[key] = acc[key] || [];
      acc[key].push(tool);
      return acc;
    }, {});
  }, [filteredTools]);

  const canonical = buildCanonical("/tools");
  const itemListSchema = useMemo(() => buildItemListSchema(filteredTools), [filteredTools]);

  // Build a brand logo URL if available, otherwise return null to fall back to a generated avatar.
  const getLogoSrc = (tool) => {
    if (tool.logo) return tool.logo;
    if (!tool.url) return null;
    try {
      const hostname = new URL(tool.url).hostname;
      return `https://logo.clearbit.com/${hostname}`;
    } catch {
      return null;
    }
  };

  // Simple hash to make the fallback avatar color stable per tool name.
  const brandColor = (name = "") => {
    const seed = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const hue = seed % 360;
    return `linear-gradient(135deg, hsl(${hue}, 70%, 55%), hsl(${(hue + 40) % 360}, 70%, 45%))`;
  };

  const suggestionList = useMemo(() => {
    const normalized = query.toLowerCase();

    if (!query.trim()) {
      return TOOLS.slice(0, 6).map((tool) => ({
        type: "tool",
        label: tool.name,
        meta: tool.category,
        value: tool.name,
        score: 0,
      }));
    }

    const scoreMatch = (value) => {
      const lower = value.toLowerCase();
      if (lower === normalized) return 0; // exact
      if (lower.startsWith(normalized)) return 1; // prefix
      return 2; // contains
    };

    const toolMatches = TOOLS.filter(
      (tool) =>
        tool.name.toLowerCase().includes(normalized) ||
        tool.slug.toLowerCase().includes(normalized) ||
        tool.tags.some((t) => t.toLowerCase().includes(normalized))
    )
      .map((tool) => ({
        type: "tool",
        label: tool.name,
        meta: tool.category,
        value: tool.name,
        score: scoreMatch(tool.name),
      }))
      .sort((a, b) => a.score - b.score)
      .slice(0, 6);

    const tagMatches = Array.from(
      new Set(
        TOOLS.flatMap((tool) =>
          tool.tags.filter((t) => t.toLowerCase().includes(normalized)).map((t) => t.toLowerCase())
        )
      )
    )
      .map((tag) => ({ type: "tag", label: tag, meta: "Tag", value: tag, score: scoreMatch(tag) }))
      .sort((a, b) => a.score - b.score)
      .slice(0, 6);

    const hasStrongToolMatch = toolMatches.some((item) => item.score <= 1);
    const ordered = hasStrongToolMatch ? [...toolMatches, ...tagMatches] : [...tagMatches, ...toolMatches];

    return ordered.slice(0, 8).map(({ score, ...rest }) => rest);
  }, [query]);

  const handleCompare = () => {
    if (!selectedComparisonSlug) return;
    navigate(`/tools/compare/${selectedComparisonSlug}`);
  };

  const comparisonChoices = useMemo(() => {
    if (!selectedToolForCompare) return [];
    return COMPARISONS.filter((item) => item.contenders?.includes(selectedToolForCompare));
  }, [selectedToolForCompare]);

  // Auto-enable compare when the search query matches a specific tool.
  const matchedToolFromQuery = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return (
      TOOLS.find((t) => t.name.toLowerCase() === q || t.slug.toLowerCase() === q) ||
      TOOLS.find((t) => t.name.toLowerCase().startsWith(q) || t.slug.toLowerCase().startsWith(q))
    );
  }, [query]);

  useEffect(() => {
    if (matchedToolFromQuery) {
      setSelectedToolForCompare(matchedToolFromQuery.slug);
      setSelectedComparisonSlug("");
    } else {
      setSelectedToolForCompare("");
      setSelectedComparisonSlug("");
    }
  }, [matchedToolFromQuery]);

  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      <SeoHelmet
        title="Tools Hub | Marketing, AI, Automation & Agency Stack Picks"
        description="Discover the marketing, AI, automation, and agency tools we trust. Filter by tags like CRM, SEO, AI content, video, automation, and more. Every tool and comparison auto-updates from one data source."
        canonical={canonical}
        keywords="marketing tools, ai tools, automation tools, crm tools, best seo tools, compare semrush vs ahrefs, automation for agencies"
        schema={[itemListSchema]}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Tools Hub", url: canonical },
        ]}
      />

      {/* Hero */}
      <Section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 20% 20%, rgba(16,185,129,0.12), transparent), radial-gradient(50% 55% at 80% 0%, rgba(59,130,246,0.12), transparent)",
          }}
        />
        <Container className="relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-medium text-slate-700 ring-1 ring-black/5 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-amber-500" />
            godigitalpro.in/tools
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="hidden md:inline text-emerald-600">Auto-updated</span>
          </div>

          <div className="mt-6 md:mt-10 space-y-8">
            <div className="max-w-5xl space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-emerald-600">Tools Hub</p>
                <h1
                  className="mt-2 font-semibold leading-tight tracking-tight"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}
                >
                  Find the right tool faster (marketing, AI, business).
                </h1>
                <p className="mt-4 text-lg text-slate-700">
                  Search by name or tag, then filter or compare in one place. Built for growth, revenue, and ops teams.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Marketing", "AI & Automation", "CRM", "Data & Analytics", "Productivity", "Creative", "Ops"].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm shadow-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    {chip}
                  </span>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2 max-w-3xl">
                <div className="relative rounded-2xl border border-emerald-100 bg-white/95 p-4 shadow-sm backdrop-blur">
                  <p className="text-sm font-semibold text-slate-900">Search the right tool</p>
                  <div className="relative mt-2">
                    <label className="sr-only" htmlFor="tools-search-hero">
                      Search tools
                    </label>
                    <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
                      <Search className="h-4 w-4 text-emerald-500 drop-shadow-sm" />
                    </div>
                    <input
                      id="tools-search-hero"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onFocus={() => setShowSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowSuggestions(false), 120)}
                      placeholder="Search by name or tag (e.g. automation, email, zapier)"
                      className="w-full rounded-xl border border-emerald-200 bg-white py-3 pl-11 pr-3 text-base text-slate-900 outline-none ring-1 ring-transparent transition focus:border-emerald-400 focus:ring-emerald-100"
                      type="search"
                      autoComplete="off"
                    />
                  </div>
                  {showSuggestions && suggestionList.length > 0 && (
                    <div className="absolute left-0 right-0 top-full z-10 mt-2 w-full overflow-hidden rounded-xl border border-slate-100 bg-white/95 shadow-2xl backdrop-blur">
                      {suggestionList.map((s) => (
                        <button
                          key={`${s.type}-${s.value}`}
                          type="button"
                          onMouseDown={() => setQuery(s.value)}
                          className="flex w-full items-center justify-between gap-3 px-4 py-2 text-left text-sm text-slate-800 hover:bg-slate-50"
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-slate-900">{s.label}</span>
                            {s.meta && <span className="text-xs font-medium text-slate-500">{s.meta}</span>}
                          </span>
                          <ChevronRight className="h-4 w-4 text-emerald-400" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Compare tools</p>
                      <p className="text-xs text-slate-600">Enabled after the search matches a tool with comparisons.</p>
                    </div>
                    <Layers3 className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="mt-3 space-y-2">
                    {selectedToolForCompare ? (
                      comparisonChoices.length > 0 ? (
                        <>
                          <select
                            value={selectedComparisonSlug}
                            onChange={(e) => setSelectedComparisonSlug(e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                          >
                            <option value="">Compare to…</option>
                            {comparisonChoices.map((item) => (
                              <option key={item.slug} value={item.slug}>
                                {item.title}
                              </option>
                            ))}
                          </select>
                          <button
                            type="button"
                            onClick={handleCompare}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                            disabled={!selectedComparisonSlug}
                          >
                            Open comparison
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </>
                      ) : (
                        <p className="text-xs text-slate-600">No comparison pages for this tool yet.</p>
                      )
                    ) : (
                      <p className="text-xs text-slate-600">Search for a tool to unlock comparisons (if available).</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Tool grid */}
      <Section className="bg-gradient-to-b from-white to-slate-50">
        <Container>
          <div className="flex items-baseline justify-between gap-2">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Tools</p>
              <h2 className="text-2xl md:text-3xl font-semibold">All tools (auto-updating)</h2>
              <p className="mt-1 text-slate-700">
                {filteredTools.length} tool{filteredTools.length === 1 ? "" : "s"} shown. Additions in the data file appear here instantly.
              </p>
            </div>
            <Link
              to="/onboarding"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm text-white hover:opacity-90"
            >
              Get a custom stack <ExternalLink className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 space-y-10">
            {Object.entries(groupedByCategory).map(([category, list]) => (
              <div key={category} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-700 inline-flex items-center justify-center text-sm font-semibold ring-1 ring-emerald-100">
                    {category.slice(0, 3).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{category}</h3>
                    <p className="text-sm text-slate-600">{list.length} tool{list.length === 1 ? "" : "s"}</p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {list.map((tool) => (
                    <article
                      key={tool.slug}
                      className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="relative mt-1 h-12 w-12 flex-none overflow-hidden rounded-xl ring-1 ring-slate-200"
                          style={{ background: brandColor(tool.name) }}
                        >
                          <div className="absolute inset-0 grid place-items-center text-sm font-semibold text-white">
                            {tool.name.slice(0, 2).toUpperCase()}
                          </div>
                          {getLogoSrc(tool) ? (
                            <img
                              src={getLogoSrc(tool)}
                              alt={`${tool.name} logo`}
                              loading="lazy"
                              className="relative h-full w-full object-contain bg-white/60"
                              onError={(e) => {
                                e.currentTarget.remove();
                              }}
                            />
                          ) : null}
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{tool.category}</p>
                              <h4 className="text-xl font-semibold text-slate-900">{tool.name}</h4>
                              <p className="mt-1 text-sm text-slate-700">{tool.headline}</p>
                            </div>
                            <a
                              href={tool.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1 text-[11px] font-medium text-white hover:opacity-90"
                            >
                              Visit <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          </div>
                          <p className="text-xs font-semibold text-emerald-700">Pricing: {tool.pricing || "See site"}</p>
                          <div className="flex flex-wrap gap-2">
                            {tool.tags.slice(0, 6).map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-800 ring-1 ring-emerald-100"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                            <Link
                              to={`/tools/${tool.slug}`}
                              className="inline-flex items-center gap-1 font-medium text-emerald-700 hover:underline"
                            >
                              View details <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Comparisons */}
      <Section className="bg-white">
        <Container>
          <div className="flex items-baseline justify-between gap-2">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Comparisons</p>
              <h2 className="text-2xl md:text-3xl font-semibold">Head-to-head pages</h2>
              <p className="mt-1 text-slate-700">
                Add comparison entries in the same data file to auto-publish SEO-friendly pages.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {COMPARISONS.map((item) => (
              <article key={item.slug} className="rounded-2xl border border-black/5 bg-slate-50 p-5 shadow-sm">
                <div className="flex items-center gap-2">
                  <Layers3 className="h-5 w-5 text-indigo-600" />
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-700">{item.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/tools/tag/${encodeURIComponent(tag)}`}
                      className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <Link
                    to={`/tools/compare/${item.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:underline"
                  >
                    Open comparison <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
