# web

A React + TypeScript + Tailwind CSS project, set up for shadcn/ui, containing the **Glass Folder Cards** component.

## Why this subfolder exists

The rest of this repository (`index.html` at the project root) is a static HTML/CSS hero section — no React, no TypeScript, no Tailwind, no bundler. The component this folder was built for is a `.tsx` React component, so it needs a project that can actually compile and run TSX. This folder is that project, scaffolded with Vite.

## Stack

- **Vite + React + TypeScript** (`npm create vite@latest -- --template react-ts`)
- **Tailwind CSS v3**, with the shadcn/ui CSS-variable theme (`src/index.css`) and `tailwind.config.js` extended with the `background` / `foreground` / `muted` / etc. color tokens shadcn components expect
- **shadcn/ui conventions**: `components.json`, the `@/*` path alias (`tsconfig.app.json` + `vite.config.ts`), and `src/lib/utils.ts` exporting `cn()`

## Setup, from scratch

If you ever need to reproduce this (or add it to another plain project):

```bash
npm create vite@latest web -- --template react-ts
cd web
npm install
npm install -D tailwindcss@3.4.17 postcss autoprefixer
npm install lucide-react class-variance-authority clsx tailwind-merge
npx tailwindcss init -p
npx shadcn@latest init   # or wire tailwind.config.js / index.css / components.json by hand, as done here
```

Then add components with `npx shadcn@latest add <name>`, or drop a component file straight into `src/components/ui/` as was done here.

### Why `/components/ui` matters

shadcn's CLI and every shadcn component's own imports assume primitives live at `@/components/ui/*`. Components outside that folder won't resolve for other shadcn components that import them, and the CLI's `add`/overwrite flow won't find them either. Keeping that path intact is what lets this component (and any future shadcn components) compose with each other without hand-fixing imports.

## The component

- `src/components/ui/glass-folder-cards.tsx` — the component itself (self-contained: only imports React, generates its own artwork on a `<canvas>`, no external images or icon libraries needed).
- `src/components/glass-folder-cards-demo.tsx` — the three-folder demo, mounted in `src/App.tsx`.

## Run it

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # type-checks with tsc -b, then builds
```
