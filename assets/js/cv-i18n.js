/**
 * CV i18n — EN (default), FR, DE
 * Tagline (France vs Germany) lives in geo-location.js — see CV-GUIDE.md § Géolocalisation.
 */
(function () {
  const PORTFOLIO_LANG_KEY = "portfolio-lang";
  const LANGS = ["en", "fr", "de"];

  const T = {
    en: {
      metaTitle: "Samira Salah — CV",
      exportHint:
        '<strong>Export PDF</strong> — Chrome · <kbd>⌘</kbd>+<kbd>P</kbd> → <em>Save as PDF</em> · A4 · Spacing preview: <code>?preview=print</code>',
      langLabel: "CV language",
      title: "Senior Freelance Android & Mobile Engineer · Video & public apps",
      badgeTitle:
        'Freelance senior · missions in <span data-geo-missions data-geo-missions-html="true"><strong>Germany</strong></span>',
      badgeBiz: "HB IT Services · EUR invoicing",
      m1: "8+ years",
      m1s: "Senior mobile delivery",
      m2: "Video & live",
      m2s: "Twilio · WebSocket · FCM",
      m3: "France proven",
      m3s: "Schneider · Runnrz · Digitsole",
      m4: "Public-grade",
      m4s: "Reliability · compliance · scale",
      refsFranceLabel: "France",
      refsFranceClients: "Schneider Electric · Runnrz · Digitsole",
      refsLiveLabel: "Video & VoIP",
      refsLiveClients: "Gesundheitspersonal (DE) · Comunik Phone (TN) · Digitsole (FR)",
      profile: "Profile",
      profileText:
        'Senior freelance mobile engineer — <strong>8+ years</strong> delivering production <strong>Android & Flutter</strong> for high-traffic <strong>consumer, enterprise, and public-sector</strong> products. Core strengths: <strong>mobile architecture</strong>, <strong>real-time systems</strong> (Twilio Video, VoIP, WebSocket), and <strong>store-grade release</strong> (CI/CD → Play Store / App Store). Recent France engagement: <strong>Android lead, Schneider Electric</strong> (mySchneider, 100+ countries). Contracts & EUR invoicing via HB IT Services.',
      offerTitle: "Expertise",
      offer1t: "Mobile architecture & delivery",
      offer1b: "Kotlin · Jetpack Compose · Flutter · MVVM · Clean Architecture · modularisation at scale",
      offer2t: "Real-time & connected",
      offer2b: "Twilio Video · WebSocket · SIP VoIP · FCM · BLE · TTS · background services",
      offer3t: "Production & compliance",
      offer3b: "CI/CD · multi-store releases · GDPR healthcare · institutional & consumer apps at volume",
      experience: "Experience",
      keyProjects: "Key projects",
      flagshipProjects: "Flagship projects",
      keyProjectsCont: "More projects",
      earlierExp: "Earlier experience",
      earlierExpText:
        "<strong>Knowlepsy</strong> (Tunis) — Medical BLE module for epilepsy care · <strong>WIMOBI</strong> — Resto'lib, Intigo, Coffreo, SearchDoc and other EU/MENA client apps",
      coreExpertise: "Core skills",
      skillVideo: "Video & real-time",
      skillMobile: "Mobile & architecture",
      skillMaps: "Maps & location",
      skillFlutter: "Flutter & UI",
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
      lvFrPro: "Professional · daily work",
      lvNative: "Native",
      lvDe: "A2+",
      delivered: "Delivered",
      impact: "Impact",
      footerL: "HB IT Services · Registered EU business · Quotes & invoices in EUR",
      footerRLabel: "Full case studies:",
      footerRUrl: "samirasalah.github.io",
      present: "Present",
      roles: {
        proxym: {
          title: "Software Team Lead — Android",
          meta: "May 2024 — Present · Dubai · Remote",
          desc: "Android technical lead on UAE government programs — Maskan (FTA), Dubai Chambers, Dubai Police (Dispatcher, IServe). Modular architecture, GMS/HMS dual-store strategy, production releases.",
        },
        wimobi: {
          title: "Senior Mobile Tech Lead",
          meta: "Jan 2017 — Present · EU · Remote",
          desc: "Freelance tech lead — architecture, Android & Flutter delivery, and store releases for EU/MENA clients across France, Germany, and Tunisia.",
        },
        schneider: {
          title: "Android Team Leader",
          meta: "May 2023 — Mar 2024 · France · Remote",
          desc: 'Led the Android team on global <strong>mySchneider</strong> — high-traffic B2B app used in 100+ countries: modular architecture, CI/CD (Azure DevOps), Play Store releases from France.',
        },
      },
      projects: {
        maskan: {
          sector: "Government · UAE · FTA",
          meta: "Technical Leader · Play Store",
          intro: "Official FTA app for UAE nationals — mobile VAT refund claims, proof submission, and citizen-facing government services.",
          delivered: "Modular architecture; refund journeys; OCR capture; Google Wallet; App-to-App/Web auth; Play Store ownership.",
          impact: "Citizens submit refund proofs from mobile on a greenfield government product.",
        },
        chambers: {
          sector: "Government · UAE",
          meta: "Team Lead · Play Store & App Gallery",
          intro: "Official Dubai Chambers app — mobile access to chamber services for UAE companies and entrepreneurs.",
          delivered: "Team lead; feature integration; OCR & OpenAI document extraction; Play Store & App Gallery releases; GMS→HMS migration.",
          impact: "More reliable document handling and predictable releases on a live government app.",
        },
        myschneider: {
          sector: "Enterprise · France",
          meta: "Android Team Leader · Schneider Electric",
          intro: "Global Schneider B2B mobile platform — product catalog, customer services, and partner tools in 100+ countries.",
          delivered: "Android team leadership; modular architecture; code review; dependency hygiene; CI/CD (Azure DevOps); production→Play Store releases.",
          impact: "Global B2B app kept release-ready at scale — delivery rigour transferable to high-traffic public-facing products.",
        },
        comunik: {
          sector: "VoIP · B2B · Tunisia",
          intro: "Enterprise softphone for Android & iOS — business voice line with hold, transfer, and conference on Comunik's cloud telephony platform.",
          delivered: "Softphone architecture; WebSocket credential provisioning; incoming-call handling when backgrounded; design-system refactor; Play Store & App Store release.",
          impact: "Production B2B voice layer — reliable calls on real mobile networks.",
        },
        gesundheit: {
          sector: "Healthcare · Germany",
          meta: "Lead Flutter · Play Store",
          intro: "German healthcare platform — Doctor (Twilio video consultations) and Translatly (live translation) for patients and care teams.",
          delivered: "Flutter tech lead on both apps; architecture and features; end-to-end Play Store and App Store submissions.",
          impact: "Two live apps — mobile video delivered under healthcare regulatory constraints.",
        },
        dispatcher: {
          sector: "Police · UAE",
          intro: "Map-based patrol dispatch — live backend alerts, in-vehicle MDVR integration, and spoken notifications for field officers.",
          delivered: "ViewBinding migration; backend alarm listener; Esri→HERE Maps; plate detection; MDVR socket; TTS alerts.",
          impact: "Real-time operational support for Dubai Police patrol teams in the field.",
        },
        iserve: {
          sector: "Police · UAE",
          intro: "Fleet app for patrol officers — browse available vehicles, check status, reserve, and lock/unlock before shift.",
          delivered: "Data Binding migration; reservation flows; vehicle lock/unlock features.",
          impact: "Officers secure patrol vehicles from mobile before heading out.",
        },
        runnrz: {
          sector: "Consumer · France",
          meta: "Android · France · Mapbox",
          intro: "Established French fitness app for walking, running, and cycling — multi-activity tracking for a mass-market audience.",
          delivered: "Full iOS→Android port; Mapbox navigation; walk, run, and cycling modes; BLE integration; quality pass to team standards.",
          impact: "Feature parity on Android — UX and stability at consumer-app standards for the French market.",
        },
        digitsole: {
          sector: "Consumer · France",
          meta: "Lead Android · Digitsole",
          intro: "Connected coaching for runners and walkers — live insole biomechanics and spoken guidance during activity.",
          delivered: "Lead Android on two companion apps; Zhor-Tech ZT Core Kit SDK for insole BLE connection and reliable sensor streams; AWS Amplify migration; Crowdin string workflow; real-time voice coaching.",
          impact: "Live sensor and audio coaching on a French consumer hardware product.",
        },
        cotepuces: {
          sector: "Marketplace · France",
          intro: "French brocante and antiques marketplace connecting buyers and sellers.",
          delivered: "End-to-end Android app — buyer/seller journeys, Retrofit API integration, Play Store release.",
          impact: "Mobile sales channel live for a French consumer community.",
        },
      },
    },
    fr: {
      metaTitle: "Samira Salah — CV",
      exportHint:
        '<strong>Exporter en PDF</strong> — Chrome · <kbd>⌘</kbd>+<kbd>P</kbd> → <em>Enregistrer au format PDF</em> · A4 · Prévisualiser l\'espacement : <code>?preview=print</code>',
      langLabel: "Langue du CV",
      title: "Ingénieure mobile senior freelance · Android & Flutter · Vidéo & grand public",
      badgeTitle:
        'Freelance senior · missions en <span data-geo-missions data-geo-missions-html="true"><strong>Allemagne</strong></span>',
      badgeBiz: "HB IT Services · facturation EUR",
      m1: "8+ ans",
      m1s: "Mobile senior",
      m2: "Vidéo & live",
      m2s: "Twilio · WebSocket · FCM",
      m3: "France prouvée",
      m3s: "Schneider · Runnrz · Digitsole",
      m4: "Service public",
      m4s: "Fiabilité · conformité · volume",
      refsFranceLabel: "France",
      refsFranceClients: "Schneider Electric · Runnrz · Digitsole",
      refsLiveLabel: "Vidéo & VoIP",
      refsLiveClients: "Gesundheitspersonal (DE) · Comunik Phone (TN) · Digitsole (FR)",
      profile: "Profil",
      profileText:
        'Ingénieure mobile senior freelance — <strong>8+ ans</strong> de delivery <strong>Android & Flutter</strong> en production (grand public, enterprise, secteur public). Expertise : <strong>architecture mobile</strong>, <strong>temps réel</strong> (Twilio Video, VoIP, WebSocket) et <strong>industrialisation store</strong> (CI/CD → Play Store / App Store). Référence récente : <strong>lead Android Schneider Electric</strong> (mySchneider, 100+ pays). Contrats & facturation EUR via HB IT Services.',
      offerTitle: "Expertise",
      offer1t: "Architecture & delivery mobile",
      offer1b: "Kotlin · Jetpack Compose · Flutter · MVVM · Clean Architecture · modularisation à l'échelle",
      offer2t: "Temps réel & connecté",
      offer2b: "Twilio Video · WebSocket · VoIP SIP · FCM · BLE · TTS · services arrière-plan",
      offer3t: "Production & conformité",
      offer3b: "CI/CD · releases multi-store · RGPD santé · apps institutionnelles & grand public",
      experience: "Expérience",
      keyProjects: "Projets clés",
      flagshipProjects: "Projets phares",
      keyProjectsCont: "Autres projets",
      earlierExp: "Expérience antérieure",
      earlierExpText:
        "<strong>Knowlepsy</strong> (Tunis) — Module BLE médical pour épilepsie · <strong>WIMOBI</strong> — Resto'lib, Intigo, Coffreo, SearchDoc et autres apps clients UE/MENA",
      coreExpertise: "Compétences clés",
      skillVideo: "Vidéo & temps réel",
      skillMobile: "Mobile & architecture",
      skillMaps: "Cartographie & localisation",
      skillFlutter: "Flutter & UI",
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
      lvFrPro: "Professionnel · travail courant",
      lvNative: "Natif",
      lvDe: "A2+",
      delivered: "Livré",
      impact: "Impact",
      footerL: "HB IT Services · Entreprise UE enregistrée · Devis & factures en EUR",
      footerRLabel: "Études de cas :",
      footerRUrl: "samirasalah.github.io",
      present: "Aujourd'hui",
      roles: {
        proxym: {
          title: "Software Team Lead — Android",
          meta: "Mai 2024 — Aujourd'hui · Dubaï · Remote",
          desc: "Lead technique Android sur programmes mobiles gouvernementaux EAU — Maskan (FTA), Dubai Chambers, Dubai Police (Dispatcher, IServe). Architecture modulaire, stratégie GMS/HMS, releases production.",
        },
        wimobi: {
          title: "Senior Mobile Tech Lead",
          meta: "Jan 2017 — Aujourd'hui · UE · Remote",
          desc: "Lead technique freelance — cadrage architecture, delivery Android & Flutter et mises en production pour clients UE/MENA (France, Allemagne, Tunisie).",
        },
        schneider: {
          title: "Android Team Leader",
          meta: "Mai 2023 — Mar 2024 · France · Remote",
          desc: 'Direction de l\'équipe Android sur <strong>mySchneider</strong> mondial — app B2B à fort trafic dans 100+ pays : architecture modulaire, CI/CD (Azure DevOps), releases Play Store depuis la France.',
        },
      },
      projects: {
        maskan: {
          sector: "Secteur public · EAU · FTA",
          meta: "Lead technique · Play Store",
          intro: "Application officielle FTA pour les nationaux EAU — remboursements TVA mobiles, dépôt de justificatifs et services citoyens.",
          delivered: "Architecture modulaire ; parcours remboursement ; capture OCR ; Google Wallet ; auth App-to-App/Web ; ownership Play Store.",
          impact: "Les citoyens soumettent leurs justificatifs depuis le mobile sur un produit gouvernemental greenfield.",
        },
        chambers: {
          sector: "Secteur public · EAU",
          meta: "Team Lead · Play Store & App Gallery",
          intro: "Application officielle Dubai Chambers — accès mobile aux services chambre de commerce pour entreprises et entrepreneurs aux EAU.",
          delivered: "Team lead ; intégration features ; OCR & extraction OpenAI ; releases Play Store & App Gallery ; migration GMS→HMS.",
          impact: "Traitement documentaire plus fiable et releases prévisibles sur une app gouvernementale en production.",
        },
        myschneider: {
          sector: "Entreprise · France",
          meta: "Android Team Leader · Schneider Electric",
          intro: "Plateforme mobile B2B Schneider mondiale — catalogue produits, services clients et outils partenaires dans 100+ pays.",
          delivered: "Direction équipe Android ; architecture modulaire ; revues de code ; gestion des dépendances ; CI/CD (Azure DevOps) ; releases production→Play Store.",
          impact: "App B2B mondiale maintenue en condition de release — rigueur de delivery applicable aux apps grand public à fort trafic.",
        },
        comunik: {
          sector: "VoIP · B2B · Tunisie",
          intro: "Softphone entreprise pour Android et iOS — ligne voix pro avec attente, transfert et conférence sur la téléphonie cloud Comunik.",
          delivered: "Architecture softphone ; provisioning credentials WebSocket ; gestion appels entrants en arrière-plan ; refactor design system ; release Play Store & App Store.",
          impact: "Couche voix B2B en production — appels fiables sur réseaux mobiles réels.",
        },
        gesundheit: {
          sector: "Santé · Allemagne",
          meta: "Lead Flutter · Play Store",
          intro: "Plateforme santé allemande — Doctor (téléconsultation Twilio) et Translatly (traduction live) pour patients et équipes soignantes.",
          delivered: "Tech lead Flutter des deux apps ; architecture et fonctionnalités ; soumissions Play Store et App Store de bout en bout.",
          impact: "Deux apps en production — vidéo mobile livrée sous contraintes réglementaires santé.",
        },
        dispatcher: {
          sector: "Police · EAU",
          intro: "Dispatch patrouilles cartographique — alertes backend live, intégration MDVR embarquée et notifications vocales pour les agents terrain.",
          delivered: "Migration ViewBinding ; service écoute alarmes backend ; Esri→HERE Maps ; détection plaques ; socket MDVR ; alertes TTS.",
          impact: "Support opérationnel temps réel pour les patrouilles Dubai Police sur le terrain.",
        },
        iserve: {
          sector: "Police · EAU",
          intro: "App flotte pour les agents — consulter les véhicules disponibles, vérifier l'état, réserver et verrouiller / déverrouiller avant prise de service.",
          delivered: "Migration Data Binding ; parcours réservation ; fonctionnalités verrouillage / déverrouillage véhicule.",
          impact: "Les agents sécurisent leur véhicule de patrouille depuis le mobile avant de partir.",
        },
        runnrz: {
          sector: "Grand public · France",
          meta: "Android · France · Mapbox",
          intro: "App fitness française établie — marche, course et vélo, suivi multi-activité pour le grand public.",
          delivered: "Portage iOS→Android complet ; navigation Mapbox ; modes marche, course et vélo ; intégration BLE ; passe qualité aux standards équipe.",
          impact: "Parité fonctionnelle Android — UX et stabilité au niveau app consommateur sur le marché français.",
        },
        digitsole: {
          sector: "Grand public · France",
          meta: "Lead Android · Digitsole",
          intro: "Coaching connecté pour coureurs et marcheurs — biomécanique live des semelles et guidage vocal pendant l'effort.",
          delivered: "Lead Android sur deux apps compagnons ; SDK Zhor-Tech ZT Core Kit (connexion BLE semelles & flux capteurs) ; migration AWS Amplify ; workflow strings Crowdin ; coaching vocal temps réel.",
          impact: "Capteurs et audio live sur un produit hardware fitness consommateur français.",
        },
        cotepuces: {
          sector: "Marketplace · France",
          intro: "Marketplace française brocante et antiquités — mise en relation acheteurs et vendeurs.",
          delivered: "App Android de bout en bout ; parcours acheteur/vendeur ; intégration API Retrofit ; release Play Store.",
          impact: "Canal mobile de vente actif pour une communauté consommateurs en France.",
        },
      },
    },
    de: {
      metaTitle: "Samira Salah — Lebenslauf",
      exportHint:
        '<strong>PDF exportieren</strong> — Chrome · <kbd>⌘</kbd>+<kbd>P</kbd> → <em>Als PDF speichern</em> · A4',
      langLabel: "Sprache des Lebenslaufs",
      title: "Senior Freelance Android & Mobile Engineer · Video & Public Apps",
      badgeTitle:
        'Freelance senior · Aufträge in <span data-geo-missions data-geo-missions-html="true"><strong>Deutschland</strong></span>',
      badgeBiz: "HB IT Services · EUR-Abrechnung",
      m1: "8+ Jahre",
      m1s: "Senior Mobile Delivery",
      m2: "Video & Live",
      m2s: "Twilio · WebSocket · FCM",
      m3: "Frankreich belegt",
      m3s: "Schneider · Runnrz · Digitsole",
      m4: "Public-Grade",
      m4s: "Zuverlässigkeit · Compliance · Skalierung",
      refsFranceLabel: "Frankreich",
      refsFranceClients: "Schneider Electric · Runnrz · Digitsole",
      refsLiveLabel: "Video & VoIP",
      refsLiveClients: "Gesundheitspersonal (DE) · Comunik Phone (TN) · Digitsole (FR)",
      profile: "Profil",
      profileText:
        'Senior Freelance Mobile Engineer — <strong>8+ Jahre</strong> Production-Delivery für <strong>Android & Flutter</strong> (Consumer, Enterprise, Public Service). Schwerpunkte: <strong>Mobile-Architektur</strong>, <strong>Echtzeit</strong> (Twilio Video, VoIP, WebSocket) und <strong>Store-Releases</strong> (CI/CD → Play Store / App Store). Aktuelle Frankreich-Referenz: <strong>Android Lead, Schneider Electric</strong> (mySchneider, 100+ Länder). Verträge & EUR-Abrechnung über HB IT Services.',
      offerTitle: "Expertise",
      offer1t: "Mobile-Architektur & Delivery",
      offer1b: "Kotlin · Jetpack Compose · Flutter · MVVM · Clean Architecture · Skalierung modular",
      offer2t: "Echtzeit & Connected",
      offer2b: "Twilio Video · WebSocket · SIP-VoIP · FCM · BLE · TTS · Background-Services",
      offer3t: "Production & Compliance",
      offer3b: "CI/CD · Multi-Store-Releases · DSGVO-Healthcare · Behörden- & Consumer-Apps",
      experience: "Berufserfahrung",
      keyProjects: "Schlüsselprojekte",
      flagshipProjects: "Leitprojekte",
      keyProjectsCont: "Weitere Projekte",
      earlierExp: "Frühere Erfahrung",
      earlierExpText:
        "<strong>Knowlepsy</strong> (Tunis) — Medizinisches BLE-Modul für Epilepsie · <strong>WIMOBI</strong> — Resto'lib, Intigo, Coffreo, SearchDoc und weitere EU/MENA-Apps",
      coreExpertise: "Kernkompetenzen",
      skillVideo: "Video & Echtzeit",
      skillMobile: "Mobile & Architektur",
      skillMaps: "Karten & Location",
      skillFlutter: "Flutter & UI",
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
      lvFrPro: "Berufssprache · Alltag",
      lvNative: "Muttersprache",
      lvDe: "A2+ · im Aufbau",
      delivered: "Geliefert",
      impact: "Impact",
      footerL: "HB IT Services · EU-registriertes Unternehmen · Angebote & Rechnungen in EUR",
      footerRLabel: "Fallstudien:",
      footerRUrl: "samirasalah.github.io",
      present: "Heute",
      roles: {
        proxym: {
          title: "Software Team Lead — Android",
          meta: "Mai 2024 — Heute · Dubai · Remote",
          desc: "Android Technical Lead für Regierungsprogramme VAE — Maskan (FTA), Dubai Chambers, Dubai Police (Dispatcher, IServe). Modulare Architektur, GMS/HMS Dual-Store, Production-Releases.",
        },
        wimobi: {
          title: "Senior Mobile Tech Lead",
          meta: "Jan 2017 — Heute · EU · Remote",
          desc: "Freelance Tech Lead — Architektur, Android- & Flutter-Delivery und Store-Releases für EU/MENA-Kunden in Frankreich, Deutschland und Tunesien.",
        },
        schneider: {
          title: "Android Team Leader",
          meta: "Mai 2023 — Mär 2024 · Frankreich · Remote",
          desc: 'Leitung des Android-Teams für globales <strong>mySchneider</strong> — High-Traffic-B2B-App in 100+ Ländern: modulare Architektur, CI/CD (Azure DevOps), Play-Store-Releases aus Frankreich.',
        },
      },
      projects: {
        maskan: {
          sector: "Behörden · VAE · FTA",
          meta: "Technical Leader · Play Store",
          intro: "Offizielle FTA-App für VAE-Staatsangehörige — mobile MwSt.-Erstattung, Belegübermittlung und Bürger-Services.",
          delivered: "Modulare Architektur; Erstattungsflows; OCR-Capture; Google Wallet; App-to-App/Web-Auth; Play-Store-Ownership.",
          impact: "Bürger reichen Nachweise mobil auf einem Greenfield-Behördenprodukt ein.",
        },
        chambers: {
          sector: "Behörden · VAE",
          meta: "Team Lead · Play Store & App Gallery",
          intro: "Offizielle Dubai-Chambers-App — mobiler Zugang zu Handelskammer-Services für Unternehmen und Gründer in den VAE.",
          delivered: "Team Lead; Feature-Integration; OCR & OpenAI-Extraktion; Play-Store- & App-Gallery-Releases; GMS→HMS-Migration.",
          impact: "Zuverlässigere Dokumentenverarbeitung und planbare Releases auf einer Live-Behörden-App.",
        },
        myschneider: {
          sector: "Enterprise · Frankreich",
          meta: "Android Team Leader · Schneider Electric",
          intro: "Globale B2B-Schneider-Mobile-Plattform — Produktkatalog, Kundenservices und Partner-Tools in über 100 Ländern.",
          delivered: "Android-Teamleitung; modulare Architektur; Code-Reviews; Dependency-Hygiene; CI/CD (Azure DevOps); Production→Play-Store-Releases.",
          impact: "Globale B2B-App release-ready — Delivery-Disziplin übertragbar auf Public-Apps mit hohem Traffic.",
        },
        comunik: {
          sector: "VoIP · B2B · Tunesien",
          intro: "Enterprise-Softphone für Android & iOS — Geschäftssprachleitung mit Halten, Transfer und Konferenz auf Comuniks Cloud-Telefonie.",
          delivered: "Softphone-Architektur; WebSocket-Credential-Provisioning; eingehende Anrufe im Background; Design-System-Refactor; Play-Store- & App-Store-Release.",
          impact: "Produktive B2B-Voice-Schicht — zuverlässige Anrufe in echten Mobilfunknetzen.",
        },
        gesundheit: {
          sector: "Healthcare · Deutschland",
          meta: "Lead Flutter · Play Store",
          intro: "Deutsche Healthcare-Plattform — Doctor (Twilio-Videokonsultation) und Translatly (Live-Übersetzung) für Patienten und Pflegeteams.",
          delivered: "Flutter Tech Lead für beide Apps; Architektur und Features; End-to-End-Einreichungen Play Store und App Store.",
          impact: "Zwei Live-Apps — Mobile-Video unter Healthcare-Regulatorik.",
        },
        dispatcher: {
          sector: "Polizei · VAE",
          intro: "Kartenbasiertes Streifen-Dispatch — Live-Backend-Alerts, MDVR-Fahrzeug-Integration und Sprachbenachrichtigungen im Einsatz.",
          delivered: "ViewBinding-Migration; Backend-Alarm-Listener; Esri→HERE Maps; Kennzeichen-Erkennung; MDVR-Socket; TTS-Alerts.",
          impact: "Echtzeit-Unterstützung für Dubai-Police-Streifen im Feld.",
        },
        iserve: {
          sector: "Polizei · VAE",
          intro: "Fuhrpark-App für Streifen — verfügbare Fahrzeuge prüfen, reservieren und vor Schichtbeginn ver-/entriegeln.",
          delivered: "Data-Binding-Migration; Reservierungsflows; Fahrzeug-Ver-/Entriegelung.",
          impact: "Einsatzkräfte sichern Streifenfahrzeuge mobil vor dem Einsatz.",
        },
        runnrz: {
          sector: "Consumer · Frankreich",
          meta: "Android · Frankreich · Mapbox",
          intro: "Etablierte französische Fitness-App — Walk, Run und Cycling, Multi-Aktivitäts-Tracking für den Massenmarkt.",
          delivered: "Vollständiger iOS→Android-Port; Mapbox-Navigation; Walk-, Run- und Cycling-Modi; BLE-Integration; Qualitätspass nach Team-Standards.",
          impact: "Feature-Parität auf Android — UX und Stabilität auf Consumer-App-Niveau für den französischen Markt.",
        },
        digitsole: {
          sector: "Consumer · Frankreich",
          meta: "Lead Android · Digitsole",
          intro: "Connected Coaching für Läufer und Walker — Live-Biomechanik der Einlegesohlen und Sprachguidance während der Aktivität.",
          delivered: "Android-Lead für zwei Companion-Apps; Zhor-Tech ZT Core Kit SDK (BLE-Verbindung Einlegesohlen & Sensor-Streams); AWS-Amplify-Migration; Crowdin-String-Workflow; Echtzeit-Sprachcoaching.",
          impact: "Live-Sensoren und Audio auf französischem Consumer-Hardware-Produkt.",
        },
        cotepuces: {
          sector: "Marketplace · Frankreich",
          intro: "Französischer Brocante- & Antiquitäten-Marktplatz — Käufer und Verkäufer verbinden.",
          delivered: "End-to-End-Android-App; Käufer-/Verkäufer-Flows; Retrofit-API-Integration; Play-Store-Release.",
          impact: "Aktiver Mobile-Vertriebskanal für eine französische Consumer-Community.",
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
    try {
      const geoRaw = sessionStorage.getItem("consultant-geo-v2");
      if (geoRaw) {
        const { data } = JSON.parse(geoRaw);
        if (data && data.country_code === "FR") return "fr";
      }
    } catch (_) { /* ignore */ }
    const geoParam = params.get("geo");
    if (geoParam && geoParam.toLowerCase() === "fr") return "fr";
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
    document.dispatchEvent(new CustomEvent("cv-i18n-applied"));

    if (window.consultantGeo) window.consultantGeo.refreshGeoLabels();
  }

  document.addEventListener("DOMContentLoaded", () => {
    bootstrap();
  });

  async function bootstrap() {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    let saved = null;
    try {
      saved = localStorage.getItem(PORTFOLIO_LANG_KEY);
    } catch (_) { /* ignore */ }

    const hasExplicitLang =
      (urlLang && LANGS.includes(urlLang)) || (saved && LANGS.includes(saved));

    if (!hasExplicitLang && window.consultantGeo?.applyGeoLocation) {
      try {
        await window.consultantGeo.applyGeoLocation();
      } catch (_) { /* ignore */ }
    }

    applyLang(getLang());
  }

  window.cvI18n = { applyLang, T, getLang };
})();
