/**
 * CV i18n — EN (default), FR, DE
 */
(function () {
  const PORTFOLIO_LANG_KEY = "portfolio-lang";
  const LANGS = ["en", "fr", "de"];

  const T = {
    en: {
      metaTitle: "Samira Salah — CV",
      exportHint:
        '<strong>Export PDF</strong> — Chrome · <kbd>⌘</kbd>+<kbd>P</kbd> → <em>Save as PDF</em> · A4 · Margins <strong>None</strong> (not Default) · Background graphics <strong>On</strong>.',
      langLabel: "CV language",
      title: "Senior Freelance Android & Mobile Engineer",
      tagline:
        "Production mobile apps for France & EU — public sector, enterprise, healthcare & real-time communications",
      badgeTitle: "Available · Freelance",
      badgeScope: "France & EU · remote or on-site",
      badgeBiz: "HB IT Services · May 2026",
      m1: "8+ years",
      m1s: "Senior mobile delivery",
      m2: "Multi-store",
      m2s: "Play · App Store · Gallery",
      m3: "End-to-end",
      m3s: "Architecture → release",
      m4: "AI-accelerated",
      m4s: "Cursor & Gemini",
      profile: "Profile",
      profileText:
        'Senior mobile engineer with <strong>8+ years</strong> shipping production Android and Flutter apps. One accountable owner from scoping and architecture through store release and handover — for government, enterprise (Schneider Electric), regulated healthcare (Germany), and B2B real-time products.',
      experience: "Experience",
      experienceCont: "Experience (continued)",
      keyProjects: "Key projects",
      keyProjectsCont: "Key projects (continued)",
      earlierExp: "Earlier experience",
      earlierExpText:
        "<strong>Digitsole</strong> (France) — Lead Android, fitness apps, AWS migration, Bluetooth LE · <strong>Knowlepsy</strong> (Tunis) — Medical BLE module for epilepsy care · <strong>WIMOBI era</strong> — Côté Puces marketplace, Resto'lib, Intigo, Coffreo, SearchDoc",
      coreExpertise: "Core expertise",
      skillMobile: "Mobile & architecture",
      skillRealtime: "Real-time & maps",
      skillAi: "AI & innovation",
      skillDelivery: "Delivery & ops",
      languages: "Languages",
      education: "Education",
      eduLine: "<strong>Licence, Computer Technology</strong>ISET Sousse, Tunisia · 2013",
      langEn: "English",
      langFr: "French",
      langAr: "Arabic",
      langDe: "German",
      lvPro: "Professional",
      lvNative: "Native",
      lvDe: "A2+",
      delivered: "Delivered",
      impact: "Impact",
      footerL: "HB IT Services · Registered EU business · Quotes & invoices in EUR",
      footerR: "Full case studies: samirasalah.github.io",
      present: "Present",
      roles: {
        proxym: {
          title: "Software Team Lead — Android",
          meta: "May 2024 — Present · Dubai · Remote",
          desc: "Technical lead on UAE government mobile programs — Maskan (FTA), Dubai Chambers, Dubai Culture, Dubai Police (Dispatcher, IServe). Own architecture, dual-store strategy, and production releases.",
        },
        wimobi: {
          title: "Senior Mobile Tech Lead",
          meta: "Jan 2017 — Present · EU · Remote",
          desc: "Production Android & Flutter for EU and MENA clients. Current engagement: Proxym Middle East (UAE public sector).",
        },
        schneider: {
          title: "Android Team Leader",
          meta: "May 2023 — Mar 2024 · France · Remote",
          desc: 'Led Android team on global B2B <strong>mySchneider</strong> — MAP modules, CI/CD (Azure DevOps), Play Store releases.',
        },
      },
      projects: {
        maskan: {
          sector: "Government · UAE · FTA",
          meta: "Technical Leader · Play Store",
          intro: "Official FTA app for UAE nationals to claim VAT refunds — greenfield product with OCR document capture.",
          delivered: "Architecture, refund journeys, OCR capture, Google Wallet, Play Store ownership.",
          impact: "Faster citizen proof submission on a greenfield government product.",
        },
        chambers: {
          sector: "Government · UAE",
          meta: "Team Lead · Play Store & App Gallery",
          intro: "Live government app — AI document processing and dual-store release (Google Play & App Gallery).",
          delivered: "OpenAI document extraction; GMS→HMS migration on shared codebase.",
          impact: "More accurate document handling on a production government app.",
        },
        myschneider: {
          sector: "Enterprise · France",
          meta: "Android Team Leader · Schneider Electric",
          intro: "Global B2B mobile platform for Schneider Electric customers — MAP modules, team leadership, and continuous Play Store delivery.",
          delivered: "Led Android team on feature modules, CI/CD pipeline (Azure DevOps, Python), and Play Store release cadence.",
          impact: "Reliable global B2B mobile delivery for Schneider’s customer base worldwide.",
        },
        comunik: {
          sector: "VoIP · B2B",
          delivered: "Enterprise softphone — SIP, hold/transfer/conference, Play Store & App Store.",
          impact: "Production mobile voice layer for Comunik’s cloud telephony platform.",
        },
        gesundheit: {
          sector: "Healthcare · Germany",
          delivered: "Doctor (video care) & Translatly (live translation) — GDPR-conscious Flutter apps.",
          impact: "Two live healthcare apps for patients and care teams in Germany.",
        },
        dispatcher: {
          sector: "Government · UAE",
          delivered: "MDVR integration, plate alerts, TTS notifications, Esri maps.",
          impact: "Real-time field operations support for Dubai Police fleet.",
        },
        runnrz: {
          sector: "Consumer · France",
          delivered: "Full iOS→Android port with Mapbox navigation and fitness tracking.",
          impact: "Android parity for an established French consumer fitness app.",
        },
      },
    },
    fr: {
      metaTitle: "Samira Salah — CV",
      exportHint:
        '<strong>Exporter en PDF</strong> — Chrome · <kbd>⌘</kbd>+<kbd>P</kbd> → <em>Enregistrer au format PDF</em> · A4 · Marges <strong>Aucune</strong> (pas Par défaut) · Graphiques d\'arrière-plan <strong>Activés</strong>.',
      langLabel: "Langue du CV",
      title: "Ingénieure mobile senior freelance · Android",
      tagline:
        "Apps mobiles en production pour la France & l'UE — secteur public, entreprise, santé & communications temps réel",
      badgeTitle: "Disponible · Freelance",
      badgeScope: "France & UE · remote ou sur site",
      badgeBiz: "HB IT Services · Mai 2026",
      m1: "8+ ans",
      m1s: "Mobile senior",
      m2: "Multi-stores",
      m2s: "Play · App Store · Gallery",
      m3: "Bout en bout",
      m3s: "Architecture → release",
      m4: "IA accélérée",
      m4s: "Cursor & Gemini",
      profile: "Profil",
      profileText:
        'Ingénieure mobile senior avec <strong>8+ ans</strong> de livraison d\'applications Android et Flutter en production. Une seule responsable de bout en bout — du cadrage et l\'architecture jusqu\'à la release store et la passation — secteur public, entreprise (Schneider Electric), santé réglementée (Allemagne) et produits temps réel B2B.',
      experience: "Expérience",
      experienceCont: "Expérience (suite)",
      keyProjects: "Projets clés",
      keyProjectsCont: "Projets clés (suite)",
      earlierExp: "Expérience antérieure",
      earlierExpText:
        "<strong>Digitsole</strong> (France) — Lead Android, apps fitness, migration AWS, Bluetooth LE · <strong>Knowlepsy</strong> (Tunis) — Module BLE médical pour épilepsie · <strong>Ère WIMOBI</strong> — marketplace Côté Puces, Resto'lib, Intigo, Coffreo, SearchDoc",
      coreExpertise: "Expertise clé",
      skillMobile: "Mobile & architecture",
      skillRealtime: "Temps réel & cartographie",
      skillAi: "IA & innovation",
      skillDelivery: "Delivery & ops",
      languages: "Langues",
      education: "Formation",
      eduLine: "<strong>Licence, Technologie informatique</strong>ISET Sousse, Tunisie · 2013",
      langEn: "Anglais",
      langFr: "Français",
      langAr: "Arabe",
      langDe: "Allemand",
      lvPro: "Professionnel",
      lvNative: "Natif",
      lvDe: "A2+",
      delivered: "Livré",
      impact: "Impact",
      footerL: "HB IT Services · Entreprise UE enregistrée · Devis & factures en EUR",
      footerR: "Études de cas : samirasalah.github.io",
      present: "Aujourd'hui",
      roles: {
        proxym: {
          title: "Software Team Lead — Android",
          meta: "Mai 2024 — Aujourd'hui · Dubaï · Remote",
          desc: "Lead technique sur les programmes mobiles gouvernementaux EAU — Maskan (FTA), Dubai Chambers, Dubai Culture, Dubai Police (Dispatcher, IServe). Architecture, stratégie dual-store et releases production.",
        },
        wimobi: {
          title: "Senior Mobile Tech Lead",
          meta: "Jan 2017 — Aujourd'hui · UE · Remote",
          desc: "Android & Flutter en production pour clients UE et MENA. Mission actuelle : Proxym Middle East (secteur public EAU).",
        },
        schneider: {
          title: "Android Team Leader",
          meta: "Mai 2023 — Mar 2024 · France · Remote",
          desc: 'Direction de l\'équipe Android sur <strong>mySchneider</strong> B2B mondial — modules MAP, CI/CD (Azure DevOps), releases Play Store.',
        },
      },
      projects: {
        maskan: {
          sector: "Secteur public · EAU · FTA",
          meta: "Lead technique · Play Store",
          intro: "Application officielle FTA pour les retraités de TVA aux EAU — produit greenfield avec capture OCR de justificatifs.",
          delivered: "Architecture modulaire, parcours remboursement, capture OCR, Google Wallet, ownership Play Store.",
          impact: "Soumission plus rapide des justificatifs citoyens sur un produit gouvernemental greenfield.",
        },
        chambers: {
          sector: "Secteur public · EAU",
          meta: "Team Lead · Play Store & App Gallery",
          intro: "Application gouvernementale Dubai Chambers — traitement documentaire IA et release dual-store (Google Play & App Gallery).",
          delivered: "Extraction OpenAI sur documents ; migration GMS→HMS sur codebase partagée.",
          impact: "Traitement documentaire plus fiable sur une app gouvernementale en production.",
        },
        myschneider: {
          sector: "Entreprise · France",
          meta: "Android Team Leader · Schneider Electric",
          intro: "Plateforme mobile B2B mondiale pour les clients Schneider — modules MAP, leadership d'équipe, delivery Play Store continue.",
          delivered: "Direction équipe Android sur modules, pipeline CI/CD (Azure DevOps, Python), cadence de release Play Store.",
          impact: "Delivery mobile B2B fiable pour la base clients Schneider dans le monde.",
        },
        comunik: {
          sector: "VoIP · B2B",
          delivered: "Softphone entreprise — SIP, hold/transfert/conférence, Play Store & App Store.",
          impact: "Couche voix mobile en production pour la plateforme téléphonie cloud Comunik.",
        },
        gesundheit: {
          sector: "Santé · Allemagne",
          delivered: "Doctor (télésoins vidéo) & Translatly (traduction live) — apps Flutter conformes RGPD.",
          impact: "Deux apps santé en production pour patients et équipes soignantes en Allemagne.",
        },
        dispatcher: {
          sector: "Secteur public · EAU",
          delivered: "Intégration MDVR, alertes plaques, notifications TTS, cartes Esri.",
          impact: "Support opérations terrain en temps réel pour la flotte Dubai Police.",
        },
        runnrz: {
          sector: "Grand public · France",
          delivered: "Portage iOS→Android complet avec navigation Mapbox et suivi fitness.",
          impact: "Parité Android pour une app fitness grand public établie en France.",
        },
      },
    },
    de: {
      metaTitle: "Samira Salah — Lebenslauf",
      exportHint:
        '<strong>PDF exportieren</strong> — Chrome · <kbd>⌘</kbd>+<kbd>P</kbd> → <em>Als PDF speichern</em> · A4 · Ränder <strong>Keine</strong> (nicht Standard) · Hintergrundgrafiken <strong>Ein</strong>.',
      langLabel: "Sprache des Lebenslaufs",
      title: "Senior Freelance Android & Mobile Engineer",
      tagline:
        "Produktive Mobile Apps für Frankreich & EU — öffentlicher Sektor, Enterprise, Healthcare & Echtzeit-Kommunikation",
      badgeTitle: "Verfügbar · Freelance",
      badgeScope: "Frankreich & EU · remote oder vor Ort",
      badgeBiz: "HB IT Services · Mai 2026",
      m1: "8+ Jahre",
      m1s: "Senior Mobile Delivery",
      m2: "Multi-Store",
      m2s: "Play · App Store · Gallery",
      m3: "End-to-End",
      m3s: "Architektur → Release",
      m4: "KI-beschleunigt",
      m4s: "Cursor & Gemini",
      profile: "Profil",
      profileText:
        'Senior Mobile Engineer mit <strong>8+ Jahren</strong> produktiver Android- und Flutter-Lieferung. Eine verantwortliche Senior-Ansprechpartnerin von Scoping und Architektur bis Store-Release und Übergabe — Behörden, Enterprise (Schneider Electric), reguliertes Healthcare (Deutschland) und B2B-Echtzeitprodukte.',
      experience: "Berufserfahrung",
      experienceCont: "Berufserfahrung (Fortsetzung)",
      keyProjects: "Schlüsselprojekte",
      keyProjectsCont: "Schlüsselprojekte (Fortsetzung)",
      earlierExp: "Frühere Erfahrung",
      earlierExpText:
        "<strong>Digitsole</strong> (Frankreich) — Lead Android, Fitness-Apps, AWS-Migration, Bluetooth LE · <strong>Knowlepsy</strong> (Tunis) — Medizinisches BLE-Modul für Epilepsie · <strong>WIMOBI-Ära</strong> — Côté Puces Marktplatz, Resto'lib, Intigo, Coffreo, SearchDoc",
      coreExpertise: "Kernkompetenzen",
      skillMobile: "Mobile & Architektur",
      skillRealtime: "Echtzeit & Karten",
      skillAi: "KI & Innovation",
      skillDelivery: "Delivery & Ops",
      languages: "Sprachen",
      education: "Ausbildung",
      eduLine: "<strong>Lizenz, Computertechnologie</strong>ISET Sousse, Tunesien · 2013",
      langEn: "Englisch",
      langFr: "Französisch",
      langAr: "Arabisch",
      langDe: "Deutsch",
      lvPro: "Berufssprache",
      lvNative: "Muttersprache",
      lvDe: "A2+ · im Aufbau",
      delivered: "Geliefert",
      impact: "Impact",
      footerL: "HB IT Services · EU-registriertes Unternehmen · Angebote & Rechnungen in EUR",
      footerR: "Fallstudien: samirasalah.github.io",
      present: "Heute",
      roles: {
        proxym: {
          title: "Software Team Lead — Android",
          meta: "Mai 2024 — Heute · Dubai · Remote",
          desc: "Technische Leitung für mobile Regierungsprogramme der VAE — Maskan (FTA), Dubai Chambers, Dubai Culture, Dubai Police (Dispatcher, IServe). Architektur, Dual-Store-Strategie und Production-Releases.",
        },
        wimobi: {
          title: "Senior Mobile Tech Lead",
          meta: "Jan 2017 — Heute · EU · Remote",
          desc: "Produktives Android & Flutter für EU- und MENA-Kunden. Aktueller Einsatz: Proxym Middle East (öffentlicher Sektor VAE).",
        },
        schneider: {
          title: "Android Team Leader",
          meta: "Mai 2023 — Mär 2024 · Frankreich · Remote",
          desc: 'Leitung des Android-Teams für globales B2B-<strong>mySchneider</strong> — MAP-Module, CI/CD (Azure DevOps), Play-Store-Releases.',
        },
      },
      projects: {
        maskan: {
          sector: "Behörden · VAE · FTA",
          meta: "Technical Leader · Play Store",
          intro: "Offizielle FTA-App für MwSt.-Erstattungen in den VAE — Greenfield-Produkt mit OCR-Belegerfassung.",
          delivered: "Modulare Architektur, Erstattungsflows, OCR-Capture, Google Wallet, Play-Store-Verantwortung.",
          impact: "Schnellere Einreichung von Nachweisen für Bürger auf einem Greenfield-Behördenprodukt.",
        },
        chambers: {
          sector: "Behörden · VAE",
          meta: "Team Lead · Play Store & App Gallery",
          intro: "Live-Behörden-App Dubai Chambers — KI-Dokumentenverarbeitung und Dual-Store-Release (Google Play & App Gallery).",
          delivered: "OpenAI-Extraktion aus Dokumenten; GMS→HMS-Migration auf gemeinsamer Codebasis.",
          impact: "Genauere Dokumentenverarbeitung auf einer produktiven Behörden-App.",
        },
        myschneider: {
          sector: "Enterprise · Frankreich",
          meta: "Android Team Leader · Schneider Electric",
          intro: "Globale B2B-Mobile-Plattform für Schneider-Kunden — MAP-Module, Teamführung, kontinuierliche Play-Store-Lieferung.",
          delivered: "Android-Teamleitung für Feature-Module, CI/CD-Pipeline (Azure DevOps, Python), Play-Store-Release-Kadenz.",
          impact: "Zuverlässige globale B2B-Mobile-Lieferung für Schneiders Kunden weltweit.",
        },
        comunik: {
          sector: "VoIP · B2B",
          delivered: "Enterprise-Softphone — SIP, Hold/Transfer/Konferenz, Play Store & App Store.",
          impact: "Produktive Mobile-Voice-Schicht für Comuniks Cloud-Telefonieplattform.",
        },
        gesundheit: {
          sector: "Healthcare · Deutschland",
          delivered: "Doctor (Videoversorgung) & Translatly (Live-Übersetzung) — DSGVO-bewusste Flutter-Apps.",
          impact: "Zwei live Healthcare-Apps für Patienten und Care-Teams in Deutschland.",
        },
        dispatcher: {
          sector: "Behörden · VAE",
          delivered: "MDVR-Integration, Kennzeichen-Alerts, TTS-Benachrichtigungen, Esri-Karten.",
          impact: "Echtzeit-Unterstützung für Feldoperationen der Dubai Police.",
        },
        runnrz: {
          sector: "Consumer · Frankreich",
          delivered: "Vollständiger iOS→Android-Port mit Mapbox-Navigation und Fitness-Tracking.",
          impact: "Android-Parität für eine etablierte französische Consumer-Fitness-App.",
        },
      },
    },
  };

  function resolve(obj, path) {
    return path.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
  }

  function getLang() {
    if (window.__CV_LANG && LANGS.includes(window.__CV_LANG)) return window.__CV_LANG;
    const params = new URLSearchParams(window.location.search);
    const q = params.get("lang");
    if (q && LANGS.includes(q)) return q;
    try {
      const saved = localStorage.getItem(PORTFOLIO_LANG_KEY);
      if (saved && LANGS.includes(saved)) return saved;
    } catch (_) { /* ignore */ }
    const htmlLang = document.documentElement.lang;
    if (htmlLang && LANGS.includes(htmlLang)) return htmlLang;
    return "en";
  }

  function applyLang(lang) {
    if (!LANGS.includes(lang)) lang = "en";
    const t = T[lang];
    document.documentElement.lang = lang;
    document.title = t.metaTitle;

    document.querySelectorAll("[data-cv-i18n]").forEach((el) => {
      const key = el.getAttribute("data-cv-i18n");
      const val = resolve(t, key);
      if (val == null) return;
      if (el.getAttribute("data-cv-i18n-html") === "true") el.innerHTML = val;
      else el.textContent = val;
    });

    try {
      localStorage.setItem(PORTFOLIO_LANG_KEY, lang);
    } catch (_) { /* ignore */ }

    document.documentElement.classList.add("cv-i18n-ready");

    if (window.consultantGeo) window.consultantGeo.refreshGeoLabels();
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLang(getLang());
  });

  window.cvI18n = { applyLang, T, getLang };
})();
