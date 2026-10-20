Exercice 2 – Routing Angular
Projet réalisé par Oumnia et Horia.
Petit site en Angular qui met en pratique le système de routes, les formulaires réactifs et les services. Le design est fait avec Bootstrap.
Pages
Page	URL	Contenu
Accueil	`/accueil`	Un mème centré au milieu de la page
Liste	`/liste`	5 films que nous aimons. Un clic sur un film affiche son titre et son affiche
Gestion	`/gestion`	Les infos du dernier formulaire de contact envoyé, ou un 404 s'il n'y en a pas
Contact	`/contact`	Formulaire de contact (accessible depuis le bouton du footer)
Le header et le footer sont toujours visibles. Toute URL vide ou inconnue redirige vers l'accueil.
Formulaire de contact
Prénom, Nom, Email et Commentaire sont obligatoires.
L'email doit contenir un `@` (format `nom@site.fr`).
La case Hide cache le champ Email, le vide et le rend non obligatoire.
Le bouton Envoyer n'est actif que si le formulaire est valide.
À l'envoi : alerte « Le formulaire est valide », puis retour à l'accueil.
Un nouvel envoi écrase le précédent dans la page Gestion (données gardées en mémoire via un service).
Lancer le projet
```bash
npm install
npx ng serve
```
Puis ouvrir http://localhost:4200
Structure
```
src/app/
├── components/
│   ├── header/    barre de navigation
│   ├── footer/    pied de page + bouton Contact
│   ├── accueil/   page d'accueil
│   ├── liste/     liste de films
│   ├── contact/   formulaire de contact
│   └── gestion/   dernier formulaire envoyé
├── services/
│   └── contact.ts service qui garde le dernier formulaire
└── app.routes.ts  routes de l'application
public/            mème et affiches de films
```
Technologies
Angular 20, Bootstrap 5, TypeScript.