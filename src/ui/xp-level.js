import { getLevelProgress, MAX_LEVEL } from "../domain/progression.js?v=acff67f262f3c107";
import { prefersReducedMotion } from "../lib/dom.js?v=acff67f262f3c107";
import { mountLevelUp } from "./level-up.js?v=acff67f262f3c107";

export function renderCompletionLevel(outcome) {
  const gain = Math.max(0, Math.floor(outcome.xpGain || 0));
  const total = Math.max(gain, Math.floor(outcome.levelTotalXp ?? outcome.totalXp ?? gain));
  const { level, xp, levelXpGoal, levelProgress } = getLevelProgress(total);
  return `<div class="completion-level" data-xp-total="${total}" data-xp-gain="${gain}">
    <div class="completion-level-heading"><span>المستوى <bdi class="ui-number" data-level-number>${level}</bdi></span><bdi class="ui-number" data-level-caption>${level === MAX_LEVEL ? "المستوى الأقصى" : `${xp} / ${levelXpGoal} XP`}</bdi></div>
    <div class="completion-level-meter"><img class="completion-level-bolt" src="assets/icons/dashboard-levels.svg" alt="" aria-hidden="true"><div class="dashboard-level-progress" role="progressbar" aria-label="التقدّم في المستوى" aria-valuemin="0" aria-valuemax="${levelXpGoal}" aria-valuenow="${xp}" aria-valuetext="المستوى ${level}، ${xp} من ${levelXpGoal} XP"><span style="width:${levelProgress}%"></span></div></div>
  </div>`;
}

// One SVG bolt per earned XP. Emit gradually and bound concurrent DOM nodes,
// so even long sessions collect every point without building a huge particle tree.
export function animateCompletionLevel(root, onDeparture, onComplete) {
  const levelRoot = root.querySelector(".completion-level");
  if (!levelRoot) { onComplete(); return () => {}; }
  const amount = Number(levelRoot.dataset.xpGain);
  const total = Number(levelRoot.dataset.xpTotal);
  const start = total - amount;
  const track = levelRoot.querySelector('[role="progressbar"]');
  const fill = track.firstElementChild;
  const bolt = levelRoot.querySelector(".completion-level-bolt");
  const number = levelRoot.querySelector("[data-level-number]");
  const caption = levelRoot.querySelector("[data-level-caption]");
  const levelUp = mountLevelUp(root);
  let shownLevel = getLevelProgress(start).level;
  let pulse;
  let fillPulse;
  let lastPulse = 0;
  const update = (collected, animate = true) => {
    const state = getLevelProgress(start + collected);
    const crossedLevel = state.level > shownLevel;
    fill.style.transition = crossedLevel ? "none" : "";
    fill.style.width = `${state.levelProgress}%`;
    // Commit the new level before another arrival in the same frame can animate.
    if (crossedLevel && animate) fill.getBoundingClientRect();
    number.textContent = String(state.level);
    caption.textContent = state.level === MAX_LEVEL ? "المستوى الأقصى" : `${state.xp} / ${state.levelXpGoal} XP`;
    track.setAttribute("aria-valuenow", String(state.xp));
    track.setAttribute("aria-valuetext", `المستوى ${state.level}، ${state.xp} من ${state.levelXpGoal} XP`);
    if (crossedLevel) levelUp?.show(state.level, animate);
    shownLevel = state.level;
    if (animate && collected && (crossedLevel || performance.now() - lastPulse > 100)) {
      lastPulse = performance.now();
      pulse?.cancel();
      pulse = bolt.animate([{ transform:"scale(1)" }, { transform:`scale(${crossedLevel ? 1.4 : 1.16})`, offset:.3 }, { transform:"scale(1)" }], { duration:crossedLevel ? 380 : 160, easing:"ease-out" });
      fillPulse?.cancel();
      fillPulse = fill.animate(Array.from({ length:13 }, (_, index) => {
        const t = index / 12;
        return { offset:t, transform:`scaleY(${1 + Math.sin(t * 12.6) * Math.exp(-t * 4.05) * .18})` };
      }), { duration:450, easing:"linear" });
    }
  };
  update(0);
  if (prefersReducedMotion()) {
    update(amount, false);
    onComplete();
    return () => levelUp?.dispose();
  }
  if (!amount) { onComplete(); return () => {}; }

  const layer = document.createElement("span");
  layer.className = "subject-xp-particles";
  layer.setAttribute("aria-hidden", "true");
  root.append(layer);
  let flightGeometry;
  const animations = new Set();
  const emissionDuration = 180 + 30 * amount ** .7;
  const started = performance.now();
  let emitted = 0;
  let arrived = 0;
  let disposed = false;
  let frame;
  const emit = (index) => {
    // Measure after the cards and bar have finished their entrances.
    if (!flightGeometry) {
      const rootRect = root.getBoundingClientRect();
      const trackRect = track.getBoundingClientRect();
      const sourceRect = root.querySelector(".subject-gain-icon--xp").getBoundingClientRect();
      const scale = rootRect.width / root.offsetWidth || 1;
      flightGeometry = {
        startX:(sourceRect.left - rootRect.left + sourceRect.width / 2) / scale - 12,
        startY:(sourceRect.top - rootRect.top + sourceRect.height / 2) / scale - 12,
        targetRight:(trackRect.right - rootRect.left) / scale,
        trackWidth:trackRect.width / scale,
        targetY:(trackRect.top - rootRect.top + trackRect.height / 2) / scale - 12,
      };
    }
    const { startX, startY, targetRight, trackWidth, targetY } = flightGeometry;
    const seed = multiplier => {
      const value = Math.sin((index + 1) * multiplier) * 43758.5453;
      return value - Math.floor(value);
    };
    const particle = document.createElement("img");
    particle.className = "subject-xp-particle";
    particle.src = "assets/icons/dashboard-levels.svg";
    particle.alt = "";
    layer.append(particle);
    // Fan away from the number so its countdown stays readable on phones.
    const scatter = -8 - seed(12.9898) * 38;
    const lift = 30 + seed(78.233) * 65;
    const state = getLevelProgress(start + index + 1);
    const targetX = targetRight - trackWidth * state.levelProgress / 100 - 12;
    const tilt = (seed(9.17) - .5) * 64;
    const size = .6 + seed(39.425) * .5;
    const keyframes = Array.from({ length:21 }, (_, step) => {
      const t = step / 20;
      const travel = t * t * (2 - t);
      const remaining = 1 - travel;
      const x = remaining ** 3 * startX + 3 * remaining ** 2 * travel * (startX + scatter) + 3 * remaining * travel ** 2 * (targetX + scatter * .3) + travel ** 3 * targetX;
      const y = remaining ** 3 * startY + 3 * remaining ** 2 * travel * (startY - lift) + 3 * remaining * travel ** 2 * (targetY - 40) + travel ** 3 * targetY;
      const shrink = t > .8 ? 1 - (t - .8) * 3.5 : 1;
      return { offset:t, opacity:Math.min(1, t / .12, (1 - t) / .08), transform:`translate3d(${x}px,${y}px,0) rotate(${tilt * (1 - t)}deg) scale(${size * shrink})` };
    });
    const animation = particle.animate(keyframes, { duration:580, easing:"linear", fill:"both" });
    animations.add(animation);
    onDeparture(index + 1);
    animation.addEventListener("finish", () => {
      animations.delete(animation);
      particle.remove();
      if (disposed) return;
      arrived += 1;
      update(arrived);
      if (arrived === amount) { layer.remove(); onComplete(); }
    }, { once:true });
  };
  const tick = now => {
    if (disposed) return;
    const due = Math.floor(amount * Math.min(1, Math.max(0, (now - started - 1550) / emissionDuration)));
    while (emitted < due && animations.size < 80) emit(emitted++);
    if (emitted < amount) frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);
  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    animations.forEach(animation => animation.cancel());
    pulse?.cancel();
    fillPulse?.cancel();
    layer.remove();
    // Final recorded values remain visible if motion is switched off midway.
    update(amount, false);
    levelUp?.dispose();
  };
}
