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
        '<strong>Export PDF</strong> — Chrome · <kbd>⌘</kbd>+<kbd>P</kbd> → <em>Save as PDF</em> · A4 · Margins <strong>None</strong> · Background graphics <strong>On</strong>. · Spacing preview: <code>?preview=print</code>',
      langLabel: "CV language",
      title: "Senior Freelance Android & Mobile Engineer · Video & public apps",
      tagline:
        "High-traffic mobile apps for France & EU — consumer, public service, video & real-time",
      badgeTitle: "Available · Freelance",
      badgeScope: "France & EU · Paris area · remote or on-site",
      badgeBiz: "HB IT Services · May 2026",
      m1: "8+ years",
      m1s: "Senior mobile delivery",
      m2: "Video & live",
      m2s: "Twilio · WebSocket · FCM",
      m3: "France proven",
      m3s: "Schneider · Runnrz · Digitsole · Côté Puces",
      m4: "Public-grade",
      m4s: "Reliability · compliance · scale",
      franceStripLabel: "France references",
      franceStripClients: "Schneider Electric · Runnrz · Digitsole · Côté Puces",
      euStripLabel: "EU references · video & VoIP",
      euStripClients: "Gesundheitspersonal (DE) · Comunik Phone",
      profile: "Profile",
      profileText:
        'Senior mobile engineer · <strong>8+ years</strong> · Android & Flutter in production. Ideal for <strong>media, public service & high-traffic consumer apps</strong> — video/real-time, store releases, team leadership. Last France mission: <strong>Android team lead, Schneider Electric</strong> (mySchneider). Freelance via HB IT Services · available May 2026 · EUR billing.',
      offerTitle: "Key strengths",
      offer1t: "France track record",
      offer1b: "Schneider team lead · Runnrz · Digitsole · Côté Puces · EU-based, on-site France",
      offer2t: "Video & live mobile",
      offer2b: "Twilio video sessions · WebSocket · push · background services · VoIP (SIP)",
      offer3t: "Public service & scale",
      offer3b: "Government programs · regulated healthcare (GDPR) · mass-market consumer apps",
      offer4t: "End-to-end technical lead",
      offer4b: "Kotlin · Jetpack Compose · Flutter · CI/CD · Play Store & App Store",
      experience: "Experience",
      experienceCont: "Experience (continued)",
      keyProjects: "Key projects",
      keyProjectsFrance: "Key projects — France & video",
      keyProjectsCont: "Key projects (continued)",
      earlierExp: "Earlier experience",
      earlierExpText:
        "<strong>Knowlepsy</strong> (Tunis) — Medical BLE module for epilepsy care · <strong>WIMOBI</strong> — Resto'lib, Intigo, Coffreo, SearchDoc and other EU/MENA client apps",
      coreExpertise: "Core expertise",
      skillVideo: "Video & real-time",
      skillMobile: "Mobile & architecture",
      skillMaps: "Maps & location",
      skillFlutter: "Flutter & DI",
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
          desc: "Technical lead on UAE government mobile programs — Maskan (FTA), Dubai Chambers, Dubai Police (Dispatcher, IServe). Architecture, dual-store strategy, production releases.",
        },
        wimobi: {
          title: "Senior Mobile Tech Lead",
          meta: "Jan 2017 — Present · EU · Remote",
          desc: "Android & Flutter for EU clients — France (Runnrz, Côté Puces, Digitsole), Germany (Gesundheitspersonal), VoIP (Comunik).",
        },
        schneider: {
          title: "Android Team Leader",
          meta: "May 2023 — Mar 2024 · France · Remote",
          desc: 'Led Android team on global <strong>mySchneider</strong> — high-traffic B2B app, MAP modules, CI/CD (Azure DevOps), Play Store releases from France.',
        },
      },
      projects: {
        maskan: {
          sector: "Government · UAE · FTA",
          meta: "Technical Leader · Play Store",
          intro: "Official FTA app for UAE nationals to claim VAT refunds — mobile proof submission and citizen-facing government services.",
          delivered: "Modular architecture, refund journeys, OCR capture, Google Wallet, App-to-App/Web auth, Play Store ownership; Cursor & Gemini to accelerate delivery under senior architecture control.",
          impact: "Faster citizen proof submission on a greenfield government product.",
        },
        chambers: {
          sector: "Government · UAE",
          meta: "Team Lead · Play Store & App Gallery",
          intro: "Official Dubai Chambers app — mobile access to chamber business services for UAE companies and entrepreneurs.",
          delivered: "Team lead; feature integration; OCR & OpenAI extraction; release ownership (Play Store & App Gallery); GMS→HMS migration.",
          impact: "Reliable document handling and predictable releases on a live government app.",
        },
        myschneider: {
          sector: "Enterprise · France",
          meta: "Android Team Leader · Schneider Electric",
          intro: "Global B2B Schneider mobile platform — catalog, customer services, and partner tools in 100+ countries.",
          delivered: "Android team leadership; architect modules; code review; dependency hygiene; CI/CD (Azure DevOps); prod→Play Store releases.",
          impact: "Scalable B2B mobile delivery — same rigour expected for public-facing apps at scale.",
        },
        comunik: {
          sector: "VoIP · B2B",
          intro: "Enterprise B2B softphone for Android & iOS — mobile business voice line.",
          delivered: "Softphone architecture, credential provisioning, incoming-call handling, design-system refactor, Play Store & App Store release.",
          impact: "Production mobile voice layer for Comunik’s cloud telephony platform.",
        },
        gesundheit: {
          sector: "Healthcare · Germany",
          meta: "Lead Flutter · Play Store",
          intro: "Healthcare platform — Doctor (Twilio video care) and Translatly (live translation) for patients and care teams in Germany.",
          delivered: "Flutter tech lead for both apps; architecture, features, end-to-end Play Store and App Store submissions.",
          impact: "Two production apps — proven mobile video delivery under regulatory constraints.",
        },
        dispatcher: {
          sector: "Police · UAE",
          intro: "Map-based patrol dispatch with live backend alerts and in-vehicle integrations.",
          delivered: "ViewBinding migration; backend alarm listener; Esri→HERE Maps; plate detection; MDVR; TTS alerts.",
          impact: "Real-time field operations support for Dubai Police patrol officers.",
        },
        iserve: {
          sector: "Police · UAE",
          intro: "Fleet app for patrol vehicle reservation, status checks, and lock/unlock.",
          delivered: "Data Binding migration; reservation flows; vehicle lock/unlock features.",
          impact: "Officers book and access patrol vehicles from mobile before shift.",
        },
        runnrz: {
          sector: "Consumer · France",
          meta: "Android · France · Mapbox",
          intro: "Established French fitness app for walk, run, and cycling — multi-activity tracking for a mass-market audience.",
          delivered: "Full iOS→Android port; Mapbox navigation; walk, run, and cycling modes; BLE integration; quality pass to team standards.",
          impact: "Android parity on a French consumer product — UX and stability at public-app standards.",
        },
        digitsole: {
          sector: "Consumer · France",
          meta: "Lead Android · Digitsole",
          intro: "Connected coaching for runners and walkers — live insole biomechanics and spoken guidance during activity.",
          delivered: "Lead Android on two apps; AWS Amplify migration; Crowdin string workflow; reliable BLE streams; real-time voice coaching.",
          impact: "Live audio & sensor streaming on a French consumer fitness product.",
        },
        cotepuces: {
          sector: "Marketplace · France",
          intro: "French brocante & antiques marketplace for buyers and sellers.",
          delivered: "End-to-end Android — buyer/seller flows, Retrofit API integration, Play Store release.",
          impact: "Live mobile channel for a French consumer community.",
        },
      },
    },
    fr: {
      metaTitle: "Samira Salah — CV",
      exportHint:
        '<strong>Exporter en PDF</strong> — Chrome · <kbd>⌘</kbd>+<kbd>P</kbd> → <em>Enregistrer au format PDF</em> · A4 · Marges <strong>Aucune</strong> · Graphiques d\'arrière-plan <strong>Activés</strong>. · Prévisualiser l\'espacement : <code>?preview=print</code>',
      langLabel: "Langue du CV",
      title: "Ingénieure mobile senior freelance · Android & Flutter · Vidéo & grand public",
      tagline:
        "Apps mobiles à fort trafic pour la France & l'UE — grand public, service public, vidéo & temps réel",
      badgeTitle: "Disponible · Freelance",
      badgeScope: "France & UE · région parisienne · remote ou sur site",
      badgeBiz: "HB IT Services · Mai 2026",
      m1: "8+ ans",
      m1s: "Mobile senior",
      m2: "Vidéo & live",
      m2s: "Twilio · WebSocket · FCM",
      m3: "France prouvée",
      m3s: "Schneider · Runnrz · Digitsole · Côté Puces",
      m4: "Service public",
      m4s: "Fiabilité · conformité · volume",
      franceStripLabel: "Références France",
      franceStripClients: "Schneider Electric · Runnrz · Digitsole · Côté Puces",
      euStripLabel: "Références UE · vidéo & VoIP",
      euStripClients: "Gesundheitspersonal (DE) · Comunik Phone",
      profile: "Profil",
      profileText:
        'Ingénieure mobile senior · <strong>8+ ans</strong> · Android & Flutter en production. Profil <strong>média, service public & apps grand public à fort trafic</strong> — vidéo/temps réel, releases store, leadership d\'équipe. Dernière mission France : <strong>team lead Android, Schneider Electric</strong> (mySchneider). Freelance HB IT Services · disponible Mai 2026 · facturation EUR.',
      offerTitle: "Atouts clés",
      offer1t: "Expérience France",
      offer1b: "Team lead Schneider · Runnrz · Digitsole · Côté Puces · basée UE, sur site France",
      offer2t: "Vidéo & temps réel",
      offer2b: "Twilio vidéo live · WebSocket · push · services arrière-plan · VoIP (SIP)",
      offer3t: "Grand public & service public",
      offer3b: "Programmes institutionnels · santé réglementée (RGPD) · apps consommateurs de masse",
      offer4t: "Lead technique bout en bout",
      offer4b: "Kotlin · Jetpack Compose · Flutter · CI/CD · Play Store & App Store",
      experience: "Expérience",
      experienceCont: "Expérience (suite)",
      keyProjects: "Projets clés",
      keyProjectsFrance: "Projets clés — France & vidéo",
      keyProjectsCont: "Projets clés (suite)",
      earlierExp: "Expérience antérieure",
      earlierExpText:
        "<strong>Knowlepsy</strong> (Tunis) — Module BLE médical pour épilepsie · <strong>WIMOBI</strong> — Resto'lib, Intigo, Coffreo, SearchDoc et autres apps clients UE/MENA",
      coreExpertise: "Expertise clé",
      skillVideo: "Vidéo & temps réel",
      skillMobile: "Mobile & architecture",
      skillMaps: "Cartographie & localisation",
      skillFlutter: "Flutter & DI",
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
          desc: "Lead technique programmes mobiles gouvernementaux EAU — Maskan (FTA), Dubai Chambers, Dubai Police (Dispatcher, IServe). Architecture, dual-store, releases production.",
        },
        wimobi: {
          title: "Senior Mobile Tech Lead",
          meta: "Jan 2017 — Aujourd'hui · UE · Remote",
          desc: "Android & Flutter pour clients UE — France (Runnrz, Côté Puces, Digitsole), Allemagne (Gesundheitspersonal), VoIP (Comunik).",
        },
        schneider: {
          title: "Android Team Leader",
          meta: "Mai 2023 — Mar 2024 · France · Remote",
          desc: 'Direction équipe Android sur <strong>mySchneider</strong> mondial — app B2B à fort trafic, modules MAP, CI/CD (Azure DevOps), releases Play Store depuis la France.',
        },
      },
      projects: {
        maskan: {
          sector: "Secteur public · EAU · FTA",
          meta: "Lead technique · Play Store",
          intro: "Application officielle FTA — remboursements TVA mobiles pour les nationaux EAU, dépôt de justificatifs et services citoyens.",
          delivered: "Architecture modulaire, parcours remboursement, capture OCR, Google Wallet, auth App-to-App/Web, ownership Play Store ; Cursor & Gemini pour accélérer sous contrôle architecture senior.",
          impact: "Soumission plus rapide des justificatifs citoyens sur un produit gouvernemental greenfield.",
        },
        chambers: {
          sector: "Secteur public · EAU",
          meta: "Team Lead · Play Store & App Gallery",
          intro: "Application officielle Dubai Chambers — accès mobile aux services chambre de commerce pour entreprises et entrepreneurs aux EAU.",
          delivered: "Team lead ; intégration features ; OCR & extraction OpenAI ; pilotage releases (Play Store & App Gallery) ; migration GMS→HMS.",
          impact: "Traitement documentaire fiable et releases prévisibles sur une app gouvernementale en production.",
        },
        myschneider: {
          sector: "Entreprise · France",
          meta: "Android Team Leader · Schneider Electric",
          intro: "Plateforme mobile B2B Schneider mondiale — catalogue, services clients et outils partenaires dans plus de 100 pays.",
          delivered: "Direction équipe Android ; modules architect ; revues de code ; hygiène dépendances ; CI/CD (Azure DevOps) ; releases prod→Play Store.",
          impact: "Delivery mobile scalable — même exigence que les apps grand public à fort trafic.",
        },
        comunik: {
          sector: "VoIP · B2B",
          intro: "Softphone B2B entreprise pour Android et iOS — ligne voix mobile professionnelle.",
          delivered: "Architecture softphone, provisioning credentials, gestion appels entrants, refactor design system, release Play Store & App Store.",
          impact: "Couche voix mobile en production pour la plateforme téléphonie cloud Comunik.",
        },
        gesundheit: {
          sector: "Santé · Allemagne",
          meta: "Lead Flutter · Play Store",
          intro: "Plateforme santé — Doctor (téléconsultation Twilio) et Translatly (traduction live) pour patients et équipes soignantes en Allemagne.",
          delivered: "Tech lead Flutter des deux apps ; architecture, fonctionnalités, soumissions Play Store et App Store de bout en bout.",
          impact: "Deux apps en production — vidéo mobile livrée sous contraintes réglementaires.",
        },
        dispatcher: {
          sector: "Police · EAU",
          intro: "Dispatch patrouille cartographique avec alertes backend live et intégrations embarquées.",
          delivered: "Migration ViewBinding ; service écoute alarmes backend ; Esri→HERE Maps ; détection plaques ; MDVR ; alertes TTS.",
          impact: "Support opérations terrain en temps réel pour les patrouilles Dubai Police.",
        },
        iserve: {
          sector: "Police · EAU",
          intro: "App flotte — réservation véhicules de patrouille, statut et verrouillage / déverrouillage.",
          delivered: "Migration Data Binding ; parcours réservation ; verrouillage / déverrouillage véhicule.",
          impact: "Les agents réservent et accèdent aux véhicules de patrouille depuis le mobile avant prise de service.",
        },
        runnrz: {
          sector: "Grand public · France",
          meta: "Android · France · Mapbox",
          intro: "App fitness française établie — marche, course et vélo, suivi multi-activité pour le grand public.",
          delivered: "Portage iOS→Android complet ; navigation Mapbox ; modes marche, course et vélo ; intégration BLE ; passe qualité aux standards équipe.",
          impact: "Parité Android sur un produit consommateur français — UX et stabilité niveau app grand public.",
        },
        digitsole: {
          sector: "Grand public · France",
          meta: "Lead Android · Digitsole",
          intro: "Coaching connecté pour coureurs et marcheurs — biomécanique live des semelles et guidage vocal pendant l'effort.",
          delivered: "Lead Android sur deux apps ; migration AWS Amplify ; workflow strings Crowdin ; flux BLE fiables ; coaching vocal temps réel.",
          impact: "Audio live & capteurs sur un produit fitness consommateur français.",
        },
        cotepuces: {
          sector: "Marketplace · France",
          intro: "Marketplace française brocante et antiquités pour acheteurs et vendeurs.",
          delivered: "Android de bout en bout — parcours acheteur/vendeur, intégration API Retrofit, release Play Store.",
          impact: "Canal mobile live pour une communauté consommateurs en France.",
        },
      },
    },
    de: {
      metaTitle: "Samira Salah — Lebenslauf",
      exportHint:
        '<strong>PDF exportieren</strong> — Chrome · <kbd>⌘</kbd>+<kbd>P</kbd> → <em>Als PDF speichern</em> · A4 · Ränder <strong>Keine</strong> (nicht Standard) · Hintergrundgrafiken <strong>Ein</strong>.',
      langLabel: "Sprache des Lebenslaufs",
      title: "Senior Freelance Android & Mobile Engineer · Video & Public Apps",
      tagline:
        "Mobile Apps mit hohem Traffic für Frankreich & EU — Consumer, öffentlicher Dienst, Video & Echtzeit",
      badgeTitle: "Verfügbar · Freelance",
      badgeScope: "Frankreich & EU · Paris-Region · remote oder vor Ort",
      badgeBiz: "HB IT Services · Mai 2026",
      m1: "8+ Jahre",
      m1s: "Senior Mobile Delivery",
      m2: "Video & Live",
      m2s: "Twilio · WebSocket · FCM",
      m3: "Frankreich belegt",
      m3s: "Schneider · Runnrz · Digitsole · Côté Puces",
      m4: "Public-Grade",
      m4s: "Zuverlässigkeit · Compliance · Skalierung",
      franceStripLabel: "Frankreich-Referenzen",
      franceStripClients: "Schneider Electric · Runnrz · Digitsole · Côté Puces",
      euStripLabel: "EU-Referenzen · Video & VoIP",
      euStripClients: "Gesundheitspersonal (DE) · Comunik Phone",
      profile: "Profil",
      profileText:
        'Senior Mobile Engineer · <strong>8+ Jahre</strong> · Android & Flutter in Production. Passend für <strong>Medien, Public Service & Consumer-Apps mit hohem Traffic</strong> — Video/Echtzeit, Store-Releases, Teamführung. Letzte Frankreich-Mission: <strong>Android Team Lead, Schneider Electric</strong> (mySchneider). Freelance HB IT Services · verfügbar Mai 2026 · EUR-Abrechnung.',
      offerTitle: "Kernstärken",
      offer1t: "Frankreich-Nachweis",
      offer1b: "Schneider Team Lead · Runnrz · Digitsole · Côté Puces · EU-basiert, Vor-Ort Frankreich",
      offer2t: "Video & Live mobil",
      offer2b: "Twilio-Video · WebSocket · Push · Background-Services · VoIP (SIP)",
      offer3t: "Public Service & Scale",
      offer3b: "Regierungsprogramme · reguliertes Healthcare (DSGVO) · Massenmarkt-Consumer-Apps",
      offer4t: "End-to-End Technical Lead",
      offer4b: "Kotlin · Jetpack Compose · Flutter · CI/CD · Play Store & App Store",
      experience: "Berufserfahrung",
      experienceCont: "Berufserfahrung (Fortsetzung)",
      keyProjects: "Schlüsselprojekte",
      keyProjectsFrance: "Schlüsselprojekte — Frankreich & Video",
      keyProjectsCont: "Schlüsselprojekte (Fortsetzung)",
      earlierExp: "Frühere Erfahrung",
      earlierExpText:
        "<strong>Knowlepsy</strong> (Tunis) — Medizinisches BLE-Modul für Epilepsie · <strong>WIMOBI</strong> — Resto'lib, Intigo, Coffreo, SearchDoc und weitere EU/MENA-Apps",
      coreExpertise: "Kernkompetenzen",
      skillVideo: "Video & Echtzeit",
      skillMobile: "Mobile & Architektur",
      skillMaps: "Karten & Location",
      skillFlutter: "Flutter & DI",
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
          desc: "Technische Leitung mobile Regierungsprogramme VAE — Maskan (FTA), Dubai Chambers, Dubai Police (Dispatcher, IServe). Architektur, Dual-Store, Production-Releases.",
        },
        wimobi: {
          title: "Senior Mobile Tech Lead",
          meta: "Jan 2017 — Heute · EU · Remote",
          desc: "Android & Flutter für EU-Kunden — Frankreich (Runnrz, Côté Puces, Digitsole), Deutschland (Gesundheitspersonal), VoIP (Comunik).",
        },
        schneider: {
          title: "Android Team Leader",
          meta: "Mai 2023 — Mär 2024 · Frankreich · Remote",
          desc: 'Android-Teamleitung für globales <strong>mySchneider</strong> — High-Traffic-B2B-App, MAP-Module, CI/CD (Azure DevOps), Play-Store-Releases aus Frankreich.',
        },
      },
      projects: {
        maskan: {
          sector: "Behörden · VAE · FTA",
          meta: "Technical Leader · Play Store",
          intro: "Offizielle FTA-App — mobile MwSt.-Erstattung für VAE-Staatsangehörige, Belegübermittlung und Bürger-Services.",
          delivered: "Modulare Architektur, Erstattungsflows, OCR-Capture, Google Wallet, App-to-App/Web-Auth, Play-Store-Ownership; Cursor & Gemini zur Beschleunigung unter Senior-Architekturkontrolle.",
          impact: "Schnellere Einreichung von Nachweisen für Bürger auf einem Greenfield-Behördenprodukt.",
        },
        chambers: {
          sector: "Behörden · VAE",
          meta: "Team Lead · Play Store & App Gallery",
          intro: "Offizielle Dubai-Chambers-App — mobiler Zugang zu Handelskammer-Services für Unternehmen und Gründer in den VAE.",
          delivered: "Team Lead; Feature-Integration; OCR & OpenAI-Extraktion; Release-Ownership (Play Store & App Gallery); GMS→HMS-Migration.",
          impact: "Zuverlässige Dokumentenverarbeitung und planbare Releases auf einer Live-Behörden-App.",
        },
        myschneider: {
          sector: "Enterprise · Frankreich",
          meta: "Android Team Leader · Schneider Electric",
          intro: "Globale B2B-Schneider-Mobile-Plattform — Katalog, Kundenservices und Partner-Tools in über 100 Ländern.",
          delivered: "Android-Teamleitung; Architekturmodule; Code-Reviews; Dependency-Hygiene; CI/CD (Azure DevOps); Prod→Play-Store-Releases.",
          impact: "Skalierbare Mobile-Lieferung — gleiche Ansprüche wie Public-Apps mit hohem Traffic.",
        },
        comunik: {
          sector: "VoIP · B2B",
          intro: "Enterprise-B2B-Softphone für Android & iOS — mobile Geschäftssprachleitung.",
          delivered: "Softphone-Architektur, Credential-Provisioning, eingehende Anrufe, Design-System-Refactor, Play-Store- & App-Store-Release.",
          impact: "Produktive Mobile-Voice-Schicht für Comuniks Cloud-Telefonieplattform.",
        },
        gesundheit: {
          sector: "Healthcare · Deutschland",
          meta: "Lead Flutter · Play Store",
          intro: "Healthcare-Plattform — Doctor (Twilio-Videoversorgung) und Translatly (Live-Übersetzung) für Patienten und Pflegeteams in Deutschland.",
          delivered: "Flutter Tech Lead für beide Apps; Architektur, Features, End-to-End-Einreichungen Play Store und App Store.",
          impact: "Zwei Production-Apps — Mobile-Video unter regulatorischen Anforderungen.",
        },
        dispatcher: {
          sector: "Polizei · VAE",
          intro: "Kartenbasiertes Streifen-Dispatch mit Live-Backend-Alerts und Fahrzeug-Integrationen.",
          delivered: "ViewBinding-Migration; Backend-Alarm-Listener; Esri→HERE Maps; Kennzeichen-Erkennung; MDVR; TTS-Alerts.",
          impact: "Echtzeit-Unterstützung für Dubai-Police-Streifen im Feld.",
        },
        iserve: {
          sector: "Polizei · VAE",
          intro: "Fuhrpark-App — Reservierung, Status und Ver-/Entriegelung von Streifenfahrzeugen.",
          delivered: "Data-Binding-Migration; Reservierungsflows; Fahrzeug-Ver-/Entriegelung.",
          impact: "Einsatzkräfte buchen und nutzen Streifenfahrzeuge mobil vor Schichtbeginn.",
        },
        runnrz: {
          sector: "Consumer · Frankreich",
          meta: "Android · Frankreich · Mapbox",
          intro: "Etablierte französische Fitness-App — Walk, Run und Cycling, Multi-Aktivitäts-Tracking für den Massenmarkt.",
          delivered: "Vollständiger iOS→Android-Port; Mapbox-Navigation; Walk-, Run- und Cycling-Modi; BLE-Integration; Qualitätspass nach Team-Standards.",
          impact: "Android-Parität — UX und Stabilität auf Public-App-Niveau.",
        },
        digitsole: {
          sector: "Consumer · Frankreich",
          meta: "Lead Android · Digitsole",
          intro: "Connected Coaching für Läufer und Walker — Live-Biomechanik der Einlegesohlen und Sprachguidance während der Aktivität.",
          delivered: "Android-Lead für zwei Apps; AWS-Amplify-Migration; Crowdin-String-Workflow; zuverlässige BLE-Streams; Echtzeit-Sprachcoaching.",
          impact: "Live-Audio & Sensor-Streaming auf französischem Consumer-Fitness-Produkt.",
        },
        cotepuces: {
          sector: "Marketplace · Frankreich",
          intro: "Französischer Brocante- & Antiquitäten-Marktplatz für Käufer und Verkäufer.",
          delivered: "End-to-End-Android — Käufer-/Verkäufer-Flows, Retrofit-API-Integration, Play-Store-Release.",
          impact: "Live-Mobile-Kanal für französische Consumer-Community.",
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
    applyLang(getLang());
  });

  window.cvI18n = { applyLang, T, getLang };
})();
