export function buildOgImageFallback(title = "GoDigitalPro Blog") {
  return `https://www.godigitalpro.in/public/og-default.jpg?title=${encodeURIComponent(title)}`;
}

export function blogOrgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "GoDigitalPro Blog",
    url: "https://www.godigitalpro.in/blog",
    publisher: {
      "@type": "Organization",
      name: "GoDigitalPro",
      url: "https://www.godigitalpro.in",
      logo: "https://www.godigitalpro.in/public/assets/logo.jpg"
    }
  };
}

export function articleJsonLd(post) {
  const url = `https://www.godigitalpro.in/blog/${post.category}/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.cover || buildOgImageFallback(post.title),
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: post.author?.name
      ? { "@type": "Person", name: post.author.name, url: post.author.url || "" }
      : { "@type": "Organization", name: "GoDigitalPro" },
    publisher: {
      "@type": "Organization",
      name: "GoDigitalPro",
      logo: { "@type": "ImageObject", url: "https://www.godigitalpro.in/public/assets/logo.jpg" }
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url }
  };
}

export function breadcrumbsJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.url
    }))
  };
}
