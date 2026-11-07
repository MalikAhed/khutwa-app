// Gestures use the artwork/text; buttons and installation instructions stay usable.
export function mountInstallMotion(card, onDismiss) {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let animation, drag, exiting = false;
  const animate = (frames, duration, easing) => {
    animation?.cancel();
    animation = card.animate(frames, { duration:reduced.matches ? 100 : duration, easing });
    return animation;
  };
  animate([
    { opacity:0, transform:reduced.matches ? 'none' : 'translateY(-24px) scale(.96)' },
    { opacity:1, transform:'none' },
  ], 380, 'cubic-bezier(.16,1,.3,1)');
  const reset = () => {
    const from = { transform:card.style.transform || 'none', opacity:card.style.opacity || '1' };
    card.style.transform = ''; card.style.opacity = '';
    animate([from, { transform:'none', opacity:1 }], 240, 'cubic-bezier(.16,1,.3,1)');
  };
  const release = () => {
    const previous = drag;
    drag = null;
    if (previous && card.hasPointerCapture(previous.id)) card.releasePointerCapture(previous.id);
    return previous;
  };
  card.addEventListener('dragstart', event => event.preventDefault());
  card.addEventListener('pointerdown', event => {
    if (exiting || drag || !event.isPrimary || event.button !== 0
      || event.target.closest('button, a, .app-install__help')) return;
    animation?.finish();
    drag = { id:event.pointerId, x:event.clientX, y:event.clientY, dx:0, dy:0 };
    card.setPointerCapture(event.pointerId);
  });
  card.addEventListener('pointermove', event => {
    if (!drag || drag.id !== event.pointerId) return;
    drag.dx = event.clientX - drag.x; drag.dy = event.clientY - drag.y;
    if (!reduced.matches) card.style.transform = `translate(${drag.dx}px, ${drag.dy}px)`;
    card.style.opacity = String(Math.max(.35, 1 - Math.hypot(drag.dx, drag.dy) / 400));
  });
  card.addEventListener('pointerup', event => {
    if (!drag || drag.id !== event.pointerId) return;
    const { dx, dy } = release();
    if (Math.max(Math.abs(dx), Math.abs(dy)) >= 48) onDismiss(dx, dy);
    else reset();
  });
  const cancel = event => {
    if (!drag || drag.id !== event.pointerId) return;
    release(); reset();
  };
  card.addEventListener('pointercancel', cancel);
  card.addEventListener('lostpointercapture', cancel);
  return (dx = 0, dy = -1) => {
    if (exiting) return;
    exiting = true; release();
    card.dataset.exiting = '';
    card.inert = true;
    const current = getComputedStyle(card);
    const from = { opacity:current.opacity, transform:current.transform };
    const horizontal = Math.abs(dx) > Math.abs(dy);
    const x = horizontal ? Math.sign(dx) * (card.offsetWidth + 32) : 0;
    const y = horizontal ? 0 : Math.sign(dy || -1) * (card.offsetHeight + 32);
    const outro = animate([from, {
      opacity:0, transform:reduced.matches ? 'none' : `translate(${x}px, ${y}px) scale(.96)`,
    }], 260, 'cubic-bezier(.4,0,1,1)');
    outro.finished.then(() => card.remove(), () => card.remove());
  };
}
