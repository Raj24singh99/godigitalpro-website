import React, { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ExternalLink, ArrowLeft, Check, Tag, Sparkles, Layers3, ArrowRight } from "lucide-react";
import SeoHelmet from "../../components/SeoHelmet";
import { buildCanonical } from "../../utils/seo";
import { getToolBySlug, COMPARISONS } from "../../data/tools";

const Section = ({ className = "", children }) => (
  <section className={`py-12 md:py-16 ${className}`}>{children}</section>
);
const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-5xl px-6 md:px-10 ${className}`}>{children}</div>
);

export default function ToolDetail({ slugOverride, extras = {} }) {
  const { slug } = useParams();
  const toolSlug = slugOverride || slug;
  const tool = getToolBySlug(toolSlug);

  if (!tool) {
    return <Navigate to="/tools" replace />;
  }

  const canonical = buildCanonical(`/tools/${tool.slug}`);
  const schema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: tool.name,
      applicationCategory: tool.category,
      description: tool.description,
      offers: tool.pricing
        ? {
            "@type": "Offer",
            price: tool.pricing,
            priceCurrency: "USD",
          }
        : undefined,
      url: canonical,
      sameAs: [tool.url],
    };
  }, [canonical, tool]);

  const relatedComparisons = COMPARISONS.filter((c) => c.contenders?.includes(tool.slug)).slice(0, 3);

  const customHero = extras.customHero;
  const hero = typeof customHero === "function" ? customHero(tool) : customHero;

  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      <SeoHelmet
        title={`${tool.name} | ${tool.category} | GoDigitalPro Tools Hub`}
        description={tool.headline || tool.description}
        canonical={canonical}
        keywords={`${tool.name} review, ${tool.category}, best ${tool.category}, ${tool.tags.join(", ")}`}
        schema={[schema]}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Tools Hub", url: buildCanonical("/tools") },
          { name: tool.name, url: canonical },
        ]}
      />

      {hero || (
        <Section className="border-b border-slate-200 bg-white">
          <Container className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Link to="/tools" className="inline-flex items-center gap-1 text-emerald-700 hover:underline">
                <ArrowLeft className="h-4 w-4" />
                Back to Tools Hub
              </Link>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl space-y-3">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{tool.category}</p>
                <h1 className="text-3xl font-semibold text-slate-900">{tool.name}</h1>
                <p className="text-lg text-slate-700">{tool.headline || tool.description}</p>
                <p className="text-sm text-slate-500">Pricing: {tool.pricing || "See website"}</p>
                {tool.bestFor && (
                  <p className="text-sm font-semibold text-emerald-700">Best for: {tool.bestFor}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/tools/${encodeURIComponent(tag)}`}
                      className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-200"
                    >
                      <Tag className="h-3.5 w-3.5" />
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                >
                  Visit {tool.name} <ExternalLink className="h-4 w-4" />
                </a>
                {tool.affiliateUrl && (
                  <a
                    href={tool.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-600 hover:text-slate-800 underline underline-offset-4"
                  >
                    Affiliate/partner link
                  </a>
                )}
                <Link
                  to="/onboarding"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-black/10 hover:opacity-90"
                >
                  Get a setup plan
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      )}

      <Section>
        <Container className="grid gap-8 md:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            {extras.beforeOverview || null}

            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Overview</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{tool.description}</p>
              {tool.useCases?.length ? (
                <ul className="mt-4 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
                  {tool.useCases.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            {extras.afterOverview || null}

            {tool.features?.length ? (
              <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Key features</h3>
                <ul className="mt-3 grid gap-2 md:grid-cols-2">
                  {tool.features.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="mt-1 h-4 w-4 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {extras.afterFeatures || null}

            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Fast facts</h3>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <Fact label="Category" value={tool.category} />
                <Fact label="Pricing" value={tool.pricing || "See website"} />
                <Fact label="Tags" value={`${tool.tags.length} tags`} />
                {tool.bestFor && <Fact label="Best for" value={tool.bestFor} />}
                {tool.integrations?.length ? (
                  <Fact label="Integrations" value={`${tool.integrations.length} noted`} />
                ) : null}
              </div>
            </div>

            {relatedComparisons.length ? (
              <div className="rounded-2xl border border-black/5 bg-slate-900 p-6 text-white shadow-sm">
                <div className="flex items-center gap-2">
                  <Layers3 className="h-5 w-5 text-emerald-300" />
                  <h3 className="text-lg font-semibold">Related comparisons</h3>
                </div>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  {relatedComparisons.map((comp) => (
                    <Link
                      key={comp.slug}
                      to={`/tools/compare/${comp.slug}`}
                      className="group rounded-2xl bg-white/10 px-4 py-3 text-sm text-white ring-1 ring-white/10 hover:bg-white/15"
                    >
                      <p className="font-semibold group-hover:text-emerald-200">{comp.title}</p>
                      <p className="text-slate-200">{comp.summary}</p>
                      <span className="mt-2 inline-flex items-center gap-1 text-emerald-200">
                        Open comparison <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <aside className="space-y-4">
            {extras.rightRailTop || null}

            {tool.integrations?.length ? (
              <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                <h4 className="text-sm font-semibold text-slate-900">Integrations</h4>
                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  {tool.integrations.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
              <h4 className="text-sm font-semibold text-slate-900">Recommended actions</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <Sparkles className="h-4 w-4 text-emerald-600" />
                  Add this tool to your stack review shortlist.
                </li>
                <li className="flex gap-2">
                  <Sparkles className="h-4 w-4 text-emerald-600" />
                  Map integrations needed (CRM, analytics, comms) before rollout.
                </li>
                <li className="flex gap-2">
                  <Sparkles className="h-4 w-4 text-emerald-600" />
                  Capture a baseline KPI to measure impact after go-live.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-black/5 bg-slate-900 p-5 text-white shadow-sm">
              <h4 className="text-sm font-semibold">Need this configured?</h4>
              <p className="mt-2 text-sm text-slate-200">
                We can implement, migrate, and integrate {tool.name} with your stack—tracking, CRM, ads, and automation included.
              </p>
              <Link
                to="/onboarding"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-slate-900 ring-1 ring-black/10 hover:opacity-90"
              >
                Talk to GoDigitalPro
              </Link>
            </div>

            {extras.rightRailBottom || null}
          </aside>
        </Container>
      </Section>
    </main>
  );
}

/**
 * Helper to quickly generate a page component that renders ToolDetail but still allows custom sections.
 * Usage in a tool page: export default buildToolPage("semrush", { afterOverview: <MySection /> });
 */
export function buildToolPage(slug, extras = {}) {
  return function ToolPage() {
    return <ToolDetail slugOverride={slug} extras={extras} />;
  };
}

const fallbackLogoFromUrl = (url) => {
  try {
    const hostname = new URL(url).hostname;
    return `https://logo.clearbit.com/${hostname}`;
  } catch {
    return null;
  }
};

const defaultHeroOptions = {
  gradient: "from-slate-800 via-slate-900 to-black",
  glow: "shadow-[0_20px_80px_rgba(15,23,42,0.35)]",
  accentText: "text-emerald-200",
  badgeLabel: "Featured tool",
};

const ReadableHero = ({ tool, options = {} }) => {
  const gradient = options.gradient || defaultHeroOptions.gradient;
  const glow = options.glow || defaultHeroOptions.glow;
  const accentText = options.accentText || defaultHeroOptions.accentText;
  const badgeLabel = options.badgeLabel || defaultHeroOptions.badgeLabel;
  const logoUrl = options.logo || tool.logo || fallbackLogoFromUrl(tool.url);

  return (
    <Section className="border-b border-slate-200 bg-white">
      <Container className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-slate-100 to-white p-8 shadow-sm ring-1 ring-slate-100">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/2 via-slate-900/0 to-slate-900/5" aria-hidden />
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 ring-1 ring-slate-200">
              {tool.category}
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">{tool.name}</h1>
              <p className="text-lg text-slate-700">{tool.headline || tool.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 text-sm text-slate-600">
              <span className="rounded-full bg-white/80 px-3 py-1 ring-1 ring-slate-200">Pricing: {tool.pricing || "See website"}</span>
              {tool.bestFor ? (
                <span className="rounded-full bg-white/80 px-3 py-1 ring-1 ring-slate-200">Best for: {tool.bestFor}</span>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-2">
              {tool.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white/90 px-3 py-1 text-xs font-medium ring-1 ring-slate-800">
                  <Tag className="h-3.5 w-3.5 text-emerald-200" />
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-slate-800 hover:bg-slate-800"
              >
                Visit {tool.name} <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-xl bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-white"
              >
                Back to hub <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative z-10 w-full max-w-md">
            <div className={`relative overflow-hidden rounded-2xl p-6 text-white shadow-2xl ring-1 ring-white/10 ${glow}`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-95`} aria-hidden />
              <div className="absolute inset-0 bg-slate-950/55" aria-hidden />
              <div className="absolute inset-0 opacity-40 mix-blend-screen" aria-hidden>
                <div className="absolute -left-10 top-8 h-24 w-24 rounded-full bg-white/30 blur-3xl" />
                <div className="absolute right-4 bottom-0 h-28 w-28 rounded-full bg-sky-200/40 blur-3xl" />
              </div>
              <div className="relative flex items-center gap-3 drop-shadow-sm">
                <div className="h-14 w-14 overflow-hidden rounded-xl bg-white/15 ring-2 ring-white/30">
                  {logoUrl ? (
                    <img
                      src={logoUrl}
                      alt={`${tool.name} logo`}
                      loading="lazy"
                      decoding="async"
                      fetchpriority="low"
                      className="h-full w-full object-cover"
                    />
                  ) : null}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/80">{badgeLabel}</p>
                  <p className="text-xl font-bold drop-shadow-sm">{tool.name}</p>
                </div>
              </div>
              <p className="relative mt-4 text-sm leading-relaxed text-white drop-shadow-sm">
                {tool.headline || tool.description}
              </p>
              <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold drop-shadow-sm">
                <Sparkles className="h-4 w-4 text-amber-200" />
                <span className={accentText}>Recommended by GoDigitalPro</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export function buildReadableToolPage(slug, heroOptions = {}) {
  return function ToolPage() {
    return <ToolDetail slugOverride={slug} extras={{ customHero: (tool) => <ReadableHero tool={tool} options={heroOptions} /> }} />;
  };
}

function Fact({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-800">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="font-semibold text-slate-900">{value}</p>
    </div>
  );
}
