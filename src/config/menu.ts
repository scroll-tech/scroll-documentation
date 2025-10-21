type LanguageKey = string
type MenuItem = {
  text: string
  link: string
  section: string
}
type MenuItems = Record<LanguageKey, MenuItem[]>

export const MENU: MenuItems = {
  en: [
    { text: "Developers", link: "/en/developers", section: "developers" },
    { text: "Technology", link: "/en/technology", section: "technology" },
    { text: "Learn", link: "/en/learn", section: "learn" },
  ],
  zh: [
    { text: "开发者", link: "/zh/developers", section: "developers" },
    { text: "技术", link: "/zh/technology", section: "technology" },
    { text: "学习", link: "/zh/learn", section: "learn" },
  ],
  es: [
    { text: "Desarrolladores", link: "/es/developers", section: "developers" },
    { text: "Tecnología", link: "/es/technology", section: "technology" },
    { text: "Aprende", link: "/es/learn", section: "learn" },
  ],
  tr: [
    { text: "Geliştiriciler", link: "/tr/developers", section: "developers" },
    { text: "Teknoloji", link: "/tr/technology", section: "technology" },
    { text: "Öğren", link: "/tr/learn", section: "learn" },
  ],
}
