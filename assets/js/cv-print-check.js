/**
 * Enables compact print layout for screen preview (?preview=print) and before PDF export.
 */
(function () {
  function isPrintPreview() {
    return new URLSearchParams(window.location.search).get("preview") === "print";
  }

  function enableCompactLayout() {
    document.documentElement.classList.add("cv-print-preview");
    document.querySelector(".cv")?.classList.add("cv-print-compact");
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (isPrintPreview()) enableCompactLayout();
  });

  window.addEventListener("beforeprint", enableCompactLayout);
})();
