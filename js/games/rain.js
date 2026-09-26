/* Arcade: letters rain down. Tap the next letter of the word; wrong taps cost a life. */
(function () {
  const { h } = CQ;
  const LIVES = 5;

  CQ.register({
    id: 'rain',
    name: 'Letter Rain',
    icon: '🌧️',
    blurb: 'Catch the falling letters in order to spell the word. Wrong catches cost a life.',
    fits: () => true,
    mount(root, ctx) {
      const W = ctx.word, rng = ctx.rng;
      let filled = 0, lives = LIVES, running = false, visible = true;
      let drops = [], raf = 0, last = 0, spawnT = 0;
      const field = h('div', { class: 'rn-field' });
      const slots = CQ.slots(W.length);
      const counter = h('div', { class: 'g-counter' });
      const startBtn = h('button', { class: 'btn primary rn-start', onclick: start }, 'Start');
      field.append(startBtn);

      function render() {
        [...W].forEach((ch, i) => slots.set(i, i < filled ? ch : '', i === filled ? 'next' : ''));
        counter.textContent = '❤️'.repeat(lives) + '🤍'.repeat(LIVES - lives);
      }
      function start() {
        startBtn.remove();
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
      function spawn() {
        const need = W[filled];
        const ch = rng.next() < 0.33 ? need : rng.next() < 0.5 ? rng.pick([...W]) : CQ.randLetter(rng);
        const el = h('button', { class: 'rn-drop' }, ch);
        const d = { el, ch, x: 6 + rng.next() * 80, y: -12, v: 11 + rng.next() * 6 + filled * 0.8 };
        el.style.left = d.x + '%';
        el.addEventListener('pointerdown', (e) => { e.preventDefault(); catchDrop(d); });
        field.append(el);
        drops.push(d);
      }
      function catchDrop(d) {
        if (!running || ctx.done()) return;
        d.el.remove();
        drops = drops.filter((x) => x !== d);
        if (d.ch === W[filled]) {
          filled++;
          render();
          if (filled === W.length) { stop(); ctx.win(`${lives}/${LIVES} lives left`); }
        } else {
          lives--;
          CQ.shake(slots.el);
          render();
          if (lives <= 0) { stop(); ctx.fail('drowned'); }
        }
      }
      function tick(now) {
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        if (running && visible) {
          spawnT -= dt;
          if (spawnT <= 0) { spawn(); spawnT = 0.75; }
          for (const d of drops) {
            d.y += d.v * dt;
            d.el.style.top = d.y + '%';
          }
          drops = drops.filter((d) => (d.y > 100 ? (d.el.remove(), false) : true));
        }
        if (running) raf = requestAnimationFrame(tick);
      }
      function stop() {
        running = false;
        cancelAnimationFrame(raf);
        drops.forEach((d) => d.el.remove());
        drops = [];
      }
      ctx.onShow(() => { visible = true; last = performance.now(); });
      ctx.onHide(() => (visible = false));
      root.append(
        CQ.clueBox(ctx.clue),
        h('p', { class: 'g-help' }, 'Tap the letters of the answer in order as they fall. Missing a letter is free.'),
        slots.el, counter, field
      );
      render();
    },
  });
})();
