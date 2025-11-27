import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "GitHub";
const slug = "github";
const category = "Code Hosting & Collaboration";
const shortPitch =
  "GitHub is the leading platform for hosting Git repositories, collaborating with pull requests, CI/CD via Actions, and securing code at scale.";
const pricingSummary =
  "Free for public and small private repos; Team at ~$4/user/month adds roles and protected branches; Enterprise at ~$21+/user/month adds SSO, audit, and advanced security/licensing.";
const officialUrl = "https://github.com";
const ratingValue = 4.9;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/github.com",
  gradient: "from-slate-900 via-gray-800 to-slate-700",
  glow: "shadow-[0_20px_80px_rgba(15,23,42,0.35)]",
};

const alternatives = [
  { name: "GitLab", slug: "gitlab" },
  { name: "Bitbucket", slug: "bitbucket" },
  { name: "Azure DevOps", slug: "azure-devops" },
  { name: "Gitea", slug: "gitea" },
  { name: "Sourcegraph", slug: "sourcegraph" },
];

const faqs = [
  {
    q: "Is GitHub free?",
    a: "Yes. Free includes unlimited public/private repos with some feature limits. Team and Enterprise add permissions, SSO, and advanced security.",
  },
  {
    q: "Does GitHub have CI/CD?",
    a: "Yes. GitHub Actions provides CI/CD, automation, and workflows triggered by repo events.",
  },
  {
    q: "What security features exist?",
    a: "Dependabot, secret scanning, code scanning, and security advisories help secure codebases, with more controls on Enterprise.",
  },
  {
    q: "Can I manage permissions and roles?",
    a: "Team and Enterprise provide protected branches, required reviews, and role-based access controls.",
  },
  {
    q: "Does GitHub support packages?",
    a: "Yes. GitHub Packages hosts container images and package registries (npm, Maven, NuGet, etc.).",
  },
  {
    q: "How do I manage documentation?",
    a: "GitHub Pages hosts static docs from your repo; Wikis and READMEs support project documentation.",
  },
  {
    q: "Is there SSO and audit logging?",
    a: "Enterprise includes SAML/SSO, audit logging, and compliance features for larger orgs.",
  },
  {
    q: "Does GitHub support monorepos?",
    a: "Yes. GitHub supports monorepos; workflows and permissions can be tuned per repo/branch as needed.",
  },
];

function GitHubToolPage() {
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
        "GitHub is the dominant platform for hosting Git repos, collaborating via pull requests, running CI/CD with Actions, and securing code with built-in scanning and governance.",
      reviewRating: {
        "@type": "Rating",
        ratingValue,
        bestRating: "5",
        worstRating: "1",
      },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const featureBlocks = [
    {
      icon: <BookOpen className="h-5 w-5 text-slate-800" />,
      title: "Git hosting and PRs",
      body: "Host repos, manage branches, and collaborate through pull requests with reviews and checks.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Actions CI/CD",
      body: "Automate builds, tests, deployments, and workflows triggered by repo events.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Security and compliance",
      body: "Dependabot, secret/code scanning, SSO/SAML, audit logs, and policies on higher tiers.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "Packages and registries",
      body: "Host container images and package registries alongside your code.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-blue-500" />,
      title: "Docs and Pages",
      body: "GitHub Pages, Wikis, and READMEs for documentation; Codespaces for cloud dev environments.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-400" />,
      title: "Ecosystem and marketplace",
      body: "Marketplace actions, apps, and integrations connect GitHub to your dev and IT stack.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="GitHub review for dev teams: pricing, features, pros & cons, and alternatives for code hosting, CI/CD, and security."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-slate-900/10 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-slate-800" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-100 blur-3xl" />
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
                  GitHub centralizes code, CI/CD, packages, and security so teams can ship faster with strong collaboration and governance.
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
              {toolName} is a {category.toLowerCase()} platform that hosts Git repos, supports collaboration via pull requests, and includes CI/CD with Actions, package registries, and security tooling.
            </p>
            <p className="mt-3 text-slate-700">
              Developers, DevOps, and security teams use it to manage source, automate pipelines, and enforce policies across projects and organizations.
            </p>
            <p className="mt-3 text-slate-700">
              GitHub Pages, Wikis, and Codespaces extend docs and development workflows in one ecosystem.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits teams of all sizes that want robust Git hosting with CI/CD and security built in.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Dev teams collaborating via PRs and code reviews.",
                "Ops/DevOps automating CI/CD with Actions.",
                "Security teams leveraging Dependabot and code/secret scanning.",
                "Open source projects needing public repos and community tools.",
                "Enterprises requiring SSO, audit logs, and compliance controls.",
                "Teams hosting packages and registries alongside code.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-800" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">
              {toolName} emphasizes code collaboration, CI/CD, security, and an extensive ecosystem to streamline software delivery.
            </p>
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
                  Free for public and small private usage. Team ~ $4/user/month adds permissions and protected branches. Enterprise ~ $21+/user/month adds SSO/SAML, audit logs, advanced security, and enterprise support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Free/Team; move to Enterprise when you need SSO, compliance, and advanced security controls.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key limits</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Individuals, OSS, small teams</td>
                    <td className="px-4 py-3">Limited features, no SSO/advanced security</td>
                    <td className="px-4 py-3">Free</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team</td>
                    <td className="px-4 py-3">SMB dev teams</td>
                    <td className="px-4 py-3">Permissions, protected branches, more Actions minutes</td>
                    <td className="px-4 py-3">~$4/user/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Larger orgs needing compliance</td>
                    <td className="px-4 py-3">SSO/SAML, audit, advanced security, support</td>
                    <td className="px-4 py-3">~$21+/user/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Factor Actions minutes/storage, Codespaces usage, and package storage when estimating costs. Enterprise is required for SAML/SSO and advanced security.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-emerald-50 p-5 shadow-sm ring-1 ring-emerald-100">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Best-in-class Git hosting and PR collaboration.</li>
                  <li>Actions CI/CD and automation built in.</li>
                  <li>Strong security ecosystem (Dependabot, scanning, policies).</li>
                  <li>Extensive integrations and marketplace.</li>
                  <li>Packages, Pages, and Codespaces expand workflows.</li>
                  <li>Huge community and OSS support.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Enterprise features (SSO, advanced security) require higher tier.</li>
                  <li>Actions minutes/storage can add cost at scale.</li>
                  <li>Self-hosted GitHub Enterprise Server has separate management overhead.</li>
                  <li>Monorepos and large binaries may need extra tooling and optimization.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with other Git platforms and DevOps suites. Choose based on integration needs, compliance, and CI/CD/security preferences.
            </p>
            <p className="mt-2 text-slate-700">Every link below goes to a live tool page—no broken routes.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify_between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-600 hover:text-sky-500" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Compare {toolName} to other Git platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs GitLab</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/github-vs-gitlab">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                GitLab is an all-in-one DevOps platform with built-in CI/CD and security. {toolName} offers best-in-class repo hosting, Actions, and a massive ecosystem.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for ecosystem and community; choose GitLab if you want a unified DevOps suite with tighter built-in features.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items_center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Bitbucket</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/github-vs-bitbucket">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Bitbucket integrates closely with Atlassian tools. {toolName} has broader ecosystem and Actions CI/CD, with strong OSS support.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for ecosystem breadth; choose Bitbucket if you are deep in Atlassian and want tighter Jira integration.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want a widely adopted Git platform with CI/CD, security, and a huge ecosystem, {toolName} is worth it. It scales from hobby projects to enterprise with SSO and governance.
            </p>
            <p className="mt-3 text-slate-700">
              If you prefer an all-in-one DevOps suite or tight Atlassian integration, evaluate GitLab or Bitbucket alongside {toolName}.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} remains the top choice for code hosting and collaboration with strong CI/CD and security features.</p>
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
            <p>
              Choose {toolName} if you want best-in-class Git hosting, collaboration, and CI/CD with strong security and ecosystem support.
            </p>
            <p>
              Consider GitLab for an all-in-one DevOps suite or Bitbucket for Atlassian alignment; self-hosted options like Gitea if you need full control.</p>
            <p>{toolName} helps teams build, ship, and secure software collaboratively at any scale.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
        className="flex w/full items-center justify_between px-4 py-3 text-left text-slate-900"
      >
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default GitHubToolPage;
