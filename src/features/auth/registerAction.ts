"use server";
import { RegisterUserType } from "@/Schemas/AuthSchema";
import { createClient } from "@/lib/supabase/server";

export async function registerAction(formData: RegisterUserType) {
    const data = RegisterUserType.parse({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        lastNames: formData.lastNames,
        role: "student",
    })

    const supabase = await createClient();


    const { data: signUpData, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password
    });

    if (error) {
        return { success: false, message: error.message || "Ocurrió un Problema al Registrar el Usuario" };
    }

    if (signUpData.user) {
        await supabase
            .from("users")
            .insert({
                id: signUpData.user.id,
                name: data.name,
                lastnames: data.lastNames,
                role: data.role
            })
    }

}