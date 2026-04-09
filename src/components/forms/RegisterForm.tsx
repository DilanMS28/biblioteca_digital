'use client'
import { registerAction } from "@/features/auth/registerAction";
import { useForm } from "react-hook-form";
import ErrorMessage from "../ui/ErrorMessage";
import { RegisterUserType } from "@/Schemas/AuthSchema";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";


export default function RegisterForm() {
    const { register, handleSubmit, formState: {errors}, reset } = useForm<RegisterUserType>();

    const registerLogin = async (data: RegisterUserType) => {
        
        const result = await registerAction(data);

        if(result?.message){
            toast.error(result.message || "Error al Registrar Usuario")
        }else{
            toast.success("Usuario Registrado Correctamente");
        }

        reset();
    }
    
    return (
        <div className="w-full m-8">

            <div className="mb-8">
                <h2 className="text-3xl text-center lg:text-left  font-bold text-blue-400 mb-1">Bienvenido</h2>
                <p className="text-center lg:text-left text-gray-500">Aquí puedes crear tu cuenta</p>
            </div>

            <form onSubmit={handleSubmit(registerLogin)}>

                <div className="flex flex-col gap-4 mb-3">
                    <div className="w-full flex gap-4 items-center">
                        <div className="relative">
                            <label className="text-xs font-semibold text-gray-500 mb-2 block uppercase tracking-wider">Nombre</label>
                            <input
                                type="text"
                                placeholder="Nombre"
                                {...register("name", { required: "El nombre es obligatorio" })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:border-blue-400 placeholder-gray-400" />
                                {errors.name?.message && (<ErrorMessage>{String(errors.name.message)}</ErrorMessage>)}
                        </div>

                        <div className="relative">
                            <label className="text-xs font-semibold text-gray-500 mb-2 block uppercase tracking-wider">Apellidos</label>
                            <input
                                type="text"
                                placeholder="Apellidos"
                                {...register("lastNames", { required: "Los apellidos son obligatorios" })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:border-blue-400 placeholder-gray-400" />
                                {errors.lastNames?.message && (<ErrorMessage>{String(errors.lastNames.message)}</ErrorMessage>)}
                        </div>
                    </div>

                    <div className="relative">
                        <label className="text-xs font-semibold text-gray-500 mb-2 block uppercase tracking-wider">Ingresar usuario</label>
                        <input
                            type="email"
                            placeholder="Correo Institucional"
                            {...register("email", { 
                                required: "El correo institucional es obligatorio",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@(?:alumnos\.)?ctpc\.edu\.mx$/,
                                    message: "Debe ser un correo institucional válido (ejemplo: usuario@ctpc.edu.mx o usuario@alumnos.ctpc.edu.mx)"
                                }
                            })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:border-blue-400 placeholder-gray-400" />
                            {errors.email?.message && (<ErrorMessage>{String(errors.email.message)}</ErrorMessage>)}
                    </div>

                    <div className="relative">
                        <label className="text-xs font-semibold text-gray-500 mb-2 block uppercase tracking-wider">Ingresar Contraseña</label>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            {...register("password", {
                                required: "La contraseña es obligatoria",
                                minLength: {
                                    value: 8,
                                    message: "La contraseña debe tener al menos 8 caracteres"
                                },
                                validate: {
                                    hasUpperCase: (value: string) =>
                                        /[A-Z]/.test(value) || "Debe contener al menos una letra mayúscula",
                                    hasLowerCase: (value: string) =>
                                        /[a-z]/.test(value) || "Debe contener al menos una letra minúscula",
                                    hasNumber: (value: string) =>
                                        /\d/.test(value) || "Debe contener al menos un número",
                                    hasSpecialChar: (value: string) =>
                                        /[!@#$%^&*(),.?":{}|<>]/.test(value) || "Debe contener al menos un carácter especial"
                                }
                            })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:border-sky-400 placeholder-gray-400" />
                            {errors.password?.message && (<ErrorMessage>{String(errors.password.message)}</ErrorMessage>)}
                    </div>
                </div>


                <button type="submit" className=" cursor-pointer w-full bg-blue-400 hover:bg-blue-500 transition text-white font-bold py-3 rounded-xl mb-5 shadow-md text-lg">Registrarse</button>

            </form>

            <div className="flex items-center gap-2 my-5">
                <hr className="grow border-gray-200" />
                <span className="text-gray-400 text-xs font-semibold">OR CONTINUE WITH</span>
                <hr className="grow border-gray-200" />
            </div>


            <div className="flex gap-3 mb-4">
                <button className="cursor-pointer flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-gray-700 bg-white hover:bg-gray-50 transition font-semibold shadow-sm">
                    <i className="bi bi-google text-blue-400 text-base"></i>
                    Google
                </button>
                <div>

                </div>
            </div>
        </div>
    )
}
