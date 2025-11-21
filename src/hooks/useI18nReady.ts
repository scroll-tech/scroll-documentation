import { useState, useEffect } from "preact/hooks"
import i18next, { changeLanguage } from "i18next"

/**
 * Custom hook to ensure i18next is initialized and translation resources are loaded
 * before rendering components that use translations.
 *
 * This fixes the issue where Vercel build shows translation keys instead of translated text
 * due to SSR/CSR timing differences.
 *
 * @param lang - Optional language code to change to. If provided, will change language and wait for resources.
 * @returns boolean indicating if i18next is ready (initialized and resources loaded)
 */
export function useI18nReady(lang?: string): boolean {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const ensureResourcesLoaded = async () => {
      try {
        // Wait for i18next to be initialized
        if (!i18next.isInitialized) {
          await new Promise<void>((resolve) => {
            const handler = () => {
              i18next.off("initialized", handler)
              resolve()
            }
            i18next.on("initialized", handler)
          })
        }

        // Change language if needed (this will wait for resources to load)
        if (lang && i18next.language !== lang) {
          await changeLanguage(lang)
        }

        // Double-check that resources are actually loaded
        const targetLang = lang || i18next.language || "en"
        if (i18next.hasResourceBundle(targetLang, "translation")) {
          setIsReady(true)
        } else {
          // Wait for resources to be loaded
          await new Promise<void>((resolve) => {
            const checkResources = () => {
              if (i18next.hasResourceBundle(targetLang, "translation")) {
                i18next.off("loaded", checkResources)
                resolve()
              }
            }
            i18next.on("loaded", checkResources)
            // Check immediately in case resources are already loaded
            if (i18next.hasResourceBundle(targetLang, "translation")) {
              i18next.off("loaded", checkResources)
              resolve()
            }
          })
          setIsReady(true)
        }
      } catch (error) {
        // If something goes wrong, still set ready to avoid blocking the UI
        console.error("Error loading i18next resources:", error)
        setIsReady(true)
      }
    }

    ensureResourcesLoaded()
  }, [lang])

  return isReady
}
