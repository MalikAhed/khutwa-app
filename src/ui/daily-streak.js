/** The daily greeting pauses between each gesture; only Continue dismisses it. */
export function mountDailyStreakSequence(dialog, { onRewards, celebrationSource }) {
  const rocky = dialog.querySelector('.completion-streak-rocky');
  const mascot = rocky.closest('.completion-streak-mascot');
  const body = rocky.parentElement;
  const rig = body.querySelector('.completion-streak-rig');
  const media = new AbortController();
  const fire = dialog.querySelector('.completion-streak-scene');
  const button = dialog.querySelector('button');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const timers = new Set();
  let stopRewards = () => {};
  let disposed = false;
  const schedule = (delay, callback) => {
    const timer = setTimeout(() => {
      timers.delete(timer);
      if (!disposed) callback();
    }, delay);
    timers.add(timer);
  };
  const clearTimers = () => {
    timers.forEach(timer => clearTimeout(timer));
    timers.clear();
  };
  const loadWaveRig = async () => {
    try {
      const response = await fetch('assets/mascot/rocky-wave.svg', { signal:media.signal });
      if (!response.ok) return;
      const source = await response.text();
      if (disposed || motion.matches || ['settle','reward'].includes(dialog.dataset.streakStage)) return;
      const parsed = new DOMParser().parseFromString(source.replaceAll('rocky-body-clip','streak-body-clip'), 'image/svg+xml');
      if (parsed.documentElement.localName !== 'svg' || parsed.querySelector('parsererror')) return;
      // Keep the approved wave paused until the greeting starts.
      parsed.querySelectorAll('script,foreignObject').forEach(node => node.remove());
      const svg = document.importNode(parsed.documentElement, true);
      svg.classList.add('streak-rocky-svg');
      svg.querySelectorAll('style').forEach(style => {
        style.textContent = style.textContent.replaceAll('[data-part', '.streak-rocky-svg [data-part')
          .replaceAll('rocky-wave-', 'streak-rocky-wave-');
      });
      svg.removeAttribute('aria-labelledby');
      svg.setAttribute('aria-hidden', 'true');
      rig.replaceChildren(svg);
      body.classList.add('is-rig-ready');
    } catch { /* The production image remains visible if the rig cannot load. */ }
  };
  const setStage = stage => {
    dialog.dataset.streakStage = stage;
    // Start travel and stretch together, including on a busy device.
    getComputedStyle(mascot).transform;
    getComputedStyle(body).transform;
  };
  const placeRocky = () => {
    const rect = fire.getBoundingClientRect();
    const scene = fire.closest('.completion-streak-celebration').getBoundingClientRect();
    // The first grid row reserves Rocky's final space above the fire. Use that
    // same space for the animated landing at every viewport size.
    const size = rect.top - scene.top;
    const centerY = rect.top - size / 2;
    mascot.style.setProperty('--rocky-final-y', `${centerY - innerHeight / 2}px`);
    mascot.style.setProperty('--rocky-final-scale', String(size / mascot.offsetWidth));
  };
  const ready = () => {
    dialog.dataset.streakReady = 'true';
    button.disabled = false;
    button.focus({ preventScroll:true });
  };
  const rewards = () => {
    placeRocky();
    stopRewards();
    stopRewards = onRewards();
    setStage('reward');
    body.classList.remove('is-rig-ready');
    if (motion.matches) ready();
    else {
      rocky.src = celebrationSource();
      schedule(1800, ready);
      schedule(3300, () => { rocky.src = 'assets/mascot/rocky-standing-still.svg'; });
    }
  };
  const reduceMotion = () => {
    if (!motion.matches) return;
    clearTimers();
    media.abort();
    body.classList.remove('is-rig-ready');
    dialog.dataset.streakReduced = 'true';
    rocky.src = 'assets/mascot/rocky-standing-still-reduced.svg';
    rewards();
  };
  setStage('fade');
  placeRocky();
  if (motion.matches) reduceMotion();
  else {
    // Each pause starts when its stage appears, including on a busy device.
    void loadWaveRig();
    const stages = [[2100,'peek'],[240,'wave'],[2400,'settle']];
    const next = index => {
      if (index === stages.length) { schedule(460, rewards); return; }
      const [delay, stage] = stages[index];
      schedule(delay, () => {
        setStage(stage);
        next(index + 1);
      });
    };
    next(0);
  }
  window.addEventListener('resize', placeRocky);
  motion.addEventListener('change', reduceMotion);
  return () => {
    disposed = true;
    media.abort();
    clearTimers();
    stopRewards();
    window.removeEventListener('resize', placeRocky);
    motion.removeEventListener('change', reduceMotion);
  };
}
