// One small rig, derived from the approved production drawing. Gestures end;
// Rocky rests while the learner thinks. No looping wave or typing delay.
export function mountRockyCoach(host, signal) {
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  let svg;
  let animations = [];
  let timer;
  let pending = null;
  const stop = () => {
    pending = null;
    clearTimeout(timer);
    animations.forEach(animation => animation.cancel());
    animations = [];
    host.dataset.pose = "attentive";
  };
  const animate = (part, frames, options) => {
    const element = svg?.querySelector(`[data-part="${part}"]`);
    if (element?.animate) animations.push(element.animate(frames, options));
  };
  const speak = ({ mood = "explain", duration = 2800 } = {}) => {
    stop();
    pending = { mood,duration };
    if (!svg || signal.aborted || motion.matches || document.hidden) return;
    host.dataset.pose = mood;
    const mouth = [{ opacity:0,transform:"scaleY(.3)" },{ opacity:1,transform:"scaleY(.9)",offset:.24 },
      { opacity:1,transform:"scaleY(.55)",offset:.58 },{ opacity:0,transform:"scaleY(.3)" }];
    animate("mouth-neutral",mouth,{ duration:360,iterations:Math.ceil(duration / 360) });
    animate("mouth-closed",[{ opacity:1 },{ opacity:0,offset:.24 },{ opacity:0,offset:.58 },{ opacity:1 }],{ duration:360,iterations:Math.ceil(duration / 360) });
    animate("body",[{ transform:"translateY(0) rotate(0)" },
      { transform:mood === "celebrate" ? "translateY(-16px) rotate(-3deg)" : "translateY(-4px) rotate(-1.5deg)",offset:.4 },
      { transform:"translateY(0) rotate(0)" }],{ duration:720,easing:"cubic-bezier(.22,1,.36,1)" });
    animate("arm-left",[{ transform:"rotate(0)" },{ transform:`rotate(${mood === "celebrate" ? 65 : 38}deg)`,offset:.32 },
      { transform:"rotate(28deg)",offset:.72 },{ transform:"rotate(0)" }],{ duration:1500,easing:"ease-in-out" });
    for (const eye of ["eye-left","eye-right"]) animate(eye,[{ transform:"scaleY(1)" },{ transform:"scaleY(.08)",offset:.45 },{ transform:"scaleY(1)" }],{ duration:160,delay:1500 });
    timer = setTimeout(stop,duration);
  };
  const travel = () => {
    if (!svg || signal.aborted || motion.matches || document.hidden) return;
    for (const [index,foot] of ["foot-left","foot-right"].entries()) {
      animate(foot,[{ transform:"translateY(0) rotate(0)" },
        { transform:`translateY(-12px) rotate(${index ? -8 : 8}deg)`,offset:.5 },
        { transform:"translateY(0) rotate(0)" }],{ duration:230,delay:index * 100,iterations:2,easing:"ease-in-out" });
    }
  };
  void fetch("assets/mascot/rocky-coach.svg",{ signal }).then(response => response.ok ? response.text() : "").then(source => {
    if (!source || signal.aborted) return;
    const parsed = new DOMParser().parseFromString(source,"image/svg+xml");
    if (parsed.documentElement.localName !== "svg" || parsed.querySelector("parsererror")) return;
    svg = document.importNode(parsed.documentElement,true);
    svg.removeAttribute("aria-labelledby");
    svg.setAttribute("aria-hidden","true");
    host.replaceChildren(svg);
    if (pending) speak(pending);
  }).catch(() => {}); // The same compact SVG is already visible as the image fallback.
  motion.addEventListener("change",stop,{ signal });
  document.addEventListener("visibilitychange",() => { if (document.hidden) stop(); },{ signal });
  signal.addEventListener("abort",stop,{ once:true });
  return { speak,travel,stop };
}
