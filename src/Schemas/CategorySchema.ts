import { z } from "zod";

//schemas de zod
export const DraftCategorySchema = z.object({
    name: z.string(),
    description: z.string()
})

export const CategorySchem = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    created_at: z.string(),
})

//exportar los types
export type DraftCategoryType = z.infer<typeof DraftCategorySchema>;
export type CategoryType = z.infer<typeof CategorySchem>;