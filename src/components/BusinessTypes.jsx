import React from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Rocket,
  FileText,
  Globe2,
  MessageCircle,
  Video,
  ArrowRight,
} from "lucide-react";

const items = [
  {
    title: "EdTech Growth",
    sub: "Scale student demand, admissions pipeline, and revenue with sharper category positioning.",
    link: "/industries/edtech",
    icon: GraduationCap,
  },
  {
    title: "Paid Media",
    sub: "Google, Meta, and YouTube programs built for accountable CAC and pipeline quality.",
    link: "/services/paid-marketing",
    icon: Rocket,
  },
  {
    title: "SEO & Content",
    sub: "Build search visibility and topical authority around high-intent education journeys.",
    link: "/services/seo-content",
    icon: FileText,
  },
  {
    title: "Website & CRO",
    sub: "Landing pages and web experiences designed to convert qualified demand into action.",
    link: "/services/website-development",
    icon: Globe2,
  },
  {
    title: "Social & Community",
    sub: "Thoughtful social systems that build trust with students, parents, and decision-makers.",
    link: "/services/social-media-marketing",
    icon: MessageCircle,
  },
  {
    title: "Video & Ad Production",
    sub: "Creative systems for reels, ad variations, founder videos, and performance edits at scale.",
    link: "/services/video-ad-production",
    icon: Video,
  },
];

export default function BusinessTypes() {
  return (
    <section className="py-20" id="industries">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Centered heading & intro */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark">
            Where We Create the Most Leverage
          </h2>
          <p className="mt-3 text-slate-700 text-base md:text-lg">
            The main-domain experience now focuses on the capabilities and
            category depth that matter most for EdTech growth.
          </p>
        </div>

        {/* Compact, clickable, no-image cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, sub, link, icon: Icon }) => (
            <Link
              key={title}
              to={link}
              className="group relative flex items-start gap-4 rounded-2xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition"
              aria-label={title}
            >
              {/* Accent strip on hover */}
              <span className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-transparent group-hover:bg-dark transition-colors" />

              {/* Icon */}
              <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-slate-900 text-primary shrink-0">
                <Icon size={20} />
              </span>

              {/* Text */}
              <div className="min-w-0 pr-8">
                <div className="font-serif text-lg font-semibold text-dark">
                  {title}
                </div>
                <div className="text-sm text-slate-800 mt-1">{sub}</div>
              </div>

              {/* Arrow affordance */}
              <ArrowRight
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition"
                aria-hidden
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
