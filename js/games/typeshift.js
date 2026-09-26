/* Typeshift-style: slide each column so the middle row spells the word. */
(function () {
  const { h } = CQ;
  const CELL = 44, WINDOW = 5, MID = 2;

  CQ.register({
    id: 'typeshift',
    name: 'Typeshift',
    icon: '🎰',
    blurb: 'Slide the letter columns until the highlighted row spells the word.',
    fits: (w) => w.length <= 8,
    mount(root, ctx) {
      const W = ctx.word, rng = ctx.rng;
      const cols = [...W].map((ch) => {
        // Prefer decoys that are plausible (common letters and letters from the word).
        const decoys = [];
        while (decoys.length < 3) {
          const l = rng.next() < 0.5 ? rng.pick([...W]) : CQ.randLetter(rng);
          if (l !== ch && !decoys.includes(l)) decoys.push(l);
        }
        const letters = rng.shuffle([ch, ...decoys]);
        return { letters, sel: rng.int(4), answer: letters.indexOf(ch) };
      });
      if (cols.every((c) => c.sel === c.answer)) cols[0].sel = (cols[0].answer + 1) % 4;

      const board = h('div', { class: 'ts-board', style: { height: WINDOW * CELL + 'px' } });
      board.append(h('div', { class: 'ts-band', style: { top: MID * CELL + 'px', height: CELL + 'px' } }));
      const colEls = cols.map((col, ci) => {
        const strip = h('div', { class: 'ts-strip' },
          ...col.letters.map((l, li) => h('div', { class: 'ts-cell', 'data-li': li, style: { height: CELL + 'px' } }, l))
        );
        const colEl = h('div', { class: 'ts-col' }, strip);
        // Swipe/drag support
        let startY = null, startSel = 0;
        colEl.addEventListener('pointerdown', (e) => { startY = e.clientY; startSel = col.sel; colEl.setPointerCapture(e.pointerId); });
        colEl.addEventListener('pointermove', (e) => {
          if (startY == null) return;
          const d = Math.round((startY - e.clientY) / CELL);
          const s = Math.max(0, Math.min(3, startSel + d));
          if (s !== col.sel) set(ci, s);
        });
        colEl.addEventListener('pointerup', (e) => {
          const tap = startY != null && Math.abs(startY - e.clientY) < 6;
          startY = null;
          if (!tap) return;
          const t = document.elementFromPoint(e.clientX, e.clientY);
          const cell = t && t.closest('.ts-cell');
          if (cell) set(ci, +cell.dataset.li);
        });
        board.append(colEl);
        return strip;
      });

      let shifts = 0;
      function set(ci, li) {
        if (ctx.done()) return;
        if (cols[ci].sel !== li) shifts++;
        cols[ci].sel = li;
        render();
        if (cols.every((c) => c.letters[c.sel] === W[cols.indexOf(c)])) setTimeout(() => ctx.win(`${shifts} shifts`), 350);
      }
      function render() {
        colEls.forEach((strip, ci) => {
          strip.style.transform = `translateY(${(MID - cols[ci].sel) * CELL}px)`;
          [...strip.children].forEach((c, li) => c.classList.toggle('on', li === cols[ci].sel));
        });
      }
      root.append(
        CQ.clueBox(ctx.clue),
        h('p', { class: 'g-help' }, 'Tap a letter or drag a column up and down.'),
        board
      );
      render();
    },
  });
})();
