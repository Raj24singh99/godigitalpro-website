import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createServiceClient } from "../_shared/supabase.ts";
import { errorResponse, handleCors, jsonResponse } from "../_shared/responses.ts";

serve(async (req) => {
  const cors = handleCors(req);
  if (cors) return cors;

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const { state, page_id } = await req.json();
    if (!state || !page_id) {
      return jsonResponse({ error: "state and page_id are required" }, 400);
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

    const pages = stateRow.metadata?.pages || [];
    const selected = pages.find((page: any) => page.id === page_id);
    if (!selected) {
      return jsonResponse({ error: "Invalid page selection" }, 400);
    }

    const expiresIn = Number(stateRow.metadata?.expires_in || 0);
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
          account_name: selected.name,
          instagram_business_id: selected.instagram_business_id,
          instagram_username: selected.instagram_username,
          facebook_page_id: selected.id,
          access_token: selected.access_token,
          token_expires_at: tokenExpiresAt,
          token_type: "bearer",
          scopes: stateRow.metadata?.scopes || [],
          user_access_token: stateRow.metadata?.long_access_token,
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
      instagram_business_id: selected.instagram_business_id,
      instagram_username: selected.instagram_username,
    });
  } catch (error) {
    return errorResponse(error);
  }
});
