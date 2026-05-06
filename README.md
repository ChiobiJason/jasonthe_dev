# jasonthe_dev portfolio

Personal site for **Chisom Chiobi J** (`jasonthe_dev`): software engineer, projects, experience, and references. Built with **Vue 3**, **Vite**, and **Vue Router**.

## Stack

- [Vue 3](https://vuejs.org/) + [Vite](https://vite.dev/)
- [Vue Router](https://router.vuejs.org/) (`/` home, `/projects`, `/references`)
- [Vercel Web Analytics](https://vercel.com/docs/analytics) via [`@vercel/analytics`](https://www.npmjs.com/package/@vercel/analytics)

## Project structure

| Path | Purpose |
|------|---------|
| `src/content.js` | Editable copy: site info, projects, experience, references |
| `src/views/` | Route-level pages (`HomePage`, `ProjectsPage`, `ReferencesPage`) |
| `src/components/` | Sections and layout pieces |
| `public/screenshots/` | Project preview images (served as static assets) |
| `scripts/take-screenshots.mjs` | Optional Playwright helper to refresh screenshots |

## Setup

```sh
npm install
```

### Development

```sh
npm run dev
```

### Production build

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Deploying on Vercel

1. Connect this repo to [Vercel](https://vercel.com/).
2. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
3. In the Vercel project, open **Analytics** and enable **Web Analytics**. The app already includes the `@vercel/analytics/vue` component; traffic will appear after you enable it for the project and deploy.

## Editing content

Most text and project metadata live in **`src/content.js`** (including `featured`, `homeOrder`, `rank`, links, and screenshot paths). Update that file and redeploy.

## Optional: refresh screenshots

Requires Playwright (already a dev dependency). Example:

```sh
node scripts/take-screenshots.mjs
```

Adjust URLs inside `scripts/take-screenshots.mjs` as needed.
