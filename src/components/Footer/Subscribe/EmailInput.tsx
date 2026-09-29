import React from "react"
import styles from "./EmailInput.module.css"
import ArrowSvg from "~/assets/svgs/footer/arrow-right.svg?react"
import { clsx } from "~/lib"
import { t } from "i18next"

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
        className={styles.mask}
        style={{
          ...(end && { width: "100%" }),
        }}
      >
        <button className={styles.iconButton} onClick={onClick} disabled={end} aria-label="Subscribe">
          <ArrowSvg></ArrowSvg>
        </button>
        <div className={styles.success}>{t("landing.NewsletterCTA.thankYouForSubscribing")}</div>
      </div>
      <input
        placeholder="your email address here"
        {...restProps}
        onKeyDown={handleEnter}
        className={clsx(styles.inputBase, "focus:outline-none")}
      ></input>
    </div>
  )
}

export default EmailInput
