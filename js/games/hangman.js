(function () {
  const { h } = CQ;
  const PARTS = [
    '<circle cx="140" cy="52" r="14"/>',
    '<line x1="140" y1="66" x2="140" y2="112"/>',
    '<line x1="140" y1="78" x2="120" y2="98"/>',
    '<line x1="140" y1="78" x2="160" y2="98"/>',
    '<line x1="140" y1="112" x2="124" y2="140"/>',
    '<line x1="140" y1="112" x2="156" y2="140"/>',
  ];

  CQ.register({
    id: 'hangman',
    name: 'Hangman',
    icon: '🪢',
    blurb: 'Guess letters before the figure is complete. 6 misses allowed.',
    fits: () => true,
    mount(root, ctx) {
      const W = ctx.word;
      const guessed = new Set();
      let misses = 0;
      const svg = h('div', { class: 'hm-art' });
      const slots = CQ.slots(W.length);
      const kb = CQ.keyboard(ctx.key, { enter: false });
      const counter = h('div', { class: 'g-counter' });

      function render() {
        svg.innerHTML =
          '<svg viewBox="0 0 200 170" class="hm-svg"><line x1="30" y1="160" x2="110" y2="160"/><line x1="60" y1="160" x2="60" y2="20"/><line x1="60" y1="20" x2="140" y2="20"/><line x1="140" y1="20" x2="140" y2="38"/>' +
          PARTS.slice(0, misses).join('') + '</svg>';
        [...W].forEach((ch, i) => slots.set(i, guessed.has(ch) ? ch : ''));
        counter.textContent = `Misses left: ${6 - misses}`;
      }
      ctx.onKey((k) => {
        if (ctx.done() || !/^[A-Z]$/.test(k) || guessed.has(k)) return;
        guessed.add(k);
        if (W.includes(k)) kb.mark(k, 'correct');
        else {
          kb.mark(k, 'absent');
          misses++;
        }
        render();
        if ([...W].every((c) => guessed.has(c))) ctx.win(misses ? `${misses} limb${misses > 1 ? 's' : ''} lost` : 'flawless neck');
        else if (misses >= 6) ctx.fail('fully hanged');
      });
      root.append(CQ.clueBox(ctx.clue), svg, counter, slots.el, kb.el);
      render();
    },
  });
})();
