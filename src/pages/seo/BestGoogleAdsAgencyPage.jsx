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
    question: "What makes a Google Ads agency the best fit?",
    answer:
      "Look for a team with strong account structure, conversion tracking depth, landing-page collaboration, and rigorous budget pacing controls.",
  },
  {
    question: "Can a Google Ads agency improve lead quality, not just volume?",
    answer:
      "Yes. With better search intent mapping, negative keywords, conversion-value tracking, and offline CRM feedback loops, lead quality improves significantly.",
  },
  {
    question: "How often should Google Ads campaigns be optimized?",
    answer:
      "At minimum weekly for bids, search terms, and budget shifts, with deeper monthly planning for offer tests and landing page experiments.",
  },
];

export default function BestGoogleAdsAgencyPage() {
  const path = "/best-google-ads-agency";
  const canonical = buildCanonical(path);
  const title = "Best Google Ads Agency | Search, PMax, YouTube & Revenue Tracking";
  const description =
    "GoDigitalPro is a Google Ads agency focused on profitable growth: clean account structures, conversion tracking, landing page optimization, and full-funnel ROAS improvement.";

  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={title}
        description={description}
        canonical={canonical}
        keywords="best google ads agency, google ads agency, ppc agency, search ads management, performance max agency, google ads optimization"
        schema={[
          webpageJsonLd({ title, description, url: canonical }),
          serviceJsonLd({
            name: "Google Ads Management Services",
            description,
            url: canonical,
          }),
          faqJsonLd(FAQS),
        ]}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Best Google Ads Agency", url: canonical },
        ]}
      />

      <section className="border-b border-black/5 bg-gradient-to-r from-white via-primary/25 to-white">
        <div className="mx-auto max-w-5xl px-4 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">Best Google Ads Agency for ROI-Focused Teams</h1>
          <p className="mt-3 text-slate-700">
            We run Google Search, Performance Max, Shopping, and YouTube campaigns with strict
            intent mapping, measurement quality, and weekly optimization cadence.
          </p>
          <Link to="/services/paid-marketing" className="btn-primary mt-6 inline-flex">
            Explore Paid Marketing Services
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Our Google Ads execution model</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            "Campaign architecture by intent and funnel stage",
            "Weekly search-term pruning and negative keyword expansion",
            "PMax asset-group governance and brand traffic controls",
            "Landing page and offer experiments tied to conversion value",
            "GA4 + CRM attribution loop for pipeline quality",
            "Spend pacing guardrails with performance anomaly alerts",
          ].map((point) => (
            <p key={point} className="rounded-xl border border-black/10 bg-slate-50 p-4 text-sm text-slate-700">
              {point}
            </p>
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
        </div>
      </section>
    </main>
  );
}
