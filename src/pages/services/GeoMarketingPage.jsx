// src/pages/services/GeoMarketingPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet";
import { buildCanonical, faqJsonLd, serviceJsonLd } from "../../utils/seo";
import {
  MapPin,
  Search,
  Target,
  Users,
  BarChart3,
  Rocket,
  Gauge,
  ClipboardCheck,
  ServerCog,
  ShieldCheck,
  LayoutDashboard,
  Zap,
} from "lucide-react";

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-14 md:py-20 ${className}`}>{children}</section>
);
const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</div>
);

const CHANNELS = [
  { name: "Google Local Search", color: "#4285F4" },
  { name: "Geo-Fenced Display", color: "#0866FF" },
  { name: "Local Service Ads", color: "#22C55E" },
  { name: "Radius Targeting", color: "#FF0000" },
  { name: "Meta Location Ads", color: "#FFB800" },
  { name: "Multi-Location Campaigns", color: "#8B5CF6" },
];

const FAQ_ITEMS = [
  {
    question: "Can you run campaigns across multiple cities or regions simultaneously?",
    answer:
      "Yes. We build geo-segmented structures so each location or region gets tailored messaging, budgets, and bid adjustments based on local demand and competition.",
  },
  {
    question: "How do you optimize for local intent vs. broad search?",
    answer:
      "We layer location modifiers, radius bids, and local extensions onto high-intent search terms. We also separate brand and non-brand traffic by geography so spend goes where demand is strongest.",
  },
  {
    question: "Do you work with Google Business Profile?",
    answer:
      "Yes. We audit and optimise GBP listings, manage Q&A and reviews strategy, and connect Local Service Ads where eligible to drive direct calls and bookings.",
  },
  {
    question: "What industries benefit most from geo-targeted marketing?",
    answer:
      "Real estate, healthcare clinics, hospitality, retail chains, D2C with city-level delivery, education with physical campuses, and any brand expanding into new markets.",
  },
  {
    question: "How quickly can location-specific campaigns go live?",
    answer:
      "After an initial geo audit and structure build (typically one to two weeks), campaigns can launch and begin gathering location-level signals.",
  },
  {
    question: "What reporting do you provide?",
    answer:
      "A weekly breakdown of spend, clicks, conversions, and cost-per-lead by city or region, with recommendations on where to scale or pull back.",
  },
];

export default function GeoMarketingPage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((n) => (n + 1) % CHANNELS.length), 1500);
    return () => clearInterval(t);
  }, []);

  const seoIntro = useMemo(
    () =>
      "GoDigitalPro builds geo-targeted marketing systems for local businesses, multi-location brands, and regional expansion — combining Google Local Search, geo-fenced display, Meta location targeting, and AI-powered bid optimisation to drive foot traffic, leads, and revenue by geography.",
    []
  );

  const path = "/services/geo-marketing";
  const pageUrl = buildCanonical(path);
  const title = "Geo-Targeted Marketing Agency | Local & Multi-Location Campaigns";
  const desc =
    "Location-based marketing campaigns with AI optimisation for local businesses, multi-location brands, and regional expansion. Google Local, geo-fenced display, Meta location ads, and radius targeting.";
  const keywords =
    "geo-targeted marketing, local marketing agency, multi-location campaigns, google local ads, radius targeting, location-based advertising india";

  const schemaBlocks = useMemo(
    () =>
      [
        serviceJsonLd({ name: "Geo-Targeted Marketing", description: desc, url: pageUrl }),
        faqJsonLd(FAQ_ITEMS),
      ].filter(Boolean),
    [desc, pageUrl]
  );

  return (
    <main className="bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <SeoHelmet
        title={title}
        description={desc}
        canonical={pageUrl}
        keywords={keywords}
        schema={schemaBlocks}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Services", url: `${buildCanonical("/")}#services` },
          { name: "Geo-Targeted Marketing", url: pageUrl },
        ]}
      />

      <style>{`
        @keyframes fadeSwap { 0%{opacity:0; transform:translateY(8px) scale(.98)} 20%{opacity:1; transform:translateY(0) scale(1)} 80%{opacity:1} 100%{opacity:0; transform:translateY(-8px) scale(.98)} }
        @keyframes glow { 0%,100%{box-shadow:0 0 0 0 rgba(59,130,246,0)} 50%{box-shadow:0 0 0 10px rgba(59,130,246,.12)} }
        @keyframes lineFlow { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        @media (prefers-reduced-motion: reduce){ *{animation:none !important; transition:none !important} }
      `}</style>

      {/* ---------- HERO ---------- */}
      <Section className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(228,240,252,.50), rgba(255,255,255,0))",
          }}
        />
        <Container>
          <h1
            className="font-semibold leading-tight tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Location-based campaigns that convert local demand into revenue.
          </h1>

          <div className="mt-3 h-[2.8lh] overflow-hidden">
            <div
              key={idx}
              className="inline-block animate-[fadeSwap_1.5s_ease]"
              style={{ fontSize: "clamp(1.4rem, 3.2vw, 2.2rem)", color: CHANNELS[idx].color }}
            >
              {CHANNELS[idx].name}
            </div>
          </div>

          <p className="sr-only">{seoIntro}</p>

          <div className="mt-8">
            <Link
              to="/onboarding"
              className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
            >
              Get Free Geo Marketing Audit
            </Link>
          </div>
        </Container>
      </Section>

      {/* ---------- WHAT WE DO ---------- */}
      <Section id="what-we-do" className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">What we do</h2>
        </Container>
        <Container>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Local search capture",
                desc: "Geo-modified keywords, radius bid adjustments, and location extensions built to capture high-intent nearby searchers.",
                icon: Search,
                grad: "from-indigo-500 to-sky-400",
              },
              {
                title: "Geo-fenced display",
                desc: "Boundary-based display and native placements that reach your audience when they're in — or near — relevant locations.",
                icon: MapPin,
                grad: "from-rose-500 to-orange-400",
              },
              {
                title: "Measurement by location",
                desc: "Store visit tracking, call extensions, and conversion attribution broken down by city, radius, and pin code.",
                icon: ServerCog,
                grad: "from-emerald-500 to-teal-400",
              },
              {
                title: "Budget allocation by geo",
                desc: "City- and region-level budget controls so spend follows real demand signals and seasonal patterns.",
                icon: Gauge,
                grad: "from-violet-500 to-fuchsia-400",
              },
              {
                title: "Multi-location scaling",
                desc: "Replicate winning structures across new locations with templated campaigns, local creative, and centralised reporting.",
                icon: Zap,
                grad: "from-amber-500 to-yellow-400",
              },
              {
                title: "GBP & Local SEO signals",
                desc: "Google Business Profile optimisation, review strategy, and local citation building that strengthens organic and paid reach.",
                icon: ShieldCheck,
                grad: "from-slate-500 to-slate-400",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="rounded-2xl border border-black/10 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm"
                style={{ minHeight: 210 }}
              >
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${c.grad} p-2 text-white`}>
                    <c.icon className="size-5" />
                  </span>
                  <h3 className="font-semibold">{c.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{c.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- GOOGLE LOCAL ---------- */}
      <Section id="google-local" className="bg-primary/5">
        <Container>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Google: Local Search · Maps · LSA</h2>
            <span className="text-sm font-semibold rounded-md px-2 py-1" style={{ color: "#4285F4", backgroundColor: "#4285F422", border: "1px solid #4285F455" }}>
              Google Ads
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Local search structure",
                points: [
                  "City + service keyword clusters with tight match types",
                  "Radius and location bid modifiers by demand density",
                  "Negative geo lists to prevent cross-location cannibalism",
                ],
                icon: Search,
              },
              {
                title: "Google Business Profile",
                points: [
                  "Full GBP audit and optimisation for all locations",
                  "Review velocity strategy and Q&A management",
                  "Photo and post cadence to keep listings active",
                ],
                icon: MapPin,
              },
              {
                title: "Local Service Ads",
                points: [
                  "LSA setup and verification for eligible categories",
                  "Lead dispute management and quality scoring",
                  "Budget controls tied to weekly lead targets",
                ],
                icon: Rocket,
              },
              {
                title: "Performance Max for store goals",
                points: [
                  "Store visit and local action conversion setup",
                  "Asset groups tailored to each city or branch",
                  "Signal layering with first-party location data",
                ],
                icon: BarChart3,
              },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-xl bg-blue-500/90 p-2 text-white">
                    <b.icon className="size-5" />
                  </span>
                  <h3 className="font-semibold">{b.title}</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-blue-500" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- META LOCATION ---------- */}
      <Section id="meta-location" className="bg-white">
        <Container>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Meta: Location Targeting · Geo Fencing · Local Awareness</h2>
            <span className="text-sm font-semibold rounded-md px-2 py-1" style={{ color: "#0866FF", backgroundColor: "#0866FF22", border: "1px solid #0866FF55" }}>
              Meta Ads
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Location targeting layers",
                points: [
                  "Pin-drop radius, city, and region audience builds",
                  "Layered demographics and interest signals on top of geo",
                  "Separate campaigns per location to keep budgets clean",
                ],
                icon: Target,
              },
              {
                title: "Local creative & messaging",
                points: [
                  "City-specific headlines, offers, and social proof",
                  "Dynamic location insertion for personalised copy",
                  "Reels and stories formatted for each market's context",
                ],
                icon: Users,
              },
              {
                title: "Store traffic & awareness",
                points: [
                  "Store traffic objective with location-level reach optimisation",
                  "Geo-fenced retargeting for nearby audiences",
                  "Foot traffic lift measurement where available",
                ],
                icon: BarChart3,
              },
              {
                title: "Multi-location guardrails",
                points: [
                  "Audience overlap controls between branches",
                  "Frequency caps per city so no location gets over-saturated",
                  "Daily pacing alerts across all active geographies",
                ],
                icon: ClipboardCheck,
              },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-black/10 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-xl bg-blue-600/90 p-2 text-white">
                    <b.icon className="size-5" />
                  </span>
                  <h3 className="font-semibold">{b.title}</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-blue-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- DATA STACK ---------- */}
      <Section id="data-ops" className="bg-primary/5">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">Data & measurement stack</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Location attribution",
                desc: "Store visit conversions, call tracking, and form submissions attributed back to each city or radius segment.",
                icon: ServerCog,
                grad: "from-sky-500 to-cyan-400",
              },
              {
                title: "Geo-level reporting",
                desc: "City-by-city breakdown of CPL, conversion rate, and revenue so budget decisions are driven by local ROI.",
                icon: LayoutDashboard,
                grad: "from-indigo-500 to-blue-500",
              },
              {
                title: "Budget pacing by location",
                desc: "Spend guardrails and daily pacing alerts per city so no location over-spends or misses its targets.",
                icon: Gauge,
                grad: "from-amber-500 to-yellow-400",
              },
              {
                title: "Audience quality by geo",
                desc: "Segment quality scores per market to identify high-ROI geographies and avoid wasted spend in low-converting zones.",
                icon: Users,
                grad: "from-violet-500 to-fuchsia-400",
              },
              {
                title: "Cross-channel view",
                desc: "Unified dashboard merging Google, Meta, and organic signals so local performance is visible in one place.",
                icon: BarChart3,
                grad: "from-emerald-500 to-teal-400",
              },
              {
                title: "Safety & compliance",
                desc: "Policy reviews, geo exclusions, disapproved asset monitoring, and escalation paths for location-specific issues.",
                icon: ShieldCheck,
                grad: "from-slate-500 to-slate-400",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className={`inline-flex rounded-xl bg-gradient-to-br ${c.grad} p-2 text-white`}>
                    <c.icon className="size-5" />
                  </span>
                  <h3 className="font-semibold">{c.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{c.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- PROCESS ---------- */}
      <ProcessStepper />

      {/* ---------- CTA ---------- */}
      <Section className="bg-white">
        <Container>
          <div className="text-center rounded-3xl border border-black/10 bg-white p-8 md:p-10 shadow-sm">
            <h2 className="font-semibold" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              Ready to turn local demand into revenue?
            </h2>
            <p className="mt-2 text-slate-700">
              We'll audit your location targeting, GBP listings, bid structure, and conversion setup — then show you where local scale is being left behind.
            </p>
            <div className="mt-6">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
              >
                Get Free Geo Marketing Audit
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- FAQ ---------- */}
      <Section id="faq" className="bg-primary/5">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
        </Container>
        <Container className="mt-6">
          <div className="divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
            {FAQ_ITEMS.map(({ question, answer }) => (
              <details key={question} className="group p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium">{question}</span>
                  <span className="text-slate-500 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}

function ProcessStepper() {
  const steps = [
    { label: "Audit", desc: "Geo structure, bid coverage, and tracking gaps by location." },
    { label: "Fix", desc: "Clean measurement, GBP setup, and campaign hygiene." },
    { label: "Launch", desc: "Local search, geo-fenced display, and Meta location plans." },
    { label: "Learn", desc: "City-level creative, query, and audience insights weekly." },
    { label: "Scale", desc: "Double down on high-converting geographies and offers." },
    { label: "Report", desc: "Dashboards tied to location-level leads and revenue." },
  ];

  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % steps.length), 1500);
    return () => clearInterval(t);
  }, [steps.length]);

  return (
    <Section id="process">
      <Container>
        <h2 className="text-2xl md:text-3xl font-semibold">Our process</h2>

        <div className="relative mt-8 md:hidden">
          <div aria-hidden className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <li key={s.label} className="relative pl-16">
                <div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white shadow-sm ${
                    i === active ? "ring-4 ring-blue-100 animate-[glow_1.5s_ease-in-out]" : ""
                  }`}
                >
                  <span className="text-xs font-semibold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold">{s.label}</p>
                  <p className="mt-1 text-xs text-slate-700">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative mt-10 hidden md:block">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 rounded-full"
            style={{
              background: "linear-gradient(90deg,#6366f1,#10b981,#38bdf8,#6366f1)",
              backgroundSize: "200% 100%",
              animation: "lineFlow 6s linear infinite",
            }}
          />
          <ol className="relative z-10 grid grid-cols-6">
            {steps.map((s, i) => (
              <li key={s.label} className="flex flex-col items-center gap-3 px-2 text-center">
                <div
                  className={`grid h-16 w-16 place-items-center rounded-full border border-black/10 bg-white shadow-sm ${
                    i === active ? "ring-4 ring-blue-100 animate-[glow_1.5s_ease-in-out]" : ""
                  }`}
                  aria-current={i === active ? "step" : undefined}
                >
                  <span className="text-sm font-semibold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="px-2">
                  <p className="text-sm font-semibold">{s.label}</p>
                  <p className="text-xs text-slate-600">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
