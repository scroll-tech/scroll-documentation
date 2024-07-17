import { useState } from "preact/hooks"
import button from "../../styles/design-system/button.module.css"

const star = (
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
    <path
      d="M15.4218 19.0004C15.1722 19.0004 14.9258 18.9403 14.7054 18.8249L10.6037 16.6956C10.5391 16.6615 10.4618 16.6615 10.3972 16.6956L6.29631 18.8249C5.54449 19.2157 4.61417 18.9305 4.21852 18.188C4.06058 17.8919 4.0063 17.5527 4.06387 17.2229L4.84696 12.7132C4.85929 12.6413 4.83462 12.5682 4.78115 12.5182L1.46498 9.32266C0.856286 8.73692 0.843536 7.77503 1.43661 7.17385C1.6735 6.93379 1.98443 6.77781 2.32045 6.72987L6.90254 6.07264C6.97493 6.06208 7.03745 6.0174 7.06953 5.9524L9.11812 1.84815C9.49321 1.09546 10.4153 0.78593 11.1774 1.15679C11.4818 1.30465 11.7277 1.54796 11.8774 1.84815L13.9272 5.95119C13.9597 6.01577 14.0222 6.06086 14.0942 6.07142L18.68 6.72906C19.5215 6.84889 20.1051 7.61946 19.9838 8.45054C19.9353 8.7816 19.7777 9.08787 19.5355 9.32144L16.2169 12.515C16.1638 12.5654 16.1391 12.6381 16.151 12.71L16.9341 17.2196C17.0773 18.0479 16.5134 18.8339 15.6748 18.9756C15.5909 18.9898 15.5057 18.9972 15.4206 18.9972L15.4218 19.0004Z"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="0.15"
    />
  </svg>
)
const starOutline = (
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
    <path
      d="M15.4218 19.0004C15.1722 19.0004 14.9258 18.9403 14.7054 18.8249L10.6037 16.6956C10.5391 16.6615 10.4618 16.6615 10.3972 16.6956L6.29631 18.8249C5.54449 19.2157 4.61417 18.9305 4.21852 18.188C4.06058 17.8919 4.0063 17.5527 4.06387 17.2229L4.84696 12.7132C4.85929 12.6413 4.83462 12.5682 4.78115 12.5182L1.46498 9.32266C0.856286 8.73692 0.843536 7.77503 1.43661 7.17385C1.6735 6.93379 1.98443 6.77781 2.32045 6.72987L6.90254 6.07264C6.97493 6.06208 7.03745 6.0174 7.06953 5.9524L9.11812 1.84815C9.49321 1.09546 10.4153 0.78593 11.1774 1.15679C11.4818 1.30465 11.7277 1.54796 11.8774 1.84815L13.9272 5.95119C13.9597 6.01577 14.0222 6.06086 14.0942 6.07142L18.68 6.72906C19.5215 6.84889 20.1051 7.61946 19.9838 8.45054C19.9353 8.7816 19.7777 9.08787 19.5355 9.32144L16.2169 12.515C16.1638 12.5654 16.1391 12.6381 16.151 12.71L16.9341 17.2196C17.0773 18.0479 16.5134 18.8339 15.6748 18.9756C15.5909 18.9898 15.5057 18.9972 15.4206 18.9972L15.4214 18.9996L15.4218 19.0004ZM10.5004 15.3698C10.7501 15.3698 10.9956 15.4299 11.2165 15.5453L15.3174 17.6737C15.3914 17.7156 15.4839 17.7091 15.5518 17.6575C15.6221 17.6096 15.6571 17.5251 15.6406 17.4422L14.8567 12.9318C14.7716 12.439 14.9369 11.9366 15.2989 11.5872L18.6175 8.39286C18.7051 8.30797 18.7068 8.16905 18.6208 8.08212C18.5867 8.04759 18.5422 8.02525 18.4937 8.01834L13.9083 7.35989C13.407 7.2884 12.9739 6.97725 12.7502 6.5288L10.6979 2.42536C10.6436 2.3165 10.5099 2.27181 10.4001 2.32584C10.3565 2.34737 10.3207 2.3823 10.2993 2.42536L8.25073 6.52759C8.02699 6.97644 7.5935 7.28718 7.09173 7.35867L2.50717 8.01834C2.38584 8.03541 2.30153 8.1463 2.31881 8.26572C2.3258 8.31406 2.34883 8.35874 2.3842 8.39246L5.70201 11.5868C6.06394 11.9362 6.22928 12.4386 6.14414 12.9313L5.36024 17.4418C5.33926 17.5612 5.42028 17.675 5.54161 17.6957C5.59055 17.7042 5.64073 17.6957 5.68433 17.6729L9.78481 15.5436C10.0057 15.4287 10.2512 15.369 10.5009 15.369L10.5004 15.3698Z"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="0.15"
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
    setTimeout(() => {
      const scollElement = document.querySelector(".sidebar-nav-inner")
      scollElement.scrollTo({
        top: scollElement.scrollHeight,
        behavior: "smooth",
      })
    }, 0)
    setIsSent(false)
    const path = "https://hviedclg.api.lncldglobal.com/1.1/classes/Feedback"
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

    const path = "https://hviedclg.api.lncldglobal.com/1.1/classes/Feedback"
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
              marginRight: "10px",
              fontSize: 0,
            }}
          >
            {rating >= i + 1 ? star : starOutline}
          </div>
        ))}
      </div>
      {!!rating && (
        <section
          style={{
            marginTop: "16px",
          }}
        >
          {isSent ? (
            <div className="text-dark dark:text-white-800" style={{ fontSize: "1rem", lineHeight: "normal" }}>
              We appreciate your feedback! 🤎
            </div>
          ) : (
            <form
              className="feedback-form"
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label
                htmlFor="name"
                className="text-dark dark:text-white-800"
                style={{ fontSize: "1rem", lineHeight: "normal", marginBottom: "16px" }}
              >
                Tell us more about your experience.
              </label>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <textarea
                  name="msg"
                  rows="4"
                  className="text-black dark:text-white-800 border-black dark:border-white-800 bg-pure-white dark:bg-black"
                  style={{
                    padding: "15px",
                    caretColor: "#C4C4C4",
                    outline: "none",
                    fontSize: "1rem",
                    borderRadius: "10px",
                    marginBottom: "16px",
                  }}
                />
                <button
                  className={button.primary}
                  style={{ borderRadius: "5px", borderWidth: " 0", background: "var(--orange-400)" }}
                  disabled={isSubmitting}
                >
                  submit
                </button>
              </div>
            </form>
          )}
        </section>
      )}
    </>
  )
}
