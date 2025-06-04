import { useState, useEffect, useMemo } from "preact/hooks"
import { clsx } from "~/lib"
import styles from "./Category.module.css"

const Category = ({ categories, value, onChange }) => {
  return (
    <ul className={styles.toolsCategory}>
      {categories.map((category) => (
        <li
          className={clsx(
            styles.item,
            value.includes(category)
            ? "text-white bg-black border-white dark:text-black dark:bg-white  dark:border-black"
            : "border-black bg-[#ffffff] dark:bg-black dark:border-white-800",
          )}
          onClick={() => onChange(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  )
}

export default Category
