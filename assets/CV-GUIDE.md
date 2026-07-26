# CV — Architecture, thème & guide de customisation

Documentation de référence pour le CV HTML/CSS de Samira Salah (`assets/`).  
Objectif : comprendre la structure, centraliser les choix de design, et modifier le CV sans casser l’export PDF A4.

---

## Fichiers & rôles

| Fichier | Rôle |
|---------|------|
| `cv.html` | Structure HTML unique (EN par défaut). **Source de vérité** pour le markup. |
| `cv.css` | Thème, layout écran, règles print, tokens CSS. |
| `js/cv-i18n.js` | Textes EN / FR / DE (`data-cv-i18n`). |
| `js/cv-print-check.js` | Active le layout compact print (`?preview=print`, `beforeprint`). |
| `js/geo-location.js` | Libellés dynamiques selon IP (France vs Allemagne). |
| `cv-fr.html` / `cv-de.html` | Redirections ou entrées langue (si présentes). |

Le portfolio principal (`index.html`, `css/style.css`, `js/i18n.js`) est **séparé** — ne pas confondre avec le CV.

---

## Architecture des pages

Le CV est un document **2 pages A4** fixées en largeur (`210mm`).

```
article.cv
├── section.cv-sheet          ← Page 1
│   ├── header.cv-header      ← Bandeau bleu (identité, badge, contact)
│   ├── .cv-metrics           ← 4 métriques (8+ ans, Vidéo, France, Public)
│   ├── .cv-refs              ← Références clients (France | Vidéo & VoIP)
│   └── .cv-body              ← Grille 2 colonnes
│       ├── main.cv-main      ← Profil, Expertise, Projets phares
│       └── aside.cv-aside    ← Compétences, Langues, Formation
│
└── section.cv-sheet.cv-sheet-last   ← Page 2
    ├── header.cv-header--compact
    ├── section.cv-block--exp        ← Expérience (3 rôles)
    ├── section + .project-grid      ← Autres projets (6 mini-cartes)
    ├── section (expérience antérieure)
    └── footer.cv-footer
```

### Règle de contenu page 1 vs page 2

- **Page 1** : impact immédiat (profil, expertise, 4 projets phares, sidebar skills).
- **Page 2** : expérience détaillée, projets secondaires, historique, footer légal.

Ne pas déplacer l’expérience en page 1 sans revérifier la hauteur — risque de débordement et coupure PDF.

---

## Système de design (thème)

### Tokens centralisés (`:root` dans `cv.css`)

Modifier **uniquement ces variables** pour un changement global cohérent :

```css
/* Couleurs */
--ink, --ink-soft, --ink-muted    /* Texte */
--accent, --accent-mid, --accent-soft, --accent-tag  /* Bleu marque */
--line, --paper, --aside          /* Fonds & séparateurs */

/* Layout */
--page-w: 210mm;   --page-h: 297mm;
--pad-x: 11mm;     --aside-w: 68mm;

/* Print / espacement (source de vérité pour le PDF) */
--print-pad-top-body: 2mm;      /* Sous la bande refs → corps page 1 */
--print-pad-bottom: 5mm;         /* Bas de page (colonnes + footer) */
--print-block-gap: 2mm;          /* Entre blocs page 1 */
--print-section-gap: 2.5mm;      /* Entre sections page 2 */
--print-page2-exp-top: 5mm;      /* Avant EXPÉRIENCE page 2 */
--print-h2-margin-bottom: 1mm;   /* Sous titres de section (Profil, Autres projets…) */
--print-h2-margin-top: 2mm;      /* Au-dessus titres page 2 (Autres projets, Exp. antérieure) */
--card-shadow: 0 1px 3px …;      /* Ombre cartes projets / profil / expertise */
```

### Typographie

- **Corps** : Inter (`8.5pt` écran, resserré en print via `.cv-print-compact`).
- **Nom / titres forts** : Libre Baskerville (header page 1, nom page 2).
- **Titres de section** : uppercase, `letter-spacing`, couleur `--accent-mid`.

### Composants visuels — état actuel

| Zone | Style retenu |
|------|----------------|
| **Header page 1** | Dégradé bleu foncé, sans padding haut (bleu jusqu’au bord). |
| **Métriques** | Bandeau 4 colonnes, fond `--accent-soft`. |
| **Références clients** | **2 colonnes type métriques** — label uppercase + clients en une ligne (`·`). Pas de cartes, pas de puces. |
| **Profil** | Panneau `.profile-panel` — fond bleu clair, bordure gauche, ombre légère. |
| **Expertise** | 3 `.offer-card` — cartes avec ombre ; accents gauche bleu / vert / violet. |
| **Projets phares** | `.project-card--compact` — cartes avec ombre (page 1). |
| **Sidebar skills** | Grille 2 colonnes, tags ; fond `--accent-soft` en print. |
| **Mini-projets (p.2)** | `.project-mini` — cartes 3×2 avec ombre. |
| **Expérience** | `.role` — barre gauche bleue ; PROXYM en `.role--highlight`. |

### Ce qu’il ne faut pas réintroduire (décisions validées)

- Contour pointillé des pages en preview.
- Lignes horizontales décoratives après les `h2` du main.
- Ombre sur le conteneur `.cv` entier.
- Cartes / puces sur la bande **France / Vidéo & VoIP** (design rejeté).

---

## Système print : une seule source de vérité

### Classes activatrices

| Classe | Quand | Effet |
|--------|-------|-------|
| `.cv-print-compact` | Sur `article.cv` | Applique **tous** les espacements et tailles print. |
| `html.cv-print-preview` | Sur `<html>` | Fond blanc, pas d’ombre CV (preview écran). |

Activation automatique (`cv-print-check.js`) :

1. URL `?preview=print` au chargement.
2. Événement `beforeprint` avant ⌘+P (même sans `preview=print`).

### Où modifier l’espacement PDF

**Priorité 1** — variables `:root` (`--print-*`).  
**Priorité 2** — bloc `.cv-print-compact …` dans `cv.css` (règles par zone).  
**Ne pas** dupliquer un bloc `html.cv-print-preview` séparé (ancien anti-pattern supprimé).

### Export PDF (Chrome)

1. Ouvrir : `assets/cv.html?lang=fr&preview=print`
2. ⌘+P → **A4**
3. Vérifier visuellement : **2 pages**, pas de contenu coupé entre les pages

---

## Internationalisation (`cv-i18n.js`)

### Principe

- HTML = structure + clés `data-cv-i18n="chemin.clé"`.
- Textes = objet `T.en` / `T.fr` / `T.de`.
- HTML riche : ajouter `data-cv-i18n-html="true"` (profil, expérience, éducation).

### Langue active

Ordre de résolution (`getLang()`) — **CV = anglais par défaut** (indépendant de la geo) :

1. `window.__CV_LANG` (redirects `cv-fr.html` / `cv-de.html`)
2. `?lang=fr|en|de`
3. `localStorage` `portfolio-lang` (choix explicite mémorisé)
4. `html lang` (`cv.html` → `en`)
5. Défaut `en`

La geo (`?geo=` / IP) ne change **que** ville + tagline, pas la langue UI du CV.  
Pour le FR/DE : `?lang=fr`, `cv-fr.html`, ou le lien CV du portfolio déjà en FR/DE.

API console : `cvI18n.applyLang('fr')`.

### Conventions de clés

| Préfixe | Usage |
|---------|--------|
| `profileText`, `offer1t`, `m1`… | Sections globales |
| `refsFrance*`, `refsLive*` | Bande références |
| *(tagline)* | **Non** — voir `[data-geo-tagline]` dans `geo-location.js` |
| `roles.*` | Expérience page 2 |
| `projects.<id>.intro/delivered/impact` | Fiches projet |

### Règles rédactionnelles (contenu)

- **`intro`** = le produit / contexte client.
- **`delivered`** = ce que tu as fait (tâches, livrables).
- **`impact`** = résultat métier (peut chevaucher le stack — OK).
- **Tags** (`<li>` stack) = technologies ; duplication partielle avec expertise OK.
- **Côté Puces** : absent de `m3s` uniquement ; peut rester ailleurs.
- **Freelance** : HB IT Services, facturation EUR.

### Titres professionnels (diplôme)

Samira détient une **Licence** (ISET Sousse), pas un titre d’ingénieur·e. Utiliser :
- **FR** : *Développeuse mobile senior freelance* — éviter *Ingénieure*
- **FR typographie** : phrase en minuscules sauf noms propres (Schneider, Play Store…) ; éviter l'anglais capitalisé (*Lead*, *Delivery*, *Team Lead*)
- **EN** : *Senior Mobile Developer* — éviter *Engineer* si cohérence stricte avec le diplôme
- **DE** : *Senior Mobile-Entwicklerin* — éviter *Ingenieurin*

La section **Formation** (`eduHtml`) et **Certifications** (`certHtml`) sont la source de vérité pour diplôme et certificats (liens DeepLearning.AI inclus).

---

## Géolocalisation (`geo-location.js`)

IP via `ipapi.co` (cache session 6 h, fallback **DE** si API indisponible).

### Règle unique (tous les hooks geo)

| IP visiteur | Variante affichée |
|-------------|-------------------|
| **France (`FR`)** | Textes **France & UE** |
| **Toute autre IP** | Textes **Allemagne & UE** (défaut) |

La langue d’interface (EN / FR / DE via `cv-i18n.js`) choisit **la traduction** ; l’IP choisit **France vs Allemagne** dans cette traduction.

### Override de test (`?geo=`)

| URL | Effet |
|-----|--------|
| `?geo=fr` | Variante **France** (Rambouillet, France & UE, tagline France…) |
| `?geo=de` | Variante **Allemagne** (Bergneustadt, Allemagne & UE…) |

Priorité : **`?geo=`** > cache session > ipapi.co > fallback DE.  
L’override **n’est pas mis en cache** — retirer le paramètre pour revenir à l’IP réelle.

**Syntaxe URL** — séparer les paramètres avec **`&`**, pas un second `?` :
- ✅ `?lang=fr&geo=fr`
- ❌ `?lang=fr?geo=fr` (geo ignoré → fallback DE)

Exemples :
- CV France : `assets/cv.html?lang=fr&geo=fr&preview=print`
- CV Allemagne (UI FR) : `assets/cv.html?lang=fr&geo=de&preview=print`
- Portfolio : `index.html?geo=fr` (ou IP France → **français par défaut**)

### Langue par défaut

| Surface | Sans `?lang=` ni choix mémorisé |
|---------|----------------------------------|
| **`cv.html`** | **Anglais** (toujours — geo n’intervient pas) |
| **Portfolio** (`index.html`) | IP France / `?geo=fr` → français ; sinon navigateur / anglais |

Un choix explicite (`?lang=`, sélecteur EN/FR/DE) **prime** partout.

### Attributs HTML

| Attribut | Contenu |
|----------|---------|
| `[data-geo-tagline]` | Sous-titre header (`.cv-tagline`) — **source de vérité geo**, pas `cv-i18n` |
| `[data-geo-scope]` | Ligne badge « France & UE · remote… » / « Allemagne & UE · … » |
| `[data-geo-location]` | Ville (Rambouillet si IP FR, sinon Bergneustadt) |

Badge titre CV : `Freelance senior · disponible` (i18n statique, **sans** geo).

Refresh après changement de langue : `consultantGeo.refreshGeoLabels()` (appelé par `cvI18n.applyLang`).

### Textes tagline (constante `TAGLINE` dans `geo-location.js`)

**Français — IP France :**
> Apps mobiles en production pour la France & l'UE — grand public, service public, vidéo & temps réel

**Français — IP hors France :**
> Apps mobiles en production pour l'Allemagne & l'UE — grand public, service public, vidéo & temps réel

**Anglais — IP France :**
> Production mobile for France & EU — consumer, public sector, video & real-time

**Anglais — IP hors France :**
> Production mobile for Germany & EU — consumer, public sector, video & real-time

**Allemand — IP France :**
> Mobile Apps in Production für Frankreich & EU — Consumer, öffentlicher Dienst, Video & Echtzeit

**Allemand — IP hors France :**
> Mobile Apps in Production für Deutschland & EU — Consumer, öffentlicher Dienst, Video & Echtzeit

Pour modifier le tagline : éditer `TAGLINE` dans `assets/js/geo-location.js` (pas `cv-i18n.js`).

---

## Recettes de customisation

### Changer les couleurs marque

Éditer `:root` dans `cv.css` :

```css
--accent: #1e3a8a;
--accent-mid: #2563eb;
--accent-soft: #eff6ff;
```

Puis vérifier header, tags `--core`, labels refs, bordures cartes.

### Ajouter un projet phare (page 1)

1. Dupliquer un `article.project-card--compact` dans `cv.html`.
2. Ajouter `projects.<id>.{sector,meta,intro,delivered,impact}` dans **EN, FR, DE** dans `cv-i18n.js`.
3. Preview print → contrôler que page 1 tient sur une feuille A4.

### Ajouter un mini-projet (page 2)

1. Dupliquer `article.project-mini` dans la `.project-grid`.
2. Clés i18n `projects.<id>.*` (idem).

### Modifier la bande France / Vidéo & VoIP

- **Structure** : `.cv-refs` > `.cv-ref-item` × 2 (ne pas repasser en cartes).
- **Textes** : `refsFranceLabel`, `refsFranceClients`, `refsLiveLabel`, `refsLiveClients`.
- **Style** : section `/* Client references — metrics-style strip */` dans `cv.css`.

### Ajuster marge avant EXPÉRIENCE (page 2)

```css
--print-page2-exp-top: 5mm;  /* :root */
```

Classe cible : `.cv-sheet-last .cv-block.cv-block--exp` (utiliser `margin-top`, pas `padding-top` seul — conflit avec `:first-of-type`).

### Ajouter une langue

1. Copier bloc `T.en` → `T.xx` dans `cv-i18n.js`.
2. Ajouter `xx` dans `LANGS`.
3. `hreflang` + lien dans `cv.html` si entrée dédiée.

---

## Checklist avant envoi PDF

- [ ] `?lang=fr&preview=print` — aperçu compact activé
- [ ] 2 pages exactement, pas de rôle coupé en deux
- [ ] Marges bas page 1 et page 2 visibles (~5 mm)
- [ ] Background graphics activé (couleurs header, tags, highlight PROXYM)
- [ ] Badge geo + scope cohérents
- [ ] FR / EN / DE relus si CV multilingue

---

## Dépendances & déploiement

- **Fonts** : Google Fonts (Inter, Libre Baskerville) — nécessite réseau à l’export si pas en cache.
- **Deploy** : `deploy-github-pages.sh` sync le dossier portfolio ; vérifier que `assets/cv.*` et `assets/js/*` sont inclus.
- **`.deploy-publish/`** : copie de déploiement — peut être stale ; toujours éditer les fichiers sources dans `assets/`.

---

## Arborescence des classes CSS (référence rapide)

```
.cv-header / .cv-header--compact
.cv-tagline / [data-geo-tagline]
.cv-metrics / .metric
.cv-refs / .cv-ref-item / .cv-ref-label / .cv-ref-clients
.cv-body / .cv-main / .cv-aside
.cv-block / .cv-block--profile / .cv-block--expertise / .cv-block--skills / .cv-block--exp
.profile-panel / .lead
.offer-grid / .offer-card
.project-card / .project-card--compact / .project-mini / .project-grid
.role / .role--highlight
.skill-tag--core
.cv-footer
.cv-print-compact   ← override print (sur .cv)
```

---

*Dernière mise à jour : alignée sur la structure refs « metrics-style », profil/expertise en cartes, print via `.cv-print-compact`.*
