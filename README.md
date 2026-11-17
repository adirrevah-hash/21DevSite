# HIGHDRA — DJ landing page

A static, one-page site. No build step — open `index.html` directly, or host
the folder as-is on any static host (Netlify, Vercel, GitHub Pages, S3, etc.).

## Before it goes live

**1. Add the real hero photo.**
Drop it at `assets/img/hero.jpg` (≥ 1600px wide, landscape works best). That's
the only step — the `<img>` tag already points there. Until it exists, the
hero shows a dark gradient placeholder instead of a broken-image icon.

For the social-share preview image (WhatsApp/Facebook link previews), also
add `assets/img/og-image.jpg` (1200×630px is the standard size).

**2. Replace the artist name.**
It's set to `HIGHDRA` everywhere. Search `index.html` for `HIGHDRA` (hero,
booking copy's implicit context, footer, `<title>`, meta tags) and replace it.

**3. Fill in the real links.**
Every link in `index.html` is a working-shaped placeholder with an obvious
`REPLACE_WITH_…` token in it — search the file for `REPLACE_WITH` to find
all nine (8 platform buttons, appearing twice — once in the platforms grid,
once in the footer — plus the WhatsApp number in Booking). For the WhatsApp
link, `wa.me` numbers are written with no `+`, spaces or leading zeros
(country code + number, e.g. `https://wa.me/15551234567`).

**4. Set the real domain.**
Search for `REPLACE_WITH_DOMAIN` in the `<head>` (canonical link + Open
Graph/Twitter tags) and swap in the live URL once you know it.

## Structure

```
index.html
assets/
  css/styles.css   — all styling, one file, CSS custom properties at the top
  js/main.js       — entrance/scroll-reveal animations, hero parallax,
                      image-fallback handling, footer year (vanilla, no deps)
  img/             — hero.jpg and og-image.jpg go here
```

## Design notes

- Single dark theme (`--ink`, `--paper`, `--muted` in `styles.css`), one
  accent color `--accent` (electric cyan). Once the real photo is in, that's
  the one variable worth retuning to match its actual stage lighting.
- All platform icons are official brand SVG marks (inlined once as a
  `<symbol>` sprite at the top of `index.html`, reused via `<use>` — no icon
  font, no external request).
- Respects `prefers-reduced-motion`: entrance/scroll animations and the hero
  parallax are skipped entirely for anyone with that setting on.
