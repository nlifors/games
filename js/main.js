/* Renders the game sections from window.GAMES and wires up nav + scroll reveal. */
(function () {
  'use strict';

  var games = window.GAMES || [];
  var palette = window.PALETTE || [{ bg: '#ffffff', dark: false }];
  var gamesEl = document.getElementById('games');
  var navEl = document.getElementById('site-nav');
  var serverButtons = []; // { play, game } — re-pinged on an interval

  games.forEach(function (game, i) {
    gamesEl.appendChild(buildSection(game, i));
    navEl.appendChild(buildNavLink(game));
  });

  // Check server reachability now, then re-check periodically so buttons
  // recover automatically when a game server comes back up (or goes down).
  refreshServers();
  if (serverButtons.length) setInterval(refreshServers, 15000);

  // Resolves true if the server answers (even an opaque/no-cors response),
  // false on connection error or timeout — we only care that the port is alive.
  function pingServer(url) {
    if (!url || !window.fetch) return Promise.resolve(true);
    return new Promise(function (resolve) {
      var done = false;
      var finish = function (ok) {
        if (done) return;
        done = true;
        resolve(ok);
      };
      var timer = setTimeout(function () { finish(false); }, 4000);
      fetch(url, { mode: 'no-cors', cache: 'no-store' })
        .then(function () { clearTimeout(timer); finish(true); })
        .catch(function () { clearTimeout(timer); finish(false); });
    });
  }

  // Ping every registered server and update its button both ways.
  function refreshServers() {
    serverButtons.forEach(function (entry) {
      pingServer(entry.game.href).then(function (online) {
        if (online) restoreOnline(entry.play, entry.game);
        else markOffline(entry.play, entry.game);
      });
    });
  }

  function markOffline(play, game) {
    if (play.classList.contains('is-offline')) return; // already offline
    play.classList.add('is-offline');
    play.textContent = 'Server Offline';
    play.setAttribute('aria-label', game.title + ' server is offline');
    play.setAttribute('aria-disabled', 'true');
    play.setAttribute('title', 'Not reachable at ' + game.href);
    play.removeAttribute('href'); // make it non-navigable
  }

  function restoreOnline(play, game) {
    if (!play.classList.contains('is-offline')) return; // already online
    play.classList.remove('is-offline');
    play.textContent = 'Play ' + game.title;
    play.setAttribute('aria-label', 'Play ' + game.title);
    play.removeAttribute('aria-disabled');
    play.removeAttribute('title');
    play.href = game.href;
  }

  function buildNavLink(game) {
    var a = document.createElement('a');
    a.href = '#' + game.id;
    a.className = 'nav-link';
    a.textContent = game.title;
    return a;
  }

  function buildSection(game, index) {
    var theme = palette.length ? palette[index % palette.length] : { bg: '#fff', dark: false };
    var bg = game.bg || theme.bg;
    var dark = game.dark != null ? game.dark : theme.dark;

    // Show a watermark on alternating games; cycle a distinct pattern each time.
    var patterns = ['pat-hex', 'pat-diagonal', 'pat-diamond', 'pat-dots'];
    var watermark = index % 2 === 0 ? patterns[Math.floor(index / 2) % patterns.length] : '';

    var section = document.createElement('section');
    section.className =
      'game' +
      (index % 2 ? ' game--reverse' : '') +
      (dark ? ' game--dark' : '') +
      (watermark ? ' ' + watermark : '');
    section.id = game.id;
    section.style.setProperty('--accent', game.accent);
    section.style.background = bg;

    var inner = document.createElement('div');
    inner.className = 'game-inner';

    var art = document.createElement('div');
    art.className = 'game-art';
    art.innerHTML = game.art;

    var body = document.createElement('div');
    body.className = 'game-body';

    var num = document.createElement('span');
    num.className = 'game-num';
    num.textContent = String(index + 1).padStart(2, '0');

    var h2 = document.createElement('h2');
    h2.className = 'game-title';
    h2.textContent = game.title;

    var tagline = document.createElement('p');
    tagline.className = 'game-tagline';
    tagline.textContent = game.tagline;

    var blurb = document.createElement('p');
    blurb.className = 'game-blurb';
    blurb.textContent = game.blurb;

    var tags = document.createElement('ul');
    tags.className = 'game-tags';
    (game.tags || []).forEach(function (t) {
      var li = document.createElement('li');
      li.textContent = t;
      tags.appendChild(li);
    });

    var play;
    if (game.href) {
      // Web game — a real link, ping its server for reachability.
      play = document.createElement('a');
      play.className = 'game-play';
      play.href = game.href;
      play.textContent = 'Play ' + game.title;
      play.setAttribute('aria-label', 'Play ' + game.title);
      serverButtons.push({ play: play, game: game });
    } else {
      // Non-web game (e.g. desktop / Godot) — static info pill, not pinged.
      play = document.createElement('span');
      play.className = 'game-play game-play--static';
      play.textContent = game.cta || 'Desktop game';
    }

    body.append(num, h2, tagline, blurb, tags, play);
    inner.append(art, body);
    section.append(inner);
    return section;
  }

  // Reveal sections as they scroll into view.
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll('.game').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.game').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
