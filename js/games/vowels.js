/* Only Connect-style missing vowels: consonants shown in order with misleading spacing. */
(function () {
  const { h } = CQ;

  CQ.register({
    id: 'vowels',
    name: 'Missing Vowels',
    icon: '🅰️',
    blurb: 'The vowels have been removed and the spacing scrambled. What is the word?',
    fits: (w) => /[AEIOU]/.test(w) && w.replace(/[AEIOU]/g, '').length >= 2,
    mount(root, ctx) {
      const W = ctx.word, rng = ctx.rng;
      const cons = W.replace(/[AEIOU]/g, '');
      // Break the consonants into random chunks.
      let shown = '';
      for (let i = 0; i < cons.length; i++) {
        shown += cons[i];
        if (i < cons.length - 1 && rng.next() < 0.4) shown += ' ';
      }
      let cur = '', tries = 3;
      const puzzle = h('div', { class: 'mv-puzzle' }, shown);
      const input = h('div', { class: 'bt-input' });
      const counter = h('div', { class: 'g-counter' });
      const clueSlot = h('div', { class: 'g-hint-slot' }, h('span', { class: 'muted' }, 'A clue appears after one wrong answer.'));
      function render() {
        input.textContent = cur || ' ';
        counter.textContent = `Attempts left: ${tries}`;
      }
      ctx.onKey((k) => {
        if (ctx.done()) return;
        if (/^[A-Z]$/.test(k) && cur.length < 12) cur += k;
        else if (k === 'BACK') cur = cur.slice(0, -1);
        else if (k === 'ENTER' && cur) {
          if (cur.replace(/[AEIOU]/g, '') !== cons) {
            CQ.toast('Keep the same consonants, in the same order');
            return CQ.shake(input);
          }
          if (cur === W) return ctx.win(tries === 3 ? 'first try' : `attempt ${4 - tries}`);
          tries--;
          cur = '';
          CQ.shake(input);
          if (!tries) { render(); return ctx.fail('vowel-less'); }
          CQ.toast('Not that one');
          clueSlot.replaceChildren(CQ.clueBox(ctx.clue));
        }
        render();
      });
      root.append(
        h('p', { class: 'g-help' }, 'Type the full word, vowels included. Spaces in the puzzle are meaningless.'),
        puzzle, input, counter, clueSlot, CQ.keyboard(ctx.key).el
      );
      render();
    },
  });
})();
