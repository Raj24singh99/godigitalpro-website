import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "GitLab";
const slug = "gitlab";
const category = "DevOps Platform";
const shortPitch =
  "GitLab is an all-in-one DevOps platform with Git repos, CI/CD, security scanning, and DevSecOps workflows in a single application.";
const pricingSummary =
  "Free tier for basic repos and CI; Premium around $29/user/month adds advanced CI/CD, planning, and support; Ultimate (custom) adds full security, compliance, and portfolio management.";
const officialUrl = "https://about.gitlab.com";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/gitlab.com",
  gradient: "from-orange-500 via-amber-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.22)]",
};

const alternatives = [
  { name: "GitHub", slug: "github" },
  { name: "Bitbucket", slug: "bitbucket" },
  { name: "Azure DevOps", slug: "azure-devops" },
  { name: "Gitea", slug: "gitea" },
  { name: "CircleCI", slug: "circleci" },
];

const faqs = [
  {
    q: "What makes GitLab different?",
    a: "It’s a single DevOps application covering code, CI/CD, security scanning, package registries, and deployment, reducing toolchain sprawl.",
  },
  {
    q: "Is GitLab self-hostable?",
    a: "Yes. GitLab can be self-hosted (CE/EE) or used as GitLab.com SaaS.",
  },
  {
    q: "Does GitLab have CI/CD?",
    a: "Yes. GitLab CI/CD is built-in with pipelines, runners, and templates.",
  },
  {
    q: "What security features are included?",
    a: "SAST, DAST, dependency scanning, container scanning, and secret detection—availability depends on tier, with most in Ultimate.",
  },
  {
    q: "Does it support planning and issues?",
    a: "Yes. Issues, epics (Premium/Ultimate), boards, and roadmaps support planning and project management.",
  },
  {
    q: "How does pricing work?",
    a: "Free, Premium (~$29/user/month), and Ultimate (custom). Higher tiers add security, compliance, and portfolio features.",
  },
  {
    q: "Can I use GitLab for packages and container registry?",
    a: "Yes. Built-in package registries and container registry are included.",
  },
  {
    q: "Does GitLab integrate with Kubernetes?",
    a: "Yes. GitLab supports Kubernetes deployments, environments, and cluster integration.",
  },
];

function GitLabToolPage() {
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
        "GitLab is a single DevOps platform combining Git repos, CI/CD, security scanning, and planning so teams can reduce toolchain complexity and improve velocity.",
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
      icon: <BookOpen className="h-5 w-5 text-orange-500" />,
      title: "Repos and collaboration",
      body: "Git hosting, merge requests, code review, and permissions in one app.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "CI/CD pipelines",
      body: "Integrated pipelines with runners, templates, and environments for deployments.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Security and compliance",
      body: "SAST, DAST, dependency/container scanning, secret detection, and compliance features (mostly in Ultimate).",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Packages and registry",
      body: "Built-in package registries and container registry to keep artifacts close to code.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-sky-500" />,
      title: "Planning and roadmaps",
      body: "Issues, boards, epics, and roadmaps to align work across teams (epics/roadmaps on higher tiers).",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-rose-500" />,
      title: "DevSecOps in one app",
      body: "Single platform reduces context switching and toolchain integration overhead.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="GitLab review for DevOps teams: pricing, features, pros & cons, and alternatives for repos, CI/CD, security, and planning in one platform."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-orange-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-100 blur-3xl" />
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
                  GitLab unifies code, CI/CD, security, and planning so DevSecOps teams can ship faster with fewer tools to integrate and manage.
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
              {toolName} is a {category.toLowerCase()} combining Git repos, CI/CD, security scanning, package registries, and planning features in one application. It aims to reduce toolchain sprawl and streamline DevSecOps.
            </p>
            <p className="mt-3 text-slate-700">
              Teams can self-host or use GitLab SaaS. Runners and templates make CI/CD setup straightforward.
            </p>
            <p className="mt-3 text-slate-700">
              Security scanning (SAST, DAST, dependency, container, secrets) is integrated, with fuller coverage on Ultimate.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits DevSecOps teams that want one platform for code, CI/CD, security, and planning.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Teams wanting integrated repos, CI/CD, and security scanning.",
                "Org that prefer self-hosting or need data residency control.",
                "DevSecOps groups aiming to reduce toolchain sprawl.",
                "Teams deploying to Kubernetes and cloud with built-in pipelines.",
                "Security-conscious teams wanting built-in SAST/DAST/dependency scanning.",
                "Engineering managers needing planning + delivery metrics in one platform.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-400" />
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
              {toolName} emphasizes a single application for DevSecOps: code, CI/CD, security, planning, and registries together.
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
                  Free tier for basic repos and CI. Premium ~ $29/user/month adds advanced CI/CD, planning, and support. Ultimate (custom) adds full security/compliance and portfolio features.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Premium for most teams; move to Ultimate if you require full security suite, compliance, and portfolio/roadmapping.</p>
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
                    <td className="px-4 py-3">Small projects, trials</td>
                    <td className="px-4 py-3">Limited features; basic CI</td>
                    <td className="px-4 py-3">Free</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium</td>
                    <td className="px-4 py-3">Most teams</td>
                    <td className="px-4 py-3">Advanced CI/CD, planning, support</td>
                    <td className="px-4 py-3">~$29/user/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Ultimate</td>
                    <td className="px-4 py-3">Enterprises needing full security/compliance</td>
                    <td className="px-4 py-3">SAST/DAST/dependency, compliance, portfolio</td>
                    <td className="px-4 py-3">Custom (quote)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Consider CI minutes/runners, self-host vs SaaS, and the need for integrated security when choosing tiers. Ultimate is needed for the full security suite.
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
                  <li>Single app for repos, CI/CD, security, and planning.</li>
                  <li>Strong built-in security scanning (Ultimate).</li>
                  <li>Self-host or SaaS flexibility.</li>
                  <li>Integrated package and container registry.</li>
                  <li>Kubernetes deployment support and environments.</li>
                  <li>Reduces toolchain complexity for DevSecOps teams.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Ultimate tier can be costly for full security features.</li>
                  <li>UI and workflows can feel heavier than narrower tools.</li>
                  <li>Runner management and scaling require attention on self-hosted setups.</li>
                  <li>May overlap with existing tooling; migration needs planning.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with Git platforms and DevOps suites. Choose based on need for all-in-one vs. best-of-breed tools, hosting model, and security requirements.
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
            <p className="text-slate-700">Compare {toolName} to other DevOps platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items_center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs GitHub</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/gitlab-vs-github">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                GitHub is widely adopted with a huge ecosystem. {toolName} delivers an all-in-one DevOps experience with integrated security and planning.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for unified DevSecOps and self-host flexibility; choose GitHub for ecosystem and community strength.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items_center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Bitbucket</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/gitlab-vs-bitbucket">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Bitbucket integrates tightly with Atlassian. {toolName} offers broader built-in DevOps and security features out of the box.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for all-in-one DevOps; choose Bitbucket if Atlassian integration is paramount and you use separate CI/CD tools.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want a single DevOps platform with repos, CI/CD, security, and planning—plus self-host or SaaS options—{toolName} is worth it. It reduces toolchain complexity and improves visibility.
            </p>
            <p className="mt-3 text-slate-700">
              If you prefer best-of-breed tools or lighter workflows, compare GitHub + Actions, Bitbucket + Pipelines, or other CI/CD/security stacks.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a strong DevSecOps choice for teams that want integration and governance in one platform.</p>
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
              Choose {toolName} if you want an integrated DevOps platform with CI/CD, security, planning, and artifact registries in one app plus the option to self-host.
            </p>
            <p>
              Consider GitHub for ecosystem strength or Bitbucket for Atlassian alignment if you prefer a more modular stack.</p>
            <p>{toolName} helps DevSecOps teams deliver faster by reducing context switching and tool integration overhead.</p>
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

export default GitLabToolPage;
