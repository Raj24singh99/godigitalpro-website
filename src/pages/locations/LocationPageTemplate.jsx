import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  MousePointerClick,
  LineChart,
  Landmark,
  ClipboardCheck,
  Gauge,
} from "lucide-react";

export default function LocationPageTemplate({
  city,
  region = "",
}) {

  const seed = city.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const randBetween = (min, max) => min + (seed % (max - min + 1));
  const stats = [
    { label: `Clients from ${city}`, value: `${20 + (seed % 35)}+`, sub: `Active and past accounts across ${city}` },
    { label: "Revenue influenced", value: `₹${1 + (seed % 6)}.${randBetween(0, 9)} Cr`, sub: "Across SEO, ads, CRO programs" },
    { label: "ROI uplift", value: `${120 + (seed % 80)}%`, sub: "After structured experiments and offer tests" },
    { label: "Client retention", value: `${75 + (seed % 20)}%`, sub: "Teams staying beyond the first 90 days" },
  ];

  const services = [
    {
      title: `SEO services in ${city}`,
      desc: `We rank ${city} businesses for high-intent searches (“best service near me”, category terms, and branded queries). Expect audits, technical fixes, content clusters, schema, and authority growth that compounds each month.`,
      icon: Sparkles,
    },
    {
      title: `Google Ads / PPC in ${city}`,
      desc: `ROI-first search and Performance Max campaigns tuned to local CPCs and seasonality. We ship offer tests, routing, neg lists, and landing page pairs to keep CPLs predictable.`,
      icon: BarChart3,
    },
    {
      title: `Social media marketing`,
      desc: `Meta, LinkedIn, and Instagram creatives built for hooks, trust, and clear CTAs. Motion-led ads, UGC variants, and remarketing journeys that move prospects from interest to action.`,
      icon: MousePointerClick,
    },
    {
      title: `Performance creative & landing pages`,
      desc: `High-velocity landing pages, A/B tests, and CRO sweeps to turn traffic into pipeline. We localize proof for ${city} and keep forms/snippets lightweight for speed.`,
      icon: LineChart,
    },
    {
      title: `Marketing automation & CRM`,
      desc: `HubSpot, Zoho, and WhatsApp automations that qualify leads faster. We map SLAs, scoring, and sequences to your sales motion, then track every touchpoint.`,
      icon: ClipboardCheck,
    },
    {
      title: `Analytics, GTM, and CRO`,
      desc: `GA4, pixels, UTMs, call/directions tracking, heatmaps, and dashboards. You see spend → leads → SQLs with channel/offer attribution for ${city}.`,
      icon: Gauge,
    },
  ];

  const reasons = [
    { title: `${city} market understanding`, text: "We account for local buying behavior, language mix, and competition pockets across the city." },
    { title: "Performance-first strategy", text: "Channels prioritized by CAC/LTV math, not vanity traffic." },
    { title: "Senior-led execution", text: "Strategy + QA from leads who have shipped city launches before." },
    { title: "Weekly reporting + live dashboards", text: "Transparent numbers on spend, leads, CPL, and pipeline." },
    { title: "Content built for trust + rankings", text: `Local proof and FAQs that match ${city} search intent.` },
    { title: "No lock-in contracts", text: "Stay because results compound, not because paperwork forces it." },
    { title: "City-specific creative testing", text: `Offers, headlines, and CTAs localized to ${city} audiences.` },
  ];

  const process = [
    { title: `Audit & ${city} competitor mapping`, detail: "Benchmarks on SERP share, ads, creatives, and landing speed." },
    { title: "ICP + city demand analysis", detail: `Keywords, CPCs, and audience pockets unique to ${city}.` },
    { title: "Channel plan + KPI sheet", detail: "Budget split, targets, and experiment queue with owners." },
    { title: "Execution sprints", detail: "SEO, ads, content, and landing updates shipped weekly." },
    { title: "Optimization & scale", detail: `A/B tests, bid/offer shifts, and new segments as ${city} data grows.` },
  ];

  const industries = [
    { name: "SaaS & startups", angle: "Demand gen tuned to fast sales cycles and high-velocity trials." },
    { name: "Clinics & hospitals", angle: "Local SEO, appointment funnels, and trust-led content." },
    { name: "Real estate & builders", angle: "Micro-market landing pages, lead routing, and sales enablement." },
    { name: "D2C & e-commerce", angle: "Full-funnel ads, UGC creatives, and retention programs." },
    { name: "Restaurants & hospitality", angle: "Local discovery + remarketing to repeat guests." },
    { name: "Education / coaching", angle: "Lead capture, counselor routing, and geo ads for intakes." },
    { name: "B2B manufacturing", angle: "Search-led demand gen, ABM lists, and sales-enablement content." },
    { name: "Local services", angle: "Maps, reviews, call tracking, and fast-response playbooks." },
  ];

  const faqs = [
    { q: `How much does digital marketing cost in ${city}?`, a: `Budgets depend on goals and competition. For ${city}, most SMEs start with ₹60k–₹2L/month across SEO + ads. We share a channel split and expected CPL/lead volume before you commit.` },
    { q: `How long does SEO take in ${city}?`, a: `Technical fixes + content velocity typically show movement in 60–90 days. Competitive categories in ${city} may take 4–6 months to lock page-one positions. We pair SEO with paid to keep leads flowing while rankings climb.` },
    { q: `Do you work with startups in ${city}?`, a: `Yes. We tailor experiments to early-stage budgets, focusing on fastest proof: paid search/social with tight offers, plus landing page CRO to protect CAC.` },
    { q: `SEO or Google Ads—what works better in ${city}?`, a: `Both. Ads give instant volume, SEO compounds. We recommend a blended plan based on ${city} CPCs, your margins, and sales velocity.` },
    { q: `Can you manage multi-location campaigns from ${city}?`, a: `Yes. We build location-specific pages, feeds, and routing so calls/forms go to the right branch. Reporting breaks down performance by locality.` },
    { q: `Do you create content in local languages?`, a: "We can produce bilingual/local-language ads, landing pages, and creatives where it improves conversion and quality scores." },
    { q: `How do you report results?`, a: "Weekly checkpoints plus live dashboards covering spend, leads, CPL, pipeline, and experiment outcomes. You always see what changed and what’s next." },
    { q: `Which industries do you specialize in here?`, a: `We have playbooks for SaaS, healthcare, real estate, D2C, education, and services—adapted to ${city} demand and CPCs.` },
  ];

  const insights = [
    `Consumer behavior: ${city} buyers respond to short, proof-led pages and clear CTAs; mobile UX is critical.`,
    `CPCs & competition: Search CPCs rise around quarterly budgets and festivals; we rotate offers and dayparting to hold CPL.`,
    `Category hotspots: Real estate, education, SaaS, healthcare, and local services lead demand.`,
    `Seasonality: Festivals and local events spike traffic; we adjust creative themes and ramp remarketing to capture the lift.`,
    `Language/creative: Mixing English with local phrasing improves CTR; motion-first ads outperform static.`,
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-black/5 bg-gradient-to-r from-white via-primary/40 to-white">
        <div className="mx-auto max-w-5xl px-4 py-12 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/70 px-3 py-1 text-sm font-semibold text-slate-900 ring-1 ring-black/10 mx-auto">
            <MapPin size={16} />
            <span>{city} Digital Marketing</span>
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
              Digital Marketing Agency in {city}
            </h1>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              GoDigitalPro helps {city} businesses increase leads and sales with ROI-first SEO, Google Ads, social media, and performance creative.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-sm font-semibold text-slate-800">
            {["Google Ads Certified Team", "Meta Ads Certified Team", "12+ Years of Experience"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-black/10">
                <CheckCircle2 size={14} className="text-slate-700" />
                {item}
              </span>
            ))}
          </div>

          <Link to="/onboarding" className="btn-primary inline-flex items-center gap-2 mx-auto">
            Get a Free Growth Plan <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Local proof snapshot */}
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Proven growth for {city} brands</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {stats.map((s) => (
              <article key={s.label} className="rounded-2xl border border-black/10 bg-slate-50 p-5 shadow-sm">
                <div className="text-2xl font-bold text-slate-900">{s.value}</div>
                <div className="mt-1 text-sm font-semibold text-slate-800">{s.label}</div>
                <p className="mt-1 text-sm text-slate-700">{s.sub}</p>
              </article>
            ))}
          </div>
          <p className="text-slate-700 max-w-3xl">
            From emerging teams to enterprises across {city}{region ? ` and ${region}` : ""}, we tune channels to your margins, sales cycles, and demand seasonality.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Our digital marketing services in {city}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map(({ title, desc, icon: Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-black/10 bg-slate-50 p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-xl bg-primary/80 p-2 text-slate-900">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
          <p className="text-sm text-slate-600">
            Channel mix depends on {city} CPCs, competition, and seasonality; we plan accordingly.
          </p>
        </div>
      </section>

      {/* Why us */}
      <section className="border-b border-black/5 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-12 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Why businesses in {city} choose GoDigitalPro</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-3 rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
                <Landmark className="text-slate-700 mt-1" size={18} />
                <div>
                  <h3 className="font-semibold text-slate-900">{r.title}</h3>
                  <p className="text-sm text-slate-700 mt-1">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Our {city} growth process</h2>
          <ol className="grid gap-4 md:grid-cols-5">
            {process.map((step, idx) => (
              <li key={step.title} className="rounded-2xl border border-black/10 bg-slate-50 p-4 shadow-sm">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/80 text-slate-900 font-bold">
                  {idx + 1}
                </div>
                <h3 className="mt-3 font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-1 text-sm text-slate-700">{step.detail}</p>
              </li>
            ))}
          </ol>
          <p className="text-sm text-slate-600">
            We incorporate {city}-specific search trends, festival seasons, and competition density into every sprint.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Industries we help grow in {city}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {industries.map((ind) => (
              <article key={ind.name} className="rounded-2xl border border-black/10 bg-slate-50 p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">{ind.name}</h3>
                <p className="mt-2 text-sm text-slate-700">{ind.angle}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Local insights */}
      <section className="border-b border-black/5 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-12 space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Digital marketing trends in {city} (2025)</h2>
          <div className="space-y-2 text-sm leading-relaxed text-slate-700">
            {insights.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-black/5 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-12 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">FAQs — Digital marketing in {city}</h2>
          <div className="grid gap-3">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-semibold text-slate-900">
                  {item.q}
                  <span className="text-slate-500 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb JSON-LD placeholder */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://godigitalpro.in/" },
              { "@type": "ListItem", position: 2, name: "Locations", item: "https://godigitalpro.in/locations" },
              { "@type": "ListItem", position: 3, name: `Digital Marketing Agency in ${city}`, item: `https://godigitalpro.in/locations/${city.toLowerCase().replace(/\\s+/g, "-")}-digital-marketing-agency` },
            ],
          }),
        }}
      />
    </main>
  );
}
