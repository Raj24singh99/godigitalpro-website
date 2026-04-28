import React from "react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet";
import {
  buildCanonical,
  faqJsonLd,
  localBusinessJsonLd,
  serviceJsonLd,
  webpageJsonLd,
} from "../../utils/seo";

const FAQS = [
  {
    question: "What defines the best digital marketing agency?",
    answer:
      "The best agency connects strategy and execution across SEO, paid media, creative, landing pages, and analytics while reporting business outcomes, not vanity metrics.",
  },
  {
    question: "How should agencies be compared?",
    answer:
      "Compare by operating system: planning quality, test velocity, reporting clarity, data ownership, and the quality of recommendations after each sprint.",
  },
  {
    question: "Do guarantees make sense when choosing an agency?",
    answer:
      "Hard guarantees are usually a red flag. Look for realistic forecasting, scenario-based planning, and rapid iteration tied to your actual unit economics.",
  },
];

export default function BestDigitalMarketingAgencyPage() {
  const path = "/best-digital-marketing-agency";
  const canonical = buildCanonical(path);
  const title = "Best Digital Marketing Agency | SEO, Paid Media & Conversion Growth";
  const description =
    "Looking for the best digital marketing agency? GoDigitalPro builds full-funnel growth systems across SEO, Google Ads, paid social, CRO, and analytics for compounding ROI.";

  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={title}
        description={description}
        canonical={canonical}
        keywords="best digital marketing agency, top digital marketing agency, seo and ppc agency, growth marketing agency, performance marketing team"
        schema={[
          webpageJsonLd({ title, description, url: canonical }),
          localBusinessJsonLd(),
          serviceJsonLd({
            name: "Full-Funnel Digital Marketing Services",
            description,
            url: canonical,
          }),
          faqJsonLd(FAQS),
        ]}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Best Digital Marketing Agency", url: canonical },
        ]}
      />

      <section className="border-b border-black/5 bg-gradient-to-r from-white via-primary/25 to-white">
        <div className="mx-auto max-w-5xl px-4 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">Best Digital Marketing Agency for Measurable Growth</h1>
          <p className="mt-3 text-slate-700">
            We help growth teams unify SEO, paid ads, creative, conversion optimization, and
            analytics under one accountable operating model.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Link to="/services/seo-content" className="rounded-full bg-white px-4 py-2 text-sm ring-1 ring-black/10 hover:bg-slate-50">SEO & Content</Link>
            <Link to="/services/paid-marketing" className="rounded-full bg-white px-4 py-2 text-sm ring-1 ring-black/10 hover:bg-slate-50">Paid Marketing</Link>
            <Link to="/services/website-development" className="rounded-full bg-white px-4 py-2 text-sm ring-1 ring-black/10 hover:bg-slate-50">Website & CRO</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-semibold">How we operate</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Strategy first",
              body: "We start with market, offer, and funnel diagnosis before channel execution.",
            },
            {
              title: "Fast experiments",
              body: "Weekly creative, targeting, landing page, and messaging tests with clear owners.",
            },
            {
              title: "Transparent reporting",
              body: "Live dashboards and weekly decision logs so you can see exactly what changed and why.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-xl border border-black/10 bg-slate-50 p-5">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/5 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
          <div className="mt-4 space-y-3">
            {FAQS.map((item) => (
              <details key={item.question} className="rounded-xl border border-black/10 bg-white p-4">
                <summary className="cursor-pointer font-medium">{item.question}</summary>
                <p className="mt-2 text-sm text-slate-700">{item.answer}</p>
              </details>
            ))}
          </div>
          <Link to="/onboarding" className="btn-primary mt-6 inline-flex">Request a Growth Audit</Link>
        </div>
      </section>
    </main>
  );
}
