import React from "react"
import headerbanner from "../../../styles/design-system/headerbanner.module.css"

type BannerType = "info" | "success" | "warning" | "danger"
export type BannerContent = {
  description: string
  type: BannerType
  linkText?: string
  linkUrl?: string
}

const bannerTypes: Record<BannerType, { primaryColour: string; alertColour: string; alertText: string }> = {
  info: {
    primaryColour: "var(--blue-800)",
    alertColour: "var(--blue-600)",
    alertText: "NEW",
  },
  success: {
    primaryColour: "var(--green-600)",
    alertColour: "var(--green-400)",
    alertText: "NEW",
  },
  warning: {
    primaryColour: "var(--yellow-400)",
    alertColour: "var(--yellow-300)",
    alertText: "ALERT",
  },
  danger: {
    primaryColour: "var(--red-600)",
    alertColour: "var(--red-400)",
    alertText: "ALERT",
  },
}

export const HeaderBanner: React.FC<{ bannerContent?: BannerContent }> = ({ bannerContent }) => {
  if (!bannerContent) return null
  return (
    <div className={headerbanner.container} style={{ backgroundColor: bannerTypes[bannerContent.type].primaryColour }}>
      <div className={headerbanner.badge} style={{ backgroundColor: bannerTypes[bannerContent.type].alertColour }}>
        <span className="text-100">{bannerTypes[bannerContent.type].alertText}</span>
      </div>
      <p>
        {bannerContent.description}{" "}
        {bannerContent.linkUrl && <a href={bannerContent.linkUrl}>{bannerContent.linkText}</a>}
      </p>
    </div>
  )
}
