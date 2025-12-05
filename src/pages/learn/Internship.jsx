import React from "react";
import { ArrowLeft, ArrowRight, Users, Clock, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../utils/seo.js";
import { learnCatalog, learnFAQs } from "../../data/learnCatalog.js";

const internship = learnCatalog.find((item) => item.type === "internship");

export default function Internship() {
  const canonical = buildCanonical("/learn/internship");
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title="Marketing Internship | GoDigitalPro Learn"
        description="Apply for the GoDigitalPro marketing internship track: 6–8 weeks, remote, weekly milestones, mentor feedback, and certification."
        canonical={canonical}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Learn", url: buildCanonical("/learn") },
          { name: "Internship", url: canonical },
        ]}
      />

      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">Internship</p>
            <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">Marketing internship with real campaigns.</h1>
            <p className="mt-3 text-slate-700">
              6–8 week remote program with weekly milestones in Paid, Content, or CRO. Get mentor feedback, ship a capstone, and earn certification.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-700">
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 ring-1 ring-slate-200">
                <Users className="h-3.5 w-3.5 text-emerald-600" />
                Remote
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 ring-1 ring-slate-200">
                <Clock className="h-3.5 w-3.5" />
                {internship?.duration || "6-8 weeks"}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 ring-1 ring-slate-200">
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                {internship?.status === "waitlist" ? "Waitlist open" : "Apply"}
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={internship?.url || "https://learn.godigitalpro.in/internship-apply"}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white ring-2 ring-slate-900 hover:bg-slate-800"
              >
                Apply now
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/learn" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900">
                <ArrowLeft className="h-4 w-4" />
                Back to learn hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-lg font-semibold text-slate-900">Tracks</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Paid media: account hygiene, offers, budgets, reporting.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Content: briefs, calendars, AI-assisted drafting, distribution.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  CRO: landing teardowns, test ideas, analytics checks.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-lg font-semibold text-slate-900">What you’ll do</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Weekly milestones with templates and examples.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Mentor feedback on your submissions.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Capstone project you can showcase.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Certificate on completion and rubric pass.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">FAQ</p>
              <h2 className="text-2xl font-bold text-slate-900">Internship FAQs</h2>
            </div>
            <Sparkles className="h-5 w-5 text-amber-500" />
          </div>
          <div className="mt-6 divide-y divide-slate-200 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
            {learnFAQs.map((item) => (
              <details key={item.question} className="group">
                <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-900">
                  {item.question}
                  <ArrowRight className="h-4 w-4 text-slate-500 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-4 pb-4 text-sm text-slate-700">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
