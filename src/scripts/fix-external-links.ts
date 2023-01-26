document.addEventListener("DOMContentLoaded", () => {
  const links = document.links
  for (let i = 0, linksLength = links.length; i < linksLength; i++) {
    if (!links[i].href.startsWith("javascript:")) {
      if (links[i].hostname !== window.location.hostname) {
        links[i].target = "_blank"
        links[i].relList.add("noopener")
      }
    }
  }
})
