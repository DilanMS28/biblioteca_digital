import {z} from "zod";

export const RegisterUserSchema = z.object({
    name: z.string(),
    lastNames: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    role: z.enum(["student", "teacher", "admin"]),
})

export type RegisterUserSchema = z.infer<typeof RegisterUserSchema>;