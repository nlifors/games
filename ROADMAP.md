# Roadmap

Proposed enhancements for the Games landing page. This is a static, dependency-free
site (`index.html` + `css/style.css` + `js/games.js` + `js/main.js`), so everything
below is achievable without a build step unless noted.

Items are grouped by theme and roughly ordered by effort-to-impact. Nothing here is
committed — it's a menu to pick from.

---

## 1. Content & catalogue

- [ ] **More games.** Add the rest of the `/dev` games as catalogue entries. Each is
      one object in `js/games.js`; layout, palette band, and nav are automatic.
- [ ] **Per-game shapes.** Extend the shape set beyond circle/diamond — heart, hexagon,
      rounded-square, blob — so every game reads as distinct. Factor the clip shape +
      rim stroke into a small reusable helper so a new game just names its shape.
- [ ] **Status badges.** A small pill per game: `Live`, `Beta`, `WIP`, `Local only`.
- [ ] **Metadata line.** Players (1 / 2 / online), control scheme, est. session length.
- [ ] **Featured / "new" flag.** Let one game be highlighted at the top.

## 2. Visual & motion polish

- [ ] **Animate the dioramas.** Subtle, looping SVG motion on scroll-into-view — the
      Agar.io cells drifting, Space Pitfall's astronaut bobbing, the crystal twinkling.
      Gate behind `prefers-reduced-motion` (already respected elsewhere).
- [ ] **Parallax on the artwork** as the section scrolls through the viewport.
- [ ] **Palette refinement.** Audit each band/accent pairing for WCAG AA contrast;
      consider a curated palette per game rather than pure index-cycling.
- [ ] **Hero artwork.** The hero is currently text-only — add a signature graphic
      (e.g. an animated version of the folded-shape motif).
- [ ] **Section transitions.** Soft diagonal or curved dividers between colour bands
      instead of hard edges.
- [ ] **Light/dark site toggle** for the header/hero/footer chrome (the bands stay
      coloured regardless).

## 3. Interaction & navigation

- [ ] **Live preview on hover.** Swap the static diorama for a short looping GIF/video
      or an embedded live `<iframe>` of the game when a card is focused/hovered.
- [ ] **Scroll-spy nav.** Highlight the current game's nav link as it scrolls into view;
      add scroll-snap between sections for a deck-like feel.
- [ ] **Keyboard navigation.** `↑/↓` or `j/k` to jump between games; `Enter` to play
      the focused one.
- [ ] **Filter / sort bar.** By genre tag, player count, or "new". Tags already exist
      in the data model.
- [ ] **Deep links.** Anchor links already work (`#agario`); add copy-link affordance
      and ensure `:target` styling draws the eye to the linked game.

## 4. "Play" experience

- [ ] **Launch reliability.** The Play buttons point at separate dev servers
      (`:3000`, `:8000`); surface a clear "start this server" hint when a game is
      unreachable (a tiny fetch/ping with a fallback message).
- [ ] **Single entry point.** A small dev script or reverse proxy so one command serves
      the landing page *and* every game under one origin (e.g. `/play/agario`),
      removing the multi-port juggling.
- [ ] **Open-in-modal option.** Play inside a lightbox overlay instead of navigating away.

## 5. Quality, a11y & SEO

- [ ] **Accessibility pass.** Verify focus order, visible focus rings on cards/buttons,
      `aria-label`s on artwork (partially done), and colour-contrast on every band.
- [x] **Open Graph / social cards.** Site-level `og:image` (a branded 1200×630 card
      generated from `assets/og-image.svg`) + OG/Twitter title/description. *(Per-game
      og:images still TODO.)*
- [x] **Performance.** Self-hosted the Google Fonts (latin subset, `css/fonts.css` +
      `fonts/`) to drop the third-party request. *(loading/decoding hints still TODO.)*
- [x] **Favicon + manifest.** SVG app icon (`favicon.svg`) + `theme-color`.
      *(Installable PWA shell still TODO.)*
- [ ] **No-JS fallback.** The catalogue currently renders via JS — add a `<noscript>`
      list or pre-render the sections so links work without scripts.

## 6. Tooling & deploy

- [ ] **Automated checks.** Lint HTML/CSS/JS and run an accessibility/contrast linter
      in CI; smoke-test that each game entry has the required fields.
- [ ] **Static hosting.** Deploy the landing page (GitHub Pages / Netlify / Cloudflare
      Pages); decide whether the games are bundled or linked externally.
- [ ] **Content config.** Optionally move the catalogue from `js/games.js` to a
      `games.json` file so non-developers can edit it.

---

## Quick wins (next session)

1. Animate the dioramas on scroll-in (motion polish, high visual payoff).
2. Add a third game + a third shape to prove the catalogue scales.
3. Reachability hint on Play buttons so a stopped game server is obvious.
4. Self-host fonts + add favicon/OG tags.
