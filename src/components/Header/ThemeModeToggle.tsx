import { useEffect, useState } from "preact/hooks"
import useStorage from "squirrel-gill"
import MoonSvg from "~/assets/svgs/header/moon.svg?react"
import SunSvg from "~/assets/svgs/header/sun.svg?react"
import { clsx } from "~/lib"

const ThemeModeToggle = (props) => {
  const { dark } = props
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
      className={clsx(
        "relative w-[35px] h-[35px] rounded-[5px] border-solid bg-transparent border border-black dark:border-white-800 text-black dark:text-white-800",
        dark && "border-white text-white"
      )}
      onClick={handleToggleThemeMode}
    >
      {isDarkMode ? <SunSvg className="align-middle"></SunSvg> : <MoonSvg className="align-middle"></MoonSvg>}
    </button>
  )
}

export default ThemeModeToggle
