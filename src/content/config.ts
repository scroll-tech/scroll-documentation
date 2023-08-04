import { defineCollection, z } from "astro:content"

const docsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    layout: z.string().optional(),
    image: z
      .object({
        src: z.string().optional(),
        alt: z.string().optional(),
      })
      .optional(),
    dir: z.string().optional(),
    lang: z.string().optional(),
    ogLocale: z.string().optional(),
    section: z.string(),
    excerpt: z.string().optional(),
    stub: z.string().optional(),
    ecosystem: z.string().optional(),
    l2healthflag: z.string().optional(),

    metadata: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
        // image: z.array(z.string()).optional(),
      })
      .optional(),

    whatsnext: z.record(z.string()).optional(),
  }),
})

export const collections = {
  docs: docsCollection,
}
