import { prefersReducedMotion } from "../lib/dom.js?v=acff67f262f3c107";
import { mountRockyCoach } from "./rocky-coach.js?v=acff67f262f3c107";

const SVG = "http://www.w3.org/2000/svg";
const clamp = (value,min,max) => Math.max(min,Math.min(value,max));
function visibleBox(element) {
  const rect = element.getBoundingClientRect();
  let left = Math.max(4,rect.left), top = Math.max(4,rect.top);
  let right = Math.min(document.documentElement.clientWidth - 4,rect.right), bottom = Math.min(innerHeight - 4,rect.bottom);
  for (let parent = element.parentElement; parent && parent !== document.body; parent = parent.parentElement) {
    const style = getComputedStyle(parent);
    const bounds = parent.getBoundingClientRect();
    if (/(auto|scroll|hidden|clip)/.test(style.overflowX)) { left = Math.max(left,bounds.left); right = Math.min(right,bounds.right); }
    if (/(auto|scroll|hidden|clip)/.test(style.overflowY)) { top = Math.max(top,bounds.top); bottom = Math.min(bottom,bounds.bottom); }
  }
  if (right - left < Math.min(rect.width,24) || bottom - top < Math.min(rect.height,24)) return null;
  const style = getComputedStyle(element);
  const radius = style.borderTopLeftRadius.endsWith("%") ? Math.min(rect.width,rect.height) * parseFloat(style.borderTopLeftRadius) / 100 : parseFloat(style.borderTopLeftRadius);
  return { x:Math.max(2,left - 4),y:Math.max(2,top - 4),width:Math.min(innerWidth - 2,right + 4) - Math.max(2,left - 4),
    height:Math.min(innerHeight - 2,bottom + 4) - Math.max(2,top - 4),rx:Math.max(14,radius + 4) };
}

export function createRockyTourSpotlight({ onNext,onSkip }) {
  const controller = new AbortController();
  const { signal } = controller;
  const root = document.createElement("div");
  root.className = "rocky-app-tour";
  root.dir = "rtl";
  root.hidden = true;
  root.innerHTML = `<svg class="rocky-tour-shade" aria-hidden="true"><defs><mask id="rocky-tour-mask" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse"><rect data-mask-base fill="white"/><g data-mask-holes></g></mask></defs><rect class="rocky-tour-dim" mask="url(#rocky-tour-mask)"/><g class="rocky-tour-rings"></g></svg>
    <section class="rocky-app-tour-guide" role="region" aria-label="روكي يساعدك" tabindex="-1">
      <div class="rocky-coach-row"><div class="rocky-app-tour-character" aria-hidden="true"><img src="assets/mascot/rocky-coach.svg" alt="" width="180" height="166"></div>
      <div class="rocky-coach-copy"><div class="rocky-app-tour-bubble" aria-live="polite" aria-atomic="true"><h2 id="rocky-app-tour-title"></h2><p id="rocky-app-tour-message"></p></div>
      <button type="button" class="system-action system-action--primary" data-rocky-tour-next hidden></button></div></div>
    </section>`;
  document.body.append(root);
  const guide = root.querySelector(".rocky-app-tour-guide");
  const shade = root.querySelector(".rocky-tour-shade");
  const next = root.querySelector("[data-rocky-tour-next]");
  const character = root.querySelector(".rocky-app-tour-character");
  const rocky = mountRockyCoach(character,signal);
  const slot = document.createElement("div");
  slot.className = "rocky-coach-slot";
  slot.setAttribute("aria-hidden","true");
  let targets = [], layout = "home", placement = "header", side = null, frame = 0, speechTimer = 0, trackingUntil = 0, flight = null;
  let flightAnimation = null, movement = null;
  let geometry = "";
  const rectNode = (box,fill) => {
    const node = document.createElementNS(SVG,"rect");
    for (const [key,value] of Object.entries(box)) node.setAttribute(key,String(value));
    if (fill) node.setAttribute("fill",fill);
    return node;
  };
  function position() {
    frame = 0;
    if (root.hidden) return;
    const viewportWidth = document.documentElement.clientWidth;
    const shadeBounds = shade.getBoundingClientRect();
    shade.setAttribute("viewBox",`0 0 ${shadeBounds.width} ${shadeBounds.height}`);
    for (const rectangle of shade.querySelectorAll("[data-mask-base],.rocky-tour-dim")) {
      rectangle.setAttribute("width",String(innerWidth)); rectangle.setAttribute("height",String(innerHeight));
    }
    if (layout === "lesson") {
      const shell = document.querySelector(".lesson-shell--ui-lab:not(.lesson-shell--completion)");
      const topbar = shell?.querySelector(".lesson-top");
      const actions = shell?.querySelector(".level-layout-actions");
      const sidebar = matchMedia("(max-height:500px) and (min-width:761px)").matches;
      const atFooter = placement === "footer" && !sidebar && actions;
      slot.dataset.position = atFooter ? "footer" : "header";
      if (atFooter) { if (slot.nextElementSibling !== actions) actions.before(slot); }
      else if (topbar && slot.parentElement !== shell) topbar.after(slot);
      const height = guide.offsetHeight;
      if (slot.style.height !== `${height}px`) slot.style.height = `${height}px`;
      const rect = slot.getBoundingClientRect();
      guide.style.left = `${getComputedStyle(slot).position === "absolute" ? rect.left : side === "left" ? 12 : Math.max(12,(viewportWidth - guide.offsetWidth) / 2)}px`;
      guide.style.top = `${rect.top}px`;
    } else slot.remove();
    // Reserve the coach's space before measuring targets, including the first paint.
    const boxes = targets.filter(target => target.isConnected).map(visibleBox).filter(Boolean);
    const nextGeometry = JSON.stringify(boxes);
    if (geometry !== nextGeometry) {
      geometry = nextGeometry;
      shade.querySelector("[data-mask-holes]").replaceChildren(...boxes.map(box => rectNode(box,"black")));
      shade.querySelector(".rocky-tour-rings").replaceChildren(...boxes.map(box => rectNode(box)));
    }
    if (boxes.length && (layout === "home" || slot.dataset.position === "footer")) {
      const target = boxes[0], center = target.x + target.width / 2;
      const facing = side || (layout === "home" && center < viewportWidth / 2 ? "left" : "right");
      root.dataset.side = facing;
      const characterWidth = character.offsetWidth;
      const x = facing === "left" ? center - characterWidth / 2 : center - guide.offsetWidth + characterWidth / 2;
      guide.style.left = `${clamp(x,12,viewportWidth - guide.offsetWidth - 12)}px`;
    } else root.dataset.side = side || "right";
    if (layout === "home" && boxes.length) {
      const height = guide.offsetHeight;
      const top = Math.min(...boxes.map(box => box.y)), bottom = Math.max(...boxes.map(box => box.y + box.height));
      const y = bottom + height + 28 <= innerHeight ? bottom + 18 : top - height - 18 >= 12 ? top - height - 18 : innerHeight - height - 16;
      guide.style.top = `${clamp(y,12,innerHeight - height - 12)}px`;
    } else if (layout !== "lesson") { guide.style.top = ""; guide.style.left = ""; }
    if (flight && !flightAnimation && !root.hidden) {
      const destination = character.getBoundingClientRect();
      flightAnimation = flight.animate([{ transform:"none",opacity:1 },
        { transform:`translate(${destination.left - flight.offsetLeft}px,${destination.top - flight.offsetTop}px) scale(${destination.width / flight.offsetWidth})`,opacity:0 }],
      { duration:prefersReducedMotion() ? 0 : 460,easing:"cubic-bezier(.22,1,.36,1)",fill:"forwards" });
      const moving = flight;
      void flightAnimation.finished.catch(() => {}).then(() => {
        moving.remove();
        if (flight === moving) { flight = null; flightAnimation = null; root.classList.remove("is-flying"); }
      });
    }
    if (performance.now() < trackingUntil) frame = requestAnimationFrame(position);
  }
  const queuePosition = () => { if (!frame && !root.hidden) frame = requestAnimationFrame(position); };
  const resize = new ResizeObserver(queuePosition);
  resize.observe(guide);
  const viewportChanged = () => { movement?.finish(); queuePosition(); };
  window.addEventListener("resize",viewportChanged,{ signal });
  window.visualViewport?.addEventListener("resize",viewportChanged,{ signal });
  matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",event => {
    if (event.matches) { flightAnimation?.finish(); movement?.finish(); }
  },{ signal });
  document.addEventListener("scroll",queuePosition,{ signal,capture:true,passive:true });
  next.addEventListener("click",onNext,{ signal });
  document.addEventListener("keydown",event => {
    if (root.hidden || document.querySelector("dialog[open]")) return;
    if (event.key === "Escape") { event.preventDefault(); onSkip(); return; }
  },{ signal });
  const hide = () => {
    root.hidden = true; slot.remove(); rocky.stop(); clearTimeout(speechTimer);
    movement?.cancel(); movement = null; root.classList.remove("is-moving");
    cancelAnimationFrame(frame); frame = 0;
  };
  return {
    show({ id,title,message,selectors = [],mode = "home",placement:nextPlacement = "header",side:nextSide = null,nextLabel = null,mood = "explain" }) {
      const selected = selectors.flatMap(selector => [...document.querySelectorAll(selector)])
        .filter(target => !target.closest("[hidden], [inert]") && target.getClientRects().length);
      if (!selected.length) { hide(); return false; }
      resize.disconnect(); resize.observe(guide); selected.forEach(target => resize.observe(target));
      const previous = root.hidden ? null : guide.getBoundingClientRect();
      movement?.cancel(); movement = null; root.classList.remove("is-moving");
      targets = selected; layout = mode; placement = nextPlacement; side = nextSide;
      root.dataset.layout = layout;
      root.dataset.tourStep = id;
      root.hidden = false;
      guide.querySelector("h2").textContent = title;
      guide.querySelector("p").textContent = message;
      next.hidden = !nextLabel; next.textContent = nextLabel || "";
      const duration = clamp(message.length * 30,2200,4000);
      clearTimeout(speechTimer);
      root.classList.add("is-speaking");
      rocky.speak({ mood,duration });
      speechTimer = setTimeout(() => root.classList.remove("is-speaking"),duration);
      trackingUntil = performance.now() + Math.max(600,duration);
      position();
      if (previous && !prefersReducedMotion()) {
        const destination = guide.getBoundingClientRect();
        const dx = clamp(previous.left,12,document.documentElement.clientWidth - destination.width - 12) - destination.left;
        const dy = clamp(previous.top,12,innerHeight - destination.height - 12) - destination.top;
        if (Math.abs(dx) + Math.abs(dy) > 4) {
          const animation = guide.animate([{ transform:`translate(${dx}px,${dy}px)` },{ transform:"translate(0,0)" }],
            { duration:460,easing:"cubic-bezier(.22,1,.36,1)" });
          movement = animation; root.classList.add("is-moving");
          rocky.travel();
          void animation.finished.catch(() => {}).then(() => {
            if (movement === animation) { movement = null; root.classList.remove("is-moving"); }
          });
        }
      }
      if (nextLabel) next.focus({ preventScroll:true });
      return true;
    },
    carry(source) {
      const image = source?.querySelector("img");
      if (!image || prefersReducedMotion()) return;
      const rect = image.getBoundingClientRect();
      flight = image.cloneNode();
      flight.className = "rocky-app-tour-flight"; flight.alt = "";
      flight.style.cssText = `left:${rect.left}px;top:${rect.top}px;width:${rect.width}px;height:${rect.height}px`;
      document.body.append(flight); source.style.visibility = "hidden";
      root.classList.add("is-flying");
    },
    hide,
    reposition:queuePosition,
    destroy() { hide(); controller.abort(); resize.disconnect(); flightAnimation?.cancel(); flight?.remove(); root.remove(); },
    get targets() { return targets; },
  };
}
