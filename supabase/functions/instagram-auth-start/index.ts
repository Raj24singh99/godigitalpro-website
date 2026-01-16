import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createAuthedClient, createServiceClient } from "../_shared/supabase.ts";
import { errorResponse, handleCors, jsonResponse } from "../_shared/responses.ts";
import { getRuntimeEnv } from "../_shared/env.ts";

const DEFAULT_SCOPES = [
  "instagram_basic",
  "instagram_content_publish",
  "pages_show_list",
  "pages_read_engagement",
];

serve(async (req) => {
  const cors = handleCors(req);
  if (cors) return cors;

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const env = getRuntimeEnv();
    const payload = await req.json();
    const brandId = payload?.brand_id || null;
    const redirectUri = payload?.redirect_uri || env.instagramRedirectUri;
    const scopes = payload?.scopes || DEFAULT_SCOPES;

    if (!redirectUri) {
      return jsonResponse({ error: "Missing redirect_uri" }, 400);
    }

    if (!env.instagramAppId) {
      return jsonResponse({ error: "Missing INSTAGRAM_APP_ID" }, 500);
    }

    const authHeader = req.headers.get("Authorization") || "";
    const supabase = createAuthedClient(authHeader);
    const { data: userData, error: userError } = await supabase.auth.getUser();
    const user = userData?.user;

    if (userError || !user) {
      return jsonResponse({ error: "Unauthorized" }, 401);
    }

    if (brandId) {
      const { data: brand, error: brandError } = await supabase
        .from("brands")
        .select("id")
        .eq("id", brandId)
        .single();
      if (brandError || !brand) {
        return jsonResponse({ error: "Invalid brand_id" }, 400);
      }
    }

    const state = crypto.randomUUID();
    const service = createServiceClient();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString();

    const { error: insertError } = await service.from("oauth_states").insert({
      user_id: user.id,
      brand_id: brandId,
      provider: "instagram",
      state,
      expires_at: expiresAt,
      metadata: { scopes, redirect_uri: redirectUri },
    });

    if (insertError) {
      return jsonResponse({ error: insertError.message }, 500);
    }

    const authUrl = new URL("https://www.facebook.com/v19.0/dialog/oauth");
    authUrl.searchParams.set("client_id", env.instagramAppId);
    authUrl.searchParams.set("redirect_uri", redirectUri);
    authUrl.searchParams.set("state", state);
    authUrl.searchParams.set("scope", scopes.join(","));
    authUrl.searchParams.set("response_type", "code");

    return jsonResponse({ auth_url: authUrl.toString(), state });
  } catch (error) {
    return errorResponse(error);
  }
});
