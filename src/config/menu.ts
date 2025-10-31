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
    { text: "Community", link: "/en/community/faq", section: "community" },
    { text: "SDK", link: "/en/sdk", section: "sdk" },
  ],
  zh: [
    { text: "开发者", link: "/zh/developers", section: "developers" },
    { text: "技术", link: "/zh/technology", section: "technology" },
    { text: "Community", link: "/en/community/faq", section: "community" },
    { text: "SDK", link: "/en/sdk", section: "sdk" },
  ],
  es: [
    { text: "Desarrolladores", link: "/es/developers", section: "developers" },
    { text: "Tecnología", link: "/es/technology", section: "technology" },
    { text: "Community", link: "/en/community/faq", section: "community" },
    { text: "SDK", link: "/en/sdk", section: "sdk" },
  ],
  tr: [
    { text: "Geliştiriciler", link: "/tr/developers", section: "developers" },
    { text: "Teknoloji", link: "/tr/technology", section: "technology" },
    { text: "Community", link: "/en/community/faq", section: "community" },
    { text: "SDK", link: "/en/sdk", section: "sdk" },
  ],
}
