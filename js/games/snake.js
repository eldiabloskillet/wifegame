/* Snake: steer into the answer's letters in order. Wrong letters, walls and your own tail cost a life. */
(function () {
  const { h } = CQ;
  const N = 12, LIVES = 3, SIZE = 30;

  CQ.register({
    id: 'snake',
    name: 'Letter Snake',
    icon: '🐍',
    blurb: 'Steer the snake into the letters of the answer, in order.',
    fits: () => true,
    mount(root, ctx) {
      const W = ctx.word, rng = ctx.rng;
      const canvas = h('canvas', { class: 'sn-canvas', width: N * SIZE, height: N * SIZE });
      const g = canvas.getContext('2d');
      const slots = CQ.slots(W.length);
      const counter = h('div', { class: 'g-counter' });
      const overlay = h('button', { class: 'btn primary sn-start', onclick: () => go() }, 'Start');
      const wrap = h('div', { class: 'sn-wrap' }, canvas, overlay);
      let snake, dir, nextDir, letters = [], pos = 0, lives = LIVES, timer = null, visible = true, grow = 0;

      function reset() {
        snake = [{ x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }];
        dir = nextDir = { x: 1, y: 0 };
      }
      function free() {
        for (;;) {
          const p = { x: rng.int(N), y: rng.int(N) };
          const nearHead = Math.abs(p.x - snake[0].x) + Math.abs(p.y - snake[0].y) < 3;
          if (!nearHead && !snake.some((s) => s.x === p.x && s.y === p.y) && !letters.some((l) => l.x === p.x && l.y === p.y)) return p;
        }
      }
      // Always one correct letter on the board, plus decoys.
      function spawn() {
        letters = [];
        const need = W[pos];
        letters.push({ ...free(), ch: need });
        const pool = [...new Set([...W, ...'ETAOINSRHL'])].filter((c) => c !== need);
        for (const ch of rng.shuffle(pool).slice(0, 3)) letters.push({ ...free(), ch });
      }
      function draw() {
        g.fillStyle = '#1f3b2a';
        g.fillRect(0, 0, N * SIZE, N * SIZE);
        g.fillStyle = '#244532';
        for (let y = 0; y < N; y++) for (let x = (y % 2); x < N; x += 2) g.fillRect(x * SIZE, y * SIZE, SIZE, SIZE);
        g.font = `800 ${SIZE * 0.6}px Libre Franklin, system-ui, sans-serif`;
        g.textAlign = 'center';
        g.textBaseline = 'middle';
        for (const l of letters) {
          g.fillStyle = '#fff6d8';
          g.beginPath();
          g.arc(l.x * SIZE + SIZE / 2, l.y * SIZE + SIZE / 2, SIZE * 0.45, 0, Math.PI * 2);
          g.fill();
          g.fillStyle = '#1f3b2a';
          g.fillText(l.ch, l.x * SIZE + SIZE / 2, l.y * SIZE + SIZE / 2 + 1);
        }
        snake.forEach((s, i) => {
          g.fillStyle = i === 0 ? '#9be15d' : '#6fbf3b';
          g.fillRect(s.x * SIZE + 2, s.y * SIZE + 2, SIZE - 4, SIZE - 4);
        });
        // Eyes
        const hd = snake[0];
        g.fillStyle = '#1f3b2a';
        g.fillRect(hd.x * SIZE + SIZE / 2 - 6 + dir.x * 5, hd.y * SIZE + SIZE / 2 - 3 + dir.y * 5, 4, 4);
        g.fillRect(hd.x * SIZE + SIZE / 2 + 2 + dir.x * 5, hd.y * SIZE + SIZE / 2 - 3 + dir.y * 5, 4, 4);
      }
      function render() {
        [...W].forEach((ch, i) => slots.set(i, i < pos ? ch : '', i === pos ? 'next' : ''));
        counter.textContent = '❤️'.repeat(lives) + '🤍'.repeat(LIVES - lives);
      }
      function hurt(msg) {
        lives--;
        render();
        stop();
        CQ.shake(wrap);
        if (lives <= 0) return ctx.fail('became a belt');
        reset();
        spawn();
        draw();
        overlay.textContent = msg + ' — tap to continue';
        overlay.hidden = false;
      }
      function step() {
        if (!visible) return;
        dir = nextDir;
        const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };
        if (head.x < 0 || head.y < 0 || head.x >= N || head.y >= N) return hurt('Ouch, a wall');
        if (snake.some((s) => s.x === head.x && s.y === head.y)) return hurt('You bit your tail');
        snake.unshift(head);
        const hit = letters.find((l) => l.x === head.x && l.y === head.y);
        if (hit) {
          if (hit.ch === W[pos]) {
            pos++;
            grow += 2;
            render();
            if (pos === W.length) {
              stop();
              draw();
              return ctx.win(`${lives}/${LIVES} lives, ${snake.length} segments long`);
            }
            spawn();
          } else {
            snake.shift();
            return hurt(`${hit.ch} isn't next`);
          }
        }
        if (grow > 0) grow--;
        else snake.pop();
        draw();
      }
      function go() {
        if (ctx.done()) return;
        overlay.hidden = true;
        stop();
        timer = setInterval(step, Math.max(95, 170 - W.length * 6));
      }
      function stop() {
        clearInterval(timer);
        timer = null;
      }
      function turn(x, y) {
        if (dir.x === -x && dir.y === -y) return; // no reversing into yourself
        nextDir = { x, y };
        if (!timer && !ctx.done() && !overlay.hidden) go();
      }
      const DIRS = { UP: [0, -1], DOWN: [0, 1], LEFT: [-1, 0], RIGHT: [1, 0], W: [0, -1], S: [0, 1], A: [-1, 0], D: [1, 0] };
      ctx.onKey((k) => {
        if (k in DIRS) turn(...DIRS[k]);
        else if ((k === 'SPACE' || k === 'ENTER') && !overlay.hidden) go();
      });
      // Swipe on the board
      let sx = null, sy = null;
      canvas.addEventListener('pointerdown', (e) => { sx = e.clientX; sy = e.clientY; });
      canvas.addEventListener('pointerup', (e) => {
        if (sx == null) return;
        const dx = e.clientX - sx, dy = e.clientY - sy;
        sx = null;
        if (Math.max(Math.abs(dx), Math.abs(dy)) < 18) return;
        Math.abs(dx) > Math.abs(dy) ? turn(Math.sign(dx), 0) : turn(0, Math.sign(dy));
      });
      const pad = h('div', { class: 'sn-pad' },
        h('button', { class: 'sn-key up', onclick: () => turn(0, -1) }, '▲'),
        h('button', { class: 'sn-key left', onclick: () => turn(-1, 0) }, '◀'),
        h('button', { class: 'sn-key right', onclick: () => turn(1, 0) }, '▶'),
        h('button', { class: 'sn-key down', onclick: () => turn(0, 1) }, '▼')
      );
      ctx.onHide(() => { visible = false; if (timer) { stop(); overlay.textContent = 'Paused — tap to resume'; overlay.hidden = false; } });
      ctx.onShow(() => (visible = true));

      reset();
      spawn();
      draw();
      root.append(
        CQ.clueBox(ctx.clue),
        h('p', { class: 'g-help' }, 'Eat the letters of the answer in order. Steer with the arrow keys, by swiping, or with the buttons.'),
        slots.el, counter, wrap, pad
      );
      render();
    },
  });
})();
