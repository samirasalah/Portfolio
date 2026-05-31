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
      title: "Senior Mobile Developer · Android & Flutter",
      badgeTitle: "Freelance senior · available",
      badgeBiz: "HB IT Services · EUR invoicing",
      m1: "8+ years",
      m1s: "Senior ownership",
      m2: "Media & live",
      m2s: "Video · voice · streaming",
      m3: "100+ countries",
      m3s: "Schneider Electric",
      m4: "Public & health",
      m4s: "Government · compliance",
      refsFranceLabel: "France",
      refsFranceClients: "Schneider Electric · Runnrz · Digitsole",
      refsLiveLabel: "Media & real-time",
      refsLiveClients: "Gesundheitspersonal (DE) · Comunik Phone (TN) · Digitsole (FR)",
      profile: "Senior summary",
      profileHook: "Senior mobile developer — enterprise, public sector & media-like real-time systems (video, audio, live).",
      summary1: "<strong>8+ years</strong> — team and technical lead on production Android & Flutter apps.",
      summary2: "Led Android delivery for Schneider Electric (100+ countries), UAE government programs and regulated healthcare.",
      summary3: "Architecture decisions, feature ownership, store releases and coordination with product, QA and backend.",
      summary4: "Media-like real-time systems: Twilio video, VoIP, live audio and reliable background sessions at scale.",
      summary5: "Strong focus on consumer UX, accessibility-minded delivery and robust production under enterprise constraints.",
      profileText: "",
      offerTitle: "Role on product teams",
      offer1t: "Lead & architecture",
      offer1b: "Team lead, modular decisions, code review and Play Store / App Store release ownership.",
      offer2t: "Media-like real-time",
      offer2b: "Video, voice, live audio and interactive sessions — production UX at consumer scale.",
      offer3t: "Product delivery",
      offer3b: "Feature scoping, cross-team alignment and multi-store industrialisation under compliance.",
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
      skillAndroidUi: "Android UI",
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
      roleLabel: "Role",
      impact: "Impact",
      footerL: "HB IT Services · Registered EU business · Quotes & invoices in EUR",
      footerRLabel: "Full case studies:",
      footerRUrl: "samirasalah.github.io",
      present: "Present",
      roles: {
        proxym: {
          title: "Software Team Lead — Android",
          meta: "May 2024 — Present · Dubai · Remote",
          desc: "Technical lead on UAE government apps (Maskan, Dubai Chambers, Dubai Police) — architecture, dual-store releases and product/QA alignment for national citizen and field-officer workflows.",
        },
        wimobi: {
          title: "Senior Mobile Tech Lead",
          meta: "Jan 2017 — Present · EU · Remote",
          desc: "Freelance tech lead — architecture ownership, Android & Flutter delivery and store releases for enterprise and consumer clients across France, Germany and Tunisia.",
        },
        schneider: {
          title: "Android Team Leader",
          meta: "May 2023 — Mar 2024 · France · Remote",
          desc: 'Led the Android team on global <strong>mySchneider</strong> — B2B app used in 100+ countries: architecture decisions, CI/CD (Azure DevOps) and predictable Play Store releases from France.',
        },
      },
      projects: {
        maskan: {
          sector: "Government · UAE · FTA",
          meta: "Technical lead · Play Store",
          role: "Technical lead · Android",
          intro: "Official FTA app — mobile VAT refunds and citizen services for UAE nationals.",
          roleText: "Greenfield architecture, refund journeys, OCR capture and Play Store ownership.",
          impact: "National citizen service published on Play Store — proofs submitted from mobile in the field.",
        },
        chambers: {
          sector: "Government · UAE",
          meta: "Team lead · Play Store & App Gallery",
          role: "Android team lead",
          intro: "Official Dubai Chambers app — business services for companies and entrepreneurs in the UAE.",
          roleText: "Team lead on live codebase; OCR/OpenAI document extraction; dual-store releases and GMS→HMS migration.",
          impact: "More reliable document processing and predictable release cycles on a production government app.",
        },
        myschneider: {
          sector: "Enterprise · France",
          meta: "Android team lead · Schneider Electric",
          role: "Android team lead",
          intro: "Global Schneider B2B platform used daily by customers and partners in 100+ countries.",
          roleText: "Led the Android team — architecture modules, code review, dependency hygiene, CI/CD and Play Store releases.",
          impact: "Predictable store delivery on a high-traffic global app — rigour transferable to mass-market media products.",
        },
        gesundheit: {
          sector: "Healthcare · Germany",
          meta: "Flutter tech lead · Play Store",
          role: "Flutter tech lead",
          intro: "Live video care and translation for patients and care teams under German healthcare regulation (GDPR).",
          roleText: "Owned Flutter delivery for Doctor and Translatly — architecture, features and end-to-end store submissions.",
          impact: "Two live healthcare apps — low-latency mobile video comparable to media streaming constraints.",
        },
        runnrz: {
          sector: "Consumer · France",
          meta: "Android developer · France",
          role: "Android developer",
          intro: "Established French fitness app for walking, running and cycling — mass-market consumer audience.",
          roleText: "Full iOS→Android port, live map tracking and quality pass to team standards.",
          impact: "Production Android app on the French market with consumer-grade UX and stability after the port.",
        },
        digitsole: {
          sector: "Consumer · France",
          meta: "Android lead · Digitsole",
          role: "Android lead",
          intro: "Connected coaching for runners — live sensor feedback and spoken guidance during activity.",
          roleText: "Lead Android on two companion apps; BLE sensor streams, cloud migration and real-time voice coaching.",
          impact: "Live audio coaching on a French consumer hardware product — hands-free UX during exercise.",
        },
        comunik: {
          sector: "VoIP · B2B · Tunisia",
          role: "Flutter developer · owner",
          intro: "Enterprise softphone — business voice line with hold, transfer and conference on Comunik cloud telephony.",
          roleText: "Owned softphone architecture, WebSocket provisioning, background call handling and store releases.",
          impact: "Production B2B voice layer on Play Store & App Store — reliable calls on real mobile networks.",
        },
        dispatcher: {
          sector: "Police · UAE",
          role: "Android developer",
          intro: "Map-based patrol dispatch used by field officers — live alerts and hands-free notifications.",
          roleText: "Maps migration, backend alarm service, plate detection module and spoken dispatch readout.",
          impact: "Officers alerted in real time while keeping eyes on the road — operational support in the field.",
        },
        iserve: {
          sector: "Police · UAE",
          role: "Android developer",
          intro: "Fleet app for patrol officers — reserve and secure vehicles before shift.",
          roleText: "Legacy modernisation, reservation flows and vehicle lock/unlock from mobile.",
          impact: "Daily fleet workflow on mobile with up-to-date vehicle status before patrol.",
        },
        cotepuces: {
          sector: "Marketplace · France",
          role: "Android developer · owner",
          intro: "French brocante marketplace connecting buyers and sellers nationwide.",
          roleText: "End-to-end Android delivery — buyer/seller flows, API integration and Play Store release.",
          impact: "Live mobile sales channel for France's brocante and antiques community.",
        },
      },
    },
    fr: {
      metaTitle: "Samira Salah — CV",
      exportHint:
        '<strong>Exporter en PDF</strong> — Chrome · <kbd>⌘</kbd>+<kbd>P</kbd> → <em>Enregistrer au format PDF</em> · A4 · Prévisualiser l\'espacement : <code>?preview=print</code>',
      langLabel: "Langue du CV",
      title: "Développeuse mobile senior · Android & Flutter",
      badgeTitle: "Freelance senior · disponible",
      badgeBiz: "HB IT Services · facturation EUR",
      m1: "8+ ans",
      m1s: "Responsabilité senior",
      m2: "Médias & live",
      m2s: "Vidéo · voix · streaming",
      m3: "100+ pays",
      m3s: "Schneider Electric",
      m4: "Public & santé",
      m4s: "Gouvernement · RGPD",
      refsFranceLabel: "France",
      refsFranceClients: "Schneider Electric · Runnrz · Digitsole",
      refsLiveLabel: "Médias & temps réel",
      refsLiveClients: "Gesundheitspersonal (DE) · Comunik Phone (TN) · Digitsole (FR)",
      profile: "Synthèse senior",
      profileHook: "Développeuse mobile senior — entreprise, secteur public & expériences type média (vidéo, audio, live).",
      summary1: "<strong>8+ ans</strong> — responsable technique et d'équipe sur apps Android & Flutter en production.",
      summary2: "Direction Android chez Schneider Electric (100+ pays), programmes gouvernementaux EAU et santé réglementée.",
      summary3: "Décisions architecture, responsabilité fonctionnalités, releases store et coordination produit · QA · backend.",
      summary4: "Systèmes temps réel type média : vidéo Twilio, VoIP, audio live et sessions fiables en arrière-plan.",
      summary5: "UX grand public, fiabilité sur réseaux réels et livraison en contexte enterprise / service public.",
      profileText: "",
      offerTitle: "Rôle en équipe produit",
      offer1t: "Lead & architecture",
      offer1b: "Responsable d'équipe, décisions modulaires, revues de code et ownership releases store.",
      offer2t: "Temps réel type média",
      offer2b: "Vidéo, voix, audio live et interactions — UX production à l'échelle grand public.",
      offer3t: "Livraison produit",
      offer3b: "Cadrage fonctionnalités, alignement transverse et industrialisation multi-stores sous conformité.",
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
      skillAndroidUi: "Android UI",
      skillAi: "IA & innovation",
      skillDelivery: "Livraison & ops",
      languages: "Langues",
      education: "Formation",
      eduLine: "<strong>Licence, technologies informatiques</strong>ISET Sousse, Tunisie · 2013",
      langEn: "Anglais",
      langFr: "Français",
      langAr: "Arabe",
      langDe: "Allemand",
      lvPro: "Professionnel",
      lvFrPro: "Professionnel · travail courant",
      lvNative: "Natif",
      lvDe: "A2+",
      delivered: "Livré",
      roleLabel: "Rôle",
      impact: "Impact",
      footerL: "HB IT Services · Entreprise UE enregistrée · Devis & factures en EUR",
      footerRLabel: "Études de cas :",
      footerRUrl: "samirasalah.github.io",
      present: "Aujourd'hui",
      roles: {
        proxym: {
          title: "Responsable d'équipe Android",
          meta: "Mai 2024 — Aujourd'hui · Dubaï · Remote",
          desc: "Responsable technique sur apps gouvernementales EAU (Maskan, Dubai Chambers, Dubai Police) — architecture, releases dual-store et coordination produit/QA pour des workflows citoyens et agents terrain à l'échelle nationale.",
        },
        wimobi: {
          title: "Responsable technique mobile senior",
          meta: "Jan 2017 — Aujourd'hui · UE · Remote",
          desc: "Responsable technique freelance — cadrage architecture, ownership livraison Android & Flutter et releases store pour clients enterprise et grand public (France, Allemagne, Tunisie).",
        },
        schneider: {
          title: "Responsable d'équipe Android",
          meta: "Mai 2023 — Mar 2024 · France · Remote",
          desc: 'Direction équipe Android sur <strong>mySchneider</strong> — app B2B utilisée dans 100+ pays : décisions architecture, CI/CD (Azure DevOps) et releases Play Store prévisibles depuis la France.',
        },
      },
      projects: {
        maskan: {
          sector: "Secteur public · EAU · FTA",
          meta: "Responsable technique · Play Store",
          role: "Responsable technique · Android",
          intro: "App officielle FTA — remboursements TVA et services citoyens pour les nationaux EAU.",
          roleText: "Architecture greenfield, parcours remboursement, capture OCR et ownership Play Store.",
          impact: "Service national citoyen publié sur le Play Store — justificatifs déposés depuis le mobile sur le terrain.",
        },
        chambers: {
          sector: "Secteur public · EAU",
          meta: "Responsable d'équipe · Play Store & App Gallery",
          role: "Responsable d'équipe Android",
          intro: "App officielle Dubai Chambers — services chambre de commerce pour entreprises aux EAU.",
          roleText: "Lead sur codebase live ; OCR/extraction OpenAI ; releases dual-store et migration GMS→HMS.",
          impact: "Traitement documentaire plus fiable et cycles de release prévisibles sur un produit gouvernemental en production.",
        },
        myschneider: {
          sector: "Entreprise · France",
          meta: "Responsable d'équipe Android · Schneider Electric",
          role: "Responsable d'équipe Android",
          intro: "Plateforme B2B Schneider utilisée au quotidien par clients et partenaires dans 100+ pays.",
          roleText: "Direction équipe Android — modules d'architecture, revues, CI/CD et releases Play Store.",
          impact: "Livraisons store prévisibles sur une app mondiale à fort trafic — cadre réutilisable pour produits média grand public.",
        },
        gesundheit: {
          sector: "Santé · Allemagne",
          meta: "Responsable technique Flutter · Play Store",
          role: "Responsable technique Flutter",
          intro: "Téléconsultation vidéo et traduction live pour patients et soignants (Allemagne, RGPD).",
          roleText: "Pilotage Flutter des apps Doctor et Translatly — architecture, features et soumissions store de bout en bout.",
          impact: "Deux apps santé en production — vidéo mobile à faible latence, proche des contraintes produits média.",
        },
        runnrz: {
          sector: "Grand public · France",
          meta: "Développeuse Android · France",
          role: "Développeuse Android",
          intro: "App fitness française — marche, course et vélo pour un public consommateur à l'échelle nationale.",
          roleText: "Portage iOS→Android complet, suivi cartographique live et passe qualité aux standards équipe.",
          impact: "App Android en production sur le marché français — UX et stabilité niveau app grand public.",
        },
        digitsole: {
          sector: "Grand public · France",
          meta: "Responsable Android · Digitsole",
          role: "Responsable Android",
          intro: "Coaching connecté — retour capteurs live et guidage vocal pendant l'effort.",
          roleText: "Responsabilité Android sur deux apps ; flux BLE, migration cloud et coaching vocal temps réel.",
          impact: "Audio live mains libres sur un produit hardware fitness — expérience proche des apps média audio.",
        },
        comunik: {
          sector: "VoIP · B2B · Tunisie",
          role: "Développeuse Flutter · owner",
          intro: "Softphone entreprise — ligne voix pro avec attente, transfert et conférence.",
          roleText: "Architecture softphone, provisioning WebSocket, appels en arrière-plan et releases store.",
          impact: "Couche voix B2B en production — appels fiables sur réseaux mobiles réels.",
        },
        dispatcher: {
          sector: "Police · EAU",
          role: "Développeuse Android",
          intro: "Dispatch patrouilles cartographique — alertes live et notifications vocales pour agents terrain.",
          roleText: "Migration cartes, service alarmes backend, détection plaques et lecture audio des consignes.",
          impact: "Agents informés en temps réel les yeux sur la route — support opérationnel sur le terrain.",
        },
        iserve: {
          sector: "Police · EAU",
          role: "Développeuse Android",
          intro: "App flotte — réserver et sécuriser un véhicule de patrouille avant prise de service.",
          roleText: "Modernisation legacy, parcours réservation et verrouillage véhicule depuis le mobile.",
          impact: "Workflow flotte quotidien sur mobile avec statut véhicule à jour avant patrouille.",
        },
        cotepuces: {
          sector: "Marketplace · France",
          role: "Développeuse Android · owner",
          intro: "Marketplace brocante française — mise en relation acheteurs et vendeurs.",
          roleText: "App Android de bout en bout, parcours acheteur/vendeur et release Play Store.",
          impact: "Canal mobile de vente actif pour la communauté brocante en France.",
        },
      },
    },
    de: {
      metaTitle: "Samira Salah — Lebenslauf",
      exportHint:
        '<strong>PDF exportieren</strong> — Chrome · <kbd>⌘</kbd>+<kbd>P</kbd> → <em>Als PDF speichern</em> · A4',
      langLabel: "Sprache des Lebenslaufs",
      title: "Senior Android Developer · Video & Public Apps",
      badgeTitle: "Freelance senior · verfügbar",
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
        'Senior Android Developer — <strong>8+ Jahre</strong> Production-Delivery für <strong>Android</strong> (Consumer, Enterprise, Public Service). Schwerpunkte: <strong>Mobile-Architektur</strong>, <strong>Echtzeit</strong> (Twilio Video, VoIP, WebSocket) und <strong>Store-Releases</strong> (CI/CD → Play Store / App Store). Aktuelle Frankreich-Referenz: <strong>Android Lead, Schneider Electric</strong> (mySchneider, 100+ Länder). Verträge & EUR-Abrechnung über HB IT Services.',
      offerTitle: "Expertise",
      offer1t: "Mobile-Architektur & Delivery",
      offer1b: "Kotlin · Jetpack Compose · MVVM · Clean Architecture · Skalierung modular",
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
      skillAndroidUi: "Android UI",
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

  function setI18nContent(el, val) {
    if (el.getAttribute("data-cv-i18n-html") === "true") {
      el.innerHTML = val;
      return;
    }
    if (typeof val === "string" && val.includes("<")) {
      const tmp = document.createElement("div");
      tmp.innerHTML = val;
      el.textContent = tmp.textContent.replace(/\s+/g, " ").trim();
      return;
    }
    el.textContent = val;
  }

  function applyLang(lang) {
    if (!LANGS.includes(lang)) lang = "en";
    const t = { ...T[lang] };
    const overrides = window.__CV_COPY && window.__CV_COPY[lang];
    if (overrides) Object.assign(t, overrides);
    document.documentElement.lang = lang;
    document.title = t.metaTitle;

    document.querySelectorAll("[data-cv-i18n]").forEach((el) => {
      const key = el.getAttribute("data-cv-i18n");
      const val = resolve(t, key);
      if (val == null) return;
      setI18nContent(el, val);
    });

    try {
      localStorage.setItem(PORTFOLIO_LANG_KEY, lang);
    } catch (_) { /* ignore */ }

    document.documentElement.classList.add("cv-i18n-ready");
    document.dispatchEvent(new CustomEvent("cv-i18n-applied"));

    if (window.consultantGeo) window.consultantGeo.refreshGeoLabels();
    if (typeof window.__CV_applyCopy === "function") window.__CV_applyCopy();
  }

  document.addEventListener("DOMContentLoaded", () => {
    bootstrap();
  });

  async function bootstrap() {
    applyLang(getLang());

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
