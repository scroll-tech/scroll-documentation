import React, { ChangeEvent, useCallback, useEffect, useState, useRef } from "react"
import styles from "./SearchInput.module.css"
import { clsx } from "~/lib"

const SearchInput = ({ value, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className={clsx(styles.wrapper, "bg-pure-white")}>
      <input
        className={clsx(
          styles.input,
          ".focus-visible",
          "dark:text-white",
          "dark:border-white",
          "dark:!bg-[url(/assets/search-white.svg)]"
        )}
        onChange={onChange}
        ref={inputRef}
      />
    </div>
  )
}

export default SearchInput
