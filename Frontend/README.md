# ZestBotz Solutions — Frontend

The frontend for the ZestBotz Solutions website, built with React, Vite, and Tailwind CSS.

## Prerequisites

- Node.js `20.19+` or `22.12+`
- npm (included with Node.js)

## Run locally

From the repository root, open a terminal and run:

```bash
cd Frontend
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal (usually `http://localhost:5173`). Leave the development server running while you use the site. Press `Ctrl+C` in the terminal to stop it.

If you are already in the `Frontend` directory, skip the `cd Frontend` command.

## Other commands

Run these from the `Frontend` directory:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server with hot reload |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the production build locally (run `npm run build` first) |
| `npm run lint` | Run Oxlint |

## Production build

```bash
cd Frontend
npm install
npm run build
```

The generated static site is in `Frontend/dist/`. To check the production build locally, run `npm run preview` from `Frontend`.
