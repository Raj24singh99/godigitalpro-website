// src/pages/industries/MarketplacesQuickCommercePage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  PackageCheck,
  FileSpreadsheet,
  Search,
  Rocket,
  BarChart3,
  Bell,
  Database,
  Zap,
  ShieldCheck,
  Tag,
  Truck,
  Star,
} from "lucide-react";

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-14 md:py-20 ${className}`}>{children}</section>
);
const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</div>
);

/** Rotating platforms (brand colors) */
const PLATFORMS = [
  { name: "Amazon", color: "#FF9900" },
  { name: "Flipkart", color: "#2874F0" },
  { name: "Blinkit", color: "#00C15B" },
  { name: "Zepto", color: "#7F3FFC" },
  { name: "Instamart", color: "#FF5A5F" },
  { name: "Nykaa", color: "#FF4E8A" },
  { name: "Myntra", color: "#FF3F6C" },
];

export default function MarketplacesQuickCommercePage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((n) => (n + 1) % PLATFORMS.length), 1500);
    return () => clearInterval(t);
  }, []);

  const seoIntro = useMemo(
    () =>
      "GoDigitalPro runs end-to-end marketplace and quick commerce growth: catalog compliance, listing SEO, retail media ads, price and inventory intelligence, review mining, and fulfilment governance across Amazon, Flipkart, Blinkit, Zepto, Instamart, Nykaa, and Myntra.",
    []
  );

  // ---- SEO constants ----
  const site = "https://www.godigitalpro.in";
  const path = "/industries/marketplaces-quick-commerce";
  const pageUrl = `${site}${path}`;
  const ogImage = `${site}/og-marketplaces.jpg`;

  const title = "Marketplaces & Quick Commerce | Amazon, Flipkart, Blinkit";
  const desc =
    "End-to-end marketplace growth: catalog & compliance, listing SEO, retail media, price/stock intelligence, reviews, and fulfilment governance.";
  const keywords =
    "marketplace management, retail media, Amazon ads, Flipkart ads, Blinkit, Instamart, Zepto, listing SEO, A+ content, buy box, eCommerce ops, GoDigitalPro";

  return (
    <main className="bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Helmet>
        {/* Basic SEO */}
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <meta name="author" content="GoDigitalPro" />
        <meta name="publisher" content="GoDigitalPro" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="GoDigitalPro" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <style>{`
        @keyframes fadeSwap { 0%{opacity:0; transform:translateY(8px) scale(.98)} 20%{opacity:1; transform:translateY(0) scale(1)} 80%{opacity:1} 100%{opacity:0; transform:translateY(-8px) scale(.98)} }
        @keyframes glow { 0%,100%{box-shadow:0 0 0 0 rgba(59,130,246,0)} 50%{box-shadow:0 0 0 10px rgba(59,130,246,.12)} }
        @keyframes lineFlow { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        @media (prefers-reduced-motion: reduce){ *{animation:none !important; transition:none !important} }
      `}</style>

      {/* ========== HERO ========== */}
      <Section className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(240,252,228,.50), rgba(255,255,255,0))",
          }}
        />
        <Container>
          <h1
            className="font-semibold leading-tight tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Marketplaces & Quick Commerce
          </h1>

          {/* Bigger animated keyword line — only the platform name changes color */}
          <div className="mt-3 h-[2.8lh] overflow-hidden">
            <div
              key={idx}
              className="inline-block animate-[fadeSwap_1.5s_ease]"
              style={{ fontSize: "clamp(1.4rem, 3.2vw, 2.2rem)" }}
            >
              <span className="text-slate-700">We manage </span>
              <span
                className="font-semibold"
                style={{ color: PLATFORMS[idx].color }}
              >
                {PLATFORMS[idx].name}
              </span>
              <span className="text-slate-700"> so you win the shelf.</span>
            </div>
          </div>

          {/* crawler SEO */}
          <p className="sr-only">{seoIntro}</p>

          {/* Single CTA */}
          <div className="mt-8">
            <Link
              to="/onboarding"
              className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
            >
              Start Marketplace Audit
            </Link>
          </div>
        </Container>
      </Section>

      {/* ========== WHAT WE DO (4 focused cards) ========== */}
      <Section id="what-we-do" className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">What we do</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              {
                title: "Catalog & Compliance",
                desc:
                  "Category mapping, GTIN/HSN, pack sizes, return rules, and SLA-ready listings.",
                icon: FileSpreadsheet,
                grad: "from-indigo-500 to-sky-400",
              },
              {
                title: "Listing SEO & Content",
                desc:
                  "Keyword-backed titles, bullets, A+ images/video, comparison tables, FAQs.",
                icon: Search,
                grad: "from-rose-500 to-orange-400",
              },
              {
                title: "Retail Media & Promos",
                desc:
                  "Sponsored ads, deal calendar, coupon/BOGO logic, and portfolio budgeting.",
                icon: Tag,
                grad: "from-emerald-500 to-teal-400",
              },
              {
                title: "Ops & Fulfilment",
                desc:
                  "Buy-box guardrails, inventory routing (FC/DC), and promise-date reliability.",
                icon: Truck,
                grad: "from-violet-500 to-fuchsia-400",
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

      {/* ========== DATA & OPS STACK (analytics-first) ========== */}
      <Section id="data-ops" className="bg-primary/5">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">Data & Ops stack</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "SKU/ASIN spine",
                desc: "Unify SKUs across portals; map variants and packs to one truth.",
                icon: Database,
                grad: "from-sky-500 to-cyan-400",
              },
              {
                title: "Price & availability watch",
                desc: "Track buy-box, undercutters, OOS risk, and price floors.",
                icon: PackageCheck,
                grad: "from-amber-500 to-yellow-400",
              },
              {
                title: "Review mining",
                desc: "Extract themes, QA fixes, and copy angles from reviews & Q&A.",
                icon: Star,
                grad: "from-rose-500 to-pink-400",
              },
              {
                title: "Performance dashboards",
                desc: "Blended view: search rank, CTR, CVR, ASP, ROAS, and SLA score.",
                icon: BarChart3,
                grad: "from-emerald-500 to-teal-400",
              },
              {
                title: "Alerts & guardrails",
                desc: "Auto-alert for OOS, price leaks, policy flags, and bad images.",
                icon: Bell,
                grad: "from-violet-500 to-fuchsia-400",
              },
              {
                title: "Experiment engine",
                desc: "A/B titles, main image, and hero video; roll forward what wins.",
                icon: Zap,
                grad: "from-indigo-500 to-blue-500",
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

      {/* ========== WHY US (ops + governance tone) ========== */}
      <Section id="why-us" className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">Why GoDigitalPro</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Retail-media science",
                desc: "Keyword intent + portfolio budget rules; no one-off spend spikes.",
                icon: Rocket,
                grad: "from-emerald-500 to-lime-400",
              },
              {
                title: "Operational rigor",
                desc: "SLA playbooks, FC routing, and weekly defect triage with owners.",
                icon: PackageCheck,
                grad: "from-sky-500 to-cyan-400",
              },
              {
                title: "Compliance & brand safety",
                desc: "Policy-safe catalogs and clear governance to avoid penalties.",
                icon: ShieldCheck,
                grad: "from-violet-500 to-fuchsia-400",
              },
            ].map((x) => (
              <article key={x.title} className="rounded-2xl border border-black/10 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className={`inline-flex rounded-xl bg-gradient-to-br ${x.grad} p-2 text-white`}>
                    <x.icon className="size-5" />
                  </span>
                  <h3 className="font-semibold">{x.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{x.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* ========== PROCESS (vertical on mobile; horizontal desktop) ========== */}
      <ProcessStepper />

      {/* ========== CTA ========== */}
      <Section className="bg-white">
        <Container>
          <div className="text-center rounded-3xl border border-black/10 bg-white p-8 md:p-10 shadow-sm">
            <h2 className="font-semibold" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              Own the buy box. Win the shelf.
            </h2>
            <p className="mt-2 text-slate-700">
              Start with a quick audit across content, price, stock, and ads.
            </p>
            <div className="mt-6">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
              >
                Start Marketplace Audit
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ========== FAQ (plain language) ========== */}
      <Section id="faq" className="bg-primary/5">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
        </Container>
        <Container className="mt-6">
          <div className="divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
            {[
              {
                q: "What do you need from us to start?",
                a: "Access to seller panels, a product list with MRP/pack info, and ad accounts if already running.",
              },
              {
                q: "Do you support both inventory and marketplace models?",
                a: "Yes. We handle seller-fulfilled, FBA/Smart, and 3P marketplace models with clear SLAs.",
              },
              {
                q: "Will you create A+ content and videos?",
                a: "Yes. We do full listing makeovers—images, comparison tables, FAQs, and short explainer videos.",
              },
              {
                q: "How do you run ads without wasting budget?",
                a: "We use search-intent keywords, negative rules, product targeting, and strict portfolio budgets.",
              },
              {
                q: "Do you cover quick commerce operations too?",
                a: "Yes. We manage catalog readiness, slot availability, and discount hygiene for Blinkit/Instamart/Zepto.",
              },
              {
                q: "What cadence do we follow?",
                a: "Weekly review on content, price, stock, and ads with a simple scorecard and next actions.",
              },
            ].map((f) => (
              <details key={f.q} className="group p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium">{f.q}</span>
                  <span className="text-slate-500 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Marketplaces & Quick Commerce",
            provider: { "@type": "Organization", name: "GoDigitalPro" },
            serviceType: "Marketplace Management and Retail Media",
            areaServed: "India",
            url: pageUrl,
            description: desc,
            offers: { "@type": "Offer", category: "Service" },
          }),
        }}
      />
    </main>
  );
}

/* ================ PROCESS ================ */
function ProcessStepper() {
  const steps = [
    { label: "Audit", desc: "Content, price, stock, ads, and defects." },
    { label: "Fix", desc: "Compliance and catalog clean-up." },
    { label: "Optimize", desc: "SEO, images, A+ and video." },
    { label: "Scale", desc: "Retail media + promotions calendar." },
    { label: "Automate", desc: "Alerts, rules, and experiments." },
    { label: "Govern", desc: "Scorecards, SLAs, and reviews." },
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

        {/* MOBILE: vertical timeline */}
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
                  <span className="text-xs font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold">{s.label}</p>
                  <p className="mt-1 text-xs text-slate-700">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* DESKTOP: horizontal stepper */}
        <div className="relative mt-10 hidden md:block">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 rounded-full"
            style={{
              background:
                "linear-gradient(90deg,#6366f1,#10b981,#38bdf8,#6366f1)",
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
                  <span className="text-sm font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
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
