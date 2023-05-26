/** @jsxImportSource preact */

import { useState } from "preact/hooks"
import "./NewsletterCTA.css"
import button from "../../styles/design-system/button.module.css"
import { clsx } from "~/lib"
import jsonp from "jsonp"
import toQueryString from "to-querystring"
import { t } from "i18next"

const TAG_1 = "Developers"
const TAG_2 = "Developer Docs"

const NEWSLETTER_URL =
  "https://gmail.us14.list-manage.com/subscribe/post-json?u=3b1d822eb27b2fa64d82d430b&id=0b4603244e"

export const NewsletterSignupForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  function onSubmit(e) {
    e.preventDefault()
    const email = new FormData(e.target).get("Email")
    setIsLoading(true)
    const params = toQueryString({
      EMAIL: email,
    })
    const url = NEWSLETTER_URL + "&" + params
    jsonp(
      url,
      {
        param: "c",
      },
      (err, data) => {
        if (err) {
          setIsError(true)
        } else if (data.result !== "success") {
          setIsError(true)
        } else {
          setIsSuccess(true)
        }
        setIsLoading(false)
      }
    )
  }

  return (
    <>
      {!isSuccess ? (
        <form
          id="wf-form-Scroll-Newsletter"
          name="wf-form-Scroll-Newsletter"
          data-name="Scroll Newsletter"
          className="form-subscribe"
          onSubmit={onSubmit}
        >
          <div className="form-subscribe-field-wrapper">
            <label htmlFor="Email" className="overflow-hidden hidden w-0 h-0 indent-[100%] whitespace-nowrap">
              Email Address
            </label>
            <input
              type="email"
              className="cta-subscribe-input w-input text-300"
              maxLength={256}
              name="Email"
              data-name="Email"
              placeholder={t("landing.NewsletterCTA.placeholder")}
              onChange={() => setIsError(false)}
              id="Email"
              required
            />
            <input
              id="subscribe-button"
              type="submit"
              value={isLoading ? "Please Wait..." : t("landing.NewsletterCTA.buttonText")}
              disabled={isLoading}
              className={clsx(button.secondary, "text-300")}
            />
          </div>
        </form>
      ) : (
        <div className="form-success-message w-form-done">
          <div className="subscribe-success-message-text">
            Thank you for signing up! Please check your inbox to confirm your subscription.
          </div>
          <div className="subscribe-success-social">
            <a
              href="https://twitter.com/scroll_zkp"
              className="subscribe-form-success-social w-inline-block"
              target="_blank"
              rel="noopener"
            >
              <img src="/images/twitter.svg" loading="lazy" width="24" height="24" alt="Twitter" />
            </a>
            <a
              href="https://www.youtube.com/@Scroll_ZKP"
              className="subscribe-form-success-social w-inline-block"
              target="_blank"
              rel="noopener"
            >
              <img src="/images/youtube.svg" loading="lazy" width="24" height="24" alt="YouTube" />
            </a>
            <a
              href="https://discord.gg/scroll"
              className="subscribe-form-success-social w-inline-block"
              target="_blank"
              rel="noopener"
            >
              <img src="/images/discord.svg" loading="lazy" width="24" height="24" alt="Discord" />
            </a>
          </div>
        </div>
      )}
      {isError && (
        <div className="form-error-message w-form-fail">
          <div className="subscribe-text-block">
            Oops! Something went wrong while submitting the form. Please try again
          </div>
        </div>
      )}
    </>
  )
}
