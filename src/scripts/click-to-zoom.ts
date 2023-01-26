document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".click-to-zoom").forEach((element: HTMLImageElement) => {
    element.addEventListener("click", () => {
      if (element.classList.contains("expanded")) return

      element.classList.add("expanded")
      // create wrapper for preview
      const wrapper = document.createElement("div")
      wrapper.id = "expanded-image-wrapper"

      // create image node
      const img = document.createElement("img")
      img.src = element.src
      img.className = "expanded"
      img.id = "expanded-image-preview"
      wrapper.appendChild(img)

      // setup events to close the preview
      wrapper.onclick = () => {
        wrapper.remove()
        element.classList.remove("expanded")
      }
      document.onkeyup = (e) => {
        if (e.key === "Escape") {
          wrapper.remove()
          element.classList.remove("expanded")
        }
      }

      // add the wrapper to the DOM
      element.insertAdjacentElement("afterend", wrapper)
    })
  })
})
