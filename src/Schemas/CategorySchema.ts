import { z } from "zod";

//schemas de zod
export const DraftCategorySchema = z.object({
    name: z.string(),
    description: z.string()
})

//exportar los types
export type DraftCategoryType = z.infer<typeof DraftCategorySchema>;