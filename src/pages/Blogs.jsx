import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Blogs() {
  const title = "Blogs | GoDigitalPro";
  const desc =
    "Insights on Performance Marketing, SEO, CRO, and Analytics from the GoDigitalPro team.";

  const comingSoon = [
    { slug: "performance-marketing-fundamentals", title: "Performance Marketing: The 80/20 Guide", eta: "Coming soon" },
    { slug: "seo-topical-authority", title: "Topical Authority in SEO: A Practical Playbook", eta: "Coming soon" },
    { slug: "ga4-offline-conversions", title: "GA4 + Offline Conversions: Clean Setup, Real Impact", eta: "Coming soon" },
  ];

  return (
    <main className="bg-white text-slate-900">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://www.godigitalpro.in/blogs" />
      </Helmet>

      <section className="mx-auto max-w-6xl px-6 md:px-10 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-widest text-amber-600 uppercase">
              GoDigitalPro Blog
            </p>
            <h1 className="text-3xl font-extrabold">Insights & Playbooks</h1>
            <p className="mt-2 max-w-prose text-[15px] text-slate-700">
              Practical, no-fluff guides on ads, SEO, CRO, analytics, and growth ops.
            </p>
          </div>
          <Link
            to="/onboarding"
            className="hidden md:inline-flex items-center rounded-2xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600"
          >
            Get a Free Growth Plan
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comingSoon.map((p) => (
            <article
              key={p.slug}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{p.eta}</p>
              <div className="mt-4 text-sm">
                <button
                  className="rounded-lg border border-slate-200 px-3 py-2 text-slate-800 hover:bg-slate-50"
                  disabled
                >
                  Read
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
