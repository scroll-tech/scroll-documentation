import { aboutList, mediaList, resourceList } from "../helper.tsx"
import ScrollMarkSvg from "~/assets/svgs/scroll-mark.svg?react"
import styles from "./PureFooter.module.css"
import { t } from "i18next"

// scroll.io's plain footer (frontends LandingFooter): the mark and the name on one side, the
// link columns on the other, the copyright centred under them
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLayout}>
        <a className={styles.brand} href="/" aria-label="Scroll Docs home">
          <ScrollMarkSvg className={styles.mark} aria-hidden="true" />
          <span className={styles.tagline}>
            Scroll
            <br />
            Documentation
          </span>
        </a>
        <nav className={styles.column} aria-label={t("footer.aboutScroll.title")}>
          <p className={styles.title}>{t("footer.aboutScroll.title")}</p>
          <ul>
            {aboutList.map((item) => (
              <li key={item.name} className={styles.content}>
                <a href={item.href}>{t(item.name)}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className={styles.column} aria-label={t("footer.resources.title")}>
          <p className={styles.title}>{t("footer.resources.title")}</p>
          <ul>
            {resourceList.map((item) => (
              <li key={item.name} className={styles.content}>
                <a href={item.href}>{t(item.name)}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.follow}>
          <p className={styles.title}>{t("footer.followUs.title")}</p>
          <div className={styles.media}>
            {mediaList.map((item) => (
              <a href={item.href} key={item.name} target="_blank" rel="noopener noreferrer" aria-label={item.name}>
                {<item.icon />}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className={styles.legal}>© {new Date().getFullYear()} Scroll. All rights reserved.</p>
    </footer>
  )
}

export default Footer
