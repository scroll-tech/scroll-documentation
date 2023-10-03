/** @jsxImportSource preact */
import { useStore } from "@nanostores/preact"
import type { FunctionalComponent } from "preact"
import { useState, useEffect, useRef } from "preact/hooks"
import { shouldUpdateToc } from "./tocStore"
import i18next, { t } from "i18next"

export interface Heading {
  depth: number
  text: string
  slug: string
}

const TableOfContents: FunctionalComponent<{
  headers: Heading[]
  clientSideToc: boolean
}> = ({ headers = [], clientSideToc = false }) => {
  // headers = [...headers].filter(({ depth }) => depth > 1 && depth < 4)
  const [headings, setHeadings] = useState([...headers].filter(({ depth }) => depth > 1 && depth < 4))
  const tableOfContents = useRef<HTMLUListElement>()
  const [currentID, setCurrentID] = useState("overview")
  const onThisPageID = "on-this-page-heading"
  const $shouldUpdateToc = useStore(shouldUpdateToc)

  useEffect(() => {
    if (!tableOfContents.current) return

    const setCurrent: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const { id } = entry.target
          if (id === onThisPageID) continue
          setCurrentID(entry.target.id)
          break
        }
      }
    }

    const observerOptions: IntersectionObserverInit = {
      // Negative top margin accounts for `scroll-margin`.
      // Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
      rootMargin: "-100px 0% -66%",
      threshold: 1,
    }

    const headingsObserver = new IntersectionObserver(setCurrent, observerOptions)

    // Observe all the headings in the main page content.
    document.querySelectorAll("article :is(h1,h2,h3)").forEach((h) => headingsObserver.observe(h))

    // Stop observing when the component is unmounted.
    return () => headingsObserver.disconnect()
  }, [tableOfContents.current, $shouldUpdateToc])

  useEffect(() => {
    if (!tableOfContents.current) return
    if (!clientSideToc) return
    refreshHeadings()
  }, [tableOfContents.current])

  useEffect(() => {
    if (!$shouldUpdateToc) return
    if (!window) return
    window.requestAnimationFrame(function () {
      refreshHeadings()
    })
  }, [$shouldUpdateToc])

  const refreshHeadings = () => {
    const headingList = []
    document.querySelectorAll("article :is(h2,h3)").forEach((heading: HTMLHeadingElement) => {
      if (!heading.id) return
      headingList.push({
        depth: heading.nodeName.charAt(1),
        text: heading.textContent,
        slug: heading.id,
      })
    })
    setHeadings(headingList)
  }

  return (
    <>
      <h2 className="heading">{t("rightSidebar.onThisPage")}</h2>
      <ul ref={tableOfContents}>
        {headings
          .filter(({ depth }) => depth > 1 && depth < 4)
          .map((header) => (
            <li className={`header-link depth-${header.depth} ${currentID === header.slug ? "active" : ""}`.trim()}>
              <a href={`#${header.slug}`}>{header.text}</a>
            </li>
          ))}
      </ul>
    </>
  )
}

export default TableOfContents
