import performanceCover from "../assets/blogcovers/performance-80-20.svg";
import analyticsCover from "../assets/blogcovers/analytics-ga4-capi.svg";
import croCover from "../assets/blogcovers/cro-landing-page.svg";
import agencyCover from "../assets/blogcovers/agency-ops-sla.svg";
import caseStudyCover from "../assets/blogcovers/case-study-template.svg";
import socialCover from "../assets/blogcovers/social-reels-blueprint.svg";
import seoCover from "../assets/blogcovers/seo-technical-foundations.svg";
import webDevCover from "../assets/blogcovers/webdev-nextjs-cwv.svg";

const BLOG_COVER_MAP = {
  "performance-marketing-account-structure": {
    src: performanceCover,
    alt: "Magenta 80/20 performance marketing focus chart illustration",
  },
  "ga4-setup-sgtm-capi": {
    src: analyticsCover,
    alt: "Midnight telemetry board showing GA4, server GTM, and Conversions API flow",
  },
  "cro-for-d2c-conversion-rate-optimization": {
    src: croCover,
    alt: "Landing page mock with CTA buttons and CRO heatmap overlays",
  },
  "agency-operating-system-slas": {
    src: agencyCover,
    alt: "Agency SLA dashboard with pods, capacity gauges, and trends",
  },
  "marketing-case-study-template-brief-impact": {
    src: caseStudyCover,
    alt: "Case study storyboard with sticky notes for brief, barrier, and impact",
  },
  "social-media-blueprint-reels-strategy": {
    src: socialCover,
    alt: "Vertical reels storyboard with hook, story, CTA tiles",
  },
  "technical-seo-foundations": {
    src: seoCover,
    alt: "Green technical SEO rings labeled crawl, render, index, serve",
  },
  "nextjs-cwv-security-hardening": {
    src: webDevCover,
    alt: "Next.js Core Web Vitals dashboard with uptime gauges",
  },
};

const FALLBACK_COVERS = [
  {
    src: performanceCover,
    alt: "Gradient growth dashboard with stacked uplift bars",
  },
  {
    src: analyticsCover,
    alt: "Signal resilience diagram for analytics pipelines",
  },
  {
    src: seoCover,
    alt: "Technical SEO systems illustration with concentric rings",
  },
];

export function getPostCover(post, idx = 0) {
  const fallback = BLOG_COVER_MAP[post.slug] || FALLBACK_COVERS[idx % FALLBACK_COVERS.length];
  return {
    src: post.cover || fallback.src,
    alt: post.coverAlt || fallback.alt || post.title,
    fallbackSrc: fallback.src,
  };
}
