// This is the type of the frontmatter you put in the docs markdown files.

type Link = string
type Text = string

export type Frontmatter = {
  title: string
  description: string
  layout: string
  image?: { src: string; alt: string }

  dir: "ltr"
  lang: string
  // og:locale
  ogLocale?: string

  section: string // can be typed better
  excerpt?: string

  // used for the feed pages
  stub?: string
  ecosystem?: "scroll"
  l2healthflag?: string

  // whats next links at the end of the content
  whatsnext: Record<Text, Link>
  metadata?: {
    title?: string
    description?: string
    image?: string[]
  }
}
