import { z } from "zod";

// Schema untuk entitas Products
export const khodamSchema = z.object({
	name: z.string(),
    description: z.string()
});

export type typeKhodam = z.infer<typeof khodamSchema>
