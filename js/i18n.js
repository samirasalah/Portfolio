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
        title: "Samira Salah — Senior Mobile Engineer · Android & Flutter · France & EU",
        description:
          "Senior Mobile Engineer — Android, Flutter, real-time media. Schneider Electric (100+ countries), UAE government, healthcare Germany. Product-minded delivery for public sector and consumer audiences.",
      },
      skip: "Skip to content",
      nav: {
        ai: "Delivery",
        expertise: "Expertise",
        highlights: "Highlights",
        how: "How I work",
        media: "Media & live",
        work: "References",
        experience: "Experience",
        contact: "Contact",
        hire: "Get in touch",
        menuOpen: "Open menu",
        lang: "Language",
      },
      hero: {
        eyebrow:
          'Senior Mobile Engineer · <span data-geo-scope>Germany & EU · remote or on-site</span>',
        trade: 'Senior Android & Flutter Engineer · available — <strong>HB IT Services</strong>',
        title: 'Senior Mobile Engineer — <span class="accent">public sector</span>, consumer products & <span class="accent">real-time media</span>',
        mission:
          'Passionate about digital experiences that make <strong>information, culture and public services</strong> more accessible — for millions of users across Europe.',
        lead:
          'Building mobile experiences used daily by <strong>citizens, patients, professionals and consumer audiences</strong> — from <strong>Schneider Electric (France, 100+ countries)</strong> and <strong>regulated healthcare</strong> to <strong>UAE government programs</strong> and <strong>production video, VoIP & live media</strong>. Senior ownership from architecture to store release.',
        proof1n: "8+",
        proof1: "years · senior mobile lead",
        proof2n: "100+",
        proof2: "countries · Schneider mySchneider",
        proof3n: "Media",
        proof3: "video, voice & live streaming in prod",
        ctaBook: "Get in touch",
        ctaCv: "Download CV",
        ctaCvUrl: "assets/cv.html",
        ctaWork: "View references",
        panelLabel: "How I deliver",
        panelTitle: "Senior ownership — <em>production-first</em>",
        panelSummary:
          "Production-first engineering with pragmatic architecture — scoping, implementation, release ownership and handover. Strong collaboration with product, design, QA and backend teams.",
        panelB1: "End-to-end delivery — architecture through Play Store, App Store & App Gallery",
        panelB2: "User-facing products — public sector, healthcare, consumer & real-time media",
        panelB3: "France: Schneider, Runnrz, Digitsole, Côté Puces · EU: Gesundheitspersonal (DE) · TN: Comunik",
        panelCta: "View case studies →",
      },
      achievements: {
        label: "Highlights",
        title: "Career highlights",
        intro: "Scan in 15 seconds — scale, responsibility and product impact before the case studies.",
        a1t: "Schneider Electric · France",
        a1b: "Android Team Lead on mySchneider — global B2B app in 100+ countries, Play Store governance.",
        a2t: "UAE government mobile platforms",
        a2b: "Technical lead — Maskan (FTA), Dubai Chambers, Culture & Dubai Police programs.",
        a3t: "Healthcare · Germany",
        a3b: "Gesundheitspersonal — live video care & translation for patients and care teams (GDPR-conscious).",
        a4t: "Real-time media & communication",
        a4b: "Twilio Video, VoIP, live audio, TTS & background media sessions in production.",
        a5t: "Multi-store · consumer & public",
        a5b: "Play Store, App Store & App Gallery — citizen, patient and professional audiences at scale.",
      },
      why: {
        label: "How I work",
        title: "Why teams hire me",
        intro: "Production-first engineering — pragmatic architecture, fast onboarding and close collaboration with product, design, QA and backend.",
        w1t: "Pragmatic architecture",
        w1b: "Modular boundaries and DI that scale — without over-engineering or slowing delivery.",
        w2t: "Fast onboarding on legacy codebases",
        w2b: "Productive on live government and enterprise apps within days, not months.",
        w3t: "Production-first engineering",
        w3b: "Store releases, compliance, crash budgets and reliable sessions on real networks.",
        w4t: "Cross-functional collaboration",
        w4b: "Clear alignment with product, design, backend, QA and release owners.",
        w5t: "Product & audience impact",
        w5b: "User experience, accessibility and engagement — not just features shipped, but products people rely on daily.",
      },
      media: {
        label: "Real-time media",
        title: "Real-time media & communication",
        intro: "Video, audio, voice and live sessions at production scale — bridging broadcast-grade expectations, healthcare delivery and mobile consumer UX.",
        m1t: "Twilio Video",
        m1d: "Live video consultations and care sessions — audience-facing healthcare delivery in Germany.",
        m2t: "Streaming & live sessions",
        m2d: "Low-latency video and translation flows for patient and care-team apps at scale.",
        m3t: "Audio, voice & streaming",
        m3d: "SIP VoIP softphones, TTS dispatch, hands-free coaching — voice-first experiences on mobile.",
        m4t: "Live communication",
        m4d: "WebSocket provisioning, FCM push, hold/transfer/conference calling on real mobile networks.",
        m5t: "Real-time notifications",
        m5d: "Backend-driven alerts, patrol dispatch and field operations with reliable foreground/background delivery.",
        m6t: "Background media sessions",
        m6d: "Incoming calls, audio playback and session continuity when apps are backgrounded or screen-locked.",
      },
      ai: {
        label: "Delivery model",
        title: "Senior craft — AI as leverage, not a shortcut",
        intro: "One accountable senior developer on your mission. AI compresses implementation cycles; architecture, releases, code review and production decisions remain under senior engineering ownership.",
        m1h: "Architecture first",
        m1k: "Structure",
        m1p: "Clean Architecture, modular boundaries, and DI before feature velocity — so freelance phases do not create long-term debt.",
        m2h: "Accelerated execution",
        m2k: "Velocity",
        m2p: "AI-assisted development (Cursor, Gemini) for scaffolding, refactors, tests and integration glue — with architecture, code review and production decisions remaining under senior engineering ownership.",
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
          "End-to-end mobile for regulated and high-traffic products — user experience, public sector, consumer audiences and real-time media.",
        s1t: "Public & consumer products",
        s1d: 'Citizen, patient and professional audiences — architecture through <span class="store-name">Play Store</span>, <span class="store-name">App Store</span> & <span class="store-name">App Gallery</span>',
        s2t: "Real-time media & communication",
        s2d: "Twilio video, SIP VoIP, live audio, TTS, voice-first UX — foreground & background media sessions",
        s3t: "Android & Compose",
        s3d: "Kotlin, Clean Architecture, Hilt/Koin, legacy modernization, dual-store GMS/HMS",
        s4t: "Product-minded delivery",
        s4d: "Collaboration with product & design — accessibility, release ownership and production decisions under senior engineering leadership",
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
        proxymSum: "Client engagement — UAE government mobile programs (Maskan, Chambers, Culture, Police). AI-assisted development on live codebases — senior ownership of architecture, reviews and releases.",
        wimobiRole: "Senior Mobile Tech Lead",
        wimobiTime: "Jan 2017 — Present",
        wimobiLoc: "Remote EU · Bergneustadt, DE",
        wimobiSum: "Agency studio — production Android & Flutter for EU & MENA clients; current client: Proxym Middle East (UAE public sector).",
        schneiderRole: "Android Team Leader · France",
        schneiderTime: "May 2023 — Mar 2024",
        schneiderLoc: "France · Remote",
        schneiderSum: 'Android Team Leader — <strong>mySchneider</strong> (Schneider Electric, France): led Android team; MAP, GitHub/Dependabot, Python CI/CD on Azure DevOps, Play Store releases — app in <strong>100+ countries</strong> (May 2023 – Mar 2024).',
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
        title: "Senior mobile engineering · France & EU",
        intro:
          "Available for senior mobile engineering roles — public sector, consumer products and real-time media. On-site or remote across France and the EU. Also open to freelance missions via HB IT Services.",
        bizLabel: "Contracts & invoicing",
        bizName: "<strong>HB IT Services</strong> · Bergneustadt, Germany",
        bizNote: "Registered EU business · quotes & invoices in EUR · VAT details on request.",
      },
      footer: "© {year} Samira Salah · HB IT Services · Senior Mobile Engineer",
    },
    fr: {
      meta: {
        title: "Samira Salah — Ingénieure mobile senior · Android & Flutter · France & UE",
        description:
          "Ingénieure mobile senior — Android, Flutter, médias temps réel. Schneider Electric (100+ pays), gouvernement EAU, santé Allemagne. Delivery orientée produit pour le grand public et le service public.",
      },
      skip: "Aller au contenu",
      nav: {
        ai: "Delivery",
        expertise: "Expertise",
        highlights: "Points forts",
        how: "Mon approche",
        media: "Médias & live",
        work: "Références",
        experience: "Parcours",
        contact: "Contact",
        hire: "Me contacter",
        menuOpen: "Ouvrir le menu",
        lang: "Langue",
      },
      hero: {
        eyebrow:
          'Ingénieure mobile senior · <span data-geo-scope>Allemagne & UE · remote ou sur site</span>',
        trade: 'Ingénieure senior Android & Flutter · disponible — <strong>HB IT Services</strong>',
        title: 'Ingénieure mobile senior — <span class="accent">secteur public</span>, grand public & <span class="accent">médias temps réel</span>',
        mission:
          'Passionnée par des expériences numériques qui rendent <strong>l\'information, la culture et les services publics</strong> plus accessibles — pour des millions d\'usagers en Europe.',
        lead:
          'Des expériences mobiles utilisées au quotidien par des <strong>citoyens, patients, professionnels et publics grand public</strong> — de <strong>Schneider Electric (France, 100+ pays)</strong> et la <strong>santé réglementée</strong> aux <strong>programmes gouvernementaux EAU</strong> et la <strong>vidéo, VoIP & médias live en production</strong>. Pilotage senior de l\'architecture à la release store.',
        proof1n: "8+",
        proof1: "ans · lead mobile senior",
        proof2n: "100+",
        proof2: "pays · Schneider mySchneider",
        proof3n: "Médias",
        proof3: "vidéo, voix & streaming live en prod",
        ctaBook: "Me contacter",
        ctaCv: "Télécharger le CV",
        ctaCvUrl: "assets/cv.html?lang=fr",
        ctaWork: "Voir les références",
        panelLabel: "Comment je travaille",
        panelTitle: "Pilotage senior — <em>production d'abord</em>",
        panelSummary:
          "Ingénierie production-first et architecture pragmatique — cadrage, implémentation, releases et passation. Collaboration étroite avec produit, design, QA et backend.",
        panelB1: "Delivery de bout en bout — architecture jusqu'au Play Store, App Store et App Gallery",
        panelB2: "Produits orientés usagers — secteur public, santé, grand public & médias temps réel",
        panelB3: "France : Schneider, Runnrz, Digitsole, Côté Puces · UE : Gesundheitspersonal (DE) · TN : Comunik",
        panelCta: "Voir les études de cas →",
      },
      achievements: {
        label: "Points forts",
        title: "Réalisations clés",
        intro: "15 secondes pour comprendre l'échelle, la responsabilité et l'impact produit — avant les études de cas.",
        a1t: "Schneider Electric · France",
        a1b: "Lead équipe Android sur mySchneider — app B2B mondiale dans 100+ pays, gouvernance Play Store.",
        a2t: "Plateformes mobiles gouvernement EAU",
        a2b: "Lead technique — Maskan (FTA), Dubai Chambers, Culture & Dubai Police.",
        a3t: "Santé · Allemagne",
        a3b: "Gesundheitspersonal — téléconsultation vidéo & traduction live pour patients et équipes soignantes (RGPD).",
        a4t: "Médias & communication temps réel",
        a4b: "Twilio Video, VoIP, audio live, TTS & sessions média en arrière-plan en production.",
        a5t: "Multi-stores · public & grand public",
        a5b: "Play Store, App Store & App Gallery — citoyens, patients et professionnels à l'échelle.",
      },
      why: {
        label: "Mon approche",
        title: "Pourquoi les équipes m'embauchent",
        intro: "Ingénierie production-first — architecture pragmatique, onboarding rapide et collaboration étroite avec produit, design, QA et backend.",
        w1t: "Architecture pragmatique",
        w1b: "Modularité et DI qui scale — sans sur-ingénierie ni ralentissement de l'équipe.",
        w2t: "Onboarding rapide sur code legacy",
        w2b: "Productive sur apps gouvernementales et enterprise en jours, pas en mois.",
        w3t: "Ingénierie production-first",
        w3b: "Releases stores, conformité, stabilité et sessions fiables sur réseaux réels.",
        w4t: "Collaboration transverse",
        w4b: "Alignement clair avec produit, design, backend, QA et owners release.",
        w5t: "Impact produit & usagers",
        w5b: "Expérience utilisateur, accessibilité et engagement — des produits que les gens utilisent vraiment au quotidien.",
      },
      media: {
        label: "Médias temps réel",
        title: "Médias & communication temps réel",
        intro: "Vidéo, audio, voix et sessions live à l'échelle production — entre exigences type broadcast, santé et UX mobile grand public.",
        m1t: "Twilio Video",
        m1d: "Téléconsultations et sessions vidéo live — delivery santé orientée usagers en Allemagne.",
        m2t: "Streaming & sessions live",
        m2d: "Vidéo faible latence et traduction live pour apps patients et équipes soignantes.",
        m3t: "Audio, voix & streaming",
        m3d: "Softphones SIP, alertes TTS dispatch, coaching mains libres — expériences voice-first sur mobile.",
        m4t: "Communication live",
        m4d: "Provisioning WebSocket, push FCM, attente/transfert/conférence sur réseaux mobiles réels.",
        m5t: "Notifications temps réel",
        m5d: "Alertes backend, dispatch patrouilles et opérations terrain avec delivery foreground/background fiable.",
        m6t: "Sessions média en arrière-plan",
        m6d: "Appels entrants, lecture audio et continuité de session quand l'app est en background ou verrouillée.",
      },
      ai: {
        label: "Modèle de delivery",
        title: "Expertise senior — l'IA comme levier, pas comme raccourci",
        intro: "Un interlocuteur senior responsable sur votre mission. L'IA compresse les cycles d'implémentation ; architecture, releases, revues de code et décisions production restent sous pilotage senior.",
        m1h: "Architecture d'abord",
        m1k: "Structure",
        m1p: "Clean Architecture, modularité et DI avant la vélocité — pour que les phases freelance ne créent pas de dette durable.",
        m2h: "Exécution accélérée",
        m2k: "Vélocité",
        m2p: "Développement assisté par l'IA (Cursor, Gemini) pour scaffolding, refactors, tests et glue API — architecture, revues de code et décisions production sous pilotage senior.",
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
          "Mobile de bout en bout pour produits réglementés et à fort trafic — expérience utilisateur, secteur public, grand public et médias temps réel.",
        s1t: "Produits public & grand public",
        s1d: 'Citoyens, patients et professionnels — architecture jusqu\'aux stores <span class="store-name">Play Store</span>, <span class="store-name">App Store</span> & <span class="store-name">App Gallery</span>',
        s2t: "Médias & communication temps réel",
        s2d: "Vidéo Twilio, VoIP SIP, audio live, TTS, UX voice-first — sessions média foreground & background",
        s3t: "Android & Compose",
        s3d: "Kotlin, Clean Architecture, Hilt/Koin, modernisation legacy, dual-store GMS/HMS",
        s4t: "Delivery orientée produit",
        s4d: "Collaboration avec produit & design — accessibilité, ownership release et décisions production sous pilotage senior",
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
        proxymSum: "Mission client — programmes mobiles gouvernementaux aux EAU (Maskan, Chambers, Culture, Police). Développement assisté par l'IA sur codebases live — pilotage senior de l'architecture, des revues et des releases.",
        wimobiRole: "Senior Mobile Tech Lead",
        wimobiTime: "Janv. 2017 — Aujourd'hui",
        wimobiLoc: "Télétravail UE · Bergneustadt, DE",
        wimobiSum: "Studio agence — Android & Flutter en production pour clients UE et MENA ; client actuel : Proxym Middle East (secteur public EAU).",
        schneiderRole: "Responsable équipe Android · France",
        schneiderTime: "Mai 2023 — Mars 2024",
        schneiderLoc: "France · Télétravail",
        schneiderSum: 'Responsable Android — <strong>mySchneider</strong> (Schneider Electric, France) : direction équipe Android ; MAP, GitHub/Dependabot, CI/CD Python sur Azure DevOps, releases Play Store — app dans <strong>100+ pays</strong> (mai 2023 – mars 2024).',
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
        title: "Ingénierie mobile senior · France & UE",
        intro:
          "Disponible pour des missions d'ingénierie mobile senior — secteur public, produits grand public et médias temps réel. Sur site ou à distance en France et en UE. Missions freelance possibles via HB IT Services.",
        bizLabel: "Contrats & facturation",
        bizName: "<strong>HB IT Services</strong> · Bergneustadt, Allemagne",
        bizNote: "Entreprise UE enregistrée · devis et factures en EUR · TVA sur demande.",
      },
      footer: "© {year} Samira Salah · HB IT Services · Ingénieure mobile senior",
    },
    de: {
      meta: {
        title: "Samira Salah — Senior Mobile Engineer · Android & Flutter · Frankreich & EU",
        description:
          "Senior Mobile Engineer — Android, Flutter, Echtzeit-Media. Schneider Electric (100+ Länder), VAE-Regierung, Healthcare Deutschland. Produktorientierte Delivery für Public Sector und Consumer.",
      },
      skip: "Zum Inhalt springen",
      nav: {
        ai: "Delivery",
        expertise: "Expertise",
        highlights: "Highlights",
        how: "Arbeitsweise",
        media: "Media & Live",
        work: "Referenzen",
        experience: "Karriere",
        contact: "Kontakt",
        hire: "Kontakt aufnehmen",
        menuOpen: "Menü öffnen",
        lang: "Sprache",
      },
      hero: {
        eyebrow:
          'Senior Mobile Engineer · <span data-geo-scope>Deutschland & EU · remote oder vor Ort</span>',
        trade: 'Senior Android & Flutter Engineer · verfügbar — <strong>HB IT Services</strong>',
        title: 'Senior Mobile Engineer — <span class="accent">öffentlicher Sektor</span>, Consumer-Produkte & <span class="accent">Echtzeit-Media</span>',
        mission:
          'Begeistert von digitalen Erlebnissen, die <strong>Information, Kultur und öffentliche Dienste</strong> zugänglicher machen — für Millionen Nutzer in Europa.',
        lead:
          'Mobile Erlebnisse für <strong>Bürger, Patienten, Fachkräfte und Consumer-Zielgruppen</strong> — von <strong>Schneider Electric (Frankreich, 100+ Länder)</strong> und <strong>reguliertem Healthcare</strong> bis <strong>Regierungsprogrammen in den VAE</strong> und <strong>Produktions-Video, VoIP & Live-Media</strong>. Senior Ownership von Architektur bis Store-Release.',
        proof1n: "8+",
        proof1: "Jahre · Senior Mobile Lead",
        proof2n: "100+",
        proof2: "Länder · Schneider mySchneider",
        proof3n: "Media",
        proof3: "Video, Voice & Live-Streaming in Prod",
        ctaBook: "Kontakt aufnehmen",
        ctaCv: "Lebenslauf (PDF)",
        ctaCvUrl: "assets/cv.html?lang=de",
        ctaWork: "Referenzen ansehen",
        panelLabel: "Wie ich arbeite",
        panelTitle: "Senior Ownership — <em>production-first</em>",
        panelSummary:
          "Production-first Engineering mit pragmatischer Architektur — Scoping, Umsetzung, Release-Ownership und Übergabe. Enge Zusammenarbeit mit Produkt, Design, QA und Backend.",
        panelB1: "End-to-End-Delivery — Architektur bis Play Store, App Store & App Gallery",
        panelB2: "Nutzerorientierte Produkte — Public Sector, Healthcare, Consumer & Echtzeit-Media",
        panelB3: "Frankreich: Schneider, Runnrz, Digitsole, Côté Puces · EU: Gesundheitspersonal (DE) · TN: Comunik",
        panelCta: "Fallstudien ansehen →",
      },
      achievements: {
        label: "Highlights",
        title: "Karriere-Highlights",
        intro: "In 15 Sekunden — Umfang, Verantwortung und Produktimpact vor den Fallstudien.",
        a1t: "Schneider Electric · Frankreich",
        a1b: "Android Team Lead für mySchneider — globale B2B-App in 100+ Ländern, Play Store Governance.",
        a2t: "Mobile Plattformen VAE-Regierung",
        a2b: "Tech Lead — Maskan (FTA), Dubai Chambers, Culture & Dubai Police.",
        a3t: "Healthcare · Deutschland",
        a3b: "Gesundheitspersonal — Live-Videopflege & Übersetzung für Patienten und Care-Teams (DSGVO).",
        a4t: "Echtzeit-Media & Kommunikation",
        a4b: "Twilio Video, VoIP, Live-Audio, TTS & Background-Media-Sessions in Production.",
        a5t: "Multi-Store · Public & Consumer",
        a5b: "Play Store, App Store & App Gallery — Bürger, Patienten und Fachkräfte im großen Maßstab.",
      },
      why: {
        label: "Arbeitsweise",
        title: "Warum Teams mich engagieren",
        intro: "Production-first Engineering — pragmatische Architektur, schnelles Onboarding und enge Zusammenarbeit mit Produkt, Design, QA und Backend.",
        w1t: "Pragmatische Architektur",
        w1b: "Modulare Grenzen und DI, die skaliert — ohne Over-Engineering oder Verlangsamung.",
        w2t: "Schnelles Onboarding auf Legacy-Code",
        w2b: "Produktiv auf Live-Regierungs- und Enterprise-Apps in Tagen, nicht Monaten.",
        w3t: "Production-first Engineering",
        w3b: "Store-Releases, Compliance, Stabilität und zuverlässige Sessions in echten Netzen.",
        w4t: "Cross-funktionale Zusammenarbeit",
        w4b: "Klare Abstimmung mit Produkt, Design, Backend, QA und Release-Ownern.",
        w5t: "Produkt- & Nutzerimpact",
        w5b: "UX, Accessibility und Engagement — Produkte, auf die Menschen täglich vertrauen.",
      },
      media: {
        label: "Echtzeit-Media",
        title: "Echtzeit-Media & Kommunikation",
        intro: "Video, Audio, Voice und Live-Sessions in Production — zwischen Broadcast-Erwartungen, Healthcare und mobilem Consumer-UX.",
        m1t: "Twilio Video",
        m1d: "Live-Videokonsultationen und Care-Sessions — nutzerorientierte Healthcare-Delivery in Deutschland.",
        m2t: "Streaming & Live-Sessions",
        m2d: "Low-Latency-Video und Live-Übersetzung für Patienten- und Care-Team-Apps.",
        m3t: "Audio, Voice & Streaming",
        m3d: "SIP-VoIP-Softphones, TTS-Dispatch, Hands-free-Coaching — Voice-first Experiences auf Mobile.",
        m4t: "Live-Kommunikation",
        m4d: "WebSocket-Provisioning, FCM-Push, Hold/Transfer/Conference in echten Mobilfunknetzen.",
        m5t: "Echtzeit-Benachrichtigungen",
        m5d: "Backend-Alerts, Streifen-Dispatch und Feldoperationen mit zuverlässiger Foreground/Background-Delivery.",
        m6t: "Background-Media-Sessions",
        m6d: "Eingehende Anrufe, Audio-Wiedergabe und Session-Kontinuität bei Background oder gesperrtem Screen.",
      },
      ai: {
        label: "Delivery-Modell",
        title: "Senior Craft — KI als Hebel, nicht als Abkürzung",
        intro: "Eine verantwortliche Senior-Entwicklerin auf Ihrer Mission. KI komprimiert Implementierungs-Zyklen; Architektur, Releases, Code-Reviews und Production-Entscheidungen bleiben in Senior-Verantwortung.",
        m1h: "Architektur zuerst",
        m1k: "Struktur",
        m1p: "Clean Architecture, modulare Grenzen und DI vor Feature-Tempo — damit Freelance-Phasen keine langfristige Schuld erzeugen.",
        m2h: "Beschleunigte Umsetzung",
        m2k: "Velocity",
        m2p: "KI-gestützte Entwicklung (Cursor, Gemini) für Scaffolding, Refactors, Tests und Integrations-Glue — Architektur, Code-Reviews und Production-Entscheidungen in Senior-Verantwortung.",
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
          "Mobile End-to-End für regulierte und hoch frequentierte Produkte — Nutzererlebnis, Public Sector, Consumer-Zielgruppen und Echtzeit-Media.",
        s1t: "Public- & Consumer-Produkte",
        s1d: 'Bürger, Patienten und Fachkräfte — Architektur bis <span class="store-name">Play Store</span>, <span class="store-name">App Store</span> & <span class="store-name">App Gallery</span>',
        s2t: "Echtzeit-Media & Kommunikation",
        s2d: "Twilio-Video, SIP-VoIP, Live-Audio, TTS, Voice-first UX — Foreground- & Background-Media-Sessions",
        s3t: "Android & Compose",
        s3d: "Kotlin, Clean Architecture, Hilt/Koin, Legacy-Modernisierung, Dual-Store GMS/HMS",
        s4t: "Produktorientierte Delivery",
        s4d: "Zusammenarbeit mit Produkt & Design — Accessibility, Release-Ownership und Production-Entscheidungen in Senior-Verantwortung",
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
        proxymSum: "Kundenauftrag — mobile Regierungsprogramme in den VAE (Maskan, Chambers, Culture, Police). KI-gestützte Entwicklung auf Live-Codebases — Senior-Ownership für Architektur, Reviews und Releases.",
        wimobiRole: "Senior Mobile Tech Lead",
        wimobiTime: "Jan. 2017 — Heute",
        wimobiLoc: "EU-Remote · Bergneustadt, DE",
        wimobiSum: "Agentur-Studio — Android & Flutter in Produktion für EU- und MENA-Kunden; aktueller Kunde: Proxym Middle East (öffentlicher Sektor VAE).",
        schneiderRole: "Android Team Leader · Frankreich",
        schneiderTime: "Mai 2023 — März 2024",
        schneiderLoc: "Frankreich · Remote",
        schneiderSum: 'Android Team Leader — <strong>mySchneider</strong> (Schneider Electric, Frankreich): Android-Team geleitet; MAP, GitHub/Dependabot, Python CI/CD auf Azure DevOps, Play-Store-Releases — App in <strong>100+ Ländern</strong> (Mai 2023 – März 2024).',
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
        title: "Senior Mobile Engineering · Frankreich & EU",
        intro:
          "Verfügbar für Senior-Mobile-Engineering-Rollen — Public Sector, Consumer-Produkte und Echtzeit-Media. Vor Ort oder remote in Frankreich und der EU. Freelance-Aufträge über HB IT Services möglich.",
        bizLabel: "Verträge & Rechnungen",
        bizName: "<strong>HB IT Services</strong> · Bergneustadt, Deutschland",
        bizNote: "Registriertes EU-Unternehmen · Angebote & Rechnungen in EUR · USt-Details auf Anfrage.",
      },
      footer: "© {year} Samira Salah · HB IT Services · Senior Mobile Engineer",
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
