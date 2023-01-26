import * as React from "react"
import { Cube } from "./Cube"
import hexagonStyles from "./Hexagon.module.css"
export const Hexagon = () => (
  <div id={hexagonStyles.outerWrapper}>
    <div style={{ position: "relative" }}>
      <div id={hexagonStyles.wrapper}>
        <Cube size={1100} color="rgb(245, 247, 253)" />
      </div>
    </div>
  </div>
)
