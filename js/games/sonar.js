/* Battleship-style: the word is hidden in a straight line. Misses tell you how many word squares are adjacent. */
(function () {
  const { h } = CQ;
  const N = 8;

  CQ.register({
    id: 'sonar',
    name: 'Sonar',
    icon: '📡',
    blurb: 'Ping squares to find the hidden word. Misses show how many letters are touching that square.',
    fits: (w) => w.length <= N,
    mount(root, ctx) {
      const W = ctx.word, L = W.length, rng = ctx.rng;
      const horiz = rng.next() < 0.5;
      const r0 = horiz ? rng.int(N) : rng.int(N - L + 1);
      const c0 = horiz ? rng.int(N - L + 1) : rng.int(N);
      const at = {}; // idx -> letter index
      for (let i = 0; i < L; i++) at[(r0 + (horiz ? 0 : i)) * N + c0 + (horiz ? i : 0)] = i;
      let shots = 12 + Math.max(0, 8 - L);
      const shot = {}; // idx -> 'hit' | count
      let cur = '';
      const pings = shots;
      const gridEl = h('div', { class: 'so-grid', style: { gridTemplateColumns: `repeat(${N}, 1fr)` } });
      const slots = CQ.slots(L);
      const counter = h('div', { class: 'g-counter' });
      const input = h('div', { class: 'bt-input small' });
      const clueSlot = h('div', { class: 'g-hint-slot' }, h('span', { class: 'muted' }, 'The clue unlocks after 2 hits.'));

      function near(i) {
        const r = Math.floor(i / N), c = i % N;
        let n = 0;
        for (let dr = -1; dr <= 1; dr++)
          for (let dc = -1; dc <= 1; dc++) {
            const rr = r + dr, cc = c + dc;
            if ((dr || dc) && rr >= 0 && cc >= 0 && rr < N && cc < N && (rr * N + cc) in at) n++;
          }
        return n;
      }
      function render() {
        gridEl.replaceChildren(...Array.from({ length: N * N }, (_, i) => {
          const s = shot[i];
          const hit = s === 'hit';
          return h('button', {
            class: 'so-cell' + (hit ? ' hit' : s != null ? ' miss n' + s : ''),
            onclick: () => ping(i),
          }, hit ? W[at[i]] : s != null ? (s || '·') : '');
        }));
        [...W].forEach((ch, i) => slots.set(i, Object.keys(shot).some((k) => shot[k] === 'hit' && at[k] === i) ? ch : ''));
        counter.textContent = `Pings left: ${shots}`;
        input.textContent = cur || 'Type a guess any time and press Enter';
        input.classList.toggle('muted', !cur);
      }
      function ping(i) {
        if (ctx.done() || shot[i] != null) return;
        if (shots <= 0) return CQ.toast('No pings left — type your guess');
        shots--;
        shot[i] = i in at ? 'hit' : near(i);
        if (Object.values(shot).filter((s) => s === 'hit').length === 2) clueSlot.replaceChildren(CQ.clueBox(ctx.clue));
        render();
        if (Object.keys(at).every((k) => shot[k] === 'hit')) return ctx.win(`${pings - shots} pings`);
        if (shots <= 0) {
          CQ.toast('Out of pings — one last guess!');
        }
      }
      ctx.onKey((k) => {
        if (ctx.done()) return;
        if (/^[A-Z]$/.test(k) && cur.length < L) cur += k;
        else if (k === 'BACK') cur = cur.slice(0, -1);
        else if (k === 'ENTER' && cur) {
          if (cur === W) return ctx.win(`guessed after ${pings - shots} pings`);
          CQ.shake(input);
          cur = '';
          if (shots <= 0) { render(); return ctx.fail('lost at sea'); }
          shots--;
          CQ.toast('Wrong guess costs a ping');
        }
        render();
      });
      root.append(
        clueSlot,
        h('p', { class: 'g-help' }, `A ${L}-letter word lies in a straight line, across or down.`),
        slots.el, gridEl, counter, input
      );
      render();
    },
  });
})();
