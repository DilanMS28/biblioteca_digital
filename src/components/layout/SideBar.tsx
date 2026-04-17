'use client'
import { useState } from "react"
import SideBarItem from "../ui/SideBarItem"

export default function SideBar() {

    const [sideBarOpen, setSideBarOpen] = useState(false);

    const routes = [
        { name: "Dashboard", icon: "bi-house-door-fill", href: "/admin" },
        { name: "Libros", icon: "bi-book-half", href: "#" },
        { name: "Categorías", icon: "bi-bookmarks-fill", href: "/admin/categories" },
        { name: "Usuarios", icon: "bi-people-fill", href: "#" },
        { name: "Estadísticas", icon: "bi-pie-chart-fill", href: "#" },
        { name: "Configuración", icon: "bi-gear-fill", href: "#" },
    ]

    return (
        <aside className={`flex shrink-0 flex-col max-w-[400px] transition-all duration-300 md:w-[260px] ${sideBarOpen ? "w-[200px]" : "w-[60px]"} py-4 px-2`}>
            <div className="my-4 text-center">
                <h2 className="font-bold text-xl text-blue-400 hidden sm:block"> Panel Administrador</h2>
                <button
                    className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-400 mx-auto hover:bg-blue-200 transition"
                    onClick={() => setSideBarOpen((open) => !open)}
                    aria-expanded={sideBarOpen}
                >
                    <i className="bi bi-list text-2xl"></i>
                    <span className="sr-only">{sideBarOpen ? "Cerrar menú" : "Abrir menú"}</span>
                </button>
            </div>

            <hr className="my-4 border-t border-slate-200" />
            <nav className="mx-1">
                {routes.map(route => (
                    <SideBarItem
                        key={route.name}
                        text={route.name}
                        icon={route.icon}
                        href={route.href}
                    />
                ))}
            </nav>
        </aside>
  
  
    )
}
