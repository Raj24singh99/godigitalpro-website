import React, { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet";
import { buildCanonical } from "../../utils/seo";
import { getPostsByCategory, getCategoryDefinition } from "../../utils/blog";
import { getLucideIcon } from "../../utils/icons";
import { gradientByKey } from "../../utils/gradients";
import { getPostCover } from "../../utils/blogCovers";

const CATEGORY_POST_LIMIT = 12;

function fallbackTitle(slug = "") {
  return slug
    .split("-")
    .filter(Boolean)
    .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
    .join(" ");
}

export default function BlogCategory() {
  const { category: categoryParam } = useParams();
  const categoryDefinition = getCategoryDefinition(categoryParam);
  const canonicalSlug = categoryDefinition?.slug || categoryParam;
  const posts = getPostsByCategory(canonicalSlug);
  const related = RELATED_BY_CATEGORY[canonicalSlug] || RELATED_BY_CATEGORY.default;

  if (categoryDefinition && categoryParam !== canonicalSlug) {
    return <Navigate to={`/blog/category/${canonicalSlug}`} replace />;
  }

  const categoryTitle = categoryDefinition?.name || fallbackTitle(canonicalSlug);
  const canonical = buildCanonical(`/blog/category/${canonicalSlug}`);
  const description = categoryDefinition
    ? `${categoryDefinition.description} Explore ${categoryDefinition.subcategories.length} sub-categories plus the latest plays from GoDigitalPro.`
    : `Expert articles on ${categoryTitle} by GoDigitalPro: practical guides, checklists, and playbooks for growth.`;
  const CategoryIcon = getLucideIcon(categoryDefinition?.icon);
  const categoryGradient = gradientByKey(canonicalSlug);
  const postsToShow = posts.slice(0, CATEGORY_POST_LIMIT);

  const postsBySubCategory = useMemo(() => {
    const map = new Map();
    posts.forEach((post) => {
      const key = post.subCategory || "general";
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(post);
    });
    return map;
  }, [posts]);

  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`${categoryTitle} — Blog | GoDigitalPro`}
        description={description}
        canonical={canonical}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Blog", url: buildCanonical("/blog") },
          { name: categoryTitle, url: canonical },
        ]}
      />

      <header className="mx-auto max-w-6xl px-6 md:px-10 py-12">
        <div className="flex items-center gap-4">
          <span className={`inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${categoryGradient} text-white`}>
            <CategoryIcon className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Blog Category</p>
            <h1 className="mt-1 text-3xl font-black leading-tight">{categoryTitle}</h1>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-[15px] text-slate-700">{categoryDefinition?.description || description}</p>
        {categoryDefinition?.pillarIdea && (
          <p className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
            {categoryDefinition.pillarIdea}
          </p>
        )}
      </header>

      {/* Sub-category overview */}
      {categoryDefinition?.subcategories?.length ? (
        <section className="mx-auto max-w-6xl px-6 md:px-10 pb-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Sub-categories inside {categoryTitle}</h2>
              <p className="text-sm text-slate-600">
                Click through to view the sub-category hub, icon, short description, and recency-based posts.
              </p>
            </div>
            <Link
              to="/blog"
              className="hidden whitespace-nowrap text-sm font-semibold text-amber-600 hover:text-amber-700 md:inline-flex"
            >
              Back to all pillars →
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {categoryDefinition.subcategories.map((sub, idx) => {
              const relatedPosts = postsBySubCategory.get(sub.slug) || [];
              const Icon = getLucideIcon(sub.icon);
              const gradient = gradientByKey(sub.slug || `${idx}`);
              return (
                <Link
                  to={`/blog/category/${canonicalSlug}/sub/${sub.slug}`}
                  key={sub.slug}
                  className={`group block rounded-[26px] bg-gradient-to-br ${gradient} p-[1px] transition hover:-translate-y-0.5 hover:shadow-lg`}
                >
                  <div className="flex h-full flex-col rounded-[24px] bg-white p-5">
                    <div className="flex items-start gap-3">
                      <span className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white`}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">Sub-category</p>
                        <h3 className="mt-1 text-lg font-semibold text-slate-900">{sub.name}</h3>
                        <p className="mt-2 text-sm text-slate-600">{sub.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                      <span>
                        {relatedPosts.length
                          ? `${relatedPosts.length} post${relatedPosts.length > 1 ? "s" : ""} live`
                          : "Publishing soon"}
                      </span>
                      <span className="font-semibold text-amber-600">Open sub-category →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      ) : null}

      {/* Posts */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-8 md:py-12">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Latest plays in {categoryTitle}</h2>
            <p className="text-sm text-slate-600">
              Deep dives, checklists, and templates authored by GoDigitalPro strategists. Showing up to {CATEGORY_POST_LIMIT} recency-ranked posts.
            </p>
          </div>
          <Link
            to="/onboarding"
            className="hidden whitespace-nowrap rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black md:inline-flex"
          >
            Build a plan
          </Link>
        </div>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {postsToShow.map((post, idx) => {
            const cover = getPostCover(post, idx);
            return (
            <article
              key={post.slug}
              className="group flex h-full flex-col transition hover:-translate-y-0.5"
            >
              <Link to={`/blog/${post.slug}`} className="flex h-full flex-col">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-slate-100">
                  <img
                    src={cover.src}
                    alt={cover.alt}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                    onError={(event) => {
                      if (cover.fallbackSrc && event.currentTarget.src !== cover.fallbackSrc) {
                        event.currentTarget.src = cover.fallbackSrc;
                      }
                    }}
                  />
                </div>
                <div className="flex h-full flex-col pt-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
                    <span>{post.subCategoryLabel || post.categoryLabel || "Blog"}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500">{post.readingTime || "5 min read"}</span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-emerald-700">{post.title}</h3>
                  {(post.excerpt || post.metaDescription) && (
                    <p className="mt-2 line-clamp-3 text-sm text-slate-600">{post.excerpt || post.metaDescription}</p>
                  )}

                  <span className="mt-3 text-xs text-slate-500">
                    {new Date(post.updated || post.date).toLocaleDateString()}
                  </span>
                </div>
              </Link>
            </article>
          );
          })}
        </div>

        {!posts.length && (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-8 text-center text-sm text-slate-500">
            Posts for this pillar are being drafted. Join the waitlist to get notified when we publish.
          </div>
        )}
      </section>

      {related?.links?.length ? (
        <section className="mx-auto max-w-6xl px-6 md:px-10 pb-14">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Recommended tools & comparisons</h3>
            <p className="mt-1 text-sm text-slate-700">
              High-intent tool pages tied to this pillar—refreshed automatically from the Tools Hub.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {related.links.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <div>
                    <p className="font-semibold text-slate-900 group-hover:text-emerald-700">{item.title}</p>
                    {item.description && (
                      <p className="text-sm text-slate-700">{item.description}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}

const RELATED_BY_CATEGORY = {
  "email-marketing-automation": {
    links: [
      { title: "Brevo vs ActiveCampaign vs ConvertKit", href: "/tools/compare/brevo-vs-activecampaign-vs-convertkit", description: "Email/CRM options ranked by automation depth, SMS, and pricing." },
      { title: "Klaviyo vs Omnisend vs MailerLite", href: "/tools/compare/klaviyo-vs-omnisend-vs-mailerlite", description: "Lifecycle email/SMS choices scored for segmentation, SMS, and cost." },
      { title: "Automation platforms compared", href: "/tools/compare/zapier-vs-make-vs-pabbly", description: "See which automation stack fits your team and budget." },
      { title: "Browse email tools", href: "/tools/email", description: "All email tools in one place, auto-updated when we add more." },
    ],
  },
  "search-engine-optimisation": {
    links: [
      { title: "SEMrush vs Ahrefs", href: "/tools/compare/semrush-vs-ahrefs", description: "Backlinks versus PPC/PLA visibility—see which fits your SEO program." },
      { title: "Fathom vs Plausible vs GA4", href: "/tools/compare/fathom-vs-plausible-vs-ga4", description: "Privacy-first vs deep event analytics—ratings and picks." },
      { title: "Browse SEO tools", href: "/tools/seo", description: "Keyword, backlink, and audit tools curated by GoDigitalPro." },
    ],
  },
  "web-analytics-data-reporting": {
    links: [
      { title: "Fathom vs Plausible vs GA4", href: "/tools/compare/fathom-vs-plausible-vs-ga4", description: "Privacy-first vs deep event analytics—ratings and picks." },
      { title: "Attribution and tracking tools", href: "/tools/analytics", description: "Lightweight analytics, tracking, and privacy-friendly options." },
    ],
  },
  "social-media-marketing-content": {
    links: [
      { title: "Buffer vs Hootsuite vs Later", href: "/tools/compare/buffer-vs-hootsuite-vs-later", description: "Scheduling, monitoring, and IG/TikTok workflows compared." },
      { title: "Best design & video tools for social", href: "/tools/social", description: "Curated tools for social scheduling and asset creation." },
    ],
  },
  "ecommerce-marketplace-marketing": {
    links: [
      { title: "ThriveCart vs CartFlows vs Shopify Checkout", href: "/tools/compare/thrivecart-vs-cartflows-vs-shopify-checkout", description: "Checkout and funnel options ranked by speed, upsells, and payments." },
      { title: "Email/SMS for ecommerce", href: "/tools/compare/klaviyo-vs-omnisend-vs-mailerlite", description: "Pick the lifecycle platform that fits your store and budget." },
    ],
  },
  "website-development": {
    links: [
      { title: "Kinsta vs WP Engine vs Rocket.net", href: "/tools/compare/kinsta-vs-wp-engine-vs-rocket-net", description: "Managed WordPress hosting compared for speed, DX, and value." },
      { title: "Cloudways vs DigitalOcean vs Vultr", href: "/tools/compare/cloudways-vs-digitalocean-vs-vultr", description: "Managed vs DIY cloud hosting—speed-to-launch vs control." },
      { title: "Webflow vs Framer vs Wix", href: "/tools/compare/webflow-vs-framer-vs-wix", description: "Site builders compared for design fidelity, CMS, and speed-to-publish." },
    ],
  },
  default: {
    links: [
      { title: "Explore the Tools Hub", href: "/tools", description: "Filter by tags, see comparisons, and find playbooks." },
      { title: "Automation stacks compared", href: "/tools/compare/zapier-vs-make-vs-pabbly", description: "Pick the right automation platform for your team." },
      { title: "SEO tools and comparisons", href: "/tools/compare/semrush-vs-ahrefs", description: "See which SEO suite fits your goals and budget." },
    ],
  },
};
