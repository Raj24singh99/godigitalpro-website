import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { generateCaption } from "../_shared/caption.ts";
import { generateQuoteImage } from "../_shared/image.ts";
import { publishToInstagram } from "../_shared/publish.ts";
import { qualityGateCaption } from "../_shared/quality_gate.ts";
import { createServiceClient } from "../_shared/supabase.ts";
import { errorResponse, handleCors, jsonResponse } from "../_shared/responses.ts";

function isScheduledNow(
  runTime: string,
  timezone: string,
  now: Date,
  windowMinutes = 20
) {
  try {
    const locale = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    }).formatToParts(now);

    const hours = locale.find((part) => part.type === "hour")?.value ?? "00";
    const minutes = locale.find((part) => part.type === "minute")?.value ?? "00";
    const currentMinutes = parseInt(hours, 10) * 60 + parseInt(minutes, 10);

    const [runHour, runMinute] = runTime.split(":").map((value) => parseInt(value, 10));
    const scheduledMinutes = runHour * 60 + runMinute;

    return Math.abs(currentMinutes - scheduledMinutes) <= windowMinutes;
  } catch (_error) {
    return true;
  }
}

function pickBucket(buckets: Array<{ id: string }>) {
  if (!buckets.length) return null;
  const index = Math.floor(Math.random() * buckets.length);
  return buckets[index];
}

serve(async (req) => {
  const cors = handleCors(req);
  if (cors) return cors;

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const supabase = createServiceClient();

  try {
    const { brand_id, dry_run = false, enforce_schedule = false } =
      await req.json();

    const now = new Date();

    let brandQuery = supabase
      .from("brands")
      .select(
        "id, brand_name, user_id, automation_settings (is_enabled, timezone, run_time)"
      );

    if (brand_id) {
      brandQuery = brandQuery.eq("id", brand_id);
    }

    const { data: brands, error: brandError } = await brandQuery;
    if (brandError || !brands?.length) {
      return jsonResponse({ error: brandError?.message || "No brands found" }, 404);
    }

    const results = [] as Array<Record<string, unknown>>;

    for (const brand of brands) {
      const automation = Array.isArray(brand.automation_settings)
        ? brand.automation_settings[0]
        : brand.automation_settings;

      if (!automation?.is_enabled) {
        results.push({ brand_id: brand.id, skipped: "automation disabled" });
        continue;
      }

      if (
        enforce_schedule &&
        automation?.run_time &&
        automation?.timezone &&
        !isScheduledNow(automation.run_time, automation.timezone, now)
      ) {
        results.push({ brand_id: brand.id, skipped: "outside schedule window" });
        continue;
      }

      const { data: buckets, error: bucketError } = await supabase
        .from("content_buckets")
        .select("id, name, posting_day")
        .eq("brand_id", brand.id)
        .eq("is_active", true);

      if (bucketError || !buckets?.length) {
        results.push({ brand_id: brand.id, error: "No active buckets" });
        continue;
      }

      const dayIndex = now.getUTCDay();
      const eligible = buckets.filter(
        (bucket) => bucket.posting_day == null || bucket.posting_day === dayIndex
      );

      const bucket = pickBucket(eligible.length ? eligible : buckets);
      if (!bucket) {
        results.push({ brand_id: brand.id, error: "No eligible buckets" });
        continue;
      }

      const { data: account, error: accountError } = await supabase
        .from("social_accounts")
        .select("id, instagram_business_id, access_token")
        .eq("user_id", brand.user_id)
        .eq("platform", "instagram")
        .order("created_at", { ascending: true })
        .limit(1)
        .maybeSingle();

      if (accountError || !account) {
        results.push({ brand_id: brand.id, error: "No Instagram account" });
        continue;
      }

      const runRecord = await supabase
        .from("pipeline_runs")
        .insert({
          brand_id: brand.id,
          status: "running",
          metadata: { bucket_id: bucket.id },
        })
        .select("id")
        .single();

      const runId = runRecord.data?.id;
      if (runRecord.error || !runId) {
        results.push({ brand_id: brand.id, error: "Failed to start run" });
        continue;
      }

      try {
        const captionResult = await generateCaption({
          brandId: brand.id,
          bucketId: bucket.id,
        });

        const qualityResult = await qualityGateCaption({
          caption: captionResult.caption,
          requiredVocab: [],
        });

        if (!qualityResult.passed) {
          throw new Error(`Quality gate failed: ${qualityResult.violations?.join(" ")}`);
        }

        const imageResult = await generateQuoteImage({
          caption: qualityResult.caption,
          filenamePrefix: brand.id,
        });

        const { data: post, error: postError } = await supabase
          .from("posts")
          .insert({
            brand_id: brand.id,
            social_account_id: account.id,
            bucket_id: bucket.id,
            caption: qualityResult.caption,
            hashtags: captionResult.hashtags,
            image_url: imageResult.imageUrl,
            status: dry_run ? "draft" : "scheduled",
            scheduled_for: dry_run ? null : now.toISOString(),
          })
          .select("id")
          .single();

        if (postError || !post) {
          throw new Error(postError?.message || "Failed to create post");
        }

        if (dry_run) {
          await supabase
            .from("pipeline_runs")
            .update({
              status: "succeeded",
              completed_at: new Date().toISOString(),
              post_id: post.id,
              metadata: {
                bucket_id: bucket.id,
                pinned_comment: captionResult.pinned_comment,
              },
            })
            .eq("id", runId);

          results.push({ brand_id: brand.id, post_id: post.id, dry_run: true });
          continue;
        }

        const instagramPostId = await publishToInstagram({
          instagramBusinessId: account.instagram_business_id,
          accessToken: account.access_token,
          caption: qualityResult.caption,
          imageUrl: imageResult.imageUrl,
        });

        await supabase
          .from("posts")
          .update({
            status: "published",
            published_at: new Date().toISOString(),
            instagram_post_id: instagramPostId,
          })
          .eq("id", post.id);

        await supabase
          .from("pipeline_runs")
          .update({
            status: "succeeded",
            completed_at: new Date().toISOString(),
            post_id: post.id,
            metadata: {
              bucket_id: bucket.id,
              instagram_post_id: instagramPostId,
              pinned_comment: captionResult.pinned_comment,
            },
          })
          .eq("id", runId);

        results.push({
          brand_id: brand.id,
          post_id: post.id,
          instagram_post_id: instagramPostId,
        });
      } catch (error) {
        await supabase
          .from("pipeline_runs")
          .update({
            status: "failed",
            completed_at: new Date().toISOString(),
            error_message: error instanceof Error ? error.message : "Unknown error",
            error_stack: error instanceof Error ? error.stack : null,
          })
          .eq("id", runId);

        results.push({
          brand_id: brand.id,
          error: error instanceof Error ? error.message : "Unknown error",
        });
      }
    }

    return jsonResponse({ success: true, results });
  } catch (error) {
    return errorResponse(error);
  }
});
