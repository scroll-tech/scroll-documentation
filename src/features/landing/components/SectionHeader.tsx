import React, { useState, useCallback } from "react"
import styles from  "./SectionHeader.module.css"


const SectionHeader = (props) => {
  const { dark, title, description, ...rest } = props
  return (
    <div>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default SectionHeader
