import { waitForImage } from "./media-ready.js";
import { animateView } from "./view-motion.js";

// Repose the production drawing and reuse its glasses and the navbar heart.
// All paths, colors and the breathing motion come from the existing assets.
async function showRocky(scene, superMode, signal) {
  const mood = superMode ? "super" : "empty";
  if (scene.dataset.mood === mood) return;
  scene.dataset.mood = mood;
  scene.classList.remove("has-rig");
  const fallback = scene.querySelector("[data-heart-rocky]");
  fallback.src = `assets/mascot/${superMode ? "rocky-super.svg" : "rocky-sad.svg"}`;
  fallback.alt = superMode ? "روكي سعيد يرتدي نظارات ومعه قلوب كثيرة" : "روكي حزين ويحمل قلبًا بكلتا يديه";
  scene.querySelector("[data-super-hearts]").hidden = !superMode;
  try {
    const sources = superMode ? ["rocky-standing-still.svg","rocky-super.svg"] : ["rocky-sad.svg","../icons/nav-heart.svg"];
    const drawings = await Promise.all(sources.map(async source => {
      const response = await fetch(`assets/mascot/${source}`,{ signal });
      if (!response.ok) throw new Error("Rocky could not load.");
      const text = await response.text();
      return new DOMParser().parseFromString(text.replaceAll("rocky-body-","hearts-body-"),"image/svg+xml");
    }));
    if (signal.aborted || scene.dataset.mood !== mood) return;
    const svg = document.importNode(drawings[0].documentElement,true);
    if (svg.localName !== "svg" || drawings.some(drawing => drawing.querySelector("parsererror"))) return;
    svg.setAttribute("viewBox","0 -40 800 760");
    svg.setAttribute("aria-hidden","true");
    svg.removeAttribute("aria-labelledby");
    svg.querySelectorAll("style").forEach(style => {
      style.textContent = style.textContent.replaceAll("[data-part", ".heart-depletion__rig [data-part")
        .replaceAll("rocky-standing-still-","hearts-standing-still-");
    });
    if (superMode) {
      svg.querySelector('[data-part="body"]').append(document.importNode(drawings[1].querySelector('[data-part="sunglasses"]'),true));
    } else {
      const heart = document.importNode(drawings[1].documentElement,true);
      heart.setAttribute("x","270"); heart.setAttribute("y","430");
      heart.setAttribute("width","260"); heart.setAttribute("height","260");
      const root = svg.querySelector('[data-part="root"]');
      root.append(heart);
      for (const [side,angle,pivot] of [["left",-62,182],["right",62,610]]) {
        const arm = svg.querySelector(`[data-part="arm-${side}"]`);
        arm.setAttribute("transform",`rotate(${angle} ${pivot} 422)`);
        root.append(arm);
      }
    }
    scene.querySelector("[data-heart-rig]").replaceChildren(svg);
    scene.classList.add("has-rig");
  } catch { /* Keep the existing production image if the inline rig is unavailable. */ }
}

/** One depletion sequence per empty balance; answering again can reopen it. */
export function mountHeartDepletion({ resourceStore, ownerId, signal, returnFocus, autoShowEmpty = true }) {
  const controller = new AbortController();
  let dialog = null;
  let opener = null;
  let shownEmpty = false;
  let timer = null;
  let activating = false;
  const close = () => {
    dialog?.close();
    dialog?.remove();
    dialog = null;
    clearInterval(timer);
    timer = null;
    const target = opener?.isConnected ? opener : returnFocus;
    if (!controller.signal.aborted && target?.isConnected) target.focus({ preventScroll:true });
  };
  const update = () => {
    if (controller.signal.aborted) return;
    const balance = resourceStore.get(ownerId);
    const ready = balance.unlimited || balance.hearts > 0;
    if (ready) shownEmpty = false;
    if (!dialog) {
      if (autoShowEmpty && !ready && !shownEmpty) show();
      return;
    }
    const trial = dialog.querySelector("[data-heart-trial]");
    const offering = dialog.dataset.mode === "offer" && balance.trialEligible;
    dialog.dataset.state = balance.unlimited ? "super" : ready ? "refilled" : "empty";
    void showRocky(dialog.querySelector("[data-heart-scene]"),balance.unlimited || offering,controller.signal);
    trial.hidden = !balance.trialEligible || ready && !offering;
    trial.querySelector("h2").hidden = offering;
    dialog.querySelector("[data-heart-timer-wrap]").hidden = ready || offering;
    dialog.querySelector("[data-heart-title]").textContent = balance.unlimited ? "أسبوعك المجاني من سوبر بدأ!" : offering ? "أسبوع من سوبر… هدية لك!" : ready ? "قلبك الجديد جاهز!" : "نفدت القلوب";
    const seconds = Math.max(0, Math.ceil((balance.nextHeartAt - Date.now()) / 1000));
    dialog.querySelector("[data-heart-timer]").textContent = `${String(Math.floor(seconds / 60)).padStart(2,"0")}:${String(seconds % 60).padStart(2,"0")}`;
    dialog.querySelector("[data-heart-resume]").textContent = offering ? "ربما لاحقًا" : ready ? "متابعة التعلّم" : "سأنتظر القلب المجاني";
    dialog.querySelector("[data-heart-resume]").classList.toggle("system-action--primary",ready && !offering);
    if (ready) clearInterval(timer);
  };
  function show(mode = "empty") {
    if (controller.signal.aborted || dialog) return;
    const balance = resourceStore.get(ownerId);
    if (mode === "offer" ? !balance.trialEligible : balance.unlimited || balance.hearts > 0) return;
    shownEmpty = true;
    opener = document.activeElement;
    dialog = document.createElement("dialog");
    const activeDialog = dialog;
    dialog.className = "heart-depletion";
    dialog.dataset.mode = mode;
    dialog.dir = "rtl";
    dialog.setAttribute("aria-labelledby","heart-depletion-title");
    dialog.innerHTML = `<div class="heart-depletion__layout">
      <button class="heart-depletion__close app-close" type="button" data-heart-close aria-label="إغلاق">×</button>
      <div class="heart-depletion__scene" data-heart-scene>
        <img class="heart-depletion__rocky" data-heart-rocky src="assets/mascot/${mode === "offer" ? "rocky-super.svg" : "rocky-sad.svg"}" alt="روكي" width="320" height="304" />
        <div class="heart-depletion__rig" data-heart-rig aria-hidden="true"></div>
        <div class="heart-depletion__hearts" data-super-hearts hidden aria-hidden="true">${[1,2,3].map(() => '<img src="assets/icons/nav-heart.svg" alt="" width="52" height="52" />').join("")}</div>
      </div>
      <div class="heart-depletion__content">
        <h1 id="heart-depletion-title" data-heart-title></h1>
        <div class="heart-depletion__refill" data-heart-timer-wrap><img src="assets/icons/nav-heart.svg" alt="" width="34" height="34" /><strong dir="ltr" role="timer" aria-label="الوقت المتبقي للقلب المجاني" data-heart-timer></strong></div>
        <section class="heart-depletion__trial" data-heart-trial aria-labelledby="heart-trial-title">
          <h2 id="heart-trial-title">جرّب سوبر مجانًا لمدة أسبوع</h2>
          <ul>
            <li><strong>قلوب غير محدودة</strong><span class="heart-depletion__benefit heart-depletion__benefit--hearts" dir="ltr" aria-hidden="true"><img src="assets/icons/nav-heart.svg" alt="" width="36" height="36" /><span>∞</span></span></li>
            <li><strong>شروحات مفصّلة للدروس</strong><span class="heart-depletion__benefit heart-depletion__benefit--explanations" dir="ltr" aria-hidden="true"><img src="assets/icons/lesson-lightbulb.webp" alt="" width="36" height="36" /><span>∞</span></span></li>
          </ul>
          <button class="system-action system-action--primary heart-depletion__activate" type="button" data-heart-activate>ابدأ أسبوعي المجاني</button>
        </section>
        <p class="heart-depletion__status" data-heart-status role="status" aria-live="polite"></p>
        <button class="system-action heart-depletion__resume" type="button" data-heart-resume></button>
      </div>
    </div>`;
    activeDialog.addEventListener("cancel", event => { event.preventDefault(); close(); }, { signal:controller.signal });
    activeDialog.querySelector("[data-heart-close]").addEventListener("click",close,{ signal:controller.signal });
    activeDialog.querySelector("[data-heart-resume]").addEventListener("click",close,{ signal:controller.signal });
    activeDialog.querySelector("[data-heart-activate]").addEventListener("click", async () => {
      if (activating) return;
      activating = true;
      const button = activeDialog.querySelector("[data-heart-activate]");
      const status = activeDialog.querySelector("[data-heart-status]");
      button.disabled = true;
      status.textContent = "جارٍ تفعيل أسبوعك المجاني…";
      try {
        const result = await resourceStore.startTrial(ownerId,{ signal:controller.signal });
        if (controller.signal.aborted || dialog !== activeDialog) return;
        if (!result.unlimited) throw new Error("Trial already used.");
        status.textContent = "تم تفعيل سوبر لمدة ٧ أيام مجانًا.";
        update();
        animateView(activeDialog.querySelector(".heart-depletion__content"));
        activeDialog.querySelector("[data-heart-resume]").focus({ preventScroll:true });
      } catch {
        if (controller.signal.aborted || dialog !== activeDialog) return;
        status.textContent = resourceStore.get(ownerId).trialEligible ? "تعذّر التفعيل. تحقّق من الاتصال وحاول مجددًا." : "لقد استخدمت أسبوعك المجاني من قبل.";
      } finally {
        activating = false;
        button.disabled = false;
      }
    }, { signal:controller.signal });
    document.body.append(activeDialog);
    update();
    activeDialog.showModal();
    activeDialog.querySelector(balance.trialEligible ? "[data-heart-activate]" : "[data-heart-resume]").focus({ preventScroll:true });
    const mascot = activeDialog.querySelector("[data-heart-rocky]");
    void waitForImage(mascot,{ signal:controller.signal }).catch(() => { mascot.hidden = true; }).then(() => {
      if (!controller.signal.aborted && dialog === activeDialog) activeDialog.classList.add("is-ready");
    });
    timer = setInterval(update,1000);
  }
  const unsubscribe = resourceStore.subscribe(update);
  const destroy = () => {
    controller.abort();
    unsubscribe();
    close();
    signal?.removeEventListener("abort",destroy);
  };
  signal?.addEventListener("abort",destroy,{ once:true });
  if (signal?.aborted) destroy();
  else update();
  return { show, showOffer:() => show("offer"), destroy };
}
