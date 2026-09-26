/* Mini crossword: the answer runs across; bank words cross every other letter going down. */
(function () {
  const { h } = CQ;

  function build(word, rng) {
    const bank = (window.WORDBANK || []).filter(([w]) => w !== word);
    const downs = [];
    const used = new Set([word]);
    for (let col = 0; col < word.length; col += 2) {
      const ch = word[col];
      const cands = rng.shuffle(bank.filter(([w]) => w.includes(ch) && !used.has(w)));
      if (!cands.length) return null;
      const [w, clue] = cands[0];
      used.add(w);
      const idxs = [...w].map((c, i) => (c === ch ? i : -1)).filter((i) => i >= 0);
      downs.push({ word: w, clue, col, k: rng.pick(idxs) });
    }
    const R = Math.max(...downs.map((d) => d.k));
    const rows = R + Math.max(...downs.map((d) => d.word.length - d.k));
    const cells = {}; // "r,c" -> {ch, across, down}
    const key = (r, c) => r + ',' + c;
    for (let c = 0; c < word.length; c++) cells[key(R, c)] = { ch: word[c], across: true };
    downs.forEach((d, di) => {
      d.top = R - d.k;
      for (let i = 0; i < d.word.length; i++) {
        const k = key(d.top + i, d.col);
        cells[k] = cells[k] || { ch: d.word[i] };
        cells[k].down = di;
      }
    });
    // Standard numbering in reading order.
    let n = 0;
    const across = { row: R, len: word.length, clue: null };
    for (let r = 0; r < rows; r++)
      for (let c = 0; c < word.length; c++) {
        const cell = cells[key(r, c)];
        if (!cell) continue;
        const startsAcross = r === R && c === 0;
        const d = downs.find((d) => d.col === c && d.top === r);
        if (startsAcross || d) {
          cell.num = ++n;
          if (startsAcross) across.num = n;
          if (d) d.num = n;
        }
      }
    return { R, rows, cols: word.length, cells, downs, across, key };
  }

  CQ.register({
    id: 'crossword',
    name: 'Mini Crossword',
    icon: '✏️',
    blurb: 'Solve the downs to fill in the answer running across.',
    fits: (word) => {
      const bank = window.WORDBANK || [];
      for (let c = 0; c < word.length; c += 2) if (!bank.some(([w]) => w.includes(word[c]))) return false;
      return true;
    },
    mount(root, ctx) {
      const g = build(ctx.word, ctx.rng);
      g.across.clue = ctx.clue;
      const entry = {};
      let sel = null; // {r,c}
      let dir = 'across';
      let checks = 0;

      const gridEl = h('div', {
        class: 'cw-grid',
        style: { gridTemplateColumns: `repeat(${g.cols}, var(--cw))` },
      });
      const cellEls = {};
      for (let r = 0; r < g.rows; r++)
        for (let c = 0; c < g.cols; c++) {
          const k = g.key(r, c);
          const cell = g.cells[k];
          if (!cell) {
            gridEl.append(h('div', { class: 'cw-cell block' }));
            continue;
          }
          const el = h(
            'div',
            { class: 'cw-cell' + (cell.across ? ' answer' : ''), onclick: () => select(r, c, true) },
            cell.num ? h('span', { class: 'cw-num' }, cell.num) : null,
            h('span', { class: 'cw-letter' })
          );
          cellEls[k] = el;
          gridEl.append(el);
        }

      const activeClue = h('div', { class: 'cw-active' });
      const clueList = h('div', { class: 'cw-clues' });
      const acrossItem = h('div', { class: 'cw-clue', onclick: () => pickWord('across') }, h('b', null, g.across.num + 'A'), ' ', g.across.clue);
      clueList.append(h('div', { class: 'cw-head' }, 'Across'), acrossItem, h('div', { class: 'cw-head' }, 'Down'));
      const downItems = g.downs.map((d, i) => {
        const it = h('div', { class: 'cw-clue', onclick: () => pickWord(i) }, h('b', null, d.num + 'D'), ' ', d.clue);
        clueList.append(it);
        return it;
      });

      function wordCells(which) {
        if (which === 'across') return Array.from({ length: g.cols }, (_, c) => [g.R, c]);
        const d = g.downs[which];
        return Array.from({ length: d.word.length }, (_, i) => [d.top + i, d.col]);
      }
      function currentWord() {
        const cell = g.cells[g.key(sel.r, sel.c)];
        return dir === 'across' && cell.across ? 'across' : cell.down != null ? cell.down : 'across';
      }
      function pickWord(which) {
        const cs = wordCells(which);
        const empty = cs.find(([r, c]) => !entry[g.key(r, c)]) || cs[0];
        dir = which === 'across' ? 'across' : 'down';
        select(empty[0], empty[1], false);
      }
      function select(r, c, fromClick) {
        const cell = g.cells[g.key(r, c)];
        if (fromClick && sel && sel.r === r && sel.c === c) dir = dir === 'across' ? 'down' : 'across';
        if (dir === 'across' && !cell.across) dir = 'down';
        if (dir === 'down' && cell.down == null) dir = 'across';
        sel = { r, c };
        render();
      }
      function render() {
        const w = sel ? currentWord() : null;
        const inWord = new Set(w != null ? wordCells(w).map(([r, c]) => g.key(r, c)) : []);
        for (const [k, el] of Object.entries(cellEls)) {
          el.querySelector('.cw-letter').textContent = entry[k] || '';
          el.classList.toggle('hl', inWord.has(k));
          el.classList.toggle('sel', !!sel && k === g.key(sel.r, sel.c));
        }
        acrossItem.classList.toggle('on', w === 'across');
        downItems.forEach((it, i) => it.classList.toggle('on', w === i));
        if (w === 'across') activeClue.textContent = `${g.across.num} Across — ${g.across.clue}`;
        else if (w != null) activeClue.textContent = `${g.downs[w].num} Down — ${g.downs[w].clue}`;
      }
      function step(delta) {
        const cs = wordCells(currentWord());
        const i = cs.findIndex(([r, c]) => r === sel.r && c === sel.c);
        const j = i + delta;
        if (j >= 0 && j < cs.length) sel = { r: cs[j][0], c: cs[j][1] };
      }
      function checkDone() {
        const keys = Object.keys(g.cells);
        if (keys.some((k) => !entry[k])) return;
        if (keys.every((k) => entry[k] === g.cells[k].ch)) ctx.win(checks ? `peeked with Check ×${checks}` : 'no peeking');
        else CQ.toast('Not quite — use Check to find mistakes');
      }
      function move(dr, dc) {
        let r = sel.r + dr, c = sel.c + dc;
        while (r >= 0 && r < g.rows && c >= 0 && c < g.cols) {
          if (g.cells[g.key(r, c)]) {
            dir = dr ? 'down' : 'across';
            return select(r, c, false);
          }
          r += dr; c += dc;
        }
      }

      ctx.onKey((k) => {
        if (ctx.done() || !sel) return;
        const key = g.key(sel.r, sel.c);
        if (/^[A-Z]$/.test(k)) {
          entry[key] = k;
          cellEls[key].classList.remove('wrong');
          step(1);
          render();
          checkDone();
        } else if (k === 'BACK') {
          if (entry[key]) delete entry[key];
          else {
            step(-1);
            delete entry[g.key(sel.r, sel.c)];
          }
          render();
        } else if (k === 'LEFT') move(0, -1);
        else if (k === 'RIGHT') move(0, 1);
        else if (k === 'UP') move(-1, 0);
        else if (k === 'DOWN') move(1, 0);
        else if (k === 'ENTER' || k === 'SPACE') {
          dir = dir === 'across' ? 'down' : 'across';
          select(sel.r, sel.c, false);
        }
      });

      const checkBtn = h('button', { class: 'btn', onclick: () => {
        let wrong = 0;
        checks++;
        for (const [k, el] of Object.entries(cellEls)) {
          const bad = entry[k] && entry[k] !== g.cells[k].ch;
          el.classList.toggle('wrong', !!bad);
          wrong += bad ? 1 : 0;
        }
        CQ.toast(wrong ? `${wrong} wrong letter${wrong > 1 ? 's' : ''}` : 'Everything so far is correct');
      } }, 'Check');

      root.append(
        h('p', { class: 'g-help' }, 'The shaded row is the hidden word. Tap a cell twice to switch direction.'),
        activeClue,
        gridEl,
        h('div', { class: 'btn-row' }, checkBtn),
        clueList,
        CQ.keyboard(ctx.key).el
      );
      pickWord(0);
    },
  });
})();
