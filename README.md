# HIGHDRA — DJ landing page

A static, one-page site. No build step — open `index.html` directly, or host
the folder as-is on any static host (Netlify, Vercel, GitHub Pages, S3, etc.).

## Before it goes live

- [x] **Hero photo** — `assets/img/hero.jpg` is the real photo. `object-position`
      in `styles.css` is tuned to it specifically (keeps the hands/headphones
      in frame on both mobile and wide-desktop crops); re-tune that one line
      if the photo ever changes.
- [x] **All 8 platform links** — Instagram, Facebook, YouTube, TikTok, Apple
      Music, Spotify, SoundCloud and Beatport are wired to the real URLs
      (each appears twice: platforms grid + footer).
- [x] **Footer photo** — `assets/img/footer-photo.jpg`, shown next to the
      "DJ HIGHDRA" wordmark.
- [ ] **Social-share preview image.** For WhatsApp/Facebook link previews, add
      `assets/img/og-image.jpg` (1200×630px). The meta tags already point there.
- [ ] **Real domain.** Search for `REPLACE_WITH_DOMAIN` in the `<head>`
      (canonical link + Open Graph/Twitter tags) and swap in the live URL.
- [ ] **Mirrored photo?** The supplied hero photo's on-stage logos/branding
      read backwards (mirror image) — flag to the artist/photographer in case
      it should be flipped; nothing in the code does that automatically.

## Structure

```
index.html
assets/
  css/styles.css   — all styling, one file, CSS custom properties at the top
  js/main.js       — entrance/scroll-reveal animations, hero parallax, the
                      background-music toggle, image-fallback handling,
                      footer year (vanilla, no deps)
  img/             — hero.jpg, footer-photo.jpg, bg-swirl.jpg (backdrop
                      behind platforms+footer) and og-image.jpg go here
  audio/who-am-i.mp3 — background music loop
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
- **Background music** (`#audioToggle` / `#bgAudio`) starts paused — browsers
  block audio-with-sound from starting on its own before the visitor
  interacts with the page, so the fixed speaker button in the corner *is*
  that first interaction. Loops via the native `loop` attribute; `preload="none"`
  so the 2MB file isn't fetched until someone actually presses play.
