//Conectar con el frontend
import { CategoryType, DraftCategoryType } from "@/Schemas/CategorySchema";
import { createCategory, getCategorieById, updateCategory } from "./categoryService";

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