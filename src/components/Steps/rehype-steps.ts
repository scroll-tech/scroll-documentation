import type { Element, Root } from "hast"
import { rehype } from "rehype"
import rehypeFormat from "rehype-format"
import type { VFile } from "vfile"

const prettyPrintProcessor = rehype().data("settings", { fragment: true }).use(rehypeFormat)
const prettyPrintHtml = (html: string) => prettyPrintProcessor.processSync({ value: html }).toString()

const stepsProcessor = rehype()
  .data("settings", { fragment: true })
  .use(function steps() {
    return (tree: Root, vfile: VFile) => {
      const rootElements = tree.children.filter((item): item is Element => item.type === "element")
      const [rootElement] = rootElements

      // Ensure `role="list"` is set on the ordered list.
      // We use `list-style: none` in the styles for this component and need to ensure the list
      // retains its semantics in Safari, which will remove them otherwise.
      rootElement.properties.role = "list"
      // Add the required CSS class name, preserving existing classes if present.
      if (!Array.isArray(rootElement.properties.className)) {
        rootElement.properties.className = ["sl-steps"]
      } else {
        rootElement.properties.className.push("sl-steps")
      }

      // Add the `start` attribute as a CSS custom property so we can use it as the starting index
      // of the steps custom counter.
      if (typeof rootElement.properties.start === "number") {
        const styles = [`--sl-steps-start: ${rootElement.properties.start - 1}`]
        if (rootElement.properties.style) styles.push(String(rootElement.properties.style))
        rootElement.properties.style = styles.join(";")
      }
    }
  })

/**
 * Process steps children: validates the HTML and adds `role="list"` to the ordered list.
 * @param html Inner HTML passed to the `<Steps>` component.
 */
export const processSteps = (html: string | undefined) => {
  const file = stepsProcessor.processSync({ value: html })
  return { html: file.toString() }
}
