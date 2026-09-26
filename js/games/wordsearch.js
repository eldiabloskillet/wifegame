(function () {
  const { h } = CQ;
  const DIRS = [[0, 1], [1, 0], [1, 1], [-1, 1], [0, -1], [-1, 0], [-1, -1], [1, -1]];

  function place(grid, N, w, rng, dirs) {
    for (let attempt = 0; attempt < 300; attempt++) {
      const [dr, dc] = rng.pick(dirs);
      const r0 = rng.int(N), c0 = rng.int(N);
      let ok = true;
      for (let i = 0; i < w.length && ok; i++) {
        const r = r0 + dr * i, c = c0 + dc * i;
        if (r < 0 || c < 0 || r >= N || c >= N || (grid[r][c] && grid[r][c] !== w[i])) ok = false;
      }
      if (!ok) continue;
      for (let i = 0; i < w.length; i++) grid[r0 + dr * i][c0 + dc * i] = w[i];
      return true;
    }
    return false;
  }

  CQ.register({
    id: 'wordsearch',
    name: 'Word Search',
    icon: '🔍',
    blurb: 'Find the one word in the grid that matches the clue.',
    fits: () => true,
    mount(root, ctx) {
      const N = 10, W = ctx.word, rng = ctx.rng;
      const grid = Array.from({ length: N }, () => Array(N).fill(null));
      place(grid, N, W, rng, DIRS);
      const decoys = rng.shuffle((window.WORDBANK || []).map((e) => e[0]).filter((w) => w.length >= 4 && w !== W)).slice(0, 7);
      const placedDecoys = decoys.filter((d) => place(grid, N, d, rng, DIRS));
      for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (!grid[r][c]) grid[r][c] = CQ.randLetter(rng);

      const gridEl = h('div', { class: 'ws-grid', style: { gridTemplateColumns: `repeat(${N}, 1fr)` } });
      const els = [];
      for (let r = 0; r < N; r++) {
        els.push([]);
        for (let c = 0; c < N; c++) {
          const el = h('div', { class: 'ws-cell', 'data-r': r, 'data-c': c }, grid[r][c]);
          els[r].push(el);
          gridEl.append(el);
        }
      }
      let anchor = null, end = null, dragging = false, moved = false;
      const found = new Set();

      function line(a, b) {
        if (!a || !b) return [];
        const dr = Math.sign(b.r - a.r), dc = Math.sign(b.c - a.c);
        const n = Math.max(Math.abs(b.r - a.r), Math.abs(b.c - a.c));
        if (!(a.r === b.r || a.c === b.c || Math.abs(b.r - a.r) === Math.abs(b.c - a.c))) return [a];
        return Array.from({ length: n + 1 }, (_, i) => ({ r: a.r + dr * i, c: a.c + dc * i }));
      }
      function paint() {
        els.flat().forEach((e) => e.classList.remove('sel'));
        line(anchor, end || anchor).forEach(({ r, c }) => els[r][c].classList.add('sel'));
      }
      function cellAt(e) {
        const t = document.elementFromPoint(e.clientX, e.clientY);
        if (!t || !t.classList.contains('ws-cell')) return null;
        return { r: +t.dataset.r, c: +t.dataset.c };
      }
      function evaluate() {
        const cells = line(anchor, end);
        const s = cells.map(({ r, c }) => grid[r][c]).join('');
        const rev = [...s].reverse().join('');
        if (s === W || rev === W) {
          cells.forEach(({ r, c }) => els[r][c].classList.add('found'));
          ctx.win(found.size ? `fooled by ${found.size} decoy${found.size > 1 ? 's' : ''}` : 'eagle eyes');
        } else if (placedDecoys.includes(s) || placedDecoys.includes(rev)) {
          const d = placedDecoys.includes(s) ? s : rev;
          cells.forEach(({ r, c }) => els[r][c].classList.add('decoy'));
          if (!found.has(d)) CQ.toast(`${d} is hiding here too — but it's not the answer`);
          found.add(d);
        } else if (cells.length > 1) CQ.shake(gridEl);
        anchor = end = null;
        paint();
      }
      gridEl.addEventListener('pointerdown', (e) => {
        if (ctx.done()) return;
        const c = cellAt(e);
        if (!c) return;
        e.preventDefault();
        if (anchor && !(anchor.r === c.r && anchor.c === c.c)) {
          end = c;
          return evaluate();
        }
        anchor = c; end = null; dragging = true; moved = false;
        paint();
      });
      gridEl.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        const c = cellAt(e);
        if (c && (c.r !== anchor.r || c.c !== anchor.c)) {
          end = c; moved = true;
          paint();
        }
      });
      window.addEventListener('pointerup', () => {
        if (!dragging) return;
        dragging = false;
        if (moved && end) evaluate();
      });

      root.append(
        CQ.clueBox(ctx.clue),
        h('p', { class: 'g-help' }, `The answer has ${W.length} letters and can run in any of 8 directions. Drag across it, or tap its first and last letters.`),
        gridEl
      );
    },
  });
})();
