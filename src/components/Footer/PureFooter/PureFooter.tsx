import { useState, useEffect } from "preact/hooks"
import { aboutList, mediaList, resourceList } from "../helper.tsx"
import styles from "./PureFooter.module.css"
import { t } from "i18next"

const Footer = () => {
  return (
    <div className={styles.footerLayout}>
      <a className={styles.logo} href="/">
        <img src="/scroll-white.svg" style={{ width: "80px" }} />
      </a>
      <div className={styles.about}>
        <p className={styles.title}>{ t("footer.aboutScroll.title") }</p>
        <ul>
          {aboutList.map((item) => (
            <li key={item.name} className={styles.content}>
              <a href={item.href}>{t(item.name)}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.resource}>
        <p className={styles.title}>{ t("footer.resources.title") }</p>
        <ul>
          {resourceList.map((item) => (
            <li key={item.name} className={styles.content}>
              <a href={item.href}>{t(item.name)}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.follow}>
        <p className={styles.title}>{ t("footer.followUs.title") }</p>
        <div>
          {mediaList.map((item) => (
            <a external href={item.href} key={item.name} target="_blank">
              {<item.icon />}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
