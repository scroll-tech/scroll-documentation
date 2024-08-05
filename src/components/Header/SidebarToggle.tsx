import type { FunctionalComponent } from "preact"
import { h, Fragment } from "preact"
import { useState, useEffect } from "preact/hooks"
import styles from "./SidebarToggle.module.css"
import { clsx } from "~/lib"

const MenuToggle: FunctionalComponent<{ dark: boolean }> = ({ dark }) => {
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
      className={clsx(styles.button, "text-black", dark && "text-white", "dark:text-white-800")}
      onClick={() => setSidebarShown(!sidebarShown)}
    >
      {sidebarShown ? (
        <svg
          style="margin-left: 5px"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.731 1.56775C18.0897 1.20911 18.0897 0.627628 17.731 0.268984C17.3724 -0.0896612 16.7909 -0.0896612 16.4322 0.268984L9 7.70123L1.56775 0.268984C1.20911 -0.0896612 0.627629 -0.0896612 0.268984 0.268984C-0.089661 0.627628 -0.089661 1.20911 0.268984 1.56775L7.70123 9L0.268984 16.4323C-0.0896612 16.7909 -0.0896612 17.3724 0.268984 17.731C0.627628 18.0897 1.20911 18.0897 1.56775 17.731L17.731 1.56775ZM12.0065 10.7078C11.6479 10.3491 11.0664 10.3491 10.7078 10.7078C10.3491 11.0664 10.3491 11.6479 10.7078 12.0065L16.4323 17.731C16.7909 18.0897 17.3724 18.0897 17.731 17.731C18.0897 17.3724 18.0897 16.7909 17.731 16.4322L12.0065 10.7078Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="15" viewBox="0 0 23 15" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0.872093C0 0.390449 0.373096 0 0.833333 0H22.1667C22.6269 0 23 0.390449 23 0.872093C23 1.35374 22.6269 1.74419 22.1667 1.74419H0.833333C0.373096 1.74419 0 1.35374 0 0.872093ZM0 7.50611C0 7.02446 0.373096 6.63402 0.833333 6.63402H22.1667C22.6269 6.63402 23 7.02446 23 7.50611C23 7.98775 22.6269 8.3782 22.1667 8.3782H0.833333C0.373096 8.3782 0 7.98775 0 7.50611ZM0 14.1279C0 13.6463 0.373096 13.2558 0.833333 13.2558H22.1667C22.6269 13.2558 23 13.6463 23 14.1279C23 14.6095 22.6269 15 22.1667 15H0.833333C0.373096 15 0 14.6095 0 14.1279Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  )
}

export default MenuToggle
