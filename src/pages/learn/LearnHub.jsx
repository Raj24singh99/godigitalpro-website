import React from "react";
import { Sparkles, GraduationCap, ShoppingBag, Video, Users, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../utils/seo.js";
import { learnCatalog, learnFAQs } from "../../data/learnCatalog.js";

const sections = [
  { title: "Digital products", icon: <ShoppingBag className="h-5 w-5 text-amber-600" />, href: "/learn/digital-products", type: "digital" },
  { title: "Masterclasses", icon: <Video className="h-5 w-5 text-rose-600" />, href: "/learn/masterclasses", type: "masterclass" },
  { title: "Courses", icon: <GraduationCap className="h-5 w-5 text-indigo-600" />, href: "/learn/courses", type: "course" },
  { title: "Internship", icon: <Users className="h-5 w-5 text-emerald-600" />, href: "/learn/internship", type: "internship" },
];

const featured = learnCatalog.slice(0, 6);

function formatStatus(item) {
  if (item.status === "enrolling") return "Enrolling";
  if (item.status === "upcoming") return "Upcoming";
  if (item.status === "replay") return "Replay available";
  return item.status ? item.status.replace(/^\w/, (c) => c.toUpperCase()) : "Live";
}

export default function LearnHub() {
  const canonical = buildCanonical("/learn");

  return (
    <main className="bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <SeoHelmet
        title="Learn with GoDigitalPro | Courses, Masterclasses, Digital Products"
        description="Explore GoDigitalPro learning hub: digital products, masterclasses, courses, and internships on performance marketing, content ops, and CRO."
        canonical={canonical}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Learn", url: canonical },
        ]}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 lg:flex-row lg:items-center">
          <div className="lg:w-3/5">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
              <Sparkles className="h-4 w-4 text-amber-500" />
              Learn with GoDigitalPro
            </div>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Courses, masterclasses, and digital products built for marketers.
            </h1>
            <p className="mt-3 text-lg text-slate-700">
              Ship campaigns faster with ready-to-use templates, live masterclasses, structured courses, and an internship track to apply everything in real
              projects.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {sections.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-100"
                >
                  {item.icon}
                  {item.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:w-2/5">
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold text-slate-900">What you get</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Ready-to-use downloads for audits, calendars, and proposals.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Live and on-demand masterclasses with replays.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Cohort and self-paced courses with templates and feedback.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Internship option with weekly milestones and certification.
                </li>
              </ul>
            </div>
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
          <div className="mt-6 grid gap-4 md:grid-cols-3">
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
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Paths</p>
              <h2 className="text-2xl font-bold text-slate-900">Pick your next step</h2>
              <p className="mt-2 text-slate-700">Move from downloads to live sessions to full courses and internships.</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {sections.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="flex flex-col gap-2 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 hover:ring-slate-300"
              >
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-slate-900">{item.title}</p>
                  {item.icon}
                </div>
                <p className="text-sm text-slate-700">
                  {item.title === "Digital products" && "Templates and kits you can download now."}
                  {item.title === "Masterclasses" && "Live and replay sessions with action steps."}
                  {item.title === "Courses" && "Structured modules, Q&A, and projects."}
                  {item.title === "Internship" && "Apply skills on real campaigns with mentors."}
                </p>
              </Link>
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
