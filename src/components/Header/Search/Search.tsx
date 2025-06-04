import React, { useState, useCallback, useEffect } from "react"
import styles from "./Search.module.css"

import { useKeyPress } from "~/hooks/useKeyPress"
import { SearchModal } from "./SearchModal"
import { clsx } from "~/lib"

export default function Search() {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  useEffect(() => {
    const body = document.body
    if (isOpen) {
      body.classList.add("global-search-toggle")
      if (window.matchMedia("(max-width: 50em)").matches) {
        document.querySelector("#themeModeToggle").style.right = "-43px"
      }
    } else {
      body.classList.remove("global-search-toggle")
      if (window.matchMedia("(max-width: 50em)").matches) {
        document.querySelector("#themeModeToggle").style.right = 0
      }
    }
  }, [isOpen])

  const onClose = useCallback(() => {
    setTimeout(() => {
      setIsOpen(false)
    }, 200)
  }, [setIsOpen])

  useKeyPress("/", {
    onDown: () => {
      if (!isOpen) setIsOpen(true)
    },
  })

  return (
    <div className={styles.container}>
      <div
        onClick={onOpen}
        className={clsx(
          styles.searchInput,
          "dark:bg-dark-normal",
          "dark:text-white-800",
          "hover:dark:text-white-800",
          "focus:dark:text-white-800"
        )}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 6.66199C0 2.98506 2.97711 0 6.65591 0C10.3338 0 13.3179 2.98413 13.3179 6.66199C13.3179 8.24418 12.7664 9.70161 11.8426 10.8447L15.7948 14.8024C16.0687 15.0766 16.0684 15.5209 15.7941 15.7948C15.5199 16.0687 15.0756 16.0684 14.8017 15.7941L10.3802 11.3665C10.1064 11.0924 10.1066 10.6483 10.3805 10.3744C11.3299 9.42503 11.9144 8.11169 11.9144 6.66199C11.9144 3.75926 9.55863 1.40351 6.65591 1.40351C3.75412 1.40351 1.40351 3.75833 1.40351 6.66199C1.40351 9.56471 3.75926 11.9205 6.66199 11.9205C7.0142 11.9205 7.36472 11.8831 7.70244 11.8177C8.08295 11.7441 8.45111 11.9928 8.52476 12.3733C8.5984 12.7538 8.34964 13.122 7.96914 13.1956C7.55271 13.2762 7.11259 13.324 6.66199 13.324C2.98413 13.324 0 10.3398 0 6.66199Z"
            fill="currentColor"
          />
        </svg>
      </div>
      {isOpen ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className={clsx(styles.closeButtonMobile, "dark:border-black dark:bg-black")}
            onClick={onClose}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.731 1.56775C18.0897 1.20911 18.0897 0.627628 17.731 0.268984C17.3724 -0.0896612 16.7909 -0.0896612 16.4322 0.268984L9 7.70123L1.56775 0.268984C1.20911 -0.0896612 0.627629 -0.0896612 0.268984 0.268984C-0.089661 0.627628 -0.089661 1.20911 0.268984 1.56775L7.70123 9L0.268984 16.4323C-0.0896612 16.7909 -0.0896612 17.3724 0.268984 17.731C0.627628 18.0897 1.20911 18.0897 1.56775 17.731L17.731 1.56775ZM12.0065 10.7078C11.6479 10.3491 11.0664 10.3491 10.7078 10.7078C10.3491 11.0664 10.3491 11.6479 10.7078 12.0065L16.4323 17.731C16.7909 18.0897 17.3724 18.0897 17.731 17.731C18.0897 17.3724 18.0897 16.7909 17.731 16.4322L12.0065 10.7078Z"
              fill="currentColor"
            />
          </svg>
          <SearchModal isOpen={isOpen} onClose={onClose} />
        </>
      ) : (
        <button onClick={onOpen} className={styles.searchInputMobile}>
          <span className="inline-block w-[22px] h-[22px] bg-[url(/assets/search.svg)] dark:bg-[url(/assets/search-white.svg)] bg-contain bg-no-repeat bg-center"></span>
        </button>
      )}
    </div>
  )
}
