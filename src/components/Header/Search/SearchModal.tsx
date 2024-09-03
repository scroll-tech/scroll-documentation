import * as CONFIG from "@config"
import React from "react"
import styles from "./Search.module.css"
import algoliasearch from "algoliasearch/lite"

import { InstantSearch, useInstantSearch, useHits, UseHitsProps } from "react-instantsearch-hooks-web"

import { SearchInput } from "./SearchInput"
import { clsx } from "~/lib"

const searchClient = algoliasearch(CONFIG.ALGOLIA.appId, CONFIG.ALGOLIA.publicApiKey)

const recommendedArticles = [
  {
    title: "User Guide",
    url: "/en/user-guide",
  },
  {
    title: "Developer Quickstart",
    url: "/en/developers/developer-quickstart",
  },
  {
    title: "Sepolia Testnet Contracts",
    url: "/en/developers/scroll-contracts",
  },
  {
    title: "Architecture Overview",
    url: "/en/technology",
  },
]

function EmptyQueryBoundary({ children, size, fallback }) {
  const { indexUiState } = useInstantSearch()

  const recentArticles = JSON.parse(localStorage.getItem("recentArticles") || "[]")

  console.log(indexUiState, "indexUiState")
  if (!indexUiState.query) {
    return (
      <div className={clsx(styles.queryResults, styles[size])}>
        <div>
          <h6 style={{ paddingLeft: "var(--space-2x)", marginBottom: "1rem" }}>Recommended articles</h6>
          <div className={styles.hitWrapper}>
            <ul className={styles.hitList}>
              {recommendedArticles.map((article) => (
                <li style={{ borderRadius: "var(--border-radius-primary)" }}>
                  <a
                    style={{ padding: "var(--space-1x) var(--space-2x)" }}
                    href={article.url}
                    className={clsx(styles.hit, "paragraph-200", "recommended-match-hit", "dark:text-white-800")}
                  >
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          {!!recentArticles.length && (
            <>
              <h6 style={{ paddingLeft: "var(--space-2x)", marginBottom: "1rem" }}>Recently viewed</h6>
              <div className={styles.hitWrapper}>
                <ul className={styles.hitList}>
                  {recentArticles.map((article) => (
                    <li style={{ borderRadius: "var(--border-radius-primary)" }}>
                      <a
                        style={{ padding: "var(--space-1x) var(--space-2x)" }}
                        href={article.url}
                        className={clsx(styles.hit, "paragraph-200", "recently-viewed-match-hit", "dark:text-white-800")}
                      >
                        {article.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }

  return children
}

function NoResultsBoundary({ children }) {
  const { results } = useInstantSearch()

  // The `__isArtificial` flag makes sure to not display the No Results message
  // when no hits have been returned yet.
  if (!results.__isArtificial && results.nbHits === 0) {
    return (
      <>
        <div className={styles.noQueryFallback}>
          <div>
            <h4>No results found</h4>
            <div>We couldn't find anything matching your search. Try again with a different term.</div>
          </div>
        </div>
        <div hidden>{children}</div>
      </>
    )
  }

  return children
}
function CustomHits({ title, hitClassName, ...props }: UseHitsProps & { title: string; hitClassName?: string }) {
  const { hits, results } = useHits(props)

  console.log(hits, "hits")
  if (hits.length === 0) return null
  return (
    <div>
      <h6 style={{ paddingLeft: "var(--space-2x)" }}>{title}</h6>
      <div className={styles.hitWrapper}>
        <ul className={styles.hitList}>
          {hits.map((hit: any) => (
            <li style={{ borderRadius: "var(--border-radius-primary)" }}>
              <a
                // style={{ padding: "var(--space-1x) var(--space-2x)" }}
                href={hit.url}
                className={clsx(styles.hit, hitClassName, "paragraph-200 dark:text-white-800")}
                dangerouslySetInnerHTML={{
                  __html: hit._highlightResult.title.value,
                }}
              ></a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

enum Size {
  Mini = "mini", // default
  Large = "large",
}

export function SearchModal({ size = "mini", isOpen, onClose }: { size: Size; isOpen: boolean; onClose: () => void }) {
  const getIndexName = () => {
    if (typeof window === "undefined") return
    const host = window.location.hostname
    if (host === "docs.scroll.io" || host === "docs.scroll.xyz") return CONFIG.ALGOLIA.productionIndexName
    return CONFIG.ALGOLIA.testIndexName
  }

  return (
    <div
      id={styles.searchModal}
      className={clsx(
        styles[size],
        "bg-pure-white",
        size === "mini" ? "dark:bg-black lg:dark:!bg-dark-normal" : "dark:bg-dark-normal"
      )}
    >
      <InstantSearch indexName={getIndexName()} searchClient={searchClient}>
        <SearchInput size={size} onClose={onClose} />
        <div className={styles.resultsWrapper}>
          <EmptyQueryBoundary fallback={null} size={size}>
            <NoResultsBoundary>
              <div className={clsx(styles.queryResults, styles[size])}>
                <CustomHits
                  title="Title Matches"
                  escapeHTML={false}
                  transformItems={(items) => {
                    return items.filter(
                      (item) =>
                        // @ts-expect-error title is not an array
                        item._highlightResult.title.matchLevel !== "none"
                    )
                  }}
                  hitClassName="title-match-hit"
                />
                <CustomHits title="Content Matches" hitClassName="content-match-hit" />
              </div>
            </NoResultsBoundary>
          </EmptyQueryBoundary>
        </div>
      </InstantSearch>
    </div>
  )
}
