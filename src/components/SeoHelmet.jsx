// src/components/SeoHelmet.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

import { SITE } from "../config/siteMeta";
import { DEFAULT_ROBOTS, breadcrumbsJsonLd } from "../utils/seo";

function buildAlternates(canonical, hrefLangs = []) {
  if (hrefLangs.length) return hrefLangs;
  return [
    { lang: SITE.locale, href: canonical },
    { lang: "en", href: canonical },
    { lang: "x-default", href: canonical },
  ];
}

export default function SeoHelmet({
  title,
  description,
  canonical = SITE.url,
  image = SITE.defaultOgImage,
  imageAlt,
  keywords = "",
  robots = DEFAULT_ROBOTS,
  type = "website",
  locale = SITE.locale,
  publishedTime,
  modifiedTime,
  authorName = SITE.name,
  schema = [],
  breadcrumbs = [],
  hrefLangs,
  children,
}) {
  const alternates = buildAlternates(canonical, hrefLangs);
  const structuredData = [
    ...schema.filter(Boolean),
    breadcrumbsJsonLd(breadcrumbs),
  ].filter(Boolean);
  const isArticle = type === "article";
  const robotsDirective = robots || DEFAULT_ROBOTS;

  const resolvedImageAlt = imageAlt || title;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsDirective} />
      <meta name="googlebot" content={robotsDirective} />
      <meta name="bingbot" content={robotsDirective} />
      <meta name="application-name" content={SITE.name} />
      <meta name="theme-color" content="#0f172a" />
      <meta name="author" content={SITE.name} />
      <meta name="publisher" content={SITE.name} />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="format-detection" content="telephone=no" />

      <link rel="canonical" href={canonical} />
      {alternates.map(({ lang, href }) => (
        <link key={`${lang}-${href}`} rel="alternate" hrefLang={lang} href={href} />
      ))}

      <meta property="og:locale" content={locale} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={resolvedImageAlt} />
      <meta property="og:site_name" content={SITE.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={resolvedImageAlt} />

      {isArticle && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {isArticle && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {isArticle && authorName && (
        <meta property="article:author" content={authorName} />
      )}

      {structuredData.map((block, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}

      {children}
    </Helmet>
  );
}
