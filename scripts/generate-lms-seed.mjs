import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { lmsCourses } from "../src/data/lmsCourses.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sqlLines = [];

const sqlString = (value) => {
  if (value === null || value === undefined) return "null";
  return `'${String(value).replace(/'/g, "''")}'`;
};

const sqlJson = (value) => {
  const payload = JSON.stringify(value ?? []);
  return `'${payload.replace(/'/g, "''")}'::jsonb`;
};

sqlLines.push("begin;");
sqlLines.push(
  "truncate lms_user_subsection_progress, lms_user_course_enrollments, lms_subsections, lms_lessons, lms_modules, lms_courses, lms_quizzes, lms_quiz_questions, lms_user_certificates restart identity cascade;"
);

lmsCourses.forEach((course) => {
  const metadata = {
    outcomes: course.outcomes,
    prerequisites: course.prerequisites,
    resources: course.resources || [],
  };
  sqlLines.push(
    [
      "insert into lms_courses (id, slug, title, short_description, description, category, level, total_duration_label, completion_type, certificate_enabled, is_sequential, is_published, metadata)",
      "values",
      `(${sqlString(course.id)}, ${sqlString(course.slug)}, ${sqlString(course.title)}, ${sqlString(course.shortDescription)}, ${sqlString(course.description)}, ${sqlString(course.category)}, ${sqlString(course.level)}, ${sqlString(course.totalDuration)}, ${sqlString(course.completionType)}, ${course.certificateEnabled ? "true" : "false"}, ${course.isSequential ? "true" : "false"}, true, ${sqlJson(metadata)});`,
    ].join(" ")
  );

  course.modules.forEach((module, moduleIndex) => {
    sqlLines.push(
      [
        "insert into lms_modules (id, course_id, title, duration_label, order_index)",
        "values",
        `(${sqlString(module.id)}, ${sqlString(course.id)}, ${sqlString(module.title)}, ${sqlString(module.duration)}, ${module.order ?? moduleIndex + 1});`,
      ].join(" ")
    );

    module.lessons.forEach((lesson, lessonIndex) => {
      sqlLines.push(
        [
          "insert into lms_lessons (id, course_id, module_id, title, order_index)",
          "values",
          `(${sqlString(lesson.id)}, ${sqlString(course.id)}, ${sqlString(module.id)}, ${sqlString(lesson.title)}, ${lesson.order ?? lessonIndex + 1});`,
        ].join(" ")
      );

      lesson.subSections.forEach((subSection, subSectionIndex) => {
        sqlLines.push(
          [
            "insert into lms_subsections (id, course_id, lesson_id, title, order_index, content, video_embed_html)",
            "values",
            `(${sqlString(subSection.id)}, ${sqlString(course.id)}, ${sqlString(lesson.id)}, ${sqlString(subSection.title)}, ${subSectionIndex + 1}, ${sqlJson(subSection.content)}, ${sqlString(subSection.videoEmbedHtml || null)});`,
          ].join(" ")
        );
      });
    });
  });
});

sqlLines.push("commit;");

const seedPath = path.resolve(__dirname, "../supabase/seed.sql");
fs.writeFileSync(seedPath, sqlLines.join("\n") + "\n", "utf8");
console.log(`Seed file written to ${seedPath}`);
