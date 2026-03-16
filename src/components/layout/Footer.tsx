import Link from "next/link";


export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 p-8">
            <h3 className="text-4xl font-bold text-blue-400 text-center">Biblioteca Digital</h3>
            <p className="text-lg text-center my-4">Empoderar a los estudiantes a través del conocimiento accesible y la narración de historias</p>

            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col justify-between items-center lg:flex-row gap-12">
                    <div className="">
                        <h4 className="font-bold text-white text-2xl">Accesos Rápidos</h4>
                        <nav className="flex flex-col gap-2 ">
                            <Link href="/" className="text-lg my-2">Inicio</Link>
                            <Link href="/" className="text-lg my-2">Biblioteca</Link>
                            <Link href="/about" className="text-lg my-2">Nosotros</Link>
                        </nav>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl">Nuestras Redes</h4>
                        <nav className="flex space-x-5">
                            <Link href="#" className="text-lg my-2"><i className="bi bi-facebook text-white text-4xl"></i></Link>
                            <Link href="#" className="text-lg my-2"><i className="bi bi-instagram text-white text-4xl"></i></Link>
                            <Link href="#" className="text-lg my-2"><i className="bi bi-youtube text-white text-4xl"></i></Link>
                        </nav>
                    </div>
                </div>

                <hr className="my-8 border-t-2 border-slate-700" />

                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center">
                        <i className="bi bi-envelope-at text-blue-400 text-4xl"></i>
                        <p className="text-lg text-white">correo@correo.com</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <i className="bi bi-telephone text-blue-400 text-4xl"></i>
                        <p className="text-lg text-white">(+506) 2222 - 222</p>
                    </div>
                </div>

            </div>

            <p className="text-lg text-center my-4">
                © {new Date().getFullYear()} Biblioteca Digital. Todos los derechos reservados.
            </p>

        </footer>
    )
}
