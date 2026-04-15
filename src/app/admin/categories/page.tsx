import ButtonActionForm from "@/components/ui/ButtonActionForm";
import TitleSection from "@/components/ui/TitleSection";

export default function page() {
  return (
    <>
      <TitleSection title="Gestión de Categorías" description="Organizar y Gestionar la Taxonomía Académica de la Biblioteca Virtual" route="admin / categorías" />

       <ButtonActionForm 
          text="+ Agregar Categoría"
          href="/admin/categories/create"
       />

    </>
  )
}
