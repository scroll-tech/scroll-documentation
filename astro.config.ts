import { defineConfig } from "astro/config"
import preact from "@astrojs/preact"
import react from "@astrojs/react"
import svgr from "vite-plugin-svgr"
import astroI18next from "astro-i18next"
import { astroCallouts, asideAutoImport } from "./integrations/astro-callouts"
import { solidityRemixCode, codeSampleAutoImport } from "./integrations/solidity-remix"
import mdx from "@astrojs/mdx"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeKatex from "rehype-katex"
import rehypeMermaid from "rehype-mermaidjs"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import AutoImport from "astro-auto-import"

import sitemap from "@astrojs/sitemap"

import tailwind from "@astrojs/tailwind"

import expressiveCode from "astro-expressive-code"

// https://astro.build/config
export default defineConfig({
  site: "https://docs.scroll.io",
  scopedStyleStrategy: "where",
  legacy: {
    astroFlavoredMarkdown: true,
  },
  integrations: [
    AutoImport({
      imports: [asideAutoImport, codeSampleAutoImport],
    }),
    preact({
      compat: true,
    }),

    sitemap({
      changefreq: "daily",
    }),
    astroCallouts(),
    solidityRemixCode(),
    expressiveCode({
      themes: ["dark-plus"],
      defaultProps: {
        frame: "code",
      },
      styleOverrides: {
        borderRadius: "27px",
        borderColor: "transparent",
        frames: {
          shadowColor: "transparent",
          editorTabBorderRadius: "0.5rem",
          editorBackground: "#2b2b2b",
        },
      },
    }),
    mdx(),
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),

    astroI18next(),
  ],
  vite: {
    plugins: [svgr()],
  },
  markdown: {
    drafts: true,
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeMermaid, { strategy: "img-png" }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {},
          content: {
            type: "element",
            tagName: "span",
            properties: { className: ["icon", "icon-link"] },
            children: [],
          },
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
