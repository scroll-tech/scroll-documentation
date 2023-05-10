/** @jsxImportSource preact */

import "./NewsletterCTA.css"
import { NewsletterSignupForm } from "./NewsletterSignupForm"
import { t } from "i18next"

export type NewsletterCTAProps = {
  title?: string
}
export const NewsletterCTA = ({ title = t("landing.NewsletterCTA.title") }: NewsletterCTAProps) => {
  return (
    <section className="newsletter-cta">
      <h2 className="cta-subscribe-h1 heading-600">{title}</h2>
      <NewsletterSignupForm />
    </section>
  )
}
