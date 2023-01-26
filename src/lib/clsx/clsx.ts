/**
 * A tiny utility for constructing className strings conditionally.
 * https://github.com/lukeed/clsx/blob/master/src/index.js
 */

type ClassValue = ClassValue[] | Record<string, boolean> | string | number | null | boolean | undefined

function toVal(mix: ClassValue) {
  let k
  let y
  let str = ""

  if (typeof mix === "string" || typeof mix === "number") {
    str += mix
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if ((y = toVal(mix[k]))) {
            str && (str += " ")
            str += y
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix && mix[k]) {
          str && (str += " ")
          str += k
        }
      }
    }
  }

  return str
}

export function clsx(...classes: ClassValue[]) {
  let i = 0
  let tmp
  let x
  let str = ""

  while (i < classes.length) {
    if ((tmp = classes[i++])) {
      if ((x = toVal(tmp))) {
        str && (str += " ")
        str += x
      }
    }
  }
  return str
}
