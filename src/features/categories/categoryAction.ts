//Conectar con el frontend
'use server'
import { DraftCategoryType } from "@/Schemas/CategorySchema";
import { createCategory, deleteCategory, getCategorieById, updateCategory } from "./categoryService";
import { revalidatePath } from "next/cache";

export async function updateCategoryAction(id: string, formData: DraftCategoryType) {
  const data = {
    name: formData.name,
    description: formData.description,
  };

  if (!data.name || !data.description) {
    return { sucess: false, message: "Nombre o Descripción requeridos" };
  }

  try {
    await updateCategory(id, data);
  } catch (error: any) {
    return { success: false, message: "Ocurrió un Error al Actualizar la Categoría" };
  }
}

export async function createCategoryAction(formData: DraftCategoryType) {
  const data = {
    name: formData.name,
    description: formData.description,
  };

  if (!data.name || !data.description) {
    return { sucess: false, message: "Nombre o Descripción requeridos" };
  }

  try {
    await createCategory(data);
  } catch (error: any) {
    return { success: false, message: "Ocurrió un Error al Agregar la Categoría" };
  }
}

export async function getCategorieByIdAction(id: string) {
  try{
    const data = await getCategorieById(id);
    return { success: true, data};
  } catch (error: any) {
    return { success: false, message: "Ocurrió un Error al Obtener la Categoría" };
  }

}

export async function deleteCategoryAction(id: string) {
  try{

    if (!id) {
      return { sucess: false, message: "Categoría No Encontrada" };
    }

    await deleteCategory(id);
    revalidatePath("/admin/categories")
    return { success: true};

  } catch (error: any) {
    return { success: false, message: "Ocurrió un Error al Obtener la Categoría" };
  }
}