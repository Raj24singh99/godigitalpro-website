import { SITE } from "../config/siteMeta";

export const DEFAULT_ROBOTS =
  "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1";

export function buildCanonical(path = "") {
  if (!path) return SITE.url;
  const formatted = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${formatted}`.replace(/([^:]\/)\/+/g, "$1");
}

export function buildOgImageFallback(title = "GoDigitalPro") {
  const base = SITE.defaultOgImage;
  return `${base}?title=${encodeURIComponent(title)}`;
}

export function organizationJsonLd(overrides = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: SITE.logo,
    email: SITE.contactEmail,
    telephone: SITE.contactPhone,
    sameAs: Object.values(SITE.socialProfiles),
    address: {
      "@type": "PostalAddress",
      ...SITE.address,
    },
    ...overrides,
  };
}

export function personJsonLd(person) {
  if (!person) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    url: person.url,
    sameAs: person.sameAs || [],
    worksFor: person.worksFor || {
      "@type": "Organization",
      name: SITE.name,
    },
    alumniOf: person.alumniOf,
  };
}

export function websiteJsonLd(overrides = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/search?q={query}`,
      "query-input": "required name=query",
    },
    ...overrides,
  };
}

export function siteNavigationJsonLd(items = []) {
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function serviceJsonLd({ name, description, url = SITE.url, areaServed = "IN" }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    url,
    description,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: SITE.logo,
    },
    areaServed,
    offers: {
      "@type": "Offer",
      category: "MarketingService",
      availability: "https://schema.org/InStock",
    },
  };
}

export function faqJsonLd(items = []) {
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function contactPageJsonLd({ url, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url,
    description,
    about: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function blogOrgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE.name} Blog`,
    url: `${SITE.url}/blog`,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: SITE.logo,
    },
  };
}

export function articleJsonLd(post) {
  const url = buildCanonical(`/blog/${post.category}/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || post.metaDescription,
    image: post.cover || buildOgImageFallback(post.title),
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: post.author?.name
      ? { "@type": "Person", name: post.author.name, url: post.author.url || "" }
      : { "@type": "Organization", name: SITE.name },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: SITE.logo },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

export function breadcrumbsJsonLd(items) {
  if (!items?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
