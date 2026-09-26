(function () {
  const { h } = CQ;

  // Assign each unique letter a side (0-3, max 3 per side) so consecutive letters sit on different sides.
  function assign(word, rng) {
    const letters = [...new Set(word)];
    if (letters.length > 12) return null;
    for (let i = 1; i < word.length; i++) if (word[i] === word[i - 1]) return null;
    const conflicts = {};
    letters.forEach((l) => (conflicts[l] = new Set()));
    for (let i = 1; i < word.length; i++) {
      conflicts[word[i]].add(word[i - 1]);
      conflicts[word[i - 1]].add(word[i]);
    }
    const side = {}, count = [0, 0, 0, 0];
    const order = rng.shuffle(letters).sort((a, b) => conflicts[b].size - conflicts[a].size);
    function bt(i) {
      if (i === order.length) return true;
      const l = order[i];
      for (const s of rng.shuffle([0, 1, 2, 3])) {
        if (count[s] >= 3 || [...conflicts[l]].some((o) => side[o] === s)) continue;
        side[l] = s; count[s]++;
        if (bt(i + 1)) return true;
        delete side[l]; count[s]--;
      }
      return false;
    }
    return bt(0) ? side : null;
  }

  CQ.register({
    id: 'letterboxed',
    name: 'Letter Boxed',
    icon: '🔲',
    blurb: 'Trace the word around the box. Consecutive letters must come from different sides.',
    fits: (w) => !!assign(w, CQ.rng(w)),
    mount(root, ctx) {
      const W = ctx.word, rng = ctx.rng;
      const side = assign(W, rng);
      const sides = [[], [], [], []];
      Object.entries(side).forEach(([l, s]) => sides[s].push(l));
      const extras = rng.shuffle([...CQ.ALPHA].filter((l) => !side[l] && !'QXZJ'.includes(l)));
      sides.forEach((s) => { while (s.length < 3) s.push(extras.pop()); });
      const nodes = []; // {l, s, x, y}
      sides.forEach((s, si) => rng.shuffle(s).forEach((l, i) => {
        const t = 60 + i * 90;
        const [x, y] = [[t, 30], [270, t], [t, 270], [30, t]][si];
        nodes.push({ l, s: si, x, y });
      }));
      let path = [];
      let wrong = 0;
      const svgWrap = h('div', { class: 'lb-wrap' });
      const current = h('div', { class: 'lb-current' });

      function render() {
        const pts = path.map((i) => `${nodes[i].x},${nodes[i].y}`).join(' ');
        const used = new Set(path);
        svgWrap.innerHTML =
          `<svg viewBox="0 0 300 300" class="lb-svg"><rect x="30" y="30" width="240" height="240" class="lb-box"/>` +
          `<polyline points="${pts}" class="lb-line"/>` +
          nodes.map((n, i) => {
            const cls = (used.has(i) ? 'on' : '') + (path[path.length - 1] === i ? ' last' : '');
            return `<g class="lb-node ${cls}" data-i="${i}"><circle cx="${n.x}" cy="${n.y}" r="19"/>` +
              `<text x="${n.x}" y="${n.y}" text-anchor="middle" dominant-baseline="central">${n.l}</text>` +
              `<circle cx="${n.x}" cy="${n.y}" r="28" class="lb-hit"/></g>`;
          }).join('') + '</svg>';
        current.textContent = path.map((i) => nodes[i].l).join('') || ' ';
      }
      function tap(i) {
        if (ctx.done()) return;
        const last = path[path.length - 1];
        if (last === i) return path.pop(), render();
        if (last != null && nodes[last].s === nodes[i].s) return CQ.toast('Pick a letter from a different side');
        path.push(i);
        render();
      }
      function submit() {
        const s = path.map((i) => nodes[i].l).join('');
        if (s === W) return ctx.win(wrong ? `${wrong} wrong trace${wrong > 1 ? 's' : ''}` : 'first try');
        wrong++;
        CQ.shake(current);
        CQ.toast(s.length !== W.length ? `The answer has ${W.length} letters` : 'Not the word');
      }
      svgWrap.addEventListener('click', (e) => {
        const g = e.target.closest('.lb-node');
        if (g) tap(+g.dataset.i);
      });
      ctx.onKey((k) => {
        if (ctx.done()) return;
        if (/^[A-Z]$/.test(k)) {
          const last = path[path.length - 1];
          const i = nodes.findIndex((n) => n.l === k && (last == null || nodes[last].s !== n.s));
          if (i >= 0) tap(i);
        } else if (k === 'BACK') { path.pop(); render(); }
        else if (k === 'ENTER') submit();
      });
      root.append(
        CQ.clueBox(ctx.clue),
        h('p', { class: 'g-help' }, `${W.length} letters. Letters may be reused. Tap the last letter again to undo.`),
        current,
        svgWrap,
        h('div', { class: 'btn-row' },
          h('button', { class: 'btn', onclick: () => { path.pop(); render(); } }, 'Delete'),
          h('button', { class: 'btn', onclick: () => { path = []; render(); } }, 'Restart'),
          h('button', { class: 'btn primary', onclick: submit }, 'Submit')
        )
      );
      render();
    },
  });
})();
