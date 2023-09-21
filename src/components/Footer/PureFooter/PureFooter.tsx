import { useState, useEffect } from "preact/hooks"
import { aboutList, mediaList, resourceList } from "../helper.tsx"
import styles from "./PureFooter.module.css"

const Footer = () => {
  return (
    <div className={styles.footerLayout}>
      <a className={styles.logo} href="/">
        <img src="/scroll-white.svg" style={{ width: "80px" }} />
      </a>
      <div className={styles.about}>
        <p className={styles.title}>About Scroll</p>
        <ul>
          {aboutList.map((item) => (
            <li key={item.name} className={styles.content}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.resource}>
        <p className={styles.title}>Resources</p>
        <ul>
          {resourceList.map((item) => (
            <li key={item.name} className={styles.content}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.follow}>
        <p className={styles.title}>Follow Us</p>
        <div>
          {mediaList.map((item) => (
            <a external href={item.href} key={item.name} target="_blank">
              {<item.icon />}
            </a>
          ))}
        </div>
      </div>

      <p className={styles.version}>© Version 1.0.0 Scroll Ltd 2023</p>
    </div>
  )
}

export default Footer
