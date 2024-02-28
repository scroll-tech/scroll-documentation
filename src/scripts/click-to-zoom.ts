document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".click-to-zoom").forEach((element) => {
    element.addEventListener("click", () => {
      if (element.classList.contains("expanded")) return;

      element.classList.add("expanded");
      
      // Create a wrapper for the preview
      const wrapper = document.createElement("div");
      wrapper.id = "expanded-image-wrapper";

      // Create an image node
      const img = document.createElement("img");
      img.src = element.src;
      img.className = "expanded";
      img.id = "expanded-image-preview";
      wrapper.appendChild(img);

      // Set up events to close the preview
      wrapper.onclick = () => {
        wrapper.remove();
        element.classList.remove("expanded");
      };
      document.onkeyup = (e) => {
        if (e.key === "Escape") {
          wrapper.remove();
          element.classList.remove("expanded");
        }
      };

      // Add the wrapper to the DOM
      element.insertAdjacentElement("afterend", wrapper);
    });
  });
});
