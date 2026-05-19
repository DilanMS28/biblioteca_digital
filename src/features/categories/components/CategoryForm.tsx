'use client'
import ErrorMessage from '@/components/ui/ErrorMessage';
import { DraftCategoryType } from '@/Schemas/CategorySchema';
import { useForm } from 'react-hook-form';
import { createCategoryAction, getCategorieByIdAction, updateCategoryAction } from '../categoryAction';
import { toast } from 'react-toastify';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CategoryForm() {
    const router = useRouter();
    const params = useParams();
    const categorieId = params.id as string;

    useEffect(() => {
        async function getCategorieById() {
            if (categorieId) {
                const result = await getCategorieByIdAction(categorieId);
                if (result.success) {
                    setValue("name", result.data.name);
                    setValue("description", result.data.description);
                } else {
                    toast.error(result.message || "Error al Obtener la Categoría")
                }
            }
        }
        getCategorieById();
    }, [categorieId]);

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<DraftCategoryType>();


    const handleSubmitCategories = async (data: DraftCategoryType) => {
        let result;

        if (categorieId) {
            result = await updateCategoryAction(categorieId, data);
            if (result?.message) {
                toast.error(result.message || "Error al Actualizar Categoría")
            } else {
                toast.success("Categoría Actualizada Correctamente")
            }
        } else {
            result = await createCategoryAction(data);
            if (result?.message) {
                toast.error(result.message || "Error al Agregar Categoría")
            } else {
                toast.success("Categoría Agregada Correctamente")
            }

        }

        reset();
        setTimeout(() => {
            router.refresh();
            router.push("/admin/categories");
        }, 2000);//espera 2s antes de refrescar para dar tiempo a la notificación toast
    }

    return (
        <form onSubmit={handleSubmit(handleSubmitCategories)} className='space-y-8'>
            <div className="relative">
                <label className="text-xs font-semibold text-gray-500 mb-2 block uppercase tracking-wider">Nombre de la Categoria</label>
                <input
                    type="text"
                    placeholder="Ej: Historia"
                    {...register("name", { required: "El nombre de la categoría es obligatorio" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:border-blue-400 placeholder-gray-400"
                />
                {errors.name?.message && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            </div>

            <div className="relative">
                <label className="text-xs font-semibold text-gray-500 mb-2 block uppercase tracking-wider">Descripción</label>
                <textarea
                    placeholder="Proporciona una descripción detallada de los elementos que pertenecerán a esta categoría..."
                    rows={4}
                    {...register("description", { required: "La descripción de la categoría es obligatoria" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:border-blue-400 placeholder-gray-400 resize-y min-h-[64px] max-h-[240px]"
                />
                {errors.description?.message && <ErrorMessage>{errors.description.message}</ErrorMessage>}
            </div>

            <div className="flex gap-4">
                <button type="submit" className="w-full bg-blue-400 hover:bg-blue-500 transition text-white font-bold py-3 rounded-4xl mb-5 shadow-md text-lg cursor-pointer" >
                    {categorieId ? "Actualizar Categoría" : "Agregar Categoría"}
                </button>

                <button
                    type="button"
                    onClick={() => reset()}
                    className="w-full bg-gray-200 hover:bg-gray-300 transition text-gray-700 font-bold py-3 rounded-4xl mb-5 shadow-md text-lg cursor-pointer"
                >
                    Cancelar
                </button>
            </div>

        </form>
    )
}
