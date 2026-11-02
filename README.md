# maison arnould

Site vitrine de maison arnould, liqueurs de plantes au Puy-en-Velay. Next.js 15, déployé sur Vercel.

## Modifier les textes et réglages

- `site.config.js` : nom, accroche, e-mail de contact, lien Instagram (laisser vide = « bientôt »).
- `app/page.js` : tous les textes de la page (liqueurs, méthode, essais, lexique).
- `public/images/` : photos et étiquettes.

## Lancer en local

```bash
npm install
npm run dev
```

## Plus tard : la boutique

La structure (Next.js) permet d'ajouter une boutique (Shopify headless ou Stripe) sans refaire le site. Avant toute vente : licence de vente d'alcool, statut, mentions légales complètes.
