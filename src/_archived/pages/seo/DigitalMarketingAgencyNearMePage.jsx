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
    question: "How do I pick the right digital marketing agency near me?",
    answer:
      "Start with business fit: look for proof in your industry, clear KPI ownership, transparent reporting, and a 90-day execution roadmap before long contracts.",
  },
  {
    question: "Should I choose a local agency or a remote agency?",
    answer:
      "Choose the team with the strongest execution system. A local agency helps with market context, while a remote team can still perform if strategy, communication cadence, and accountability are strong.",
  },
  {
    question: "What services should a full-funnel agency provide?",
    answer:
      "A high-performing agency should connect SEO, Google Ads, social media ads, landing page CRO, and analytics so traffic quality and conversion rates improve together.",
  },
  {
    question: "How quickly can results be expected?",
    answer:
      "Paid campaigns can improve within weeks. SEO and content usually require 8 to 16 weeks for stable movement, then compound over time.",
  },
];

const CITY_LINKS = [
  { name: "Bangalore", path: "/locations/bangalore-digital-marketing-agency" },
  { name: "Delhi", path: "/locations/delhi-digital-marketing-agency" },
  { name: "Mumbai", path: "/locations/mumbai-digital-marketing-agency" },
  { name: "Hyderabad", path: "/locations/hyderabad-digital-marketing-agency" },
  { name: "Chennai", path: "/locations/chennai-digital-marketing-agency" },
  { name: "Pune", path: "/locations/pune-digital-marketing-agency" },
  { name: "Kolkata", path: "/locations/kolkata-digital-marketing-agency" },
  { name: "Ahmedabad", path: "/locations/ahmedabad-digital-marketing-agency" },
];

export default function DigitalMarketingAgencyNearMePage() {
  const path = "/digital-marketing-agency-near-me";
  const canonical = buildCanonical(path);
  const title = "Digital Marketing Agency Near Me | Local SEO, Google Ads & Growth";
  const description =
    "Searching for a digital marketing agency near me? GoDigitalPro helps local and growth-stage businesses with SEO, Google Ads, social media marketing, CRO, and measurable ROI.";

  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={title}
        description={description}
        canonical={canonical}
        keywords="digital marketing agency near me, local digital marketing agency, seo agency near me, google ads agency near me, performance marketing agency"
        schema={[
          webpageJsonLd({ title, description, url: canonical }),
          localBusinessJsonLd(),
          serviceJsonLd({
            name: "Digital Marketing Services Near You",
            description,
            url: canonical,
          }),
          faqJsonLd(FAQS),
        ]}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Digital Marketing Agency Near Me", url: canonical },
        ]}
      />

      <section className="border-b border-black/5 bg-gradient-to-r from-white via-primary/30 to-white">
        <div className="mx-auto max-w-5xl px-4 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">Digital Marketing Agency Near Me</h1>
          <p className="mt-3 text-slate-700">
            If you are searching for a trusted digital marketing agency near you, we combine local
            market understanding with full-funnel execution across SEO, Google Ads, paid social,
            landing pages, and analytics.
          </p>
          <Link to="/onboarding" className="btn-primary mt-6 inline-flex">
            Get a Free Growth Plan
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-semibold">What to check before hiring any agency</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            "Clear KPI ownership (pipeline, CAC, ROAS, and conversion rate)",
            "Documented execution rhythm (weekly sprints and monthly strategy)",
            "Transparent access to ad accounts, analytics, and dashboards",
            "Proof of SEO and paid media results in similar business models",
            "Structured testing process for landing pages and ad creatives",
            "Defined communication SLAs and escalation paths",
          ].map((point) => (
            <p key={point} className="rounded-xl border border-black/10 bg-slate-50 p-4 text-sm text-slate-700">
              {point}
            </p>
          ))}
        </div>
      </section>

      <section className="border-y border-black/5 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-semibold">Popular city pages</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {CITY_LINKS.map((city) => (
              <Link
                key={city.path}
                to={city.path}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-800 ring-1 ring-black/10 hover:bg-slate-100"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
        <div className="mt-4 space-y-3">
          {FAQS.map((item) => (
            <details key={item.question} className="rounded-xl border border-black/10 bg-white p-4">
              <summary className="cursor-pointer font-medium">{item.question}</summary>
              <p className="mt-2 text-sm text-slate-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
