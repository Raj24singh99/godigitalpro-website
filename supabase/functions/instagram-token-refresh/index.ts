import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createServiceClient } from "../_shared/supabase.ts";
import { errorResponse, handleCors, jsonResponse } from "../_shared/responses.ts";
import { getRuntimeEnv } from "../_shared/env.ts";

async function fetchJson(url: string) {
  const response = await fetch(url, { method: "GET" });
  const data = await response.json();
  if (!response.ok) {
    const message = data?.error?.message || response.statusText;
    throw new Error(`Instagram refresh error: ${message}`);
  }
  return data;
}

serve(async (req) => {
  const cors = handleCors(req);
  if (cors) return cors;

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const env = getRuntimeEnv();
    const { social_account_id } = await req.json();

    if (!env.instagramAppId || !env.instagramAppSecret) {
      return jsonResponse({ error: "Missing Instagram app credentials" }, 500);
    }

    const service = createServiceClient();
    let query = service
      .from("social_accounts")
      .select(
        "id, user_id, facebook_page_id, instagram_business_id, user_access_token"
      )
      .eq("platform", "instagram");

    if (social_account_id) {
      query = query.eq("id", social_account_id);
    }

    const { data: accounts, error: accountsError } = await query;
    if (accountsError || !accounts?.length) {
      return jsonResponse({ error: accountsError?.message || "No accounts found" }, 404);
    }

    const results: Array<Record<string, unknown>> = [];

    for (const account of accounts) {
      try {
        if (!account.user_access_token) {
          throw new Error("Missing user access token");
        }

        const longTokenUrl = new URL(`${env.instagramGraphBaseUrl}/oauth/access_token`);
        longTokenUrl.searchParams.set("grant_type", "fb_exchange_token");
        longTokenUrl.searchParams.set("client_id", env.instagramAppId);
        longTokenUrl.searchParams.set("client_secret", env.instagramAppSecret);
        longTokenUrl.searchParams.set("fb_exchange_token", account.user_access_token);

        const longToken = await fetchJson(longTokenUrl.toString());
        const longAccessToken = longToken.access_token as string;
        const expiresIn = Number(longToken.expires_in || 0);
        const tokenExpiresAt = expiresIn
          ? new Date(Date.now() + expiresIn * 1000).toISOString()
          : null;

        const accountsUrl = new URL(`${env.instagramGraphBaseUrl}/me/accounts`);
        accountsUrl.searchParams.set("fields", "id,name,access_token,instagram_business_account{id,username}");
        accountsUrl.searchParams.set("access_token", longAccessToken);

        const pages = await fetchJson(accountsUrl.toString());
        const page = (pages?.data || []).find((item: any) => item.id === account.facebook_page_id);
        if (!page?.access_token) {
          throw new Error("Failed to refresh page access token");
        }

        const { error: updateError } = await service
          .from("social_accounts")
          .update({
            access_token: page.access_token,
            token_expires_at: tokenExpiresAt,
            user_access_token: longAccessToken,
            user_token_expires_at: tokenExpiresAt,
            last_refreshed_at: new Date().toISOString(),
            instagram_business_id: page.instagram_business_account?.id || account.instagram_business_id,
          })
          .eq("id", account.id);

        if (updateError) {
          throw new Error(updateError.message);
        }

        results.push({ id: account.id, refreshed: true, expires_at: tokenExpiresAt });
      } catch (error) {
        results.push({
          id: account.id,
          refreshed: false,
          error: error instanceof Error ? error.message : "Unknown error",
        });
      }
    }

    return jsonResponse({ success: true, results });
  } catch (error) {
    return errorResponse(error);
  }
});
