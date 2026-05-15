# T-P_TODO

Application web de gestion de tâches construite avec Next.js, React, TypeScript,
Tailwind CSS et Supabase.

## Structure du projet

```text
.
├── README.md
└── top-do-app/
    ├── package.json
    ├── package-lock.json
    ├── src/
    └── public/
```

Le code de l'application se trouve dans `top-do-app`.

## Prérequis

Avant de commencer, installe :

- Node.js 20 ou plus récent
- npm, fourni avec Node.js
- un projet Supabase si tu veux utiliser les fonctionnalités connectées à Supabase

Pour vérifier les versions installées :

```bash
node --version
npm --version
```

## Installation

Depuis la racine du dépôt :

```bash
cd top-do-app
npm install
```

`npm install` utilise le fichier `package-lock.json` pour installer les mêmes
versions de dépendances que celles prévues par le projet.

## Configuration de l'environnement

Crée un fichier `.env.local` dans `top-do-app` :

```bash
touch .env.local
```

Ajoute ensuite les variables Supabase :

```env
NEXT_PUBLIC_SUPABASE_URL=https://ton-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=ta-cle-anon-supabase
```

Tu peux les récupérer dans Supabase :

1. Ouvre ton projet Supabase.
2. Va dans `Project Settings` puis `API`.
3. Copie `Project URL` dans `NEXT_PUBLIC_SUPABASE_URL`.
4. Copie la clé `anon public` dans `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

Le fichier `.env.local` reste local à ta machine et ne doit pas être commité.

## Lancer l'environnement de développement

Dans `top-do-app` :

```bash
npm run dev
```

Ouvre ensuite :

```text
http://localhost:3000
```

Si le port 3000 est déjà utilisé, Next.js proposera généralement un autre port,
par exemple `http://localhost:3001`.

## Commandes utiles

Toutes les commandes suivantes sont à exécuter dans `top-do-app`.

```bash
npm run dev
```

Lance le serveur de développement.

```bash
npm run lint
```

Vérifie le code avec ESLint.

```bash
npm run build
```

Compile l'application pour vérifier qu'elle est prête pour la production.

```bash
npm run start
```

Lance l'application compilée après un `npm run build`.

## Dépendances principales

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Supabase SSR et Supabase JS
- Lucide React pour les icônes

## Workflow recommandé

Pour reprendre le projet sur une nouvelle machine :

```bash
git clone <url-du-repo>
cd T-P_TODO/top-do-app
npm install
touch .env.local
npm run dev
```

Puis renseigne les variables Supabase dans `.env.local`.

Avant de partager une modification :

```bash
npm run lint
npm run build
```

## Problèmes fréquents

Si `npm run dev` échoue à cause de variables Supabase manquantes, vérifie que
`.env.local` existe bien dans `top-do-app` et contient les deux variables
`NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

Si une dépendance semble cassée, supprime `node_modules`, puis réinstalle :

```bash
rm -rf node_modules
npm install
```

Si Next.js indique que le port 3000 est occupé, ferme l'autre serveur ou utilise
l'URL alternative affichée dans le terminal.
