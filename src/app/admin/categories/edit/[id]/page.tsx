import TitleSection from '@/components/ui/TitleSection'
import CategoryForm from '@/features/categories/components/CategoryForm'
import { ToastContainer } from 'react-toastify'

export default function page() {
    return (
        <div>
            <>
                <TitleSection
                    title='Editar Categoría'
                    description='Edita una categoría del listado'
                    route='categorías / editar'
                />

                <div className='mx-auto p-8 bg-white rounded-4xl'>
                    <h3 className='font-bold text-3xl text-center'>Editar Categoría</h3>
                    <p className='text-slate-600 text-lg text-center mb-8'>Mantén actualizados los segmento para tu biblioteca digital</p>

                    <CategoryForm />
                </div>
                <ToastContainer />
            </>
        </div>
    )
}
