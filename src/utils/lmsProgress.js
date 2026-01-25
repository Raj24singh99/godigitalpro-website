export const SUBSECTION_STATUS = {
  NOT_STARTED: "not_started",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
};

export function buildCourseIndex(course) {
  const modules = [];
  const lessons = [];
  const subSections = [];
  const lessonById = {};
  const subSectionById = {};
  const lessonToModule = {};
  const subSectionToLesson = {};

  course.modules.forEach((module) => {
    modules.push(module);
    module.lessons.forEach((lesson) => {
      lessons.push(lesson);
      lessonById[lesson.id] = lesson;
      lessonToModule[lesson.id] = module.id;
      lesson.subSections.forEach((subSection) => {
        subSections.push(subSection);
        subSectionById[subSection.id] = subSection;
        subSectionToLesson[subSection.id] = lesson.id;
      });
    });
  });

  return {
    modules,
    lessons,
    subSections,
    lessonById,
    subSectionById,
    lessonToModule,
    subSectionToLesson,
  };
}

export function createDefaultProgressMap(course) {
  const defaultMap = {};
  course.modules.forEach((module) => {
    module.lessons.forEach((lesson) => {
      lesson.subSections.forEach((subSection) => {
        defaultMap[subSection.id] = {
          status: SUBSECTION_STATUS.NOT_STARTED,
          completedAt: null,
          updatedAt: null,
        };
      });
    });
  });
  return defaultMap;
}

export function mergeProgress(defaultMap, progressRows = []) {
  const merged = { ...defaultMap };
  progressRows.forEach((row) => {
    if (!merged[row.subsection_id]) return;
    merged[row.subsection_id] = {
      status: row.status || SUBSECTION_STATUS.NOT_STARTED,
      completedAt: row.completed_at || null,
      updatedAt: row.updated_at || null,
    };
  });
  return merged;
}

function statusWeight(status) {
  // In-progress sub-sections count as half to surface partial completion.
  if (status === SUBSECTION_STATUS.COMPLETED) return 1;
  if (status === SUBSECTION_STATUS.IN_PROGRESS) return 0.5;
  return 0;
}

export function getLessonProgress(lesson, progressMap) {
  const total = lesson.subSections.length;
  if (total === 0) return 0;
  const score = lesson.subSections.reduce(
    (sum, subSection) => sum + statusWeight(progressMap[subSection.id]?.status),
    0
  );
  return score / total;
}

export function getModuleProgress(module, progressMap) {
  const total = module.lessons.length;
  if (total === 0) return 0;
  const score = module.lessons.reduce(
    (sum, lesson) => sum + getLessonProgress(lesson, progressMap),
    0
  );
  return score / total;
}

export function getCourseProgress(course, progressMap) {
  const total = course.modules.length;
  if (total === 0) return 0;
  const score = course.modules.reduce(
    (sum, module) => sum + getModuleProgress(module, progressMap),
    0
  );
  return score / total;
}

export function isLessonComplete(lesson, progressMap) {
  return lesson.subSections.every(
    (subSection) => progressMap[subSection.id]?.status === SUBSECTION_STATUS.COMPLETED
  );
}

export function getFirstSubSection(course) {
  return course.modules[0]?.lessons[0]?.subSections[0] || null;
}

export function getNextSubSection(course, currentSubSectionId) {
  const ordered = [];
  course.modules.forEach((module) => {
    module.lessons.forEach((lesson) => {
      lesson.subSections.forEach((subSection) => {
        ordered.push(subSection.id);
      });
    });
  });

  const index = ordered.indexOf(currentSubSectionId);
  if (index < 0 || index === ordered.length - 1) return null;
  return ordered[index + 1];
}

export function getResumeSubSectionId(course, progressMap, lastSubSectionId) {
  if (lastSubSectionId && progressMap[lastSubSectionId]) {
    return lastSubSectionId;
  }
  const ordered = [];
  course.modules.forEach((module) => {
    module.lessons.forEach((lesson) => {
      lesson.subSections.forEach((subSection) => {
        ordered.push(subSection.id);
      });
    });
  });
  const nextIncomplete = ordered.find(
    (subSectionId) => progressMap[subSectionId]?.status !== SUBSECTION_STATUS.COMPLETED
  );
  return nextIncomplete || ordered[ordered.length - 1] || null;
}

export function getCompletionStats(course, progressMap) {
  let completed = 0;
  let total = 0;
  course.modules.forEach((module) => {
    module.lessons.forEach((lesson) => {
      lesson.subSections.forEach((subSection) => {
        total += 1;
        if (progressMap[subSection.id]?.status === SUBSECTION_STATUS.COMPLETED) {
          completed += 1;
        }
      });
    });
  });
  return { completed, total };
}
