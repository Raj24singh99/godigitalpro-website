-- LMS schema: courses, modules, lessons, subsections, progress, enrollments, quizzes, certificates
create table if not exists lms_courses (
  id text primary key,
  slug text unique not null,
  title text not null,
  short_description text,
  description text,
  category text,
  level text,
  total_duration_label text,
  total_duration_minutes integer,
  completion_type text default 'mandatory_subsection_completion',
  certificate_enabled boolean default false,
  is_sequential boolean default true,
  is_published boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  metadata jsonb default '{}'::jsonb
);

create table if not exists lms_modules (
  id text primary key,
  course_id text not null references lms_courses(id) on delete cascade,
  title text not null,
  duration_label text,
  duration_minutes integer,
  order_index integer not null default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists lms_lessons (
  id text primary key,
  course_id text not null references lms_courses(id) on delete cascade,
  module_id text not null references lms_modules(id) on delete cascade,
  title text not null,
  order_index integer not null default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists lms_subsections (
  id text primary key,
  course_id text not null references lms_courses(id) on delete cascade,
  lesson_id text not null references lms_lessons(id) on delete cascade,
  title text not null,
  order_index integer not null default 0,
  content jsonb default '[]'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists lms_user_course_enrollments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id text not null references lms_courses(id) on delete cascade,
  status text default 'active',
  enrolled_at timestamptz default now(),
  last_lesson_id text references lms_lessons(id) on delete set null,
  last_subsection_id text references lms_subsections(id) on delete set null,
  completed_at timestamptz,
  updated_at timestamptz default now(),
  unique (user_id, course_id)
);

create table if not exists lms_user_subsection_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id text not null references lms_courses(id) on delete cascade,
  subsection_id text not null references lms_subsections(id) on delete cascade,
  status text default 'not_started',
  completed_at timestamptz,
  updated_at timestamptz default now(),
  unique (user_id, subsection_id)
);

create table if not exists lms_quizzes (
  id uuid primary key default gen_random_uuid(),
  course_id text not null references lms_courses(id) on delete cascade,
  lesson_id text references lms_lessons(id) on delete set null,
  title text not null,
  passing_score integer default 70,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists lms_quiz_questions (
  id uuid primary key default gen_random_uuid(),
  quiz_id uuid not null references lms_quizzes(id) on delete cascade,
  question text not null,
  options jsonb not null default '[]'::jsonb,
  correct_option text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists lms_user_certificates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id text not null references lms_courses(id) on delete cascade,
  issued_at timestamptz default now(),
  certificate_url text,
  unique (user_id, course_id)
);

create index if not exists lms_courses_slug_idx on lms_courses (slug);
create index if not exists lms_modules_course_idx on lms_modules (course_id);
create index if not exists lms_lessons_module_idx on lms_lessons (module_id);
create index if not exists lms_subsections_lesson_idx on lms_subsections (lesson_id);
create index if not exists lms_user_progress_course_idx on lms_user_subsection_progress (course_id);
create index if not exists lms_user_progress_user_idx on lms_user_subsection_progress (user_id);
create index if not exists lms_enrollments_user_idx on lms_user_course_enrollments (user_id);

alter table lms_courses enable row level security;
alter table lms_modules enable row level security;
alter table lms_lessons enable row level security;
alter table lms_subsections enable row level security;
alter table lms_user_course_enrollments enable row level security;
alter table lms_user_subsection_progress enable row level security;
alter table lms_user_certificates enable row level security;

create policy "Public can read course catalog"
  on lms_courses for select
  using (true);

create policy "Authenticated can read modules"
  on lms_modules for select
  using (auth.role() = 'authenticated');

create policy "Authenticated can read lessons"
  on lms_lessons for select
  using (auth.role() = 'authenticated');

create policy "Authenticated can read subsections"
  on lms_subsections for select
  using (auth.role() = 'authenticated');

create policy "Users manage own enrollments"
  on lms_user_course_enrollments for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users manage own subsection progress"
  on lms_user_subsection_progress for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users read own certificates"
  on lms_user_certificates for select
  using (auth.uid() = user_id);
