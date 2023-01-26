import type { FunctionalComponent } from "preact"
import { h, Fragment } from "preact"
import { useState, useEffect } from "preact/hooks"
import styles from "./SidebarToggle.module.css"

const MenuToggle: FunctionalComponent = () => {
  const [sidebarShown, setSidebarShown] = useState(false)

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0]
    if (sidebarShown) {
      body.classList.add("mobile-sidebar-toggle")
    } else {
      body.classList.remove("mobile-sidebar-toggle")
    }
  }, [sidebarShown])

  return (
    <button
      type="button"
      aria-pressed={sidebarShown ? "true" : "false"}
      id="menu-toggle"
      className={styles.button}
      onClick={() => setSidebarShown(!sidebarShown)}
    >
      Menu
    </button>
  )
}

export default MenuToggle
