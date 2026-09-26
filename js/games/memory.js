/* Concentration: match pairs of cards. Each letter pair drops into its numbered slot. */
(function () {
  const { h } = CQ;
  const DECOYS = ['★', '☀', '♣', '♦', '☂', '✿', '♪', '☾'];

  CQ.register({
    id: 'memory',
    name: 'Memory Match',
    icon: '🃏',
    blurb: 'Flip cards to find matching pairs. Letter pairs fill in the word. Solve it early by typing.',
    fits: (w) => w.length <= 8,
    mount(root, ctx) {
      const W = ctx.word, L = W.length, rng = ctx.rng;
      const faces = [...W].map((ch, i) => ({ key: 'L' + i, label: ch, pos: i + 1 }));
      for (let i = 0; faces.length < 8; i++) faces.push({ key: 'D' + i, label: DECOYS[i] });
      const cards = rng.shuffle([...faces, ...faces].map((f) => ({ ...f, up: false, gone: false })));
      const slots = CQ.slots(L);
      const gridEl = h('div', { class: 'mm-grid' });
      const input = h('div', { class: 'bt-input small' });
      const counter = h('div', { class: 'g-counter' });
      let open = [], flips = 0, busy = false, cur = '';
      const got = new Set();
      const need = Math.ceil(L / 2);
      const clueSlot = h('div', { class: 'g-hint-slot' }, h('span', { class: 'muted' }, `The clue unlocks after ${need} letters are matched.`));

      function render() {
        gridEl.replaceChildren(...cards.map((c, i) =>
          h('button', { class: 'mm-card' + (c.up || c.gone ? ' up' : '') + (c.gone ? ' gone' : ''), onclick: () => flip(i) },
            h('span', { class: 'mm-back' }, '?'),
            h('span', { class: 'mm-face' }, c.label, c.pos ? h('small', null, c.pos) : null)
          )
        ));
        [...W].forEach((ch, i) => slots.set(i, got.has(i) ? ch : ''));
        counter.textContent = `Flips: ${flips}`;
        input.textContent = cur ? cur : 'Know it? Type it and press Enter';
        input.classList.toggle('muted', !cur);
      }
      function flip(i) {
        const c = cards[i];
        if (ctx.done() || busy || c.up || c.gone) return;
        c.up = true;
        open.push(c);
        if (open.length === 2) {
          flips++;
          const [a, b] = open;
          busy = true;
          setTimeout(() => {
            if (a.key === b.key) {
              a.gone = b.gone = true;
              if (a.pos) got.add(a.pos - 1);
              if (got.size === need) clueSlot.replaceChildren(CQ.clueBox(ctx.clue));
            } else a.up = b.up = false;
            open = [];
            busy = false;
            render();
            if (got.size === L) ctx.win(`${flips} flips`);
          }, a.key === b.key ? 350 : 800);
        }
        render();
      }
      ctx.onKey((k) => {
        if (ctx.done()) return;
        if (/^[A-Z]$/.test(k) && cur.length < L) cur += k;
        else if (k === 'BACK') cur = cur.slice(0, -1);
        else if (k === 'ENTER' && cur) {
          if (cur === W) return ctx.win(`guessed early at ${flips} flips`);
          CQ.shake(input);
          CQ.toast('Not the word — keep matching');
          cur = '';
        }
        render();
      });
      root.append(clueSlot, slots.el, gridEl, counter, input);
      render();
    },
  });
})();
