# Automated Social Media Manager Backend (Supabase)

## Recommended Folder Structure
```
supabase/
  migrations/
    20250106000100_social_media_manager.sql
    20250106000200_social_media_oauth.sql
  functions/
    _shared/
      caption.ts
      env.ts
      image.ts
      instagram.ts
      openai.ts
      publish.ts
      quality.ts
      quality_gate.ts
      responses.ts
      storage.ts
      supabase.ts
    generate-caption/
      index.ts
    generate-image/
      index.ts
    instagram-auth-start/
      index.ts
    instagram-auth-callback/
      index.ts
    instagram-auth-complete/
      index.ts
    instagram-token-refresh/
      index.ts
    publish-instagram/
      index.ts
    quality-gate/
      index.ts
    run-daily-pipeline/
      index.ts
supabase/.env.example
```

## Architecture Overview
- Data layer runs entirely in Supabase Postgres with RLS for multi-user ownership.
- Edge Functions handle content generation, quality checks, image creation, and publishing.
- Supabase Storage stores template-based images for Phase 1.
- Cron calls `run-daily-pipeline` to post at a per-brand time.
- Frontend uses Supabase Auth + PostgREST to show accounts, recent posts, and automation status.

## Data Layer (SQL)
Full SQL for all tables, enums, views, RLS policies, and indexes is in:
- `supabase/migrations/20250106000100_social_media_manager.sql`

Tables created:
- `public.users`
- `public.social_accounts`
- `public.brands`
- `public.content_buckets`
- `public.prompt_templates`
- `public.posts`
- `public.post_metrics`
- `public.automation_settings`
- `public.pipeline_runs`

Security and access:
- RLS policies enforce user ownership on all user data.
- `social_accounts` is locked down; use view `social_accounts_public` for safe reads.

## Edge Functions (Supabase)
Location: `supabase/functions`

- `generate-caption`:
  - Input: `brand_id`, `bucket_id`, optional `force_rules`
  - Output: `{ caption, hashtags, pinned_comment }`
  - Uses OpenAI via `_shared/caption.ts`

- `generate-image`:
  - Input: `caption` or `key_quote`, optional `filename_prefix`
  - Output: `{ image_url, template }`
  - Uses SVG template via `_shared/image.ts`, uploads to Storage

- `quality-gate`:
  - Input: `caption`, optional `required_vocab`, optional `allow_regen`
  - Output: `{ passed, caption, violations?, regenerated? }`
  - Uses `_shared/quality_gate.ts`

- `publish-instagram`:
  - Input: `post_id`
  - Output: `{ success, instagram_post_id, post_id }`
  - Uses `_shared/publish.ts`

- `instagram-auth-start`:
  - Input: optional `brand_id`, optional `redirect_uri`, optional `scopes`
  - Output: `{ auth_url, state }`
  - Starts Meta OAuth flow

- `instagram-auth-callback`:
  - Input: Meta redirect with `code` + `state`
  - Output: either `{ success, social_account_id }` or `{ requires_selection, pages }`
  - Exchanges tokens and discovers pages

- `instagram-auth-complete`:
  - Input: `state`, `page_id`
  - Output: `{ success, social_account_id }`
  - Finalizes account link for multi-page users

- `instagram-token-refresh`:
  - Input: optional `social_account_id`
  - Output: `{ success, results: [...] }`
  - Refreshes long-lived tokens and page access tokens

- `run-daily-pipeline`:
  - Input: optional `brand_id`, optional `dry_run`, optional `enforce_schedule`
  - Output: `{ success, results: [...] }`
  - Orchestrates caption, quality, image, publish, and logs to `pipeline_runs`

## Scheduling
- Create a daily cron in Supabase to POST `run-daily-pipeline`.
- Use `automation_settings.run_time` + `automation_settings.timezone` per brand.
- For external cron, hit the function URL with a service role auth header.

## Environment Variables (Edge Functions)
Use `supabase/.env.example` as the schema.

Required:
- `PROJECT_URL`
- `PROJECT_ANON_KEY`
- `SERVICE_ROLE_KEY`
- `OPENAI_API_KEY`

Optional:
- `OPENAI_MODEL` (default: `gpt-4o-mini`)
- `INSTAGRAM_GRAPH_BASE_URL` (default: `https://graph.facebook.com/v19.0`)
- `INSTAGRAM_REDIRECT_URI` (OAuth callback URL)
- `INSTAGRAM_APP_ID`
- `INSTAGRAM_APP_SECRET`
- `SOCIAL_IMAGE_BUCKET` (default: `social-images`)

## Example Run (Manual Trigger)
```
curl -X POST \
  https://<project-ref>.supabase.co/functions/v1/run-daily-pipeline \
  -H "Authorization: Bearer <SERVICE_ROLE_KEY>" \
  -H "Content-Type: application/json" \
  -d '{"brand_id":"<brand-uuid>","dry_run":true}'
```

## Instagram OAuth Flow (Connect Account)
1) Start OAuth
```
curl -X POST \
  https://<project-ref>.supabase.co/functions/v1/instagram-auth-start \
  -H "Authorization: Bearer <USER_JWT>" \
  -H "Content-Type: application/json" \
  -d '{"brand_id":"<brand-uuid>"}'
```

2) Redirect the user to `auth_url`

3) Meta redirects to `INSTAGRAM_REDIRECT_URI`, recommended:
```
https://godigitalpro.in/app/instagram/callback
```

If you prefer direct Edge Function callbacks, point to:
```
https://<project-ref>.supabase.co/functions/v1/instagram-auth-callback
```

If multiple pages are found, the callback returns `requires_selection: true`:
```
curl -X POST \
  https://<project-ref>.supabase.co/functions/v1/instagram-auth-complete \
  -H "Content-Type: application/json" \
  -d '{"state":"<state>","page_id":"<facebook-page-id>"}'
```

## Testing & Debugging Notes
- Local: `supabase functions serve --env-file supabase/.env`
- Use `dry_run: true` to validate content generation without publishing.
- Check `pipeline_runs` for errors and stack traces.
- Validate storage uploads in `social-images` bucket.
- Confirm Instagram permissions: `instagram_basic`, `instagram_content_publish`.
- OAuth functions with public redirects are configured with `verify_jwt = false`.

## Future-Proofing Hooks
- Add new platforms by extending `social_platform` enum and `publish` services.
- Add carousel/reels via new storage + media types.
- Add human approval by gating `posts.status` before publish.
- Add performance tuning using `post_metrics` + prompt template versions.
