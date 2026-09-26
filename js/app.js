/* Connections board: daily puzzle, game assignment, grouping, persistence and the midnight reset. */
(function () {
  const { h } = CQ;
  const MAX_MISTAKES = 4;
  const COLORS = ['yellow', 'green', 'blue', 'purple'];

  const dateKey = CQ.todayKey();
  const pool = window.PUZZLES;
  // Walk the pool in a fixed shuffled order so consecutive days don't follow authoring order.
  const poolOrder = CQ.rng('pool-order').shuffle(pool.map((_, i) => i));
  const puzzle = pool[poolOrder[((CQ.dayNumber() % pool.length) + pool.length) % pool.length]];
  const rng = CQ.rng('day-' + dateKey);

  // Flatten words. Each word gets a unique game; words are assigned so every game's constraints hold.
  const items = [];
  puzzle.groups.forEach((g, gi) => g.words.forEach(([word, clue]) => items.push({ word, clue, group: gi })));
  function assignGames() {
    const order = rng.shuffle(items.map((_, i) => i));
    const used = new Set();
    const games = CQ.games;
    const cand = {};
    order.forEach((i) => (cand[i] = rng.shuffle(games.filter((g) => g.fits(items[i].word)))));
    // Most-constrained words first.
    order.sort((a, b) => cand[a].length - cand[b].length);
    function bt(k) {
      if (k === order.length) return true;
      const i = order[k];
      for (const g of cand[i]) {
        if (used.has(g.id)) continue;
        used.add(g.id);
        items[i].game = g.id;
        if (bt(k + 1)) return true;
        used.delete(g.id);
      }
      return false;
    }
    if (!bt(0)) {
      // Fallback (shouldn't happen): allow repeats of always-compatible games.
      items.forEach((it) => (it.game = it.game || 'wordle'));
    }
  }
  assignGames();

  // ---------- Persistence ----------
  const STORE = 'cq-' + dateKey;
  const fresh = () => ({
    results: {},            // item index -> 'won' | 'lost'
    solved: [],             // group indices, in solve order
    mistakes: 0,
    guesses: [],            // sorted word-index keys already tried
    order: rng.shuffle(items.map((_, i) => i)),
    over: false,
  });
  let state;
  try {
    state = JSON.parse(localStorage.getItem(STORE)) || fresh();
  } catch (e) {
    state = fresh();
  }
  state.stats = state.stats || {};     // item index -> short silly stat
  state.started = state.started || {}; // item index -> first-open timestamp
  state.times = state.times || {};     // item index -> ms spent
  const save = () => {
    try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) {}
    recordHistory();
  };

  // ---------- Long-term history (kept forever, one small entry per day) ----------
  const HISTORY = 'cq-history';
  function loadHistory() {
    try { return JSON.parse(localStorage.getItem(HISTORY)) || {}; } catch (e) { return {}; }
  }
  function recordHistory() {
    if (CQ.preview || (!Object.keys(state.results).length && !state.guesses.length)) return;
    const hist = loadHistory();
    const t = tally();
    const games = {};
    Object.entries(state.results).forEach(([i, r]) => (games[items[i].game] = r === 'won' ? 1 : 0));
    hist[dateKey] = { w: t.won, g: t.groups, m: state.mistakes, over: state.over, solved: state.over && !state.lostConnections, ms: t.ms, games };
    try { localStorage.setItem(HISTORY, JSON.stringify(hist)); } catch (e) {}
  }
  // Clean out old days (not while previewing, or we'd wipe today's progress).
  if (!CQ.preview) try {
    Object.keys(localStorage).filter((k) => k.startsWith('cq-2') && k !== STORE).forEach((k) => localStorage.removeItem(k));
  } catch (e) {}

  let selected = new Set();

  // ---------- Board ----------
  const boardEl = document.getElementById('board');
  const solvedEl = document.getElementById('solved');
  const statusEl = document.getElementById('status');
  const mistakesEl = document.getElementById('mistakes');
  const submitBtn = document.getElementById('submit');
  const progressEl = document.getElementById('progress');

  function renderBoard() {
    // Only append newly solved groups so existing bars don't replay their entrance animation.
    for (let k = solvedEl.children.length; k < state.solved.length; k++) solvedEl.append(groupBar(state.solved[k]));
    const remaining = state.order.filter((i) => !state.solved.includes(items[i].group));
    boardEl.replaceChildren(...remaining.map((i) => tile(i)));
    const unlocked = Object.keys(state.results).length;
    progressEl.textContent = `${unlocked}/16 words uncovered`;
    mistakesEl.replaceChildren(
      h('span', null, 'Mistakes remaining:'),
      ...Array.from({ length: MAX_MISTAKES }, (_, k) => h('span', { class: 'dot' + (k < MAX_MISTAKES - state.mistakes ? '' : ' used') }))
    );
    submitBtn.disabled = state.over || selected.size !== 4;
    document.getElementById('deselect').disabled = !selected.size;
    if (state.over) renderEnd();
  }
  function groupBar(gi) {
    const g = puzzle.groups[gi];
    return h('div', { class: 'group ' + COLORS[g.difficulty] },
      h('div', { class: 'group-cat' }, g.category),
      h('div', { class: 'group-words' }, g.words.map((w) => w[0]).join(', '))
    );
  }
  function tile(i) {
    const it = items[i];
    const res = state.results[i];
    const game = CQ.game(it.game);
    if (!res) {
      return h('button', { class: 'tile locked', onclick: () => openGame(i), title: game.name },
        h('span', { class: 'tile-icon' }, game.icon),
        h('span', { class: 'tile-name' }, game.name)
      );
    }
    const len = it.word.length;
    return h('button', {
      class: 'tile word' + (selected.has(i) ? ' selected' : '') + (res === 'lost' ? ' lost' : '') + (len >= 8 ? ' long' : ''),
      title: res === 'lost' ? 'Revealed after a failed game' : 'Uncovered with ' + game.name,
      onclick: () => toggle(i),
    }, it.word, h('span', { class: 'tile-badge' }, game.icon));
  }
  function toggle(i) {
    if (state.over) return;
    if (selected.has(i)) selected.delete(i);
    else if (selected.size < 4) selected.add(i);
    renderBoard();
  }

  function submit() {
    if (selected.size !== 4 || state.over) return;
    const pick = [...selected];
    const key = pick.slice().sort((a, b) => a - b).join(',');
    if (state.guesses.includes(key)) return CQ.toast('Already guessed!');
    state.guesses.push(key);
    const counts = {};
    pick.forEach((i) => (counts[items[i].group] = (counts[items[i].group] || 0) + 1));
    const best = Math.max(...Object.values(counts));
    const tiles = [...boardEl.querySelectorAll('.tile.selected')];
    if (best === 4) {
      state.solved.push(items[pick[0]].group);
      selected.clear();
      if (state.solved.length === 4) state.over = true;
      save();
      tiles.forEach((t) => t.classList.add('pop'));
      setTimeout(renderBoard, 350);
      return;
    }
    state.mistakes++;
    tiles.forEach((t) => CQ.shake(t));
    CQ.toast(best === 3 ? 'One away…' : 'Not a group');
    if (state.mistakes >= MAX_MISTAKES) {
      state.over = true;
      selected.clear();
      // Reveal the remaining groups in difficulty order.
      [0, 1, 2, 3].filter((gi) => !state.solved.includes(gi)).forEach((gi) => state.solved.push(gi));
      state.lostConnections = true;
      items.forEach((_, i) => (state.results[i] = state.results[i] || 'lost'));
    }
    save();
    setTimeout(renderBoard, 400);
  }

  // ---------- Stats ----------
  function computeStats() {
    const hist = loadHistory();
    const days = Object.keys(hist).sort();
    const solvedDays = new Set(days.filter((d) => hist[d].solved));
    const keyFor = (offset) => { const d = CQ.now(); d.setDate(d.getDate() - offset); return CQ.todayKey(d); };
    // Current streak counts back from today, or from yesterday if today isn't solved yet.
    let cur = 0;
    for (let o = solvedDays.has(dateKey) ? 0 : 1; solvedDays.has(keyFor(o)); o++) cur++;
    let max = 0, run = 0, prev = null;
    for (const d of days) {
      if (!hist[d].solved) { run = 0; prev = d; continue; }
      const p = new Date(d + 'T12:00'); p.setDate(p.getDate() - 1);
      run = prev === CQ.todayKey(p) && run ? run + 1 : 1;
      max = Math.max(max, run);
      prev = d;
    }
    const dist = [0, 0, 0, 0, 0]; // mistakes 0-3 on solved days, index 4 = lost
    days.forEach((d) => hist[d].over && (hist[d].solved ? dist[hist[d].m]++ : dist[4]++));
    const perGame = {};
    days.forEach((d) => Object.entries(hist[d].games || {}).forEach(([id, won]) => {
      perGame[id] = perGame[id] || { plays: 0, wins: 0 };
      perGame[id].plays++;
      perGame[id].wins += won;
    }));
    const miniPlays = Object.values(perGame).reduce((a, g) => a + g.plays, 0);
    const miniWins = Object.values(perGame).reduce((a, g) => a + g.wins, 0);
    const finished = days.filter((d) => hist[d].over).length;
    return { played: days.length, finished, solved: solvedDays.size, cur, max, dist, perGame, miniPlays, miniWins };
  }
  function openStats() {
    const s = computeStats();
    const pct = (a, b) => (b ? Math.round((100 * a) / b) : 0);
    const tile = (n, label) => h('div', { class: 'st-tile' }, h('div', { class: 'st-num' }, n), h('div', { class: 'st-label' }, label));
    const maxD = Math.max(1, ...s.dist);
    const today = state.over ? (state.lostConnections ? 4 : state.mistakes) : -1;
    const bars = ['0', '1', '2', '3', 'Lost'].map((label, i) =>
      h('div', { class: 'st-bar-row' },
        h('span', { class: 'st-bar-label' }, label),
        h('div', { class: 'st-bar' + (i === today ? ' today' : ''), style: { width: `${Math.max(8, (100 * s.dist[i]) / maxD)}%` } }, s.dist[i])
      )
    );
    const games = CQ.games
      .map((g) => ({ g, ...(s.perGame[g.id] || { plays: 0, wins: 0 }) }))
      .sort((a, b) => pct(b.wins, b.plays) - pct(a.wins, a.plays) || b.plays - a.plays);
    const played = games.filter((x) => x.plays);
    const best = played[0], worst = played.length > 1 ? played[played.length - 1] : null;
    document.getElementById('st-body').replaceChildren(
      h('div', { class: 'st-tiles' },
        tile(s.played, 'Played'),
        tile(pct(s.solved, s.finished) + '%', 'Solved'),
        tile(s.cur, 'Current streak'),
        tile(s.max, 'Max streak')
      ),
      h('h3', { class: 'st-h' }, 'Mistakes on solved days'),
      s.finished ? h('div', { class: 'st-bars' }, bars) : h('p', { class: 'muted' }, 'Finish a puzzle to start your chart.'),
      h('h3', { class: 'st-h' }, `Mini-games · ${s.miniWins}/${s.miniPlays} won (${pct(s.miniWins, s.miniPlays)}%)`),
      played.length ? h('p', { class: 'st-note' },
        best ? h('span', null, 'Best: ', h('b', null, `${best.g.icon} ${best.g.name}`)) : null,
        worst ? h('span', null, ' · Nemesis: ', h('b', null, `${worst.g.icon} ${worst.g.name}`)) : null
      ) : null,
      h('div', { class: 'st-games' }, games.map((x) =>
        h('div', { class: 'st-game' + (x.plays ? '' : ' none') },
          h('span', null, `${x.g.icon} ${x.g.name}`),
          h('span', { class: 'st-meter' }, h('span', { style: { width: pct(x.wins, x.plays) + '%' } })),
          h('span', { class: 'st-frac' }, x.plays ? `${x.wins}/${x.plays}` : '—')
        )
      )),
      h('p', { class: 'muted st-foot' }, 'Stats are saved in this browser only. Clearing site data resets them.')
    );
    statsModal.hidden = false;
  }
  const statsModal = document.getElementById('stats');
  document.getElementById('stats-btn').addEventListener('click', openStats);
  statsModal.addEventListener('click', (e) => (e.target === statsModal || e.target.closest('.st-close')) && (statsModal.hidden = true));

  // ---------- Results receipt ----------
  const GROUP_EMOJI = ['🟨', '🟩', '🟦', '🟪'];
  const fmtTime = (ms) => { const s = Math.round(ms / 1000); return `${Math.floor(s / 60)}m ${String(s % 60).padStart(2, '0')}s`; };
  const fmtPrice = (ms) => { const s = Math.round(ms / 1000); return `$${Math.floor(s / 60)}.${String(s % 60).padStart(2, '0')}`; };
  function tally() {
    const won = Object.values(state.results).filter((r) => r === 'won').length;
    const played = Object.keys(state.stats).length;
    const ms = Object.values(state.times).reduce((a, b) => a + b, 0);
    // Groups actually found by guessing (a lost game auto-reveals the rest).
    const groups = state.guesses.filter((k) => new Set(k.split(',').map((i) => items[i].group)).size === 1).length;
    const score = won + groups * 2 - state.mistakes;
    const rank = score >= 24 && state.mistakes === 0 ? 'Grand Lexicographer Supreme'
      : score >= 20 ? 'Distinguished Word Baron'
      : score >= 14 ? 'Journeyman Puzzler'
      : score >= 8 ? 'Casual Letter Enjoyer'
      : score >= 3 ? 'Alphabet Tourist'
      : 'Person Who Opened the App';
    return { won, played, ms, groups, rank: state.over ? rank : rank + ' (in progress)' };
  }
  function guessRows() {
    return state.guesses.map((key) => key.split(',').map((i) => GROUP_EMOJI[puzzle.groups[items[i].group].difficulty]).join(''));
  }
  function shareText() {
    const t = tally();
    const d = CQ.now().toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    const grid = [];
    for (let r = 0; r < 4; r++)
      grid.push(state.order.slice(r * 4, r * 4 + 4).map((i) => CQ.game(items[i].game).icon + (state.results[i] === 'won' ? '✅' : state.results[i] ? '❌' : '🔒')).join(' '));
    return [
      `🧾 wifegame · ${d}`,
      ...grid,
      '',
      ...(guessRows().length ? guessRows() : ['(no groups guessed yet)']),
      '',
      `${t.won}/16 games · ${state.mistakes} mistake${state.mistakes === 1 ? '' : 's'} · ⏱ ${fmtTime(t.ms)}`,
      `Rank: ${t.rank}`,
    ].join('\n');
  }
  function openReceipt() {
    const t = tally();
    const r = CQ.rng('barcode' + dateKey + t.won + state.mistakes);
    const now = CQ.now();
    const line = (l, rgt, cls) => h('div', { class: 'rc-line' + (cls ? ' ' + cls : '') }, h('span', null, l), h('span', null, rgt));
    const itemsEl = state.order.map((i) => {
      const g = CQ.game(items[i].game);
      const res = state.results[i];
      const stat = state.stats[i];
      return h('div', { class: 'rc-item' + (res ? '' : ' locked') },
        line(`${g.icon} ${g.name.toUpperCase()}`, res === 'won' ? '✅' : res ? '❌' : '🔒'),
        line('   ' + (stat || (res ? 'revealed at checkout' : 'still in the freezer')), state.times[i] != null ? fmtPrice(state.times[i]) : '--.--', 'rc-sub')
      );
    });
    const tax = state.mistakes;
    const bars = Array.from({ length: 46 }, () => h('span', { style: { width: r.range(1, 4) + 'px', marginRight: r.range(1, 3) + 'px' } }));
    const rows = guessRows();
    document.getElementById('rc-body').replaceChildren(
      h('div', { class: 'receipt' },
        h('div', { class: 'rc-center rc-title' }, 'WIFEMART'),
        h('div', { class: 'rc-center' }, 'Est. 2026 · 16 aisles · open till midnight'),
        h('div', { class: 'rc-center' }, now.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }) + ' ' + now.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })),
        h('div', { class: 'rc-center' }, `REG #0${(CQ.dayNumber() % 9) + 1}   CASHIER: ${r.pick(['GARY', 'THE WORDLE GUY', 'MARGE', 'A SENTIENT CROSSWORD', 'DEBRA', 'CLIPPY'])}`),
        h('div', { class: 'rc-rule' }),
        ...itemsEl,
        h('div', { class: 'rc-rule' }),
        line('ITEMS WON', `${t.won}/16`),
        line('GROUPS FOUND', `${t.groups}/4`),
        line('SUBTOTAL (time)', fmtPrice(t.ms)),
        line(`MISTAKE TAX (${tax} @ $1.00)`, `$${tax}.00`),
        line('TOTAL', fmtPrice(t.ms + tax * 60000), 'rc-total'),
        h('div', { class: 'rc-rule' }),
        h('div', { class: 'rc-center rc-head' }, 'COUPONS REDEEMED'),
        h('div', { class: 'rc-center rc-guesses' }, rows.length ? rows.join('\n') : 'none — try guessing a group!'),
        h('div', { class: 'rc-rule' }),
        h('div', { class: 'rc-center rc-head' }, 'CUSTOMER RANK'),
        h('div', { class: 'rc-center rc-rank' }, t.rank),
        h('div', { class: 'rc-rule' }),
        h('div', { class: 'rc-center' }, '*** NO REFUNDS ON BOUGHT VOWELS ***'),
        h('div', { class: 'rc-center' }, 'Thank you for shopping at wifemart! Come back after midnight.'),
        h('div', { class: 'rc-barcode' }, bars),
        h('div', { class: 'rc-center rc-small' }, dateKey.replace(/-/g, '') + ' ' + state.order.map((i) => (state.results[i] === 'won' ? 1 : 0)).join(''))
      )
    );
    receipt.hidden = false;
  }
  async function share() {
    const text = shareText();
    if (navigator.share && matchMedia('(pointer: coarse)').matches) {
      try { await navigator.share({ text }); return; } catch (e) { if (e.name === 'AbortError') return; }
    }
    try {
      await navigator.clipboard.writeText(text);
      CQ.toast('Results copied — paste them anywhere');
    } catch (e) {
      CQ.toast('Could not copy');
    }
  }
  const receipt = document.getElementById('receipt');
  document.getElementById('share-btn').addEventListener('click', openReceipt);
  document.getElementById('rc-share').addEventListener('click', share);
  receipt.addEventListener('click', (e) => (e.target === receipt || e.target.closest('.rc-close')) && (receipt.hidden = true));

  function renderEnd() {
    const end = document.getElementById('end');
    const won = !state.lostConnections;
    const t = tally();
    end.hidden = false;
    end.replaceChildren(
      h('h2', null, won ? (state.mistakes === 0 ? 'Perfect!' : 'Solved!') : 'Next time!'),
      h('p', null, `Mini-games won: ${t.won}/16 · Mistakes: ${state.mistakes}/${MAX_MISTAKES}`),
      h('div', { class: 'btn-row' },
        h('button', { class: 'btn primary', onclick: openReceipt }, '🧾 Get your receipt'),
        h('button', { class: 'btn', onclick: openStats }, '📊 Stats')
      ),
      h('p', { class: 'muted' }, 'A new puzzle unlocks at midnight.')
    );
    document.querySelector('.controls').hidden = true;
  }

  // ---------- Game modal ----------
  const modal = document.getElementById('modal');
  const mBody = document.getElementById('m-body');
  const mTitle = document.getElementById('m-title');
  const giveUp = document.getElementById('m-giveup');
  const instances = {}; // item index -> {root, keyHandler, show, hide, done}
  let openIdx = null;

  function openGame(i) {
    const it = items[i];
    const game = CQ.game(it.game);
    if (!instances[i]) {
      const inst = { root: h('div', { class: 'game game-' + game.id }), keyHandler: null, show: [], hide: [], finished: false };
      const ctx = {
        word: it.word,
        clue: it.clue,
        rng: CQ.rng(dateKey + ':' + it.word + ':' + game.id),
        done: () => inst.finished,
        onKey: (fn) => (inst.keyHandler = fn),
        key: (k) => inst.keyHandler && inst.keyHandler(k),
        onShow: (fn) => inst.show.push(fn),
        onHide: (fn) => inst.hide.push(fn),
        win: (stat) => finish(i, 'won', stat),
        fail: (stat) => finish(i, 'lost', stat),
      };
      instances[i] = inst;
      game.mount(inst.root, ctx);
    }
    const inst = instances[i];
    if (!state.started[i]) { state.started[i] = Date.now(); save(); }
    openIdx = i;
    mTitle.replaceChildren(h('span', { class: 'm-icon' }, game.icon), game.name);
    document.getElementById('m-blurb').textContent = game.blurb;
    mBody.replaceChildren(inst.root);
    giveUp.hidden = inst.finished;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    CQ.activeKeyHandler = (k) => (k === 'ESCAPE' ? closeGame() : inst.keyHandler && inst.keyHandler(k));
    inst.show.forEach((f) => f());
    mBody.scrollTop = 0;
  }
  function closeGame() {
    if (openIdx == null) return;
    instances[openIdx].hide.forEach((f) => f());
    openIdx = null;
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    CQ.activeKeyHandler = null;
    renderBoard();
  }
  function finish(i, result, stat) {
    const inst = instances[i];
    if (inst.finished) return;
    inst.finished = true;
    state.results[i] = result;
    state.stats[i] = stat || (result === 'won' ? 'nailed it' : 'gave up');
    state.times[i] = Date.now() - (state.started[i] || Date.now());
    save();
    giveUp.hidden = true;
    const it = items[i];
    const banner = h('div', { class: 'result ' + result },
      h('div', { class: 'result-label' }, result === 'won' ? 'You uncovered' : 'The word was'),
      h('div', { class: 'result-word' }, it.word),
      h('button', { class: 'btn primary', onclick: closeGame }, 'Back to the board')
    );
    inst.root.prepend(banner);
    mBody.scrollTop = 0;
  }
  document.getElementById('m-close').addEventListener('click', closeGame);
  modal.addEventListener('click', (e) => e.target === modal && closeGame());
  document.addEventListener('keydown', (e) => e.key === 'Escape' && closeGame());
  giveUp.addEventListener('click', () => {
    if (openIdx == null) return;
    if (confirm('Give up on this game? The word will be revealed but marked as failed.')) finish(openIdx, 'lost', 'gave up');
  });

  // ---------- Controls ----------
  submitBtn.addEventListener('click', submit);
  document.getElementById('shuffle').addEventListener('click', () => {
    const rem = state.order.filter((i) => !state.solved.includes(items[i].group));
    const done = state.order.filter((i) => state.solved.includes(items[i].group));
    state.order = [...done, ...CQ.rng(Math.random()).shuffle(rem)];
    save();
    renderBoard();
  });
  document.getElementById('deselect').addEventListener('click', () => { selected.clear(); renderBoard(); });

  const help = document.getElementById('help');
  document.getElementById('help-btn').addEventListener('click', () => (help.hidden = false));
  help.addEventListener('click', (e) => (e.target === help || e.target.closest('.help-close')) && (help.hidden = true));

  // ---------- Date + midnight reset ----------
  document.getElementById('date').textContent = CQ.now().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  if (CQ.preview) {
    document.querySelector('.wrap').prepend(
      h('div', { class: 'preview-banner' }, 'Preview mode — this puzzle isn\'t live yet and won\'t count toward your stats. ', h('a', { href: location.pathname }, 'Back to today'))
    );
  }
  // Reload into the new puzzle once the viewer's local date changes.
  function tick() {
    if (CQ.todayKey() !== dateKey) location.reload();
  }
  setInterval(tick, 30000);
  // Catch sleeping tabs / laptops that wake up after midnight.
  document.addEventListener('visibilitychange', () => document.visibilityState === 'visible' && tick());

  if (!localStorage.getItem('cq-seen-help')) {
    help.hidden = false;
    try { localStorage.setItem('cq-seen-help', '1'); } catch (e) {}
  }
  renderBoard();

  // Debug hook for testing: CQ.debug.items
  CQ.debug = { items, puzzle, state };
})();
