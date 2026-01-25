import { supabase } from "../config/supabase";

const isSupabaseReady =
  Boolean(import.meta.env.VITE_SUPABASE_URL) &&
  Boolean(import.meta.env.VITE_SUPABASE_ANON_KEY);

const localKey = (userId, courseId) => `lms-progress:${userId}:${courseId}`;
const localEnrollmentKey = (userId, courseId) => `lms-enrollment:${userId}:${courseId}`;

function getLocalProgress(userId, courseId) {
  const raw = window.localStorage.getItem(localKey(userId, courseId));
  return raw ? JSON.parse(raw) : [];
}

function setLocalProgress(userId, courseId, rows) {
  window.localStorage.setItem(localKey(userId, courseId), JSON.stringify(rows));
}

function getLocalEnrollment(userId, courseId) {
  const raw = window.localStorage.getItem(localEnrollmentKey(userId, courseId));
  return raw ? JSON.parse(raw) : null;
}

function setLocalEnrollment(userId, courseId, enrollment) {
  window.localStorage.setItem(
    localEnrollmentKey(userId, courseId),
    JSON.stringify(enrollment)
  );
}

export async function fetchCourseProgress(courseId, userId) {
  if (!isSupabaseReady) {
    return getLocalProgress(userId, courseId);
  }
  const { data, error } = await supabase
    .from("lms_user_subsection_progress")
    .select("subsection_id,status,completed_at,updated_at")
    .eq("user_id", userId)
    .eq("course_id", courseId);
  if (error) throw error;
  return data || [];
}

export async function upsertSubSectionProgress({
  courseId,
  userId,
  subsectionId,
  status,
  completedAt,
}) {
  const payload = {
    course_id: courseId,
    user_id: userId,
    subsection_id: subsectionId,
    status,
    completed_at: completedAt,
  };

  if (!isSupabaseReady) {
    const existing = getLocalProgress(userId, courseId);
    const next = [
      ...existing.filter((row) => row.subsection_id !== subsectionId),
      {
        ...payload,
        updated_at: new Date().toISOString(),
      },
    ];
    setLocalProgress(userId, courseId, next);
    return next;
  }

  const { data, error } = await supabase
    .from("lms_user_subsection_progress")
    .upsert(payload, {
      onConflict: "user_id,subsection_id",
    })
    .select();
  if (error) throw error;
  return data;
}

export async function fetchEnrollment(courseId, userId) {
  if (!isSupabaseReady) {
    return getLocalEnrollment(userId, courseId);
  }
  const { data, error } = await supabase
    .from("lms_user_course_enrollments")
    .select("*")
    .eq("course_id", courseId)
    .eq("user_id", userId)
    .maybeSingle();
  if (error) throw error;
  return data;
}

export async function ensureEnrollment({
  courseId,
  userId,
  lastLessonId = null,
  lastSubSectionId = null,
}) {
  if (!isSupabaseReady) {
    const existing = getLocalEnrollment(userId, courseId);
    const enrollment = existing || {
      course_id: courseId,
      user_id: userId,
      last_lesson_id: lastLessonId,
      last_subsection_id: lastSubSectionId,
      enrolled_at: new Date().toISOString(),
    };
    setLocalEnrollment(userId, courseId, {
      ...enrollment,
      last_lesson_id: lastLessonId || enrollment.last_lesson_id,
      last_subsection_id: lastSubSectionId || enrollment.last_subsection_id,
      updated_at: new Date().toISOString(),
    });
    return enrollment;
  }

  const { data, error } = await supabase
    .from("lms_user_course_enrollments")
    .upsert(
      {
        course_id: courseId,
        user_id: userId,
        last_lesson_id: lastLessonId,
        last_subsection_id: lastSubSectionId,
      },
      { onConflict: "user_id,course_id" }
    )
    .select()
    .single();
  if (error) throw error;
  return data;
}
