import React, { useMemo, useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Circle,
  Lock,
  PlayCircle,
} from "lucide-react";
import { SUBSECTION_STATUS } from "../../utils/lmsProgress";

function StatusIcon({ status }) {
  if (status === SUBSECTION_STATUS.COMPLETED) {
    return <CheckCircle2 className="h-4 w-4 text-emerald-500" />;
  }
  if (status === SUBSECTION_STATUS.IN_PROGRESS) {
    return <PlayCircle className="h-4 w-4 text-amber-500" />;
  }
  return <Circle className="h-4 w-4 text-slate-300" />;
}

export default function CourseSidebar({
  course,
  progressMap,
  activeLessonId,
  activeSubSectionId,
  isLessonCompleted,
  onSelect,
}) {
  const [expandedModules, setExpandedModules] = useState(() =>
    new Set(course.modules.map((module) => module.id))
  );
  const [expandedLessons, setExpandedLessons] = useState(() =>
    new Set(course.modules.flatMap((module) => module.lessons.map((lesson) => lesson.id)))
  );

  const lessonOrder = useMemo(() => {
    const ordered = [];
    course.modules.forEach((module) => {
      module.lessons.forEach((lesson) => ordered.push(lesson.id));
    });
    return ordered;
  }, [course]);

  const toggleModule = (moduleId) => {
    setExpandedModules((prev) => {
      const next = new Set(prev);
      if (next.has(moduleId)) {
        next.delete(moduleId);
      } else {
        next.add(moduleId);
      }
      return next;
    });
  };

  const toggleLesson = (lessonId) => {
    setExpandedLessons((prev) => {
      const next = new Set(prev);
      if (next.has(lessonId)) {
        next.delete(lessonId);
      } else {
        next.add(lessonId);
      }
      return next;
    });
  };

  const isLessonLocked = (lessonId) => {
    if (!course.isSequential) return false;
    const index = lessonOrder.indexOf(lessonId);
    if (index <= 0) return false;
    const previousLessonId = lessonOrder[index - 1];
    const previousLesson = course.modules
      .flatMap((module) => module.lessons)
      .find((lesson) => lesson.id === previousLessonId);
    return previousLesson ? !isLessonCompleted(previousLesson) : false;
  };

  return (
    <aside className="h-full overflow-y-auto border-r border-slate-200 bg-white">
      <div className="p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Course outline
        </p>
        <h2 className="mt-2 text-base font-semibold text-slate-900">{course.title}</h2>
      </div>
      <div className="space-y-4 px-3 pb-6">
        {course.modules.map((module) => {
          const isModuleExpanded = expandedModules.has(module.id);
          return (
            <div key={module.id} className="rounded-xl border border-slate-200 bg-slate-50">
              <button
                type="button"
                onClick={() => toggleModule(module.id)}
                className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-semibold text-slate-900"
              >
                <span>{module.title}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isModuleExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isModuleExpanded && (
                <div className="space-y-2 px-2 pb-2">
                  {module.lessons.map((lesson) => {
                    const isLessonExpanded = expandedLessons.has(lesson.id);
                    const locked = isLessonLocked(lesson.id);
                    return (
                      <div
                        key={lesson.id}
                        className={`rounded-lg border ${
                          activeLessonId === lesson.id
                            ? "border-emerald-200 bg-white"
                            : "border-transparent"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleLesson(lesson.id)}
                          className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-medium text-slate-800"
                        >
                          <span className="flex items-center gap-2">
                            {locked ? (
                              <Lock className="h-4 w-4 text-slate-400" />
                            ) : (
                              <CheckCircle2
                                className={`h-4 w-4 ${
                                  isLessonCompleted(lesson)
                                    ? "text-emerald-500"
                                    : "text-slate-300"
                                }`}
                              />
                            )}
                            {lesson.title}
                          </span>
                          <ChevronDown
                            className={`h-3.5 w-3.5 transition-transform ${
                              isLessonExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isLessonExpanded && (
                          <div className="space-y-1 px-3 pb-2">
                            {lesson.subSections.map((subSection) => {
                              const status = progressMap[subSection.id]?.status;
                              const active = activeSubSectionId === subSection.id;
                              return (
                                <button
                                  key={subSection.id}
                                  type="button"
                                  onClick={() =>
                                    !locked &&
                                    onSelect({
                                      lessonId: lesson.id,
                                      subSectionId: subSection.id,
                                    })
                                  }
                                  className={`flex w-full items-center gap-2 rounded-md px-2 py-1 text-left text-xs ${
                                    active
                                      ? "bg-emerald-50 text-emerald-800"
                                      : "text-slate-700 hover:bg-slate-100"
                                  } ${locked ? "cursor-not-allowed opacity-60" : ""}`}
                                >
                                  <StatusIcon status={status} />
                                  <span>{subSection.title}</span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
