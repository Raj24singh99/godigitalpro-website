// src/pages/blog/BlogPost.jsx
import React, { useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet";
import { articleJsonLd, buildCanonical } from "../../utils/seo";
import { findPost } from "../../utils/blog";

export default function BlogPost() {
  const { category, slug } = useParams();

  const post = useMemo(() => findPost(category, slug), [category, slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  if (post.category && category !== post.category) {
    return <Navigate to={`/blog/${post.category}/${post.slug}`} replace />;
  }

  const canonical = buildCanonical(`/blog/${post.category}/${post.slug}`);
  const breadcrumbs = [
    { name: "Home", url: buildCanonical("/") },
    { name: "Blog", url: buildCanonical("/blog") },
    {
      name: post.categoryLabel || post.category,
      url: buildCanonical(`/blog/${post.category}`),
    },
  ];

  if (post.subCategory && post.subCategoryLabel) {
    breadcrumbs.push({
      name: post.subCategoryLabel,
      url: buildCanonical(`/blog/${post.category}/sub/${post.subCategory}`),
    });
  }

  breadcrumbs.push({ name: post.title, url: canonical });
  const PostComponent = post.Component;
  const related = RELATED_BY_CATEGORY[post.category] || RELATED_BY_CATEGORY.default;
  const inlineCtas = CTA_BY_CATEGORY[post.category] || CTA_BY_CATEGORY.default;
  const schemaBlocks = [articleJsonLd(post), ...(post.schema || [])].filter(Boolean);

  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`${post.title} | GoDigitalPro Blog`}
        description={post.excerpt || post.metaDescription}
        canonical={canonical}
        image={post.cover}
        imageAlt={post.coverAlt || post.title}
        type="article"
        publishedTime={post.date}
        modifiedTime={post.updated || post.date}
        authorName={post.author?.name || "GoDigitalPro"}
        schema={schemaBlocks}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
          <Link to="/blog" className="hover:text-slate-800">
            Blog
          </Link>
          <span>/</span>
          <Link to={`/blog/${post.category}`} className="hover:text-slate-800">
            {post.categoryLabel || post.category}
          </Link>
          {post.subCategory && post.subCategoryLabel && (
            <>
              <span>/</span>
              <Link
                to={`/blog/${post.category}/sub/${post.subCategory}`}
                className="rounded-full bg-slate-100 px-3 py-1 text-[11px] capitalize tracking-normal text-slate-700 hover:bg-slate-200"
              >
                {post.subCategoryLabel}
              </Link>
            </>
          )}
        </div>

        <article className="blog-article">
          <PostComponent />
        </article>

        {inlineCtas?.length ? (
          <section className="mt-10 grid gap-3 md:grid-cols-2">
            {inlineCtas.map((cta) => (
              <Link
                key={cta.href}
                to={cta.href}
                className="group flex flex-col gap-2 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
                  Compare
                </p>
                <p className="text-base font-semibold text-slate-900 group-hover:text-emerald-700">
                  {cta.title}
                </p>
                <p className="text-sm text-slate-700">{cta.description}</p>
                <span className="text-sm font-semibold text-emerald-700">Open comparison →</span>
              </Link>
            ))}
          </section>
        ) : null}

        {related?.links?.length ? (
          <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Related tools & comparisons</h2>
            <p className="mt-1 text-sm text-slate-700">
              Curated picks and comparisons to act on this topic faster.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {related.links.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition"
                >
                  <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <div>
                    <p className="font-semibold text-slate-900 group-hover:text-emerald-700">
                      {item.title}
                    </p>
                    {item.description && (
                      <p className="text-sm text-slate-700">{item.description}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}

const RELATED_BY_CATEGORY = {
  "email-marketing-automation": {
    links: [
      {
        title: "Compare Brevo vs ActiveCampaign vs ConvertKit",
        href: "/tools/compare/brevo-vs-activecampaign-vs-convertkit",
        description: "Email/CRM options ranked by automation depth, SMS, and pricing.",
      },
      {
        title: "Klaviyo vs Omnisend vs MailerLite for ecommerce email/SMS",
        href: "/tools/compare/klaviyo-vs-omnisend-vs-mailerlite",
        description: "Lifecycle email/SMS choices scored for segmentation, SMS, and cost.",
      },
      {
        title: "Browse email tools",
        href: "/tools/email",
        description: "All email tools in one place, auto-updated when we add more.",
      },
      {
        title: "Automation platforms compared",
        href: "/tools/compare/zapier-vs-make-vs-pabbly",
        description: "See which automation stack fits your team and budget.",
      },
    ],
  },
  "search-engine-optimisation": {
    links: [
      {
        title: "SEMrush vs Ahrefs",
        href: "/tools/compare/semrush-vs-ahrefs",
        description: "Backlinks versus PPC/PLA visibility—see which fits your SEO program.",
      },
      {
        title: "Browse SEO tools",
        href: "/tools/seo",
        description: "Keyword, backlink, and audit tools curated by GoDigitalPro.",
      },
      {
        title: "On-page content optimizers",
        href: "/tools/surfer-seo",
        description: "SERP-tuned briefs and scoring for faster content.",
      },
    ],
  },
  "web-analytics-data-reporting": {
    links: [
      {
        title: "Fathom vs Plausible vs GA4",
        href: "/tools/compare/fathom-vs-plausible-vs-ga4",
        description: "Privacy-first vs deep event analytics—ratings and picks.",
      },
      {
        title: "Attribution and tracking tools",
        href: "/tools/analytics",
        description: "Lightweight analytics, tracking, and privacy-friendly options.",
      },
    ],
  },
  "social-media-marketing-content": {
    links: [
      {
        title: "Buffer vs Hootsuite vs Later",
        href: "/tools/compare/buffer-vs-hootsuite-vs-later",
        description: "Scheduling, monitoring, and IG/TikTok workflows compared.",
      },
      {
        title: "Best design & video tools for social",
        href: "/tools/social",
        description: "Curated tools for social scheduling and asset creation.",
      },
    ],
  },
  "ecommerce-marketplace-marketing": {
    links: [
      {
        title: "ThriveCart vs CartFlows vs Shopify Checkout",
        href: "/tools/compare/thrivecart-vs-cartflows-vs-shopify-checkout",
        description: "Checkout and funnel options ranked by speed, upsells, and payments.",
      },
      {
        title: "Email/SMS for ecommerce",
        href: "/tools/compare/klaviyo-vs-omnisend-vs-mailerlite",
        description: "Pick the lifecycle platform that fits your store and budget.",
      },
    ],
  },
  "website-development": {
    links: [
      {
        title: "Kinsta vs WP Engine vs Rocket.net",
        href: "/tools/compare/kinsta-vs-wp-engine-vs-rocket-net",
        description: "Managed WordPress hosting compared for speed, DX, and value.",
      },
      {
        title: "Cloudways vs DigitalOcean vs Vultr",
        href: "/tools/compare/cloudways-vs-digitalocean-vs-vultr",
        description: "Managed vs DIY cloud hosting—speed-to-launch vs control.",
      },
    ],
  },
  default: {
    links: [
      {
        title: "Explore the Tools Hub",
        href: "/tools",
        description: "Filter by tags, see comparisons, and find playbooks.",
      },
      {
        title: "Automation stacks compared",
        href: "/tools/compare/zapier-vs-make-vs-pabbly",
        description: "Pick the right automation platform for your team.",
      },
      {
        title: "SEO tools and comparisons",
        href: "/tools/compare/semrush-vs-ahrefs",
        description: "See which SEO suite fits your goals and budget.",
      },
    ],
  },
};

const CTA_BY_CATEGORY = {
  "email-marketing-automation": [
    {
      title: "Email/CRM: Brevo vs ActiveCampaign vs ConvertKit",
      href: "/tools/compare/brevo-vs-activecampaign-vs-convertkit",
      description: "Ranked on automation depth, CRM, SMS, and pricing for marketers.",
    },
    {
      title: "Ecom email/SMS: Klaviyo vs Omnisend vs MailerLite",
      href: "/tools/compare/klaviyo-vs-omnisend-vs-mailerlite",
      description: "Lifecycle, segmentation, and value scored for DTC brands.",
    },
  ],
  "search-engine-optimisation": [
    {
      title: "SEO suites: SEMrush vs Ahrefs",
      href: "/tools/compare/semrush-vs-ahrefs",
      description: "Backlinks depth vs PPC/PLA intel—see which fits your SEO roadmap.",
    },
    {
      title: "Analytics: Fathom vs Plausible vs GA4",
      href: "/tools/compare/fathom-vs-plausible-vs-ga4",
      description: "Privacy-first vs deep event data; pick based on reporting needs.",
    },
  ],
  "web-analytics-data-reporting": [
    {
      title: "Analytics: Fathom vs Plausible vs GA4",
      href: "/tools/compare/fathom-vs-plausible-vs-ga4",
      description: "Privacy, speed, and attribution compared with ratings.",
    },
    {
      title: "Automation: Zapier vs Make vs Pabbly",
      href: "/tools/compare/zapier-vs-make-vs-pabbly",
      description: "Ease, complexity, and task costs compared for your data flows.",
    },
  ],
  "social-media-marketing-content": [
    {
      title: "Social scheduling: Buffer vs Hootsuite vs Later",
      href: "/tools/compare/buffer-vs-hootsuite-vs-later",
      description: "Scheduling, monitoring, IG/TikTok workflows compared.",
    },
    {
      title: "Video: Wistia vs Vimeo vs Loom",
      href: "/tools/compare/wistia-vs-vimeo-vs-loom",
      description: "Marketing video vs async vs general hosting; pick the right fit.",
    },
  ],
  "ecommerce-marketplace-marketing": [
    {
      title: "Checkout: ThriveCart vs CartFlows vs Shopify",
      href: "/tools/compare/thrivecart-vs-cartflows-vs-shopify-checkout",
      description: "Checkout speed, upsells, and global payments compared.",
    },
    {
      title: "Email/SMS: Klaviyo vs Omnisend vs MailerLite",
      href: "/tools/compare/klaviyo-vs-omnisend-vs-mailerlite",
      description: "Segmentation and value for ecommerce scoring.",
    },
  ],
  "website-development": [
    {
      title: "Builders: Webflow vs Framer vs Wix",
      href: "/tools/compare/webflow-vs-framer-vs-wix",
      description: "Design fidelity, CMS, and speed-to-publish compared.",
    },
    {
      title: "Managed WP hosting: Kinsta vs WP Engine vs Rocket.net",
      href: "/tools/compare/kinsta-vs-wp-engine-vs-rocket-net",
      description: "Speed, DX, and value side-by-side.",
    },
  ],
  default: [
    {
      title: "Automation: Zapier vs Make vs Pabbly",
      href: "/tools/compare/zapier-vs-make-vs-pabbly",
      description: "Choose the right automation platform for speed or complexity.",
    },
    {
      title: "SEO: SEMrush vs Ahrefs",
      href: "/tools/compare/semrush-vs-ahrefs",
      description: "Decide based on backlinks depth vs PPC/PLA intel.",
    },
  ],
};
