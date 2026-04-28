import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Bitbucket";
const slug = "bitbucket";
const category = "DevOps & Git Hosting";
const shortPitch =
  "Bitbucket is Atlassian’s Git hosting and CI/CD platform with tight Jira/Confluence integration for code, pipelines, and deployments.";
const pricingSummary =
  "Free for small teams; Standard and Premium per-user plans add build minutes, storage, merge checks, and security controls.";
const officialUrl = "https://bitbucket.org";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/bitbucket.org",
  gradient: "from-blue-600 via-indigo-600 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(37,99,235,0.26)]",
};

const alternatives = [
  { name: "GitHub", slug: "github" },
  { name: "GitLab", slug: "gitlab" },
  { name: "Azure DevOps", slug: "azure-devops" },
  { name: "CodeCommit", slug: "ai" },
  { name: "Gitea", slug: "ai" },
];

const faqs = [
  { q: "What is Bitbucket?", a: "Bitbucket is a Git hosting service from Atlassian with built-in CI/CD pipelines and integrations with Jira and Confluence." },
  { q: "Who is it for?", a: "Teams using Jira/Confluence who want integrated repos, pipelines, and permissions, plus smaller teams needing free private repos." },
  { q: "How does pricing work?", a: "Free for small teams; Standard and Premium per-user add more build minutes, storage, merge checks, security, and support." },
  { q: "Does it include CI/CD?", a: "Yes. Bitbucket Pipelines handles builds/tests/deploys with usage-based minutes and caches." },
  { q: "How are permissions handled?", a: "Branch permissions, merge checks, and workspace controls; Premium adds IP allowlists and required checks." },
  { q: "Is human review needed?", a: "Yes. Enforce PR reviews, merge checks, and security scanning; monitor pipeline costs." },
];

function BitbucketToolPage() {
  const canonical = buildCanonical(`/tools/${slug}`);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: toolName,
    description: shortPitch,
    brand: "Third-party tool",
    url: canonical,
    review: {
      "@type": "Review",
      author: { "@type": "Organization", name: "GoDigitalPro" },
      reviewBody:
        "Bitbucket combines Git hosting, CI/CD pipelines, and Atlassian integrations. Strong fit for Jira/Confluence users; set guardrails for reviews and pipeline spend.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Git repos", body: "Private/public repos with PRs, code review, and branch permissions." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Pipelines CI/CD", body: "YAML pipelines for build/test/deploy with caches and environments." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Jira/Confluence", body: "Tight integration for tickets, smart commits, and documentation links." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Merge checks", body: "Required reviews, status checks, and branch protection (Premium expands controls)." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Deployments", body: "Track deployments, environments, and approvals in Pipelines." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations", body: "Connect with Slack, Ops, cloud providers, and Atlassian Marketplace apps." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Bitbucket review: pricing, features, pros & cons, and alternatives so you can choose the right Git hosting and CI/CD platform."
        canonical={canonical}
        image={`https://www.godigitalpro.in/og/tools/${slug}.png`}
        type="article"
        schema={[productSchema, faqSchema]}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Tools Hub", url: buildCanonical("/tools") },
          { name: toolName, url: canonical },
        ]}
      />

      <main className="tool-page bg-white text-slate-900">
        <section className="section section--hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-blue-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Features, Pricing, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-slate-900 text-white ring-2 ring-slate-900 hover:bg-slate-700" href={officialUrl}>
                  Visit official website
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-blue-100 blur-3xl" />
                </div>
                <div className="relative flex items-center gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded-xl bg-white/20 ring-2 ring-white/30">
                    <img src={brandMeta.logo} alt={`${toolName} logo`} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/80">Featured Tool</p>
                    <p className="text-xl font-bold">{toolName}</p>
                  </div>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                  {toolName} links Git repos with pipelines and Atlassian tools—enforce reviews and monitor build minutes to stay efficient.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  Recommended by GoDigitalPro
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            <p className="mt-4 text-slate-700">
              {toolName} is a Git hosting platform with built-in CI/CD. It’s tightly integrated with Jira/Confluence, making it attractive for Atlassian-centric teams.
            </p>
            <p className="mt-3 text-slate-700">Use it to manage repos, enforce reviews, and ship via Pipelines. Plan branch strategies and merge checks to maintain quality.</p>
            <p className="mt-3 text-slate-700">Monitor pipeline minutes and storage to control costs on higher usage.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams on Atlassian stacks that want integrated repos and pipelines.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Engineering teams using Jira and Confluence.",
                "Small teams needing free private repos with pipelines.",
                "DevOps groups wanting integrated CI/CD without separate tools.",
                "Organizations needing branch permissions and merge checks.",
                "Teams coordinating deployments with Atlassian issues.",
                "Developers exporting data to BI/security for audits.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} centers on Git repos, CI/CD pipelines, permissions, and Atlassian integration.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--pricing bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing (2025)</h2>
                <p className="mt-2 text-slate-700">
                  Free for small teams. Standard/Premium charge per user and include more build minutes, storage, merge checks, and security. Watch pipeline overages and storage growth.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Free to validate; Standard for most teams; Premium if you need IP allowlists, required checks, and more controls.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Small teams</td>
                    <td className="px-4 py-3">Private repos, limited minutes/storage</td>
                    <td className="px-4 py-3">Good for trials</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Most teams</td>
                    <td className="px-4 py-3">More minutes, merge checks, permissions</td>
                    <td className="px-4 py-3">Common pick</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium</td>
                    <td className="px-4 py-3">Higher control</td>
                    <td className="px-4 py-3">Required checks, IP allowlists, more storage</td>
                    <td className="px-4 py-3">For stricter governance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Estimate build minutes/storage; set caching and prune artifacts to manage cost.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-blue-50 p-5 shadow-sm ring-1 ring-blue-100">
                <div className="flex items-center gap-2 text-blue-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Tight Atlassian integration (Jira/Confluence).</li>
                  <li>Built-in pipelines for CI/CD.</li>
                  <li>Branch permissions and merge checks.</li>
                  <li>Simple flat pricing tiers with free option.</li>
                  <li>Deployment tracking and environments.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pipelines minutes/storage can add cost at scale.</li>
                  <li>Marketplace smaller vs GitHub/GitLab.</li>
                  <li>Enterprise security features mostly in Premium.</li>
                  <li>Simple UI; fewer advanced workflow automations than rivals.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other Git hosting and CI/CD platforms for ecosystem, security, and pricing.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href={`/tools/${alt.slug}`}>
                    View
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--vs bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} vs other tools</h2>
            <p className="text-slate-700">See how {toolName} compares to other Git/CI platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs GitHub</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/github">
                  View GitHub
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                GitHub has a larger ecosystem and Actions; {toolName} offers tighter Atlassian integration and merge controls. Choose based on stack preference.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs GitLab</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/gitlab">
                  View GitLab
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                GitLab is an all-in-one DevSecOps suite with more built-in security/scanning; {toolName} keeps things lighter with Atlassian ties. Pick based on feature depth vs simplicity.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want Git hosting with built-in pipelines and strong Atlassian integration. Enforce reviews and watch build costs to keep it efficient.
            </p>
            <p className="mt-3 text-slate-700">If you need a larger ecosystem or deeper DevSecOps, compare with GitHub/GitLab.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid choice for Atlassian-centric teams wanting integrated repos and CI/CD without extra tooling.
            </p>
          </div>
        </section>

        <section className="section section--faq bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} FAQs</h2>
            <p className="mt-2 text-slate-700">Tap a question to expand the answer.</p>
            <div className="mt-6 space-y-3">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--final bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12 space-y-4 text-slate-800">
            <h2 className="text-2xl font-bold text-slate-900">Final verdict on {toolName}</h2>
            <p>{toolName} brings Git hosting, CI/CD, and Atlassian integration together.</p>
            <p>Use it if you value those integrations and can enforce code review and cost controls; consider other platforms for larger ecosystems or deeper DevSecOps.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your team, you can try it here:{" "}
              <a className="text-blue-700 hover:text-blue-600" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function AccordionItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900"
      >
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default BitbucketToolPage;
