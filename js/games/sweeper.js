/* Minesweeper: clear every safe square to win. The answer's letters are hidden under some of them. Mines cost a life. */
(function () {
  const { h } = CQ;
  const N = 8, MINES = 9, LIVES = 3;

  CQ.register({
    id: 'sweeper',
    name: 'Letter Sweeper',
    icon: '💣',
    blurb: 'Clear the minefield to reveal the answer hidden under the safe squares.',
    fits: (w) => w.length <= 8,
    mount(root, ctx) {
      const W = ctx.word, L = W.length, rng = ctx.rng;
      const cells = Array.from({ length: N * N }, () => ({ mine: false, open: false, flag: false, n: 0, letter: null }));
      // Letters go on random squares now; mines are placed on the first dig so it's always safe.
      rng.shuffle(cells.map((_, i) => i)).slice(0, L).forEach((ci, li) => (cells[ci].letter = li));
      let placed = false, lives = LIVES, flagMode = false;
      const nbrs = (i) => {
        const r = Math.floor(i / N), c = i % N, out = [];
        for (let dr = -1; dr <= 1; dr++)
          for (let dc = -1; dc <= 1; dc++) {
            const rr = r + dr, cc = c + dc;
            if ((dr || dc) && rr >= 0 && cc >= 0 && rr < N && cc < N) out.push(rr * N + cc);
          }
        return out;
      };
      function placeMines(first) {
        const keepClear = new Set([first, ...nbrs(first)]);
        const spots = rng.shuffle(cells.map((_, i) => i).filter((i) => !keepClear.has(i) && cells[i].letter == null));
        spots.slice(0, MINES).forEach((i) => (cells[i].mine = true));
        cells.forEach((c, i) => (c.n = nbrs(i).filter((j) => cells[j].mine).length));
        placed = true;
      }

      const gridEl = h('div', { class: 'ms-grid', style: { gridTemplateColumns: `repeat(${N}, 1fr)` } });
      const slots = CQ.slots(L);
      const counter = h('div', { class: 'g-counter' });
      const modeBtn = h('button', { class: 'btn', onclick: () => { flagMode = !flagMode; render(); } });

      function render() {
        gridEl.replaceChildren(...cells.map((c, i) => {
          let cls = 'ms-cell', label = '';
          if (c.open) {
            cls += ' open';
            if (c.mine) { cls += ' boom'; label = '💥'; }
            else if (c.letter != null) { cls += ' letter'; label = W[c.letter]; }
            else if (c.n) { cls += ' n' + c.n; label = c.n; }
          } else if (c.flag) label = '🚩';
          const el = h('button', { class: cls, 'data-i': i },
            label,
            c.open && c.letter != null && c.n ? h('small', null, c.n) : null
          );
          return el;
        }));
        [...W].forEach((ch, i) => slots.set(i, cells.some((c) => c.open && c.letter === i) ? ch : ''));
        const flags = cells.filter((c) => c.flag).length;
        counter.textContent = '❤️'.repeat(lives) + '🤍'.repeat(LIVES - lives) + `   💣 ${MINES - flags}`;
        modeBtn.textContent = flagMode ? '🚩 Flagging (tap to dig)' : '⛏️ Digging (tap to flag)';
        modeBtn.classList.toggle('primary', flagMode);
      }
      function open(i) {
        const stack = [i];
        while (stack.length) {
          const j = stack.pop();
          const c = cells[j];
          if (c.open || c.flag) continue;
          c.open = true;
          if (!c.mine && c.n === 0) nbrs(j).forEach((k) => !cells[k].open && stack.push(k));
        }
      }
      function dig(i) {
        const c = cells[i];
        if (ctx.done() || c.flag) return;
        if (c.open) return chord(i);
        const first = !placed;
        if (first) placeMines(i);
        if (first) {
          // Hide the letters under squares the opening flood didn't reach, so you have to earn them.
          open(i);
          const closedSafe = rng.shuffle(cells.map((_, j) => j).filter((j) => !cells[j].mine && !cells[j].open));
          const openSafe = rng.shuffle(cells.map((_, j) => j).filter((j) => cells[j].open));
          cells.forEach((cc) => (cc.letter = null));
          [...closedSafe, ...openSafe].slice(0, L).forEach((j, li) => (cells[j].letter = li));
          return finishCheck();
        }
        if (c.mine) {
          c.open = true;
          lives--;
          CQ.shake(gridEl);
          render();
          if (lives <= 0) return ctx.fail('kaboom');
          return CQ.toast(`Boom! ${lives} li${lives > 1 ? 'ves' : 'fe'} left`);
        }
        open(i);
        finishCheck();
      }
      // Tapping an open number with the right number of flags around it digs the rest.
      function chord(i) {
        const c = cells[i];
        if (!c.n) return;
        const around = nbrs(i);
        const marked = around.filter((j) => cells[j].flag || (cells[j].open && cells[j].mine)).length;
        if (marked !== c.n) return;
        around.forEach((j) => !cells[j].open && !cells[j].flag && dig(j));
      }
      function flag(i) {
        const c = cells[i];
        if (ctx.done() || c.open) return;
        c.flag = !c.flag;
        render();
      }
      function finishCheck() {
        render();
        if (cells.every((c) => c.mine || c.open)) ctx.win(lives === LIVES ? 'no explosions' : `${LIVES - lives} explosion${LIVES - lives > 1 ? 's' : ''}`);
      }

      // Tap = dig (or flag in flag mode). Right-click or long-press = flag.
      let pressTimer = null, longPressed = false;
      gridEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const t = e.target.closest('.ms-cell');
        if (t && !longPressed) flag(+t.dataset.i);
      });
      gridEl.addEventListener('pointerdown', (e) => {
        const t = e.target.closest('.ms-cell');
        if (!t || e.button === 2) return;
        longPressed = false;
        pressTimer = setTimeout(() => { longPressed = true; flag(+t.dataset.i); }, 450);
      });
      gridEl.addEventListener('pointerup', (e) => {
        clearTimeout(pressTimer);
        const t = e.target.closest('.ms-cell');
        if (!t || e.button === 2 || longPressed) return;
        const i = +t.dataset.i;
        flagMode && !cells[i].open ? flag(i) : dig(i);
      });
      gridEl.addEventListener('pointerleave', () => clearTimeout(pressTimer));

      root.append(
        CQ.clueBox(ctx.clue),
        h('p', { class: 'g-help' }, `Uncover every safe square to win. The ${L} letters of the answer are hidden under some of them. Numbers count the mines touching a square, and your first dig is always safe. Right-click or long-press to flag; tap a number whose mines are all flagged to clear around it.`),
        slots.el, counter, gridEl,
        h('div', { class: 'btn-row' }, modeBtn)
      );
      render();
    },
  });
})();
