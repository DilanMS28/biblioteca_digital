"use server";
import { createClient } from "@/lib/supabase/server";
import {DraftCategoryType } from "@/Schemas/CategorySchema";

//CRUD
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

export async function getCategorieById(id: string) {
  const supabase = await createClient();

  const {data, error} = await supabase.from("categories").select("*").eq("id", id).single();

  if(error) throw new Error(error.message);

  return data;
}

export async function updateCategory(id: string, category: DraftCategoryType) {
  const supabase = await createClient();

  const { error } = await supabase.from("categories").update({
    name: category.name,
    description: category.description,
  })
  .eq("id", id);

  if (error) throw new Error(error.message);

  return { success: true, message: "Categoría actualizada correctamente" };
}

export async function deleteCategory(id: string){
  const supabase = await createClient();

  const {error} = await supabase.from("categories").delete().eq("id", id);

  if(error) throw new Error(error.message);

  return { success: true, message: "Categoría Eliminada correctamente" };
}