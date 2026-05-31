/**
 * CV print layout — compact always on (screen = print structure).
 * White preview chrome (cv-print-preview) only when ?preview=print is in the URL.
 */
(function () {
  function isPrintPreviewUrl() {
    return new URLSearchParams(window.location.search).get("preview") === "print";
  }

  function enableCompactLayout() {
    document.querySelector(".cv")?.classList.add("cv-print-compact");
  }

  function syncPreviewChrome() {
    if (isPrintPreviewUrl()) {
      document.documentElement.classList.add("cv-print-preview");
    } else {
      document.documentElement.classList.remove("cv-print-preview");
    }
  }

  function bootstrap() {
    enableCompactLayout();
    syncPreviewChrome();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }

  window.addEventListener("beforeprint", enableCompactLayout);
})();
