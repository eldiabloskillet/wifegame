/* Shared helpers: seeded RNG, dates, DOM, on-screen keyboard, game registry. */
(function () {
  const CQ = (window.CQ = {});

  // ---------- Game registry ----------
  CQ.games = [];
  CQ.register = (game) => CQ.games.push(game);
  CQ.game = (id) => CQ.games.find((g) => g.id === id);

  // ---------- Seeded randomness ----------
  function hashStr(s) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    return h;
  }
  function mulberry32(a) {
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  CQ.rng = function (seed) {
    const next = mulberry32(hashStr(String(seed)));
    const r = {
      next,
      int: (n) => Math.floor(next() * n),
      range: (a, b) => a + Math.floor(next() * (b - a + 1)),
      pick: (arr) => arr[Math.floor(next() * arr.length)],
      shuffle(arr) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(next() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      },
    };
    return r;
  };

  // Letter frequencies (English) for realistic filler letters.
  const FREQ = 'EEEEEEEEEEEETTTTTTTTTAAAAAAAAOOOOOOOIIIIIIINNNNNNNSSSSSSHHHHHHRRRRRRDDDDLLLLCCCUUUMMMWWFFGGYYPPBVKJXQZ';
  CQ.randLetter = (rng) => FREQ[rng.int(FREQ.length)];
  CQ.ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  CQ.VOWELS = 'AEIOU';

  // ---------- Dates (viewer's local timezone) ----------
  // Preview another day with ?offset=1 (tomorrow) or ?date=2026-09-27. Preview play is kept out of stats.
  const params = new URLSearchParams(location.search);
  let shift = 0;
  if (/^-?\d+$/.test(params.get('offset') || '')) shift = +params.get('offset');
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(params.get('date') || '');
  if (m) {
    const t = new Date(), target = new Date(+m[1], m[2] - 1, +m[3]);
    shift = Math.round((target - new Date(t.getFullYear(), t.getMonth(), t.getDate())) / 864e5);
  }
  CQ.preview = shift !== 0;
  CQ.now = function () {
    const d = new Date();
    d.setDate(d.getDate() + shift);
    return d;
  };
  CQ.todayKey = function (d = CQ.now()) {
    const p = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  };
  CQ.dayNumber = function (d = CQ.now()) {
    const local = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const epoch = new Date(2026, 0, 1);
    return Math.round((local - epoch) / 864e5);
  };
  CQ.msUntilMidnight = function () {
    const now = new Date();
    const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    return next - now;
  };

  // ---------- DOM ----------
  CQ.h = function (tag, attrs, ...children) {
    const el = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v == null || v === false) continue;
        if (k === 'class') el.className = v;
        else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
        else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
        else if (k === 'html') el.innerHTML = v;
        else el.setAttribute(k, v === true ? '' : v);
      }
    }
    for (const c of children.flat()) {
      if (c == null || c === false) continue;
      el.append(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return el;
  };

  CQ.clueBox = (text, label = 'Clue') =>
    CQ.h('div', { class: 'g-clue' }, CQ.h('span', { class: 'g-clue-label' }, label), ' ', text);

  CQ.shake = function (el) {
    el.classList.remove('shake');
    void el.offsetWidth;
    el.classList.add('shake');
  };

  // ---------- Toasts ----------
  CQ.toast = function (msg, ms = 1600) {
    let wrap = document.getElementById('toasts');
    const t = CQ.h('div', { class: 'toast' }, msg);
    wrap.append(t);
    setTimeout(() => t.classList.add('out'), ms);
    setTimeout(() => t.remove(), ms + 300);
  };

  // ---------- On-screen keyboard ----------
  // onKey receives 'A'..'Z', 'ENTER' or 'BACK'.
  CQ.keyboard = function (onKey, opts = {}) {
    const rows = ['QWERTYUIOP', 'ASDFGHJKL', (opts.enter === false ? '' : '1') + 'ZXCVBNM2'];
    const keys = {};
    const root = CQ.h('div', { class: 'kb' });
    for (const row of rows) {
      const r = CQ.h('div', { class: 'kb-row' });
      for (const ch of row) {
        const label = ch === '1' ? 'Enter' : ch === '2' ? '⌫' : ch;
        const code = ch === '1' ? 'ENTER' : ch === '2' ? 'BACK' : ch;
        const b = CQ.h(
          'button',
          { class: 'kb-key' + (ch === '1' || ch === '2' ? ' wide' : ''), type: 'button' },
          label
        );
        b.addEventListener('click', () => onKey(code));
        keys[code] = b;
        r.append(b);
      }
      root.append(r);
    }
    const rank = { absent: 1, present: 2, correct: 3 };
    return {
      el: root,
      // Only upgrades (absent -> present -> correct) unless force is set.
      mark(letter, state, force) {
        const b = keys[letter];
        if (!b) return;
        const cur = b.dataset.state;
        if (!force && cur && rank[cur] >= rank[state]) return;
        b.dataset.state = state;
      },
      disable(letter) {
        keys[letter] && (keys[letter].disabled = true);
      },
    };
  };

  // Physical keyboard -> the currently active game.
  CQ.activeKeyHandler = null;
  document.addEventListener('keydown', (e) => {
    if (!CQ.activeKeyHandler || e.metaKey || e.ctrlKey || e.altKey) return;
    let k = null;
    if (/^[a-z]$/i.test(e.key)) k = e.key.toUpperCase();
    else if (e.key === 'Enter') k = 'ENTER';
    else if (e.key === 'Backspace' || e.key === 'Delete') k = 'BACK';
    else if (e.key.startsWith('Arrow')) k = e.key.slice(5).toUpperCase();
    else if (e.key === ' ') k = 'SPACE';
    if (!k) return;
    e.preventDefault();
    CQ.activeKeyHandler(k);
  });

  // Letter slots row (used by several games).
  CQ.slots = function (n) {
    const el = CQ.h('div', { class: 'slots' });
    const cells = [];
    for (let i = 0; i < n; i++) {
      const c = CQ.h('div', { class: 'slot' });
      cells.push(c);
      el.append(c);
    }
    return {
      el,
      cells,
      set(i, ch, cls) {
        cells[i].textContent = ch || '';
        cells[i].className = 'slot' + (ch ? ' filled' : '') + (cls ? ' ' + cls : '');
      },
    };
  };
})();
