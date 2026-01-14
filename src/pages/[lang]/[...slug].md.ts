import type { APIRoute, GetStaticPaths } from "astro"
import { getCollection } from "astro:content"
import i18next from "i18next"
import fs from "node:fs"
import path from "node:path"

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getCollection("docs")
  const languages = i18next.languages

  const allSlugs = new Set(
    pages.map((page) => {
      const [, ...slug] = page.slug.split("/")
      return slug.join("/")
    })
  )

  const allPaths = []
  for (const slug of allSlugs) {
    for (const lang of languages) {
      allPaths.push({ params: { lang, slug: slug || undefined } })
    }
  }

  const paths = allPaths.map((pathItem) => {
    let page = pages.find((page) => {
      const [pageLang, ...pageSlug] = page.slug.split("/")
      return pageLang === pathItem.params.lang && pageSlug.join("/") === pathItem.params.slug
    })
    if (!page) {
      // Fallback to English if translation doesn't exist
      page = pages.find((page) => {
        const [pageLang, ...pageSlug] = page.slug.split("/")
        return pageLang === "en" && pageSlug.join("/") === pathItem.params.slug
      })
    }
    return { params: pathItem.params, props: { page } }
  })

  return paths
}

export const GET: APIRoute = async ({ props }) => {
  const { page } = props

  if (!page) {
    return new Response("Not found", { status: 404 })
  }

  try {
    // Construct the file path
    const contentDir = path.join(process.cwd(), "src/content/docs")

    // Try .mdx first, then .md, then index.mdx/index.md inside folder
    let filePath = path.join(contentDir, `${page.slug}.mdx`)
    if (!fs.existsSync(filePath)) {
      filePath = path.join(contentDir, `${page.slug}.md`)
    }
    if (!fs.existsSync(filePath)) {
      filePath = path.join(contentDir, page.slug, "index.mdx")
    }
    if (!fs.existsSync(filePath)) {
      filePath = path.join(contentDir, page.slug, "index.md")
    }

    if (!fs.existsSync(filePath)) {
      return new Response("File not found", { status: 404 })
    }

    const content = fs.readFileSync(filePath, "utf-8")

    return new Response(content, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    })
  } catch (error) {
    console.error("Error reading markdown file:", error)
    return new Response("Internal server error", { status: 500 })
  }
}
