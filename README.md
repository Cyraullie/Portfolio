# Backend & Fullstack Developer Portfolio

Responsive bilingual (English/French) portfolio built with React and Vite, configured for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

## Build locally

```bash
npm run build
npm run preview
```

## Deploy on GitHub Pages

1. Push this project to the `main` branch of a GitHub repository.
2. Open the repository **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Open the **Actions** tab and wait for the `Deploy portfolio to GitHub Pages` workflow to finish.
5. Your site will be published at the URL shown in the workflow deployment environment.

The workflow rebuilds and deploys the site automatically on every push to `main`.

## Personalise before publishing

In `src/App.jsx`, replace:
- `hello@example.com` with your public contact email.
- The GitHub and LinkedIn profile URLs with your profiles.
- Each project's `github` URL with its actual repository.
- Project descriptions and technology tags to reflect the current state of each project.

The project previews are CSS-generated; no external image assets are required.
