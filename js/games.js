/**
 * Game catalogue. Each entry renders as one full-height section on the page.
 * To add a game, append an object here — the layout (alternating sides,
 * accent colour, scroll reveal, palette band) is handled automatically.
 *
 * Fields:
 *   id, title, tagline, blurb, tags, accent, href  — see usage below.
 *   art — inline SVG: a game diorama in the style of moderngames.com. Each game
 *         uses a DIFFERENT container shape (circle, diamond, heart, …) holding a
 *         scene split into two angled faces with a lit top rim and soft shadow.
 *         The shape floats directly on the section's colour band (no panel).
 */

/**
 * Full-bleed background colour behind each game section, cycled by index.
 * `dark: true` switches that section's text/pills to light for contrast.
 */
window.PALETTE = [
  { bg: '#ff9ec1', dark: false }, // pink
  { bg: '#5ec6f2', dark: false }, // light blue
  { bg: '#0e1116', dark: true  }, // black
  { bg: '#ffd44d', dark: false }, // yellow
];

window.GAMES = [
  {
    id: 'agario',
    title: 'Agar.io 2',
    tagline: 'Eat. Grow. Don’t get eaten.',
    blurb:
      'A real-time multiplayer cell-eating arena. Steer your blob with the mouse, ' +
      'swallow pellets and smaller players to grow, and dodge anyone bigger. ' +
      'An authoritative Node server runs the simulation; the browser just renders ' +
      'the snapshots it streams over WebSockets.',
    tags: ['Multiplayer', 'Arcade', 'WebSockets'],
    accent: '#0a7d63',
    href: 'http://localhost:3000',
    art: `
      <svg viewBox="0 0 600 520" role="img" aria-label="A circular arena of colorful cells">
        <defs>
          <clipPath id="ag_shape"><circle cx="300" cy="290" r="205"/></clipPath>
          <linearGradient id="ag_left" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#10463d"/><stop offset="100%" stop-color="#07211d"/>
          </linearGradient>
          <linearGradient id="ag_right" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#15564a"/><stop offset="100%" stop-color="#0a2a24"/>
          </linearGradient>
          <linearGradient id="ag_top" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#ffffff" stop-opacity=".4"/>
            <stop offset="34%" stop-color="#ffffff" stop-opacity="0"/>
          </linearGradient>
          <pattern id="ag_grid" width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M34 0H0V34" fill="none" stroke="#ffffff" stroke-opacity=".05" stroke-width="1.5"/>
          </pattern>
          <filter id="ag_shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="20" stdDeviation="20" flood-color="#062c25" flood-opacity=".35"/>
          </filter>
        </defs>
        <g class="diorama" filter="url(#ag_shadow)">
          <g clip-path="url(#ag_shape)">
            <rect x="0" y="80" width="300" height="430" fill="url(#ag_left)"/>
            <rect x="300" y="80" width="300" height="430" fill="url(#ag_right)"/>
            <rect x="0" y="80" width="600" height="430" fill="url(#ag_grid)"/>

            <!-- pellets -->
            <g class="anim-twinkle-group">
              <circle cx="175" cy="185" r="6" fill="#f7d154"/>
              <circle cx="420" cy="180" r="6" fill="#ef6f6c"/>
              <circle cx="455" cy="300" r="6" fill="#6ca0ef"/>
              <circle cx="150" cy="320" r="6" fill="#c06cef"/>
              <circle cx="300" cy="150" r="5" fill="#6cefc1"/>
              <circle cx="225" cy="400" r="6" fill="#f7a154"/>
              <circle cx="375" cy="400" r="5" fill="#6cefef"/>
              <circle cx="350" cy="220" r="5" fill="#f7d154"/>
            </g>
            <!-- small players -->
            <g class="anim-drift-a">
              <circle cx="400" cy="325" r="30" fill="#ef6f6c"/>
              <circle cx="400" cy="325" r="30" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="3"/>
              <text x="400" y="330" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="12" fill="#fff">zix</text>
            </g>
            <g class="anim-drift-b">
              <circle cx="190" cy="235" r="23" fill="#6ca0ef"/>
              <circle cx="190" cy="235" r="23" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="3"/>
              <text x="190" y="240" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="10" fill="#fff">ovo</text>
            </g>
            <!-- you -->
            <g class="anim-pulse">
              <circle cx="300" cy="295" r="66" fill="#1fe0ad"/>
              <circle cx="300" cy="295" r="66" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="4"/>
              <circle cx="279" cy="280" r="8" fill="#07211d"/>
              <circle cx="321" cy="280" r="8" fill="#07211d"/>
              <path d="M276 313 q24 22 48 0" fill="none" stroke="#07211d" stroke-width="5" stroke-linecap="round"/>
            </g>

            <!-- folded faces + lit top -->
            <rect x="300" y="80" width="300" height="430" fill="#000" fill-opacity=".14"/>
            <rect x="0" y="80" width="600" height="430" fill="url(#ag_top)"/>
            <line x1="300" y1="90" x2="300" y2="490" stroke="#fff" stroke-opacity=".12" stroke-width="2"/>
          </g>
          <circle cx="300" cy="290" r="205" fill="none" stroke="#bff4e6" stroke-opacity=".5" stroke-width="3"/>
        </g>
      </svg>`,
  },
  {
    id: 'space-pitfall',
    title: 'Space Pitfall',
    tagline: 'Pitfall! — in orbit.',
    blurb:
      'A space-themed platformer. Pilot an astronaut across hostile sectors: jump ' +
      'chasms, swing across the void on an energy tether, dodge crawling aliens and ' +
      'rolling asteroids, and grab every crystal before the clock runs out. Pure ' +
      'vanilla JavaScript and HTML5 Canvas — no build step, no dependencies.',
    tags: ['Platformer', 'Single-player', 'Canvas'],
    accent: '#5b3df2',
    href: 'http://localhost:8000',
    art: `
      <svg viewBox="0 0 600 520" role="img" aria-label="A diamond-shaped space scene with an astronaut">
        <defs>
          <clipPath id="sp_shape"><path d="M300 75 L525 290 L300 505 L75 290 Z"/></clipPath>
          <linearGradient id="sp_left" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#2a1c64"/><stop offset="100%" stop-color="#0b0824"/>
          </linearGradient>
          <linearGradient id="sp_right" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#5a2168"/><stop offset="100%" stop-color="#1c0c33"/>
          </linearGradient>
          <linearGradient id="sp_top" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#ffffff" stop-opacity=".32"/>
            <stop offset="36%" stop-color="#ffffff" stop-opacity="0"/>
          </linearGradient>
          <radialGradient id="sp_planet" cx="35%" cy="35%" r="70%">
            <stop offset="0%" stop-color="#ff9d6c"/><stop offset="100%" stop-color="#c0506c"/>
          </radialGradient>
          <filter id="sp_shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="20" stdDeviation="20" flood-color="#1c1038" flood-opacity=".4"/>
          </filter>
        </defs>
        <g class="diorama" filter="url(#sp_shadow)">
          <g clip-path="url(#sp_shape)">
            <rect x="0" y="70" width="300" height="440" fill="url(#sp_left)"/>
            <rect x="300" y="70" width="300" height="440" fill="url(#sp_right)"/>

            <!-- stars -->
            <g class="anim-twinkle-group" fill="#fff">
              <circle cx="220" cy="180" r="2"/><circle cx="270" cy="155" r="1.5"/>
              <circle cx="180" cy="240" r="1.5"/><circle cx="330" cy="200" r="2"/>
              <circle cx="150" cy="305" r="1.5"/><circle cx="420" cy="255" r="1.5"/>
              <circle cx="280" cy="330" r="1.5"/><circle cx="360" cy="300" r="2"/>
            </g>
            <!-- planet -->
            <circle cx="360" cy="235" r="38" fill="url(#sp_planet)"/>
            <ellipse cx="360" cy="235" rx="56" ry="14" fill="none" stroke="#ffb27c" stroke-opacity=".5" stroke-width="5" transform="rotate(-18 360 235)"/>
            <!-- platforms -->
            <rect x="158" y="360" width="125" height="22" rx="7" fill="#2c2466"/>
            <rect x="158" y="360" width="125" height="7" rx="4" fill="#4a3da0"/>
            <rect x="322" y="334" width="140" height="22" rx="7" fill="#3a1f55"/>
            <rect x="322" y="334" width="140" height="7" rx="4" fill="#6a3d90"/>
            <!-- tether -->
            <path class="anim-flow" d="M300 158 L272 272" stroke="#9d8cff" stroke-width="3" stroke-dasharray="6 6"/>
            <circle cx="300" cy="158" r="5" fill="#9d8cff"/>
            <!-- crystal -->
            <g class="anim-twinkle" transform="translate(392 332)">
              <path d="M0 -20 L12 0 L0 20 L-12 0 Z" fill="#6cefef"/>
              <path d="M0 -20 L12 0 L0 0 Z" fill="#a6f6f6"/>
            </g>
            <!-- astronaut -->
            <g class="anim-bob"><g transform="translate(250 250)">
              <ellipse cx="0" cy="42" rx="20" ry="7" fill="#000" opacity=".25"/>
              <rect x="-15" y="-6" width="30" height="38" rx="13" fill="#eef1ff"/>
              <circle cx="0" cy="-21" r="19" fill="#eef1ff"/>
              <path d="M-12 -23 a12 12 0 0 1 24 0 z" fill="#2c2466"/>
              <circle cx="4" cy="-25" r="4" fill="#9d8cff" opacity=".9"/>
              <rect x="-24" y="2" width="11" height="24" rx="5" fill="#eef1ff" transform="rotate(-30 -18 14)"/>
              <rect x="13" y="2" width="11" height="24" rx="5" fill="#eef1ff" transform="rotate(28 18 14)"/>
              <rect x="-11" y="30" width="10" height="20" rx="5" fill="#eef1ff"/>
              <rect x="2" y="30" width="10" height="20" rx="5" fill="#eef1ff"/>
            </g></g>

            <!-- folded faces + lit top -->
            <rect x="300" y="70" width="300" height="440" fill="#000" fill-opacity=".12"/>
            <rect x="0" y="70" width="600" height="440" fill="url(#sp_top)"/>
            <line x1="300" y1="80" x2="300" y2="500" stroke="#fff" stroke-opacity=".12" stroke-width="2"/>
          </g>
          <path d="M300 75 L525 290 L300 505 L75 290 Z" fill="none" stroke="#d6cdff" stroke-opacity=".5" stroke-width="3"/>
        </g>
      </svg>`,
  },
  {
    id: 'plushy-quest',
    title: 'Plushy Quest',
    tagline: 'Tiny plushies. Big adventure.',
    blurb:
      'A top-down action-adventure starring plushy heroes — pick Dino, Teddy, ' +
      'Penguin, or Squishmellon and explore a walkable overworld with an ' +
      'eight-directional hero, a sword swipe, wandering enemies, and a hearts HUD. ' +
      'Built in Godot 4 with every graphic drawn procedurally — no art assets.',
    tags: ['Top-down', 'Adventure', 'Godot 4'],
    accent: '#ffc14d',
    href: null,
    cta: 'Open in Godot 4',
    art: `
      <svg viewBox="0 0 600 520" role="img" aria-label="A heart-shaped overworld with a plushy hero">
        <defs>
          <clipPath id="pq_shape"><path d="M300 158C300 120 256 84 196 84 112 84 78 156 78 206 78 280 168 372 300 462 432 372 522 280 522 206 522 156 488 84 404 84 344 84 300 120 300 158Z"/></clipPath>
          <linearGradient id="pq_left" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3f9a49"/><stop offset="100%" stop-color="#2b6e35"/></linearGradient>
          <linearGradient id="pq_right" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#49a851"/><stop offset="100%" stop-color="#347d3f"/></linearGradient>
          <linearGradient id="pq_top" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffffff" stop-opacity=".3"/><stop offset="36%" stop-color="#ffffff" stop-opacity="0"/></linearGradient>
          <filter id="pq_shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="20" stdDeviation="20" flood-color="#143619" flood-opacity=".45"/></filter>
        </defs>
        <g class="diorama" filter="url(#pq_shadow)">
          <g clip-path="url(#pq_shape)">
            <rect x="0" y="80" width="300" height="430" fill="url(#pq_left)"/>
            <rect x="300" y="80" width="300" height="430" fill="url(#pq_right)"/>
            <!-- dirt path -->
            <path d="M250 90 C 230 180 340 230 300 320 C 275 380 300 430 300 470" fill="none" stroke="#bb9152" stroke-width="34" stroke-linecap="round"/>
            <path d="M250 90 C 230 180 340 230 300 320 C 275 380 300 430 300 470" fill="none" stroke="#dcb877" stroke-width="22" stroke-linecap="round"/>
            <!-- bushes -->
            <g fill="#256b2f">
              <circle cx="150" cy="185" r="22"/><circle cx="182" cy="198" r="16"/>
              <circle cx="442" cy="220" r="24"/><circle cx="414" cy="236" r="15"/>
              <circle cx="165" cy="355" r="20"/><circle cx="430" cy="360" r="22"/>
            </g>
            <!-- flowers -->
            <g class="anim-twinkle-group">
              <circle cx="212" cy="250" r="4" fill="#f2d04b"/>
              <circle cx="392" cy="180" r="4" fill="#ef6f9c"/>
              <circle cx="360" cy="300" r="4" fill="#f2d04b"/>
              <circle cx="232" cy="360" r="4" fill="#ffffff"/>
              <circle cx="402" cy="330" r="4" fill="#ef6f9c"/>
              <circle cx="200" cy="150" r="3" fill="#ffffff"/>
            </g>
            <!-- hearts HUD -->
            <g class="anim-twinkle" fill="#ef4b5e">
              <g transform="translate(280 148)"><circle cx="-4" cy="-2" r="5"/><circle cx="4" cy="-2" r="5"/><path d="M-8 0 L8 0 L0 11 Z"/></g>
              <g transform="translate(306 148)"><circle cx="-4" cy="-2" r="5"/><circle cx="4" cy="-2" r="5"/><path d="M-8 0 L8 0 L0 11 Z"/></g>
              <g transform="translate(332 148)"><circle cx="-4" cy="-2" r="5"/><circle cx="4" cy="-2" r="5"/><path d="M-8 0 L8 0 L0 11 Z"/></g>
            </g>
            <!-- wandering enemy -->
            <g class="anim-drift-a"><g transform="translate(408 300)">
              <ellipse cx="0" cy="6" rx="16" ry="13" fill="#8e5cff"/>
              <circle cx="-5" cy="2" r="3" fill="#fff"/><circle cx="5" cy="2" r="3" fill="#fff"/>
              <circle cx="-5" cy="2" r="1.5" fill="#2a1a3a"/><circle cx="5" cy="2" r="1.5" fill="#2a1a3a"/>
            </g></g>
            <!-- plushy hero (teddy) -->
            <g class="anim-bob"><g transform="translate(296 300)">
              <ellipse cx="0" cy="26" rx="20" ry="6" fill="#000" opacity=".25"/>
              <ellipse cx="0" cy="6" rx="24" ry="26" fill="#a9713e"/>
              <circle cx="-16" cy="-34" r="9" fill="#a9713e"/><circle cx="16" cy="-34" r="9" fill="#a9713e"/>
              <circle cx="-16" cy="-34" r="4" fill="#d8a778"/><circle cx="16" cy="-34" r="4" fill="#d8a778"/>
              <circle cx="0" cy="-18" r="22" fill="#c08552"/>
              <circle cx="-8" cy="-20" r="3" fill="#2a1a0e"/><circle cx="8" cy="-20" r="3" fill="#2a1a0e"/>
              <ellipse cx="0" cy="-10" rx="6" ry="4" fill="#e6c79b"/>
              <circle cx="0" cy="-12" r="2" fill="#2a1a0e"/>
              <rect x="22" y="-10" width="5" height="30" rx="2" fill="#cdd6e0" transform="rotate(24 24 5)"/>
              <rect x="19" y="14" width="11" height="4" rx="2" fill="#7a5a2e" transform="rotate(24 24 16)"/>
            </g></g>
            <!-- folded faces + lit top -->
            <rect x="300" y="80" width="300" height="430" fill="#000" fill-opacity=".1"/>
            <rect x="0" y="80" width="600" height="430" fill="url(#pq_top)"/>
            <line x1="300" y1="90" x2="300" y2="490" stroke="#fff" stroke-opacity=".08" stroke-width="2"/>
          </g>
          <path d="M300 158C300 120 256 84 196 84 112 84 78 156 78 206 78 280 168 372 300 462 432 372 522 280 522 206 522 156 488 84 404 84 344 84 300 120 300 158Z" fill="none" stroke="#cdeccf" stroke-opacity=".5" stroke-width="3"/>
        </g>
      </svg>`,
  },
  {
    id: 'digital-circus',
    title: 'Digital Circus',
    tagline: 'Hop the void. Grab the gems.',
    blurb:
      'A 3D adventure side-scroller (2.5D). Play as Pomni, hopping across floating ' +
      'platforms and collecting gems while circus characters look on. Built with ' +
      'Three.js, TypeScript, and Vite from original placeholder geometry. ' +
      'A non-commercial fan project — not affiliated with the rights holders.',
    tags: ['Side-scroller', 'Three.js', 'Fan project'],
    accent: '#a21caf',
    href: 'http://localhost:5173',
    art: `
      <svg viewBox="0 0 600 520" role="img" aria-label="A hexagon-shaped circus scene with a jester">
        <defs>
          <clipPath id="dc_shape"><path d="M85 290 L193 104 L407 104 L515 290 L407 476 L193 476 Z"/></clipPath>
          <linearGradient id="dc_left" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3a1145"/><stop offset="100%" stop-color="#190826"/></linearGradient>
          <linearGradient id="dc_right" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5a1550"/><stop offset="100%" stop-color="#2a0a33"/></linearGradient>
          <linearGradient id="dc_top" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffffff" stop-opacity=".3"/><stop offset="38%" stop-color="#ffffff" stop-opacity="0"/></linearGradient>
          <radialGradient id="dc_spot" cx="50%" cy="0%" r="85%"><stop offset="0%" stop-color="#ffe9a8" stop-opacity=".55"/><stop offset="100%" stop-color="#ffe9a8" stop-opacity="0"/></radialGradient>
          <filter id="dc_shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="20" stdDeviation="20" flood-color="#190826" flood-opacity=".45"/></filter>
        </defs>
        <g class="diorama" filter="url(#dc_shadow)">
          <g clip-path="url(#dc_shape)">
            <rect x="0" y="100" width="300" height="380" fill="url(#dc_left)"/>
            <rect x="300" y="100" width="300" height="380" fill="url(#dc_right)"/>
            <!-- spotlight -->
            <path d="M300 104 L208 472 L392 472 Z" fill="url(#dc_spot)"/>
            <!-- confetti -->
            <g class="anim-twinkle-group">
              <circle cx="182" cy="182" r="4" fill="#ff5d8f"/>
              <circle cx="420" cy="190" r="4" fill="#5db8ff"/>
              <circle cx="242" cy="150" r="3" fill="#ffd84d"/>
              <circle cx="378" cy="160" r="3" fill="#6cefc1"/>
              <circle cx="162" cy="300" r="4" fill="#ffd84d"/>
              <circle cx="448" cy="300" r="3" fill="#ff5d8f"/>
              <circle cx="300" cy="138" r="3" fill="#ffffff"/>
              <circle cx="430" cy="380" r="4" fill="#5db8ff"/>
            </g>
            <!-- platforms -->
            <rect x="175" y="360" width="120" height="20" rx="8" fill="#6a2a86"/>
            <rect x="175" y="360" width="120" height="6" rx="3" fill="#9a4ab8"/>
            <rect x="315" y="334" width="120" height="20" rx="8" fill="#7a2a5a"/>
            <rect x="315" y="334" width="120" height="6" rx="3" fill="#b84a86"/>
            <!-- gem -->
            <g class="anim-twinkle" transform="translate(375 332)">
              <path d="M0 -16 L11 0 L0 16 L-11 0 Z" fill="#36e0e0"/>
              <path d="M0 -16 L11 0 L0 0 Z" fill="#8ff3f3"/>
            </g>
            <!-- Pomni (jester) -->
            <g class="anim-bob"><g transform="translate(255 312)">
              <ellipse cx="0" cy="34" rx="16" ry="5" fill="#000" opacity=".3"/>
              <path d="M-12 6 Q0 -2 12 6 L8 30 Q0 34 -8 30 Z" fill="#f1f1f8"/>
              <circle cx="0" cy="-10" r="17" fill="#f7f7fc"/>
              <path d="M-10 -15 l7 7 M-3 -15 l-7 7" stroke="#1a1430" stroke-width="2" stroke-linecap="round"/>
              <circle cx="6" cy="-11" r="3.5" fill="none" stroke="#1a1430" stroke-width="2"/>
              <path d="M-15 -20 L-23 -40 L-5 -25 Z" fill="#ff3b5c"/>
              <path d="M15 -20 L23 -40 L5 -25 Z" fill="#3b7bff"/>
              <circle cx="-23" cy="-40" r="3.5" fill="#ffd84d"/>
              <circle cx="23" cy="-40" r="3.5" fill="#ffd84d"/>
            </g></g>
            <!-- folded faces + lit top -->
            <rect x="300" y="100" width="300" height="380" fill="#000" fill-opacity=".12"/>
            <rect x="0" y="100" width="600" height="380" fill="url(#dc_top)"/>
            <line x1="300" y1="110" x2="300" y2="470" stroke="#fff" stroke-opacity=".1" stroke-width="2"/>
          </g>
          <path d="M85 290 L193 104 L407 104 L515 290 L407 476 L193 476 Z" fill="none" stroke="#e6b8ff" stroke-opacity=".5" stroke-width="3"/>
        </g>
      </svg>`,
  },
];
