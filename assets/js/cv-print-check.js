/**
 * Screen-only layout check before PDF export.
 * Flags sheets taller than A4 (297mm @ 96dpi ≈ 1123px).
 */
(function () {
  const A4_MM = 297;
  const MM_TO_PX = 96 / 25.4;
  const A4_PX = A4_MM * MM_TO_PX;
  /** Print rules compress layout ~8–12% vs screen */
  const PRINT_SHRINK = 0.90;
  const TOLERANCE_PX = 8;

  function isPrintPreview() {
    return new URLSearchParams(window.location.search).get("preview") === "print";
  }

  function enablePrintPreview() {
    document.documentElement.classList.add("cv-print-preview");
  }

  function mm(px) {
    return ((px / MM_TO_PX).toFixed(1)) + " mm";
  }

  function runCheck() {
    if (window.matchMedia("print").matches) return;

    const sheets = document.querySelectorAll(".cv-sheet");
    const issues = [];

    sheets.forEach((sheet, i) => {
      const h = sheet.getBoundingClientRect().height;
      const effective = isPrintPreview() ? h : h * PRINT_SHRINK;
      if (effective > A4_PX + TOLERANCE_PX) {
        issues.push(`Page ${i + 1} : ${mm(h)} (max ${A4_MM} mm)`);
      }
    });

    const hint = document.querySelector(".cv-export-hint");
    if (!hint) return;

    hint.classList.toggle("cv-export-hint--warn", issues.length > 0);

    if (issues.length === 0) {
      hint.dataset.layoutOk = "1";
      return;
    }

    const warn = document.createElement("span");
    warn.className = "cv-export-hint-warn";
    warn.textContent =
      (document.documentElement.lang === "fr"
        ? "Attention — débordement détecté : "
        : "Warning — layout overflow: ") + issues.join(" · ");

    const old = hint.querySelector(".cv-export-hint-warn");
    if (old) old.remove();
    hint.appendChild(warn);
  }

  function schedule() {
    requestAnimationFrame(() => {
      requestAnimationFrame(runCheck);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (isPrintPreview()) enablePrintPreview();
    schedule();
  });
  window.addEventListener("resize", schedule);
  document.fonts?.ready?.then(schedule);
  document.addEventListener("cv-i18n-applied", schedule);
})();
