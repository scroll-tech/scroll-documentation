import React, { useState, useEffect, useCallback } from "react"
import styles from "./index.module.css"

import { useKeyPress } from "~/hooks/useKeyPress"
import { SearchModal } from "../Header/Search/SearchModal"

export default function Search() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const body = document.body
    if (isOpen) {
      body.classList.add("mobile-sidebar-toggle")
    } else {
      body.classList.remove("mobile-sidebar-toggle")
    }
  }, [isOpen])

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

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
      <div onClick={onOpen} className={styles.searchInput}>
        <img src="/svgs/search.svg"></img>
      </div>
      {isOpen && <SearchModal size="large" isOpen={isOpen} onClose={onClose} />}
    </div>
  )
}
