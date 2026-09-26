(function () {
  const { h } = CQ;

  CQ.register({
    id: 'unshuffle',
    name: 'Unshuffle',
    icon: '🔀',
    blurb: 'Put the scrambled letters back in order.',
    fits: (w) => new Set(w).size > 1,
    mount(root, ctx) {
      const W = ctx.word, L = W.length;
      let letters;
      do letters = ctx.rng.shuffle([...W]);
      while (letters.join('') === W);
      let tiles = letters.map((ch, i) => ({ ch, id: i }));
      let wrong = 0;
      const placed = []; // tile ids in answer order
      const slots = CQ.slots(L);
      const tray = h('div', { class: 'tray' });

      function render() {
        for (let i = 0; i < L; i++) {
          const t = tiles.find((t) => t.id === placed[i]);
          slots.set(i, t ? t.ch : '');
          slots.cells[i].onclick = () => {
            if (ctx.done() || placed[i] == null) return;
            placed.splice(i, 1);
            render();
          };
        }
        tray.replaceChildren(
          ...tiles.map((t) =>
            h('button', {
              class: 'us-tile' + (placed.includes(t.id) ? ' used' : ''),
              disabled: placed.includes(t.id),
              onclick: () => add(t.id),
            }, t.ch)
          )
        );
      }
      function add(id) {
        if (ctx.done() || placed.length >= L) return;
        placed.push(id);
        render();
        if (placed.length === L) {
          const s = placed.map((id) => tiles.find((t) => t.id === id).ch).join('');
          if (s === W) ctx.win(wrong ? `${wrong} wrong order${wrong > 1 ? 's' : ''}` : 'first try');
          else {
            wrong++;
            CQ.shake(slots.el);
            CQ.toast('Not quite');
          }
        }
      }
      ctx.onKey((k) => {
        if (ctx.done()) return;
        if (/^[A-Z]$/.test(k)) {
          const t = tiles.find((t) => t.ch === k && !placed.includes(t.id));
          if (t) add(t.id);
        } else if (k === 'BACK') {
          placed.pop();
          render();
        } else if (k === 'SPACE') shuffle();
      });
      function shuffle() {
        tiles = ctx.rng.shuffle(tiles);
        render();
      }
      root.append(
        CQ.clueBox(ctx.clue),
        slots.el,
        tray,
        h('div', { class: 'btn-row' },
          h('button', { class: 'btn', onclick: shuffle }, 'Shuffle'),
          h('button', { class: 'btn', onclick: () => { placed.length = 0; render(); } }, 'Clear')
        ),
        h('p', { class: 'g-help' }, 'Tap tiles (or type) to build the word. Tap a placed letter to remove it.')
      );
      render();
    },
  });
})();
