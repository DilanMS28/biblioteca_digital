import Link from "next/link";
import { ToastContainer } from "react-toastify";


export default function LoginForm() {
    return (
        <div className="w-full m-8">

            <div className="mb-8">
                <h2 className="text-3xl text-center lg:text-left  font-bold text-blue-500 mb-1">Bienvenido</h2>
                <p className="text-center lg:text-left text-gray-500">Selecciona tu rol y tus credenciales</p>
            </div>

            {/* Select Role */}
            <form action="">
                <div className="mb-6">
                    <label className="text-xs font-semibold text-gray-500 mb-2 block uppercase tracking-wider">Seleccionar Rol</label>
                    <div className="flex gap-3">
                        <label className="flex-1 cursor-pointer">
                            <input type="radio" name="role" value="estudiante" defaultChecked className="hidden peer" />
                            <div className="border-2 border-gray-200 text-gray-600 font-semibold rounded-xl px-4 py-2 flex flex-col items-center gap-1 bg-gray-50 hover:border-blue-400 peer-checked:border-blue-400 peer-checked:bg-blue-50 transition">
                                <i className="bi bi-mortarboard-fill text-xl mb-1"></i>
                                Estudiante
                            </div>
                        </label>
                        <label className="flex-1 cursor-pointer">
                            <input type="radio" name="role" value="profesor" className="hidden peer" />
                            <div className="border-2 border-gray-200 text-gray-600 font-semibold rounded-xl px-4 py-2 flex flex-col items-center gap-1 bg-gray-50 hover:border-blue-400 peer-checked:border-blue-400 peer-checked:bg-blue-50 transition">
                                <i className="bi bi-person-badge text-xl mb-1"></i>
                                Profesor
                            </div>
                        </label>

                        <label className="flex-1 cursor-pointer">
                            <input type="radio" name="role" value="admin" className="hidden peer" />
                            <div className="border-2 border-gray-200 text-gray-600 font-semibold rounded-xl px-4 py-2 flex flex-col items-center gap-1 bg-gray-50 hover:border-blue-400 peer-checked:border-blue-400 peer-checked:bg-blue-50 transition">
                                <i className="bi bi-shield-lock text-xl mb-1"></i>
                                Admin
                            </div>
                        </label>
                    </div>
                </div>

                <div className="flex flex-col gap-4 mb-3">
                    <div className="relative">
                        <label className="text-xs font-semibold text-gray-500 mb-2 block uppercase tracking-wider">Ingresar usuario</label>
                        <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:border-blue-400 placeholder-gray-400" />
                        {/* <i className="bi bi-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i> */}
                    </div>

                    <div className="relative">
                        <label className="text-xs font-semibold text-gray-500 mb-2 block uppercase tracking-wider">Ingresar Contraseña</label>
                        <input type="password" placeholder="Password" className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:border-sky-400 placeholder-gray-400" />
                        {/* <i className="bi bi-eye-slash absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"></i> */}
                    </div>
                </div>

                <div className="flex justify-between items-center mb-5">
                    <label className="flex items-center text-sm text-slate-600 gap-1"><input type="checkbox" className="accent-blue-500 mr-2" />Remember me</label>
                    <a className="text-blue-400 text-sm font-semibold hover:underline cursor-pointer" href="#">Forgot password?</a>
                </div>


                <button type="button" className=" cursor-pointer w-full bg-blue-400 hover:bg-blue-500 transition text-white font-bold py-3 rounded-xl mb-5 shadow-md text-lg">
                    Iniciar Sesión
                </button>

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

            <div className="flex justify-center items-center my-5">
                <label className="flex items-center text-sm text-slate-600 gap-1">No tienes una cuenta?
                    <Link className="text-blue-400 text-sm font-semibold hover:underline cursor-pointer" href="/auth/register">Crear una cuenta</Link>
                </label>
            </div>
            <ToastContainer />
        </div>
    )
}
