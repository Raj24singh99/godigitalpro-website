import React from "react";
import { ArrowLeft, ArrowRight, ShoppingBag, Clock, Sparkles, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../utils/seo.js";
import { learnCatalog } from "../../data/learnCatalog.js";

const digitalProducts = learnCatalog.filter((item) => item.type === "digital");

export default function DigitalProducts() {
  const canonical = buildCanonical("/learn/digital-products");
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title="Digital Products | GoDigitalPro Learn"
        description="Download audit templates, content calendars, and proposal swipe files from GoDigitalPro to ship work faster."
        canonical={canonical}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Learn", url: buildCanonical("/learn") },
          { name: "Digital Products", url: canonical },
        ]}
      />

      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">Downloads</p>
            <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">Digital products you can use today.</h1>
            <p className="mt-3 text-slate-700">Templates and kits that slot into your campaigns, proposals, and editorial calendar without a long learning curve.</p>
          </div>
          <Link to="/learn" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" />
            Back to learn hub
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-4 md:grid-cols-3">
            {digitalProducts.map((item) => (
              <a
                key={item.slug}
                href={item.url}
                className="flex flex-col gap-3 rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200 hover:bg-slate-100 hover:ring-slate-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">Digital product</p>
                    <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">{item.price}</span>
                </div>
                <p className="text-sm text-slate-700">{item.description}</p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-700">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 ring-1 ring-slate-200">
                    <ShoppingBag className="h-3.5 w-3.5 text-amber-600" />
                    Downloadable
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 ring-1 ring-slate-200">
                    <Clock className="h-3.5 w-3.5" />
                    {item.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 ring-1 ring-slate-200">
                    <GraduationCap className="h-3.5 w-3.5" />
                    {item.level}
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 ring-1 ring-slate-200">
            <div className="flex items-center gap-2 text-slate-900">
              <Sparkles className="h-4 w-4 text-amber-500" />
              Use these with our courses and masterclasses
            </div>
            <p className="mt-2">
              Pair downloads with live sessions and courses for best results. Get guided walkthroughs in masterclasses, then use the templates to implement.
            </p>
            <Link to="/learn/masterclasses" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-slate-700">
              View masterclasses
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
