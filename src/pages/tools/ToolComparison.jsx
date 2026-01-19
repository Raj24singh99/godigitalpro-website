import React, { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Scale, Check, MessageSquare, Sparkles, ChevronRight, Crown, Gauge, Layers, Zap, Clapperboard } from "lucide-react";
import SeoHelmet from "../../components/SeoHelmet";
import { buildCanonical, faqJsonLd } from "../../utils/seo";
import { COMPARISONS, getToolBySlug, buildItemListSchema } from "../../data/tools";

const Section = ({ className = "", children }) => (
  <section className={`py-12 md:py-16 ${className}`}>{children}</section>
);
const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-6xl px-5 md:px-10 ${className}`}>{children}</div>
);

const Pill = ({ children, tone = "slate" }) => {
  const tones = {
    slate: "bg-white/70 text-slate-800 ring-1 ring-slate-200",
    emerald: "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-100",
    indigo: "bg-indigo-50 text-indigo-800 ring-1 ring-indigo-100",
  };
  return <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}>{children}</span>;
};

const ScoreBar = ({ score = 0, scale = 10, highlight = false }) => {
  const pct = Math.max(0, Math.min(100, (score / scale) * 100));
  return (
    <div className="relative h-2.5 overflow-hidden rounded-full bg-slate-200">
      <div
        className={`h-full rounded-full transition-all ${highlight ? "bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-500" : "bg-slate-400"}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
};

export default function ToolComparison({ slugOverride }) {
  const { slug } = useParams();
  const comparisonSlug = slugOverride || slug;
  const comparison = COMPARISONS.find((c) => c.slug === comparisonSlug);

  if (!comparison) return <Navigate to="/tools" replace />;

  const contenders = comparison.contenders.map((id) => getToolBySlug(id)).filter(Boolean);
  const contenderMap = Object.fromEntries(contenders.map((c) => [c.slug, c]));
  const canonical = buildCanonical(`/tools/compare/${comparison.slug}`);
  const itemListSchema = useMemo(() => buildItemListSchema(contenders), [contenders]);
  const faqSchema = useMemo(() => {
    const faqs = comparison.faqs?.map((f) => ({ question: f.q, answer: f.a })) || [];
    return faqs.length ? faqJsonLd(faqs) : null;
  }, [comparison]);
  const verdict = comparison.picks?.[0]?.choose;
  const scale = comparison.ratings?.scale || 10;
  const hasScores = Boolean(comparison.ratings?.scores?.length);
  const averages = useMemo(() => {
    if (!hasScores) return null;
    const totals = {};
    comparison.contenders.forEach((c) => (totals[c] = 0));
    comparison.ratings.scores.forEach((row) => {
      comparison.contenders.forEach((c) => {
        totals[c] += row.scores?.[c] || 0;
      });
    });
    const avg = {};
    comparison.contenders.forEach((c) => {
      avg[c] = (totals[c] / comparison.ratings.scores.length).toFixed(1);
    });
    return avg;
  }, [comparison, hasScores]);
  const overallWinner = useMemo(() => {
    if (!averages) return null;
    const entries = Object.entries(averages).sort((a, b) => Number(b[1]) - Number(a[1]));
    return entries[0]?.[0] || null;
  }, [averages]);

  const logoFor = (tool) => {
    if (!tool?.url) return null;
    try {
      const host = new URL(tool.url).hostname;
      return `https://logo.clearbit.com/${host}`;
    } catch (e) {
      return null;
    }
  };

  const gradients = ["from-emerald-500 via-teal-500 to-indigo-500", "from-indigo-500 via-purple-500 to-pink-500", "from-slate-700 via-slate-600 to-slate-800", "from-amber-500 via-orange-500 to-rose-500"];
  const gradientForIndex = (idx) => gradients[idx % gradients.length];

  return (
    <main className="bg-gradient-to-b from-emerald-50 via-white to-indigo-50 text-slate-900">
      <SeoHelmet
        title={`${comparison.title} | GoDigitalPro`}
        description={comparison.summary}
        canonical={canonical}
        keywords={`${comparison.title}, compare tools, best ${comparison.primaryTag} tools`}
        schema={[itemListSchema, faqSchema].filter(Boolean)}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Tools Hub", url: buildCanonical("/tools") },
          { name: comparison.title, url: canonical },
        ]}
      />

      <Section className="pb-0 pt-8 md:pt-10">
        <Container className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link to="/tools" className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-emerald-700 ring-1 ring-emerald-100 hover:bg-emerald-50">
              <ArrowLeft className="h-4 w-4" />
              Back to Tools Hub
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="flex flex-col gap-6 p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <Pill tone="emerald">
                  <Sparkles className="h-4 w-4" />
                  Quick take
                </Pill>
                <Pill tone="slate">{comparison.primaryTag}</Pill>
                {comparison.tags?.slice(0, 3).map((tag) => (
                  <Pill key={tag} tone="indigo">
                    {tag}
                  </Pill>
                ))}
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{comparison.title}</h1>
                <p className="text-base text-slate-700 md:text-lg">{comparison.summary}</p>
                {verdict && (
                  <div className="inline-flex flex-wrap items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-900 ring-1 ring-emerald-100">
                    <Check className="h-4 w-4" />
                    Quick verdict: {verdict}
                  </div>
                )}
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {contenders.map((tool, idx) => (
                  <div key={tool.slug} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br ${gradientForIndex(idx)} ring-2 ring-white`}>
                        {logoFor(tool) ? (
                          <img
                            src={logoFor(tool)}
                            alt={`${tool.name} logo`}
                            loading="lazy"
                            decoding="async"
                            fetchpriority="low"
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-white">{tool.name.slice(0, 2).toUpperCase()}</div>
                        )}
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{tool.category}</p>
                        <p className="text-base font-semibold text-slate-900">{tool.name}</p>
                      </div>
                    </div>
                    <Link to={`/tools/${tool.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:underline">
                      View <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-4">
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 shadow-sm md:col-span-2">
                  <div className="flex items-center gap-2 text-lg font-semibold text-emerald-900">
                    <Sparkles className="h-5 w-5" /> Quick Verdict
                  </div>
                  <p className="mt-2 text-sm text-slate-800">{comparison.summary}</p>
                  {overallWinner && averages ? (
                    <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-emerald-800">
                      <Crown className="h-4 w-4" /> Overall scoreboard winner: {contenderMap[overallWinner]?.name || overallWinner}
                      <span className="text-xs font-medium text-emerald-700">(avg: {averages[overallWinner]}/10)</span>
                    </div>
                  ) : null}
                </div>
                {comparison.picks?.slice(0, 3).map((pick) => (
                  <div key={pick.when} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
                      <Clapperboard className="h-4 w-4 text-emerald-600" /> {pick.when}
                    </div>
                    <p className="text-sm text-slate-700">Choose {pick.choose}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-10">
        <Container className="space-y-10">
          {comparison.picks?.length ? (
            <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-lg ring-2 ring-indigo-200/60 md:p-8">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-emerald-300" />
                <h2 className="text-xl font-semibold">Pick fast</h2>
              </div>
              <p className="mt-2 text-sm text-slate-200">Short, plain-English guidance for common situations.</p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {comparison.picks.map((pick) => (
                  <div key={pick.when} className="flex gap-3 rounded-2xl bg-white/5 p-3 text-sm ring-1 ring-white/10">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-300" />
                    <div>
                      <p className="font-semibold text-white">{pick.when}</p>
                      <p className="text-slate-200">Choose {pick.choose}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {comparison.ratings?.scores?.length ? (
            <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-indigo-600" />
                  <h3 className="text-lg font-semibold text-slate-900">Scoreboard (out of {scale})</h3>
                </div>
                <p className="text-sm text-slate-600">Higher bar wins each row.</p>
              </div>
              <div className="mt-5 space-y-4">
                {comparison.ratings.scores.map((row) => {
                  const maxScore = Math.max(...comparison.contenders.map((c) => row.scores?.[c] || 0));
                  return (
                    <div key={row.criterion} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <p className="font-semibold text-slate-900">{row.criterion}</p>
                        <p className="text-xs text-slate-500">{row.note}</p>
                      </div>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                        {comparison.contenders.map((cid) => {
                          const score = row.scores?.[cid] ?? 0;
                          const tool = contenderMap[cid];
                          const isTop = score === maxScore && score > 0;
                          return (
                            <div key={cid} className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-sm font-semibold text-slate-900">{tool?.name || cid}</span>
                                <span className={`rounded-full px-2 py-0.5 text-xs font-mono ${isTop ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-700"}`}>
                                  {score.toFixed(1)}
                                </span>
                              </div>
                              <div className="mt-2">
                                <ScoreBar score={score} scale={scale} highlight={isTop} />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-emerald-600" />
              <h3 className="text-lg font-semibold text-slate-900">Tool snapshots</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {contenders.map((tool) => (
                <article key={tool.slug} className="flex h-full flex-col justify-between rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-200">
                  <div className="space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{tool.category}</p>
                    <h2 className="text-xl font-semibold text-slate-900">{tool.name}</h2>
                    <p className="text-sm text-slate-700">{tool.headline}</p>
                    <p className="text-xs font-semibold text-emerald-700">Pricing: {tool.pricing || "See site"}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {tool.tags.slice(0, 5).map((tag) => (
                        <span key={tag} className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-800 ring-1 ring-emerald-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1 rounded-full bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:opacity-90"
                    >
                      Visit <ExternalLink className="h-4 w-4" />
                    </a>
                    <Link
                      to={`/tools/${tool.slug}`}
                      className="inline-flex flex-1 items-center justify-center gap-1 rounded-full bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-100 hover:bg-emerald-100"
                    >
                      Deep dive <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {comparison.faqs?.length ? (
            <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200 md:p-8">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-indigo-600" />
                <h3 className="text-lg font-semibold text-slate-900">FAQ</h3>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {comparison.faqs.map((faq) => (
                  <div key={faq.q} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                    <p className="text-sm font-semibold text-slate-900">{faq.q}</p>
                    <p className="mt-1 text-sm text-slate-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-900 px-5 py-4 text-white shadow-lg ring-1 ring-indigo-200/60">
            <div>
              <p className="text-sm text-slate-200">Still exploring?</p>
              <p className="text-base font-semibold">Browse the full tools library.</p>
            </div>
            <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/20">
              Go to Tools Hub <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
