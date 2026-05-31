/**
 * FR/DE project copy — loaded before i18n.js
 * Narrative fields (value, c, d, i) stay outcome-focused; stack lives in work-skills only.
 */
window.portfolioProjects = {
  myschneider: {
    fr: {
      domain: "Enterprise · B2B",
      role: "Responsable équipe Android · Schneider Electric · France",
      value:
        'Application Android B2B mondiale <strong>mySchneider</strong> — intégrations clients, pipelines de release et livraison Play Store.',
      c: "Faire évoluer une app globale avec des mises à jour MAP, des intégrations clients et de nombreuses parties prenantes — sans ralentir les mises en production.",
      d: "Direction de l'équipe Android ; pilotage des modules d'architecture, revues de code, hygiène des dépendances et releases production → Play Store.",
      i: "Livraisons Play Store prévisibles pour une application Schneider utilisée à l'échelle mondiale.",
    },
    de: {
      domain: "Enterprise · B2B",
      role: "Android Team Leader · Schneider Electric · France",
      value:
        'Globale B2B-Android-App <strong>mySchneider</strong> — Kundenintegrationen, Release-Pipelines und Play-Store-Delivery.',
      c: "Globale App mit MAP-Updates und Kundenintegrationen weiterentwickeln — ohne Production-Releases zu verlangsamen.",
      d: "Android-Team geleitet; Architekturmodule, Code-Reviews, Dependency-Hygiene und Prod→Play-Store-Releases verantwortet.",
      i: "Planbare Play-Store-Releases für eine global genutzte Schneider-App.",
    },
  },
  maskan: {
    fr: {
      domain: "Gouvernement · EAU · FTA",
      role: "Technical Leader · Android",
      value:
        'Application FTA <strong>Maskan</strong> — remboursements TVA pour les nationaux EAU. <strong>OCR</strong> in-app, architecture et Play Store — delivery accélérée avec <strong>Cursor</strong> et <strong>Gemini</strong>.',
      c: "Produit public greenfield : règles FTA, données citoyens sécurisées, authentification UAE — et capture des justificatifs sans ressaisie manuelle.",
      d: "Architecture modulaire, parcours remboursement, authentification App-to-App et App-to-Web, Google Wallet, capture <strong>OCR</strong> ; ownership Play Store. <strong>Cursor</strong> et <strong>Gemini</strong> pour accélérer implémentation, refactors et intégrations — sous contrôle architecture senior.",
      i: "Justificatifs déposés plus vite ; greenfield livré sur un cycle plus court, sans raccourcis architecture.",
    },
    de: {
      domain: "Behörden · VAE · FTA",
      role: "Technical Leader · Android",
      value:
        'FTA-App <strong>Maskan</strong> — MwSt.-Erstattung für VAE-Staatsangehörige. <strong>OCR</strong> im Produkt, Architektur und Play Store — beschleunigte Delivery mit <strong>Cursor</strong> und <strong>Gemini</strong>.',
      c: "Greenfield-Behördenprodukt: FTA-Regeln, sichere Bürgerdaten, UAE-Auth — und Belegerfassung ohne manuelle Eingabe.",
      d: "Modulare Basisarchitektur, Erstattungsflows, App-to-App- und App-to-Web-Auth, Google Wallet, <strong>OCR</strong>-Erfassung; Play-Store-Ownership. <strong>Cursor</strong> und <strong>Gemini</strong> für schnellere Umsetzung, Refactors und Integration — unter Senior-Architekturkontrolle.",
      i: "Schnellere Belegübermittlung; Greenfield auf kürzerem Zyklus ohne Architektur-Abkürzungen.",
    },
  },
  chamber: {
    fr: {
      domain: "Gouvernement · EAU",
      role: "Software Team Lead Android · Proxym Middle East",
      value:
        'Application officielle <strong>Dubai Chambers</strong> — extraction <strong>OpenAI</strong> in-app, releases dual-store ; delivery accélérée avec <strong>Cursor</strong> et <strong>Gemini</strong>.',
      c: "Extraire des données structurées depuis des documents commerciaux — tout en étendant l'app vers Huawei sans dupliquer le produit ni casser le build Google.",
      d: "Intégration <strong>OpenAI</strong> pour l'extraction structurée depuis les documents uploadés ; migration GMS→HMS ; ownership Play Store et App Gallery. <strong>Cursor</strong> et <strong>Gemini</strong> pour accélérer features, migration HMS et refactors — revus et durcis pour la production.",
      i: "Traitement documentaire plus fiable et cycles de delivery plus courts sur une codebase gouvernementale en production — Google Play et App Gallery.",
    },
    de: {
      domain: "Behörden · VAE",
      role: "Software Team Lead Android · Proxym Middle East",
      value:
        'Offizielle <strong>Dubai Chambers</strong>-App — <strong>OpenAI</strong>-Extraktion im Produkt, Dual-Store-Releases — beschleunigte Delivery mit <strong>Cursor</strong> und <strong>Gemini</strong>.',
      c: "Strukturierte Daten aus Handelsdokumenten zuverlässig extrahieren — und die Live-App auf Huawei erweitern, ohne das Google-Build zu brechen.",
      d: "<strong>OpenAI</strong>-Integration für strukturierte Datenextraktion; GMS→HMS-Migration; Dual-Store-Ownership. <strong>Cursor</strong> und <strong>Gemini</strong> für schnellere Features, HMS-Migration und Refactors — geprüft und produktionsreif.",
      i: "Genauere Dokumentenverarbeitung und kürzere Delivery-Zyklen auf einer Live-Behörden-Codebase — Play Store und App Gallery.",
    },
  },
  culture: {
    fr: {
      domain: "Gouvernement · EAU",
      value:
        'Extension des <strong>services mobiles Dubai Culture</strong> — programmes culturels, institutions et offres pour les résidents.',
      c: "Livrer sur une codebase en production avec exigences qualité strictes et releases backend coordonnées.",
      d: "Fonctionnalités Android et intégrations API, en coordination produit, backend et QA.",
      i: "Davantage de services culturels accessibles sur mobile pour les résidents et partenaires de Dubaï.",
    },
    de: {
      domain: "Behörden · VAE",
      value:
        'Erweiterung der <strong>mobilen Dubai-Culture-Services</strong> — Kulturprogramme, Institutionen und Angebote für Bewohner.',
      c: "Delivery auf Live-Codebase mit hohen Qualitätsanforderungen und koordinierten Backend-Releases.",
      d: "Android-Features und API-Integration, abgestimmt mit Produkt, Backend und QA.",
      i: "Mehr Kulturservices mobil erreichbar für Bewohner und Partner in Dubai.",
    },
  },
  dispatcher: {
    fr: {
      domain: "Gouvernement · EAU · Police",
      value:
        'Application patrouille <strong>Dubai Police Dispatcher</strong> — dispatch cartographique et alertes instantanées sur plaques signalées, lues à voix haute.',
      c: "Relier le MDVR du véhicule sur le réseau local et prévenir l'agent mains libres dès qu'une plaque blacklistée est détectée — sans perturber la navigation.",
      d: "Module de communication MDVR en réseau local, détection de plaques blacklistées avec alerte vocale immédiate, et lecture audio des messages dispatch et du guidage navigation.",
      i: "L'agent est informé instantanément des plaques signalées et des consignes — les yeux sur la route, pas sur l'écran.",
    },
    de: {
      domain: "Behörden · VAE · Polizei",
      value:
        '<strong>Dubai Police Dispatcher</strong> — Streifen- und Dispatch-App mit Kartenführung und sofortigen Sprachwarnungen bei markierten Kennzeichen.',
      c: "Fahrzeug-MDVR im lokalen Netz anbinden und Einsatzkräfte freihändig warnen, sobald ein Blacklist-Kennzeichen erkannt wird — ohne Navigation zu stören.",
      d: "MDVR-Socket-Modul im lokalen Netz, Blacklist-Erkennung mit sofortiger Sprachwarnung, und Audio für Dispatch-Nachrichten sowie Navigationsansagen.",
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
      d: "Lead Android sur deux apps compagnons ; coaching audio parlant à partir des données semelles pour améliorer la qualité du mouvement.",
      i: "Retour forme pendant la course ou la marche — sans s'arrêter pour lire l'écran ; base utilisateurs préservée pendant la migration.",
    },
    de: {
      domain: "IoT · Fitness",
      role: "Android-Beraterin · Digitsole · via Proxym Group",
      value:
        'Connected Coaching für Läufer und Walker — Live-Biomechanik und Sprachguidance während der Aktivität.',
      c: "Zuverlässige Sensor-Bluetooth-Streams während Cloud-Migration — plus Echtzeit-Sprachcoaching.",
      d: "Android-Lead für zwei Companion-Apps; gesprochenes Coaching aus Einlegesohlen-Daten zur besseren Bewegungsqualität.",
      i: "Form-Feedback beim Laufen und Gehen — ohne Blick auf den Bildschirm; Nutzerbasis durch Migration gehalten.",
    },
  },
  runnrz: {
    fr: {
      domain: "Mobilité · Fitness · France",
      role: "Développeuse Android · Runnrz · France",
      value:
        'App fitness française — portage iOS → Android, activités marche, course et vélo avec un niveau qualité renforcé.',
      c: "Atteindre la parité Android, ajouter de nouveaux modes d'activité et améliorer stabilité et UX.",
      d: "Migration complète iOS→Android ; activités marche, course et vélo avec suivi cartographique live ; passe qualité selon les standards équipe.",
      i: "App Android en production sur le marché français — suivi multi-activité et codebase maintenable après le port.",
    },
    de: {
      domain: "Mobilität · Fitness · Frankreich",
      role: "Android-Entwicklerin · Runnrz · Frankreich",
      value:
        'Französische Fitness-App — iOS→Android-Port, Walk-, Run- und Cycling-Modi mit höherer Qualitätslatte.',
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
      role: "Tech Lead & Flutter · CodeCooperation GmbH · Allemagne",
      value:
        'Plateforme <strong>Gesundheitspersonal</strong> — apps <strong>Doctor</strong> (téléconsultation vidéo) et <strong>Translatly</strong> (traduction live). Tech lead Flutter, releases store.',
      c: "Vidéo et traduction à faible latence sur un marché santé régulé (RGPD) — deux apps, deux stores.",
      d: "Pilotage Flutter des deux apps ; architecture, fonctionnalités et soumissions Play Store et App Store de bout en bout.",
      i: 'Deux apps santé en production — téléconsultation et traduction live pour patients et équipes soignantes en Allemagne.',
    },
    de: {
      domain: "Healthcare · DE",
      role: "Tech Lead & Flutter · CodeCooperation GmbH · Deutschland",
      value:
        'Plattform <strong>Gesundheitspersonal</strong> — Apps <strong>Doctor</strong> (Videoversorgung) und <strong>Translatly</strong> (Live-Übersetzung). Flutter Tech Lead, Store-Releases.',
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
      d: "Développement Android de bout en bout pour la plateforme Côté Puces.",
      i: "Canal mobile live pour la communauté brocante et antiquités en France.",
    },
    de: {
      domain: "Marketplace · Frankreich",
      role: "Android-Entwicklerin · Côté Puces · Frankreich",
      value:
        'Französischer Marktplatz für Schnäppchenjäger, Händler und Designer — Brocante, Antiquitäten und Einrichtung.',
      c: "Flüssige Käufer-/Verkäufer-Flows und polierte Android-Experience für die französische Brocante-Zielgruppe.",
      d: "End-to-End-Android-Entwicklung für die Côté-Puces-Plattform.",
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
