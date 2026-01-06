import { supabase } from "../config/supabase";

export async function createUserProfile({ userId, email, company }) {
  if (!userId) return;
  const { error } = await supabase.from("profiles").insert([
    {
      user_id: userId,
      email,
      company,
    },
  ]);
  if (error) throw error;
}
