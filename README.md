# Portfolio — Armand NAVARRE

Site statique bilingue (FR/EN) : du HTML, du CSS et du JavaScript « pur ».
Pas de framework, pas de build, pas de police ni de librairie externe.

## Structure

```
index.html              page unique du site
assets/content.js       TOUT le texte (FR + EN) — c'est le fichier à modifier
assets/app.js           moteur du site (pas besoin d'y toucher)
assets/style.css        apparence
assets/fond.svg         fond de page
docs/                   CV en PDF (FR et EN)
images/                 images rangées par projet
.nojekyll               dit à GitHub de servir les fichiers tels quels
```

## Mettre à jour le site

Sur GitHub : « Add file » → « Upload files », glisser les fichiers ou dossiers
modifiés, puis « Commit changes ». Les anciens fichiers sont remplacés.

## Adresses utiles

- Accueil : `https://armand-navarre.github.io/`
- Version anglaise forcée : `https://armand-navarre.github.io/?lang=en`
- Un projet précis : `https://armand-navarre.github.io/#projet-stage-technicien`

Sans paramètre, le site s'affiche dans la langue du navigateur du visiteur,
puis retient le choix fait avec le bouton FR/EN.

## Ajouter un projet

1. Dans `assets/content.js`, copier un bloc de `PROJECTS` (par ex. `"pendule": { ... }`),
   changer son identifiant et ses textes FR/EN.
2. Ajouter cet identifiant dans la liste `projects` de l'année concernée dans `YEARS`
   (ou créer une nouvelle année, ex. `{ id: "phelma2", ... }`).
3. Mettre les images dans `images/<identifiant>/01.jpg`, `02.jpg`, etc.

Pour tester en local : ouvrir `index.html` dans un navigateur (double-clic).

## Pourquoi c'est durable

- GitHub Pages sert simplement les fichiers du dépôt. Aucune étape de compilation
  ne peut casser lors d'une mise à jour de GitHub.
- Le site ne dépend d'aucun service tiers (pas de CDN, pas de Google Fonts).
- Le dossier est portable : il fonctionne tel quel sur Netlify, Cloudflare Pages,
  un hébergement d'école ou même en local.
