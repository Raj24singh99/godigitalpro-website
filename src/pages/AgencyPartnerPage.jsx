// src/pages/AgencyPartnerPage.jsx
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Layers, Users2, Repeat2 } from "lucide-react";
import SeoHelmet from "../components/SeoHelmet";
import { buildCanonical, organizationJsonLd, serviceJsonLd, webpageJsonLd } from "../utils/seo";

const MODELS = [
  {
    id: "resell",
    icon: Layers,
    title: "Resell Systems",
    tag: "White-Label Frameworks",
    desc: "License our proven marketing frameworks, SOPs, and AI-powered dashboards under your brand. You set the price, we provide the infrastructure — competitive margins included.",
    points: [
      "Full white-label on all deliverables",
      "Access to proprietary AI tools & templates",
      "Training + onboarding for your team",
      "Dedicated partner margin structure",
    ],
  },
  {
    id: "collab",
    icon: Users2,
    title: "Project Collaboration",
    tag: "Co-Manage & Revenue Share",
    desc: "Bring us in on your client projects. We co-manage execution alongside your team, split the workload, and share in the success — structured around a clear revenue-share model.",
    points: [
      "Shared client management & reporting",
      "Revenue share on project outcomes",
      "Combined specialist expertise",
      "Flexible engagement structure",
    ],
  },
  {
    id: "whitelabel",
    icon: Repeat2,
    title: "Full White-Label",
    tag: "Complete Execution",
    desc: "We handle everything — strategy, execution, reporting — entirely under your agency's brand. Your client never knows we exist. You keep the relationship, we deliver the results.",
    points: [
      "100% white-labeled deliverables",
      "Dedicated execution team",
      "Client-ready reports & dashboards",
      "Priority partner support channel",
    ],
  },
];

const BENEFITS = [
  {
    title: "Proven Marketing Frameworks",
    desc: "Systems refined across 250+ crore in ad spend — handed to you ready to deploy.",
  },
  {
    title: "AI-Powered Tools & Dashboards",
    desc: "Proprietary AI tools for campaign analysis, keyword research, and performance reporting.",
  },
  {
    title: "Training & Certification",
    desc: "Full onboarding and certification so your team executes confidently from day one.",
  },
  {
    title: "Competitive Margins",
    desc: "Partner pricing structured to protect your margins and grow your revenue.",
  },
  {
    title: "Marketing Support",
    desc: "Co-branded pitch decks, case studies, and sales collateral ready for your prospects.",
  },
  {
    title: "Dedicated Partner Support",
    desc: "A direct channel to our team — no ticket queues, real answers when you need them.",
  },
];

export default function AgencyPartnerPage() {
  const canonical = buildCanonical("/agency-partner");

  const schemaBlocks = useMemo(
    () =>
      [
        organizationJsonLd(),
        webpageJsonLd({
          title: "Agency Partner Program | GoDigitalPro",
          description:
            "White-label marketing systems, project collaboration, and full execution partnerships for agencies looking to scale with AI-powered infrastructure.",
          url: canonical,
          type: "WebPage",
        }),
        serviceJsonLd({
          name: "Agency Partner Program",
          description:
            "White-label marketing frameworks, co-managed project collaboration, and full white-label execution for agencies and consultants.",
          url: canonical,
        }),
      ].filter(Boolean),
    [canonical]
  );

  return (
    <main className="relative isolate bg-white text-gray-900">
      <SeoHelmet
        title="Agency Partner Program | White-Label Marketing Systems | GoDigitalPro"
        description="Scale your agency with GoDigitalPro's AI-powered marketing systems. Choose from white-label frameworks, project collaboration, or full white-label execution."
        canonical={canonical}
        keywords="agency partner program, white label marketing agency, marketing reseller, co-managed marketing, agency white label"
        robots="index,follow"
        schema={schemaBlocks}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Agency Partner", url: canonical },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(250,255,200,.45), rgba(255,255,255,0))",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium ring-1 ring-black/5 mb-5">
            Agency Partnership • White-Label Solutions • Project Collaboration
          </div>
          <h1 className="font-serif text-[2.4rem] sm:text-5xl md:text-6xl font-bold text-dark leading-[1.1] tracking-tight">
            Scale Your Agency with<br className="hidden sm:block" /> AI-Powered Marketing Systems
          </h1>
          <p className="mt-5 text-base md:text-lg text-slate-700 max-w-2xl mx-auto">
            Partner with GoDigitalPro to deliver better results for your clients — without hiring a bigger team.
            Choose the model that fits how your agency works.
          </p>
          <div className="mt-8">
            <Link
              to="/onboarding"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold bg-slate-900 text-white hover:bg-slate-800 transition text-base"
            >
              Explore Partnership Options <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="h2 text-dark">Three Ways to Partner</h2>
            <p className="mt-3 text-slate-700 text-base md:text-lg">
              Pick the model that fits your agency's structure. All three come with access to our AI tools,
              frameworks, and dedicated partner support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {MODELS.map(({ id, icon: Icon, title, tag, desc, points }) => (
              <div
                key={id}
                className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition flex flex-col"
              >
                <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-slate-900 text-primary mb-4 shrink-0">
                  <Icon size={20} />
                </span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  {tag}
                </span>
                <h3 className="font-serif text-xl font-bold text-dark mb-3">{title}</h3>
                <p className="text-slate-700 text-sm mb-5">{desc}</p>
                <ul className="mt-auto space-y-2">
                  {points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-slate-900" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-slate-50 rounded-3xl mx-4 md:mx-10 my-8">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="h2 text-dark">What You Get as a Partner</h2>
            <p className="mt-3 text-slate-700 text-base md:text-lg">
              Everything you need to deliver world-class marketing outcomes — without building it from scratch.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map(({ title, desc }) => (
              <div key={title} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                <h3 className="font-serif text-base font-semibold text-dark mb-2">{title}</h3>
                <p className="text-sm text-slate-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="h2 text-dark">Ready to Build Together?</h2>
          <p className="mt-3 text-slate-700 text-base md:text-lg">
            Tell us about your agency and we'll match you to the right partnership model.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/onboarding"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold bg-slate-900 text-white hover:bg-slate-800 transition text-base"
            >
              Apply to Partner Program <ArrowRight size={18} />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold border border-black/15 text-dark hover:bg-slate-50 transition text-base"
            >
              Learn About Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
