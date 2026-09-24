import { useEffect, useState } from "preact/hooks"
import useStorage from "squirrel-gill"
import MoonSvg from "~/assets/svgs/header/moon.svg?react"
import SunSvg from "~/assets/svgs/header/sun.svg?react"
import { clsx } from "~/lib"

const ThemeModeToggle = () => {
  const [themeMode, setThemeMode] = useStorage(localStorage, "THEME_MODE", "light")
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const toggleThemeMode = (e) => {
      if (e.matches) {
        setThemeMode("dark")
      } else [setThemeMode("light")]
    }

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", toggleThemeMode)

    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", toggleThemeMode)
    }
  }, [])

  useEffect(() => {
    if (themeMode === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  }, [themeMode])

  const handleToggleThemeMode = () => {
    if (isDarkMode) {
      setThemeMode("light")
    } else {
      setThemeMode("dark")
    }
  }

  return (
    <button
      id="themeModeToggle"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={clsx(
        "relative flex items-center justify-center w-[36px] h-[36px] rounded-full border border-solid border-line bg-transparent text-ink-2 cursor-pointer",
        "transition-colors duration-200 hover:text-ink hover:bg-surface-2 hover:border-ink-4"
      )}
      onClick={handleToggleThemeMode}
    >
      {isDarkMode ? <SunSvg className="w-[18px] h-[18px]"></SunSvg> : <MoonSvg className="w-[18px] h-[18px]"></MoonSvg>}
    </button>
  )
}

export default ThemeModeToggle
