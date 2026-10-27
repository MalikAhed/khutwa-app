# Khutwa · خطوة

[Open the app](https://khutwaa.pages.dev/) · [GitHub Pages mirror](https://malikahed.github.io/khutwa-app/)

A compact, ready-to-serve copy of the local Tawjihi learning app: nine subject paths, 124 lesson entries and 7,229 questions with their worked explanations and required figures.

This repository contains only the browser runtime. Original PDFs, source archives, audit ledgers, development dependencies, tests, build tools and private account databases are excluded. Third-party licenses are retained. Files under `src/` and the small `node_modules/` directory are required browser modules, not a development installation.

## Using the GitHub Pages edition

Use the demo sign-in **free** / **Learn123**, or **subscribed** / **Learn123** to try Super. Progress is stored only in this browser. The current local profile stays signed in across reloads and app launches until you sign out. Registration remains a local preview: after signing out of a newly registered profile, recreating it with the same username reconnects to its saved progress. This site does not run the local Node/SQLite account server or synchronize learners between devices.

Public lesson content downloads in the background and is kept in browser cache when storage is available. Onboarding and shared screens come first, then first questions and complete lessons in rounds across subjects. Opening a lesson gives its full download priority. Content updates do not clear the separate saved-progress storage.

## Hosting

Pushes to `main` publish this verified runtime to the existing `khutwaa` Cloudflare Pages project through `.github/workflows/cloudflare-pages.yml`. The Cloudflare package uses HTTP accounts and forwards `/api/*` to the project's existing `BACKEND` service binding: `khutwa-app` in production and `khutwa-app-staging` in previews. This preserves the real accounts, admin access, sessions, and server-saved progress. A preview must pass account-routing and library checks before production is changed. Keep the workflow and `.github/cloudflare/` files when replacing the browser runtime. Deployment credentials stay in repository secrets.

GitHub Pages serves `main` directly from the repository root. `.nojekyll` ensures every runtime file, including browser dependencies, is published. No npm installation or build step is needed. Runtime URLs are versioned per release; an installed app checks for updates and refreshes between study sessions after progress has saved.

To serve a downloaded copy, run `python3 -m http.server 8080` in this directory and open `http://localhost:8080/`. Use an HTTP server; opening `index.html` as a local file cannot load the JavaScript modules.

The editable local project remains the source of truth. This is a publication artifact; update it from a newly verified package rather than editing minified files.
