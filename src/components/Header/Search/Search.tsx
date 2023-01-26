import React, { useState, useCallback } from "react"
import styles from "./Search.module.css"

import { useKeyPress } from "~/hooks/useKeyPress"
import { SearchModal } from "./SearchModal"

export default function Search() {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  useKeyPress("/", {
    onDown: () => {
      if (!isOpen) setIsOpen(true)
    },
  })

  return (
    <>
      <button onClick={onOpen} className={styles.searchInput}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 23.25C18.2132 23.25 23.25 18.2132 23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.125 15.5C13.5412 15.5 15.5 13.5412 15.5 11.125C15.5 8.70875 13.5412 6.75 11.125 6.75C8.70875 6.75 6.75 8.70875 6.75 11.125C6.75 13.5412 8.70875 15.5 11.125 15.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.219 14.218L17.25 17.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_514_6208">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <span>Search...</span>
      </button>
      <button onClick={onOpen} className={styles.searchInputMobile}>
        <img src="/assets/search.svg" alt="search" aria-label="Search" width={16} height={16} />
      </button>

      <SearchModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
