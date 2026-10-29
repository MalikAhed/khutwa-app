export function mountQuestionNavigation({ shell, signal, locale, getQuestions, getCurrentId, getRating, subscribe, onSelect }) {
  const container = shell.querySelector('.lesson-card') || shell;
  let footer, slider, track, toolbar, lastId, buttons = [], frame = 0;
  const labels = locale === 'ar' ? {easy:'سهل',medium:'متوسط',hard:'صعب',unrated:'غير مقيّم'} : {easy:'Easy',medium:'Medium',hard:'Hard',unrated:'Unrated'};
  const refresh = () => buttons.forEach((button,index) => {
    const id = button.dataset.questionJump;
    const rating = getRating(id) || 'unrated';
    button.dataset.rating = rating;
    const current = id === getCurrentId();
    button.tabIndex = current ? 0 : -1;
    if (current) button.setAttribute('aria-current','step');
    else button.removeAttribute('aria-current');
    button.setAttribute('aria-label',`${locale === 'ar' ? 'السؤال' : 'Question'} ${index + 1}، ${labels[rating]}`);
  });
  const reveal = (button, animate = true) => {
    if (!button) return;
    const item = button.getBoundingClientRect(), viewport = track.getBoundingClientRect();
    track.scrollTo({
      left:track.scrollLeft + item.left - viewport.left - (track.clientWidth - item.width) / 2,
      behavior:animate && !window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'smooth' : 'instant',
    });
  };
  const mount = () => {
    const nextFooter = shell.querySelector('[data-lesson-step] .level-layout-actions');
    if (!nextFooter) return;
    const rating = nextFooter.querySelector('.level-question-rating-panel');
    if (!rating) return;
    const currentId = getCurrentId();
    if (nextFooter === footer && toolbar?.parentElement === footer && toolbar.contains(rating) && currentId === lastId) return;
    const animate = lastId !== undefined;
    const scrollLeft = track?.scrollLeft || 0;
    footer = nextFooter;
    lastId = currentId;
    if (!toolbar) {
      toolbar = document.createElement('div');
      toolbar.className = 'question-footer-toolbar';
    }
    if (!slider) {
      slider = document.createElement('nav');
      slider.className = 'question-number-slider';
      slider.dataset.questionSlider = '';
      slider.setAttribute('aria-label',locale === 'ar' ? 'قائمة الأسئلة' : 'Questions');
      track = document.createElement('div');
      track.className = 'question-number-track';track.dir = 'ltr';
      slider.append(track);
    }
    const questions = getQuestions();
    if (buttons.length !== questions.length || questions.some((question,index) => buttons[index]?.dataset.questionJump !== question.id)) {
      buttons = questions.map((question,index) => {
        const button = document.createElement('button');
        button.type = 'button';button.className = 'question-number';
        button.dataset.questionJump = question.id;button.textContent = String(index + 1);
        return button;
      });
      track.replaceChildren(...buttons);
    }
    toolbar.replaceChildren(slider,...(rating ? [rating] : []));
    footer.prepend(toolbar);footer.classList.add('level-layout-actions--question-slider');
    track.scrollLeft = scrollLeft;
    refresh();
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      if (signal.aborted) return;
      const button = buttons.find(button => button.hasAttribute('aria-current'));
      reveal(button,animate);
    });
    if (track.dataset.bound) return;
    track.dataset.bound = 'true';
    let pointer = null, suppressUntil = 0;
    track.addEventListener('pointerdown',event => {
      if (event.button !== 0 || event.pointerType !== 'mouse') return;
      pointer = {id:event.pointerId,x:event.clientX,left:track.scrollLeft,dragged:false};
    },{signal});
    track.addEventListener('pointermove',event => {
      if (!pointer || event.pointerId !== pointer.id) return;
      const delta = event.clientX - pointer.x;
      if (!pointer.dragged && Math.abs(delta) > 5) { pointer.dragged = true;track.setPointerCapture(event.pointerId);track.classList.add('is-dragging'); }
      if (pointer.dragged) { event.preventDefault();track.scrollLeft = pointer.left - delta; }
    },{signal});
    const endDrag = event => {
      if (!pointer || event.pointerId !== pointer.id) return;
      if (pointer.dragged) suppressUntil = performance.now() + 180;
      if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
      pointer = null;track.classList.remove('is-dragging');
    };
    track.addEventListener('pointerup',endDrag,{signal});
    track.addEventListener('pointercancel',endDrag,{signal});
    track.addEventListener('click',event => {
      if (event.detail > 0 && performance.now() < suppressUntil) { event.preventDefault();return; }
      const button = event.target.closest('[data-question-jump]');
      if (!button) return;
      if (button.dataset.questionJump !== getCurrentId()) onSelect(button.dataset.questionJump);
      else reveal(button);
    },{signal});
    track.addEventListener('wheel',event => {
      if (track.scrollWidth <= track.clientWidth + 2 || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return;
      event.preventDefault();track.scrollLeft += event.deltaY;
    },{signal,passive:false});
    track.addEventListener('keydown',event => {
      if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
      const index = buttons.indexOf(event.target);
      if (index < 0) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1 : Math.max(0,Math.min(buttons.length - 1,index + (event.key === 'ArrowRight' ? 1 : -1)));
      buttons.forEach((button,i) => {button.tabIndex = i === next ? 0 : -1;});
      buttons[next].focus({preventScroll:true});reveal(buttons[next]);
    },{signal});
  };
  const observer = new MutationObserver(mount);
  observer.observe(container,{childList:true,subtree:true});
  const unsubscribe = subscribe?.(refresh);
  mount();
  return () => { observer.disconnect();unsubscribe?.();cancelAnimationFrame(frame);slider?.remove(); };
}
