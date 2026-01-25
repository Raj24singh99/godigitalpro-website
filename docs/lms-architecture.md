# Learn LMS Architecture (GoDigitalPro)

## System Architecture Overview
- Frontend (React + Tailwind) renders the Learn landing page, course detail page, and the split-screen course player.
- `src/data/lmsCourses.js` is the current content source-of-truth for the initial course, structured as Course > Module > Lesson > Sub-Section.
- Auth gates all course content and progress tracking via `AuthProvider` (Supabase auth). Non-logged users see course listing and locked previews.
- Progress is stored at the sub-section level in `lms_user_subsection_progress`. Lesson, module, and course progress are calculated on the fly.
- Enrollment data (start/resume) is stored in `lms_user_course_enrollments`, including last visited lesson/sub-section for resume.
- Supabase provides persistent storage; `src/utils/lmsApi.js` abstracts DB reads/writes and falls back to local storage if Supabase is not configured.
- `src/hooks/useLmsProgress.js` handles fetching, merging, and updating progress with optimistic UI updates.

## Database Schema (Tables + Relationships)
- `lms_courses`
  - `id` (text, PK)
  - `slug` (text, unique)
  - `title`, `short_description`, `description`
  - `category`, `level`
  - `total_duration_label`, `total_duration_minutes`
  - `completion_type`, `certificate_enabled`, `is_sequential`, `is_published`
  - `metadata` (jsonb), `created_at`, `updated_at`
  - Relationships: `lms_modules.course_id` -> `lms_courses.id`
- `lms_modules`
  - `id` (text, PK)
  - `course_id` (FK -> `lms_courses.id`)
  - `title`, `duration_label`, `duration_minutes`
  - `order_index`, `created_at`, `updated_at`
  - Relationships: `lms_lessons.module_id` -> `lms_modules.id`
- `lms_lessons`
  - `id` (text, PK)
  - `course_id` (FK -> `lms_courses.id`)
  - `module_id` (FK -> `lms_modules.id`)
  - `title`, `order_index`, `created_at`, `updated_at`
  - Relationships: `lms_subsections.lesson_id` -> `lms_lessons.id`
- `lms_subsections`
  - `id` (text, PK)
  - `course_id` (FK -> `lms_courses.id`)
  - `lesson_id` (FK -> `lms_lessons.id`)
  - `title`, `order_index`
  - `content` (jsonb array of strings)
  - `video_embed_html` (text, optional embed code)
  - `created_at`, `updated_at`
- `lms_user_course_enrollments`
  - `id` (uuid, PK)
  - `user_id` (FK -> `auth.users.id`)
  - `course_id` (FK -> `lms_courses.id`)
  - `status`, `enrolled_at`
  - `last_lesson_id` (FK -> `lms_lessons.id`)
  - `last_subsection_id` (FK -> `lms_subsections.id`)
  - `completed_at`, `updated_at`
  - Unique: (`user_id`, `course_id`)
- `lms_user_subsection_progress`
  - `id` (uuid, PK)
  - `user_id` (FK -> `auth.users.id`)
  - `course_id` (FK -> `lms_courses.id`)
  - `subsection_id` (FK -> `lms_subsections.id`)
  - `status` (not_started | in_progress | completed)
  - `completed_at`, `updated_at`
  - Unique: (`user_id`, `subsection_id`)
- `lms_quizzes` (future-ready)
  - `id` (uuid, PK)
  - `course_id` (FK -> `lms_courses.id`)
  - `lesson_id` (FK -> `lms_lessons.id`)
  - `title`, `passing_score`, `created_at`, `updated_at`
- `lms_quiz_questions` (future-ready)
  - `id` (uuid, PK)
  - `quiz_id` (FK -> `lms_quizzes.id`)
  - `question`, `options` (jsonb), `correct_option`
  - `created_at`, `updated_at`
- `lms_user_certificates` (future-ready)
  - `id` (uuid, PK)
  - `user_id` (FK -> `auth.users.id`)
  - `course_id` (FK -> `lms_courses.id`)
  - `issued_at`, `certificate_url`
  - Unique: (`user_id`, `course_id`)

## API Structure (Supabase-backed)
- `GET lms_courses` -> course listing for `/learn`
- `GET lms_courses?slug=eq.{slug}` -> course detail for `/learn/course/:slug`
- `GET lms_modules?course_id=eq.{courseId}` -> module list
- `GET lms_lessons?module_id=eq.{moduleId}` -> lesson list
- `GET lms_subsections?lesson_id=eq.{lessonId}` -> sub-section list
- `GET lms_user_course_enrollments?course_id=eq.{courseId}&user_id=eq.{userId}`
  - Used to resume last visited sub-section
- `UPSERT lms_user_course_enrollments` -> create or update enrollment
- `GET lms_user_subsection_progress?course_id=eq.{courseId}&user_id=eq.{userId}`
  - Used to compute progress for each sub-section
- `UPSERT lms_user_subsection_progress` -> mark sub-section in_progress or completed
- `GET lms_user_certificates?course_id=eq.{courseId}&user_id=eq.{userId}`
  - Used to check certificate eligibility

## Frontend Page Flow
- `/learn`
  - Public course listing with locked preview for anonymous users.
  - Course cards show title, short description, duration, module count, level.
  - Logged-in users see progress indicator and "Continue course" CTA.
- `/learn/course/:slug`
  - Course overview, outcomes, prerequisites, syllabus accordion.
  - Progress bar and "Start/Resume" CTA for logged-in users.
  - Locked CTA and certificate notice for anonymous users.
- `/learn/course/:slug/lesson/:lessonId`
  - Split-screen player with sidebar (modules > lessons > sub-sections).
  - Right content area for the active sub-section.
  - "Mark as complete" updates progress + timestamps.
  - Progress bar stays visible while learning.

## Component Hierarchy
- `LearnHub`
  - `CourseCardWithProgress`
    - `CourseCard`
- `CourseDetail`
  - `CourseProgressBar`
  - Syllabus accordion
- `CoursePlayer`
  - `CourseSidebar`
  - `CourseProgressBar`
  - Sub-section content + completion controls
- Shared
  - `useLmsProgress` hook
  - `lmsApi` and `lmsProgress` utilities

## Sample Seeded Data (Course, Modules, Lessons, Sub-Sections)
```json
{
  "id": "course-intro-website-creation",
  "slug": "introduction-to-website-creation",
  "title": "Introduction to Website Creation - Basics of Website Creation",
  "shortDescription": "Build digital marketing foundations and learn how to plan, design, and optimize a fast, conversion-ready website.",
  "description": "A beginner-friendly program that connects digital marketing fundamentals with practical website creation. You will move from core definitions and channels into hands-on website planning, UX decisions, and analytics-driven optimization.",
  "category": "Digital Marketing Foundations",
  "level": "Beginner",
  "totalDuration": "8+ Hours",
  "completionType": "mandatory_subsection_completion",
  "certificateEnabled": true,
  "isSequential": true,
  "prerequisites": [
    "Basic familiarity with websites and online browsing.",
    "A willingness to practice with WordPress or a no-code builder."
  ],
  "outcomes": [
    "Understand digital marketing foundations and key channels.",
    "Plan and publish a website using WordPress or no-code tools.",
    "Apply UX/UI principles to improve readability and conversions.",
    "Set up GA4 and event tracking for data-driven decisions.",
    "Optimize website performance, responsiveness, and speed."
  ],
  "modules": [
    {
      "id": "module-introduction-to-digital-marketing",
      "title": "Introduction to Digital Marketing",
      "duration": "2 Hours",
      "order": 1,
      "lessons": [
        {
          "id": "lesson-introduction",
          "title": "Introduction",
          "order": 1,
          "subSections": [
            { "id": "subsection-introduction", "title": "Introduction" },
            { "id": "subsection-definition", "title": "Definition" },
            { "id": "subsection-importance", "title": "Importance" },
            { "id": "subsection-digital-vs-traditional-marketing", "title": "Digital vs Traditional Marketing" },
            { "id": "subsection-overview-of-the-ecosystem", "title": "Overview of the ecosystem" },
            { "id": "subsection-what-will-be-covered-next", "title": "What will be covered next" }
          ]
        },
        {
          "id": "lesson-importance-of-digital-marketing",
          "title": "Importance of Digital Marketing",
          "order": 2,
          "subSections": [
            { "id": "subsection-importance-of-digital-marketing", "title": "Importance of Digital Marketing" },
            { "id": "subsection-why-digital-is-crucial-today", "title": "Why digital is crucial today" },
            { "id": "subsection-shift-from-traditional-to-digital", "title": "Shift from traditional to digital" },
            { "id": "subsection-reach-and-accessibility", "title": "Reach and accessibility" },
            { "id": "subsection-benefits-engagement-global-reach", "title": "Benefits: engagement & global reach" }
          ]
        },
        {
          "id": "lesson-career-scope",
          "title": "Career Scope",
          "order": 3,
          "subSections": [
            { "id": "subsection-career-scope", "title": "Career Scope" },
            { "id": "subsection-rising-demand", "title": "Rising demand" },
            { "id": "subsection-career-paths", "title": "Career paths" },
            { "id": "subsection-required-skills", "title": "Required skills" },
            { "id": "subsection-job-roles", "title": "Job roles (SEO, SMM, PPC, Content, Analyst)" }
          ]
        },
        {
          "id": "lesson-key-channels",
          "title": "Key Channels",
          "order": 4,
          "subSections": [
            { "id": "subsection-key-channels", "title": "Key Channels" },
            { "id": "subsection-seo-on-page-off-page-technical", "title": "SEO (On-page, Off-page, Technical)" },
            { "id": "subsection-social-media-marketing", "title": "Social Media Marketing" },
            { "id": "subsection-ppc-advertising", "title": "PPC Advertising" },
            { "id": "subsection-email-marketing", "title": "Email Marketing" }
          ]
        },
        {
          "id": "lesson-traditional-vs-digital-marketing",
          "title": "Traditional vs Digital Marketing",
          "order": 5,
          "subSections": [
            { "id": "subsection-traditional-vs-digital-marketing", "title": "Traditional vs Digital Marketing" }
          ]
        },
        {
          "id": "lesson-latest-trends",
          "title": "Latest Trends",
          "order": 6,
          "subSections": [
            { "id": "subsection-latest-trends", "title": "Latest Trends" }
          ]
        },
        {
          "id": "lesson-digital-marketing-tools",
          "title": "Digital Marketing Tools",
          "order": 7,
          "subSections": [
            { "id": "subsection-digital-marketing-tools", "title": "Digital Marketing Tools" }
          ]
        },
        {
          "id": "lesson-conclusion-recap",
          "title": "Conclusion & Recap",
          "order": 8,
          "subSections": [
            { "id": "subsection-conclusion-recap", "title": "Conclusion & Recap" }
          ]
        }
      ]
    },
    {
      "id": "module-website-design-optimization",
      "title": "Website Design and Optimization",
      "duration": "6 Hours",
      "order": 2,
      "lessons": [
        {
          "id": "lesson-wordpress-website-creation",
          "title": "Website creation using WordPress",
          "order": 1,
          "subSections": [
            { "id": "subsection-wordpress-planning-goals-sitemap", "title": "Planning the website goals and sitemap" },
            { "id": "subsection-wordpress-hosting-domain", "title": "Choosing hosting and domain" },
            { "id": "subsection-wordpress-installation", "title": "Installing WordPress" },
            { "id": "subsection-wordpress-theme-selection", "title": "Selecting and customizing a theme" },
            { "id": "subsection-wordpress-essential-plugins", "title": "Essential plugins and basic setup" },
            { "id": "subsection-wordpress-core-pages", "title": "Publishing core pages (Home, About, Services, Contact)" }
          ]
        },
        {
          "id": "lesson-no-code-website-creation",
          "title": "Website creation using No-Code tools",
          "order": 2,
          "subSections": [
            { "id": "subsection-no-code-platform-selection", "title": "Choosing the right no-code platform" },
            { "id": "subsection-no-code-template-customization", "title": "Template selection and customization" },
            { "id": "subsection-no-code-pages-navigation", "title": "Structuring pages and navigation" },
            { "id": "subsection-no-code-integrations", "title": "Integrations (forms, CRM, email)" },
            { "id": "subsection-no-code-publishing-domain", "title": "Publishing and domain setup" }
          ]
        },
        {
          "id": "lesson-ux-ui-principles",
          "title": "UX/UI principles",
          "order": 3,
          "subSections": [
            { "id": "subsection-ux-user-first-design", "title": "User-first design mindset" },
            { "id": "subsection-ux-visual-hierarchy", "title": "Visual hierarchy and readability" },
            { "id": "subsection-ux-consistency-layout-grids", "title": "Consistency, spacing, and layout grids" },
            { "id": "subsection-ux-cta-placement", "title": "CTA placement and clarity" },
            { "id": "subsection-ux-accessibility-basics", "title": "Accessibility basics" }
          ]
        },
        {
          "id": "lesson-conversion-optimization",
          "title": "Conversion optimization",
          "order": 4,
          "subSections": [
            { "id": "subsection-cro-define-conversion-goals", "title": "Define primary conversion goals" },
            { "id": "subsection-cro-trust-signals", "title": "Trust signals and social proof" },
            { "id": "subsection-cro-message-alignment", "title": "Landing page messaging alignment" },
            { "id": "subsection-cro-form-cta-optimization", "title": "Form and CTA optimization" },
            { "id": "subsection-cro-ab-testing", "title": "A/B testing fundamentals" }
          ]
        },
        {
          "id": "lesson-mobile-responsiveness",
          "title": "Mobile responsiveness",
          "order": 5,
          "subSections": [
            { "id": "subsection-mobile-first-checks", "title": "Mobile-first layout checks" },
            { "id": "subsection-responsive-typography", "title": "Responsive typography and spacing" },
            { "id": "subsection-touch-friendly-navigation", "title": "Touch-friendly navigation and CTAs" },
            { "id": "subsection-device-breakpoint-testing", "title": "Testing across devices and breakpoints" }
          ]
        },
        {
          "id": "lesson-website-speed-optimization",
          "title": "Website speed optimization",
          "order": 6,
          "subSections": [
            { "id": "subsection-core-web-vitals", "title": "Core Web Vitals overview" },
            { "id": "subsection-image-optimization", "title": "Image compression and lazy loading" },
            { "id": "subsection-caching-minification", "title": "Caching and minification" },
            { "id": "subsection-hosting-cdn", "title": "Hosting/CDN considerations" },
            { "id": "subsection-performance-testing-tools", "title": "Performance testing tools" }
          ]
        },
        {
          "id": "lesson-ga4-setup",
          "title": "Google Analytics (GA4) setup",
          "order": 7,
          "subSections": [
            { "id": "subsection-ga4-property-creation", "title": "GA4 property creation" },
            { "id": "subsection-ga4-tag-manager-install", "title": "Installing GA4 via tag manager" },
            { "id": "subsection-ga4-data-streams", "title": "Configuring data streams" },
            { "id": "subsection-ga4-basic-conversions", "title": "Basic conversions and events" },
            { "id": "subsection-ga4-search-console", "title": "Linking to Google Search Console" }
          ]
        },
        {
          "id": "lesson-event-tracking",
          "title": "Event tracking",
          "order": 8,
          "subSections": [
            { "id": "subsection-event-naming-strategy", "title": "Event naming strategy" },
            { "id": "subsection-event-key-actions", "title": "Key user actions to track" },
            { "id": "subsection-event-gtm-implementation", "title": "Implementing via GTM" },
            { "id": "subsection-event-debugging", "title": "Debugging and validation" },
            { "id": "subsection-event-tracking-plan", "title": "Documenting tracking plan" }
          ]
        },
        {
          "id": "lesson-data-driven-optimization",
          "title": "Data-driven optimization",
          "order": 9,
          "subSections": [
            { "id": "subsection-ga4-reporting-insights", "title": "Interpreting GA4 reports" },
            { "id": "subsection-drop-off-analysis", "title": "Identify drop-offs and friction" },
            { "id": "subsection-prioritize-experiments", "title": "Prioritize experiments" },
            { "id": "subsection-iterate-benchmarks", "title": "Iterate with insights and benchmarks" }
          ]
        },
        {
          "id": "lesson-final-qa-wrap-up",
          "title": "Final Q&A and wrap-up",
          "order": 10,
          "subSections": [
            { "id": "subsection-course-recap-next-steps", "title": "Course recap and next steps" },
            { "id": "subsection-common-pitfalls", "title": "Common pitfalls and fixes" },
            { "id": "subsection-resource-checklist", "title": "Resource checklist" },
            { "id": "subsection-certificate-readiness", "title": "Certificate readiness checklist" }
          ]
        }
      ]
    }
  ]
}
```

## Future Extension Notes
- Add a CMS or admin panel to manage courses, reorder modules, and edit content without code changes.
- Add paid/free flags on `lms_courses` and entitlement checks in the course player.
- Introduce quizzes and assignments using `lms_quizzes` and `lms_quiz_questions`.
- Generate certificates after `courseProgress` hits 100% and store in `lms_user_certificates`.
- Enable module drip schedules and prerequisites with additional fields (e.g., `unlock_after_module_id`).
- Store Graphy video embeds in `lms_subsections.video_embed_html` and render them in the course player.
- Add analytics dashboards that summarize progress across cohorts and completion rates.
