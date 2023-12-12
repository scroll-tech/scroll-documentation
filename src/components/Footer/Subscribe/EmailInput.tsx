import React from "react"
import styles from "./EmailInput.module.css"
import ArrowSvg from "~/assets/svgs/footer/arrow-right.svg?react"
import { clsx } from "~/lib"

const EmailInput = (props) => {
  const { end, onClick, onEnter, ...restProps } = props

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      onEnter()
    }
  }

  return (
    <div className={styles.container}>
      <div
        className={clsx(styles.mask, "dark:bg-white")}
        style={{
          ...(end && { width: "100%" }),
        }}
      >
        <button className={clsx(styles.iconButton, "dark:text-black")} onClick={onClick} disabled={end}>
          <ArrowSvg></ArrowSvg>
        </button>
        <div className={clsx(styles.success, "dark:text-black", "dark:bg-white")}>Thank you for subscribing!</div>
      </div>
      <input
        placeholder="your email address here"
        {...restProps}
        onKeyDown={handleEnter}
        className={clsx(
          styles.inputBase,
          "dark:text-white",
          "dark:bg-black",
          "dark:border-white",
          "placeholder:text-[#dcdcdc]",
          "placeholder:dark:text-[#FFF8F366]",
          "focus:outline-none"
        )}
      ></input>
    </div>
  )
}

export default EmailInput
