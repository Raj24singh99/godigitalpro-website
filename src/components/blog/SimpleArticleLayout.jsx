import React from "react";
import OnPageNav from "./OnPageNav.jsx";

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function extractText(value) {
  if (value === null || value === undefined) return "";
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (Array.isArray(value)) return value.map(extractText).join(" ");
  if (React.isValidElement(value)) return extractText(value.props?.children);
  return "";
}

function normalizeParagraphs(paragraphs = []) {
  const normalized = [];
  let buffer = [];

  const flush = () => {
    if (!buffer.length) return;
    normalized.push(buffer.join(" "));
    buffer = [];
  };

  paragraphs.forEach((item) => {
    if (typeof item === "string" || typeof item === "number") {
      buffer.push(String(item));
      return;
    }
    if (React.isValidElement(item)) {
      flush();
      normalized.push(item);
      return;
    }
    flush();
  });

  flush();
  return normalized;
}

function SectionBlock({ section, index }) {
  return (
    <section id={section.id} className="scroll-mt-24">
      {section.link ? (
        <h2>
          <a
            href={section.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-slate-900 no-underline hover:text-slate-900"
          >
            {section.logo ? (
              <img
                src={section.logo}
                alt={section.logoAlt || section.title || "Tool logo"}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
                className="h-7 w-7 rounded-full bg-white ring-1 ring-slate-200"
              />
            ) : null}
            {section.title}
          </a>
        </h2>
      ) : (
        <h2>{section.title}</h2>
      )}

      {section.summary ? <p className="text-base text-slate-700">{section.summary}</p> : null}
      {section.lede ? <p className="text-base text-slate-700">{section.lede}</p> : null}

      {section.image ? (
        <figure className="my-6 overflow-hidden rounded-2xl">
          <img
            src={section.image.src}
            alt={section.image.alt}
            loading="lazy"
            decoding="async"
            fetchpriority="low"
            className="h-72 w-full object-cover sm:h-80"
          />
          {section.image.caption ? (
            <figcaption className="px-1 py-2 text-sm text-slate-600">{section.image.caption}</figcaption>
          ) : null}
        </figure>
      ) : null}

      {normalizeParagraphs(section.paragraphs).map((para, paraIndex) => (
        <p key={`${section.id}-paragraph-${paraIndex}`} className="text-base text-slate-700">
          {para}
        </p>
      ))}

      {section.perspectives?.length ? (
        <div className="mt-4 space-y-3">
          {section.perspectives.map((item) => (
            <div key={item.title}>
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-700">{item.body}</p>
            </div>
          ))}
        </div>
      ) : null}

      {section.plays?.length ? (
        <div className="mt-4 space-y-2">
          {section.plays.map((play) => (
            <div key={play.title}>
              <h4 className="text-sm font-semibold text-slate-900">{play.title}</h4>
              <p className="text-sm text-slate-700">{play.detail}</p>
            </div>
          ))}
        </div>
      ) : null}

      {section.checklist?.items?.length ? (
        <div className="mt-4">
          {section.checklist.title ? (
            <h3 className="text-base font-semibold text-slate-900">{section.checklist.title}</h3>
          ) : null}
          <ul
            className={`mt-2 list-disc pl-5 text-slate-700 ${
              section.checklist.className || "space-y-2 text-sm"
            }`}
          >
            {section.checklist.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {section.comparisonTable?.headers?.length && section.comparisonTable?.rows?.length ? (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                {section.comparisonTable.headers.map((header) => (
                  <th key={header} className="px-3 py-2 font-semibold text-slate-900">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.comparisonTable.rows.map((row, rowIndex) => (
                <tr key={`${row[0]}-${rowIndex}`} className="border-b border-slate-100">
                  {row.map((cell, cellIndex) => (
                    <td key={`${rowIndex}-${cellIndex}`} className="px-3 py-2 text-slate-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {section.references?.length ? (
        <div className="mt-4">
          {section.referencesTitle === null ? null : (
            <h3 className="text-base font-semibold text-slate-900">
              {section.referencesTitle || "References"}
            </h3>
          )}
          <ul className="mt-2 space-y-1 text-sm">
            {section.references.map((ref) => (
              <li key={ref.href || ref.label}>
                <a
                  className="inline-flex items-center gap-2 text-indigo-700 underline"
                  href={ref.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ref.image ? (
                    <img
                      src={ref.image}
                      alt={ref.imageAlt || ref.label || "Tool logo"}
                      loading="lazy"
                      decoding="async"
                      fetchpriority="low"
                      referrerPolicy="no-referrer"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                      className="h-6 w-6 rounded-full bg-white ring-1 ring-slate-200"
                    />
                  ) : null}
                  {ref.label || ref.href}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

export default function SimpleArticleLayout({ meta, sections }) {
  const published = formatDate(meta.date);
  const updated = formatDate(meta.updated || meta.date);
  const estimatedRead =
    meta.readingTime ||
    `${Math.max(
      8,
      Math.round(
        sections
          .flatMap((section) => [
            extractText(section.summary),
            extractText(section.lede),
            ...(section.paragraphs || []).map(extractText),
            ...(section.perspectives || []).map((p) => extractText(p.body)),
            ...(section.plays || []).map((p) => extractText(p.detail)),
            ...(section.checklist?.items || []).map(extractText),
            ...(section.references || []).map((r) => extractText(r.label))
          ])
          .filter(Boolean)
          .join(" ")
          .trim()
          .split(/\s+/).length / 210
      )
    )} min read`;

  return (
    <div className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:py-12 lg:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-600">
            GoDigitalPro Blog - {meta.categoryLabel || meta.category || "Blog"}
          </p>
          <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">{meta.title}</h1>
          <p className="max-w-3xl text-lg text-slate-700">{meta.metaDescription}</p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <span>Published {published}</span>
            <span className="hidden sm:inline">-</span>
            <span>Updated {updated}</span>
            <span className="hidden sm:inline">-</span>
            <span>{estimatedRead}</span>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="order-1 hidden lg:block lg:sticky lg:top-24 lg:self-start">
            <OnPageNav sections={sections} showMobile={false} />
          </aside>

          <article className="order-2 prose prose-slate max-w-none">
            <div className="mb-8 lg:hidden">
              <OnPageNav sections={sections} showDesktop={false} />
            </div>

            {sections.map((section, index) => (
              <SectionBlock key={section.id || section.title} section={section} index={index} />
            ))}
          </article>
        </div>
      </main>
    </div>
  );
}
