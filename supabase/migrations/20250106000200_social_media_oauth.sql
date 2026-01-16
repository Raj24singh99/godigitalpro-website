alter table public.social_accounts
  add column if not exists brand_id uuid references public.brands(id) on delete set null,
  add column if not exists instagram_username text,
  add column if not exists facebook_page_id text,
  add column if not exists token_type text,
  add column if not exists scopes text[],
  add column if not exists user_access_token text,
  add column if not exists user_token_expires_at timestamptz,
  add column if not exists last_refreshed_at timestamptz;

create table if not exists public.oauth_states (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  brand_id uuid references public.brands(id) on delete set null,
  provider text not null,
  state text not null unique,
  expires_at timestamptz not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists oauth_states_user_id_idx on public.oauth_states(user_id);
create index if not exists oauth_states_state_idx on public.oauth_states(state);
create unique index if not exists social_accounts_user_page_unique
  on public.social_accounts(user_id, facebook_page_id, platform);

alter table public.oauth_states enable row level security;

create policy "Users can manage oauth states"
  on public.oauth_states
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop view if exists public.social_accounts_public;

create view public.social_accounts_public as
  select
    id,
    user_id,
    brand_id,
    platform,
    account_name,
    instagram_business_id,
    instagram_username,
    facebook_page_id,
    token_expires_at,
    created_at
  from public.social_accounts;

grant select on public.social_accounts_public to authenticated;
