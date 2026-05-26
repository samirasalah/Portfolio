/**
 * Portfolio i18n — EN (default), FR, DE
 */
(function () {
  const STORAGE_KEY = "portfolio-lang";
  const LANGS = ["en", "fr", "de"];

  const T = {
    en: {
      meta: {
        title: "Samira Salah — Senior Android & Mobile Engineer · AI-driven delivery",
        description:
          "Samira Salah — Senior Android & Mobile Engineer. Jetpack Compose, Flutter, LLM integration. 30+ apps, AI-driven delivery for EU & MENA clients.",
      },
      skip: "Skip to content",
      nav: {
        status: "Available",
        statusAria: "Available for projects — go to contact",
        ai: "AI edge",
        expertise: "Expertise",
        work: "Work",
        experience: "Experience",
        contact: "Contact",
        hire: "Hire me",
        menuOpen: "Open menu",
        lang: "Language",
      },
      hero: {
        eyebrow: "Freelance · Germany · EU remote",
        trade: 'Contracting via <strong>HB IT Services</strong>',
        title: 'Senior Android & Mobile Engineer — Compose, Flutter & <span class="accent">AI-driven delivery</span>',
        lead:
          'I ship <strong>Android & Flutter</strong> to the stores — architecture, releases on <span class="store-name">Play Store</span>, <span class="store-name">App Store</span>, and <span class="store-name">App Gallery</span>, plus <strong>AI-accelerated delivery</strong> with security and privacy built in.',
        proof1: "years senior mobile",
        proof2: "apps in production",
        proof3: "features in production",
        ctaBook: "Book a call",
        ctaCv: "Download CV",
        ctaWork: "See case work",
        panelLabel: "Why clients hire me",
        panelTitle: "AI is your <em>delivery multiplier</em>",
        panelSummary:
          "I use AI to shorten build and refactor cycles while keeping architecture, security reviews, and store releases under human control — not vibe-coded prototypes.",
        panelCta: "How I use AI on delivery →",
      },
      ai: {
        label: "Freelance advantage",
        title: "Ship faster — without gambling on quality",
        intro: "AI speeds up execution; I keep architecture, QA, and releases under senior ownership.",
        m1h: "Engineering velocity",
        m1p: "Shorter loops on features, refactors & integration work when AI handles the repetitive layer and I own the design.",
        m2h: "Routine work offload",
        m2p: "Scaffolding, unit/UI test drafts, API glue, migration helpers, release notes — reviewed and production-hardened.",
        m3h: "MVP / slice delivery",
        m3p: "Clear scope → working build faster: ideal for freelance phases, PoCs, and parallel product tracks.",
        m4h: "In-app intelligence",
        m4p: "Assistants, smart forms, and guided UX — OpenAI & Gemini with privacy-aware APIs and maintainable architecture.",
        compareBad: "Typical freelance hire",
        compareGood: "Working with me",
        bad1: "Manual boilerplate & slow test coverage",
        bad2: "LLM demos that never reach stores",
        bad3: "QA bottlenecks on real devices",
        bad4: "Architecture debt after speed hacks",
        good1: "AI-accelerated execution, human-owned architecture",
        good2: "LLM features shipped to production users",
        good3:
          'Structured device QA before <span class="store-name">Play Store</span>, <span class="store-name">App Store</span> & <span class="store-name">App Gallery</span> releases',
        good4: "DI-first architecture, vulnerability fixes, predictable releases",
        step1: "Scope & architecture",
        step2: "Build with AI-assisted velocity",
        step3: "QA, release ownership & handover",
      },
      expertise: {
        label: "Core expertise",
        title: "What you get as a freelance expert",
        intro:
          "End-to-end mobile delivery — scoping, build, release, and handover — with clear communication and no junior surprise on critical paths.",
        s1t: "Greenfield apps",
        s1d: 'Compose / Flutter — architecture through <span class="store-name">Play Store</span> & <span class="store-name">App Store</span> release',
        s2t: "Legacy modernization",
        s2d: "Java → Kotlin, DI (Hilt / Koin), CVE & dependency fixes",
        s3t: "AI in your product",
        s3d: "LLM features users touch — not slide decks",
        s4t: "Rescue & acceleration",
        s4d: "Refactor, vulnerability remediation, CI/CD, QA",
        e1h: "Android & architecture",
        e1p: 'Kotlin, Jetpack Compose, Clean Architecture, MVVM/MVI, Hilt & Koin, legacy Java migration, and releases on <span class="store-name">Play Store</span>, <span class="store-name">App Gallery</span> & <span class="store-name">App Store</span> (Flutter).',
        e2h: "AI in product & process",
        e2p: "LLM integrations, Model Context Protocol (MCP), AI-assisted refactoring, Cursor delivery — certified in Generative AI for Software Development & Gemini CLI.",
        e3h: "Flutter & cross-platform",
        e3p: 'Flutter apps end-to-end — including <span class="store-name">App Store</span> deployment (builds, submission, releases) alongside <span class="store-name">Play Store</span>. Kotlin Multiplatform and iOS collaboration when products span platforms.',
        e4h: "Integrations & ops",
        e4p: "REST, Firebase, AWS, OAuth, CI/CD — including <strong>Python</strong> pipeline scripts on Azure DevOps. Maps: Esri, HERE, Mapbox, Google Maps. Security: dependency audits, CVE fixes, store compliance.",
      },
      work: {
        label: "Case work",
        title: "Problems solved — with proof",
        intro: "Each card covers context, delivery, impact, and the stack used on that project.",
        g1: "Enterprise & government",
        g2: "PROXYM Middle East · 2024–present · UAE public sector",
        g2note: "Software Team Lead Android · PROXYM Middle East",
        g3: "Product & scale · consumer & vertical apps",
        playLink: "Play Store →",
        playStore: "Play Store",
        appGallery: "App Gallery",
        coffreo: "Coffreo on Play Store →",
      },
      label: { challenge: "Challenge", delivered: "Delivered", impact: "Impact", examples: "Examples" },
      exp: {
        label: "Career",
        title: "Experience",
        intro: 'Timeline of roles — open the <a href="#work">case work</a> section for project details.',
        s1: "public-sector lead",
        s2: "Schneider & B2B",
        s3: "in production apps",
        s4: "EU & MENA",
        caseStudy: "Case study",
        caseStudyArrow: "Case study →",
        wimobiWork: "WIMOBI-era case work →",
        credTitle: "Education & credentials",
        credEdu: "Education",
        credLearn: "Continuous learning",
        credLang: "Languages",
        langEn: "English",
        langFr: "French",
        langAr: "Arabic",
        langDe: "German",
        langEnLv: "Professional",
        langFrLv: "Professional",
        langArLv: "Native",
        langDeLv: "A2+ · improving",
        present: "Present",
        proxymRole: "Software Team Lead Android",
        proxymTime: "May 2024 — Present",
        proxymLoc: "Dubai, UAE · Remote",
        proxymSum: "UAE government & public-sector mobile programs.",
        wimobiRole: "Leader Android & Flutter",
        wimobiTime: "Jan 2017 — Present",
        wimobiLoc: "Mahdia, Tunisia · Remote EU",
        wimobiSum: "Agency studio — 30+ production apps for EU & MENA clients (2017–present, alongside client roles).",
        schneiderRole: "Android Team Leader",
        schneiderTime: "May 2023 — Mar 2024",
        schneiderLoc: "France · Remote",
        schneiderSum: 'Android Team Leader — <strong>mySchneider</strong>: MAP, GitHub/Dependabot, Python CI/CD on Azure DevOps, Play Store (May 2023 – Mar 2024).',
        knowlepsyRole: "Senior Flutter Developer",
        knowlepsyTime: "May 2023 — Aug 2023",
        knowlepsyLoc: "Tunis, Tunisia",
        knowlepsySum: "Senior Flutter Developer — epilepsy care module (May – Aug 2023).",
        digitsoleRole: "Android Consultant",
        digitsoleTime: "Jun 2021 — Sep 2022",
        digitsoleLoc: "France",
        digitsoleSum: "Android Consultant — Digitsole Running & Walk (Jun 2021 – Sep 2022).",
        cotepucesRole: "Android Developer",
        cotepucesTime: "Sep 2021 — Feb 2022",
        cotepucesSum: "Android Developer — Côté Puces marketplace (Sep 2021 – Feb 2022).",
        codecoRole: "Tech Lead & Flutter Developer",
        codecoTime: "Dec 2020 — Dec 2021",
        codecoLoc: "Germany",
        codecoSum: "Tech Lead & Flutter — Gesundheitspersonal; Play Store & App Store deployment (Dec 2020 – Dec 2021).",
        eduMain: "Licence, Computer Technology",
        eduSub1: "ISET Sousse · 2013",
        eduSub2: "Erriadh High School — Computer Science · 2009",
        course1: "Generative AI for Software Development",
        course2: "Gemini CLI — Code & Create with an Open-Source Agent",
        course3: "Pair Programming with a Large Language Model",
        course4: "Jetpack Compose — Udemy",
        course5: "Advanced Flutter UI — Coursera",
        course6: "AWS Amplify & Firebase",
        heroLoc: "Bergneustadt, Germany",
        navPrimary: "Primary",
        heroProofAria: "Key metrics",
        heroPanelAria: "AI delivery impact",
        expAria: "Career highlights",
        bizAria: "Business details",
      },
      contact: {
        label: "Hire me",
        title: "Let's scope your next mobile build",
        intro:
          "Freelance missions, fixed phases, or long-term partnership — EU remote from Germany. Share your product; I'll reply with fit, timeline, and approach.",
        bizLabel: "Contracts & invoices",
        bizName: "<strong>HB IT Services</strong> · Bergneustadt, Germany",
        bizNote: "EU remote · quotes & invoices in EUR · tax details on request.",
      },
      footer: "© {year} Samira Salah · HB IT Services · Senior Android & Mobile Engineer",
    },
    fr: {
      meta: {
        title: "Samira Salah — Ingénieure mobile senior · Android, Flutter & IA",
        description:
          "Samira Salah — Ingénieure mobile senior. Jetpack Compose, Flutter, intégration LLM. Plus de 30 apps en production, livraison accélérée par l'IA pour clients UE et MENA.",
      },
      skip: "Aller au contenu",
      nav: {
        status: "Disponible",
        statusAria: "Disponible pour des missions — aller au contact",
        ai: "Atout IA",
        expertise: "Expertise",
        work: "Réalisations",
        experience: "Parcours",
        contact: "Contact",
        hire: "Me contacter",
        menuOpen: "Ouvrir le menu",
        lang: "Langue",
      },
      hero: {
        eyebrow: "Freelance · Allemagne · télétravail UE",
        trade: 'Contrats via <strong>HB IT Services</strong>',
        title: 'Ingénieure mobile senior — Compose, Flutter & <span class="accent">livraison pilotée par l\'IA</span>',
        lead:
          'Je livre <strong>Android et Flutter</strong> sur les stores — architecture, publications sur <span class="store-name">Play Store</span>, <span class="store-name">App Store</span> et <span class="store-name">App Gallery</span>, avec une <strong>livraison accélérée par l\'IA</strong>, sécurité et confidentialité intégrées.',
        proof1: "ans d'expérience mobile senior",
        proof2: "apps en production",
        proof3: "fonctions LLM en production",
        ctaBook: "Réserver un appel",
        ctaCv: "Télécharger le CV",
        ctaWork: "Voir les réalisations",
        panelLabel: "Pourquoi les clients me choisissent",
        panelTitle: "L'IA, votre <em>multiplicateur de livraison</em>",
        panelSummary:
          "J'utilise l'IA pour raccourcir les cycles de développement et de refactorisation, tout en gardant l'architecture, les revues de sécurité et les mises en store sous contrôle humain — pas des prototypes « vibe-coded ».",
        panelCta: "Comment j'utilise l'IA à la livraison →",
      },
      ai: {
        label: "Avantage freelance",
        title: "Livrer plus vite — sans sacrifier la qualité",
        intro: "L'IA accélère l'exécution ; l'architecture, la QA et les releases restent sous pilotage senior.",
        m1h: "Vélocité d'ingénierie",
        m1p: "Cycles plus courts sur les fonctionnalités, refactors et intégrations : l'IA prend en charge la couche répétitive, je porte la conception.",
        m2h: "Travail routinier délégué",
        m2p: "Scaffolding, brouillons de tests UI/unitaires, glue API, migrations, notes de version — revus et durcis pour la production.",
        m3h: "MVP / tranches fonctionnelles",
        m3p: "Périmètre clair → version fonctionnelle plus tôt : idéal pour phases freelance, POC et pistes produit parallèles.",
        m4h: "Intelligence embarquée",
        m4p: "Assistants, formulaires intelligents, parcours guidés — OpenAI et Gemini avec des API respectueuses de la vie privée.",
        compareBad: "Freelance classique",
        compareGood: "Travailler avec moi",
        bad1: "Boilerplate manuel et couverture de tests lente",
        bad2: "Démos LLM qui n'atteignent jamais les stores",
        bad3: "Goulots d'étranglement QA sur appareils réels",
        bad4: "Dette d'architecture après des raccourcis de vitesse",
        good1: "Exécution accélérée par l'IA, architecture maîtrisée",
        good2: "Fonctionnalités LLM livrées en production",
        good3:
          'QA structurée sur appareils avant publication sur <span class="store-name">Play Store</span>, <span class="store-name">App Store</span> et <span class="store-name">App Gallery</span>',
        good4: "Architecture orientée DI, correctifs CVE, releases prévisibles",
        step1: "Cadrage et architecture",
        step2: "Développement accéléré par l'IA",
        step3: "QA, releases et passation",
      },
      expertise: {
        label: "Expertise clé",
        title: "Ce que vous obtenez avec une experte freelance",
        intro:
          "Livraison mobile de bout en bout — cadrage, développement, release et passation — avec une communication claire et sans mauvaise surprise sur les sujets critiques.",
        s1t: "Applications greenfield",
        s1d: 'Compose / Flutter — de l\'architecture à la mise en production sur <span class="store-name">Play Store</span> et <span class="store-name">App Store</span>',
        s2t: "Modernisation d'applications existantes",
        s2d: "Java → Kotlin, injection de dépendances (Hilt / Koin), CVE et dépendances",
        s3t: "IA dans votre produit",
        s3d: "Fonctionnalités LLM utilisées par vos clients — pas des slides",
        s4t: "Reprise et accélération",
        s4d: "Refactorisation, correction des CVE, CI/CD, QA",
        e1h: "Android et architecture",
        e1p: 'Kotlin, Jetpack Compose, Clean Architecture, MVVM/MVI, Hilt et Koin, migration Java, publications sur <span class="store-name">Play Store</span>, <span class="store-name">App Gallery</span> et <span class="store-name">App Store</span>.',
        e2h: "IA produit et processus",
        e2p: "Intégrations LLM, MCP, refactorisation assistée par IA, delivery avec Cursor — certifiée Generative AI for Software Development et Gemini CLI.",
        e3h: "Flutter et multiplateforme",
        e3p: 'Applications Flutter de bout en bout — déploiement <span class="store-name">App Store</span> (builds, soumission, releases) et <span class="store-name">Play Store</span>. KMP et collaboration iOS.',
        e4h: "Intégrations et exploitation",
        e4p: "REST, Firebase, AWS, OAuth, CI/CD — scripts <strong>Python</strong> sur Azure DevOps. Cartographie : Esri, HERE, Mapbox, Google Maps. Sécurité : audits, CVE, conformité stores.",
      },
      work: {
        label: "Études de cas",
        title: "Problèmes résolus — avec preuves",
        intro: "Chaque carte présente le contexte, la livraison, l'impact et la stack du projet.",
        g1: "Entreprise et secteur public",
        g2: "PROXYM Middle East · 2024–aujourd'hui · secteur public (EAU)",
        g2note: "Software Team Lead Android · PROXYM Middle East",
        g3: "Produit et scale · applications grand public",
        playLink: "Play Store →",
        playStore: "Play Store",
        appGallery: "App Gallery",
        coffreo: "Coffreo sur le Play Store →",
      },
      label: { challenge: "Enjeu", delivered: "Livraison", impact: "Impact", examples: "Exemples" },
      exp: {
        label: "Parcours",
        title: "Expérience",
        intro: 'Chronologie des missions — détails dans la section <a href="#work">études de cas</a>.',
        s1: "pilote secteur public",
        s2: "Schneider et B2B",
        s3: "fonctions LLM en production",
        s4: "UE et MENA",
        caseStudy: "Étude de cas",
        caseStudyArrow: "Étude de cas →",
        wimobiWork: "Projets WIMOBI →",
        credTitle: "Formation & certifications",
        credEdu: "Formation",
        credLearn: "Formation continue",
        credLang: "Langues",
        langEn: "Anglais",
        langFr: "Français",
        langAr: "Arabe",
        langDe: "Allemand",
        langEnLv: "Professionnel",
        langFrLv: "Professionnel",
        langArLv: "Natif",
        langDeLv: "A2+ · en progression",
        present: "Aujourd'hui",
        proxymRole: "Software Team Lead Android",
        proxymTime: "Mai 2024 — Aujourd'hui",
        proxymLoc: "Dubaï, EAU · Télétravail",
        proxymSum: "Programmes mobiles gouvernementaux et secteur public aux EAU.",
        wimobiRole: "Lead Android et Flutter",
        wimobiTime: "Janv. 2017 — Aujourd'hui",
        wimobiLoc: "Mahdia, Tunisie · Télétravail UE",
        wimobiSum: "Studio agence — plus de 30 apps en production pour clients UE et MENA (2017–aujourd'hui, en parallèle des missions clients).",
        schneiderRole: "Responsable équipe Android",
        schneiderTime: "Mai 2023 — Mars 2024",
        schneiderLoc: "France · Télétravail",
        schneiderSum: 'Responsable Android — <strong>mySchneider</strong> : MAP, GitHub/Dependabot, CI/CD Python sur Azure DevOps, Play Store (mai 2023 – mars 2024).',
        knowlepsyRole: "Développeuse Flutter senior",
        knowlepsyTime: "Mai 2023 — Août 2023",
        knowlepsyLoc: "Tunis, Tunisie",
        knowlepsySum: "Développeuse Flutter senior — module soins épilepsie (mai – août 2023).",
        digitsoleRole: "Consultante Android",
        digitsoleTime: "Juin 2021 — Sept. 2022",
        digitsoleLoc: "France",
        digitsoleSum: "Consultante Android — Digitsole Running & Walk (juin 2021 – sept. 2022).",
        cotepucesRole: "Développeuse Android",
        cotepucesTime: "Sept. 2021 — Fév. 2022",
        cotepucesSum: "Développeuse Android — marketplace Côté Puces (sept. 2021 – fév. 2022).",
        codecoRole: "Tech Lead & développeuse Flutter",
        codecoTime: "Déc. 2020 — Déc. 2021",
        codecoLoc: "Allemagne",
        codecoSum: "Tech Lead & Flutter — Gesundheitspersonal ; déploiement Play Store et App Store (déc. 2020 – déc. 2021).",
        eduMain: "Licence, technologies informatiques",
        eduSub1: "ISET Sousse · 2013",
        eduSub2: "Lycée Erriadh — informatique · 2009",
        course1: "Generative AI for Software Development",
        course2: "Gemini CLI — Code & Create with an Open-Source Agent",
        course3: "Pair Programming with a Large Language Model",
        course4: "Jetpack Compose — Udemy",
        course5: "Advanced Flutter UI — Coursera",
        course6: "AWS Amplify & Firebase",
        heroLoc: "Bergneustadt, Allemagne",
        navPrimary: "Navigation principale",
        heroProofAria: "Indicateurs clés",
        heroPanelAria: "Impact de l'IA sur la delivery",
        expAria: "Points forts du parcours",
        bizAria: "Informations professionnelles",
      },
      contact: {
        label: "Me contacter",
        title: "Planifions votre prochain projet mobile",
        intro:
          "Missions freelance, phases fixes ou partenariat long terme — télétravail UE depuis l'Allemagne. Décrivez votre produit ; je vous réponds avec une analyse d'adéquation, un planning et une approche.",
        bizLabel: "Contrats et factures",
        bizName: "<strong>HB IT Services</strong> · Bergneustadt, Allemagne",
        bizNote: "Télétravail UE · devis et factures en EUR · informations fiscales sur demande.",
      },
      footer: "© {year} Samira Salah · HB IT Services · Ingénieure mobile senior",
    },
    de: {
      meta: {
        title: "Samira Salah — Senior Android- & Mobile-Ingenieurin · KI-gestützte Delivery",
        description:
          "Samira Salah — Senior Mobile Engineer. Jetpack Compose, Flutter, LLM-Integration. Über 30 Apps in Produktion, KI-beschleunigte Delivery für EU- und MENA-Kunden.",
      },
      skip: "Zum Inhalt springen",
      nav: {
        status: "Verfügbar",
        statusAria: "Verfügbar für Projekte — zum Kontakt",
        ai: "KI-Vorteil",
        expertise: "Expertise",
        work: "Projekte",
        experience: "Karriere",
        contact: "Kontakt",
        hire: "Anfragen",
        menuOpen: "Menü öffnen",
        lang: "Sprache",
      },
      hero: {
        eyebrow: "Freelance · Deutschland · EU-Remote",
        trade: 'Aufträge über <strong>HB IT Services</strong>',
        title: 'Senior Android- & Mobile-Ingenieurin — Compose, Flutter & <span class="accent">KI-gestützte Delivery</span>',
        lead:
          'Ich bringe <strong>Android und Flutter</strong> in die Stores — Architektur, Veröffentlichungen im <span class="store-name">Play Store</span>, <span class="store-name">App Store</span> und <span class="store-name">App Gallery</span>, plus <strong>KI-beschleunigte Delivery</strong> mit Security und Datenschutz.',
        proof1: "Jahre Senior Mobile",
        proof2: "Apps in Produktion",
        proof3: "LLM-Features in Produktion",
        ctaBook: "Gespräch buchen",
        ctaCv: "Lebenslauf (PDF)",
        ctaWork: "Referenzen ansehen",
        panelLabel: "Warum Kunden mich buchen",
        panelTitle: "KI als <em>Delivery-Multiplikator</em>",
        panelSummary:
          "KI verkürzt Build- und Refactoring-Zyklen — Architektur, Security-Reviews und Store-Releases bleiben unter menschlicher Kontrolle, nicht bei « Vibe-Coding »-Prototypen.",
        panelCta: "KI in der Delivery →",
      },
      ai: {
        label: "Freelance-Vorteil",
        title: "Schneller liefern — ohne Qualitätsrisiko",
        intro: "KI beschleunigt die Umsetzung; Architektur, QA und Releases bleiben in Senior-Verantwortung.",
        m1h: "Engineering-Velocity",
        m1p: "Kürzere Zyklen bei Features, Refactorings und Integrationen: KI übernimmt die repetitive Schicht, ich verantworte das Design.",
        m2h: "Routinearbeit delegiert",
        m2p: "Scaffolding, Unit-/UI-Test-Entwürfe, API-Glue, Migrationen, Release Notes — geprüft und produktionsreif.",
        m3h: "MVP / Funktions-Slices",
        m3p: "Klarer Scope → schnellerer Build: ideal für Freelance-Phasen, PoCs und parallele Produktspuren.",
        m4h: "In-App-Intelligence",
        m4p: "Assistenten, intelligente Formulare, geführte UX — OpenAI und Gemini mit datenschutzbewussten APIs.",
        compareBad: "Typischer Freelancer",
        compareGood: "Zusammenarbeit mit mir",
        bad1: "Manuelles Boilerplate und langsame Testabdeckung",
        bad2: "LLM-Demos ohne Store-Release",
        bad3: "QA-Engpässe auf echten Geräten",
        bad4: "Architekturschulden nach Speed-Hacks",
        good1: "KI-beschleunigte Umsetzung, Architektur im Griff",
        good2: "LLM-Features in Produktion",
        good3:
          'Strukturierte Geräte-QA vor Veröffentlichung im <span class="store-name">Play Store</span>, <span class="store-name">App Store</span> und <span class="store-name">App Gallery</span>',
        good4: "DI-first-Architektur, CVE-Fixes, planbare Releases",
        step1: "Scope und Architektur",
        step2: "Entwicklung mit KI-Tempo",
        step3: "QA, Releases und Übergabe",
      },
      expertise: {
        label: "Kernkompetenz",
        title: "Was Sie mit einer Freelance-Expertin erhalten",
        intro:
          "Mobile Delivery End-to-End — Scoping, Entwicklung, Release und Übergabe — mit klarer Kommunikation und ohne Junior-Überraschungen auf kritischen Pfaden.",
        s1t: "Greenfield-Apps",
        s1d: 'Compose / Flutter — von der Architektur bis zum Release im <span class="store-name">Play Store</span> und <span class="store-name">App Store</span>',
        s2t: "Legacy-Modernisierung",
        s2d: "Java → Kotlin, Dependency Injection (Hilt / Koin), CVE und Dependencies",
        s3t: "KI im Produkt",
        s3d: "LLM-Features für Endnutzer — keine Folien",
        s4t: "Rettung und Beschleunigung",
        s4d: "Refactoring, CVE-Behebung, CI/CD, QA",
        e1h: "Android und Architektur",
        e1p: 'Kotlin, Jetpack Compose, Clean Architecture, MVVM/MVI, Hilt und Koin, Java-Migration, Releases im <span class="store-name">Play Store</span>, <span class="store-name">App Gallery</span> und <span class="store-name">App Store</span>.',
        e2h: "KI in Produkt und Prozess",
        e2p: "LLM-Integrationen, MCP, KI-gestütztes Refactoring, Cursor-Delivery — zertifiziert in Generative AI for Software Development und Gemini CLI.",
        e3h: "Flutter und Cross-Platform",
        e3p: 'Flutter End-to-End — inkl. <span class="store-name">App Store</span>-Deployment neben <span class="store-name">Play Store</span>. KMP und iOS-Zusammenarbeit.',
        e4h: "Integrationen und Betrieb",
        e4p: "REST, Firebase, AWS, OAuth, CI/CD — <strong>Python</strong>-Pipeline-Skripte auf Azure DevOps. Karten: Esri, HERE, Mapbox, Google Maps. Security: Audits, CVE, Store-Compliance.",
      },
      work: {
        label: "Referenzen",
        title: "Gelöste Probleme — mit Belegen",
        intro: "Jede Karte zeigt Kontext, Umsetzung, Ergebnis und den eingesetzten Stack.",
        g1: "Enterprise und Behörden",
        g2: "PROXYM Middle East · 2024–heute · öffentlicher Sektor (VAE)",
        g2note: "Software Team Lead Android · PROXYM Middle East",
        g3: "Produkt und Scale · Consumer-Apps",
        playLink: "Play Store →",
        playStore: "Play Store",
        appGallery: "App Gallery",
        coffreo: "Coffreo im Play Store →",
      },
      label: { challenge: "Herausforderung", delivered: "Umsetzung", impact: "Ergebnis", examples: "Beispiele" },
      exp: {
        label: "Karriere",
        title: "Erfahrung",
        intro: 'Zeitleiste der Rollen — Details im Bereich <a href="#work">Referenzen</a>.',
        s1: "Lead öffentlicher Sektor",
        s2: "Schneider und B2B",
        s3: "LLM in Produktion",
        s4: "EU und MENA",
        caseStudy: "Fallstudie",
        caseStudyArrow: "Fallstudie →",
        wimobiWork: "WIMOBI-Projekte →",
        credTitle: "Ausbildung & Zertifikate",
        credEdu: "Ausbildung",
        credLearn: "Weiterbildung",
        credLang: "Sprachen",
        langEn: "Englisch",
        langFr: "Französisch",
        langAr: "Arabisch",
        langDe: "Deutsch",
        langEnLv: "Professionell",
        langFrLv: "Professionell",
        langArLv: "Muttersprache",
        langDeLv: "A2+ · laufend",
        present: "Heute",
        proxymRole: "Software Team Lead Android",
        proxymTime: "Mai 2024 — Heute",
        proxymLoc: "Dubai, VAE · Remote",
        proxymSum: "Mobile Programme für Regierung und öffentlichen Sektor in den VAE.",
        wimobiRole: "Lead Android & Flutter",
        wimobiTime: "Jan. 2017 — Heute",
        wimobiLoc: "Mahdia, Tunesien · EU-Remote",
        wimobiSum: "Agentur-Studio — über 30 Apps in Produktion für EU- und MENA-Kunden (2017–heute, parallel zu Kundenrollen).",
        schneiderRole: "Android Team Leader",
        schneiderTime: "Mai 2023 — März 2024",
        schneiderLoc: "Frankreich · Remote",
        schneiderSum: 'Android Team Leader — <strong>mySchneider</strong>: MAP, GitHub/Dependabot, Python CI/CD auf Azure DevOps, Play Store (Mai 2023 – März 2024).',
        knowlepsyRole: "Senior Flutter Developer",
        knowlepsyTime: "Mai 2023 — Aug. 2023",
        knowlepsyLoc: "Tunis, Tunesien",
        knowlepsySum: "Senior Flutter Developer — Epilepsie-Versorgungsmodul (Mai – Aug. 2023).",
        digitsoleRole: "Android Consultant",
        digitsoleTime: "Juni 2021 — Sept. 2022",
        digitsoleLoc: "Frankreich",
        digitsoleSum: "Android Consultant — Digitsole Running & Walk (Juni 2021 – Sept. 2022).",
        cotepucesRole: "Android Developer",
        cotepucesTime: "Sept. 2021 — Feb. 2022",
        cotepucesSum: "Android Developer — Côté-Puces-Marktplatz (Sept. 2021 – Feb. 2022).",
        codecoRole: "Tech Lead & Flutter Developer",
        codecoTime: "Dez. 2020 — Dez. 2021",
        codecoLoc: "Deutschland",
        codecoSum: "Tech Lead & Flutter — Gesundheitspersonal; Play Store- und App-Store-Deployment (Dez. 2020 – Dez. 2021).",
        eduMain: "Bachelor, Computertechnologie",
        eduSub1: "ISET Sousse · 2013",
        eduSub2: "Erriadh High School — Informatik · 2009",
        course1: "Generative AI for Software Development",
        course2: "Gemini CLI — Code & Create with an Open-Source Agent",
        course3: "Pair Programming with a Large Language Model",
        course4: "Jetpack Compose — Udemy",
        course5: "Advanced Flutter UI — Coursera",
        course6: "AWS Amplify & Firebase",
        heroLoc: "Bergneustadt, Deutschland",
        navPrimary: "Hauptnavigation",
        heroProofAria: "Kernkennzahlen",
        heroPanelAria: "KI-Wirkung auf die Delivery",
        expAria: "Karriere-Highlights",
        bizAria: "Geschäftsdaten",
      },
      contact: {
        label: "Anfragen",
        title: "Planen wir Ihr nächstes Mobile-Projekt",
        intro:
          "Freelance, feste Phasen oder langfristige Partnerschaft — EU-Remote aus Deutschland. Beschreiben Sie Ihr Produkt; ich antworte mit Einschätzung, Timeline und Vorgehen.",
        bizLabel: "Verträge und Rechnungen",
        bizName: "<strong>HB IT Services</strong> · Bergneustadt, Deutschland",
        bizNote: "EU-Remote · Angebote und Rechnungen in EUR · Steuerdetails auf Anfrage.",
      },
      footer: "© {year} Samira Salah · HB IT Services · Senior Android- & Mobile-Ingenieurin",
    },
  };

  const projects =
    (typeof window !== "undefined" && window.portfolioProjects) || {};

  function get(obj, path) {
    return path.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
  }

  function applyLang(lang) {
    if (!LANGS.includes(lang)) lang = "en";
    const dict = T[lang];
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    const title = get(dict, "meta.title");
    const desc = get(dict, "meta.description");
    if (title) {
      document.title = title;
      ["meta-og-title", "meta-twitter-title"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.setAttribute("content", title);
      });
    }
    if (desc) {
      let meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", desc);
      ["meta-og-desc", "meta-twitter-desc"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.setAttribute("content", desc);
      });
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key === "footer") return;
      const val = get(dict, key);
      if (val == null) return;
      if (el.getAttribute("data-i18n-html") === "true") el.innerHTML = val;
      else el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const val = get(dict, key);
      if (val) el.setAttribute("aria-label", val);
    });

    document.querySelectorAll("[data-i18n-project]").forEach((el) => {
      const pid = el.getAttribute("data-i18n-project");
      const field = el.getAttribute("data-i18n-field");
      const useHtml = el.getAttribute("data-i18n-html") === "true";
      if (lang === "en") {
        const orig = useHtml ? el.dataset.i18nOrigHtml : el.dataset.i18nOrig;
        if (orig != null) {
          if (useHtml) el.innerHTML = orig;
          else el.textContent = orig;
        }
        return;
      }
      const val = projects[pid] && projects[pid][lang] && projects[pid][lang][field];
      if (val == null) return;
      if (useHtml) el.innerHTML = val;
      else el.textContent = val;
    });

    const footer = document.querySelector("[data-i18n='footer']");
    if (footer) {
      const year = document.getElementById("year")?.textContent || new Date().getFullYear();
      const tpl = get(dict, "footer");
      if (tpl) footer.innerHTML = tpl.replace("{year}", `<span id="year">${year}</span>`);
    }

    const codeEl = document.querySelector("[data-lang-current]");
    if (codeEl) codeEl.textContent = lang.toUpperCase();

    document.querySelectorAll(".lang-dropdown-option[data-lang]").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", String(active));
    });
  }

  const MOBILE_NAV_MQ = window.matchMedia("(max-width: 900px)");

  function resetLangMenuPosition() {
    const menu = document.getElementById("lang-menu");
    if (!menu) return;
    menu.style.removeProperty("--lang-menu-top");
    menu.style.removeProperty("--lang-menu-right");
  }

  function positionLangMenu() {
    const trigger = document.getElementById("lang-trigger");
    const menu = document.getElementById("lang-menu");
    if (!trigger || !menu || menu.hidden) return;

    if (!MOBILE_NAV_MQ.matches) {
      resetLangMenuPosition();
      return;
    }

    const rect = trigger.getBoundingClientRect();
    const gap = 6;
    const menuHeight = menu.offsetHeight || 132;
    const spaceBelow = window.innerHeight - rect.bottom - gap;
    const top =
      spaceBelow >= menuHeight
        ? rect.bottom + gap
        : Math.max(8, rect.top - gap - menuHeight);

    menu.style.setProperty("--lang-menu-top", `${top}px`);
    menu.style.setProperty(
      "--lang-menu-right",
      `${Math.max(12, window.innerWidth - rect.right)}px`
    );
  }

  function closeLangMenu() {
    const trigger = document.getElementById("lang-trigger");
    const menu = document.getElementById("lang-menu");
    if (!trigger || !menu) return;
    trigger.setAttribute("aria-expanded", "false");
    menu.hidden = true;
    resetLangMenuPosition();
  }

  function openLangMenu() {
    const trigger = document.getElementById("lang-trigger");
    const menu = document.getElementById("lang-menu");
    if (!trigger || !menu) return;
    trigger.setAttribute("aria-expanded", "true");
    menu.hidden = false;
    requestAnimationFrame(() => {
      positionLangMenu();
      requestAnimationFrame(positionLangMenu);
    });
  }

  function toggleLangMenu() {
    const menu = document.getElementById("lang-menu");
    if (!menu) return;
    if (menu.hidden) openLangMenu();
    else closeLangMenu();
  }

  function initSwitcher() {
    const trigger = document.getElementById("lang-trigger");
    const menu = document.getElementById("lang-menu");
    if (!trigger || !menu) return;

    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleLangMenu();
    });

    menu.querySelectorAll(".lang-dropdown-option[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyLang(btn.getAttribute("data-lang"));
        closeLangMenu();
      });
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".lang-dropdown")) closeLangMenu();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLangMenu();
    });

    window.addEventListener("resize", () => {
      if (!menu.hidden) positionLangMenu();
    });

    window.addEventListener(
      "scroll",
      () => {
        if (!menu.hidden) closeLangMenu();
      },
      { passive: true }
    );
  }

  function storeOriginals() {
    document.querySelectorAll("[data-i18n-project]").forEach((el) => {
      if (el.getAttribute("data-i18n-html") === "true") {
        if (!el.dataset.i18nOrigHtml) el.dataset.i18nOrigHtml = el.innerHTML;
      } else if (!el.dataset.i18nOrig) {
        el.dataset.i18nOrig = el.textContent;
      }
    });
  }

  function init() {
    storeOriginals();
    initSwitcher();
    const saved = localStorage.getItem(STORAGE_KEY);
    const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
    const initial = LANGS.includes(saved) ? saved : LANGS.includes(browser) ? browser : "en";
    applyLang(initial);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.portfolioI18n = { applyLang, T, closeLangMenu };
})();
