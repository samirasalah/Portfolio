/**
 * FR/DE project copy — loaded before i18n.js
 * value = what the product is (general idea). c = challenge. d = tasks delivered. i = impact.
 * Stack lives in work-skills only (not in value/d).
 */
window.portfolioProjects = {
  myschneider: {
    fr: {
      domain: "Enterprise · B2B",
      role: "Responsable équipe Android · Schneider Electric · France",
      value:
        'Plateforme mobile B2B mondiale <strong>mySchneider</strong> — catalogue Schneider, services clients et outils partenaires dans plus de 100 pays.',
      c: "Faire évoluer une app globale avec des mises à jour MAP, des intégrations clients et de nombreuses parties prenantes — sans ralentir les mises en production.",
      d: "Direction de l'équipe Android ; pilotage des modules d'architecture, revues de code, hygiène des dépendances et releases production → Play Store.",
      i: "Livraisons Play Store prévisibles pour une application Schneider utilisée dans <strong>100+ pays</strong>.",
    },
    de: {
      domain: "Enterprise · B2B",
      role: "Android Team Leader · Schneider Electric · France",
      value:
        'Globale B2B-Mobile-Plattform <strong>mySchneider</strong> — Schneider-Katalog, Kundenservices und Partner-Tools in über 100 Ländern.',
      c: "Globale App mit MAP-Updates und Kundenintegrationen weiterentwickeln — ohne Production-Releases zu verlangsamen.",
      d: "Android-Team geleitet; Architekturmodule, Code-Reviews, Dependency-Hygiene und Prod→Play-Store-Releases verantwortet.",
      i: "Planbare Play-Store-Releases für eine global genutzte Schneider-App in <strong>100+ Ländern</strong>.",
    },
  },
  maskan: {
    fr: {
      domain: "Gouvernement · EAU · FTA",
      role: "Responsable technique · Android",
      value:
        'Application officielle FTA <strong>Maskan</strong> — remboursements TVA mobiles pour les nationaux EAU, dépôt de justificatifs et services citoyens.',
      c: "Produit public greenfield : règles FTA, données citoyens sécurisées, authentification UAE — et capture des justificatifs sans ressaisie manuelle.",
      d: "Architecture modulaire <strong>Jetpack Compose</strong>, parcours remboursement, authentification App-to-App et App-to-Web, Google Wallet, capture <strong>OCR</strong> ; responsabilité Play Store. <strong>Cursor</strong> et <strong>Gemini</strong> pour accélérer implémentation, refactors et intégrations — sous contrôle architecture senior.",
      i: "Justificatifs déposés plus vite ; service national publié sur Play Store et App Gallery.",
    },
    de: {
      domain: "Behörden · VAE · FTA",
      role: "Technical Leader · Android",
      value:
        'Offizielle FTA-App <strong>Maskan</strong> — mobile MwSt.-Erstattung für VAE-Staatsangehörige, Belegübermittlung und Bürger-Services.',
      c: "Greenfield-Behördenprodukt: FTA-Regeln, sichere Bürgerdaten, UAE-Auth — und Belegerfassung ohne manuelle Eingabe.",
      d: "Modulare <strong>Jetpack Compose</strong>-Basisarchitektur, Erstattungsflows, App-to-App- und App-to-Web-Auth, Google Wallet, <strong>OCR</strong>-Erfassung; Play-Store-Ownership. <strong>Cursor</strong> und <strong>Gemini</strong> für schnellere Umsetzung, Refactors und Integration — unter Senior-Architekturkontrolle.",
      i: "Schnellere Belegübermittlung; nationaler Bürger-Service auf Play Store und App Gallery.",
    },
  },
  chamber: {
    fr: {
      domain: "Gouvernement · EAU",
      role: "Responsable d'équipe Android · Proxym Middle East",
      value:
        'Application officielle <strong>Dubai Chambers</strong> — accès mobile aux services chambre de commerce pour entreprises et entrepreneurs aux EAU.',
      c: "Faire évoluer une app gouvernementale en production avec traitement documentaire IA et un second canal store — sans dupliquer le produit ni casser les releases.",
      d: "<strong>Responsable d'équipe</strong> Android sur codebase <strong>Jetpack Compose</strong> en production ; intégration continue de fonctionnalités ; logique <strong>OCR et extraction OpenAI</strong> sur documents commerciaux ; <strong>pilotage du processus de release</strong> Play Store et App Gallery ; migration GMS→HMS sur codebase partagée. <strong>Cursor</strong> et <strong>Gemini</strong> pour accélérer la livraison — revus et durcis pour la production.",
      i: "Traitement documentaire plus fiable et cycles de release prévisibles sur une codebase gouvernementale en production — Google Play et App Gallery.",
    },
    de: {
      domain: "Behörden · VAE",
      role: "Software Team Lead Android · Proxym Middle East",
      value:
        'Offizielle <strong>Dubai Chambers</strong>-App — mobiler Zugang zu Handelskammer-Services für Unternehmen und Gründer in den VAE.',
      c: "Live-Behörden-App um KI-Dokumentenverarbeitung und einen zweiten Store-Kanal erweitern — ohne Produktduplikation oder gebrochene Production-Releases.",
      d: "<strong>Team Lead</strong> Android auf Live-<strong>Jetpack Compose</strong>-Codebase; fortlaufende Feature-Integration; <strong>OCR- und OpenAI-Extraktionslogik</strong> für Handelsdokumente; <strong>Release-Prozess-Ownership</strong> Play Store und App Gallery; GMS→HMS-Migration auf gemeinsamer Codebasis. <strong>Cursor</strong> und <strong>Gemini</strong> zur Delivery-Beschleunigung — geprüft und produktionsreif.",
      i: "Genauere Dokumentenverarbeitung und planbare Release-Zyklen auf einer Live-Behörden-Codebase — Play Store und App Gallery.",
    },
  },
  culture: {
    fr: {
      domain: "Gouvernement · EAU",
      value:
        'Application mobile <strong>Dubai Culture</strong> — programmes culturels, institutions et services pour les résidents et partenaires.',
      c: "Livrer sur une codebase en production avec exigences qualité strictes et releases backend coordonnées.",
      d: "UI <strong>Jetpack Compose</strong> et intégrations API, en coordination produit, backend et QA.",
      i: "Davantage de services culturels accessibles sur mobile pour les résidents et partenaires de Dubaï.",
    },
    de: {
      domain: "Behörden · VAE",
      value:
        'Mobile <strong>Dubai-Culture</strong>-App — Kulturprogramme, Institutionen und Services für Bewohner und Partner.',
      c: "Delivery auf Live-Codebase mit hohen Qualitätsanforderungen und koordinierten Backend-Releases.",
      d: "<strong>Jetpack Compose</strong>-UI und API-Integration, abgestimmt mit Produkt, Backend und QA.",
      i: "Mehr Kulturservices mobil erreichbar für Bewohner und Partner in Dubai.",
    },
  },
  dispatcher: {
    fr: {
      domain: "Gouvernement · EAU · Police",
      value:
        'Application patrouille officielle <strong>Dubai Police Dispatcher</strong> — dispatch cartographique pour agents de terrain, connectivité backend live et intégrations embarquées pour opérations temps réel.',
      c: "Maintenir les agents informés en temps réel — intégrations véhicule, navigation cartographique et alertes mains libres sur une codebase police en production, sans perturber le terrain.",
      d: "Migration Kotlin Android Extensions vers <strong>ViewBinding</strong> ; <strong>service d'écoute backend</strong> pour alarmes persistantes ; migration <strong>Esri → HERE Maps</strong> ; intégration du module <strong>détection de plaques</strong> ; communication MDVR réseau local ; alertes vocales et lecture audio des consignes dispatch.",
      i: "L'agent est informé instantanément des plaques signalées et des consignes — les yeux sur la route, pas sur l'écran.",
    },
    de: {
      domain: "Behörden · VAE · Polizei",
      value:
        'Offizielle Streifen-App <strong>Dubai Police Dispatcher</strong> — kartenbasiertes Dispatch für Einsatzkräfte, Live-Backend-Anbindung und Fahrzeug-Integrationen für Echtzeit-Einsätze.',
      c: "Einsatzkräfte in Echtzeit informiert halten — Fahrzeug-Integrationen, Karten-Navigation und freihändige Alerts auf einer produktiven Polizei-Codebase, ohne den Feldeinsatz zu stören.",
      d: "Migration von Kotlin Android Extensions zu <strong>ViewBinding</strong>; <strong>Backend-Alarm-Listener-Service</strong> für persistente Backend-Benachrichtigungen; Migration <strong>Esri → HERE Maps</strong>; Integration des <strong>Kennzeichen-Erkennungs</strong>-Moduls; MDVR-Kommunikation im lokalen Netz; Sprachwarnungen und Audio für Dispatch-Nachrichten.",
      i: "Sofortige Warnung bei markierten Kennzeichen und Einsatzmeldungen — Augen auf der Straße, nicht auf dem Display.",
    },
  },
  iserve: {
    fr: {
      domain: "Gouvernement · EAU · Police",
      value:
        'Application flotte <strong>IServe</strong> pour les agents — consulter les véhicules disponibles, vérifier diesel, propreté et batterie, réserver et verrouiller / déverrouiller.',
      c: "Moderniser une app flotte utilisée chaque jour — retirer les API dépréciées et fiabiliser réservation et accès véhicule.",
      d: "Migration des Kotlin Android Extensions vers Data Binding ; correctifs et nouvelles fonctionnalités de réservation et d'accès véhicule.",
      i: "Les agents réservent et accèdent à un véhicule depuis le mobile, avec un statut à jour avant la prise de service.",
    },
    de: {
      domain: "Behörden · VAE · Polizei",
      value:
        'Fuhrpark-App <strong>IServe</strong> für Einsatzkräfte — verfügbare Fahrzeuge, Diesel, Sauberkeit und Batterie prüfen, reservieren und ver- / entriegeln.',
      c: "Täglich genutzte Fuhrpark-App modernisieren — veraltete APIs entfernen und Reservierung sowie Fahrzeugzugang stabil halten.",
      d: "Migration von Kotlin Android Extensions zu Data Binding; Bugfixes und neue Reservierungs- sowie Zugangsfeatures.",
      i: "Einsatzkräfte buchen und nutzen Fahrzeuge mobil — mit aktuellem Status vor Schichtbeginn.",
    },
  },
  digitsole: {
    fr: {
      domain: "IoT · Fitness",
      role: "Consultante Android · Digitsole · via Proxym Group",
      value:
        'Coaching connecté pour coureurs et marcheurs — biomécanique en direct et guidage vocal pendant l\'effort.',
      c: "Maintenir des flux capteurs Bluetooth fiables pendant une migration cloud, tout en ajoutant un coaching vocal en temps réel.",
      d: "Responsabilité Android sur deux apps compagnons ; SDK <strong>Zhor-Tech ZT Core Kit</strong> (connexion BLE semelles & flux capteurs) ; migration cloud AWS Amplify ; workflow strings <strong>Crowdin</strong> ; coaching vocal temps réel.",
      i: "Retour forme pendant la course ou la marche — sans s'arrêter pour lire l'écran ; base utilisateurs préservée pendant la migration.",
    },
    de: {
      domain: "IoT · Fitness",
      role: "Android-Beraterin · Digitsole · via Proxym Group",
      value:
        'Connected Coaching für Läufer und Walker — Live-Biomechanik und Sprachguidance während der Aktivität.',
      c: "Zuverlässige Sensor-Bluetooth-Streams während Cloud-Migration — plus Echtzeit-Sprachcoaching.",
      d: "Android-Lead für zwei Companion-Apps; <strong>Zhor-Tech ZT Core Kit</strong> SDK (BLE-Verbindung Einlegesohlen & Sensor-Streams); AWS-Amplify-Cloud-Migration; <strong>Crowdin</strong>-String-Workflow; Echtzeit-Sprachcoaching.",
      i: "Form-Feedback beim Laufen und Gehen — ohne Blick auf den Bildschirm; Nutzerbasis durch Migration gehalten.",
    },
  },
  runnrz: {
    fr: {
      domain: "Mobilité · Fitness · France",
      role: "Développeuse Android · Runnrz · France",
      value:
        'App fitness française établie — marche, course et vélo, suivi multi-activité pour le grand public.',
      c: "Atteindre la parité Android, ajouter de nouveaux modes d'activité et améliorer stabilité et UX.",
      d: "Migration complète iOS→Android ; activités marche, course et vélo avec suivi cartographique live ; passe qualité selon les standards équipe.",
      i: "App Android en production sur le marché français — suivi multi-activité et codebase maintenable après le port.",
    },
    de: {
      domain: "Mobilität · Fitness · Frankreich",
      role: "Android-Entwicklerin · Runnrz · Frankreich",
      value:
        'Etablierte französische Fitness-App — Walk, Run und Cycling, Multi-Aktivitäts-Tracking für den Massenmarkt.',
      c: "Android-Parität, neue Aktivitätsmodi und bessere Stabilität sowie UX.",
      d: "Vollständige iOS→Android-Migration; Walk, Run und Cycling mit Live-Map-Tracking; Qualitätspass nach Team-Standards.",
      i: "Produktions-Android-App für den französischen Markt — Multi-Aktivitäts-Tracking und wartbare Codebase nach dem Port.",
    },
  },
  knowlepsy: {
    fr: {
      domain: "HealthTech",
      role: "Développeuse Flutter senior · Knowlepsy",
      value:
        'Module de soins épilepsie — capture des données dispositifs médicaux en arrière-plan et synchronisation serveur.',
      c: "Capturer les données dispositifs en arrière-plan et les synchroniser de façon fiable, malgré des conditions réseau variables.",
      d: "Module Flutter avec capture BLE background, sync serveur et gestion connectivité renforcée.",
      i: "Données plus fiables et meilleur suivi pour les personnes gérant l'épilepsie.",
    },
    de: {
      domain: "HealthTech",
      role: "Senior Flutter-Entwicklerin · Knowlepsy",
      value:
        'Epilepsie-Versorgungsmodul — Medizingerätedaten im Hintergrund erfassen und mit dem Server synchronisieren.',
      c: "Gerätedaten im Hintergrund zuverlässig erfassen und syncen — trotz wechselnder Netzwerkbedingungen.",
      d: "Flutter-Modul mit Background-BLE, Server-Sync und verbessertem Connectivity-Handling.",
      i: "Verlässlichere Daten und besseres Monitoring für Nutzer mit Epilepsie.",
    },
  },
  comunik: {
    fr: {
      domain: "Temps réel · VoIP · B2B",
      role: "Développeuse Flutter · Comunik VoIP (ComunikCRM) · Freelance",
      value:
        '<strong>Comunik Phone</strong> — softphone entreprise pour Android et iOS. Ligne pro mobile : appels avec mise en attente, transfert et conférence.',
      c: "Voix fiable sur réseaux réels — appels entrants en arrière-plan et expérience cohérente au premier plan comme en fond.",
      d: "Architecture softphone, provisioning des credentials, gestion des appels entrants et refactor design system pour la mise en production.",
      i: 'Softphone B2B en production sur le <span class="store-name">Play Store</span> et l\'<span class="store-name">App Store</span> — couche mobile voix pour la téléphonie cloud Comunik.',
    },
    de: {
      domain: "Echtzeit · VoIP · B2B",
      role: "Flutter-Entwicklerin · Comunik VoIP (ComunikCRM) · Freelance",
      value:
        '<strong>Comunik Phone</strong> — Enterprise-Softphone für Android & iOS. Mobile Geschäftsleitung: Halten, Transfer und Konferenz.',
      c: "Zuverlässige Sprache in echten Netzen — eingehende Anrufe im Hintergrund und konsistente UX.",
      d: "Softphone-Architektur, Credential-Provisioning, eingehende Anrufe und Design-System-Refactor für Production-Release.",
      i: 'B2B-Softphone in Produktion im <span class="store-name">Play Store</span> & <span class="store-name">App Store</span> — mobile Voice-Schicht für Comuniks Cloud-Telefonie.',
    },
  },
  gesundheit: {
    fr: {
      domain: "Santé · DE",
      role: "Responsable technique · Flutter · CodeCooperation GmbH · Allemagne",
      value:
        'Plateforme <strong>Gesundheitspersonal</strong> — apps <strong>Doctor</strong> (téléconsultation vidéo) et <strong>Translatly</strong> (traduction live) pour patients et équipes soignantes en Allemagne.',
      c: "Vidéo et traduction à faible latence sur un marché santé régulé (RGPD) — deux apps, deux stores.",
      d: "Pilotage Flutter des deux apps ; architecture, fonctionnalités et soumissions Play Store et App Store de bout en bout.",
      i: 'Deux apps santé en production — téléconsultation et traduction live pour patients et équipes soignantes en Allemagne.',
    },
    de: {
      domain: "Healthcare · DE",
      role: "Tech Lead & Flutter · CodeCooperation GmbH · Deutschland",
      value:
        'Plattform <strong>Gesundheitspersonal</strong> — Apps <strong>Doctor</strong> (Videoversorgung) und <strong>Translatly</strong> (Live-Übersetzung) für Patienten und Pflegeteams in Deutschland.',
      c: "Low-Latency-Video und Übersetzung in reguliertem Gesundheitsmarkt (DSGVO) — zwei Apps, zwei Stores.",
      d: "Flutter-Delivery beider Apps; Architektur, Features und End-to-End-Einreichungen Play Store und App Store.",
      i: "Zwei Live-Gesundheits-Apps — Videobetreuung und Live-Übersetzung für Patienten und Pflegeteams in Deutschland.",
    },
  },
  cotepuces: {
    fr: {
      domain: "Marketplace · France",
      role: "Développeuse Android · Côté Puces · France",
      value:
        'Marketplace française pour chineurs, revendeurs et designers — brocante, antiquités et aménagement intérieur.',
      c: "Parcours acheteur / vendeur fluides et expérience Android soignée pour une audience brocante en France.",
      d: "App Android de bout en bout — parcours acheteur / vendeur, intégration API Retrofit, release Play Store.",
      i: "Canal mobile live pour la communauté brocante et antiquités en France.",
    },
    de: {
      domain: "Marketplace · Frankreich",
      role: "Android-Entwicklerin · Côté Puces · Frankreich",
      value:
        'Französischer Marktplatz für Schnäppchenjäger, Händler und Designer — Brocante, Antiquitäten und Einrichtung.',
      c: "Flüssige Käufer-/Verkäufer-Flows und polierte Android-Experience für die französische Brocante-Zielgruppe.",
      d: "End-to-End-Android-App — Käufer-/Verkäufer-Flows, Retrofit-API-Integration, Play-Store-Release.",
      i: "Live-Mobile-Kanal für Frankreichs Brocante- und Antiquitäten-Community.",
    },
  },
  btu: {
    fr: {
      domain: "Fintech · Web3",
      role: "Développeuse Android · WIMOBI",
      value:
        'Portefeuille crypto grand public — soldes, transactions et usage quotidien avec clarté et confiance.',
      c: "Sécuriser interactions blockchain et données locales sur appareils Android consumer.",
      d: "Parcours transactionnels et persistance locale pour un wallet crypto en production.",
      i: "Wallet crypto live dans un domaine fintech exigeant.",
    },
    de: {
      domain: "Fintech · Web3",
      role: "Android-Entwicklerin · WIMOBI",
      value:
        'Crypto-Wallet für Endnutzer — Salden, Transaktionen und Alltagsnutzung mit Klarheit und Vertrauen.',
      c: "Blockchain-Interaktion und lokale Datensicherheit auf Consumer-Android-Geräten.",
      d: "Transaktions-Flows und lokale Persistenz für ein Produktions-Wallet.",
      i: "Live-Crypto-Wallet in anspruchsvollem Fintech-Umfeld.",
    },
  },
  mobility: {
    fr: {
      domain: "Mobilité · Social",
      role: "Android / Flutter senior · WIMOBI",
      value:
        'Apps consumer à fort trafic — réseau social restauration, VTC et logistique.',
      c: "Localisation, paiements et notifications intensives sous charge réelle.",
      d: "Livraison de fonctionnalités sur plusieurs codebases mobile consumer.",
      i: "Applications utilisées quotidiennement sur des marchés consumer compétitifs.",
    },
    de: {
      domain: "Mobilität · Social",
      role: "Senior Android / Flutter · WIMOBI",
      value:
        'High-Traffic-Consumer-Apps — Restaurant-Social, Ride-Hailing und Logistik.',
      c: "Location, Payments und notification-lastige UX unter echter Last.",
      d: "Feature-Delivery über mehrere Consumer-Mobile-Codebases.",
      i: "Apps im täglichen Einsatz in wettbewerbsintensiven Consumer-Märkten.",
    },
  },
  extended: {
    fr: {
      domain: "Autres livraisons",
      value: "Sélection de projets WIMOBI et clients, au-delà des fiches détaillées ci-dessus.",
      examples: "Coffreo, BTU, SearchDoc, NumCode, Halel, UVote, Bazary.",
    },
    de: {
      domain: "Weitere Projekte",
      value: "Ausgewählte WIMOBI- und Kundenprojekte über die Fallstudien oben hinaus.",
      examples: "Coffreo, BTU, SearchDoc, NumCode, Halel, UVote, Bazary.",
    },
  },
};
