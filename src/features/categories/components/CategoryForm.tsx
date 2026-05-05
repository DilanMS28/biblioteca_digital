'use client'
import ErrorMessage from '@/components/ui/ErrorMessage';
import { DraftCategoryType } from '@/Schemas/CategorySchema';
import { useForm } from 'react-hook-form';
import { createCategoryAction } from '../categoryAction';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function CategoryForm() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<DraftCategoryType>();

    const handleSubmitCategories = async (data: DraftCategoryType) => {
        const result = await createCategoryAction(data);
        
        if(result?.message) {
            toast.error(result.message || "Error al Agregar Categoría")
        }else{
            toast.success("Categoría Agregada Correctamente")
        }
        reset();
        router.refresh();
        router.push("/admin/categories")
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
                    Agregar Categoría
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
