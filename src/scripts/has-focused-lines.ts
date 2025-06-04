document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("astro:page-load", () => {
    const preElements = document.querySelectorAll(".expressive-code")
    preElements.forEach((pre) => {
      const hasTargetClass = pre.querySelector(".mark")
      if (hasTargetClass) {
        pre.classList.add("has-focused-lines")
      }
    })
  })
})
