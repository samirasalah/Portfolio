/**
 * Portfolio i18n — EN (default), FR, DE
 */
(function () {
  const STORAGE_KEY = "portfolio-lang";
  const LANGS = ["en", "fr", "de"];

  function cvUrlForLang(lang) {
    if (!LANGS.includes(lang)) lang = "en";
    return lang === "en" ? "assets/cv.html" : `assets/cv.html?lang=${lang}`;
  }

  const T = {
    en: {
      meta: {
        title: "Samira Salah — Senior Freelance Android & Mobile Developer · France & EU",
        description:
          "Senior freelance mobile developer — Kotlin, Compose, Flutter. AI-accelerated delivery (Cursor, Gemini). France & EU missions. Public sector, enterprise, VoIP. HB IT Services.",
      },
      skip: "Skip to content",
      nav: {
        status: "Available · Freelance",
        statusAria: "Senior freelance missions in France — go to contact",
        ai: "Delivery",
        expertise: "Expertise",
        work: "References",
        experience: "Experience",
        contact: "Contact",
        hire: "Discuss a mission",
        menuOpen: "Open menu",
        lang: "Language",
      },
      hero: {
        eyebrow:
          'Senior mobile freelance · <span data-geo-scope>Germany & EU · remote or on-site</span>',
        trade: 'Freelance <strong>senior</strong> · available — <strong>HB IT Services</strong>',
        title: 'Senior Android & Mobile Developer — <span class="accent">public sector</span>, enterprise & <span class="accent">real-time</span>',
        lead:
          'One <strong>senior owner</strong> for Kotlin, Jetpack Compose, and Flutter — from <strong>Schneider Electric (France)</strong> and <strong>regulated healthcare</strong> to <strong>UAE government programs</strong> and <strong>production VoIP</strong>. Clean architecture, store releases, and reliable sessions on real networks.',
        proof1n: "8+",
        proof1: "years · senior mobile",
        proof2n: "Real-time",
        proof2: "voice, video & audio in prod",
        proof3n: "France & EU",
        proof3: "Schneider, health & public apps",
        ctaBook: "Discuss a mission",
        ctaCv: "Download CV",
        ctaCvUrl: "assets/cv.html",
        ctaWork: "View references",
        panelLabel: "Engagement model",
        panelTitle: "Senior ownership — <em>production-first</em>",
        panelSummary:
          "One accountable senior developer: scoping, architecture, implementation, release ownership, and handover. AI accelerates routine work — quality and architecture stay under senior control.",
        panelB1: "End-to-end delivery — architecture through Play Store, App Store & App Gallery",
        panelB2: "Regulated environments — public sector, B2B, and healthcare",
        panelB3: "France: Schneider, Runnrz, Digitsole, Côté Puces · EU: Gesundheitspersonal (DE) · TN: Comunik",
        panelCta: "View case studies →",
      },
      ai: {
        label: "Delivery model",
        title: "Senior craft — AI as leverage, not a shortcut",
        intro: "One accountable senior developer on your mission. AI compresses routine cycles; architecture, releases, and code quality remain under my ownership.",
        m1h: "Architecture first",
        m1k: "Structure",
        m1p: "Clean Architecture, modular boundaries, and DI before feature velocity — so freelance phases do not create long-term debt.",
        m2h: "Accelerated execution",
        m2k: "Velocity",
        m2p: "Cursor, Gemini, and LLM-assisted scaffolding, refactors, tests, and integration glue — always reviewed and production-hardened.",
        m3h: "Scoped delivery",
        m3k: "Focus",
        m3p: "Fixed phases, MVPs, and parallel tracks with clear milestones — ideal for team reinforcement and time-boxed missions.",
        m4h: "Modern capabilities",
        m4k: "AI-ready",
        m4p: "LLM integration, privacy-aware APIs, and maintainable patterns when intelligence belongs in the product roadmap.",
        compareBad: "Typical contractor profile",
        compareGood: "Senior freelance partnership",
        bad1: "Manual boilerplate & slow test coverage",
        bad2: "LLM demos that never reach stores",
        bad4: "Architecture debt after speed hacks",
        good1: "AI-accelerated execution, human-owned architecture",
        good2: "Store-grade delivery — not throwaway code",
        good4: "DI-first design, CVE remediation, predictable releases",
        step1: "Scoping & architecture",
        step2: "Build & integrate",
        step3: "Release, handover & documentation",
      },
      expertise: {
        label: "Core expertise",
        title: "Senior delivery — from architecture to store release",
        intro:
          "End-to-end mobile development for regulated and high-traffic products — public sector, enterprise, and real-time communications.",
        s1t: "Public & enterprise apps",
        s1d: 'Government and B2B products — architecture through <span class="store-name">Play Store</span>, <span class="store-name">App Store</span> & <span class="store-name">App Gallery</span>',
        s2t: "Real-time communications",
        s2d: "SIP VoIP (sip_ua), WebSocket, FCM, Twilio video, TTS & hands-free audio — foreground & background sessions",
        s3t: "Android & Compose",
        s3d: "Kotlin, Clean Architecture, Hilt/Koin, legacy modernization, dual-store GMS/HMS",
        s4t: "AI-accelerated delivery",
        s4d: "Cursor, LLM-assisted refactors — certified Generative AI & Gemini CLI",
        e1h: "Android & architecture",
        e1p: 'Kotlin, Jetpack Compose, Clean Architecture, MVVM/MVI, Hilt & Koin, legacy Java migration, and releases on <span class="store-name">Play Store</span>, <span class="store-name">App Gallery</span> & <span class="store-name">App Store</span> (Flutter).',
        e2h: "Real-time & Flutter",
        e2p: "sip_ua SIP softphones, WebSocket provisioning, background call services, FCM; Text-to-Speech, audio coaching, and background services for hands-free UX; Flutter MVVM/Provider; Twilio video for healthcare.",
        e3h: "Public sector & maps",
        e3p: "UAE government programs (Maskan, Chambers, Culture, Police); OCR capture and OpenAI document extraction; Esri, HERE, Google Maps, Huawei Maps; MDVR socket on local network, plate-recognition alerts via TTS.",
        e4h: "Integrations & ops",
        e4p: "REST, Firebase, AWS, OAuth, CI/CD — including <strong>Python</strong> on Azure DevOps. Security: dependency audits, CVE fixes, store compliance.",
      },
      work: {
        label: "Client references",
        title: "Production case studies",
        intro: "Selected missions where architecture, delivery discipline, and store releases mattered — grouped by domain.",
        g0: "Real-time communications · voice & video",
        g0note: "SIP softphones, video care, and session reliability on mobile networks",
        g1: "Enterprise · France & global",
        g1note: "Large-scale B2B and consumer products with store-grade releases",
        g2: "UAE public sector · 2024–present",
        g2note: "Technical lead Android · government programs (Proxym Middle East)",
        g3: "More selected work",
        g3note: "HealthTech, mobility, and additional production deliveries",
        playLink: "Play Store →",
        playStore: "Play Store",
        appGallery: "App Gallery",
        coffreo: "Coffreo on Play Store →",
        expand: "Project details",
        expandClose: "Hide details",
      },
      label: { challenge: "Challenge", delivered: "Delivered", impact: "Impact", examples: "Examples" },
      exp: {
        label: "Career",
        title: "Experience",
        intro: 'Professional timeline — open the <a href="#work">references</a> section for detailed case studies.',
        s1: "SIP VoIP & video",
        s2: "UAE public sector",
        s3: "Schneider & EU clients",
        s4: "Play · App · Gallery",
        caseStudy: "Case study",
        caseStudyArrow: "Case study →",
        wimobiWork: "WIMOBI-era references →",
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
        proxymSum: "Client engagement — UAE government mobile programs (Maskan, Chambers, Culture, Police). AI-assisted delivery with Cursor and Gemini on live codebases.",
        wimobiRole: "Senior Mobile Tech Lead",
        wimobiTime: "Jan 2017 — Present",
        wimobiLoc: "Remote EU · Bergneustadt, DE",
        wimobiSum: "Agency studio — production Android & Flutter for EU & MENA clients; current client: Proxym Middle East (UAE public sector).",
        schneiderRole: "Android Team Leader · France",
        schneiderTime: "May 2023 — Mar 2024",
        schneiderLoc: "France · Remote",
        schneiderSum: 'Android Team Leader — <strong>mySchneider</strong> (Schneider Electric, France): MAP, GitHub/Dependabot, Python CI/CD on Azure DevOps, Play Store (May 2023 – Mar 2024).',
        knowlepsyRole: "Senior Flutter Developer",
        knowlepsyTime: "May 2023 — Aug 2023",
        knowlepsyLoc: "Tunis, Tunisia",
        knowlepsySum: "Senior Flutter Developer — epilepsy care module (May – Aug 2023).",
        comunikRole: "Flutter Developer · Freelance",
        comunikTime: "Sep 2023 — Feb 2024",
        comunikLoc: "Remote · Tunisia",
        comunikSum: 'Flutter — <strong>Comunik Phone</strong> SIP softphone: sip_ua, WebSocket credentials, FCM, hold/transfer/conference (Sep 2023 – Feb 2024).',
        digitsoleRole: "Android Consultant · via Proxym Group",
        digitsoleTime: "Jun 2021 — Sep 2022",
        digitsoleLoc: "France",
        digitsoleSum: "Android Consultant (via Proxym Group) — Digitsole Running & Walk; audio coaching with Text-to-Speech (Jun 2021 – Sep 2022).",
        cotepucesRole: "Android Developer · France",
        cotepucesTime: "Sep 2021 — Feb 2022",
        cotepucesLoc: "France",
        cotepucesSum: "Android Developer — Côté Puces marketplace, France (Sep 2021 – Feb 2022).",
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
        heroPanelAria: "Production mobile delivery",
        expAria: "Career highlights",
        bizAria: "Business details",
      },
      contact: {
        label: "Contact",
        title: "Senior freelance missions · France & EU",
        intro:
          "Available for team reinforcement, delivery phases, and fixed-scope projects — public sector, enterprise, and real-time mobile. On-site or remote across France and the EU. Quotes and contracts via HB IT Services.",
        bizLabel: "Contracts & invoicing",
        bizName: "<strong>HB IT Services</strong> · Bergneustadt, Germany",
        bizNote: "Registered EU business · quotes & invoices in EUR · VAT details on request.",
      },
      footer: "© {year} Samira Salah · HB IT Services · Senior freelance mobile developer",
    },
    fr: {
      meta: {
        title: "Samira Salah — Développeuse mobile senior freelance · France & UE",
        description:
          "Samira Salah — Développeuse mobile senior freelance. Android, Kotlin, Compose, Flutter. Delivery accélérée par l'IA (Cursor, Gemini). Missions France & UE.",
      },
      skip: "Aller au contenu",
      nav: {
        status: "Disponible · Freelance",
        statusAria: "Missions freelance senior en France — aller au contact",
        ai: "Delivery",
        expertise: "Expertise",
        work: "Références",
        experience: "Parcours",
        contact: "Contact",
        hire: "Discuter d'une mission",
        menuOpen: "Ouvrir le menu",
        lang: "Langue",
      },
      hero: {
        eyebrow:
          'Mobile senior freelance · <span data-geo-scope>Allemagne & UE · remote ou sur site</span>',
        trade: 'Freelance <strong>senior</strong> · disponible — <strong>HB IT Services</strong>',
        title: 'Développeuse mobile senior — <span class="accent">secteur public</span>, entreprise & <span class="accent">temps réel</span>',
        lead:
          'Un seul <strong>interlocuteur senior</strong> en Kotlin, Jetpack Compose et Flutter — de <strong>Schneider Electric (France)</strong> et la <strong>santé réglementée</strong> aux <strong>programmes gouvernementaux EAU</strong> et la <strong>VoIP en production</strong>. Architecture propre, releases stores et fiabilité sur réseaux réels.',
        proof1n: "8+",
        proof1: "ans · mobile senior",
        proof2n: "Temps réel",
        proof2: "voix, vidéo & audio en prod",
        proof3n: "France & UE",
        proof3: "Schneider, santé & public",
        ctaBook: "Discuter d'une mission",
        ctaCv: "Télécharger le CV",
        ctaCvUrl: "assets/cv.html?lang=fr",
        ctaWork: "Voir les références",
        panelLabel: "Modèle d'engagement",
        panelTitle: "Pilotage senior — <em>production d'abord</em>",
        panelSummary:
          "Une développeuse senior responsable de bout en bout : cadrage, architecture, implémentation, releases et passation. L'IA accélère le routinier — la qualité et l'architecture restent sous contrôle senior.",
        panelB1: "Delivery de bout en bout — architecture jusqu'au Play Store, App Store et App Gallery",
        panelB2: "Environnements réglementés — secteur public, B2B et santé",
        panelB3: "France : Schneider, Runnrz, Digitsole, Côté Puces · UE : Gesundheitspersonal (DE) · TN : Comunik",
        panelCta: "Voir les études de cas →",
      },
      ai: {
        label: "Modèle de delivery",
        title: "Expertise senior — l'IA comme levier, pas comme raccourci",
        intro: "Un interlocuteur senior responsable sur votre mission. L'IA compresse les cycles routiniers ; architecture, releases et qualité de code restent sous mon pilotage.",
        m1h: "Architecture d'abord",
        m1k: "Structure",
        m1p: "Clean Architecture, modularité et DI avant la vélocité — pour que les phases freelance ne créent pas de dette durable.",
        m2h: "Exécution accélérée",
        m2k: "Vélocité",
        m2p: "Scaffolding, refactors, tests et glue API avec Cursor, Gemini et LLM — toujours revus et durcis pour la production.",
        m3h: "Livraison cadrée",
        m3k: "Périmètre",
        m3p: "Phases fixées, MVP et pistes parallèles avec jalons clairs — idéal pour renfort d'équipe et missions time-boxées.",
        m4h: "Capacités modernes",
        m4k: "IA-ready",
        m4p: "Intégration LLM, API respectueuses de la vie privée et patterns maintenables quand l'intelligence entre dans la roadmap.",
        compareBad: "Profil prestataire classique",
        compareGood: "Partenariat freelance senior",
        bad1: "Boilerplate manuel et couverture de tests lente",
        bad2: "Démos LLM qui n'atteignent jamais les stores",
        bad4: "Dette d'architecture après des raccourcis de vitesse",
        good1: "Exécution accélérée par l'IA, architecture maîtrisée",
        good2: "Livraison store — pas du code jetable",
        good4: "Design orienté DI, correctifs CVE, releases prévisibles",
        step1: "Cadrage & architecture",
        step2: "Build & intégration",
        step3: "Release, passation & documentation",
      },
      expertise: {
        label: "Expertise clé",
        title: "Delivery senior — de l'architecture à la release store",
        intro:
          "Développement mobile de bout en bout pour produits réglementés et à fort trafic — secteur public, entreprise et communications temps réel.",
        s1t: "Apps secteur public & entreprise",
        s1d: 'Produits gouvernementaux et B2B — architecture jusqu\'aux stores <span class="store-name">Play Store</span>, <span class="store-name">App Store</span> & <span class="store-name">App Gallery</span>',
        s2t: "Communications temps réel",
        s2d: "VoIP SIP (sip_ua), WebSocket, FCM, vidéo Twilio, TTS et audio mains libres — sessions foreground & background",
        s3t: "Android & Compose",
        s3d: "Kotlin, Clean Architecture, Hilt/Koin, modernisation legacy, dual-store GMS/HMS",
        s4t: "Delivery accélérée par l'IA",
        s4d: "Cursor, refactors assistés LLM — certifiée Generative AI & Gemini CLI",
        e1h: "Android et architecture",
        e1p: 'Kotlin, Jetpack Compose, Clean Architecture, MVVM/MVI, Hilt et Koin, migration Java, publications sur <span class="store-name">Play Store</span>, <span class="store-name">App Gallery</span> et <span class="store-name">App Store</span>.',
        e2h: "Temps réel & Flutter",
        e2p: "Softphones SIP sip_ua, provisioning WebSocket, services d'appel background, FCM ; Text-to-Speech, coaching audio et services background pour une UX mains libres ; Flutter MVVM/Provider ; vidéo Twilio pour la santé.",
        e3h: "Secteur public & cartographie",
        e3p: "Programmes gouvernementaux EAU (Maskan, Chambers, Culture, Police) ; capture OCR et extraction OpenAI ; Esri, HERE, Google Maps, Huawei Maps ; MDVR en socket réseau local, alertes plaques signalées via TTS.",
        e4h: "Intégrations et exploitation",
        e4p: "REST, Firebase, AWS, OAuth, CI/CD — scripts <strong>Python</strong> sur Azure DevOps. Sécurité : audits, CVE, conformité stores.",
      },
      work: {
        label: "Références clients",
        title: "Études de cas en production",
        intro: "Missions sélectionnées où architecture, discipline de delivery et releases stores comptaient — regroupées par domaine.",
        g0: "Communications temps réel · voix & vidéo",
        g0note: "Softphones SIP, vidéo santé et fiabilité des sessions sur réseaux mobiles",
        g1: "Entreprise · France & international",
        g1note: "Produits B2B et grand public avec releases store",
        g2: "Secteur public EAU · 2024–aujourd'hui",
        g2note: "Lead technique Android · programmes gouvernementaux (Proxym Middle East)",
        g3: "Autres réalisations sélectionnées",
        g3note: "HealthTech, mobilité et autres livraisons en production",
        playLink: "Play Store →",
        playStore: "Play Store",
        appGallery: "App Gallery",
        coffreo: "Coffreo sur le Play Store →",
        expand: "Détails du projet",
        expandClose: "Masquer les détails",
      },
      label: { challenge: "Enjeu", delivered: "Livraison", impact: "Impact", examples: "Exemples" },
      exp: {
        label: "Parcours",
        title: "Expérience",
        intro: 'Parcours professionnel — détails dans la section <a href="#work">références</a>.',
        s1: "VoIP SIP & vidéo",
        s2: "programmes publics EAU",
        s3: "Schneider & clients UE",
        s4: "Play · App · Gallery",
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
        proxymSum: "Mission client — programmes mobiles gouvernementaux aux EAU (Maskan, Chambers, Culture, Police). Delivery assistée par Cursor et Gemini sur codebases en production.",
        wimobiRole: "Senior Mobile Tech Lead",
        wimobiTime: "Janv. 2017 — Aujourd'hui",
        wimobiLoc: "Télétravail UE · Bergneustadt, DE",
        wimobiSum: "Studio agence — Android & Flutter en production pour clients UE et MENA ; client actuel : Proxym Middle East (secteur public EAU).",
        schneiderRole: "Responsable équipe Android · France",
        schneiderTime: "Mai 2023 — Mars 2024",
        schneiderLoc: "France · Télétravail",
        schneiderSum: 'Responsable Android — <strong>mySchneider</strong> (Schneider Electric, France) : MAP, GitHub/Dependabot, CI/CD Python sur Azure DevOps, Play Store (mai 2023 – mars 2024).',
        knowlepsyRole: "Développeuse Flutter senior",
        knowlepsyTime: "Mai 2023 — Août 2023",
        knowlepsyLoc: "Tunis, Tunisie",
        knowlepsySum: "Développeuse Flutter senior — module soins épilepsie (mai – août 2023).",
        comunikRole: "Développeuse Flutter · Freelance",
        comunikTime: "Sept. 2023 — Fév. 2024",
        comunikLoc: "Remote · Tunisie",
        comunikSum: 'Flutter — softphone SIP <strong>Comunik Phone</strong> : sip_ua, credentials WebSocket, FCM, attente/transfert/conférence (sept. 2023 – fév. 2024).',
        digitsoleRole: "Consultante Android · via Proxym Group",
        digitsoleTime: "Juin 2021 — Sept. 2022",
        digitsoleLoc: "France",
        digitsoleSum: "Consultante Android (via Proxym Group) — Digitsole Running & Walk ; coaching audio Text-to-Speech (juin 2021 – sept. 2022).",
        cotepucesRole: "Développeuse Android · France",
        cotepucesTime: "Sept. 2021 — Fév. 2022",
        cotepucesLoc: "France",
        cotepucesSum: "Développeuse Android — marketplace Côté Puces, France (sept. 2021 – fév. 2022).",
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
        heroPanelAria: "Delivery mobile en production",
        expAria: "Points forts du parcours",
        bizAria: "Informations professionnelles",
      },
      contact: {
        label: "Contact",
        title: "Missions freelance senior · France & UE",
        intro:
          "Disponible pour renfort d'équipe, phases de delivery et projets à périmètre fixe — secteur public, entreprise et mobile temps réel. Sur site ou à distance en France et en UE. Devis et contrats via HB IT Services.",
        bizLabel: "Contrats & facturation",
        bizName: "<strong>HB IT Services</strong> · Bergneustadt, Allemagne",
        bizNote: "Entreprise UE enregistrée · devis et factures en EUR · TVA sur demande.",
      },
      footer: "© {year} Samira Salah · HB IT Services · Développeuse mobile senior freelance",
    },
    de: {
      meta: {
        title: "Samira Salah — Senior Freelance Mobile Developer · Frankreich & EU",
        description:
          "Samira Salah — Senior Freelance Mobile Developer. Android, Kotlin, Compose, Flutter. KI-gestützte Delivery (Cursor, Gemini). Aufträge in Frankreich & EU.",
      },
      skip: "Zum Inhalt springen",
      nav: {
        status: "Freelance verfügbar",
        statusAria: "Senior-Freelance-Aufträge in Frankreich — zum Kontakt",
        ai: "Delivery",
        expertise: "Expertise",
        work: "Referenzen",
        experience: "Karriere",
        contact: "Kontakt",
        hire: "Mission besprechen",
        menuOpen: "Menü öffnen",
        lang: "Sprache",
      },
      hero: {
        eyebrow:
          'Senior Mobile Freelance · <span data-geo-scope>Deutschland & EU · remote oder vor Ort</span>',
        trade: 'Senior-<strong>Freelance</strong> · verfügbar — <strong>HB IT Services</strong>',
        title: 'Senior Android- & Mobile-Entwicklerin — <span class="accent">öffentlicher Sektor</span>, Enterprise & <span class="accent">Echtzeit</span>',
        lead:
          'Eine <strong>senior Ansprechpartnerin</strong> für Kotlin, Jetpack Compose und Flutter — von <strong>Schneider Electric (Frankreich)</strong> und <strong>reguliertem Healthcare</strong> bis <strong>Regierungsprogrammen in den VAE</strong> und <strong>Produktions-VoIP</strong>. Saubere Architektur, Store-Releases und Zuverlässigkeit in echten Netzen.',
        proof1n: "8+",
        proof1: "Jahre · Senior Mobile",
        proof2n: "Echtzeit",
        proof2: "Sprache, Video & Audio in Prod",
        proof3n: "Frankreich & EU",
        proof3: "Schneider, Health & Public",
        ctaBook: "Mission besprechen",
        ctaCv: "Lebenslauf (PDF)",
        ctaCvUrl: "assets/cv.html?lang=de",
        ctaWork: "Referenzen ansehen",
        panelLabel: "Engagement-Modell",
        panelTitle: "Senior Ownership — <em>production-first</em>",
        panelSummary:
          "Eine verantwortliche Senior-Entwicklerin End-to-End: Scoping, Architektur, Umsetzung, Release-Ownership und Übergabe. KI beschleunigt Routine — Qualität und Architektur bleiben in Senior-Verantwortung.",
        panelB1: "End-to-End-Delivery — Architektur bis Play Store, App Store & App Gallery",
        panelB2: "Regulierte Umgebungen — öffentlicher Sektor, B2B und Healthcare",
        panelB3: "Frankreich: Schneider, Runnrz, Digitsole, Côté Puces · EU: Gesundheitspersonal (DE) · TN: Comunik",
        panelCta: "Fallstudien ansehen →",
      },
      ai: {
        label: "Delivery-Modell",
        title: "Senior Craft — KI als Hebel, nicht als Abkürzung",
        intro: "Eine verantwortliche Senior-Entwicklerin auf Ihrer Mission. KI komprimiert Routine-Zyklen; Architektur, Releases und Codequalität bleiben in meiner Verantwortung.",
        m1h: "Architektur zuerst",
        m1k: "Struktur",
        m1p: "Clean Architecture, modulare Grenzen und DI vor Feature-Tempo — damit Freelance-Phasen keine langfristige Schuld erzeugen.",
        m2h: "Beschleunigte Umsetzung",
        m2k: "Velocity",
        m2p: "Cursor, Gemini und KI-gestütztes Scaffolding, Refactors, Tests und Integrations-Glue — immer geprüft und produktionsreif.",
        m3h: "Scoped Delivery",
        m3k: "Fokus",
        m3p: "Fixe Phasen, MVPs und parallele Spuren mit klaren Meilensteinen — ideal für Team-Verstärkung und time-boxed Aufträge.",
        m4h: "Moderne Fähigkeiten",
        m4k: "AI-ready",
        m4p: "LLM-Integration, datenschutzbewusste APIs und wartbare Patterns, wenn Intelligence zur Roadmap gehört.",
        compareBad: "Typisches Contractor-Profil",
        compareGood: "Senior-Freelance-Partnerschaft",
        bad1: "Manuelles Boilerplate und langsame Testabdeckung",
        bad2: "LLM-Demos ohne Store-Release",
        bad4: "Architekturschulden nach Speed-Hacks",
        good1: "KI-beschleunigte Umsetzung, Architektur im Griff",
        good2: "Store-taugliche Delivery — kein Wegwerfcode",
        good4: "DI-first-Design, CVE-Fixes, planbare Releases",
        step1: "Scoping & Architektur",
        step2: "Build & Integration",
        step3: "Release, Übergabe & Dokumentation",
      },
      expertise: {
        label: "Kernkompetenz",
        title: "Senior Delivery — von Architektur bis Store-Release",
        intro:
          "Mobile-Entwicklung End-to-End für regulierte und hoch frequentierte Produkte — öffentlicher Sektor, Enterprise und Echtzeit-Kommunikation.",
        s1t: "Behörden- & Enterprise-Apps",
        s1d: 'Regierungs- und B2B-Produkte — Architektur bis <span class="store-name">Play Store</span>, <span class="store-name">App Store</span> & <span class="store-name">App Gallery</span>',
        s2t: "Echtzeit-Kommunikation",
        s2d: "SIP-VoIP (sip_ua), WebSocket, FCM, Twilio-Video, TTS & freihändiges Audio — Foreground- & Background-Sessions",
        s3t: "Android & Compose",
        s3d: "Kotlin, Clean Architecture, Hilt/Koin, Legacy-Modernisierung, Dual-Store GMS/HMS",
        s4t: "KI-beschleunigte Delivery",
        s4d: "Cursor, LLM-gestützte Refactors — zertifiziert Generative AI & Gemini CLI",
        e1h: "Android und Architektur",
        e1p: 'Kotlin, Jetpack Compose, Clean Architecture, MVVM/MVI, Hilt und Koin, Java-Migration, Releases im <span class="store-name">Play Store</span>, <span class="store-name">App Gallery</span> und <span class="store-name">App Store</span>.',
        e2h: "Echtzeit & Flutter",
        e2p: "sip_ua SIP-Softphones, WebSocket-Provisioning, Background-Call-Services, FCM; Text-to-Speech, Audio-Coaching und Background-Services für freihändige UX; Flutter MVVM/Provider; Twilio-Video für Healthcare.",
        e3h: "Öffentlicher Sektor & Karten",
        e3p: "Regierungsprogramme VAE (Maskan, Chambers, Culture, Police); OCR-Erfassung und OpenAI-Dokumentenextraktion; Esri, HERE, Google Maps, Huawei Maps; MDVR-Socket im lokalen Netzwerk, Kennzeichen-Alerts per TTS.",
        e4h: "Integrationen und Betrieb",
        e4p: "REST, Firebase, AWS, OAuth, CI/CD — <strong>Python</strong>-Skripte auf Azure DevOps. Security: Audits, CVE, Store-Compliance.",
      },
      work: {
        label: "Kundenreferenzen",
        title: "Produktions-Fallstudien",
        intro: "Ausgewählte Missionen, bei denen Architektur, Delivery-Disziplin und Store-Releases zählten — nach Domäne gruppiert.",
        g0: "Echtzeit-Kommunikation · Sprache & Video",
        g0note: "SIP-Softphones, Video-Pflege und Session-Zuverlässigkeit in Mobilnetzen",
        g1: "Enterprise · Frankreich & global",
        g1note: "B2B- und Consumer-Produkte mit Store-Releases",
        g2: "Öffentlicher Sektor VAE · 2024–heute",
        g2note: "Android Technical Lead · Regierungsprogramme (Proxym Middle East)",
        g3: "Weitere ausgewählte Projekte",
        g3note: "HealthTech, Mobilität und weitere Produktionslieferungen",
        playLink: "Play Store →",
        playStore: "Play Store",
        appGallery: "App Gallery",
        coffreo: "Coffreo im Play Store →",
        expand: "Projektdetails",
        expandClose: "Details ausblenden",
      },
      label: { challenge: "Herausforderung", delivered: "Umsetzung", impact: "Ergebnis", examples: "Beispiele" },
      exp: {
        label: "Karriere",
        title: "Erfahrung",
        intro: 'Zeitleiste der Rollen — Details im Bereich <a href="#work">Referenzen</a>.',
        s1: "SIP-VoIP & Video",
        s2: "VAE-Regierungsprogramme",
        s3: "Schneider & EU-Kunden",
        s4: "Play · App · Gallery",
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
        proxymSum: "Kundenauftrag — mobile Regierungsprogramme in den VAE (Maskan, Chambers, Culture, Police). KI-gestützte Delivery mit Cursor und Gemini auf Live-Codebases.",
        wimobiRole: "Senior Mobile Tech Lead",
        wimobiTime: "Jan. 2017 — Heute",
        wimobiLoc: "EU-Remote · Bergneustadt, DE",
        wimobiSum: "Agentur-Studio — Android & Flutter in Produktion für EU- und MENA-Kunden; aktueller Kunde: Proxym Middle East (öffentlicher Sektor VAE).",
        schneiderRole: "Android Team Leader · Frankreich",
        schneiderTime: "Mai 2023 — März 2024",
        schneiderLoc: "Frankreich · Remote",
        schneiderSum: 'Android Team Leader — <strong>mySchneider</strong> (Schneider Electric, Frankreich): MAP, GitHub/Dependabot, Python CI/CD auf Azure DevOps, Play Store (Mai 2023 – März 2024).',
        knowlepsyRole: "Senior Flutter Developer",
        knowlepsyTime: "Mai 2023 — Aug. 2023",
        knowlepsyLoc: "Tunis, Tunesien",
        knowlepsySum: "Senior Flutter Developer — Epilepsie-Versorgungsmodul (Mai – Aug. 2023).",
        comunikRole: "Flutter Developer · Freelance",
        comunikTime: "Sept. 2023 — Feb. 2024",
        comunikLoc: "Remote · Tunesien",
        comunikSum: 'Flutter — <strong>Comunik Phone</strong> SIP-Softphone: sip_ua, WebSocket-Credentials, FCM, Halten/Transfer/Konferenz (Sept. 2023 – Feb. 2024).',
        digitsoleRole: "Android Consultant · via Proxym Group",
        digitsoleTime: "Juni 2021 — Sept. 2022",
        digitsoleLoc: "Frankreich",
        digitsoleSum: "Android Consultant (via Proxym Group) — Digitsole Running & Walk; Audio-Coaching mit Text-to-Speech (Juni 2021 – Sept. 2022).",
        cotepucesRole: "Android Developer · Frankreich",
        cotepucesTime: "Sept. 2021 — Feb. 2022",
        cotepucesLoc: "Frankreich",
        cotepucesSum: "Android Developer — Côté-Puces-Marktplatz, Frankreich (Sept. 2021 – Feb. 2022).",
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
        heroPanelAria: "Mobile Delivery in Produktion",
        expAria: "Karriere-Highlights",
        bizAria: "Geschäftsdaten",
      },
      contact: {
        label: "Kontakt",
        title: "Senior-Freelance-Aufträge · Frankreich & EU",
        intro:
          "Verfügbar für Team-Verstärkung, Delivery-Phasen und Projekte mit klarem Scope — öffentlicher Sektor, Enterprise und Echtzeit-Mobile. Vor Ort oder remote in Frankreich und der EU. Angebote und Verträge über HB IT Services.",
        bizLabel: "Verträge & Rechnungen",
        bizName: "<strong>HB IT Services</strong> · Bergneustadt, Deutschland",
        bizNote: "Registriertes EU-Unternehmen · Angebote & Rechnungen in EUR · USt-Details auf Anfrage.",
      },
      footer: "© {year} Samira Salah · HB IT Services · Senior Freelance Mobile Developer",
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

    document.querySelectorAll("[data-i18n-href]").forEach((el) => {
      const key = el.getAttribute("data-i18n-href");
      const val = get(dict, key);
      if (val) el.setAttribute("href", val);
    });

    document.querySelectorAll("[data-cv-link]").forEach((el) => {
      el.setAttribute("href", cvUrlForLang(lang));
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

    document.documentElement.classList.add("i18n-ready");

    if (window.consultantGeo) window.consultantGeo.refreshGeoLabels();

    try {
      const url = new URL(window.location.href);
      if (lang === "en") url.searchParams.delete("lang");
      else url.searchParams.set("lang", lang);
      window.history.replaceState(null, "", url);
    } catch (_) { /* ignore */ }
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

  async function init() {
    storeOriginals();
    initSwitcher();
    const initial = await resolveInitialLang();
    applyLang(initial);
  }

  function hasStoredLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return LANGS.includes(saved);
    } catch (_) {
      return false;
    }
  }

  async function resolveInitialLang() {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    if (LANGS.includes(urlLang)) return urlLang;

    if (hasStoredLang()) return localStorage.getItem(STORAGE_KEY);

    if (params.get("geo")?.toLowerCase() === "fr") return "fr";

    let geoData = window.consultantGeo?.getGeoOverride?.() || null;
    if (!geoData && window.consultantGeo?.applyGeoLocation) {
      try {
        geoData = await window.consultantGeo.applyGeoLocation();
      } catch (_) { /* ignore */ }
    }

    if (geoData?.country_code === "FR") return "fr";

    const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
    if (LANGS.includes(browser)) return browser;
    return "en";
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.portfolioI18n = { applyLang, T, closeLangMenu, cvUrlForLang };
})();
