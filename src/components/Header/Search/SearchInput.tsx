import React, { ChangeEvent, useCallback, useEffect, useState } from "react"
import { useSearchBox } from "react-instantsearch-hooks-web"
import styles from "./SearchInput.module.css"
import useDebounce from "~/hooks/useDebounce"
import { clsx } from "~/lib"

export const SearchInput = ({ onClose }: { onClose: () => void }) => {
  const queryHook = useCallback((query, search) => {
    search(query)
  }, [])
  const searchBoxApi = useSearchBox({ queryHook })

  const [value, setValue] = useState("")
  const debouncedValue = useDebounce(value, 350)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    searchBoxApi.refine(debouncedValue)
  }, [debouncedValue])

  return (
    <div className={styles.wrapper}>
      <input
        className={clsx(styles.input, ".focus-visible")}
        onChange={handleChange}
        placeholder={
          window.matchMedia("(min-width: 50em)").matches
            ? "Search Scroll documentation..."
            : "Search Scroll docs..."
        }
        autoFocus
      />
      <button onClick={onClose} className={styles.closeButton}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="white" />
          <path d="M8 16L16 8" stroke="#555C6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16 16L8 8" stroke="#555C6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <button onClick={onClose} className={styles.closeButtonMobile}>
        Cancel
      </button>
    </div>
  )
}
