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
        )}
        onChange={onChange}
        ref={inputRef}
      />
    </div>
  )
}

export default SearchInput
