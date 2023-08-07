import React, { useState } from "react"
import styles from "./EmailInput.module.css"

const EmailInput = (props) => {
  const { end, onClick, onEnter, sx, ...restProps } = props

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
        <button className={styles.iconButton} onClick={onClick}>
          <img
            src="/images/footer/arrow-right.svg"
            alt="arrow-right"
          />
        </button>
        <div className={styles.success}>Thank you for subscribing!</div>
      </div>
      <input
        placeholder="your email address here"
        {...restProps}
        onKeyDown={handleEnter}
        className={styles.inputBase}

      ></input>
    </div>
  )
}

export default EmailInput
