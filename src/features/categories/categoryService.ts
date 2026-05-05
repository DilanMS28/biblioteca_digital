"use server";
import { createClient } from "@/lib/supabase/server";
import { DraftCategoryType } from "@/Schemas/CategorySchema";

export async function createCategory(category: DraftCategoryType) {
  const supabase = await createClient();

  const { data, error } = await supabase.from("categories").insert(category);

  if (error) throw new Error(error.message);

  return data;
}

export async function getCategories() {
  const supabase = await createClient();

  const {data, error} = await supabase.from("categories").select("*").order("id", {ascending: false});

  if(error) throw new Error(error.message);

  return data;
}
