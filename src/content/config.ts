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
    widerContent: z.boolean().optional(),

    metadata: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
        image: z.array(z.string()).optional(),
      })
      .optional(),

    whatsnext: z.record(z.string()).optional(),
  }),
})

const toolsCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    excerpt: z.string(),
    category: z.array(z.string()),
    // network: z.string().optional(),
    network: z.array(z.string()).optional(),
    logo: z
      .object({
        src: z.string().optional(),
        alt: z.string().optional(),
      })
      .optional(),
    website: z.string().optional(),
    noAdditionalInfo: z.boolean().optional(),
  }),
})

export const collections = {
  docs: docsCollection,
  tools: toolsCollection,
}
