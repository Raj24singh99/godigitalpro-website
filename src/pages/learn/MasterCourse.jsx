import React, { useCallback, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Clock, GraduationCap, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet.jsx";
import CourseProgressBar from "../../components/lms/CourseProgressBar.jsx";
import { masterCourse } from "../../data/masterCourse.js";
import { useAuth } from "../../context/AuthProvider.jsx";
import { useLmsProgress } from "../../hooks/useLmsProgress.js";
import { buildCanonical } from "../../utils/seo.js";
import { SUBSECTION_STATUS } from "../../utils/lmsProgress.js";

function StatusIcon({ status }) {
  if (status === SUBSECTION_STATUS.COMPLETED) {
    return <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />;
  }
  if (status === SUBSECTION_STATUS.IN_PROGRESS) {
    return <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />;
  }
  return <CheckCircle2 className="h-3.5 w-3.5 text-slate-300" />;
}

function SubCourseSection({ course, user, onProgressUpdate }) {
  const {
    progressMap,
    completionStats,
    courseProgress,
    resumeSubSectionId,
    courseIndex,
    getLessonProgressValue,
    getModuleProgressValue,
  } = useLmsProgress(course, user);

  const resumeUrl = useMemo(() => {
    if (!courseIndex) return "/learn/master-course";
    const fallbackLesson = course.modules[0]?.lessons[0];
    const fallbackSubSection = fallbackLesson?.subSections[0];
    const targetSubSectionId = resumeSubSectionId || fallbackSubSection?.id;
    const targetLessonId =
      courseIndex.subSectionToLesson[targetSubSectionId] || fallbackLesson?.id;
    if (!targetLessonId || !targetSubSectionId) return "/learn/master-course";
    return `/learn/course/${course.slug}/lesson/${targetLessonId}?subsection=${targetSubSectionId}`;
  }, [course, courseIndex, resumeSubSectionId]);

  React.useEffect(() => {
    onProgressUpdate(course.id, {
      progress: courseProgress,
      completed: completionStats.completed,
      total: completionStats.total,
    });
  }, [completionStats.completed, completionStats.total, course.id, courseProgress, onProgressUpdate]);

  return (
    <section id={`subcourse-${course.slug}`} className="scroll-mt-24">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {course.category}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              {course.title}
            </h2>
            <p className="mt-3 text-sm text-slate-700">{course.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-700">
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
          </div>
          <div className="min-w-[260px] max-w-sm space-y-3">
            <CourseProgressBar
              label="Sub-course progress"
              progress={courseProgress}
              completed={completionStats.completed}
              total={completionStats.total}
            />
            <Link
              to={resumeUrl}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              {courseProgress > 0 ? "Continue" : "Start"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {course.modules.map((module) => (
            <details
              key={module.id}
              open
              className="rounded-2xl border border-slate-200 bg-slate-50"
            >
              <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-900">
                <span>
                  {module.title}
                  <span className="ml-2 text-xs font-medium text-slate-500">
                    {module.duration}
                  </span>
                </span>
                <span className="text-xs font-semibold text-slate-500">
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
                      {lesson.subSections.map((subSection) => {
                        const status = progressMap[subSection.id]?.status;
                        const subSectionUrl = `/learn/course/${course.slug}/lesson/${lesson.id}?subsection=${subSection.id}`;
                        return (
                          <li key={subSection.id}>
                            <Link
                              to={subSectionUrl}
                              className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-100"
                            >
                              <StatusIcon status={status} />
                              <span>{subSection.title}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MasterCourse() {
  const canonical = buildCanonical("/learn/master-course");
  const { user } = useAuth();
  const [subCourseStats, setSubCourseStats] = useState({});

  const handleProgressUpdate = useCallback((courseId, stats) => {
    setSubCourseStats((prev) => ({ ...prev, [courseId]: stats }));
  }, []);

  const overallStats = useMemo(() => {
    const values = Object.values(subCourseStats);
    if (!values.length) {
      return { progress: 0, completed: 0, total: 0 };
    }
    const completed = values.reduce((sum, value) => sum + value.completed, 0);
    const total = values.reduce((sum, value) => sum + value.total, 0);
    return {
      progress: total ? completed / total : 0,
      completed,
      total,
    };
  }, [subCourseStats]);

  return (
    <main className="bg-slate-50 text-slate-900">
      <SeoHelmet
        title={`${masterCourse.title} | GoDigitalPro Learn`}
        description={masterCourse.shortDescription}
        canonical={canonical}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Learn", url: buildCanonical("/learn") },
          { name: masterCourse.title, url: canonical },
        ]}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Master Course
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                {masterCourse.title}
              </h1>
              <p className="mt-3 text-lg text-slate-700">{masterCourse.description}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-700">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
                  <Layers className="h-4 w-4" />
                  {masterCourse.subCourses.length} sub-courses
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
                  <GraduationCap className="h-4 w-4" />
                  {masterCourse.level}
                </span>
              </div>
            </div>
            <div className="min-w-[260px] max-w-sm">
              <CourseProgressBar
                label="Master course progress"
                progress={overallStats.progress}
                completed={overallStats.completed}
                total={overallStats.total}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  A-Z Course Map
                </p>
                <h2 className="mt-2 text-base font-semibold text-slate-900">
                  All sub-courses
                </h2>
                <nav className="mt-3 space-y-2 text-sm text-slate-700">
                  {masterCourse.subCourses.map((course) => {
                    const stats = subCourseStats[course.id];
                    const percentage = stats ? Math.round(stats.progress * 100) : 0;
                    return (
                      <a
                        key={course.id}
                        href={`#subcourse-${course.slug}`}
                        className="flex items-center justify-between gap-3 rounded-lg px-2 py-2 text-left hover:bg-slate-50"
                      >
                        <span className="line-clamp-2">{course.title}</span>
                        <span className="text-xs font-semibold text-slate-500">
                          {percentage}%
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </aside>
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:hidden">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                A-Z Course Map
              </p>
              <h2 className="mt-2 text-base font-semibold text-slate-900">
                All sub-courses
              </h2>
              <nav className="mt-3 space-y-2 text-sm text-slate-700">
                {masterCourse.subCourses.map((course) => {
                  const stats = subCourseStats[course.id];
                  const percentage = stats ? Math.round(stats.progress * 100) : 0;
                  return (
                    <a
                      key={course.id}
                      href={`#subcourse-${course.slug}`}
                      className="flex items-center justify-between gap-3 rounded-lg px-2 py-2 text-left hover:bg-slate-50"
                    >
                      <span className="line-clamp-2">{course.title}</span>
                      <span className="text-xs font-semibold text-slate-500">
                        {percentage}%
                      </span>
                    </a>
                  );
                })}
              </nav>
            </div>
            {masterCourse.subCourses.map((course) => (
              <SubCourseSection
                key={course.id}
                course={course}
                user={user}
                onProgressUpdate={handleProgressUpdate}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
