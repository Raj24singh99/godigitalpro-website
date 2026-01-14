import React, { useEffect, useMemo, useState } from "react";

function useActiveSection(sections = []) {
  const ids = useMemo(() => sections.map((section) => section.id), [sections]);
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    if (!ids.length) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

function deriveTocTitle(title = "") {
  if (!title) return title;
  let cleaned = title.trim();

  cleaned = cleaned.replace(/^Why does (.+) matter\?$/i, "Why $1 matters");
  cleaned = cleaned.replace(/^How does (.+) work\?$/i, "How $1 works");
  cleaned = cleaned.replace(/^How do (.+) work\?$/i, "How $1 works");
  cleaned = cleaned.replace(/^Step-by-step:\s*(.+)$/i, "Step-by-step: $1");
  cleaned = cleaned.replace(/^Common failure points and how to prevent them$/i, "Common failure points and prevention");
  cleaned = cleaned.replace(/^When (.+) is not enough \(and what to do instead\)$/i, "When $1 is not enough");
  cleaned = cleaned.replace(/^Field mapping and data hygiene:.*$/i, "Field mapping and data hygiene");
  cleaned = cleaned.replace(/^Lead routing and speed-to-lead:.*$/i, "Lead routing and speed-to-lead");
  cleaned = cleaned.replace(/^About the team:.*$/i, "About the team");

  if (cleaned.includes(":")) {
    const [left, right] = cleaned.split(":").map((part) => part.trim());
    if (left.split(/\s+/).length >= 3 && right.length >= 6) {
      cleaned = left;
    }
  }

  return cleaned;
}

export default function OnPageNav({
  sections = [],
  showDesktop = true,
  showMobile = true,
}) {
  if (!sections.length) return null;
  const activeId = useActiveSection(sections);

  const list = (
    <ul className="space-y-2 p-0 text-sm text-slate-700" style={{ listStyle: "none" }}>
      {sections.map((section, index) => {
        const isActive = section.id === activeId;
        return (
          <li key={section.id || section.title}>
            <a
              href={`#${section.id}`}
              className={`inline-flex w-full items-center gap-2 rounded-md px-2 py-1 transition ${
                isActive ? "text-indigo-700" : "hover:text-slate-900"
              }`}
            >
              <span className={`text-xs font-semibold uppercase tracking-wide ${isActive ? "text-indigo-600" : "text-slate-400"}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 font-medium leading-tight">
                {section.tocTitle || deriveTocTitle(section.title)}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="space-y-4">
      {showDesktop && (
        <div className="hidden lg:block">
          <div className="sticky top-24 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Table of contents
            </p>
            {list}
          </div>
        </div>
      )}

      {showMobile && (
        <details className="rounded-2xl border border-slate-200 bg-white/90 p-5 text-sm text-slate-700 shadow-sm">
          <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
            Table of contents
            <span className="text-xs font-normal text-slate-500">
              {sections.length} sections
            </span>
          </summary>
          <div className="mt-4">{list}</div>
        </details>
      )}
    </div>
  );
}
