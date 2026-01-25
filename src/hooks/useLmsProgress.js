import { useCallback, useEffect, useMemo, useState } from "react";
import {
  SUBSECTION_STATUS,
  buildCourseIndex,
  createDefaultProgressMap,
  getCompletionStats,
  getCourseProgress,
  getModuleProgress,
  getLessonProgress,
  getResumeSubSectionId,
  isLessonComplete,
  mergeProgress,
} from "../utils/lmsProgress";
import {
  ensureEnrollment,
  fetchCourseProgress,
  fetchEnrollment,
  upsertSubSectionProgress,
} from "../utils/lmsApi";

export function useLmsProgress(course, user) {
  const [progressMap, setProgressMap] = useState(() =>
    course ? createDefaultProgressMap(course) : {}
  );
  const [enrollment, setEnrollment] = useState(null);
  const [loading, setLoading] = useState(true);

  const courseIndex = useMemo(
    () => (course ? buildCourseIndex(course) : null),
    [course]
  );

  useEffect(() => {
    let isMounted = true;
    async function loadProgress() {
      if (!course || !user) {
        if (isMounted) {
          setProgressMap(course ? createDefaultProgressMap(course) : {});
          setEnrollment(null);
          setLoading(false);
        }
        return;
      }
      setLoading(true);
      try {
        const [progressRows, enrollmentRow] = await Promise.all([
          fetchCourseProgress(course.id, user.uid),
          fetchEnrollment(course.id, user.uid),
        ]);
        if (!isMounted) return;
        const defaultMap = createDefaultProgressMap(course);
        setProgressMap(mergeProgress(defaultMap, progressRows));
        setEnrollment(enrollmentRow);
      } catch (error) {
        console.error("Failed to load LMS progress", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadProgress();
    return () => {
      isMounted = false;
    };
  }, [course, user]);

  const updateSubSection = useCallback(
    async ({ subsectionId, status }) => {
      if (!course || !user) return;
      // Optimistic update keeps the UI responsive while persisting progress.
      const next = {
        ...progressMap,
        [subsectionId]: {
          status,
          completedAt:
            status === SUBSECTION_STATUS.COMPLETED
              ? new Date().toISOString()
              : progressMap[subsectionId]?.completedAt || null,
          updatedAt: new Date().toISOString(),
        },
      };
      setProgressMap(next);

      try {
        await upsertSubSectionProgress({
          courseId: course.id,
          userId: user.uid,
          subsectionId,
          status,
          completedAt:
            status === SUBSECTION_STATUS.COMPLETED
              ? new Date().toISOString()
              : null,
        });
      } catch (error) {
        console.error("Failed to update sub-section progress", error);
      }
    },
    [course, progressMap, user]
  );

  const markInProgress = useCallback(
    async (subsectionId, lessonId) => {
      if (!course || !user) return;
      if (progressMap[subsectionId]?.status === SUBSECTION_STATUS.COMPLETED) {
        return;
      }
      if (progressMap[subsectionId]?.status === SUBSECTION_STATUS.NOT_STARTED) {
        await updateSubSection({
          subsectionId,
          status: SUBSECTION_STATUS.IN_PROGRESS,
        });
      }
      try {
        const enrollmentRow = await ensureEnrollment({
          courseId: course.id,
          userId: user.uid,
          lastLessonId: lessonId,
          lastSubSectionId: subsectionId,
        });
        setEnrollment(enrollmentRow);
      } catch (error) {
        console.error("Failed to update enrollment", error);
      }
    },
    [course, progressMap, updateSubSection, user]
  );

  const markComplete = useCallback(
    async (subsectionId, lessonId) => {
      if (!course || !user) return;
      await updateSubSection({
        subsectionId,
        status: SUBSECTION_STATUS.COMPLETED,
      });
      try {
        const enrollmentRow = await ensureEnrollment({
          courseId: course.id,
          userId: user.uid,
          lastLessonId: lessonId,
          lastSubSectionId: subsectionId,
        });
        setEnrollment(enrollmentRow);
      } catch (error) {
        console.error("Failed to update enrollment", error);
      }
    },
    [course, updateSubSection, user]
  );

  const resumeSubSectionId = useMemo(() => {
    if (!course) return null;
    return getResumeSubSectionId(
      course,
      progressMap,
      enrollment?.last_subsection_id || null
    );
  }, [course, progressMap, enrollment]);

  const courseProgress = useMemo(
    () => (course ? getCourseProgress(course, progressMap) : 0),
    [course, progressMap]
  );

  const completionStats = useMemo(
    () => (course ? getCompletionStats(course, progressMap) : { completed: 0, total: 0 }),
    [course, progressMap]
  );

  const getLessonProgressValue = useCallback(
    (lesson) => getLessonProgress(lesson, progressMap),
    [progressMap]
  );

  const getModuleProgressValue = useCallback(
    (module) => getModuleProgress(module, progressMap),
    [progressMap]
  );

  const isLessonCompleted = useCallback(
    (lesson) => isLessonComplete(lesson, progressMap),
    [progressMap]
  );

  return {
    loading,
    progressMap,
    enrollment,
    courseIndex,
    courseProgress,
    completionStats,
    resumeSubSectionId,
    markInProgress,
    markComplete,
    getLessonProgressValue,
    getModuleProgressValue,
    isLessonCompleted,
  };
}
