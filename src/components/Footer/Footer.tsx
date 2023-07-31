// import PureFooter from "./PureFooter"
import React, { useState, useCallback } from "react"
import Subscribe from "./Subscribe/Subscribe.tsx"
import PureFooter from "./PureFooter/PureFooter.tsx"

const Footer = () => {
  return (
    <>
      <Subscribe />
      <PureFooter />
    </>
  )
}

export default Footer
