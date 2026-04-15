//Conectar con el frontend
import { DraftCategoryType } from "@/Schemas/CategorySchema";
import { createCategory } from "./categoryService";

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
