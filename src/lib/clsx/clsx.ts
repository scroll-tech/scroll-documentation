/**
 * A utility function for conditionally constructing className strings.
 * Source: https://github.com/lukeed/clsx/blob/master/src/index.js
 */

type ClassValue = ClassValue[] | Record<string, boolean> | string | number | null | boolean | undefined;

function toVal(mix: ClassValue): string {
  let str = "";

  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (let k = 0; k < mix.length; k++) {
        if (mix[k]) {
          const y = toVal(mix[k]);
          if (y) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else {
      for (const k in mix) {
        if (Object.prototype.hasOwnProperty.call(mix, k) && mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }

  return str;
}

export function clsx(...classes: ClassValue[]): string {
  let str = "";

  for (let i = 0; i < classes.length; i++) {
    const tmp = classes[i];
    if (tmp) {
      const x = toVal(tmp);
      if (x) {
        str && (str += " ");
        str += x;
      }
    }
  }

  return str;
}
