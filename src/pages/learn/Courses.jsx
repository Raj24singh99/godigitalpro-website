import React from "react";
import { ArrowLeft, ArrowRight, GraduationCap, Clock, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../utils/seo.js";
import { learnCatalog } from "../../data/learnCatalog.js";

const courses = learnCatalog.filter((item) => item.type === "course");

export default function Courses() {
  const canonical = buildCanonical("/learn/courses");
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title="Courses | GoDigitalPro Learn"
        description="Structured marketing courses with projects, live Q&A, and templates. Performance marketing and content ops cohorts."
        canonical={canonical}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Learn", url: buildCanonical("/learn") },
          { name: "Courses", url: canonical },
        ]}
      />

      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">Courses</p>
            <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">Courses with live feedback and projects.</h1>
            <p className="mt-3 text-slate-700">
              Apply frameworks to real accounts and content systems. Includes templates, Q&A, and capstones you can show in your portfolio.
            </p>
          </div>
          <Link to="/learn" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" />
            Back to learn hub
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-4 md:grid-cols-2">
            {courses.map((item) => (
              <a
                key={item.slug}
                href={item.url}
                className="flex flex-col gap-3 rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200 hover:bg-slate-100 hover:ring-slate-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">Course</p>
                    <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                  </div>
                  {item.status && (
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                      {item.status === "enrolling" ? "Enrolling" : "Waitlist"}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-700">{item.description}</p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-700">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 ring-1 ring-slate-200">
                    <GraduationCap className="h-3.5 w-3.5 text-indigo-600" />
                    {item.format}
                  </span>
                  {item.duration && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 ring-1 ring-slate-200">
                      <Clock className="h-3.5 w-3.5" />
                      {item.duration}
                    </span>
                  )}
                  {item.price && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 ring-1 ring-slate-200">
                      <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                      {item.price}
                    </span>
                  )}
                  {item.startDate && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 ring-1 ring-slate-200">
                      <Users className="h-3.5 w-3.5" />
                      Cohort start: {item.startDate}
                    </span>
                  )}
                </div>
                {item.outcomes && (
                  <ul className="mt-1 space-y-1 text-xs text-slate-700">
                    {item.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-slate-500" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                )}
              </a>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 ring-1 ring-slate-200">
            <div className="flex items-center gap-2 text-slate-900">
              <Sparkles className="h-4 w-4 text-amber-500" />
              Guidance on picking a tier
            </div>
            <p className="mt-2">
              Start with the core tier if you want the curriculum and templates. Choose the cohort/live tier when you need accountability and feedback. Upgrade
              later if you need more hands-on time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
