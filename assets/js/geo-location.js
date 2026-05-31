/**
 * Consultant location from IP country:
 * France → Rambouillet, France · otherwise → Bergneustadt, Germany
 */
(function () {
  /** Fix malformed URLs like ?lang=fr?geo=fr → ?lang=fr&geo=fr */
  (function normalizeQueryString() {
    try {
      const { search, pathname, hash } = window.location;
      const q = search.indexOf("?");
      if (q === -1) return;
      const rest = search.slice(q + 1);
      if (!rest.includes("?")) return;
      const fixed = "?" + rest.replace(/\?/g, "&");
      window.history.replaceState(null, "", pathname + fixed + hash);
    } catch (_) { /* ignore */ }
  })();

  const CACHE_KEY = "consultant-geo-v2";
  const CACHE_TTL = 6 * 60 * 60 * 1000;
  const FALLBACK = { country_code: "DE" };

  const LOCATIONS = {
    en: { fr: "Rambouillet, France", default: "Bergneustadt, Germany" },
    fr: { fr: "Rambouillet, France", default: "Bergneustadt, Allemagne" },
    de: { fr: "Rambouillet, Frankreich", default: "Bergneustadt, Deutschland" },
  };

  /** Mission region — France for FR visitors, Germany otherwise (mirrors location logic). */
  const MISSIONS = {
    en: { fr: "<strong>France</strong>", default: "<strong>Germany</strong>" },
    fr: { fr: "<strong>France</strong>", default: "<strong>Allemagne</strong>" },
    de: { fr: "<strong>Frankreich</strong>", default: "<strong>Deutschland</strong>" },
  };

  /** Badge / scope line — country label follows same IP rule as missions. */
  const SCOPE = {
    en: {
      fr: "France & EU · remote or on-site",
      default: "Germany & EU · remote or on-site",
    },
    fr: {
      fr: "France & UE · remote ou sur site",
      default: "Allemagne & UE · remote ou sur site",
    },
    de: {
      fr: "Frankreich & EU · remote oder vor Ort",
      default: "Deutschland & EU · remote oder vor Ort",
    },
  };

  /**
   * CV header tagline — IP FR → France & EU · otherwise → Germany & EU.
   * Source of truth (not cv-i18n.js). See assets/CV-GUIDE.md § Géolocalisation.
   */
  const TAGLINE = {
    en: {
      fr: "Enterprise, public sector & media-like real-time — France & EU",
      default: "Enterprise, public sector & media-like real-time — Germany & EU",
    },
    fr: {
      fr: "Entreprise, secteur public & expériences type média — France & UE",
      default: "Entreprise, secteur public & expériences type média — Allemagne & UE",
    },
    de: {
      fr: "Mobile Apps in Production für Frankreich & EU — Consumer, öffentlicher Dienst, Video & Echtzeit",
      default: "Mobile Apps in Production für Deutschland & EU — Consumer, öffentlicher Dienst, Video & Echtzeit",
    },
  };

  let lastData = null;

  /** Dev/test override: ?geo=fr | ?geo=de (skips ipapi + session cache). */
  function readGeoParam() {
    const params = new URLSearchParams(window.location.search);
    const geo = params.get("geo");
    if (geo) return geo;
    const lang = params.get("lang");
    if (lang && lang.includes("?geo=")) {
      const match = lang.match(/\?geo=([a-z]+)/i);
      if (match) return match[1];
    }
    return null;
  }

  function getGeoOverride() {
    const geo = readGeoParam();
    if (!geo) return null;
    const code = geo.toLowerCase();
    if (code === "fr") return { country_code: "FR" };
    if (code === "de" || code === "default") return { country_code: "DE" };
    return null;
  }

  function isGeoOverridden() {
    return getGeoOverride() !== null;
  }

  function getLang() {
    const lang = (document.documentElement.lang || "en").slice(0, 2).toLowerCase();
    return LOCATIONS[lang] ? lang : "en";
  }

  function countryCode(data) {
    return (data && data.country_code ? data.country_code : "DE").toUpperCase();
  }

  function formatLocation(data, lang) {
    const labels = LOCATIONS[lang] || LOCATIONS.en;
    return countryCode(data) === "FR" ? labels.fr : labels.default;
  }

  function formatMissions(data, lang) {
    const labels = MISSIONS[lang] || MISSIONS.en;
    return countryCode(data) === "FR" ? labels.fr : labels.default;
  }

  function formatScope(data, lang) {
    const labels = SCOPE[lang] || SCOPE.en;
    return countryCode(data) === "FR" ? labels.fr : labels.default;
  }

  function formatTagline(data, lang) {
    const labels = TAGLINE[lang] || TAGLINE.en;
    return countryCode(data) === "FR" ? labels.fr : labels.default;
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
    const override = getGeoOverride();
    if (override) return override;

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

    const missionsHtml = formatMissions(data, lang);
    document.querySelectorAll("[data-geo-missions]").forEach((el) => {
      if (el.getAttribute("data-geo-missions-html") === "true") {
        el.innerHTML = missionsHtml;
      } else {
        el.textContent = missionsHtml.replace(/<\/?strong>/g, "");
      }
    });

    const scopeText = formatScope(data, lang);
    document.querySelectorAll("[data-geo-scope]").forEach((el) => {
      el.textContent = scopeText;
    });

    const taglineText = formatTagline(data, lang);
    document.querySelectorAll("[data-geo-tagline]").forEach((el) => {
      el.textContent = taglineText;
    });
  }

  async function applyGeoLocation() {
    const data = await fetchGeo();
    applyToDom(data);
    return data;
  }

  function refreshGeoLabels() {
    applyToDom(getGeoOverride() || lastData || FALLBACK);
  }

  window.consultantGeo = {
    applyGeoLocation,
    refreshGeoLabels,
    getGeoOverride,
    isGeoOverridden,
    formatLocation,
    formatMissions,
    formatScope,
    formatTagline,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      applyGeoLocation();
    });
  } else {
    applyGeoLocation();
  }
})();
