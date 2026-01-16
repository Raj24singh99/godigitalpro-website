import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { publishToInstagram } from "../_shared/publish.ts";
import { createServiceClient } from "../_shared/supabase.ts";
import { errorResponse, handleCors, jsonResponse } from "../_shared/responses.ts";

serve(async (req) => {
  const cors = handleCors(req);
  if (cors) return cors;

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const supabase = createServiceClient();
  let payload: { post_id?: string } | null = null;

  try {
    payload = await req.json();
    const { post_id } = payload;
    if (!post_id) {
      return jsonResponse({ error: "post_id is required" }, 400);
    }

    const { data: post, error: postError } = await supabase
      .from("posts")
      .select(
        "id, caption, image_url, social_account_id, status, scheduled_for"
      )
      .eq("id", post_id)
      .single();

    if (postError || !post) {
      return jsonResponse({ error: postError?.message || "Post not found" }, 404);
    }

    if (!post.social_account_id) {
      return jsonResponse({ error: "Post missing social_account_id" }, 400);
    }

    const { data: account, error: accountError } = await supabase
      .from("social_accounts")
      .select("instagram_business_id, access_token")
      .eq("id", post.social_account_id)
      .single();

    if (accountError || !account) {
      return jsonResponse({ error: accountError?.message || "Account not found" }, 404);
    }

    if (!post.caption || !post.image_url) {
      return jsonResponse({ error: "Post must include caption and image_url" }, 400);
    }

    const instagramPostId = await publishToInstagram({
      instagramBusinessId: account.instagram_business_id,
      accessToken: account.access_token,
      caption: post.caption,
      imageUrl: post.image_url,
    });

    const { error: updateError } = await supabase
      .from("posts")
      .update({
        status: "published",
        published_at: new Date().toISOString(),
        instagram_post_id: instagramPostId,
      })
      .eq("id", post.id);

    if (updateError) {
      return jsonResponse({ error: updateError.message }, 500);
    }

    return jsonResponse({
      success: true,
      instagram_post_id: instagramPostId,
      post_id: post.id,
    });
  } catch (error) {
    if (payload?.post_id) {
      await supabase
        .from("posts")
        .update({ status: "failed" })
        .eq("id", payload.post_id);
    }

    return errorResponse(error);
  }
});
