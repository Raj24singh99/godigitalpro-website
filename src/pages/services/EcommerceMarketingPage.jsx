// src/pages/services/EcommerceMarketingPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet";
import { buildCanonical, faqJsonLd, serviceJsonLd } from "../../utils/seo";
import {
  ShoppingBag,
  ShoppingCart,
  Repeat,
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
  TrendingUp,
} from "lucide-react";

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-14 md:py-20 ${className}`}>{children}</section>
);
const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</div>
);

const CHANNELS = [
  { name: "Google Shopping", color: "#4285F4" },
  { name: "Meta Dynamic Ads", color: "#0866FF" },
  { name: "Product Feed Optimisation", color: "#22C55E" },
  { name: "Retargeting & Remarketing", color: "#FF0000" },
  { name: "Conversion Rate Optimisation", color: "#FFB800" },
  { name: "D2C Revenue Scaling", color: "#8B5CF6" },
];

const FAQ_ITEMS = [
  {
    question: "Do you manage Google Shopping and Performance Max together?",
    answer:
      "Yes. We set up and optimise both, ensuring product feed quality, bidding strategy, and asset groups are aligned to drive the strongest ROAS across campaign types.",
  },
  {
    question: "Can you help with product feed optimisation?",
    answer:
      "Absolutely. Feed quality is often the biggest lever in e-commerce paid media. We audit titles, descriptions, images, attributes, and data consistency to improve Shopping performance before scaling budget.",
  },
  {
    question: "How do you handle Meta dynamic ads for large catalogues?",
    answer:
      "We build catalogue sets, segment audiences by funnel stage, and test creative overlays on top of product imagery — keeping dynamic ads personalised and fresh for prospecting and retargeting.",
  },
  {
    question: "Do you work on conversion rate optimisation as well?",
    answer:
      "Yes. We review landing page layout, product page trust signals, cart flow, and checkout friction, then prioritise fixes that will move conversion rate alongside media spend.",
  },
  {
    question: "What ROAS benchmarks can we expect?",
    answer:
      "ROAS targets depend on margins, AOV, and category competition. We start with a baseline audit and set realistic improvement milestones rather than promising numbers without context.",
  },
  {
    question: "Do you support marketplaces like Amazon or Flipkart alongside D2C?",
    answer:
      "Yes. We can run a parallel strategy that optimises D2C margins while maintaining marketplace presence — with clear attribution to understand where revenue and profit are actually coming from.",
  },
];

export default function EcommerceMarketingPage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((n) => (n + 1) % CHANNELS.length), 1500);
    return () => clearInterval(t);
  }, []);

  const seoIntro = useMemo(
    () =>
      "GoDigitalPro builds e-commerce marketing systems for D2C brands and online stores — Google Shopping, Meta dynamic ads, product feed optimisation, AI-powered remarketing, conversion rate improvements, and revenue-focused measurement across every channel.",
    []
  );

  const path = "/services/ecommerce-marketing";
  const pageUrl = buildCanonical(path);
  const title = "E-commerce Marketing Agency | D2C Growth, Google Shopping & Meta Ads";
  const desc =
    "E-commerce marketing for D2C brands and online stores. Google Shopping, Meta dynamic ads, product feed optimisation, AI-powered remarketing systems, and conversion rate improvements built to scale revenue.";
  const keywords =
    "ecommerce marketing agency, d2c marketing, google shopping ads india, meta dynamic ads, product feed optimisation, ecommerce growth agency india";

  const schemaBlocks = useMemo(
    () =>
      [
        serviceJsonLd({ name: "E-commerce Marketing", description: desc, url: pageUrl }),
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
          { name: "E-commerce Marketing", url: pageUrl },
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
              "radial-gradient(60% 60% at 50% 0%, rgba(240,228,252,.50), rgba(255,255,255,0))",
          }}
        />
        <Container>
          <h1
            className="font-semibold leading-tight tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            E-commerce marketing that scales revenue, not just ad spend.
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
              Get Free E-commerce Audit
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
                title: "Product feed optimisation",
                desc: "Title, description, attribute, and image quality fixes that improve Shopping impression share and conversion rate before budget goes up.",
                icon: ShoppingBag,
                grad: "from-indigo-500 to-sky-400",
              },
              {
                title: "Google Shopping & PMax",
                desc: "Structured Shopping campaigns and Performance Max builds with bidding strategies tied to revenue and ROAS targets.",
                icon: ShoppingCart,
                grad: "from-rose-500 to-orange-400",
              },
              {
                title: "Meta dynamic ads",
                desc: "Catalogue-based dynamic creative for prospecting and retargeting, with audience segmentation by funnel stage and product interest.",
                icon: Target,
                grad: "from-emerald-500 to-teal-400",
              },
              {
                title: "Remarketing & retention",
                desc: "Cart abandonment, post-purchase upsell, and repeat purchase sequences across Google, Meta, and email to maximise LTV.",
                icon: Repeat,
                grad: "from-violet-500 to-fuchsia-400",
              },
              {
                title: "Conversion rate improvements",
                desc: "Landing page, PDP, and checkout optimisation to improve conversion rate alongside media spend so ROAS compounds over time.",
                icon: TrendingUp,
                grad: "from-amber-500 to-yellow-400",
              },
              {
                title: "Revenue measurement",
                desc: "GA4 e-commerce tracking, CAPI, offline data, and attribution modelling so every rupee of spend is tied to actual revenue.",
                icon: BarChart3,
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

      {/* ---------- GOOGLE SHOPPING ---------- */}
      <Section id="google-shopping" className="bg-primary/5">
        <Container>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Google: Shopping · PMax · Search</h2>
            <span className="text-sm font-semibold rounded-md px-2 py-1" style={{ color: "#4285F4", backgroundColor: "#4285F422", border: "1px solid #4285F455" }}>
              Google Ads
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Feed quality & structure",
                points: [
                  "Title optimisation with high-intent attribute ordering",
                  "Category mapping and custom label segmentation by margin",
                  "Automated feed rules to keep data clean at scale",
                ],
                icon: ShoppingBag,
              },
              {
                title: "Campaign architecture",
                points: [
                  "Standard Shopping segmented by category, price tier, and margin",
                  "PMax asset groups with product-specific creatives and signals",
                  "Brand protection and competitor conquest search campaigns",
                ],
                icon: ShoppingCart,
              },
              {
                title: "Bidding & budget controls",
                points: [
                  "Target ROAS and target CPA bidding by product segment",
                  "Portfolio strategies with seasonal bid adjusters",
                  "Spend pacing alerts aligned to monthly revenue targets",
                ],
                icon: Gauge,
              },
              {
                title: "Measurement & attribution",
                points: [
                  "GA4 enhanced e-commerce with purchase and revenue events",
                  "Offline conversion imports from CRM and order management",
                  "View-through and assisted conversion visibility",
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

      {/* ---------- META DYNAMIC ---------- */}
      <Section id="meta-dynamic" className="bg-white">
        <Container>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Meta: Dynamic Ads · Retargeting · Prospecting</h2>
            <span className="text-sm font-semibold rounded-md px-2 py-1" style={{ color: "#0866FF", backgroundColor: "#0866FF22", border: "1px solid #0866FF55" }}>
              Meta Ads
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Catalogue & audience setup",
                points: [
                  "Full product catalogue with category and value segmentation",
                  "Broad, lookalike, and first-party purchase audiences",
                  "Clear exclusions between prospecting and retargeting",
                ],
                icon: Users,
              },
              {
                title: "Dynamic creative",
                points: [
                  "Catalogue overlays with price badges, discount callouts, and social proof",
                  "Vertical and feed variants tested against static creatives",
                  "Weekly hook refreshes based on product performance data",
                ],
                icon: Zap,
              },
              {
                title: "Funnel & retargeting",
                points: [
                  "View, add-to-cart, and checkout abandonment sequences",
                  "Post-purchase upsell and repeat-purchase audiences",
                  "LTV-based bidding with high-value customer signals",
                ],
                icon: Repeat,
              },
              {
                title: "Measurement & guardrails",
                points: [
                  "CAPI with deduplication and clean purchase event mapping",
                  "Frequency caps and creative fatigue alerts by audience",
                  "Daily spend pacing alerts across all active catalogue sets",
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
          <h2 className="text-2xl md:text-3xl font-semibold">Data & automation stack</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Revenue tracking",
                desc: "GA4 enhanced e-commerce, CAPI, purchase events, and UTM hygiene so every campaign is tied to actual orders and revenue.",
                icon: ServerCog,
                grad: "from-sky-500 to-cyan-400",
              },
              {
                title: "CRM & order data",
                desc: "Offline conversion imports from CRM and order management so bidding learns from real purchase outcomes, not just pixel fires.",
                icon: ClipboardCheck,
                grad: "from-emerald-500 to-teal-400",
              },
              {
                title: "Budget pacing",
                desc: "Portfolio rules, seasonal planning, and alerts for over-spend, under-spend, and missed revenue opportunities.",
                icon: Gauge,
                grad: "from-amber-500 to-yellow-400",
              },
              {
                title: "Audience intelligence",
                desc: "LTV segments, repurchase windows, and product-level audience signals to keep targeting sharp across the funnel.",
                icon: Users,
                grad: "from-violet-500 to-fuchsia-400",
              },
              {
                title: "Revenue dashboards",
                desc: "Blended views across spend, ROAS, AOV, CAC, and LTV — updated weekly with clear actions for what to scale or cut.",
                icon: LayoutDashboard,
                grad: "from-indigo-500 to-blue-500",
              },
              {
                title: "Safety & compliance",
                desc: "Policy reviews, product disapproval monitoring, and escalation paths to keep Shopping and catalogue ads running clean.",
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
              Ready to scale revenue from your online store?
            </h2>
            <p className="mt-2 text-slate-700">
              We'll audit your feed quality, campaign structure, tracking, and CRO gaps — then show you exactly where revenue growth is being left on the table.
            </p>
            <div className="mt-6">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
              >
                Get Free E-commerce Audit
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
    { label: "Audit", desc: "Feed quality, campaign structure, tracking, and CRO gaps." },
    { label: "Fix", desc: "Clean measurement, feed fixes, and account hygiene." },
    { label: "Launch", desc: "Shopping, PMax, Meta dynamic, and retargeting plans." },
    { label: "Learn", desc: "Product, creative, and audience insights every week." },
    { label: "Scale", desc: "Double down on winning products, geos, and offers." },
    { label: "Report", desc: "Dashboards tied to revenue, ROAS, AOV, and LTV." },
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
