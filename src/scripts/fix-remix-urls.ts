/** Fixes deployment URLs when on a preview URL */
document.addEventListener("DOMContentLoaded", () => {
  const host = window.location.hostname
  if (host !== "docs.chain.link") {
    // Rewrite Remix URLs with current hostname
    // eg https://remix.ethereum.org/#url=https://docs.chain.link/samples/VRF/VRFD20.sol

    for (const item of Array.from(document.links)) {
      if (item.href.startsWith("https://remix.ethereum.org")) {
        item.setAttribute("href", item.href.replace("docs.chain.link", host))
      }
    }
  }
})
