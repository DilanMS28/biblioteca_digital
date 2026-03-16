import Link from "next/link";


export default function NavBar() {
    return (
        <header className="shadow-xl p-4">
            <div className="max-w-[1800px] mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center gap-8">
                        <Link href="/">
                            <div className="flex justify-between items-center gap-4">
                                <i className={`bi bi-book-half text-blue-400 text-4xl`}></i>
                                <p className="font-bold text-2xl">Biblioteca Virtual CTPC</p>
                            </div>
                        </Link>
                        <nav className="flex justify-between items-center gap-4">
                            <Link href="/" className="text-lg font-semibold my-2 text-blue-400 hover:text-blue-500">Inicio</Link>
                            <Link href="/" className="text-lg font-semibold my-2 text-blue-400 hover:text-blue-500" >Biblioteca</Link>
                            <Link href="/about" className="text-lg font-semibold my-2 text-blue-400 hover:text-blue-500">Nosotros</Link>
                        </nav>
                    </div>

                    <div className="">
                        <button className="shadow-lg text-white font-bold bg-blue-400 hover:bg-blue-500 p-4 rounded-4xl cursor-pointer">Iniciar Sesión</button>
                    </div>
                </div>
            </div>

        </header>
    )
}
