import React from "react";
import { ArrowRight, Clock, GraduationCap, Layers, Lock, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function CourseCard({
  course,
  progressPercentage = 0,
  isLoggedIn,
  resumeUrl,
  loginRedirectPath,
}) {
  const coursePath = `/learn/course/${course.slug}`;
  const courseUrl = isLoggedIn ? coursePath : "/login";
  const loginTarget = loginRedirectPath || coursePath;
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Digital Marketing Master Course
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {course.category}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              {course.title}
            </h3>
          </div>
          {isLoggedIn ? (
            <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
              {Math.round(progressPercentage * 100)}%
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
              <Lock className="h-3 w-3" />
              Login required
            </span>
          )}
        </div>
        <p className="mt-3 text-sm text-slate-700">{course.shortDescription}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-700">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-1">
            <Clock className="h-3.5 w-3.5" />
            {course.totalDuration}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-1">
            <Layers className="h-3.5 w-3.5" />
            {course.modules.length} modules
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-1">
            <GraduationCap className="h-3.5 w-3.5" />
            {course.level}
          </span>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between">
        {isLoggedIn ? (
          <Link
            to={courseUrl}
            className="text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            View syllabus
          </Link>
        ) : (
          <Link
            to="/login"
            state={{ from: { pathname: loginTarget } }}
            className="text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            Login to view details
          </Link>
        )}
        {isLoggedIn ? (
          <Link
            to={resumeUrl}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            <PlayCircle className="h-4 w-4" />
            {progressPercentage > 0 ? "Continue course" : "Start course"}
          </Link>
        ) : (
          <Link
            to="/login"
            state={{ from: { pathname: loginTarget } }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Login to start
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
