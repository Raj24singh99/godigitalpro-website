import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createServiceClient } from "../_shared/supabase.ts";
import { errorResponse, handleCors, jsonResponse } from "../_shared/responses.ts";
import { getRuntimeEnv } from "../_shared/env.ts";

async function fetchJson(url: string) {
  const response = await fetch(url, { method: "GET" });
  const data = await response.json();
  if (!response.ok) {
    const message = data?.error?.message || response.statusText;
    throw new Error(`Instagram OAuth error: ${message}`);
  }
  return data;
}

function buildOAuthError(error: string, description?: string | null) {
  return jsonResponse({ error, description }, 400);
}

serve(async (req) => {
  const cors = handleCors(req);
  if (cors) return cors;

  if (req.method !== "GET") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const env = getRuntimeEnv();
    const url = new URL(req.url);
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    const error = url.searchParams.get("error");
    const errorDescription = url.searchParams.get("error_description");

    if (error) {
      return buildOAuthError(error, errorDescription);
    }

    if (!code || !state) {
      return jsonResponse({ error: "Missing code or state" }, 400);
    }

    const service = createServiceClient();
    const { data: stateRow, error: stateError } = await service
      .from("oauth_states")
      .select("id, user_id, brand_id, expires_at, metadata")
      .eq("state", state)
      .single();

    if (stateError || !stateRow) {
      return jsonResponse({ error: "Invalid state" }, 400);
    }

    if (new Date(stateRow.expires_at).getTime() < Date.now()) {
      return jsonResponse({ error: "State expired" }, 400);
    }

    const redirectUri = stateRow.metadata?.redirect_uri || env.instagramRedirectUri;
    if (!redirectUri) {
      return jsonResponse({ error: "Missing redirect_uri" }, 400);
    }

    if (!env.instagramAppId || !env.instagramAppSecret) {
      return jsonResponse({ error: "Missing Instagram app credentials" }, 500);
    }

    const tokenUrl = new URL(`${env.instagramGraphBaseUrl}/oauth/access_token`);
    tokenUrl.searchParams.set("client_id", env.instagramAppId);
    tokenUrl.searchParams.set("client_secret", env.instagramAppSecret);
    tokenUrl.searchParams.set("redirect_uri", redirectUri);
    tokenUrl.searchParams.set("code", code);

    const shortToken = await fetchJson(tokenUrl.toString());
    const shortAccessToken = shortToken.access_token as string;

    const longTokenUrl = new URL(`${env.instagramGraphBaseUrl}/oauth/access_token`);
    longTokenUrl.searchParams.set("grant_type", "fb_exchange_token");
    longTokenUrl.searchParams.set("client_id", env.instagramAppId);
    longTokenUrl.searchParams.set("client_secret", env.instagramAppSecret);
    longTokenUrl.searchParams.set("fb_exchange_token", shortAccessToken);

    const longToken = await fetchJson(longTokenUrl.toString());
    const longAccessToken = longToken.access_token as string;
    const expiresIn = Number(longToken.expires_in || 0);

    const accountsUrl = new URL(`${env.instagramGraphBaseUrl}/me/accounts`);
    accountsUrl.searchParams.set("fields", "id,name,access_token,instagram_business_account{id,username}");
    accountsUrl.searchParams.set("access_token", longAccessToken);

    const accounts = await fetchJson(accountsUrl.toString());
    const pages = (accounts?.data || [])
      .filter((page: any) => page.instagram_business_account?.id)
      .map((page: any) => ({
        id: page.id,
        name: page.name,
        access_token: page.access_token,
        instagram_business_id: page.instagram_business_account.id,
        instagram_username: page.instagram_business_account.username,
      }));

    if (!pages.length) {
      return jsonResponse(
        {
          error:
            "No Instagram Business/Creator account found. Please switch your Instagram account to Business/Creator and link a Facebook Page.",
        },
        404
      );
    }

    if (pages.length > 1) {
      await service
        .from("oauth_states")
        .update({
          metadata: {
            ...stateRow.metadata,
            pages,
            long_access_token: longAccessToken,
            expires_in: expiresIn,
          },
        })
        .eq("id", stateRow.id);

      return jsonResponse({
        requires_selection: true,
        state,
        pages: pages.map(({ access_token, ...rest }) => rest),
      }, 409);
    }

    const page = pages[0];
    const tokenExpiresAt = expiresIn
      ? new Date(Date.now() + expiresIn * 1000).toISOString()
      : null;

    const { data: account, error: upsertError } = await service
      .from("social_accounts")
      .upsert(
        {
          user_id: stateRow.user_id,
          brand_id: stateRow.brand_id,
          platform: "instagram",
          account_name: page.name,
          instagram_business_id: page.instagram_business_id,
          instagram_username: page.instagram_username,
          facebook_page_id: page.id,
          access_token: page.access_token,
          token_expires_at: tokenExpiresAt,
          token_type: longToken.token_type || "bearer",
          scopes: stateRow.metadata?.scopes || [],
          user_access_token: longAccessToken,
          user_token_expires_at: tokenExpiresAt,
          last_refreshed_at: new Date().toISOString(),
        },
        { onConflict: "user_id,facebook_page_id,platform" }
      )
      .select("id")
      .single();

    if (upsertError || !account) {
      return jsonResponse({ error: upsertError?.message || "Failed to store account" }, 500);
    }

    await service.from("oauth_states").delete().eq("id", stateRow.id);

    return jsonResponse({
      success: true,
      social_account_id: account.id,
      instagram_business_id: page.instagram_business_id,
      instagram_username: page.instagram_username,
    });
  } catch (error) {
    return errorResponse(error);
  }
});
