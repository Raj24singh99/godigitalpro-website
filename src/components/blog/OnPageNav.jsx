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

export default function OnPageNav({
  sections = [],
  showDesktop = true,
  showMobile = true,
}) {
  if (!sections.length) return null;
  const activeId = useActiveSection(sections);

  const list = (
    <ol className="list-none space-y-2 p-0 text-sm text-slate-600">
      {sections.map((section, index) => {
        const isActive = section.id === activeId;
        return (
          <li key={section.id || section.title}>
            <a
              href={`#${section.id}`}
              className={`flex items-center gap-3 rounded-lg px-2 py-1 transition ${
                isActive ? "bg-indigo-50 text-indigo-700" : "hover:bg-slate-100"
              }`}
            >
              <span
                className={`text-xs font-semibold uppercase tracking-wide ${
                  isActive ? "text-indigo-600" : "text-slate-400"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 leading-tight">{section.title}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <div className="space-y-4">
      {showDesktop && (
        <nav className="sticky top-24 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
            On this page
          </p>
          <div className="mt-4">{list}</div>
        </nav>
      )}

      {showMobile && (
        <details className="rounded-2xl border border-slate-200 bg-white/90 p-5 text-sm text-slate-700 shadow-sm">
          <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
            On this page
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
