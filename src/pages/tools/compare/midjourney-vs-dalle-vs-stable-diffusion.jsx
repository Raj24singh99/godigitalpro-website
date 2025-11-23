import React from "react";
import {
  Sparkles,
  Gauge,
  Wand2,
  ShieldCheck,
  Crown,
  ArrowLeft,
  Image as ImageIcon,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "midjourney vs dalle vs stable diffusion";
const canonical = buildCanonical(
  "/tools/compare/midjourney-vs-dalle-vs-stable-diffusion"
);

const brandMeta = {
  midjourney: {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/midjourney.com",
  },
  "dall·e": {
    gradient: "from-emerald-500 via-teal-500 to-blue-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/openai.com",
  },
  "stable diffusion": {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/stability.ai",
  },
};

const contenders = [
  {
    key: "midjourney",
    name: "Midjourney",
    blurb: "Artistic, stylized images with standout quality and mood.",
    url: "/tools/midjourney",
  },
  {
    key: "dall·e",
    name: "DALL·E",
    blurb: "Versatile edits, in/outpainting, and balanced default quality.",
    url: "https://openai.com/dall-e-3",
  },
  {
    key: "stable diffusion",
    name: "Stable Diffusion",
    blurb:
      "Open/self-hosted with community models, control nets, and fine-grained control.",
    url: "https://stability.ai/stable-image",
  },
];

const comparisonRows = [
  {
    label: "Core strength",
    midjourney: "Artistic quality, lighting, and composition out of the box.",
    "dall·e": "Versatility; strong edits and in/outpainting support.",
    "stable diffusion":
      "Custom/self-hosted models with advanced control options.",
  },
  {
    label: "Access model",
    midjourney: "Discord-first with an evolving web app for generation & galleries.",
    "dall·e": "Web and API access via OpenAI and partner products.",
    "stable diffusion":
      "Self-host, desktop UIs, or cloud providers (e.g. Stability, RunPod).",
  },
  {
    label: "Editing & control",
    midjourney:
      "Stylize, seeds, references, and variations; less explicit geometry control.",
    "dall·e":
      "Inpainting, outpainting, and prompt adherence tuned for edits.",
    "stable diffusion":
      "ControlNet, LoRAs, model swaps, and fine-grained configuration.",
  },
  {
    label: "Cost model",
    midjourney:
      "Subscription tiers with 'fast hours' and relaxed generation limits.",
    "dall·e":
      "Pay-per-image or credit-based pricing via OpenAI and partner UIs.",
    "stable diffusion":
      "Compute-based (self-host) or per-image credits via many providers.",
  },
  {
    label: "Brand safety & policy",
    midjourney:
      "Strong moderation and community rules; more stylized, less literal outputs.",
    "dall·e":
      "Enterprise-ready safety layers and content filters via OpenAI.",
    "stable diffusion":
      "Varies by model and host; self-hosted deployments require your own guardrails.",
  },
  {
    label: "Best for",
    midjourney:
      "Marketing visuals, concept art, moodboards, and ideation sprints.",
    "dall·e":
      "Brand-safe, editable assets and workflows that need in-app editing.",
    "stable diffusion":
      "Teams needing ownership, offline/self-hosted control, or bespoke models.",
  },
];

const scoreboard = [
  {
    label: "Visual quality (default)",
    midjourney: 9.6,
    "dall·e": 9.2,
    "stable diffusion": 8.8,
  },
  {
    label: "Editing & flexibility",
    midjourney: 8.4,
    "dall·e": 9.4,
    "stable diffusion": 9.5,
  },
  {
    label: "Ease of use",
    midjourney: 8.8,
    "dall·e": 9.0,
    "stable diffusion": 7.8,
  },
  {
    label: "Control & customization",
    midjourney: 8.6,
    "dall·e": 9.0,
    "stable diffusion": 9.6,
  },
  {
    label: "Value for money",
    midjourney: 8.5,
    "dall·e": 8.8,
    "stable diffusion": 9.0,
  },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  midjourney: avg("midjourney"),
  "dall·e": avg("dall·e"),
  "stable diffusion": avg("stable diffusion"),
};

const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "Midjourney subscription tiers",
    monthly: "Subscription tiers with fast hours included",
    annual: "Annual equivalents via pre-paid plans/top-ups",
    limits:
      "Fast vs relaxed generations, concurrent jobs, and commercial terms by tier",
    notes:
      "Best for teams that generate a lot of marketing/creative assets and value predictable, subscription-based access.",
  },
  {
    plan: "DALL·E (via OpenAI and partners)",
    monthly: "Usage-based (credits / per-image pricing)",
    annual: "Typically pay-as-you-go rather than fixed annual plans",
    limits:
      "Charged by image size, quality, and volume; depends on integration or platform",
    notes:
      "Great for product teams that integrate image generation and editing into existing apps or workflows.",
  },
  {
    plan: "Stable Diffusion (self-host & cloud)",
    monthly: "Compute-based or per-image credits with third-party hosts",
    annual: "Enterprise contracts or long-running compute options",
    limits:
      "Depends on your GPU/infra or credit package with a chosen provider",
    notes:
      "Ideal when you want to control infrastructure costs and tune models for specific brands or use cases.",
  },
];

const featureBullets = {
  quality: [
    "Midjourney: Consistently cinematic lighting, composition, and artistic style even from short prompts.",
    "DALL·E: Balanced, versatile images that work well across marketing, product, and UI contexts.",
    "Stable Diffusion: Quality varies with model and settings; some community checkpoints rival premium tools.",
  ],
  editing: [
    "Midjourney: Great for variations, remixing prompts, and style tweaks, but less literal editing on a canvas.",
    "DALL·E: Strong inpainting and outpainting for removing, replacing, or extending content inside an image.",
    "Stable Diffusion: Advanced control flows via ControlNet, masks, and custom UIs (e.g. ComfyUI, Automatic1111).",
  ],
  ownership: [
    "Midjourney: SaaS-first; you operate within their platform and ToS, ideal when infra ownership is not a priority.",
    "DALL·E: API access lets you integrate generation into your own apps while OpenAI hosts the models.",
    "Stable Diffusion: Self-hostable and open; you can keep data and models within your own infrastructure.",
  ],
};

const prosCons = {
  midjourney: {
    pros: [
      "Best-in-class artistic quality and mood straight from short prompts",
      "Great for rapid ideation, concept art, and brand moodboards",
      "Strong community presets, prompt inspiration, and style references",
    ],
    cons: [
      "Discord-first UX can be noisy and less structured for large teams",
      "Less literal control over exact layout/geometry than toolchains built around ControlNet",
      "No fully self-hosted option; you are tied to their platform and policies",
    ],
  },
  "dall·e": {
    pros: [
      "Very strong editing, inpainting, and outpainting tools",
      "Balanced, brand-safe outputs with robust policy and moderation layers",
      "Accessible via web UI and APIs that plug into existing workflows",
    ],
    cons: [
      "Default style is balanced rather than overtly 'cinematic' like Midjourney",
      "Heavily governed content policies may limit some creative edge cases",
      "Pricing is usage-based, so heavy experimentation can add up",
    ],
  },
  "stable diffusion": {
    pros: [
      "Open ecosystem with many community models and checkpoints",
      "Self-hosting, offline, and VPC-friendly deployments for sensitive data",
      "ControlNet, LoRAs, and custom pipelines provide extreme control",
    ],
    cons: [
      "Setup, tuning, and infra management require more technical skill",
      "Output quality depends heavily on model choice, prompt craft, and pipeline",
      "You must implement your own safety, governance, and access controls",
    ],
  },
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "Midjourney wins for out-of-the-box artistic quality. DALL·E wins for editing workflows and versatility. Stable Diffusion wins for customization, self-hosted control, and cost ownership if you invest in the setup.",
  },
  {
    q: "Best for brand-safe, editable assets?",
    a: "DALL·E is usually the best fit thanks to strong inpainting, outpainting, and moderation layers suitable for brands and product teams.",
  },
  {
    q: "Best for custom workflows and ownership?",
    a: "Stable Diffusion is ideal when you need to self-host, fine-tune models, or build bespoke pipelines with ControlNet, LoRAs, and your own safety stack.",
  },
  {
    q: "Best for fast creative concepting?",
    a: "Midjourney is excellent for quickly turning loose ideas into highly polished visuals that help align stakeholders on direction.",
  },
  {
    q: "Which is easiest for non-technical teams?",
    a: "DALL·E and Midjourney are both approachable. DALL·E feels more like a traditional app/editor; Midjourney’s Discord flow has a short learning curve but can feel noisy at scale.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase();
  const meta =
    brandMeta[key] || {
      gradient: "from-slate-400 to-slate-600",
      badge: "bg-slate-100 text-slate-900",
    };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${meta.gradient}`}
      >
        {meta.logo ? (
          <img
            src={meta.logo}
            alt={`${name} logo`}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-sm font-bold text-white">
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>
        {name}
      </span>
    </div>
  );
};

export default function MidjourneyVsDalleVsStableDiffusionPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Midjourney vs DALL·E vs Stable Diffusion – AI image generators (${YEAR})`}
        description="Compare Midjourney, DALL·E, and Stable Diffusion on image quality, editing workflows, customization, pricing models, and the best use-cases for each AI image generator."
        canonical={canonical}
        keywords={`${primaryKeyword}, ai image generator comparison, midjourney vs dalle vs stable diffusion`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-purple-700">
          AI image generators
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Midjourney vs DALL·E vs Stable Diffusion ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>Midjourney</strong> delivers the most artistic out-of-the-box quality,{" "}
          <strong>DALL·E</strong> excels at edits and versatile assets, and{" "}
          <strong>Stable Diffusion</strong> offers maximum customization and
          self-hosted control. This breakdown helps you choose the right generator
          for your design, product, and content workflows.
        </p>

        {/* Quick verdict + best for */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-purple-50/90 p-6 ring-1 ring-purple-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-purple-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Midjourney</strong> for standout, stylized visuals and
              concept art. Choose <strong>DALL·E</strong> when you need strong
              inpainting/outpainting and brand-safe assets. Choose{" "}
              <strong>Stable Diffusion</strong> if you care most about control,
              self-hosting, or custom models.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-purple-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-purple-700">
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-semibold text-slate-900">Best for</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <ImageIcon className="mt-0.5 h-4 w-4 text-purple-600" />
                <span>
                  <strong>Midjourney:</strong> Creative concepting, marketing
                  visuals, and moodboards.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Wand2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                <span>
                  <strong>DALL·E:</strong> Editable brand assets, campaigns, and
                  UIs where you iterate inside the same canvas.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-amber-600" />
                <span>
                  <strong>Stable Diffusion:</strong> Controlled pipelines, custom
                  models, and on-prem or VPC deployments.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contender cards */}
        <div className="mt-10 overflow-hidden rounded-2xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
          <div className="grid gap-4 md:grid-cols-3">
            {contenders.map((tool) => (
              <div
                key={tool.key}
                className="rounded-2xl bg-white/70 p-4 ring-1 ring-slate-200"
              >
                <div className="flex items-center justify-between gap-2">
                  <LogoBadge name={tool.name} />
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                    Contender
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-700">{tool.blurb}</p>
                <a
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-purple-700 hover:text-purple-600"
                  href={tool.url}
                  target={tool.url.startsWith("http") ? "_blank" : "_self"}
                  rel={tool.url.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-purple-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[700px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Midjourney</th>
                  <th className="px-4 py-3">DALL·E</th>
                  <th className="px-4 py-3">Stable Diffusion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="align-top odd:bg-white even:bg-slate-50/60">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.label}
                    </th>
                    <td className="px-4 py-3">{row.midjourney}</td>
                    <td className="px-4 py-3">{row["dall·e"]}</td>
                    <td className="px-4 py-3">{row["stable diffusion"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[700px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Midjourney</th>
                  <th className="px-4 py-3">DALL·E</th>
                  <th className="px-4 py-3">Stable Diffusion</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const mj = row.midjourney;
                  const de = row["dall·e"];
                  const sd = row["stable diffusion"];
                  const maxVal = Math.max(mj, de, sd);
                  const winner =
                    mj === de && de === sd
                      ? "Tie"
                      : maxVal === mj
                      ? "Midjourney"
                      : maxVal === de
                      ? "DALL·E"
                      : "Stable Diffusion";

                  return (
                    <tr
                      key={row.label}
                      className="align-middle odd:bg-white even:bg-slate-50/60"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Midjourney"
                            ? "font-semibold text-purple-800"
                            : "text-slate-700"
                        }`}
                      >
                        {mj}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "DALL·E"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {de}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Stable Diffusion"
                            ? "font-semibold text-amber-800"
                            : "text-slate-700"
                        }`}
                      >
                        {sd}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-purple-50 via-emerald-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-purple-800">
                    {averages.midjourney}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages["dall·e"]}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages["stable diffusion"]}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Wand2 className="h-6 w-6 text-purple-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <ImageIcon className="h-5 w-5 text-purple-600" /> Quality & style
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.quality.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Gauge className="h-5 w-5 text-emerald-600" /> Editing & control
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.editing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <ShieldCheck className="h-5 w-5 text-amber-600" /> Ownership & deployment
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.ownership.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[700px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan / model</th>
                  <th className="px-4 py-3">Monthly (typical)</th>
                  <th className="px-4 py-3">Annual / billing</th>
                  <th className="px-4 py-3">Key limits</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.plan}>
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.plan}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.monthly}</td>
                    <td className="px-4 py-3 text-slate-700">{row.annual}</td>
                    <td className="px-4 py-3 text-slate-700">{row.limits}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600">
            Pricing and limits change frequently across vendors and hosts. Always confirm
            current details and legal terms on each provider&apos;s pricing page before
            committing to a workflow.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>Midjourney:</strong> Discord-first, which feels fast and playful
              once you learn the commands, but can be noisy. The emerging web app makes
              browsing and remixing easier for teams.
            </li>
            <li>
              <strong>DALL·E:</strong> Feels like a familiar editor with prompts and
              brushes. Easy for marketers, designers, and non-technical stakeholders to
              understand quickly.
            </li>
            <li>
              <strong>Stable Diffusion:</strong> Depends on the UI. Tools like
              Automatic1111/ComfyUI unlock huge power, but require a steeper learning
              curve and more technical comfort.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>Marketing & brand campaigns:</strong> Midjourney often wins for
              jaw-dropping, on-brief visuals once you dial in your prompt recipes.
            </li>
            <li>
              <strong>Product teams & app UX:</strong> DALL·E wins when you need to
              iteratively edit assets within a single canvas and plug generation into an
              existing app via API.
            </li>
            <li>
              <strong>On-prem / regulated industries:</strong> Stable Diffusion wins
              because you can keep both models and data inside your own infrastructure
              with your own access controls.
            </li>
            <li>
              <strong>Agencies with custom pipelines:</strong> Many agencies use
              Midjourney and DALL·E for ideation and client demos, then Stable Diffusion
              for repeatable, automated production flows.
            </li>
          </ul>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Who wins for… */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Midjourney</h3>
              <p className="text-sm text-slate-700">
                Best when you want visually stunning concepts, moodboards, and
                marketing-ready visuals with minimal prompt engineering.
              </p>
              <p className="mt-2 text-sm font-semibold text-purple-700">
                Ideal for: Creative teams, agencies, and brands that value style and
                impact above everything else.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">DALL·E</h3>
              <p className="text-sm text-slate-700">
                Best for editable, brand-safe assets where you need to extend or tweak
                images inside a single, governed workflow.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Product teams, marketers, and internal design partners.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Stable Diffusion</h3>
              <p className="text-sm text-slate-700">
                Best for custom pipelines, model tuning, and on-prem or VPC deployments
                where you control infra and governance.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Technical teams, ML engineers, and orgs with strict data
                requirements.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-1 text-sm text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-3 text-sm text-slate-600">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-purple-700 shadow-sm ring-1 ring-purple-100 hover:bg-purple-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
