import React, { CSSProperties } from "react"
import cubeStyles from "./Cube.module.css"

export interface CubeCSSProperties extends CSSProperties {
  "--bg-color": string
  "--fill-color": string
  "--size": string
  "--size-multiplier": number
  "--radius-amount": number
}
const BORDER_RADIUS_DIVISOR = 66
const CONTAINER_SIZE_MULTIPLIER = 1.7

export const Cube = ({
  size = 600,
  color = "zircon",
  backgroundColor = "transparent",
}: {
  size?: number
  color?: string
  backgroundColor?: string
}) => {
  return (
    <div
      id={cubeStyles.cubeWrapper}
      style={
        {
          "--bg-color": backgroundColor,
          "--fill-color": color,
          "--size": `${size}px`,
          "--size-multiplier": CONTAINER_SIZE_MULTIPLIER,
          "--radius-amount": BORDER_RADIUS_DIVISOR,
        } as CubeCSSProperties
      }
    >
      <div id={cubeStyles.wrapper}>
        <div id={cubeStyles.bottomCenter} className={cubeStyles.innerBox} />
        <div id={cubeStyles.topCenter} className={cubeStyles.innerBox} />
        <div id={cubeStyles.bottomLeft} className={cubeStyles.innerBox} />
        <div id={cubeStyles.topLeft} className={cubeStyles.innerBox} />
        <div id={cubeStyles.topRight} className={cubeStyles.innerBox} />
        <div id={cubeStyles.bottomRight} className={cubeStyles.innerBox} />
      </div>
    </div>
  )
}
