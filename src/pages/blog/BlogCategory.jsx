import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { getPostsByCategory } from "../../utils/blog";
import { breadcrumbsJsonLd } from "../../utils/seo";

export default function BlogCategory() {
  const { category } = useParams();
  const posts = getPostsByCategory(category);

  const title = `Blog — ${category.replace("-", " ")} | GoDigitalPro`;
  const desc = `Expert articles on ${category.replace("-", " ")} by GoDigitalPro: practical guides, checklists, and playbooks for growth.`;

  return (
    <main className="bg-white text-slate-900">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={`https://www.godigitalpro.in/blog/${category}`} />
        <meta name="robots" content="index,follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbsJsonLd([
          { name: "Home", url: "https://www.godigitalpro.in" },
          { name: "Blog", url: "https://www.godigitalpro.in/blog" },
          { name: category, url: `https://www.godigitalpro.in/blog/${category}` },
        ]))}</script>
      </Helmet>

      <section className="mx-auto max-w-6xl px-6 md:px-10 py-12">
        <h1 className="text-3xl font-extrabold capitalize">{category.replace("-", " ")}</h1>
        <p className="mt-2 max-w-prose text-[15px] text-slate-700">
          Curated posts in {category.replace("-", " ")} — updated as we publish new articles.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <Link to={`/blog/${p.category}/${p.slug}`} className="block">
                {p.cover && (
                  <img src={p.cover} alt={p.title} className="mb-3 h-40 w-full rounded-xl object-cover" loading="lazy" />
                )}
                <h2 className="text-lg font-semibold">{p.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
                <p className="mt-2 text-xs text-slate-400">
                  {new Date(p.updated || p.date).toLocaleDateString()} · {p.readingTime || "5 min read"}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
