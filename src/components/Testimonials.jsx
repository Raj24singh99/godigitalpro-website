// src/components/Testimonials.jsx
import React from "react";
import { ExternalLink, Linkedin } from "lucide-react";

/* ---------- Testimonial Data ---------- */
const ITEMS = [
  {
    company: "Aashirs",
    site: "https://aashirs.com/",
    person: "Ashirbani Roy",
    role: "Founder",
    linkedin: "https://www.linkedin.com/in/ashirbaniroy/",
    tags: ["Google Ads", "Meta Ads", "D2C Strategy"],
    quote:
      "Working with GoDigitalPro has been one of the most impactful partnerships for us. The team didn’t just manage campaigns—they understood our products, seasonality and margins. In six months we grew 5× and improved ROAS by ~50%. Their bi-channel plan across Google & Meta, product-level data checks, and location-wise optimisation made decisions simple and repeatable. Clear weekly updates and total transparency.",
  },
  {
    company: "Housewise",
    site: "https://housewise.in/",
    person: "Prayank Agrawal",
    role: "Founder & CEO",
    linkedin: "https://www.linkedin.com/in/pryankagrawal",
    tags: ["SEO", "Content Ops", "Analytics"],
    quote:
      "We started when our organic visibility was flat. GDP rebuilt our on-page structure, launched a consistent content engine, and added the right tracking. Traffic and ~2.5× qualified leads followed. What stood out was how the team kept the plan realistic for us to execute—no fluff, only momentum.",
  },
  {
    company: "Logicoy",
    site: "https://www.logicoy.com/",
    person: "Prabhu Pathak",
    role: "Co-founder & Director",
    linkedin: "https://www.linkedin.com/in/prabhupathak",
    tags: ["Google Ads", "SEO", "B2B Lead Gen"],
    quote:
      "GoDigitalPro helped us start from scratch—no paid or organic motion. They set up tracking, ad hygiene, landing pages and a practical SEO plan. Qualified demos and revenue started within the first quarter. The team is responsive, transparent and very clear about what’s working and what to pause.",
  },
  {
    company: "TruWay",
    site: "https://truwaymm.com/",
    person: "Mehtab S.",
    role: "Managing Director",
    linkedin: "https://www.linkedin.com/in/mehtab-s-a79318179",
    tags: ["Website Dev", "SEO", "Meta Ads"],
    quote:
      "We brought our whole business online with GDP. They built the website, set up tracking, and scaled SEO and paid to steady lead flow. The reporting and accountability helped our marketing and sales move in one direction.",
  },
  {
    company: "Happy60Plus",
    site: "https://www.happy60plus.com/",
    person: "Vinay Mishra",
    role: "Co-founder & CTO",
    linkedin: "https://www.linkedin.com/in/vinaymishra/",
    tags: ["SEO", "Google Ads", "Funnel Strategy"],
    quote:
      "GDP improved our lead quality and lowered CPL. Their weekly dashboards made it easy to prioritise work across marketing and sales. The team is committed, hands-on, and very clear about next steps.",
  },
  {
    company: "Orchids International School",
    site: "https://www.orchidsinternationalschool.com/",
    person: "Arvind Kumar",
    role: "Business Head",
    linkedin: "https://www.linkedin.com/in/arvind-kumar-2237335",
    tags: ["Google Ads", "Meta Ads", "Reporting"],
    quote:
      "For 100+ schools, data discipline matters. We spent ~₹25cr across Google & Meta with strong ROI. GDP’s dynamic dashboards, geo-wise budgeting and clean execution helped us scale with confidence.",
  },
];

/* ---------- Reusable UI Elements ---------- */
const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-yellow-200/80 px-3 py-1 text-[13px] font-medium text-gray-900 ring-1 ring-black/10">
    {children}
  </span>
);

const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-[12px] text-gray-900 ring-1 ring-black/10">
    {children}
  </span>
);

/* ---------- Testimonial Card ---------- */
function TCard({ t }) {
  return (
    <article className="relative w-[840px] max-w-[92vw] shrink-0 rounded-[28px] bg-white p-6 md:p-9 ring-1 ring-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
      {/* Company */}
      <a
        href={t.site}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2"
        aria-label={`${t.company} website`}
      >
        <Pill>
          <span className="font-semibold">{t.company}</span>
          <ExternalLink size={16} className="ml-1 opacity-70" />
        </Pill>
      </a>

      {/* Quote */}
      <p className="mt-5 text-[18px] leading-[1.75] text-slate-900">
        “{t.quote}”
      </p>

      {/* Person */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <div className="text-xl font-extrabold text-gray-900">{t.person}</div>
        <a
          href={t.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2]/15"
          aria-label={`${t.person} on LinkedIn`}
          title="LinkedIn"
        >
          <Linkedin size={16} />
        </a>
      </div>
      <div className="text-[15px] text-slate-700">{t.role}</div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {t.tags.map((x) => (
          <Tag key={x}>{x}</Tag>
        ))}
      </div>
    </article>
  );
}

/* ---------- Section ---------- */
export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <header className="mb-6 md:mb-8">
          <h2 className="text-center font-serif text-4xl md:text-5xl font-bold text-gray-900">
            Success Stories
          </h2>
          <p className="mt-3 text-center text-slate-700">
            Real founders. Real results. Clear strategy, transparent reporting, and accountable execution.
          </p>
        </header>

        {/* Scrollable testimonials */}
        <div className="overflow-x-auto [-webkit-overflow-scrolling:touch]">
          <div className="flex gap-6 md:gap-8 px-1 py-2">
            {ITEMS.map((t) => (
              <TCard key={t.company} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
