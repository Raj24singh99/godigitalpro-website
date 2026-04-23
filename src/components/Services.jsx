import React from "react";
import { Link } from "react-router-dom";
import {
  Megaphone,
  FileText,
  MapPin,
  ShoppingBag,
  Share2,
  Video,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    id: "performance",
    title: "Performance Marketing",
    desc: "AI-driven paid media across Google, Meta, YouTube, and LinkedIn — optimized for lead quality, conversions, and revenue ROI, not just clicks.",
    icon: Megaphone,
    link: "/services/paid-marketing",
  },
  {
    id: "seo",
    title: "SEO & Content Strategy",
    desc: "Technical SEO, AI-powered keyword research, and content systems that compound organic demand month over month.",
    icon: FileText,
    link: "/services/seo-content",
  },
  {
    id: "geo",
    title: "Geo-Targeted Marketing",
    desc: "Location-based campaigns with AI optimization built for local businesses, multi-location brands, and regional expansion.",
    icon: MapPin,
    link: "/services/geo-marketing",
  },
  {
    id: "ecommerce",
    title: "E-commerce Marketing",
    desc: "Product feed optimization, conversion rate improvements, and AI-powered remarketing systems built to scale online stores.",
    icon: ShoppingBag,
    link: "/services/ecommerce-marketing",
  },
  {
    id: "social",
    title: "Social Media Marketing",
    desc: "Organic and paid social across Instagram, TikTok, and LinkedIn — combining community building with conversion-focused campaigns.",
    icon: Share2,
    link: "/services/social-media-marketing",
  },
  {
    id: "creative",
    title: "Creative & Video Production",
    desc: "High-velocity creative testing, video edits, and ad hooks optimized for platform algorithms and measurable performance outcomes.",
    icon: Video,
    link: "/services/video-ad-production",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Centered heading & intro */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="h2 text-dark">One AI-Powered Platform, Every Marketing Capability</h2>
          <p className="mt-3 text-slate-700 text-base md:text-lg">
            Strategy, creative, media, SEO, and analytics work better when they run as one AI-driven system — not five different vendors pulling in different directions.
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
