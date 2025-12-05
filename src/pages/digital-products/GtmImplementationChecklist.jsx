import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Download,
  LayoutTemplate,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import SeoHelmet from "../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../utils/seo.js";

const downloadUrl = "https://drive.google.com/file/d/1kiaXqtWiYVkf-kPJ6jzRvVgJaGog9-VF/view?usp=drive_link";

const sections = [
  {
    title: "Foundations & access",
    summary: "Single primary container per domain, correct access, linked accounts, and naming standards.",
    points: ["Confirm one primary container per domain", "Set Admin vs limited access appropriately", "Link GTM with Analytics/Ads/Floodlight accounts", "Document tech stack using GTM", "Define naming conventions for tags/triggers/variables"],
  },
  {
    title: "Container setup & structure",
    summary: "Install snippets, verify load, use workspaces/folders, and set baseline triggers.",
    points: ["Install head/body snippets on all pages", "Verify GTM loads in Preview mode", "Use Workspaces for larger teams/projects", "Organize items into folders (GA4, Ads, Meta, Custom)", "Set default All Pages trigger for baseline tags"],
  },
  {
    title: "Variables & data layer strategy",
    summary: "Enable built-ins, design data layer, push key events, and map data layer variables.",
    points: ["Enable built-in variables (Click, Form, Page, Scroll)", "Design data layer for key events/properties", "Implement dataLayer.push() for important actions", "Create Data Layer Variables for keys (event, value, IDs)", "Standardize custom event names"],
  },
  {
    title: "Core analytics & measurement",
    summary: "GA4 config on all pages, GA4 events, mapped params, and DebugView validation.",
    points: ["Create GA4 config tag on All Pages", "Create GA4 event tags for key actions", "Map parameters from data layer/DOM", "Test events in GTM Preview", "Validate in GA4 real-time/DebugView"],
  },
  {
    title: "Marketing & ad platform tags",
    summary: "Implement Ads/Meta/LinkedIn tags via GTM with unified event logic and no duplicates.",
    points: ["Implement Google Ads conversion/remarketing via GTM", "Add Meta/LinkedIn/other pixels in GTM", "Use central event definitions across platforms", "Pass UTMs/source into data layer when needed", "Audit and remove duplicate hard-coded tags"],
  },
  {
    title: "Event design & trigger hygiene",
    summary: "Event-based, scoped triggers with exceptions and consistent naming.",
    points: ["Use event triggers over broad URL rules", "Scope to specific selectors/IDs", "Avoid catch-all triggers firing too broadly", "Use trigger exceptions for admin/staging/internal", "Name triggers consistently (Trigger – Event – Location)"],
  },
  {
    title: "QA, debugging & version control",
    summary: "Preview before publish, test journeys, name versions clearly, and keep QA steps.",
    points: ["Always use Preview before publishing", "Test key journeys on desktop/mobile", "Name GTM Versions with change notes", "Rollback if issues detected", "Maintain a GTM QA checklist"],
  },
  {
    title: "Environments, staging & governance",
    summary: "Use environments, define publish rules, and document coverage across domains/apps.",
    points: ["Use GTM Environments for staging vs production", "Define who can publish vs edit/preview", "Set approval rules for GTM changes", "Document domains/subdomains/apps with GTM", "Map events → data layer → tags → platforms"],
  },
  {
    title: "Privacy, consent & compliance",
    summary: "Integrate CMP, gate tags by consent, avoid PII in tags/URLs/data layer, and document controls.",
    points: ["Integrate GTM with consent management", "Configure consent-based triggers", "Ensure no PII stored in tags/URLs", "Verify data layer never exposes emails/phones", "Document how GTM supports privacy requirements"],
  },
  {
    title: "Performance & maintenance",
    summary: "Audit bloat, refresh events, keep backlog, and train teammates on standards.",
    points: ["Audit tags/triggers/variables to remove unused", "Monitor tag bloat to protect performance", "Review events/conversions quarterly", "Keep backlog of improvements/new integrations", "Train team on GTM standards before publishing"],
  },
];

export default function GtmImplementationChecklist() {
  const canonical = buildCanonical("/digital-products/gtm-implementation-tracking-checklist");

  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-green-50 text-slate-900">
      <SeoHelmet
        title="GTM Implementation & Tracking Checklist | GoDigitalPro"
        description="Free Google Tag Manager implementation checklist: access, structure, data layer, GA4 events, ad pixels, trigger hygiene, QA, environments, consent, and maintenance."
        canonical={canonical}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Learn", url: buildCanonical("/learn") },
          { name: "Digital products", url: buildCanonical("/learn/digital-products") },
          { name: "GTM Implementation & Tracking Checklist", url: canonical },
        ]}
      />

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-slate-50" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <Link
                to="/learn/digital-products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-900"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to digital products
              </Link>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-green-100">
                <Sparkles className="h-4 w-4 text-green-600" />
                Digital product
              </div>
              <h1 className="text-3xl font-bold leading-tight md:text-4xl">Google Tag Manager Implementation & Tracking Master Checklist</h1>
              <p className="text-lg text-slate-700">
                Use this checklist for every site, funnel, or tracking setup you manage in GTM. It covers container setup, data layer, GA4 and ad pixels, trigger hygiene,
                QA/versioning, environments, consent, and maintenance so you ship clean, reliable tracking.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-700">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <ClipboardList className="h-4 w-4 text-green-600" />
                  10 sections · implementation + QA
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <Target className="h-4 w-4 text-emerald-600" />
                  Data layer, GA4, pixels, triggers
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
                  <ShieldCheck className="h-4 w-4 text-amber-600" />
                  QA, consent, maintenance
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-200 transition hover:bg-green-800"
                >
                  <Download className="h-4 w-4" />
                  Download the checklist (PDF)
                </a>
                <Link
                  to="/onboarding"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-900"
                >
                  Need done-for-you GTM setup?
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-sm text-slate-600">Free to use and adapt for teams and client onboarding.</p>
            </div>
            <div className="flex w-full flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-green-100 md:w-80">
              <div className="flex items-center gap-2 text-sm font-semibold text-green-700">
                <CheckCircle2 className="h-4 w-4" />
                You’ll check for:
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Single container, correct access, and linked accounts.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Data layer strategy with standardized event names.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  GA4 and ad pixels firing with mapped parameters.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  Scoped triggers, exceptions, and clean naming.
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                  QA/versioning, environments, and consent controls.
                </li>
              </ul>
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-800 ring-1 ring-green-100 hover:bg-green-100"
              >
                Download free PDF
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">Inside the PDF</p>
              <h2 className="text-2xl font-bold text-slate-900">From container setup to governance</h2>
              <p className="mt-2 text-slate-700">Follow these 10 sections to launch and maintain reliable GTM tracking.</p>
            </div>
            <Target className="h-6 w-6 text-green-600" />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {sections.map((item) => (
              <div key={item.title} className="flex flex-col gap-2 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-700">{item.summary}</p>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                </div>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                <Users className="h-4 w-4 text-green-600" />
                Use this checklist when…
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                  Setting up GTM for a new site, funnel, or app.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                  Auditing tracking debt or messy containers.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                  Onboarding clients or teammates into your tracking standards.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                <LayoutTemplate className="h-4 w-4 text-amber-600" />
                How to put it to work
              </div>
              <ol className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-xs font-semibold text-green-700 ring-1 ring-green-100">1</span>
                  Start with container install, access, naming, and data layer plans before adding tags.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-xs font-semibold text-green-700 ring-1 ring-green-100">2</span>
                  Implement GA4 and ad pixels with scoped triggers and validated parameters.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-xs font-semibold text-green-700 ring-1 ring-green-100">3</span>
                  Use QA, environments, and consent controls before publishing; maintain versions and audits.
                </li>
              </ol>
              <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-800 ring-1 ring-green-100">
                <Download className="h-4 w-4" />
                Keep the PDF open while configuring to avoid misses.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-green-700 px-6 py-8 text-white shadow-lg shadow-green-200 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-100">Download</p>
              <h3 className="mt-1 text-2xl font-semibold">Grab the GTM checklist and launch with confidence</h3>
              <p className="mt-2 max-w-2xl text-sm text-green-100">
                Free, ready-to-use, and built for tracking teams. Share with stakeholders, adapt to SOPs, and keep it handy for QA and optimization cycles.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-green-700 shadow-sm ring-1 ring-green-100 hover:bg-green-50"
              >
                Download the PDF
                <Download className="h-4 w-4" />
              </a>
              <Link to="/onboarding" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-green-100 hover:text-white">
                Want experts to build it for you? Apply for onboarding
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
