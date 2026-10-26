# Khutwa · خطوة

[Open the app](https://malikahed.github.io/khutwa-app/)

A compact, ready-to-serve copy of the local Tawjihi learning app: nine subject paths, 124 lesson entries and 7,229 questions with their worked explanations and required figures.

This repository contains only the browser runtime. JavaScript and CSS are minified; unused question images, original PDFs, source archives, audit ledgers, development dependencies, tests, build tools and private account databases are excluded. Third-party licenses are retained. Files under `src/` and the small `node_modules/` directory are required browser modules, not a development installation.

## Using the GitHub Pages edition

Use the demo sign-in **free** / **Learn123**, or **subscribed** / **Learn123** to try Super. Progress is stored only in this browser. Registration is a temporary preview; newly registered accounts cannot be used for later sign-ins. Reloading requires signing in again with a demo account. This site does not run the local Node/SQLite account server or synchronize learners between devices.

## Hosting

GitHub Pages serves `main` directly from the repository root. `.nojekyll` ensures every runtime file, including browser dependencies, is published. No npm installation or build step is needed.

To serve a downloaded copy, run `python3 -m http.server 8080` in this directory and open `http://localhost:8080/`. Use an HTTP server; opening `index.html` as a local file cannot load the JavaScript modules.

The editable local project remains the source of truth. This is a publication artifact; update it from a newly verified package rather than editing minified files.
