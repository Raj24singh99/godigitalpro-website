import React from "react";
import { Link } from "react-router-dom";
import {
  Globe2,
  Share2,
  Users2,
  Megaphone,
  Store,
  FileText,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    id: "web",
    title: "Website Development",
    desc: "Fast, clean websites that convert across devices.",
    icon: Globe2,
    link: "/services/website-development",
  },
  {
    id: "smm",
    title: "Social Media Marketing",
    desc: "Consistent content and real community building.",
    icon: Share2,
    link: "/services/social-media-marketing",
  },
  {
    id: "brand",
    title: "Brand Building",
    desc: "Clear identity and story people remember.",
    icon: Users2,
    link: "/services/brand-building",
  },
  {
    id: "paid",
    title: "Paid Marketing",
    desc: "ROI-focused ads on Google, YouTube, and Meta.",
    icon: Megaphone,
    link: "/services/paid-marketing",
  },
  {
    id: "marketplaces",
    title: "Marketplaces & Quick Commerce",
    desc: "Launch & scale on Amazon, Flipkart, Blinkit, Zepto.",
    icon: Store,
    link: "/services/marketplaces",
  },
  {
    id: "seo",
    title: "SEO & Content",
    desc: "Content that ranks, educates, and converts.",
    icon: FileText,
    link: "/services/seo-content",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Centered heading & intro */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="h2 text-dark">What We Do Best</h2>
          <p className="mt-3 text-slate-700 text-base md:text-lg">
            From building your online presence to driving measurable growth — our
            services are designed to make every part of your digital journey
            stronger, simpler, and more effective.
          </p>
        </div>

        {/* Compact clickable service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map(({ id, title, desc, icon: Icon, link }) => (
            <Link
              key={id}
              to={link}
              className="group relative flex items-start gap-4 rounded-2xl border border-black/10 bg-white p-4 shadow-sm hover:shadow-md transition"
            >
              {/* Accent strip on hover */}
              <span className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-transparent group-hover:bg-dark transition-colors" />

              {/* Icon */}
              <span className="inline-flex w-10 h-10 items-center justify-center rounded-lg bg-slate-900 text-primary shrink-0">
                <Icon size={18} />
              </span>

              {/* Text */}
              <div className="min-w-0">
                <h3 className="font-serif text-lg font-semibold text-dark">
                  {title}
                </h3>
                <p className="mt-1 text-slate-700 text-sm">{desc}</p>
              </div>

              {/* Arrow */}
              <ArrowRight
                size={18}
                className="ml-auto mt-1 shrink-0 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
