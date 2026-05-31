/**
 * Consultant location from IP country:
 * France → Rambouillet, France · otherwise → Bergneustadt, Germany
 */
(function () {
  const CACHE_KEY = "consultant-geo-v2";
  const CACHE_TTL = 6 * 60 * 60 * 1000;
  const FALLBACK = { country_code: "DE" };

  const LOCATIONS = {
    en: { fr: "Rambouillet, France", default: "Bergneustadt, Germany" },
    fr: { fr: "Rambouillet, France", default: "Bergneustadt, Allemagne" },
    de: { fr: "Rambouillet, Frankreich", default: "Bergneustadt, Deutschland" },
  };

  let lastData = null;

  function getLang() {
    const lang = (document.documentElement.lang || "en").slice(0, 2).toLowerCase();
    return LOCATIONS[lang] ? lang : "en";
  }

  function formatLocation(data, lang) {
    const labels = LOCATIONS[lang] || LOCATIONS.en;
    const cc = (data && data.country_code ? data.country_code : "DE").toUpperCase();
    return cc === "FR" ? labels.fr : labels.default;
  }

  function readCache() {
    try {
      const raw = sessionStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const { ts, data } = JSON.parse(raw);
      if (Date.now() - ts > CACHE_TTL) return null;
      return data;
    } catch (_) {
      return null;
    }
  }

  function writeCache(data) {
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
    } catch (_) { /* ignore */ }
  }

  async function fetchGeo() {
    const cached = readCache();
    if (cached) return cached;

    try {
      const res = await fetch("https://ipapi.co/json/", {
        signal: AbortSignal.timeout(6000),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("geo http");
      const data = await res.json();
      if (data.error || !data.country_code) throw new Error("geo api");
      writeCache({ country_code: data.country_code });
      return { country_code: data.country_code };
    } catch (_) {
      return { ...FALLBACK };
    }
  }

  function applyToDom(data) {
    lastData = data;
    const lang = getLang();
    const text = formatLocation(data, lang);

    document.querySelectorAll("[data-geo-location]").forEach((el) => {
      el.textContent = text;
    });
  }

  async function applyGeoLocation() {
    const data = await fetchGeo();
    applyToDom(data);
    return data;
  }

  function refreshGeoLabels() {
    applyToDom(lastData || FALLBACK);
  }

  window.consultantGeo = { applyGeoLocation, refreshGeoLabels, formatLocation };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      applyGeoLocation();
    });
  } else {
    applyGeoLocation();
  }
})();
