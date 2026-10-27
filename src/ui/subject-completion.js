import { prefersReducedMotion } from "../lib/dom.js";
import { preloadImages } from "./media-ready.js";
import { formatArabicCount } from "./learner-format.js";
import { renderCompletionLevel, animateCompletionLevel } from "./xp-level.js";
import { renderLevelUp } from "./level-up.js";
import { mountDailyStreakSequence } from "./daily-streak.js";

let celebrationPlayback = 0;

export function preloadCompletionMedia() {
  const still = prefersReducedMotion();
  preloadImages(
    still
      ? ["assets/mascot/rocky-standing-still-reduced.svg", "assets/icons/streak-fire-burning-reduced.svg", "assets/icons/dashboard-levels.svg", "assets/icons/dashboard-challenges.svg", "assets/icons/dashboard-quest-time.svg"]
      : [
          `assets/mascot/rocky-happy-jump.svg?play=${celebrationPlayback + 1}`,
          `assets/mascot/rocky-happy-jump.svg?play=${celebrationPlayback + 2}`,
          "assets/mascot/rocky-standing-still.svg",
          "assets/icons/streak-fire-burning.svg",
          "assets/icons/dashboard-levels.svg",
          "assets/icons/dashboard-challenges.svg",
          "assets/icons/dashboard-quest-time.svg",
        ],
  );
}

function celebrationMascotSource() {
  return prefersReducedMotion()
    ? "assets/mascot/rocky-standing-still-reduced.svg"
    : `assets/mascot/rocky-happy-jump.svg?play=${++celebrationPlayback}`;
}

export function renderSubjectCompletion(title, outcome) {
  const { xpGain = 0, progress = 0, totalParts = 0, elapsedSeconds = null } = outcome;
  const displayedXp = xpGain;
  const lessonShare = outcome.lessonShare ?? (totalParts > 0 ? Math.round(100 / totalParts) : null);
  const showAccuracy = !outcome.demoMode && (outcome.sessionEnded || outcome.accuracy !== undefined);
  const score = showAccuracy ? outcome.accuracy : lessonShare;
  const duration = Number.isFinite(elapsedSeconds) ? `${Math.floor(elapsedSeconds / 60)}:${String(Math.floor(elapsedSeconds % 60)).padStart(2, "0")}` : "—";
  const mascotSource = celebrationMascotSource();
  const count = (value, delay, format = "number", display = value) =>
    `<span data-gain-count="${value}" data-gain-from="0" data-gain-delay="${delay}" data-gain-format="${format}">${display}</span>`;
  const stat = (kind, label, icon, value) =>
    `<div class="subject-gain subject-gain--${kind}"><span>${label}</span><strong>${icon}${value}</strong></div>`;
  return `<div class="level-lesson-copy ready-lesson-result subject-completion subject-completion--result" dir="rtl">
    <div class="subject-completion-hero">
      <div class="subject-completion-scene"><img class="subject-completion-rocky" src="${mascotSource}" alt="روكي سعيد بإنجازك">${renderLevelUp(outcome)}</div>
      <h1 id="authored-lesson-complete-title">${outcome.demoMode ? "أحسنت! أنهيت تجربتك الأولى" : outcome.sessionEnded ? "أحسنت! أنهيت جلستك" : "أكملت الدرس!"}</h1>
    </div>
    <div class="subject-gains">
      ${stat("xp", "مجموع XP", '<img class="subject-gain-icon subject-gain-icon--xp" src="assets/icons/dashboard-levels.svg" alt="" aria-hidden="true">', `<bdi class="ui-number" dir="ltr">${count(displayedXp, 760)}</bdi>`)}
      ${stat("accuracy", showAccuracy ? "دقّة الإجابات" : outcome.demoMode ? "نسبة التجربة" : "نسبة الدرس", '<img class="subject-gain-icon subject-gain-icon--accuracy" src="assets/icons/dashboard-challenges.svg" alt="" aria-hidden="true">', `<bdi class="ui-number" dir="ltr">${score == null ? "—" : `${count(score, 220)}%`}</bdi>`)}
      ${stat("quick", "وقت التعلّم", '<img class="subject-gain-icon subject-gain-icon--quick" src="assets/icons/dashboard-quest-time.svg" alt="" aria-hidden="true">', `<bdi class="ui-number" dir="ltr">${Number.isFinite(elapsedSeconds) ? count(elapsedSeconds, 320, "duration", duration) : duration}</bdi>`)}
    </div>
    ${renderCompletionLevel(outcome)}
    <span class="visually-hidden">تقدّم المادة ${progress}%</span>
  </div>`;
}

function streakDays({ streak = 0, activeToday = false, date = new Date() }) {
  const today = new Date(date);
  const labels = ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"];
  return Array.from({ length:7 }, (_, index) => {
    const day = new Date(today);
    day.setDate(today.getDate() - 6 + index);
    const ago = 6 - index;
    const complete = activeToday ? ago < streak : ago > 0 && ago <= streak;
    const label = labels[day.getDay()];
    const check = '<svg viewBox="0 0 24 24" fill="none"><path d="m6 12 4 4 8-8" pathLength="1" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const particles = ago === 0 && complete ? '<svg class="completion-day-particles" viewBox="-40 -40 80 80" fill="#ffb300"><circle cx="0" cy="-28" r="3"/><circle cx="24" cy="-14" r="2.5"/><circle cx="24" cy="14" r="3"/><circle cx="0" cy="28" r="2.5"/><circle cx="-24" cy="14" r="3"/><circle cx="-24" cy="-14" r="2.5"/></svg>' : "";
    return `<li class="${complete ? "is-complete" : ""}${ago === 0 ? " is-today" : ""}" aria-label="${label}، ${complete ? "مكتمل" : "لم يُسجّل إنجاز"}"${ago === 0 ? ' aria-current="date"' : ""}><span aria-hidden="true">${label}</span><i aria-hidden="true">${complete ? check : ""}${particles}</i></li>`;
  }).join("");
}

export function renderSubjectStreak(outcome = {}, titleId = "authored-lesson-complete-title") {
  const streak = Math.max(0, Number(outcome.streak) || 0);
  return `<div class="level-lesson-copy ready-lesson-result subject-completion subject-completion--streak" dir="rtl">
    <div class="completion-streak-celebration">
      <div class="completion-streak-stage"><div class="completion-streak-mascot"><p class="completion-streak-greeting">أهلًا بعودتك!</p><div class="completion-streak-body" role="img" aria-label="روكي يحتفل بسلسلتك"><span class="completion-streak-rig" aria-hidden="true"></span><img class="completion-streak-rocky" src="assets/mascot/rocky-standing-still${prefersReducedMotion() ? "-reduced" : ""}.svg" alt="" aria-hidden="true"></div></div></div>
      <div class="completion-streak-scene"><picture><source media="(prefers-reduced-motion: reduce)" srcset="assets/icons/streak-fire-burning-reduced.svg"><img class="completion-streak-fire" src="assets/icons/streak-fire-burning${prefersReducedMotion() ? "-reduced" : ""}.svg" alt="" aria-hidden="true"></picture></div>
    </div>
    <h1 id="${titleId}" class="completion-streak-count"><strong class="ui-number" data-gain-count="${streak}" data-gain-from="${Math.max(0, streak - 1)}" data-gain-delay="450">${streak}</strong><span>سلسلة التعلّم</span></h1>
    <p class="completion-streak-caption">${formatArabicCount(streak, "day")} من التعلّم المتواصل</p>
    <ol class="completion-week" aria-label="آخر سبعة أيام من سلسلة التعلّم">${streakDays(outcome)}</ol>
  </div>`;
}

// Overlay the saved answer without replacing its controls or feedback.
export function showDailyStreak(container, outcome, signal) {
  if (signal.aborted) return;
  const dialog = document.createElement("dialog");
  dialog.className = "lesson-daily-streak";
  dialog.setAttribute("aria-labelledby", "daily-streak-title");
  dialog.innerHTML = `<div class="daily-streak-layout">${renderSubjectStreak(outcome, "daily-streak-title")}<button type="button" class="system-action system-action--primary" disabled>متابعة التعلّم</button></div>`;
  const previousFocus = document.activeElement;
  container.append(dialog);
  dialog.showModal();
  const stopSequence = mountDailyStreakSequence(dialog, {
    onRewards:() => animateSubjectCompletion(dialog),
    celebrationSource:celebrationMascotSource,
  });
  let exitTimer;
  const dismiss = () => {
    if (dialog.classList.contains("is-leaving")) return;
    dialog.classList.add("is-leaving");
    exitTimer = setTimeout(() => dialog.close(), prefersReducedMotion() ? 0 : 220);
  };
  const cleanup = () => {
    clearTimeout(exitTimer);
    stopSequence();
    signal.removeEventListener("abort", cleanup);
    if (dialog.open) dialog.close();
    dialog.remove();
    if (!signal.aborted && previousFocus?.isConnected) previousFocus.focus({ preventScroll:true });
  };
  dialog.addEventListener("close", cleanup, { once:true });
  dialog.querySelector("button").addEventListener("click", dismiss, { once:true });
  signal.addEventListener("abort", cleanup, { once:true });
}

function formatAnimatedGain(value, format) {
  const rounded = Math.max(0, Math.round(value));
  if (format === "duration")
    return `${Math.floor(rounded / 60)}:${String(rounded % 60).padStart(2, "0")}`;
  return String(rounded);
}

// All values are visual interpolation of an already computed outcome; no rewards are written here.
export function animateSubjectCompletion(container) {
  const root = container.querySelector(".subject-completion");
  if (!root) return () => {};
  const xpLabel = root.querySelector(".subject-gain--xp > span");
  const finishTransfer = () => {
    if (xpLabel) xpLabel.textContent = "تمّت الإضافة";
  };
  if (prefersReducedMotion()) {
    const xp = root.querySelector(".subject-gain--xp [data-gain-count]");
    if (xp) xp.textContent = "0";
    finishTransfer();
    root.dataset.animationState = "complete";
    return animateCompletionLevel(root, () => {}, () => {});
  }
  const rocky = root.querySelector(".subject-completion-rocky");
  const motionPreference = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );
  let idleTimer;
  let disposed = false;
  let stopXp = () => {};
  let xpComplete = false;
  let counters = [];
  // The Studio happy-jump clip settles at 3300 ms, then the existing idle loops.
  const startIdleTimer = () => {
    clearTimeout(idleTimer);
    if (motionPreference.matches || disposed) return;
    idleTimer = setTimeout(() => {
      if (!disposed && !motionPreference.matches && root.isConnected && rocky)
        rocky.src = "assets/mascot/rocky-standing-still.svg";
    }, 3300);
  };
  const stopMascotMotion = () => {
    if (!motionPreference.matches) return;
    clearTimeout(idleTimer);
    rocky?.removeEventListener("load", startIdleTimer);
    if (rocky) rocky.src = "assets/mascot/rocky-standing-still-reduced.svg";
    counters.forEach(({ element, to, format, isXp }) => {
      element.textContent = formatAnimatedGain(isXp ? 0 : to, format);
    });
    stopXp();
    finishTransfer();
    xpComplete = true;
  };
  if (rocky?.complete && rocky.naturalWidth) startIdleTimer();
  else rocky?.addEventListener("load", startIdleTimer, { once: true });
  motionPreference.addEventListener("change", stopMascotMotion);
  counters = [...root.querySelectorAll("[data-gain-count]")].map(
    (element) => ({
      element,
      from: Number(element.dataset.gainFrom),
      to: Number(element.dataset.gainCount),
      delay: Number(element.dataset.gainDelay),
      format: element.dataset.gainFormat || "number",
      isXp: Boolean(element.closest(".subject-gain--xp")),
    }),
  );
  counters.forEach(({ element, from, to, format, isXp }) => {
    element.style.minWidth = `${element.textContent.length}ch`;
    element.textContent = formatAnimatedGain(isXp ? to : from, format);
  });
  const xpCounter = counters.find(({ isXp }) => isXp);
  stopXp = animateCompletionLevel(root, (value) => {
    if (disposed || motionPreference.matches || !xpCounter) return;
    if (xpLabel) xpLabel.textContent = "نقل XP";
    xpCounter.element.textContent = formatAnimatedGain(xpCounter.to - value, xpCounter.format);
  }, () => { xpComplete = true; finishTransfer(); });
  root.dataset.animationState = "running";
  let frame;
  const started = performance.now();
  const tick = (now) => {
    if (motionPreference.matches) {
      stopMascotMotion();
      root.dataset.animationState = "complete";
      return;
    }
    const elapsed = now - started;
    const ease = (delay, duration = 750) =>
      1 - Math.pow(1 - Math.min(1, Math.max(0, (elapsed - delay) / duration)), 2);
    counters.forEach((counter) => {
      const { element, from, to, delay, format, isXp } = counter;
      if (isXp) return;
      const value = Math.round(from + (to - from) * ease(delay, 750));
      element.textContent = formatAnimatedGain(value, format);
    });
    if (elapsed < 2200 || !xpComplete) frame = requestAnimationFrame(tick);
    else {
      root.dataset.animationState = "complete";
    }
  };
  frame = requestAnimationFrame(tick);
  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    clearTimeout(idleTimer);
    stopXp();
    xpComplete = true;
    rocky?.removeEventListener("load", startIdleTimer);
    motionPreference.removeEventListener("change", stopMascotMotion);
  };
}
