import { defineConfig } from "astro/config"
import preact from "@astrojs/preact"
import react from "@astrojs/react"
import { astroCallouts } from "./integrations/astro-callouts"
import { solidityRemixCode } from "./integrations/solidity-remix"
import { youtubeEmbed } from "./integrations/youtube-embed"
import mdx from "@astrojs/mdx"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeKatex from "rehype-katex"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"

import sitemap from "@astrojs/sitemap"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://docs.scroll.io",
  legacy: {
    astroFlavoredMarkdown: true,
  },
  integrations: [
    preact({
      compat: true,
    }),
    sitemap({
      changefreq: "daily",
    }),
    astroCallouts(),
    solidityRemixCode(),
    youtubeEmbed(),
    mdx(),
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      config: { applyBaseStyles: false },
    }),
  ],
  markdown: {
    drafts: true,
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "prepend",
        },
      ],
      [
        rehypeKatex,
        {
          macros: {
            "\\E": "\\mathbb{E}",
            "\\C": "\\mathbb{C}",
            "\\R": "\\mathbb{R}",
            "\\N": "\\mathbb{N}",
            "\\Q": "\\mathbb{Q}",
            "\\bigO": "\\mathcal{O}",
            "\\abs": "|#1|",
            "\\set": "\\{ #1 \\}",
            "\\indep": "{\\perp\\mkern-9.5mu\\perp}",
            "\\nindep": "{\\not\\!\\perp\\!\\!\\!\\perp}",
            "\\latex": "\\LaTeX",
            "\\katex": "\\KaTeX",
          },
        },
      ],
    ],
    syntaxHighlight: "prism",
    extendDefaultPlugins: true,
  },
})
