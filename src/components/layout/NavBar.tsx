'use client'
import Link from "next/link";
import { useState } from "react";


export default function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="shadow-xl p-4">
            <div className="max-w-[1800px] mx-auto">
                <div className="flex justify-between items-center">

                    {/* Logo + Desktop nav */}
                    <div className="flex justify-between items-center gap-8">
                        <Link href="/">
                            <div className="flex justify-between items-center gap-4">
                                <i className={`bi bi-book-half text-blue-400 text-4xl`}></i>
                                <p className="font-bold text-2xl">Biblioteca Virtual CTPC</p>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex justify-between items-center gap-4">
                            <Link href="/" className="text-lg font-semibold my-2 text-blue-400 hover:text-blue-500">Inicio</Link>
                            <Link href="/" className="text-lg font-semibold my-2 text-blue-400 hover:text-blue-500">Biblioteca</Link>
                            <Link href="/about" className="text-lg font-semibold my-2 text-blue-400 hover:text-blue-500">Nosotros</Link>
                        </nav>
                    </div>

                    {/* Desktop Login */}
                    <div className="hidden md:block">
                        <Link href="#" className="shadow-lg text-white font-bold bg-blue-400 hover:bg-blue-500 px-6 py-3 rounded-4xl cursor-pointer">Iniciar Sesión</Link>
                    </div>

                    {/* Hamburger Icon (mobile) */}
                    <div className="md:hidden flex items-center">
                        <button
                            aria-label="Abrir menú"
                            onClick={() => setOpen(prevOpen => !prevOpen)}
                            className="text-blue-400 text-3xl focus:outline-none"
                        >
                            <i className="bi bi-list"></i>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div
                    id="mobile-menu"
                    className={`flex justify-center items-center md:hidden w-full mt-4 transition-all duration-300 ${open ? '' : 'hidden'}`}
                >
                    <nav className="flex flex-col gap-2">
                        <Link href="/" className="text-center text-lg font-semibold text-blue-400 hover:text-blue-500 py-2 px-1">Inicio</Link>
                        <Link href="/" className="text-center text-lg font-semibold text-blue-400 hover:text-blue-500 py-2 px-1">Biblioteca</Link>
                        <Link href="/about" className="text-center text-lg font-semibold text-blue-400 hover:text-blue-500 py-2 px-1">Nosotros</Link>
                        <Link href="#" className="text-center mt-3 shadow-lg text-white font-bold bg-blue-400 hover:bg-blue-500 px-6 py-3 rounded-4xl cursor-pointer w-fit">Iniciar Sesión</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
