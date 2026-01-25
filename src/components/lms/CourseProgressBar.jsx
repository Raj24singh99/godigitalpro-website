import React from "react";

export default function CourseProgressBar({
  progress = 0,
  completed = 0,
  total = 0,
  label = "Course progress",
}) {
  const percentage = Math.round(progress * 100);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between text-sm text-slate-700">
        <span className="font-semibold text-slate-900">{label}</span>
        <span>
          {completed}/{total} sub-sections
        </span>
      </div>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-emerald-500 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-slate-600">{percentage}% completed</p>
    </div>
  );
}
