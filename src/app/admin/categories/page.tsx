'use client'
import ButtonActionForm from "@/components/ui/ButtonActionForm";
import TitleSection from "@/components/ui/TitleSection";
import { getCategories } from "@/features/categories/categoryService";
import CategoryList from "@/features/categories/components/CategoryList";
import { CategoryType } from "@/Schemas/CategorySchema";
import { useEffect, useState } from "react";

export default function Page() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories();
      setCategories(data || []);
    }
    fetchCategories();
  }, []);

  const filteredCategories = categories.filter((categorie) =>
    (categorie.name?.toLowerCase() ?? "").includes(search.toLowerCase()) ||
    (categorie.description?.toLowerCase() ?? "").includes(search.toLowerCase())
  );

  return (
    <>
      <TitleSection
        title="Gestión de Categorías"
        description="Organizar y Gestionar la Taxonomía Académica de la Biblioteca Virtual"
        route="admin / categorías"
      />

      <div className="flex flex-col-reverse lg:flex-row gap-2 justify-between items-center w-full">
        <div className="relative w-full md:w-150">
          <i className="bi bi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg pointer-events-none"></i>
          <input
            type="text"
            placeholder="Buscar categoría, descripción..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-3 py-2 border border-gray-300 rounded-4xl bg-white shadow-sm focus:outline-none focus:border-blue-400 w-full"
          />
        </div>
  

        <ButtonActionForm
          text="+ Agregar Categoría"
          href="/admin/categories/create"
        />
      </div>

      <CategoryList categories={filteredCategories} />
    </>
  );
}
