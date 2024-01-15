// import React from "react"
import { useState, useEffect } from "preact/hooks"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import SubscribeSvg from "~/assets/svgs/footer/subscribe.svg?react"
import { clsx } from "~/lib"
import i18next, { changeLanguage, t } from "i18next"

import EmailInput from "./EmailInput.tsx"
import styles from "./Subscribe.module.css"

const url = "https://gmail.us14.list-manage.com/subscribe/post?u=3b1d822eb27b2fa64d82d430b&id=0b4603244e"

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

export default function Subscribe(props) {
  const [email, setEmail] = useState("")
  const [customMessage, setCustomMessage] = useState("")
  const [emailValid, setEmailValid] = useState(false)

  i18next.changeLanguage(props.lang)

  useEffect(() => {
    setCustomMessage("")
    setEmailValid(isValidEmail(email))
  }, [email])

  const handleSubmit = (subscribe) => {
    if (!email) {
      setCustomMessage(t("landing.NewsletterCTA.pleaseInsertEmail"))
    } else if (!emailValid) {
      setCustomMessage(t("landing.NewsletterCTA.correctEmail"))
    } else {
      subscribe({ EMAIL: email })
      setEmail("")
    }
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className={clsx(styles.container, "dark:bg-dark-highlight")}>
      <div className={styles.subscribeBox}>
        <span className="text-white dark:text-black bg-black dark:bg-white rounded-[50%]">
          <SubscribeSvg></SubscribeSvg>
        </span>

        <div className={styles.copyBox}>
          <div className={styles.subscribeTitle}>{ t("landing.NewsletterCTA.title") }</div>
          <div className={styles.subscribeText}>
          { t("landing.NewsletterCTA.text") }
          </div>
        </div>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }: any) => (
            <div className={styles.emailBox}>
              <EmailInput
                className={styles.emailInput}
                value={email}
                onChange={handleChangeEmail}
                onClick={() => handleSubmit(subscribe)}
                onEnter={() => handleSubmit(subscribe)}
                placeholder= { t("landing.NewsletterCTA.placeholder") }
                end={status === "success"}
              />
              {customMessage && <div className={styles.errorMessage}>{customMessage}</div>}
              {status === "error" && <div className={styles.errorMessage}>{t(message)}</div>}
            </div>
          )}
        />
      </div>
    </div>
  )
}
