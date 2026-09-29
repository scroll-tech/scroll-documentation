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
      // the blog's code panel (frontends blog.module.css) in light mode, a warm near-black in
      // dark mode; the site switches themes with the `dark` class on <html>, not the media query
      themes: ["github-light", "github-dark"],
      useDarkModeMediaQuery: false,
      themeCssSelector: (theme) => (theme.type === "dark" ? ".dark" : false),
      defaultProps: {
        frame: "code",
      },
      styleOverrides: {
        borderRadius: "12px",
        borderWidth: "1px",
        borderColor: ({ theme }) => (theme.type === "dark" ? "#211F1D" : "#EFEBE6"),
        codeBackground: ({ theme }) => (theme.type === "dark" ? "#141312" : "#FAF9F8"),
        codeFontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
        codeFontSize: "13.5px",
        codeLineHeight: "1.65",
        uiFontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        frames: {
          shadowColor: "transparent",
          editorTabBorderRadius: "0.5rem",
          editorBackground: ({ theme }) => (theme.type === "dark" ? "#141312" : "#FAF9F8"),
          editorTabBarBackground: ({ theme }) => (theme.type === "dark" ? "#1B1A18" : "#F4F2F0"),
          editorActiveTabBackground: ({ theme }) => (theme.type === "dark" ? "#141312" : "#FAF9F8"),
          editorActiveTabIndicatorTopColor: "transparent",
          editorActiveTabIndicatorBottomColor: "transparent",
          editorTabBarBorderBottomColor: ({ theme }) => (theme.type === "dark" ? "#211F1D" : "#EFEBE6"),
          terminalBackground: ({ theme }) => (theme.type === "dark" ? "#141312" : "#FAF9F8"),
          terminalTitlebarBackground: ({ theme }) => (theme.type === "dark" ? "#1B1A18" : "#F4F2F0"),
          terminalTitlebarBorderBottomColor: ({ theme }) => (theme.type === "dark" ? "#211F1D" : "#EFEBE6"),
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
      [rehypeMermaid, { strategy: "pre-mermaid" }],
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
