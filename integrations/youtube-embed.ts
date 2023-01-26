/**
 * Add Youtube import to MD pages.
 * Remove when astro supports 3rd party integration officially.
 */

import type { AstroIntegration } from "astro"

const CodeSampleTagName = "YouTube"
/**
 * Astro integration that sets up the remark plugin and auto-imports the `<Aside>` component everywhere.
 */
export function youtubeEmbed(): AstroIntegration {
  return {
    name: "@smart-contract/youtube-embed",
    hooks: {
      "astro:config:setup": ({ injectScript }) => {
        // Auto-import the Aside component and attach it to the global scope
        injectScript(
          "page-ssr",
          `import {${CodeSampleTagName}} from "@astro-community/astro-embed-youtube"; global.${CodeSampleTagName} = ${CodeSampleTagName};`
        )
      },
    },
  }
}
