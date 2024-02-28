import ClipboardJS from "clipboard"; // Changed import path for ClipboardJS
import button from "../styles/design-system/button.module.css";

const clipboard = new ClipboardJS(".copy-iconbutton");

clipboard.on("success", function (e) {
  const oldLabel = e.trigger.innerHTML;
  e.trigger.innerHTML = `<img src="/assets/icons/checkCircleIconGrey.svg" />`;
  window.setTimeout(function () {
    e.trigger.innerHTML = oldLabel;
  }, 2000);
  e.clearSelection();
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre").forEach(function (codeBlock) {
    const container = document.createElement("div");
    container.className = "copy-code-button-wrapper";

    const copyButton = document.createElement("button");
    copyButton.className = button.secondary;
    copyButton.classList.add("copy-iconbutton"); // Removed spread syntax
    copyButton.type = "button";
    const s = codeBlock.innerText;
    copyButton.setAttribute("data-clipboard-text", s);
    copyButton.innerHTML = `<img src="/assets/icons/copyIcon.svg" alt="copy to clipboard" style="width:16px; height: 16px">`;
    copyButton.setAttribute("aria-label", "copy to clipboard"); // Fixed aria-label attribute name

    container.appendChild(copyButton);

    codeBlock.insertAdjacentElement("beforebegin", container);
  });
});
