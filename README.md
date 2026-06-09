# Games

A small landing page that links out to browser games — one full-height section
per game, with artwork and a description, modeled on the clean scroll-down style
of [moderngames.com](https://moderngames.com/).

## Run it

It's a static site (no build step). Serve the folder over HTTP:

```bash
python3 -m http.server 5500
# then open http://localhost:5500
```

## Adding a game

Edit `js/games.js` and append an entry to `window.GAMES`. The layout
(alternating sides, accent colour, scroll-reveal, nav link) is generated
automatically in `js/main.js`.

```js
{
  id: 'my-game',          // anchor slug
  title: 'My Game',
  tagline: 'One catchy line.',
  blurb: 'A sentence or two describing it.',
  tags: ['Genre', 'Tech'],
  accent: '#16c79a',      // section highlight colour
  href: 'http://localhost:3000',  // where the running game lives
  art: `<svg viewBox="0 0 600 460">…</svg>`,  // inline artwork
}
```

## Linked games

The Play buttons point at the games' own dev servers, so start those separately.
A game's button auto-detects whether its server is reachable (re-checking every
15s) and shows **Server Offline** when it isn't. Games without a web server (e.g.
Godot) use `href: null` and render a static info pill instead.

| Game           | Folder              | Start command                  | URL                     |
| -------------- | ------------------- | ------------------------------ | ----------------------- |
| Agar.io 2      | `../agario2`        | `npm install && npm start`     | `http://localhost:3000` |
| Space Pitfall  | `../space_pitfall`  | `python3 -m http.server 8000`  | `http://localhost:8000` |
| Plushy Quest   | `../plushy_quest`   | `godot --path .`               | desktop (Godot 4)       |
| Digital Circus | `../digital_circus` | `npm install && npm run dev`   | `http://localhost:5173` |

If you host the games elsewhere, update each entry's `href` in `js/games.js`.

## Files

- `index.html` — page shell, hero, footer.
- `css/style.css` — all styling (light theme, alternating sections).
- `js/games.js` — the game catalogue (data + inline SVG art).
- `js/main.js` — renders sections, nav, and scroll-reveal.
