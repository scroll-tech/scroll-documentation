/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  showDefaultLocale: true,
  locales: ["en", "es", "zh", "tr", "pt"],
  load: ["server", "client"],
}
