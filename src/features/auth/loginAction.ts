'use server'
import { createClient } from "@/lib/supabase/server"
import { SignInUserType } from "@/Schemas/AuthSchema"


export async function loginAction(formData: SignInUserType){
    const data  = SignInUserType.parse({
        email: formData.email,
        password: formData.password,
        role: formData.role
    })

    const supabase = await createClient();

    const { data: signInData, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password
    });

    if(error || !signInData.user){
        return { success: false, message: "Usuario o Contraseña Incorrectos" };
    }

    const user = signInData.user;

    //obtener perfil (rol) y validar que coincida el rol enviado en el formulario
    const { data: profile, error: profileError } = await supabase
        .from("users")
        .select("role")
        .eq("id", user.id)
        .eq("role", data.role)
        .single();

    if(profileError || !profile){
        return { success: false, message: "Usuario No Encontrado"};
    }

}