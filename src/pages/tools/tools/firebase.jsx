import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Firebase";
const slug = "firebase";
const category = "Backend-as-a-Service";
const shortPitch =
  "Firebase gives product teams managed auth, database, storage, hosting, functions, and analytics so you can ship apps without standing up your own backend.";
const pricingSummary =
  "Generous free tier; pay-as-you-go (Blaze) charges by usage for database, storage, functions, and network. Costs scale with reads/writes and outbound traffic.";
const officialUrl = "https://firebase.google.com";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/firebase.google.com",
  gradient: "from-amber-500 via-orange-500 to-yellow-400",
  glow: "shadow-[0_20px_80px_rgba(251,191,36,0.22)]",
};

const alternatives = [
  { name: "Supabase", slug: "supabase" },
  { name: "AWS Amplify", slug: "aws-amplify" },
  { name: "Appwrite", slug: "appwrite" },
  { name: "PocketBase", slug: "pocketbase" },
  { name: "Backendless", slug: "backendless" },
];

const faqs = [
  {
    q: "Is Firebase good for MVPs?",
    a: "Yes. It’s popular for MVPs and early products because auth, database, and hosting are quick to set up with strong client SDKs.",
  },
  {
    q: "Which database should I use?",
    a: "Firebase offers Firestore (document DB) and Realtime Database. Most new projects use Firestore for better querying and scaling.",
  },
  {
    q: "Does Firebase scale?",
    a: "Firestore and Functions scale automatically, but costs can spike with chatty reads/writes or unbounded queries. Use indexing and caching wisely.",
  },
  {
    q: "Is there server-side logic?",
    a: "Cloud Functions let you run serverless code triggered by HTTP, auth, database, or scheduled events.",
  },
  {
    q: "How about analytics and messaging?",
    a: "Firebase Analytics, Remote Config, and Cloud Messaging support tracking, A/B tests, and push notifications.",
  },
  {
    q: "Does Firebase support custom domains?",
    a: "Yes. Firebase Hosting supports custom domains with SSL and CDN distribution.",
  },
  {
    q: "What languages are supported for Functions?",
    a: "Node.js and recently other runtimes via Cloud Functions 2nd gen (using Google Cloud runtimes).",
  },
  {
    q: "Is vendor lock-in a concern?",
    a: "Some lock-in exists—FireStore APIs and security rules are proprietary. Consider data export plans and architecture to mitigate.",
  },
];

function FirebaseToolPage() {
  const canonical = buildCanonical(`/tools/${slug}`);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: toolName,
    description: shortPitch,
    brand: "Third-party tool",
    url: canonical,
    review: {
      "@type": "Review",
      author: { "@type": "Organization", name: "GoDigitalPro" },
      reviewBody:
        "Firebase is Google’s backend-as-a-service with managed auth, Firestore, hosting, storage, functions, and analytics—ideal for shipping apps fast without managing infra.",
      reviewRating: {
        "@type": "Rating",
        ratingValue,
        bestRating: "5",
        worstRating: "1",
      },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const featureBlocks = [
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Managed authentication",
      body: "Email/password, SSO, phone, and OAuth providers with SDKs and security rules.",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-orange-500" />,
      title: "Firestore & Realtime DB",
      body: "Document and realtime databases with client SDKs, offline support, and security rules.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Cloud Functions",
      body: "Serverless functions for HTTP APIs, scheduled jobs, and event triggers tied to Firebase services.",
    },
    {
      icon: <Plug className="h-5 w-5 text-yellow-500" />,
      title: "Hosting & storage",
      body: "Global CDN hosting for web apps plus object storage for media, all with auth-aware rules.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-sky-500" />,
      title: "Analytics, A/B, messaging",
      body: "Analytics, Remote Config, and Cloud Messaging to track behavior and deliver notifications.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Security rules",
      body: "Fine-grained rules to protect data and resources at the edge of your database and storage.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Firebase review for developers and founders: pricing, features, pros & cons, and alternatives for backend-as-a-service and serverless apps."
        canonical={canonical}
        image={`https://www.godigitalpro.in/og/tools/${slug}.png`}
        type="article"
        schema={[productSchema, faqSchema]}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Tools Hub", url: buildCanonical("/tools") },
          { name: toolName, url: canonical },
        ]}
      />

      <main className="tool-page bg-white text-slate-900">
        <section className="section section--hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-yellow-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Features, Pricing, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-slate-900 text-white ring-2 ring-slate-900 hover:bg-slate-700" href={officialUrl}>
                  Visit official website
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-yellow-100 blur-3xl" />
                </div>
                <div className="relative flex items-center gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded-xl bg-white/20 ring-2 ring-white/30">
                    <img src={brandMeta.logo} alt={`${toolName} logo`} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/80">Featured Tool</p>
                    <p className="text-xl font-bold">{toolName}</p>
                  </div>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                  Firebase lets teams ship auth, database, functions, and hosting fast—ideal for MVPs and production apps with careful cost governance.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  Recommended by GoDigitalPro
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            <p className="mt-4 text-slate-700">
              {toolName} is a {category.toLowerCase()} platform from Google. It bundles auth, databases, functions, hosting, storage, analytics, and messaging so teams can launch quickly without managing servers.
            </p>
            <p className="mt-3 text-slate-700">
              Startups use it for speed; enterprises use it for side projects or mobile apps with managed infrastructure.
            </p>
            <p className="mt-3 text-slate-700">
              Costs depend on usage, so plan indexes, caching, and security rules to keep Firestore and network usage predictable.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits teams that want managed backend services with minimal ops.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Founders shipping MVPs and mobile apps quickly.",
                "Product teams needing managed auth and data with minimal DevOps.",
                "Mobile/web apps requiring realtime data or push notifications.",
                "Teams running experiments with low ops overhead.",
                "Developers wanting serverless functions tied to app events.",
                "Apps that can accept some vendor lock-in for speed to market.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">
              {toolName} emphasizes managed infrastructure, realtime data, and serverless code so teams can focus on product.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--pricing bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing (2025)</h2>
                <p className="mt-2 text-slate-700">
                  Free tier for small workloads; Blaze pay-as-you-go charges by reads/writes, storage, functions invocations, and bandwidth. Costs scale with usage and region.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on the free tier; move to Blaze once you need custom domains, more storage, or higher limits. Monitor Firestore reads to control spend.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key limits</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Spark (Free)</td>
                    <td className="px-4 py-3">Prototypes and small apps</td>
                    <td className="px-4 py-3">Generous limits but capped resources</td>
                    <td className="px-4 py-3">Free</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Blaze (Pay as you go)</td>
                    <td className="px-4 py-3">Production workloads</td>
                    <td className="px-4 py-3">Usage-based billing across services</td>
                    <td className="px-4 py-3">Usage-based</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise/GCP</td>
                    <td className="px-4 py-3">Large orgs needing compliance</td>
                    <td className="px-4 py-3">Custom limits, VPC, security reviews</td>
                    <td className="px-4 py-3">Custom via GCP</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Watch Firestore read/write patterns, egress traffic, and Cloud Functions cold starts. Add caching and indexing to control cost and latency.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-emerald-50 p-5 shadow-sm ring-1 ring-emerald-100">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Fast setup for auth, data, hosting, and functions.</li>
                  <li>Excellent client SDKs and docs.</li>
                  <li>Realtime capabilities and push notifications built in.</li>
                  <li>Managed scaling reduces DevOps overhead.</li>
                  <li>Generous free tier to validate ideas.</li>
                  <li>Analytics and Remote Config for growth experiments.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Costs can spike with unoptimized reads/writes and egress.</li>
                  <li>Security rules and indexing require careful setup.</li>
                  <li>Vendor lock-in around Firestore and rules.</li>
                  <li>Cold starts on Functions if not tuned (2nd gen helps).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with BaaS and serverless platforms. Choose based on database preference, self-hosting needs, and pricing model.
            </p>
            <p className="mt-2 text-slate-700">Every link below goes to a live tool page—no broken routes.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-600 hover:text-sky-500" href={`/tools/${alt.slug}`}>
                    View
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--vs bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} vs other tools</h2>
            <p className="text-slate-700">Compare {toolName} to other BaaS platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Supabase</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/firebase-vs-supabase">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Supabase uses Postgres and open-source tooling with SQL familiarity. {toolName} offers managed Firestore, Realtime DB, and extensive client SDKs.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for Google ecosystem and realtime/mobile SDKs; choose Supabase if you want SQL, self-hosting options, or open-source alignment.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs AWS Amplify</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/firebase-vs-aws-amplify">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Amplify ties into AWS services with strong React/React Native tooling. {toolName} is simpler to start with but less configurable at the low level.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for fastest start and mobile SDKs; choose Amplify if you want AWS flexibility and deeper infra customization.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you need to ship fast with managed auth, data, hosting, and serverless functions, {toolName} is worth it. It reduces ops so you focus on product.
            </p>
            <p className="mt-3 text-slate-700">
              If you want SQL-first or self-hosted control, consider Supabase, Appwrite, or building on AWS/GCP primitives directly. Watch costs as you scale.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a top choice for fast-moving teams, provided you plan for cost optimization and lock-in mitigation.
            </p>
          </div>
        </section>

        <section className="section section--faq bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} FAQs</h2>
            <p className="mt-2 text-slate-700">Tap a question to expand the answer.</p>
            <div className="mt-6 space-y-3">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--final bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12 space-y-4 text-slate-800">
            <h2 className="text-2xl font-bold text-slate-900">Final verdict on {toolName}</h2>
            <p>
              Choose {toolName} if you want managed backend services with great SDKs and realtime features to ship apps quickly.
            </p>
            <p>
              Consider Supabase for SQL-first or AWS Amplify for AWS-native stacks if you want more control or open-source alignment.
            </p>
            <p>{toolName} accelerates development while handling auth, data, hosting, and messaging—just plan for cost governance as you grow.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
                <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function AccordionItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900"
      >
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default FirebaseToolPage;
