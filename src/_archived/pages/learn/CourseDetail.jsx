import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, GraduationCap, Layers, Lock } from "lucide-react";
import SeoHelmet from "../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../utils/seo.js";
import { lmsCourses } from "../../data/lmsCourses.js";
import CourseProgressBar from "../../components/lms/CourseProgressBar.jsx";
import { useAuth } from "../../context/AuthProvider.jsx";
import { useLmsProgress } from "../../hooks/useLmsProgress.js";

export default function CourseDetail() {
  const { slug } = useParams();
  const course = lmsCourses.find((item) => item.slug === slug);
  const { user } = useAuth();
  const {
    loading,
    completionStats,
    courseProgress,
    resumeSubSectionId,
    courseIndex,
    getLessonProgressValue,
    getModuleProgressValue,
  } = useLmsProgress(course, user);

  const canonical = buildCanonical(`/learn/course/${slug}`);

  const resumeUrl = useMemo(() => {
    if (!course || !courseIndex) return "/learn";
    const fallbackLesson = course.modules[0]?.lessons[0];
    const fallbackSubSection = fallbackLesson?.subSections[0];
    const targetSubSectionId = resumeSubSectionId || fallbackSubSection?.id;
    const targetLessonId =
      courseIndex.subSectionToLesson[targetSubSectionId] || fallbackLesson?.id;
    if (!targetLessonId || !targetSubSectionId) return "/learn";
    return `/learn/course/${course.slug}/lesson/${targetLessonId}?subsection=${targetSubSectionId}`;
  }, [course, courseIndex, resumeSubSectionId]);

  if (!course) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16 text-center text-slate-700">
        <h1 className="text-2xl font-semibold text-slate-900">Course not found</h1>
        <p className="mt-2">Please return to the Learn page.</p>
        <Link to="/learn" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
          Back to Learn
          <ArrowRight className="h-4 w-4" />
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-slate-50 text-slate-900">
      <SeoHelmet
        title={`${course.title} | GoDigitalPro Learn`}
        description={course.shortDescription}
        canonical={canonical}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Learn", url: buildCanonical("/learn") },
          { name: course.title, url: canonical },
        ]}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Digital Marketing Master Course
              </p>
              <Link
                to="/learn/master-course"
                className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 hover:text-slate-700"
              >
                Back to master course
                <ArrowRight className="h-3 w-3" />
              </Link>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {course.category}
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                {course.title}
              </h1>
              <p className="mt-3 text-lg text-slate-700">{course.description}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-700">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
                  <Clock className="h-4 w-4" />
                  {course.totalDuration}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
                  <Layers className="h-4 w-4" />
                  {course.modules.length} modules
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
                  <GraduationCap className="h-4 w-4" />
                  {course.level}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {user ? (
                  <Link
                    to={resumeUrl}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    {courseProgress > 0 ? "Resume Course" : "Start Course"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    state={{ from: { pathname: `/learn/course/${course.slug}` } }}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    Login to start
                    <Lock className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
            <div className="min-w-[260px] max-w-sm">
              {user ? (
                <CourseProgressBar
                  progress={courseProgress}
                  completed={completionStats.completed}
                  total={completionStats.total}
                />
              ) : (
                <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
                  <p className="font-semibold text-slate-900">Progress tracking</p>
                  <p className="mt-2">
                    Login to unlock completion tracking, certificates, and resume
                    anytime.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        {user ? (
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Syllabus</h2>
              <div className="mt-4 space-y-3">
                {course.modules.map((module) => (
                  <details
                    key={module.id}
                    className="group rounded-2xl border border-slate-200 bg-slate-50"
                  >
                    <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-900">
                      <span>
                        {module.title}
                        <span className="ml-2 text-xs font-medium text-slate-500">
                          {module.duration}
                        </span>
                      </span>
                      <span className="text-xs font-semibold text-slate-500 group-open:text-slate-700">
                        {`${Math.round(getModuleProgressValue(module) * 100)}%`}
                      </span>
                    </summary>
                    <div className="space-y-3 px-4 pb-4 text-sm text-slate-700">
                      {module.lessons.map((lesson) => (
                        <div key={lesson.id} className="rounded-xl border border-slate-200 bg-white p-3">
                          <div className="flex items-center justify-between">
                            <p className="font-semibold text-slate-900">{lesson.title}</p>
                            <span className="text-xs text-slate-500">
                              {`${Math.round(getLessonProgressValue(lesson) * 100)}%`}
                            </span>
                          </div>
                          <ul className="mt-2 space-y-1 text-xs text-slate-600">
                            {lesson.subSections.map((subSection) => (
                              <li key={subSection.id} className="flex items-center gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-slate-300" />
                                {subSection.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Learning outcomes</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {course.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Prerequisites</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {course.prerequisites.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-slate-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {course.resources?.length ? (
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">Resources</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {course.resources.map((resource) => (
                      <li key={resource.url} className="flex items-start gap-2">
                        <ArrowRight className="mt-0.5 h-4 w-4 text-slate-400" />
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-slate-900 hover:text-slate-700"
                        >
                          {resource.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Certificate</p>
                <p className="mt-2">
                  {course.certificateEnabled
                    ? "Certificate unlocks after all sub-sections are completed."
                    : "Certificate currently disabled for this course."}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm">
            <div className="flex items-center gap-2 text-slate-900">
              <Lock className="h-4 w-4 text-slate-500" />
              Login required to view the full syllabus.
            </div>
            <p className="mt-2">
              Create an account or sign in to access the course outline, track progress,
              and unlock certificates.
            </p>
            <Link
              to="/login"
              state={{ from: { pathname: `/learn/course/${course.slug}` } }}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Login to access
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </section>
      {loading && (
        <div className="mx-auto max-w-6xl px-6 pb-10 text-xs text-slate-500">
          Loading progress...
        </div>
      )}
    </main>
  );
}
