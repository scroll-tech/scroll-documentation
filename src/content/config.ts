import { defineCollection, z } from "astro:content"

const docsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    section: z.string(),
  }),
})

export const collections = {
  docs: docsCollection,
}
