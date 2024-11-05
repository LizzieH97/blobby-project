import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function addComment(name, message) {
  try {
    const { data, error } = await supabase
      .from("Log-Book")
      .insert([{ name: name, message: message }])
      .single(); // Use .single() for inserting a single comment

    if (error) {
      throw error;
    }

    return data; // Return the inserted data, which might include the new comment's details
  } catch (err) {
    console.error("Error adding comment:", err);
    throw err; // Re-throw the error to be handled by the calling function
  }
}
