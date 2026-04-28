import React from "react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet";
import {
  buildCanonical,
  faqJsonLd,
  serviceJsonLd,
  webpageJsonLd,
} from "../../utils/seo";

const FAQS = [
  {
    question: "What should startups expect from a digital marketing agency?",
    answer:
      "Startups should expect speed, disciplined testing, clear CAC and payback tracking, and practical channel prioritization instead of broad but unfocused execution.",
  },
  {
    question: "Which channels should early-stage startups prioritize first?",
    answer:
      "Most startups should begin with one demand-capture channel (SEO or Search Ads), one demand-creation channel (social or content), and strong conversion tracking from day one.",
  },
  {
    question: "Can an agency help reduce burn while growing pipeline?",
    answer:
      "Yes. The right setup improves spend efficiency through better targeting, stronger offers, and continuous landing page and creative testing.",
  },
];

export default function BestDigitalMarketingAgencyForStartupsPage() {
  const path = "/best-digital-marketing-agency-for-startups";
  const canonical = buildCanonical(path);
  const title = "Best Digital Marketing Agency for Startups | CAC, Pipeline & Scale";
  const description =
    "GoDigitalPro helps startups build predictable growth systems with SEO, Google Ads, paid social, conversion optimization, and clear CAC-to-revenue visibility.";

  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={title}
        description={description}
        canonical={canonical}
        keywords="best digital marketing agency for startups, startup marketing agency, startup growth marketing, saas startup marketing agency, digital marketing for startups"
        schema={[
          webpageJsonLd({ title, description, url: canonical }),
          serviceJsonLd({
            name: "Startup Digital Marketing Services",
            description,
            url: canonical,
          }),
          faqJsonLd(FAQS),
        ]}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Best Digital Marketing Agency for Startups", url: canonical },
        ]}
      />

      <section className="border-b border-black/5 bg-gradient-to-r from-white via-primary/25 to-white">
        <div className="mx-auto max-w-5xl px-4 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">Best Digital Marketing Agency for Startups</h1>
          <p className="mt-3 text-slate-700">
            We help startup teams validate channels fast, control CAC, improve conversion rates,
            and scale only after the funnel economics are proven.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Link to="/industries/saas-startups" className="rounded-full bg-white px-4 py-2 text-sm ring-1 ring-black/10 hover:bg-slate-50">SaaS & Startups</Link>
            <Link to="/services/paid-marketing" className="rounded-full bg-white px-4 py-2 text-sm ring-1 ring-black/10 hover:bg-slate-50">Paid Marketing</Link>
            <Link to="/services/seo-content" className="rounded-full bg-white px-4 py-2 text-sm ring-1 ring-black/10 hover:bg-slate-50">SEO & Content</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-semibold">How we work with startup teams</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "0-30 days",
              body: "Audit positioning, analytics hygiene, and fastest-win channels for early traction.",
            },
            {
              title: "31-60 days",
              body: "Run structured experiments on messaging, audiences, creatives, and landing pages.",
            },
            {
              title: "61-90 days",
              body: "Scale winning segments and build a repeatable demand engine with tighter forecasting.",
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
          <Link to="/onboarding" className="btn-primary mt-6 inline-flex">Get a Startup Growth Plan</Link>
        </div>
      </section>
    </main>
  );
}
