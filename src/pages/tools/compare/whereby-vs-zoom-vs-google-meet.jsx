import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Shield,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "whereby vs zoom vs google meet";
const canonical = buildCanonical("/tools/compare/whereby-vs-zoom-vs-google-meet");

const brandMeta = {
  whereby: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/whereby.com",
  },
  zoom: {
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/zoom.us",
  },
  "google meet": {
    gradient: "from-emerald-500 via-green-500 to-lime-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/meet.google.com",
  },
};

const contenders = [
  {
    key: "whereby",
    name: "Whereby",
    blurb: "Browser-native video with embeddable APIs and EU hosting.",
    url: "https://whereby.com",
  },
  {
    key: "zoom",
    name: "Zoom",
    blurb: "Enterprise-grade meetings/webinars with deep admin controls.",
    url: "https://zoom.us",
  },
  {
    key: "google meet",
    name: "Google Meet",
    blurb: "Workspace-native meetings with low-friction access for Google users.",
    url: "https://workspace.google.com/products/meet/",
  },
];

const comparisonRows = [
  {
    label: "Join experience",
    whereby: "Browser-native, no downloads, easy guest access via simple URLs.",
    zoom: "Best quality in app; browser fallback exists but less polished.",
    "google meet": "Runs in modern browsers; smoothest for Workspace users.",
  },
  {
    label: "Embeddability",
    whereby: "Full embedded API with HIPAA/GDPR-ready hosting options.",
    zoom: "SDKs exist but heavier; more suited to enterprise workflows.",
    "google meet": "Very limited embedding; mainly bound to Workspace ecosystem.",
  },
  {
    label: "Webinars/events",
    whereby: "Best for meetings; not designed for large-scale webinars.",
    zoom: "Webinars, Zoom Events, breakout rooms, interpretation, Q&A.",
    "google meet": "Great for internal meetings; event tooling is more basic.",
  },
  {
    label: "Admin & compliance",
    whereby: "GDPR-first, EU hosting options, straightforward admin controls.",
    zoom: "Rich admin, SSO, policies, recordings, and global data centers.",
    "google meet":
      "Inherits Google Workspace controls; easy deployment for Google admins.",
  },
  {
    label: "Best use case",
    whereby: "Client meetings and embedded video in SaaS products.",
    zoom: "Enterprise meetings, trainings, and scalable external webinars.",
    "google meet": "Internal and client meetings for Workspace-based orgs.",
  },
];

const scoreboard = [
  { label: "Ease of joining", scores: { whereby: 9.5, zoom: 8.6, "google meet": 9.0 } },
  { label: "Webinar depth", scores: { whereby: 6.5, zoom: 9.4, "google meet": 7.2 } },
  {
    label: "Privacy/hosting options",
    scores: { whereby: 9.0, zoom: 8.5, "google meet": 8.0 },
  },
  {
    label: "Integrations + APIs",
    scores: { whereby: 8.8, zoom: 9.2, "google meet": 7.8 },
  },
  {
    label: "Overall value",
    scores: { whereby: 8.7, zoom: 8.9, "google meet": 9.1 },
  },
];

const avg = (key) => {
  const total = scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  whereby: avg("whereby"),
  zoom: avg("zoom"),
  "google meet": avg("google meet"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const overallWinnerLabel =
  overallWinnerKey === "whereby"
    ? "Whereby"
    : overallWinnerKey === "zoom"
    ? "Zoom"
    : "Google Meet";

const pricingTable = [
  {
    plan: "Whereby Pro",
    monthly: "From around ~$9.99/mo",
    annual: "Similar effective rate annually",
    limits: "Unlimited 12h meetings, recordings, room branding",
    notes: "Ideal for agencies, telehealth, and client-facing teams.",
  },
  {
    plan: "Zoom Pro",
    monthly: "From around ~$15.99/mo",
    annual: "Approx. ~$12.49/mo when billed annually",
    limits: "30h meetings, 5 GB cloud recording, basic admin controls",
    notes: "Good default choice for SMBs hosting external clients.",
  },
  {
    plan: "Google Workspace Business Starter",
    monthly: "From around ~$6/user/mo",
    annual: "Billed monthly or annually",
    limits: "100 participant Meet calls, 30 GB storage per user",
    notes: "Great value if your team already runs on Workspace.",
  },
];

const featureBullets = {
  experience: [
    "Whereby: Guests join in the browser with a memorable URL—no apps or logins required for most flows.",
    "Zoom: Most polished experience in the native app; nearly everyone already knows how to use it.",
    "Google Meet: Zero friction for Workspace users; links slot straight into Calendar and Gmail.",
  ],
  security: [
    "Whereby: GDPR-first stance with EU hosting and clear data regions for privacy-sensitive teams.",
    "Zoom: Mature security stack with SSO, waiting rooms, passcodes, and enterprise admin controls.",
    "Google Meet: Benefits from Google’s security model and centralised Workspace admin policies.",
  ],
  webinars: [
    "Whereby: Excels at small meetings and embedded calls, but not built for large webinars or events.",
    "Zoom: Deep webinar/event features such as Zoom Webinars and Zoom Events for large-scale sessions.",
    "Google Meet: Good for internal all-hands and client meetings, but fewer advanced webinar tools.",
  ],
};

const prosCons = {
  whereby: {
    pros: ["No downloads for guests", "Embeddable API", "GDPR-first with EU hosting options"],
    cons: ["Limited native webinar functionality", "Smaller marketplace than Zoom/Google"],
  },
  zoom: {
    pros: ["Most feature-rich", "Huge integration ecosystem", "Large webinar and events support"],
    cons: ["Works best with app install", "Heavier admin overhead in big organisations"],
  },
  "google meet": {
    pros: ["Included with Workspace", "Simple, clean UI", "Tight Calendar and Gmail integration"],
    cons: ["Fewer engagement and webinar tools", "Limited branding and embedding options"],
  },
};

const faqs = [
  {
    q: `Which tool is easiest for guests in ${YEAR}?`,
    a: "Whereby is typically the easiest for guests: browser-native rooms, no downloads, and simple URLs make it very low friction.",
  },
  {
    q: "Who should pick Zoom?",
    a: "Choose Zoom if you run frequent external client calls, trainings, or webinars and you need robust recording, admin controls, and scale.",
  },
  {
    q: "Is Google Meet enough for client calls?",
    a: "Yes, for straightforward client calls and internal meetings—especially if you already use Workspace. Agencies needing heavy branding or webinar tooling may hit limits.",
  },
  {
    q: "Which works best embedded inside apps?",
    a: "Whereby Embedded is built as an embeddable video API with EU hosting, making it a strong choice for SaaS products that need video inside the product.",
  },
  {
    q: "Can all three tools handle basic team meetings?",
    a: "Yes. All three can handle day-to-day team meetings; the differences show up more in webinars, compliance posture, embedding, and ecosystem fit.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase();
  const key = lowered.includes("google") ? "google meet" : lowered;
  const meta =
    brandMeta[key] || {
      gradient: "from-slate-400 to-slate-600",
      badge: "bg-slate-100 text-slate-900",
    };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${meta.gradient}`}
      >
        {meta.logo ? (
          <img src={meta.logo} alt={`${name} logo`} className="h-full w-full object-cover" />
        ) : (
          <span className="text-sm font-bold text-white">
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>
        {name}
      </span>
    </div>
  );
};

export default function WherebyVsZoomVsGoogleMeetPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Whereby vs Zoom vs Google Meet – Honest Comparison (${YEAR})`}
        description="Compare Whereby, Zoom, and Google Meet for join experience, webinars, pricing, security, embeddability, and picking the right video platform for your team."
        canonical={canonical}
        keywords={`${primaryKeyword}, video meeting comparison, whereby vs zoom, whereby vs google meet`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          Video collaboration
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Whereby vs Zoom vs Google Meet ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          We tested three of the most common video platforms.{" "}
          <strong>Whereby</strong> prioritises frictionless browser-based
          joining and embeddable video. <strong>Zoom</strong> leads for
          enterprise webinars and large external meetings.{" "}
          <strong>Google Meet</strong> is the default choice for teams that live
          inside Google Workspace. Here is how they compare so you pick the
          right one for your workflows.
        </p>

        {/* Quick verdict + privacy card */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-amber-50/90 p-6 ring-1 ring-amber-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-amber-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Whereby</strong> when you want the lowest possible
              friction for guests or embedded video inside your product. Pick{" "}
              <strong>Zoom</strong> if you need mature webinar features, admin
              controls, and scale. Use <strong>Google Meet</strong> if your team
              already runs on Workspace and you care most about speed and
              simplicity for internal and client calls.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-amber-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {overallWinnerLabel}{" "}
              <span className="text-xs font-medium text-amber-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Shield className="h-5 w-5 text-amber-700" /> Privacy-focused pick
            </div>
            <p className="text-sm text-slate-700">
              <strong>Whereby</strong> offers EU hosting and a GDPR-first
              approach, making it attractive for telehealth, legal, and other
              regulated or privacy-sensitive client work.
            </p>
          </div>
        </div>

        {/* Top contender cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contenders.map((card) => (
            <a
              key={card.key}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[card.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-md`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
              </div>
              <div className="relative flex items-start justify-between">
                <LogoBadge name={card.name} />
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {card.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-amber-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Whereby</th>
                  <th className="px-4 py-3">Zoom</th>
                  <th className="px-4 py-3">Google Meet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.whereby}</td>
                    <td className="px-4 py-3 text-slate-700">{row.zoom}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {row["google meet"]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Whereby</th>
                  <th className="px-4 py-3">Zoom</th>
                  <th className="px-4 py-3">Google Meet</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const wherebyScore = row.scores.whereby;
                  const zoomScore = row.scores.zoom;
                  const meetScore = row.scores["google meet"];
                  const winnerValue = Math.max(
                    wherebyScore,
                    zoomScore,
                    meetScore
                  );
                  const winnerKey =
                    winnerValue === wherebyScore
                      ? "whereby"
                      : winnerValue === zoomScore
                      ? "zoom"
                      : "google meet";
                  const winnerLabel =
                    winnerKey === "whereby"
                      ? "Whereby"
                      : winnerKey === "zoom"
                      ? "Zoom"
                      : "Google Meet";

                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "whereby"
                            ? "font-semibold text-amber-800"
                            : "text-slate-700"
                        }`}
                      >
                        {wherebyScore}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "zoom"
                            ? "font-semibold text-sky-800"
                            : "text-slate-700"
                        }`}
                      >
                        {zoomScore}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "google meet"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {meetScore}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winnerLabel}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-amber-50 via-sky-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.whereby}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.zoom}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages["google meet"]}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinnerLabel}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-amber-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-amber-600" /> Join experience & UX
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.experience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-emerald-600" /> Security & admin controls
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.security.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-sky-600" /> Webinars, events & embedding
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.webinars.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Annual (approx.)</th>
                  <th className="px-4 py-3">Key limits</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.plan}>
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.plan}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.monthly}</td>
                    <td className="px-4 py-3 text-slate-700">{row.annual}</td>
                    <td className="px-4 py-3 text-slate-700">{row.limits}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing changes frequently based on region, promos, and seat counts.
            Always confirm current pricing and limits on each vendor’s official
            pricing page before budgeting for a full team rollout.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Whereby:</strong> Minimal learning curve for guests and
              hosts; browser-native join and simple room links make it ideal for
              client-facing work where you cannot control their IT setup.
            </li>
            <li>
              <strong>Zoom:</strong> Slightly higher setup overhead, but most
              users already know the basics. Power users can go deep on
              webinars, events, and advanced meeting controls.
            </li>
            <li>
              <strong>Google Meet:</strong> Nearly zero learning curve for
              Workspace users—Meet links are part of Calendar, Gmail, and Chat.
              Feature set is intentionally lean to keep things simple.
            </li>
          </ul>
        </section>

        {/* Real-world use-cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Client-facing agencies and telehealth:</strong> Whereby
              wins with no-download rooms, EU hosting, and embeddable rooms for
              white-labelled experiences.
            </li>
            <li>
              <strong>Enterprises running trainings and webinars:</strong> Zoom
              wins with Zoom Webinars, Zoom Events, and deep integration into
              enterprise IT environments.
            </li>
            <li>
              <strong>Internal collaboration for Google-first teams:</strong>{" "}
              Google Meet wins if you are already all-in on Workspace and want
              tight integration without extra tools.
            </li>
            <li>
              <strong>Product teams embedding video into SaaS:</strong> Whereby
              Embedded is specifically designed for embedding, with APIs and
              flexible layouts.
            </li>
          </ul>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Who wins for… */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Whereby</h3>
              <p className="text-sm text-slate-700">
                Best when you want frictionless guest access and embedded
                meeting rooms, with privacy and data residency high on your
                checklist.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Agencies, telehealth, boutique consultancies, and
                SaaS products embedding video.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Zoom</h3>
              <p className="text-sm text-slate-700">
                Best for general-purpose meetings plus webinars and training
                sessions, especially when scale and feature depth matter.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Mid-market and enterprise teams, training providers,
                and sales organisations.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Google Meet</h3>
              <p className="text-sm text-slate-700">
                Best if your team lives in Gmail, Calendar, and Drive already
                and you want video that simply appears where your work happens.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Startups and SMBs on Google Workspace who need
                straightforward, reliable video calls.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-1 text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600">
          <Link
            to="/tools"
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-amber-700 ring-1 ring-amber-100 hover:bg-amber-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
