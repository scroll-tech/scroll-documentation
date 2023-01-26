/**
 * Astro's implementation of callouts
 * https://github.com/withastro/docs/blob/main/integrations/astro-asides.ts
 */

import type { AstroIntegration } from "astro"
import type * as mdast from "mdast"
import type * as unified from "unified"
import { h } from "hastscript"
import remarkDirective from "remark-directive"
import { visit } from "unist-util-visit"
import { remove } from "unist-util-remove"

const CodeSampleTagName = "AutoImportedCodeSample"

/**
 * remark plugin that converts blocks delimited with `:::` into instances of
 * the `<CodeSample>` component. Depends on the `remark-directive` module for the
 * core parsing logic.
 *
 * For example, this Markdown
 *
 * ```md
 * ::solidity-remix[/samples/PriceFeeds/PriceConsumerV3.sol]
 * ```
 *
 * will produce this output
 *
 * ```astro
 * <CodeSample lang="solidity" src="/samples/PriceFeeds/PriceConsumerV3.sol" />
 * ```
 */
function remarkSolidityRemix(): unified.Plugin<[], mdast.Root> {
  const transformer: unified.Transformer<mdast.Root> = (tree) => {
    visit(tree, (node) => {
      if (node.type !== "leafDirective") return
      const type = node.name
      if (type !== "solidity-remix") return
      if (node.children.length !== 1) throw Error("solidityRemix leafDirective can only have 1 child")

      // remark-directive converts a container’s “label” to a paragraph in
      // its children, but we want to pass it as the src prop to <CodeSample>, so
      // we iterate over the children, find a directive label, store it for the
      // src prop, and remove the paragraph from children.
      let src: string | undefined
      remove(node, (child) => {
        if (child.type === "text") {
          src = child.value
          return true
        }
      })

      if (!src) throw Error("No source was provided for the solidity example")

      const data = node.data || (node.data = {})
      data.hName = CodeSampleTagName
      data.hProperties = h(CodeSampleTagName, {
        lang: "solidity",
        src,
      }).properties
    })
  }

  return function attacher() {
    return transformer
  }
}

/**
 * Astro integration that sets up the remark plugin and auto-imports the `<Aside>` component everywhere.
 */
export function solidityRemixCode(): AstroIntegration {
  return {
    name: "@smart-contract/solidity-remix",
    hooks: {
      "astro:config:setup": ({ injectScript, updateConfig }) => {
        updateConfig({
          markdown: {
            remarkPlugins: [remarkDirective, remarkSolidityRemix()],
          },
        })

        // Auto-import the Aside component and attach it to the global scope
        injectScript(
          "page-ssr",
          `import ${CodeSampleTagName} from "~/components/CodeSample/CodeSample.astro"; global.${CodeSampleTagName} = ${CodeSampleTagName};`
        )
      },
    },
  }
}
