/* Wheel of Fortune-style: spin, call consonants, buy vowels, solve. Six strikes and you're out. */
(function () {
  const { h } = CQ;
  const SEGMENTS = [500, 900, 350, 300, 700, 450, 600, 1000, 400, 800, 550, 650];
  const COLORS = ['#e8453c', '#f5a623', '#d9468f', '#3fa34d', '#2f7bd8', '#e07b39', '#9b51e0', '#e8453c', '#f5a623', '#3fa34d', '#16a2b8', '#2f7bd8'];
  const VOWEL_COST = 250, HINT_COST = 750, START_CASH = 1000, STRIKES = 6;

  function wheelSvg() {
    const n = SEGMENTS.length, R = 100, step = 360 / n;
    let s = '';
    SEGMENTS.forEach((seg, i) => {
      const a0 = ((i * step - 90 - step / 2) * Math.PI) / 180, a1 = (((i + 1) * step - 90 - step / 2) * Math.PI) / 180;
      const [x0, y0, x1, y1] = [R * Math.cos(a0), R * Math.sin(a0), R * Math.cos(a1), R * Math.sin(a1)];
      const label = '$' + seg;
      s += `<path d="M0,0 L${x0},${y0} A${R},${R} 0 0,1 ${x1},${y1} Z" fill="${COLORS[i]}" stroke="#fff" stroke-width="1.5"/>`;
      s += `<text transform="rotate(${i * step}) translate(0,-62) rotate(90)" text-anchor="middle" dominant-baseline="central" font-size="13" font-weight="800" fill="#fff">${label}</text>`;
    });
    return `<svg viewBox="-104 -104 208 208" class="wf-svg"><g class="wf-rot">${s}</g><circle r="14" fill="#fff" stroke="#222" stroke-width="3"/></svg>`;
  }

  CQ.register({
    id: 'wheel',
    name: 'Spin & Solve',
    icon: '🎡',
    blurb: 'Spin the wheel, call consonants, buy vowels or letters, then solve the puzzle.',
    fits: (w) => /[^AEIOU]/.test(w),
    mount(root, ctx) {
      const W = ctx.word, rng = ctx.rng;
      let cash = START_CASH, strikes = 0, hints = 0, mode = 'spin', value = 0, rotation = 0, solveText = '';
      const called = new Set();
      const board = CQ.slots(W.length);
      board.el.classList.add('wf-board');
      const wheelEl = h('div', { class: 'wf-wheel', title: 'Click to spin', onclick: () => spin() }, h('div', { class: 'wf-pointer' }));
      wheelEl.insertAdjacentHTML('beforeend', wheelSvg());
      const status = h('div', { class: 'wf-status' });
      const stats = h('div', { class: 'wf-stats' });
      const spinBtn = h('button', { class: 'btn primary', onclick: spin }, 'Spin');
      const vowelBtn = h('button', { class: 'btn', onclick: () => setMode(mode === 'vowel' ? 'spin' : 'vowel') }, `Buy a vowel ($${VOWEL_COST})`);
      const hintBtn = h('button', { class: 'btn', onclick: buyHint }, `Buy a letter ($${HINT_COST})`);
      const solveBtn = h('button', { class: 'btn', onclick: () => setMode(mode === 'solve' ? 'spin' : 'solve') }, 'Solve');
      const kb = CQ.keyboard(ctx.key);

      function remaining(isVowel) {
        return [...new Set(W)].some((c) => CQ.VOWELS.includes(c) === isVowel && !called.has(c));
      }
      function render() {
        [...W].forEach((ch, i) => {
          if (mode === 'solve' && !called.has(ch)) {
            // Show typed letters in the unrevealed squares.
            const blanks = [...W].map((c, j) => (called.has(c) ? -1 : j)).filter((j) => j >= 0);
            const k = blanks.indexOf(i);
            board.set(i, solveText[k] || '', 'typing');
          } else board.set(i, called.has(ch) ? ch : '', called.has(ch) ? '' : 'blank');
        });
        stats.replaceChildren(
          h('span', null, 'Bank: ', h('b', null, '$' + cash)),
          h('span', null, 'Strikes: ', h('b', null, '✖'.repeat(strikes) + '·'.repeat(STRIKES - strikes)))
        );
        spinBtn.disabled = mode !== 'spin' || !remaining(false);
        vowelBtn.disabled = (mode !== 'spin' && mode !== 'vowel') || cash < VOWEL_COST || !remaining(true);
        vowelBtn.textContent = mode === 'vowel' ? 'Cancel' : `Buy a vowel ($${VOWEL_COST})`;
        hintBtn.disabled = mode !== 'spin' || cash < HINT_COST;
        solveBtn.disabled = mode !== 'spin' && mode !== 'solve';
        solveBtn.textContent = mode === 'solve' ? 'Cancel' : 'Solve';
      }
      function say(msg) {
        status.textContent = msg;
      }
      function setMode(m) {
        if (ctx.done()) return;
        mode = m;
        solveText = '';
        if (m === 'vowel') say('Pick a vowel.');
        else if (m === 'solve') say('Type the missing letters, then press Enter.');
        else say(remaining(false) ? 'Spin the wheel, buy a vowel, or solve.' : 'All consonants are out — buy a vowel or solve.');
        render();
      }
      function strike(msg) {
        strikes++;
        say(msg + (strikes < STRIKES ? ` Strike ${strikes} of ${STRIKES}.` : ''));
        render();
        if (strikes >= STRIKES) setTimeout(() => ctx.fail('struck out'), 600);
      }
      // Reveal a random hidden letter (every copy of it). Costs money, never a strike.
      function buyHint() {
        if (ctx.done() || mode !== 'spin' || cash < HINT_COST) return;
        const hidden = [...new Set(W)].filter((c) => !called.has(c));
        if (!hidden.length) return;
        const ch = rng.pick(hidden);
        cash -= HINT_COST;
        hints++;
        reveal(ch);
        say(`Revealed: ${ch}.`);
        render();
      }
      function spin() {
        if (mode !== 'spin' || ctx.done()) return;
        if (!remaining(false)) return CQ.toast('No consonants left — buy a vowel or solve');
        mode = 'spinning';
        render();
        const idx = rng.int(SEGMENTS.length);
        const step = 360 / SEGMENTS.length;
        // Land segment idx under the top pointer, with a little wobble inside the segment.
        const target = 360 - idx * step + (rng.next() - 0.5) * step * 0.6;
        rotation += 360 * 4 + ((target - (rotation % 360)) + 360) % 360;
        wheelEl.querySelector('.wf-rot').style.transform = `rotate(${rotation}deg)`;
        say('Spinning…');
        setTimeout(() => land(SEGMENTS[idx]), 2600);
      }
      function land(seg) {
        if (ctx.done()) return;
        value = seg;
        mode = 'consonant';
        say(`$${seg} — pick a consonant.`);
        render();
      }
      function reveal(ch) {
        called.add(ch);
        const n = [...W].filter((c) => c === ch).length;
        kb.mark(ch, n ? 'correct' : 'absent');
        if ([...W].every((c) => called.has(c))) {
          render();
          return setTimeout(() => ctx.win(hints ? `bought ${hints} letter${hints > 1 ? 's' : ''}` : `$${cash} banked`), 500), n;
        }
        return n;
      }
      function pick(ch) {
        const isVowel = CQ.VOWELS.includes(ch);
        if (called.has(ch)) return CQ.toast(`${ch} has already been called`);
        if (mode === 'consonant') {
          if (isVowel) return CQ.toast('Pick a consonant — vowels must be bought');
          const n = reveal(ch);
          mode = 'spin';
          if (n) {
            cash += n * value;
            say(`There ${n > 1 ? 'are' : 'is'} ${n} ${ch}${n > 1 ? "'s" : ''}! +$${n * value}`);
            render();
          } else strike(`No ${ch}.`);
        } else if (mode === 'vowel') {
          if (!isVowel) return CQ.toast('Pick a vowel (A, E, I, O, U)');
          cash -= VOWEL_COST;
          const n = reveal(ch);
          mode = 'spin';
          say(n ? `There ${n > 1 ? 'are' : 'is'} ${n} ${ch}${n > 1 ? "'s" : ''}.` : `No ${ch} — that's not a strike, but the $${VOWEL_COST} is spent.`);
          render();
        }
      }
      ctx.onKey((k) => {
        if (ctx.done()) return;
        if (mode === 'solve') {
          const blanks = [...W].filter((c) => !called.has(c)).length;
          if (/^[A-Z]$/.test(k) && solveText.length < blanks) solveText += k;
          else if (k === 'BACK') solveText = solveText.slice(0, -1);
          else if (k === 'ENTER') {
            if (solveText.length < blanks) return CQ.toast('Fill in every square first');
            let j = 0;
            const attempt = [...W].map((c) => (called.has(c) ? c : solveText[j++])).join('');
            if (attempt === W) {
              [...W].forEach((c) => called.add(c));
              mode = 'spin';
              render();
              return ctx.win(hints ? `solved after buying ${hints} letter${hints > 1 ? 's' : ''}` : `solved with $${cash}`);
            }
            CQ.shake(board.el);
            mode = 'spin';
            solveText = '';
            return strike("That's not it.");
          }
          return render();
        }
        if (/^[A-Z]$/.test(k)) pick(k);
        else if ((k === 'SPACE' || k === 'ENTER') && mode === 'spin') spin();
      });
      root.append(
        CQ.clueBox(ctx.clue, 'Category'),
        board.el,
        stats,
        wheelEl,
        status,
        h('div', { class: 'btn-row' }, spinBtn, vowelBtn, hintBtn, solveBtn),
        kb.el
      );
      setMode('spin');
    },
  });
})();
