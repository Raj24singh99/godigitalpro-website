import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Rocket,
  Stethoscope,
  Building2,
  GraduationCap,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const items = [
  {
    title: "D2C & E-commerce",
    sub: "Full-funnel growth from awareness to retention.",
    link: "/industries/d2c-ecommerce",
    icon: ShoppingCart,
  },
  {
    title: "SaaS & Tech Startups",
    sub: "ROI-driven acquisition and activation at scale.",
    link: "/industries/saas-startups",
    icon: Rocket,
  },
  {
    title: "Healthcare",
    sub: "Patient education, trust, and compliant growth.",
    link: "/industries/healthcare",
    icon: Stethoscope,
  },
  {
    title: "Local Services",
    sub: "Be found nearby—calls, bookings, reviews.",
    link: "/industries/local-services",
    icon: Building2,
  },
  {
    title: "EdTech",
    sub: "Reach students & parents, build authority.",
    link: "/industries/edtech",
    icon: GraduationCap,
  },
  {
    title: "B2B Services",
    sub: "Pipeline, not vanity—qualified lead engines.",
    link: "/industries/b2b-services",
    icon: Briefcase,
  },
];

export default function BusinessTypes() {
  return (
    <section className="py-20" id="industries">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Centered heading & intro */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark">
            Industries We Specialize In
          </h2>
          <p className="mt-3 text-slate-700 text-base md:text-lg">
            Six broad categories that cover most business models. Don’t see an
            exact match? We’ll tailor the plan to your needs.
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
