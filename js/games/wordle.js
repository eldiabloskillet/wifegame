(function () {
  const { h } = CQ;

  function score(guess, word) {
    const res = Array(word.length).fill('absent');
    const left = {};
    for (let i = 0; i < word.length; i++) {
      if (guess[i] === word[i]) res[i] = 'correct';
      else left[word[i]] = (left[word[i]] || 0) + 1;
    }
    for (let i = 0; i < word.length; i++) {
      if (res[i] !== 'correct' && left[guess[i]]) {
        res[i] = 'present';
        left[guess[i]]--;
      }
    }
    return res;
  }

  CQ.register({
    id: 'wordle',
    name: 'Wordle',
    icon: '🟩',
    blurb: 'Guess the hidden word. Green = right spot, yellow = wrong spot.',
    fits: (w) => w.length === 5,
    mount(root, ctx) {
      const W = ctx.word, L = W.length;
      const maxRows = 6;
      const rows = [];
      let cur = '';
      const board = h('div', { class: 'wd-board' });
      for (let r = 0; r < maxRows; r++) {
        const row = h('div', { class: 'wd-row', style: { gridTemplateColumns: `repeat(${L}, 1fr)` } });
        const cells = [];
        for (let i = 0; i < L; i++) {
          const c = h('div', { class: 'wd-cell' });
          cells.push(c);
          row.append(c);
        }
        rows.push({ row, cells });
        board.append(row);
      }
      const hint = h('div', { class: 'g-hint-slot' }, h('span', { class: 'muted' }, 'A hint appears after 3 guesses.'));
      let r = 0;
      const kb = CQ.keyboard(ctx.key);

      function paint() {
        rows[r].cells.forEach((c, i) => {
          c.textContent = cur[i] || '';
          c.classList.toggle('filled', !!cur[i]);
        });
      }
      ctx.onKey((k) => {
        if (ctx.done()) return;
        if (/^[A-Z]$/.test(k) && cur.length < L) cur += k;
        else if (k === 'BACK') cur = cur.slice(0, -1);
        else if (k === 'ENTER') {
          if (cur.length < L) {
            CQ.shake(rows[r].row);
            return CQ.toast('Not enough letters');
          }
          const res = score(cur, W);
          rows[r].cells.forEach((c, i) => {
            setTimeout(() => {
              c.dataset.state = res[i];
              c.classList.add('flip');
            }, i * 120);
            kb.mark(cur[i], res[i]);
          });
          const won = cur === W;
          r++;
          cur = '';
          if (r === 3 && !won) hint.replaceChildren(CQ.clueBox(ctx.clue, 'Hint'));
          setTimeout(() => {
            if (won) ctx.win(`${r}/${maxRows}`);
            else if (r >= maxRows) ctx.fail(`X/${maxRows}`);
          }, L * 120 + 250);
          return;
        }
        paint();
      });
      root.append(
        h('p', { class: 'g-help' }, `${L} letters, ${maxRows} tries. Any letter combination is allowed.`),
        board,
        hint,
        kb.el
      );
    },
  });
})();
