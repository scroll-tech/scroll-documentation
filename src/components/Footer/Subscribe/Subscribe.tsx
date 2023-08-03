import { useState, useEffect } from "preact/hooks"
import MailchimpSubscribe from "react-mailchimp-subscribe"

import EmailInput from "./EmailInput.tsx"
import styles from "./Subscribe.module.css"

const url = "https://gmail.us14.list-manage.com/subscribe/post?u=3b1d822eb27b2fa64d82d430b&id=0b4603244e"

const isValidEmail = (email: string): boolean => {
  const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

export default function Subscribe() {
  const [email, setEmail] = useState("")
  const [customMessage, setCustomMessage] = useState("")
  const [emailValid, setEmailValid] = useState(false)

  useEffect(() => {
    setCustomMessage("")
    setEmailValid(isValidEmail(email))
  }, [email])

  const handleSubmit = (subscribe) => {
    if (!email) {
      setCustomMessage("Please insert your email.")
    } else if (!emailValid) {
      setCustomMessage("Please use a correct email address.")
    } else {
      subscribe({ EMAIL: email })
      setEmail("")
    }
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.subscribeBox}>
        <img className={styles.subscribeIcon} src="/images/footer/subscribe.svg" />
        <div className={styles.copyBox}>
          <div className={styles.subscribeTitle}>Stay up-to-date on the latest Scroll Developer news</div>
          <div className={styles.subscribeText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
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
                placeholder="your email address here"
                end={status === "success"}
              />
              {customMessage && <div className={styles.errorMessage}>{customMessage}</div>}
              {status === "error" && <div className={styles.errorMessage}>{message}</div>}
            </div>
          )}
        />
      </div>
    </div>
  )
}
