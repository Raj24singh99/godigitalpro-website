import React, { useEffect, useMemo } from "react";
import { Link, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Lock, PlayCircle } from "lucide-react";
import { lmsCourses } from "../../data/lmsCourses.js";
import CourseSidebar from "../../components/lms/CourseSidebar.jsx";
import CourseProgressBar from "../../components/lms/CourseProgressBar.jsx";
import { useAuth } from "../../context/AuthProvider.jsx";
import { useLmsProgress } from "../../hooks/useLmsProgress.js";
import { SUBSECTION_STATUS, getNextSubSection } from "../../utils/lmsProgress.js";

export default function CoursePlayer() {
  const { slug, lessonId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const course = lmsCourses.find((item) => item.slug === slug);
  const {
    loading,
    progressMap,
    completionStats,
    courseProgress,
    courseIndex,
    markInProgress,
    markComplete,
    isLessonCompleted,
  } = useLmsProgress(course, user);

  const activeLesson = useMemo(() => {
    if (!course) return null;
    return (
      course.modules
        .flatMap((module) => module.lessons)
        .find((lesson) => lesson.id === lessonId) ||
      course.modules[0]?.lessons[0] ||
      null
    );
  }, [course, lessonId]);

  const activeSubSectionId = useMemo(() => {
    if (!activeLesson) return null;
    return (
      searchParams.get("subsection") ||
      activeLesson.subSections[0]?.id ||
      null
    );
  }, [activeLesson, searchParams]);

  const activeSubSection = useMemo(() => {
    if (!courseIndex || !activeSubSectionId) return null;
    return courseIndex.subSectionById[activeSubSectionId] || null;
  }, [courseIndex, activeSubSectionId]);

  useEffect(() => {
    if (!user || !activeSubSectionId || !activeLesson) return;
    markInProgress(activeSubSectionId, activeLesson.id);
  }, [activeLesson, activeSubSectionId, markInProgress, user]);

  const handleSelect = ({ lessonId: nextLessonId, subSectionId }) => {
    navigate(
      `/learn/course/${slug}/lesson/${nextLessonId}?subsection=${subSectionId}`
    );
  };

  if (!course) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16 text-center text-slate-700">
        <h1 className="text-2xl font-semibold text-slate-900">Course not found</h1>
        <Link to="/learn" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
          Back to Learn
          <ArrowRight className="h-4 w-4" />
        </Link>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16 text-center text-slate-700">
        <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <Lock className="mx-auto h-8 w-8 text-slate-400" />
          <h1 className="mt-3 text-2xl font-semibold text-slate-900">
            Login required
          </h1>
          <p className="mt-2 text-sm">
            Sign in to access lessons, track progress, and resume anytime.
          </p>
          <Link
            to="/login"
            state={{ from: { pathname: location.pathname + location.search } }}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Login to continue
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    );
  }

  const status = activeSubSectionId
    ? progressMap[activeSubSectionId]?.status
    : SUBSECTION_STATUS.NOT_STARTED;
  const nextSubSectionId = activeSubSectionId
    ? getNextSubSection(course, activeSubSectionId)
    : null;
  const nextLessonId =
    nextSubSectionId && courseIndex
      ? courseIndex.subSectionToLesson[nextSubSectionId]
      : null;
  const isNextLessonLocked =
    course.isSequential &&
    nextLessonId &&
    nextLessonId !== activeLesson?.id &&
    activeLesson
      ? !isLessonCompleted(activeLesson)
      : false;

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 text-slate-900 lg:flex-row">
      <div className="hidden w-full max-w-sm lg:block">
        <CourseSidebar
          course={course}
          progressMap={progressMap}
          activeLessonId={activeLesson?.id}
          activeSubSectionId={activeSubSectionId}
          isLessonCompleted={isLessonCompleted}
          onSelect={handleSelect}
        />
      </div>
      <div className="flex-1">
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                <Link
                  to={`/learn/course/${course.slug}`}
                  className="inline-flex items-center gap-2 hover:text-slate-700"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Course overview
                </Link>
                <span className="text-slate-300">•</span>
                <Link
                  to="/learn/master-course"
                  className="inline-flex items-center gap-2 hover:text-slate-700"
                >
                  Master course
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <h1 className="mt-2 text-xl font-semibold text-slate-900">
                {activeLesson?.title || "Lesson"}
              </h1>
              <p className="text-sm text-slate-600">
                {activeSubSection?.title}
              </p>
            </div>
            <div className="min-w-[240px]">
              <CourseProgressBar
                progress={courseProgress}
                completed={completionStats.completed}
                total={completionStats.total}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="mb-6 block lg:hidden">
            <CourseSidebar
              course={course}
              progressMap={progressMap}
              activeLessonId={activeLesson?.id}
              activeSubSectionId={activeSubSectionId}
              isLessonCompleted={isLessonCompleted}
              onSelect={handleSelect}
            />
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Sub-section
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  {activeSubSection?.title}
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    activeSubSectionId && activeLesson?.id
                      ? markComplete(activeSubSectionId, activeLesson.id)
                      : null
                  }
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                    status === SUBSECTION_STATUS.COMPLETED
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                  disabled={status === SUBSECTION_STATUS.COMPLETED}
                >
                  <PlayCircle className="h-4 w-4" />
                  {status === SUBSECTION_STATUS.COMPLETED
                    ? "Completed"
                    : "Mark as complete"}
                </button>
                {nextSubSectionId && nextLessonId && (
                  <button
                    type="button"
                    onClick={() =>
                      !isNextLessonLocked &&
                      handleSelect({
                        lessonId: nextLessonId,
                        subSectionId: nextSubSectionId,
                      })
                    }
                    className={`inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold ${
                      isNextLessonLocked
                        ? "cursor-not-allowed bg-slate-100 text-slate-400"
                        : "bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                    disabled={isNextLessonLocked}
                  >
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-700">
              {activeSubSection?.videoEmbedHtml && (
                <div
                  className="aspect-video w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
                  // Graphy provides trusted embed code for course videos.
                  dangerouslySetInnerHTML={{
                    __html: activeSubSection.videoEmbedHtml,
                  }}
                />
              )}
              {activeSubSection?.content?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          {loading && (
            <div className="mt-4 text-xs text-slate-500">
              Syncing progress...
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
