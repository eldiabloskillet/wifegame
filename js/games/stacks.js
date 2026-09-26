/* Letter Stacks: take letters off the tops of the piles to spell the answer in order.
   Letters you don't need yet can be parked in a small holding tray. */
(function () {
  const { h } = CQ;
  const PILES = 4, TRAY = 3;

  // Can this layout be solved? Small DFS over (pile heights, tray, progress).
  function solvable(piles, W) {
    const seen = new Set();
    function dfs(hts, tray, pos) {
      if (pos === W.length) return true;
      const key = hts.join(',') + '|' + tray.slice().sort().join('') + '|' + pos;
      if (seen.has(key)) return false;
      seen.add(key);
      const t = tray.indexOf(W[pos]);
      if (t >= 0 && dfs(hts, tray.filter((_, i) => i !== t), pos + 1)) return true;
      for (let p = 0; p < PILES; p++) {
        if (!hts[p]) continue;
        const ch = piles[p][hts[p] - 1];
        const next = hts.slice();
        next[p]--;
        if (ch === W[pos]) { if (dfs(next, tray, pos + 1)) return true; }
        else if (tray.length < TRAY && dfs(next, [...tray, ch], pos)) return true;
      }
      return false;
    }
    return dfs(piles.map((p) => p.length), [], 0);
  }
  // Solvable without ever using the tray? Then it's too easy.
  function trivial(piles, W) {
    const hts = piles.map((p) => p.length);
    for (let pos = 0; pos < W.length; pos++) {
      const p = hts.findIndex((n, i) => n && piles[i][n - 1] === W[pos]);
      if (p < 0) return false;
      hts[p]--;
    }
    return true;
  }
  function build(W, rng) {
    const decoyCount = Math.max(4, W.length);
    for (let attempt = 0; attempt < 400; attempt++) {
      const decoys = Array.from({ length: decoyCount }, () => (rng.next() < 0.4 ? rng.pick([...W]) : CQ.randLetter(rng)));
      const tiles = rng.shuffle([...W, ...decoys]);
      const piles = Array.from({ length: PILES }, () => []);
      tiles.forEach((t, i) => piles[i % PILES].push(t));
      if (solvable(piles, W) && !trivial(piles, W)) return piles;
    }
    // Fallback: guaranteed solvable, word letters on top in order.
    return [...W].reverse().map((c) => [c]).concat([[], [], []]).slice(0, PILES);
  }

  CQ.register({
    id: 'stacks',
    name: 'Letter Stacks',
    icon: '🥞',
    blurb: 'Take letters off the tops of the piles to spell the answer. Park spare letters in the tray.',
    fits: (w) => w.length <= 8,
    mount(root, ctx) {
      const W = ctx.word;
      const original = build(W, ctx.rng);
      let piles, tray, pos, parked = 0, restarts = 0;
      const pilesEl = h('div', { class: 'sk-piles' });
      const trayEl = h('div', { class: 'sk-tray' });
      const slots = CQ.slots(W.length);
      const counter = h('div', { class: 'g-counter' });

      function restart() {
        piles = original.map((p) => p.slice());
        tray = Array(TRAY).fill(null); // fixed slots so letters never shift around
        pos = 0;
        render();
      }
      function stuck() {
        if (tray.includes(W[pos])) return false;
        if (piles.some((p) => p.length && p[p.length - 1] === W[pos])) return false;
        return !tray.includes(null) || piles.every((p) => !p.length);
      }
      function render() {
        pilesEl.replaceChildren(...piles.map((p, pi) =>
          h('div', { class: 'sk-pile' },
            ...p.map((ch, i) => h('button', {
              class: 'sk-tile' + (i === p.length - 1 ? ' sk-top' : ''),
              disabled: i !== p.length - 1,
              onclick: () => takePile(pi),
            }, ch)),
            p.length ? null : h('div', { class: 'sk-empty' }, 'empty')
          )
        ));
        trayEl.replaceChildren(...Array.from({ length: TRAY }, (_, i) =>
          tray[i] ? h('button', { class: 'sk-tile sk-top', onclick: () => takeTray(i) }, tray[i]) : h('div', { class: 'sk-hole' })
        ));
        [...W].forEach((ch, i) => slots.set(i, i < pos ? ch : '', i === pos ? 'next' : ''));
        counter.textContent = `Tray: ${tray.filter(Boolean).length}/${TRAY}`;
        if (!ctx.done() && pos < W.length && stuck()) CQ.toast('Stuck! Tap Restart to try again');
      }
      function use() {
        pos++;
        if (pos === W.length) {
          render();
          return ctx.win(restarts ? `${restarts} restart${restarts > 1 ? 's' : ''}` : `${parked} letters parked`);
        }
      }
      function takePile(pi) {
        if (ctx.done()) return;
        const p = piles[pi];
        const ch = p[p.length - 1];
        if (ch === W[pos]) { p.pop(); use(); }
        else if (tray.includes(null)) { p.pop(); tray[tray.indexOf(null)] = ch; parked++; }
        else return CQ.toast('The tray is full');
        render();
      }
      function takeTray(i) {
        if (ctx.done()) return;
        if (tray[i] !== W[pos]) return CQ.toast(`That's not the next letter`);
        tray[i] = null;
        use();
        render();
      }
      root.append(
        CQ.clueBox(ctx.clue),
        h('p', { class: 'g-help' }, `Tap a pile's top letter: if it's the next letter of the answer it goes into the word, otherwise it's parked in the tray (${TRAY} spaces). Plan ahead!`),
        slots.el,
        pilesEl,
        h('div', { class: 'sk-tray-label' }, 'Holding tray'),
        trayEl,
        counter,
        h('div', { class: 'btn-row' }, h('button', { class: 'btn', onclick: () => { restarts++; restart(); } }, 'Restart'))
      );
      restart();
    },
  });
})();
