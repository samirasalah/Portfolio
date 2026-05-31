/**
 * CV print layout — compact mode is always on so screen matches PDF export.
 * beforeprint re-applies classes as a safety net for Safari/Chrome timing.
 */
(function () {
  function enableCompactLayout() {
    document.documentElement.classList.add("cv-print-preview");
    document.querySelector(".cv")?.classList.add("cv-print-compact");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", enableCompactLayout);
  } else {
    enableCompactLayout();
  }

  window.addEventListener("beforeprint", enableCompactLayout);

  if (window.matchMedia) {
    const mq = window.matchMedia("print");
    if (mq.addEventListener) {
      mq.addEventListener("change", (e) => {
        if (e.matches) enableCompactLayout();
      });
    } else if (mq.addListener) {
      mq.addListener((e) => {
        if (e.matches) enableCompactLayout();
      });
    }
  }
})();
