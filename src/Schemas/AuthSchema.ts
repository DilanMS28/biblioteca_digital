import {z} from "zod";

export const RegisterUserType = z.object({
    name: z.string(),
    lastNames: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    role: z.enum(["student", "teacher", "admin"]),
})

export const SignInUserType = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    role: z.enum(["student", "teacher", "admin"]),
})

export type RegisterUserType = z.infer<typeof RegisterUserType>;
export type SignInUserType = z.infer<typeof SignInUserType>;