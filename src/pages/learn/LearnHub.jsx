import React from "react";
import { ArrowRight, CheckCircle2, Clock, GraduationCap, Layers, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../utils/seo.js";
import { learnCatalog, learnFAQs } from "../../data/learnCatalog.js";
import { masterCourse } from "../../data/masterCourse.js";
import { useAuth } from "../../context/AuthProvider.jsx";

const featured = learnCatalog.slice(0, 4);

function formatStatus(item) {
  if (item.status === "enrolling") return "Enrolling";
  if (item.status === "upcoming") return "Upcoming";
  if (item.status === "replay") return "Replay available";
  return item.status ? item.status.replace(/^\w/, (c) => c.toUpperCase()) : "Live";
}

export default function LearnHub() {
  const canonical = buildCanonical("/learn");
  const { user } = useAuth();

  return (
    <main className="bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <SeoHelmet
        title="Learn with GoDigitalPro | Marketing Courses and Training"
        description="Browse GoDigitalPro learning courses, track micro-completion progress, and resume lessons anytime."
        canonical={canonical}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Learn", url: canonical },
        ]}
      />

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50" />
        <div className="relative mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
              <Sparkles className="h-4 w-4 text-amber-500" />
              Learn with GoDigitalPro
            </div>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              Learning paths built for performance-focused marketers.
            </h1>
            <p className="max-w-3xl text-lg text-slate-700">
              Choose the master course, complete each sub-section, and resume exactly where you left off.
              Progress tracking and certificates unlock once you are logged in.
            </p>
            <p className="max-w-3xl text-sm font-semibold text-slate-600">
              All courses below are modules inside the Digital Marketing Master Course. Log in to
              view full details, track progress, and complete the path.
            </p>
          </div>
          <div className="mt-8">
            <MasterCourseCard masterCourse={masterCourse} user={user} />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Featured</p>
              <h2 className="text-2xl font-bold text-slate-900">Start with these</h2>
              <p className="mt-2 text-slate-700">Quick wins you can implement right away.</p>
            </div>
            <Link to="/learn/digital-products" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-slate-900">
              Browse catalog
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {featured.map((item) => (
              <LearnCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">What you get</p>
              <h2 className="text-2xl font-bold text-slate-900">Structured learning with real outcomes</h2>
              <p className="mt-2 text-slate-700">Micro-completion tracking keeps progress visible and measurable.</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Track every sub-section to avoid losing momentum.",
              "Resume instantly from your last completed step.",
              "Future-ready certificates after full completion.",
            ].map((value) => (
              <div key={value} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Questions</p>
              <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
            </div>
            <Sparkles className="h-5 w-5 text-amber-500" />
          </div>
          <div className="mt-6 divide-y divide-slate-200 rounded-2xl bg-slate-50 shadow-sm ring-1 ring-slate-200">
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

function MasterCourseCard({ masterCourse, user }) {
  const courseUrl = "/learn/master-course";
  const loginTarget = "/learn/master-course";
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Master Course
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900">
          {masterCourse.title}
        </h2>
        <p className="mt-3 text-sm text-slate-700">{masterCourse.shortDescription}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-700">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-1">
            <GraduationCap className="h-3.5 w-3.5" />
            {masterCourse.level}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-1">
            <Layers className="h-3.5 w-3.5" />
            {masterCourse.subCourses.length} sub-courses
          </span>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between">
        {user ? (
          <Link
            to={courseUrl}
            className="text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            View details
          </Link>
        ) : (
          <Link
            to="/login"
            state={{ from: { pathname: loginTarget } }}
            className="text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            Login to view details
          </Link>
        )}
        {user ? (
          <Link
            to={courseUrl}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Enter master course
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <Link
            to="/login"
            state={{ from: { pathname: loginTarget } }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Login to start
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}

function LearnCard({ item }) {
  return (
    <a
      href={item.url}
      className="flex flex-col gap-3 rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200 hover:bg-white hover:ring-slate-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">{item.type}</p>
          <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
        </div>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">{formatStatus(item)}</span>
      </div>
      <p className="text-sm text-slate-700">{item.description}</p>
      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-700">
        {item.duration && (
          <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 ring-1 ring-slate-200">
            <Clock className="h-3.5 w-3.5" />
            {item.duration}
          </span>
        )}
        {item.level && (
          <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 ring-1 ring-slate-200">
            <GraduationCap className="h-3.5 w-3.5" />
            {item.level}
          </span>
        )}
        {item.price && (
          <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 ring-1 ring-slate-200">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            {item.price}
          </span>
        )}
      </div>
    </a>
  );
}
