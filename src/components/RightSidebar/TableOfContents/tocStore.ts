// store/users.ts
import { atom } from "nanostores"

export const shouldUpdateToc = atom<string | undefined>()

export function updateTableOfContents() {
  shouldUpdateToc.set(new Date().toUTCString())
}
