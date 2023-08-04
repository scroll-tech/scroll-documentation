import { defineCollection, z } from "astro:content"

const docsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    section: z.string(),
    // whatsnext: z.string().transform((str) => JSON.parse(str)).optional(),
  }),
})

export const collections = {
  docs: docsCollection,
}
