/* Squaredle-style: the word is hidden as a path of touching letters (diagonals count). */
(function () {
  const { h } = CQ;

  function buildPath(N, L, rng) {
    const seen = new Set();
    const path = [];
    function dfs(r, c) {
      path.push([r, c]);
      seen.add(r * N + c);
      if (path.length === L) return true;
      const nb = [];
      for (let dr = -1; dr <= 1; dr++)
        for (let dc = -1; dc <= 1; dc++) {
          const rr = r + dr, cc = c + dc;
          if ((dr || dc) && rr >= 0 && cc >= 0 && rr < N && cc < N && !seen.has(rr * N + cc)) nb.push([rr, cc]);
        }
      for (const [rr, cc] of rng.shuffle(nb)) if (dfs(rr, cc)) return true;
      path.pop();
      seen.delete(r * N + c);
      return false;
    }
    for (let t = 0; t < 50; t++) if (dfs(rng.int(N), rng.int(N))) return path;
    return null;
  }

  CQ.register({
    id: 'trail',
    name: 'Letter Trail',
    icon: '🧵',
    blurb: 'Trace a path through touching letters to spell the word.',
    fits: (w) => w.length <= 9,
    mount(root, ctx) {
      const W = ctx.word, rng = ctx.rng;
      const N = W.length <= 6 ? 4 : 5;
      const grid = Array.from({ length: N }, () => Array(N).fill(''));
      buildPath(N, W.length, rng).forEach(([r, c], i) => (grid[r][c] = W[i]));
      // Filler: a mix of the word's own letters (to mislead) and common letters.
      for (let r = 0; r < N; r++)
        for (let c = 0; c < N; c++) if (!grid[r][c]) grid[r][c] = rng.next() < 0.4 ? rng.pick([...W]) : CQ.randLetter(rng);

      const wrap = h('div', { class: 'tr-wrap' });
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', `0 0 ${N} ${N}`);
      svg.setAttribute('class', 'tr-svg');
      const gridEl = h('div', { class: 'tr-grid', style: { gridTemplateColumns: `repeat(${N}, 1fr)` } });
      const els = [];
      for (let r = 0; r < N; r++)
        for (let c = 0; c < N; c++) {
          const el = h('div', { class: 'tr-cell', 'data-i': r * N + c }, h('span', null, grid[r][c]));
          els.push(el);
          gridEl.append(el);
        }
      wrap.append(svg, gridEl);
      const current = h('div', { class: 'lb-current' }, ' ');
      let wrong = 0;
      let path = [], dragging = false, dragAdds = 0;

      const adj = (a, b) => Math.abs(Math.floor(a / N) - Math.floor(b / N)) <= 1 && Math.abs((a % N) - (b % N)) <= 1;
      function render() {
        els.forEach((e, i) => e.classList.toggle('on', path.includes(i)));
        const pts = path.map((i) => `${(i % N) + 0.5},${Math.floor(i / N) + 0.5}`).join(' ');
        svg.innerHTML = `<polyline points="${pts}" class="tr-line"/>`;
        current.textContent = path.map((i) => grid[Math.floor(i / N)][i % N]).join('') || ' ';
      }
      function touch(i) {
        const last = path[path.length - 1];
        if (path.length >= 2 && path[path.length - 2] === i) { path.pop(); render(); return true; }
        if (last === i || path.includes(i)) return false;
        if (last != null && !adj(last, i)) return false;
        path.push(i);
        render();
        return true;
      }
      function submit() {
        const s = path.map((i) => grid[Math.floor(i / N)][i % N]).join('');
        if (s === W) return ctx.win(wrong ? `${wrong} wrong trail${wrong > 1 ? 's' : ''}` : 'first try');
        if (path.length > 1) {
          wrong++;
          CQ.shake(current);
          CQ.toast(s.length !== W.length ? `The answer has ${W.length} letters` : 'Not the word');
        }
        path = [];
        render();
      }
      const idx = (e) => {
        const t = document.elementFromPoint(e.clientX, e.clientY);
        const cell = t && t.closest('.tr-cell');
        return cell ? +cell.dataset.i : null;
      };
      gridEl.addEventListener('pointerdown', (e) => {
        if (ctx.done()) return;
        const i = idx(e);
        if (i == null) return;
        e.preventDefault();
        if (path.length && path[path.length - 1] !== i && !adj(path[path.length - 1], i) && !path.includes(i)) path = [];
        dragging = true;
        dragAdds = 0;
        touch(i);
      });
      gridEl.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        // Only register when near a cell centre, so diagonals are easy to hit.
        const t = document.elementFromPoint(e.clientX, e.clientY);
        const cell = t && t.closest('.tr-cell');
        if (!cell) return;
        const b = cell.getBoundingClientRect();
        const dx = e.clientX - (b.left + b.width / 2), dy = e.clientY - (b.top + b.height / 2);
        if (Math.hypot(dx, dy) > b.width * 0.38) return;
        if (touch(+cell.dataset.i)) dragAdds++;
      });
      window.addEventListener('pointerup', () => {
        if (!dragging) return;
        dragging = false;
        if (dragAdds > 0) submit();
      });
      ctx.onKey((k) => {
        if (ctx.done()) return;
        if (k === 'ENTER') submit();
        else if (k === 'BACK') { path.pop(); render(); }
      });
      root.append(
        CQ.clueBox(ctx.clue),
        h('p', { class: 'g-help' }, `${W.length} letters. Drag through the letters, or tap them one by one and press Submit. Each square is used once.`),
        current,
        wrap,
        h('div', { class: 'btn-row' },
          h('button', { class: 'btn', onclick: () => { path = []; render(); } }, 'Clear'),
          h('button', { class: 'btn primary', onclick: submit }, 'Submit')
        )
      );
    },
  });
})();
