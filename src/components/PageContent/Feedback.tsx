import { useState } from "preact/hooks"
import button from "../../styles/cl-design-system/button.module.css"

const star = (
  <svg style={{ width: "var(--space-6x)", height: "var(--space-6x)" }} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
    />
  </svg>
)
const starOutline = (
  <svg style={{ width: "var(--space-6x)", height: "var(--space-6x)" }} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
    />
  </svg>
)

const appId = "hvIeDclG2pt2nzAdbKWM0qms-MdYXbMMI"
const appKey = "lKObgvpdxLT2JK839oxSM4Fn"

export const Feedback = () => {
  const [rating, setRating] = useState<number>(undefined)
  const [isSent, setIsSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(selectedNumber: number) {
    if (rating === selectedNumber + 1) {
      setRating(undefined)
      return
    }
    setRating(selectedNumber + 1)
    setIsSent(false)
    const path = "https://leancloud.scroll.io/1.1/classes/Feedback"
    const data = {
      rating: selectedNumber,
      time: Date.now(),
      url: window.location.href,
    }
    fetch(path, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-LC-Id": appId,
        "X-LC-Key": appKey,
      },
      body: JSON.stringify(data),
    })
  }

  function handleSubmit(e: any) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      rating,
      time: Date.now(),
      msg: formData.get("msg"),
      url: window.location.href,
    }

    const path = "https://leancloud.scroll.io/1.1/classes/Feedback"
    setIsSubmitting(true)
    fetch(path, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-LC-Id": appId,
        "X-LC-Key": appKey,
      },
      body: JSON.stringify(data),
    })
      .then(() => setIsSent(true))
      .finally(() => setIsSubmitting(false))
  }
  return (
    <>
      <div style={{ display: "flex" }}>
        {[...Array(5).keys()].map((i) => (
          <div
            onClick={() => {
              handleChange(i)
            }}
            style={{
              cursor: "pointer",
            }}
          >
            {rating >= i + 1 ? star : starOutline}
          </div>
        ))}
      </div>
      {!!rating && !isSent && (
        <section
          className="card"
          style={{
            padding: "var(--space-4x)",
            marginRight: "var(--space-4x)",
          }}
        >
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
            <label htmlFor="name">Tell us more about your experience.</label>
            <textarea name="msg" />
            <button className={button.primary} disabled={isSubmitting}>
              submit
            </button>
          </form>
        </section>
      )}
    </>
  )
}
