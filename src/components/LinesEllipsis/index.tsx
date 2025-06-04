import { useState, useEffect, useRef } from "preact/hooks"

const agentStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  height: 0,
  overflow: "hidden",
  paddingTop: 0,
  paddingBottom: 0,
  border: "none",
}

const mirrorProps = [
  "box-sizing",
  "width",
  "font-size",
  "font-weight",
  "font-family",
  "font-style",
  "letter-spacing",
  "text-indent",
  "white-space",
  "word-break",
  "overflow-wrap",
  "padding-left",
  "padding-right",
]

function prevSibling(node, count) {
  while (node && count--) {
    node = node.previousElementSibling
  }
  return node
}

const LinesEllipsis = props => {
  const { component: Component = "div", ellipsis, trimRight = true, basedOn, maxLine = 1, text, className, onReflow, ...rest } = props

  const [displayedText, setDisplayedText] = useState(text)
  const [clamped, setClamped] = useState(false)

  const units = useRef([])
  const shadowRef = useRef<HTMLElement>()
  const targetRef = useRef()
  const ellipsisRef = useRef()

  useEffect(() => {
    const handleSizeChanged = entries => {
      if (targetRef.current) {
        copyStyleToShadow()
        reflow({ basedOn, text, maxLine })
      }
    }
    const resizeObserver = new ResizeObserver(handleSizeChanged)
    resizeObserver.observe(targetRef.current)

    return () => {
      if (targetRef.current) {
        resizeObserver && resizeObserver.unobserve(targetRef.current)
      }
    }
  }, [basedOn, text, maxLine])

  const copyStyleToShadow = () => {
    const targetStyle = window.getComputedStyle(targetRef.current)
    mirrorProps.forEach(key => {
      shadowRef.current.style[key] = targetStyle[key]
    })
  }

  const reflow = props => {
    /* eslint-disable no-control-regex */
    const basedOn = props.basedOn || (/^[\x00-\x7F]+$/.test(props.text) ? "words" : "letters")

    if (basedOn === "words") {
      units.current = props.text.split(/\b|(?=\W)/)
    } else if (basedOn === "letters") {
      units.current = Array.from(props.text)
    } else {
      // default
      units.current = props.text.split(/\b|(?=\W)/)
    }
    shadowRef.current.innerHTML = units.current
      .map(c => {
        return `<span class='LinesEllipsis-unit'>${c}</span>`
      })
      .join("")
    const ellipsisIndex = putEllipsis(calcIndexes())
    const nextClamped = ellipsisIndex > -1
    const nextDisplayedText = nextClamped ? units.current.slice(0, ellipsisIndex).join("") : props.text
    setClamped(nextClamped)
    setDisplayedText(nextDisplayedText)
    onReflow({ clamped: nextClamped, text: nextDisplayedText })
  }

  // return the index of the first letter/word of each line
  // row count: maxLine + 1
  const calcIndexes = () => {
    const indexes = [0]
    let spanNode = shadowRef.current.firstElementChild
    if (!spanNode) return indexes

    let index = 0
    let line = 1
    let offsetTop = spanNode.offsetTop
    while ((spanNode = spanNode.nextElementSibling)) {
      if (spanNode.offsetTop > offsetTop) {
        line++
        indexes.push(index)
        offsetTop = spanNode.offsetTop
      }
      index++
      if (line > maxLine) {
        break
      }
    }
    return indexes
  }

  const putEllipsis = indexes => {
    // no ellipsis
    if (indexes.length <= maxLine) return -1
    const lastIndex = indexes[maxLine]
    const truncatedUnits = units.current.slice(0, lastIndex)

    // the first letter/word of maxLine + 1 row
    const maxOffsetTop = shadowRef.current.children[lastIndex].offsetTop
    shadowRef.current.innerHTML =
      truncatedUnits
        .map((c, i) => {
          return `<span class='LinesEllipsis-unit'>${c}</span>`
        })
        .join("") + `<span class='LinesEllipsis-ellipsis'>${ellipsisRef.current.innerHTML}</span>`
    const ellipsisNode = shadowRef.current.lastElementChild
    let lastTextNode = prevSibling(ellipsisNode, 1)
    while (
      lastTextNode &&
      (ellipsisNode.offsetTop > maxOffsetTop ||
        ellipsisNode.offsetHeight > lastTextNode.offsetHeight ||
        ellipsisNode.offsetTop > lastTextNode.offsetTop)
    ) {
      shadowRef.current.removeChild(lastTextNode)
      lastTextNode = prevSibling(ellipsisNode, 1)
      truncatedUnits.pop()
    }
    return truncatedUnits.length
  }

  return (
    <>
      <Component className={`LinesEllipsis ${clamped ? "LinesEllipsis--clamped" : ""} ${className}`} ref={targetRef} {...rest}>
        {trimRight ? displayedText.trimRight() : displayedText}
        {clamped && <span className="LinesEllipsis-ellipsis">{ellipsis}</span>}
      </Component>
      <div style={agentStyle} ref={shadowRef} className={`LinesEllipsis-shadow ${className}`}></div>
      <span style={agentStyle} ref={ellipsisRef}>
        {ellipsis}
      </span>
    </>
  )
}

export default LinesEllipsis