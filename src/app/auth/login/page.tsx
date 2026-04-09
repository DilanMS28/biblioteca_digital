import LoginForm from "@/components/forms/LoginForm";
import Image from "next/image";

export default function page() {
    return (
        <>
            <div className="max-w-[1200px] mx-auto">

                <div className="p-8">
                    <h1 className="text-7xl font-bold text-center text-slate-900">Iniciar Sesión</h1>
                    <p className="text-lg text-slate-600 leading-relaxed text-center">Ingresa con tus datos para acceder a tu cuenta</p>
                </div>

                <div className="flex rounded-4xl overflow-hidden shadow-lg bg-white min-h-[600px] mb-20 mx-4 lg:mx-0">
                    <div className="hidden lg:w-1/2 relative lg:flex flex-col justify-center items-center bg-slate-900 mb-">
                        <Image
                            src="/imagen-login.jpg"
                            alt="Imagen Login"
                            style={{ objectFit: "cover", objectPosition: "center", opacity: 0.92 }}
                            fill
                            priority
                            className="z-0"
                        />
                        <div className="absolute inset-0 bg-black/10 z-10"></div>
                        <div className="absolute bottom-0 left-0 p-8 z-20 text-white w-full">
                            <h2 className="font-bold text-2xl mb-1">Empoderando la siguiente<br />generación de estudiantes</h2>
                            <p className="text-lg text-slate-200 opacity-90 mt-2">
                                Acceso a miles de diarios, libros y recursos de la biblioteca CTPC
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <LoginForm />
                    </div>
                </div>

            </div>

        </>
    )
}
