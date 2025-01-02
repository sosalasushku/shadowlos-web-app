import { defineCollection, z } from 'astro:content';

const buttonSchema = z.object({
    text: z.string(),
    type: z.enum(['primary', 'secondary']).optional(),
    href: z.string().optional()
});

const stepSchema = z.object({
    content: z.string(),
    buttons: z.array(buttonSchema).optional()
});

const subvariantSchema = z.object({
    title: z.string(),
    steps: z.array(stepSchema)
});

const variantSchema = z.object({
    title: z.string(),
    subvariants: z.array(subvariantSchema).optional(),
    steps: z.array(stepSchema).optional()
}).refine(data => data.steps || data.subvariants, {
    message: "Either steps or subvariants must be provided"
});

const instructions = defineCollection({
    type: 'content',
    schema: z.object({
        platform: z.enum(['windows', 'macos', 'ios', 'android', 'linux', 'androidtv', 'appletv', 'yandextv']),
        mode: z.enum(['global', 'convenient', 'flexible']),
        variants: z.array(variantSchema).optional(),
        steps: z.array(stepSchema).optional()
    }).refine(data => data.steps || data.variants, {
        message: "Either steps or variants must be provided"
    })
});

export const collections = {
    instructions
};