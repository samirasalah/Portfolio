/**
 * CV print layout — compact always on (screen = print structure).
 * White preview chrome only for ?preview=print and during print dialog.
 */
(function () {
  function isPrintPreviewUrl() {
    return new URLSearchParams(window.location.search).get("preview") === "print";
  }

  function enableCompactLayout() {
    document.querySelector(".cv")?.classList.add("cv-print-compact");
  }

  function enablePrintPreviewChrome() {
    document.documentElement.classList.add("cv-print-preview");
    enableCompactLayout();
  }

  function disablePrintPreviewChrome() {
    if (!isPrintPreviewUrl()) {
      document.documentElement.classList.remove("cv-print-preview");
    }
  }

  function bootstrap() {
    enableCompactLayout();
    if (isPrintPreviewUrl()) enablePrintPreviewChrome();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }

  window.addEventListener("beforeprint", enablePrintPreviewChrome);
  window.addEventListener("afterprint", disablePrintPreviewChrome);
})();
