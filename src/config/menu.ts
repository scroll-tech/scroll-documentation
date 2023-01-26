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
      link: "/getting-started/overview",
      section: "gettingStarted",
    },
    { text: "Developers", link: "/developers", section: "developer" },
    { text: "Research", link: "/research", section: "research" },
    { text: "zkEVM", link: "/zkevm", section: "zkevm" },
    {
      text: "Infrastructure",
      link: "/infrastructure",
      section: "infrastructure",
    },
  ],
}
