type LanguageKey = string
type MenuItem = {
  text: string
  link: string
  section: string
}
type MenuItems = Record<LanguageKey, MenuItem[]>

export const MENU: MenuItems = {
  en: [
    {
      text: "Getting Started",
      link: "/en/docs/getting-started/overview",
      section: "gettingStarted",
    },
    { text: "Developers", link: "/en/docs/developers", section: "developers" },
    { text: "Technology", link: "/en/docs/technology", section: "technology" },
    { text: "Learn", link: "/en/docs/learn", section: "learn" },
  ],
  zh: [
    {
      text: "入门",
      link: "/zh/docs/getting-started/overview",
      section: "gettingStarted",
    },
    { text: "开发者", link: "/zh/docs/developers", section: "developers" },
    { text: "技术", link: "/zh/docs/technology", section: "technology" },
    { text: "学习", link: "/zh/docs/learn", section: "learn" },
  ],
}
