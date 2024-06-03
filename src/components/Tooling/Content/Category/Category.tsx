import { useState, useEffect, useMemo } from "preact/hooks"
import { clsx } from "~/lib"
import styles from "./Category.module.css"

const Category = ({ categories, value, onChange }) => {
  return (
    <ul className={styles.toolsCategory}>
      {categories.map((category) => (
        <li
          className={clsx(styles.item, value.includes(category) ? styles.active : "")}
          onClick={() => onChange(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  )
}

export default Category
