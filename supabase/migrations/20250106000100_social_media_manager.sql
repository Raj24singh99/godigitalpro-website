create extension if not exists "pgcrypto";

create type public.social_platform as enum ('instagram');
create type public.post_status as enum ('draft', 'scheduled', 'published', 'failed');
create type public.pipeline_status as enum ('running', 'succeeded', 'failed');

create table public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  role text not null default 'user',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.social_accounts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  platform public.social_platform not null,
  account_name text not null,
  instagram_business_id text not null,
  access_token text not null,
  token_expires_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.brands (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  brand_name text not null,
  description text,
  default_tone text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.content_buckets (
  id uuid primary key default gen_random_uuid(),
  brand_id uuid not null references public.brands(id) on delete cascade,
  name text not null,
  description text,
  posting_day smallint,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  constraint content_buckets_posting_day_check
    check (posting_day is null or (posting_day >= 0 and posting_day <= 6))
);

create table public.prompt_templates (
  id uuid primary key default gen_random_uuid(),
  brand_id uuid not null references public.brands(id) on delete cascade,
  system_prompt text not null,
  rules text,
  output_format text,
  version text not null default 'v1',
  created_at timestamptz not null default now()
);

create table public.posts (
  id uuid primary key default gen_random_uuid(),
  brand_id uuid not null references public.brands(id) on delete cascade,
  social_account_id uuid references public.social_accounts(id) on delete set null,
  bucket_id uuid references public.content_buckets(id) on delete set null,
  caption text,
  hashtags text[],
  image_url text,
  status public.post_status not null default 'draft',
  scheduled_for timestamptz,
  published_at timestamptz,
  instagram_post_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.post_metrics (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts(id) on delete cascade,
  likes integer not null default 0,
  comments integer not null default 0,
  saves integer not null default 0,
  reach integer not null default 0,
  last_fetched_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.automation_settings (
  id uuid primary key default gen_random_uuid(),
  brand_id uuid not null unique references public.brands(id) on delete cascade,
  is_enabled boolean not null default true,
  timezone text not null default 'UTC',
  run_time time not null default '09:00',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.pipeline_runs (
  id uuid primary key default gen_random_uuid(),
  brand_id uuid not null references public.brands(id) on delete cascade,
  post_id uuid references public.posts(id) on delete set null,
  status public.pipeline_status not null default 'running',
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  error_message text,
  error_stack text,
  metadata jsonb not null default '{}'::jsonb
);

create index social_accounts_user_id_idx on public.social_accounts(user_id);
create index brands_user_id_idx on public.brands(user_id);
create index content_buckets_brand_id_idx on public.content_buckets(brand_id);
create index prompt_templates_brand_id_idx on public.prompt_templates(brand_id);
create index posts_brand_id_idx on public.posts(brand_id);
create index posts_social_account_id_idx on public.posts(social_account_id);
create index post_metrics_post_id_idx on public.post_metrics(post_id);
create index pipeline_runs_brand_id_idx on public.pipeline_runs(brand_id);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger users_updated_at
before update on public.users
for each row execute function public.set_updated_at();

create trigger brands_updated_at
before update on public.brands
for each row execute function public.set_updated_at();

create trigger posts_updated_at
before update on public.posts
for each row execute function public.set_updated_at();

create trigger automation_settings_updated_at
before update on public.automation_settings
for each row execute function public.set_updated_at();

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer set search_path = public;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

alter table public.users enable row level security;
alter table public.social_accounts enable row level security;
alter table public.brands enable row level security;
alter table public.content_buckets enable row level security;
alter table public.prompt_templates enable row level security;
alter table public.posts enable row level security;
alter table public.post_metrics enable row level security;
alter table public.automation_settings enable row level security;
alter table public.pipeline_runs enable row level security;

create policy "Users can view own profile"
  on public.users for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.users for update
  using (auth.uid() = id);

create policy "Users can insert own brands"
  on public.brands for insert
  with check (auth.uid() = user_id);

create policy "Users can view own brands"
  on public.brands for select
  using (auth.uid() = user_id);

create policy "Users can update own brands"
  on public.brands for update
  using (auth.uid() = user_id);

create policy "Users can delete own brands"
  on public.brands for delete
  using (auth.uid() = user_id);

create policy "Users can manage content buckets"
  on public.content_buckets
  for all
  using (exists (
    select 1 from public.brands
    where public.brands.id = content_buckets.brand_id
      and public.brands.user_id = auth.uid()
  ))
  with check (exists (
    select 1 from public.brands
    where public.brands.id = content_buckets.brand_id
      and public.brands.user_id = auth.uid()
  ));

create policy "Users can manage prompt templates"
  on public.prompt_templates
  for all
  using (exists (
    select 1 from public.brands
    where public.brands.id = prompt_templates.brand_id
      and public.brands.user_id = auth.uid()
  ))
  with check (exists (
    select 1 from public.brands
    where public.brands.id = prompt_templates.brand_id
      and public.brands.user_id = auth.uid()
  ));

create policy "Users can manage posts"
  on public.posts
  for all
  using (exists (
    select 1 from public.brands
    where public.brands.id = posts.brand_id
      and public.brands.user_id = auth.uid()
  ))
  with check (exists (
    select 1 from public.brands
    where public.brands.id = posts.brand_id
      and public.brands.user_id = auth.uid()
  ));

create policy "Users can manage post metrics"
  on public.post_metrics
  for all
  using (exists (
    select 1 from public.posts
    join public.brands on public.brands.id = posts.brand_id
    where public.posts.id = post_metrics.post_id
      and public.brands.user_id = auth.uid()
  ))
  with check (exists (
    select 1 from public.posts
    join public.brands on public.brands.id = posts.brand_id
    where public.posts.id = post_metrics.post_id
      and public.brands.user_id = auth.uid()
  ));

create policy "Users can manage automation settings"
  on public.automation_settings
  for all
  using (exists (
    select 1 from public.brands
    where public.brands.id = automation_settings.brand_id
      and public.brands.user_id = auth.uid()
  ))
  with check (exists (
    select 1 from public.brands
    where public.brands.id = automation_settings.brand_id
      and public.brands.user_id = auth.uid()
  ));

create policy "Users can manage pipeline runs"
  on public.pipeline_runs
  for all
  using (exists (
    select 1 from public.brands
    where public.brands.id = pipeline_runs.brand_id
      and public.brands.user_id = auth.uid()
  ))
  with check (exists (
    select 1 from public.brands
    where public.brands.id = pipeline_runs.brand_id
      and public.brands.user_id = auth.uid()
  ));

create policy "Users can insert social accounts"
  on public.social_accounts for insert
  with check (auth.uid() = user_id);

create policy "Users can update social accounts"
  on public.social_accounts for update
  using (auth.uid() = user_id);

revoke all on table public.social_accounts from anon, authenticated;

create view public.social_accounts_public as
  select
    id,
    user_id,
    platform,
    account_name,
    instagram_business_id,
    token_expires_at,
    created_at
  from public.social_accounts;

grant select on public.social_accounts_public to authenticated;
