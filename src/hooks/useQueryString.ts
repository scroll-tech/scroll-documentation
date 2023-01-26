import { useState, useCallback } from "preact/hooks"
import qs from "query-string"

const setQueryStringWithoutPageReload = (qsValue) => {
  if (!window) return

  const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + qsValue

  window.history.pushState({ path: newurl }, "", newurl)
}
const setQueryStringValue = (key, value, queryString = window.location.search) => {
  if (!window) return

  const values = qs.parse(queryString)
  const newQsValue = qs.stringify({ ...values, [key]: value })
  setQueryStringWithoutPageReload(`?${newQsValue}`)
}
const getQueryStringValue = (key) => {
  if (typeof window === "undefined") return
  const values = qs.parse(window.location.search)
  return values[key]
}
function useQueryString(key, initialValue) {
  const [value, setValue] = useState(getQueryStringValue(key) || initialValue)
  const onSetValue = useCallback(
    (newValue) => {
      setValue(newValue)
      setQueryStringValue(key, newValue)
    },
    [key]
  )

  return [value, onSetValue]
}

export default useQueryString
