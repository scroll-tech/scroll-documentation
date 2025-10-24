import type { MiddlewareHandler } from "astro"

export const onRequest: MiddlewareHandler = (context, next) => {
  const url = new URL(context.request.url)
  const pathname = url.pathname

  if (
    pathname.startsWith("/sdk") ||
    pathname.startsWith("/en/sdk") ||
    pathname.startsWith("/es/sdk") ||
    pathname.startsWith("/tr/sdk") ||
    pathname.startsWith("/zh/sdk")
  ) {
    return context.redirect("/developers", 301)
  }

  if (
    pathname.startsWith("/learn") ||
    pathname.startsWith("/en/learn") ||
    pathname.startsWith("/es/learn") ||
    pathname.startsWith("/tr/learn") ||
    pathname.startsWith("/zh/learn")
  ) {
    return context.redirect("/technology", 301)
  }

  if (
    pathname.startsWith("/user-guide") ||
    pathname.startsWith("/en/user-guide") ||
    pathname.startsWith("/es/user-guide") ||
    pathname.startsWith("/tr/user-guide") ||
    pathname.startsWith("/zh/user-guide")
  ) {
    return context.redirect("/community", 301)
  }

  return next()
}
