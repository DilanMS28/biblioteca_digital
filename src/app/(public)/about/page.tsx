import Footer from "@/components/layout/Footer"
import AboutCard from "@/components/ui/AboutCard"
import Image from "next/image"

export default function page() {
    return (
        <main>
            <section className="bg-gray-100">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex flex-col lg:flex-row p-8 gap-6">
                        <div className="w-full rounded-4xl overflow-hidden lg:w-1/2">
                            <Image src="/imagen-nosotros.jpg" alt="Imagen acerca de nosotros" width={900} height={600} />
                        </div>
                        <div className="lg:w-1/2 lg:mt-8">
                            <div>
                                <h1 className="text-4xl font-bold mb-4">Impulsando el conocimiento y la curiosidad</h1>
                                <p className="text-slate-600 text-lg leading-relaxed">Nuestra misión es proporcionar a cada estudiante acceso ilimitado a un mundo de información, fomentando el amor por la lectura y la investigación en la era digital. Creemos que el conocimiento debe ser libre, accesible y emocionante</p>
                            </div>
                            <div className="flex gap-4 mt-8">
                                <button className="text-white font-bold bg-blue-400 hover:bg-blue-500 p-4 rounded-4xl cursor-pointer">Explorar Catálogo</button>
                                <button className=" text-blue-400 font-bold border-2 border-blue-400 p-4 rounded-4xl cursor-pointer">Leer Más</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-4 lg:my-16">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex flex-col lg:flex-row gap-6 p-8">
                        <div>
                            <div className="inline-flex items-center justify-center rounded-4xl bg-blue-400/20 w-20 h-20 mb-2">
                                <i className="bi bi-eye text-blue-400 text-4xl"></i>
                            </div>
                            <h2 className="text-2xl font-bold my-2">Nuestra Visión</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">Convertirnos en el epicentro del aprendizaje colaborativo, donde la tecnología y la literatura se unen para formar ciudadanos críticos, creativos y preparados para los desafíos del futuro globalizado</p>
                        </div>
                        <div>
                            <div className="inline-flex items-center justify-center rounded-4xl bg-blue-400/20 w-20 h-20 mb-2">
                                <i className="bi bi-rocket-takeoff text-blue-400 text-4xl"></i>
                            </div>
                            <h2 className="text-2xl font-bold my-2">Nuestra Misión</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">Democratizar el acceso a la información de alta calidad, intregrando recursos digitales de vanguardia con la pedagogía escolar para transformar la experiencia de aprendizaje de nuestros estudiantes</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100">
                <div className="max-w-[1200px] mx-auto">
                    <div className="py-16">
                        <div className="p-8 mb-8">
                            <h2 className="text-4xl font-bold text-center mb-2">Nuestros Valores</h2>
                            <p className="text-lg text-slate-600 text-center leading-relaxed">
                                Los pilares que guían cada una de nuestras acciones y decisiones para ofrecer el mejor servicio a nuestra comunidad educativa
                            </p>
                        </div>

                        <div className="flex flex-col px-8 lg:flex-row gap-8">
                            <AboutCard icon="bi-person-workspace" title="Accesibilidad" text="Contenido disponible para todos los estudiantes, sin importar su ubicación o dispositivo" />
                            <AboutCard icon="bi-lightbulb" title="Innovación" text="Integramos las últimas herramientas tecnológicas para facilitar la investigación" />
                            <AboutCard icon="bi-book-half" title="Curiosidad" text="Fomentamos el deseo constante de aprender y descubrir nuevos mundos" />
                            <AboutCard icon="bi-shield-check" title="Integridad" text="Promovemos el uso ético de la información y el respeto a la propiedad intelectual" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-blue-400">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex flex-col space-y-6 lg:flex-row justify-between items-center p-16">
                        <div className="flex flex-col justify-center items-center">
                            <p className="font-bold text-5xl text-white mb-4"><span>100+</span></p>
                            <p className="uppercase text-white text-xl font-semibold">Libros Digitales</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <p className="font-bold text-5xl text-white mb-4"><span>1K+</span></p>
                            <p className="uppercase text-white text-xl font-semibold">Usuarios Activos</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <p className="font-bold text-5xl text-white mb-4"><span>10+</span></p>
                            <p className="uppercase text-white text-xl font-semibold">Categorías</p>
                        </div>
                        <div className="flex flex-col justify-center items-center mb-6">
                            <p className="font-bold text-5xl text-white mb-4"><span>24/7</span></p>
                            <p className="uppercase text-white text-xl font-semibold">Acceso Ilimitado</p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </main>
    )
}
