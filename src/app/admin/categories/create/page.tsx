import TitleSection from '@/components/ui/TitleSection'
import CategoryForm from '@/features/categories/components/CategoryForm'
import { ToastContainer } from 'react-toastify'

export default function page() {
    return (
        <>
            <TitleSection
                title='Agregar Categoría'
                description='Agrega una nueva categoría al listado de la biblioteca'
                route='categorías / agregar'
            />

            <div className='mx-auto p-8 bg-white rounded-4xl'>
                <h3 className='font-bold text-3xl text-center'>Añadir Nueva Categoría</h3>
                 <p className='text-slate-600 text-lg text-center mb-8'>Define un nuevo segmento para tu biblioteca digital</p>
                 
                <CategoryForm />
            </div>
            <ToastContainer />
        </>
    )
}
