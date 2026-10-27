import { getLevelProgress } from "../domain/progression.js";
import { spring, stepSpring } from "../lib/hairline-spring.js";

export function renderLevelUp(outcome) {
  const gain = Math.max(0, Math.floor(outcome.xpGain || 0));
  const total = Math.max(gain, Math.floor(outcome.levelTotalXp ?? outcome.totalXp ?? gain));
  const from = getLevelProgress(total - gain).level;
  if (getLevelProgress(total).level <= from) return "";
  return `<div class="completion-level-up" data-level-up hidden>
    <div class="completion-level-up-art" aria-hidden="true">
      <span class="completion-level-up-ring"></span>
      ${Array.from({ length:10 }, () => '<img class="completion-level-up-spark" src="assets/icons/dashboard-levels.svg" alt="">').join("")}
      <div class="completion-level-up-badge"><img src="assets/icons/dashboard-levels.svg" alt=""><bdi class="ui-number" data-level-up-number>${from}</bdi></div>
      <strong>مستوى جديد!</strong>
    </div>
  </div><span class="visually-hidden" role="status" aria-live="polite" aria-atomic="true" data-level-up-announcement></span>`;
}

// A finite spring on the existing artwork; no line-art renderer or perpetual loop.
export function mountLevelUp(root) {
  const element = root.querySelector("[data-level-up]");
  if (!element) return null;
  const art = element.querySelector(".completion-level-up-art");
  const number = element.querySelector("[data-level-up-number]");
  const announcement = root.querySelector("[data-level-up-announcement]");
  const ring = element.querySelector(".completion-level-up-ring");
  const sparks = [...element.querySelectorAll(".completion-level-up-spark")];
  const lift = spring(0, { k:220, c:20, eps:.001 });
  lift.t = 1;
  let frame;
  let previous;
  let disposed = false;
  const animations = new Set();
  const paint = () => {
    art.style.opacity = String(Math.min(1, Math.max(0, lift.x * 2)));
    art.style.transform = `translateY(${(1 - lift.x) * 48}px) scale(${.55 + lift.x * .45})`;
  };
  const tick = () => {
    const now = performance.now();
    const moving = stepSpring(lift, Math.min(.05, (now - previous) / 1000));
    previous = now;
    paint();
    frame = moving ? requestAnimationFrame(tick) : undefined;
  };
  const animate = (node, frames, options) => {
    const animation = node.animate(frames, options);
    animations.add(animation);
    animation.addEventListener("finish", () => animations.delete(animation), { once:true });
  };
  const stop = () => {
    cancelAnimationFrame(frame);
    frame = undefined;
    animations.forEach(animation => animation.cancel());
    animations.clear();
    lift.x = lift.t;
    lift.v = 0;
    paint();
  };
  return {
    show(level, motion = true) {
      if (disposed) return;
      const first = element.hidden;
      element.hidden = false;
      element.dataset.level = String(level);
      number.textContent = String(level);
      announcement.textContent = `مستوى جديد! وصلت إلى المستوى ${level}`;
      if (!motion) { stop(); return; }
      // A second crossing adds energy without resetting position or velocity.
      if (!first) lift.v += 3.2;
      if (frame === undefined) {
        previous = performance.now();
        frame = requestAnimationFrame(tick);
      }
      paint();
      animations.forEach(animation => animation.cancel());
      animations.clear();
      animate(ring, [{ opacity:.8, transform:"scale(.55)" }, { opacity:0, transform:"scale(1.65)" }], { duration:700, easing:"cubic-bezier(.32,.72,0,1)" });
      sparks.forEach((spark, index) => {
        const angle = index / sparks.length * Math.PI * 2;
        const x = Math.cos(angle) * (76 + index % 3 * 9);
        const y = Math.sin(angle) * (68 + index % 2 * 12);
        animate(spark, [
          { opacity:0, transform:`translate(0,0) rotate(${index * 31}deg) scale(.3)` },
          { opacity:1, offset:.15 },
          { opacity:0, transform:`translate(${x}px,${y}px) rotate(${index * 31 + 28}deg) scale(.65)` },
        ], { duration:660, delay:index * 22, easing:"cubic-bezier(.32,.72,0,1)", fill:"backwards" });
      });
    },
    dispose() { stop(); disposed = true; },
  };
}
