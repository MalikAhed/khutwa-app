import { prefersReducedMotion } from "../lib/dom.js";
import { mountRockyCoach } from "./rocky-coach.js";

const GESTURE_IMAGES=Object.freeze({
  click:{animated:'assets/icons/guidance-click.svg',still:'assets/icons/guidance-click-still.svg',tip:[223/512,129/512]},
  left:{animated:'assets/icons/guidance-slide-left.svg',still:'assets/icons/guidance-slide-left-still.svg',tip:[220/512,50/512]},
  right:{animated:'assets/icons/guidance-slide-right.svg',still:'assets/icons/guidance-slide-right-still.svg',tip:[240/512,112/512]},
});
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

// A visual copy of the real control, never another live control or duplicate ID.
function controlPreview(source) {
  const clone=source.cloneNode(true);
  const originals=[source,...source.querySelectorAll('*')],copies=[clone,...clone.querySelectorAll('*')];
  const properties=['display','position','font-family','font-size','font-weight','line-height','color','background-color','border','border-radius','box-shadow','padding','gap','align-items','justify-content','flex-direction','flex-wrap','fill','stroke','stroke-width','width','height','opacity','visibility'];
  originals.forEach((node,index)=>{
    const copy=copies[index],style=getComputedStyle(node);
    for(const attribute of [...copy.attributes])if(/^(id|class|name|for|tabindex|autofocus|aria-|data-)/.test(attribute.name))copy.removeAttribute(attribute.name);
    for(const property of properties)copy.style.setProperty(property,style.getPropertyValue(property));
    if(copy instanceof HTMLInputElement){copy.disabled=true;copy.removeAttribute('name');}
    if(copy instanceof SVGElement)copy.style.position='static';
  });
  Object.assign(clone.style,{position:'relative',width:'auto',height:'auto',maxWidth:'100%',minWidth:'0',minHeight:'32px',fontSize:'13px',flex:'0 1 auto',margin:'0',whiteSpace:'normal'});
  if(source instanceof HTMLButtonElement)Object.assign(clone.style,{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'6px'});
  clone.inert=true;clone.setAttribute('aria-hidden','true');
  return clone;
}

// One closed outline joins the rounded body and tail, so their borders cannot
// overlap or leave a seam when the Arabic text changes the bubble height.
function speechBubblePath(width,height,radius,above) {
  const l=1,t=1,r=width-1,b=height-1;
  const corner=Math.max(4,Math.min(radius,(height-24)/2,(width-24)/2));
  const cx=width/2,cy=height/2;
  const top=above
    ? `H${cx-10} C${cx-5} ${t} ${cx-4} -4 ${cx-2} -9 Q${cx} -13 ${cx+2} -9 C${cx+4} -4 ${cx+5} ${t} ${cx+10} ${t}`
    : '';
  const right=above ? ''
    : `V${cy-10} C${r} ${cy-5} ${r+5} ${cy-4} ${r+10} ${cy-2} Q${r+14} ${cy} ${r+10} ${cy+2} C${r+5} ${cy+4} ${r} ${cy+5} ${r} ${cy+10}`;
  return `M${l+corner} ${t} ${top} H${r-corner} Q${r} ${t} ${r} ${t+corner} ${right} V${b-corner} Q${r} ${b} ${r-corner} ${b} H${l+corner} Q${l} ${b} ${l} ${b-corner} V${t+corner} Q${l} ${t} ${l+corner} ${t} Z`;
}

export function createRockyTourSpotlight({ onNext,onSkip }) {
  const controller=new AbortController(), {signal}=controller;
  const root=document.createElement('div');
  root.className='rocky-app-tour';root.dir='rtl';root.hidden=true;
  root.setAttribute('popover','manual');
  root.innerHTML=`<svg class="rocky-tour-shade" aria-hidden="true"><defs><mask id="rocky-tour-mask" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse"><rect data-mask-base fill="white"/><g data-mask-holes></g></mask></defs><rect class="rocky-tour-dim" mask="url(#rocky-tour-mask)"/><g class="rocky-tour-rings"></g></svg>
    <section class="rocky-app-tour-guide" role="region" aria-label="روكي يساعدك" tabindex="-1">
      <div class="rocky-coach-row"><div class="rocky-app-tour-character" aria-hidden="true"><img src="assets/mascot/rocky-coach.svg" alt="" width="180" height="166"></div>
      <div class="rocky-coach-copy"><div class="rocky-app-tour-bubble"><svg class="rocky-bubble-frame" aria-hidden="true" focusable="false"><path/></svg><p id="rocky-app-tour-message"></p><div class="rocky-control-previews" aria-hidden="true" inert></div><span class="visually-hidden" data-rocky-announcement role="status" aria-live="polite" aria-atomic="true"></span></div>
      <div class="rocky-coach-actions"><button type="button" class="system-action system-action--primary" data-rocky-tour-next hidden>التالي</button><button type="button" class="system-action rocky-tour-skip" data-rocky-tour-skip>تخطّي</button></div></div></div>
    </section><img class="rocky-tour-gesture" src="assets/icons/guidance-click-still.svg" alt="" aria-hidden="true" hidden>`;
  document.body.append(root);
  const guide=root.querySelector('.rocky-app-tour-guide'),shade=root.querySelector('.rocky-tour-shade');
  const gesture=root.querySelector('.rocky-tour-gesture');
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  let gestureImage=GESTURE_IMAGES.click;
  const updateGesture=()=>{gesture.src=motion.matches||gesture.hidden?gestureImage.still:gestureImage.animated;};
  motion.addEventListener('change',updateGesture,{signal});
  const bubble=root.querySelector('.rocky-app-tour-bubble'),bubbleFrame=bubble.querySelector('.rocky-bubble-frame');
  const next=root.querySelector('[data-rocky-tour-next]'), character=root.querySelector('.rocky-app-tour-character');
  const rocky=mountRockyCoach(character,signal);
  let targets=[],gestureTarget=null,frame=0,timer=0,gestureExitTimer=0,gestureFrame=0,gestureRevision=0,geometry='',returnFocus=null,centeredMode=false;
  const rectNode=(box,fill)=>{
    const node=document.createElementNS(SVG,'rect');
    for(const [key,value] of Object.entries(box)) node.setAttribute(key,String(value));
    if(fill)node.setAttribute('fill',fill);return node;
  };
  function position() {
    frame=0;if(root.hidden||root.classList.contains('is-leaving'))return;
    const width=document.documentElement.clientWidth,height=window.visualViewport?.height || innerHeight;
    shade.setAttribute('viewBox',`0 0 ${width} ${innerHeight}`);
    shade.querySelectorAll('[data-mask-base],.rocky-tour-dim').forEach(node=>{node.setAttribute('width',width);node.setAttribute('height',innerHeight);});
    const target=targets[0],shell=target?.closest('.lesson-shell--ui-lab'),dialog=target?.closest('dialog');
    const sidebar=Boolean(shell && !dialog && width>=761);
    root.dataset.layout=centeredMode?'centered':shell?'lesson':dialog?'dialog':'home';
    const bubbleWidth=bubble.offsetWidth,bubbleHeight=bubble.offsetHeight;
    const bubblePath=speechBubblePath(bubbleWidth,bubbleHeight,parseFloat(getComputedStyle(bubble).borderTopLeftRadius),sidebar||centeredMode);
    const outline=bubbleFrame.querySelector('path');
    if(outline.getAttribute('d')!==bubblePath){
      bubbleFrame.setAttribute('viewBox',`0 0 ${bubbleWidth} ${bubbleHeight}`);
      outline.setAttribute('d',bubblePath);
    }
    const boxes=targets.filter(node=>node.isConnected).map(visibleBox).filter(Boolean);
    const nextGeometry=JSON.stringify(boxes);
    if(geometry!==nextGeometry){geometry=nextGeometry;shade.querySelector('[data-mask-holes]').replaceChildren(...boxes.map(box=>rectNode(box,'black')));shade.querySelector('.rocky-tour-rings').replaceChildren(...boxes.map(box=>rectNode(box)));}
    const w=guide.offsetWidth,h=guide.offsetHeight;
    let x=(width-w)/2,y=height-h-16;
    if(centeredMode){y=(height-h)/2;}
    else if(shell&&!dialog) {
      x=sidebar?12:(width-w)/2;
      y=(shell.querySelector('.lesson-top')?.getBoundingClientRect().bottom || 64)+24;
    } else if(boxes.length) {
      const b=boxes[0];
      x=clamp(b.x+b.width/2-w/2,12,width-w-12);
      y=b.y+b.height+h+24<height ? b.y+b.height+14 : b.y-h-14>=12 ? b.y-h-14 : height-h-12;
    }
    // Keep actionable targets clear when space permits, without moving the card.
    const anchor=boxes[0];
    if(!centeredMode&&anchor&&x<anchor.x+anchor.width&&x+w>anchor.x&&y<anchor.y+anchor.height&&y+h>anchor.y){
      const below=anchor.y+anchor.height+16,above=anchor.y-h-16;
      if(below+h<height-12)y=below;else if(above>=12)y=above;
    }
    guide.style.left=`${clamp(x,12,width-w-12)}px`;guide.style.top=`${clamp(y,8,height-h-8)}px`;
    if(!gesture.hidden&&boxes.length){
      const box=gestureTarget?.isConnected&&visibleBox(gestureTarget)||boxes[0];
      const coach=guide.getBoundingClientRect(),left=box.x+4,right=box.x+box.width-4,top=box.y+4,bottom=box.y+box.height-4;
      const pointX=clamp(box.x+box.width*.55,left,right),pointY=clamp(box.y+Math.min(box.height*.35,64),top,bottom);
      // A large flashcard can extend behind the bubble. Point at its exposed part.
      const candidates=[[pointX,pointY],[pointX,coach.bottom+24],[pointX,coach.top-24],[coach.left-24,pointY],[coach.right+24,pointY]];
      const point=candidates.find(([px,py])=>px>=left&&px<=right&&py>=top&&py<=bottom
        &&(px<coach.left-12||px>coach.right+12||py<coach.top-12||py>coach.bottom+12))||[pointX,pointY];
      const [tipX,tipY]=gestureImage.tip;
      gesture.style.transformOrigin=`${tipX*100}% ${tipY*100}%`;
      // Anchor the fingertip, not the image bounds. The hand may extend offscreen.
      gesture.style.left=`${point[0]-gesture.offsetWidth*tipX}px`;gesture.style.top=`${point[1]-gesture.offsetHeight*tipY}px`;
    }
  }
  const finishGestureExit=()=>{
    clearTimeout(gestureExitTimer);gestureExitTimer=0;
    gesture.hidden=true;gesture.classList.remove('is-visible','is-exiting');updateGesture();
  };
  const hideGesture=()=>{
    gestureRevision+=1;cancelAnimationFrame(gestureFrame);clearTimeout(gestureExitTimer);
    if(gesture.hidden)return;
    gesture.classList.remove('is-visible');gesture.classList.add('is-exiting');
    if(motion.matches)finishGestureExit();
    else gestureExitTimer=setTimeout(finishGestureExit,240);
  };
  const showGesture=()=>{
    const revision=++gestureRevision;
    cancelAnimationFrame(gestureFrame);clearTimeout(gestureExitTimer);
    gesture.style.transition='none';gesture.classList.remove('is-visible','is-exiting');gesture.hidden=false;updateGesture();
    void gesture.decode().catch(()=>{}).then(()=>{
      if(revision!==gestureRevision||signal.aborted||root.hidden||root.classList.contains('is-leaving'))return;
      // Commit the zero-size state before transitioning to the visible state.
      gesture.getBoundingClientRect();gesture.style.removeProperty('transition');
      gestureFrame=requestAnimationFrame(()=>{
        gesture.classList.add('is-visible');
      });
    });
  };
  const queue=()=>{if(!frame&&!root.hidden)frame=requestAnimationFrame(position);};
  const resize=new ResizeObserver(queue);resize.observe(guide);
  window.addEventListener('resize',queue,{signal});window.visualViewport?.addEventListener('resize',queue,{signal});
  document.addEventListener('scroll',queue,{signal,capture:true,passive:true});
  next.addEventListener('click',()=>{if(!root.hidden&&!root.classList.contains('is-leaving'))onNext();},{signal});
  root.querySelector('[data-rocky-tour-skip]').addEventListener('click',()=>{if(!root.hidden&&!root.classList.contains('is-leaving'))onSkip();},{signal});
  root.querySelector('.rocky-app-tour-bubble').addEventListener('click',()=>root.classList.add('is-text-complete'),{signal});
  document.addEventListener('keydown',event=>{
    if(root.hidden||root.classList.contains('is-leaving'))return;
    if(centeredMode&&event.key==='Tab'){
      const buttons=[...guide.querySelectorAll('button:not([hidden])')],first=buttons[0],last=buttons.at(-1);
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
      return;
    }
    if(event.key!=='Escape'||document.querySelector('dialog[open]'))return;
    event.preventDefault();onSkip();
  },{signal});
  const hide=()=>{
    if(root.hidden||root.classList.contains('is-leaving'))return;
    clearTimeout(timer);hideGesture();rocky.stop();
    root.classList.add('is-leaving');
    if(root.contains(document.activeElement)&&returnFocus?.isConnected)returnFocus.focus({preventScroll:true});
    timer=setTimeout(()=>{root.hidePopover?.();root.hidden=true;root.classList.remove('is-leaving');},prefersReducedMotion()?0:240);
  };
  return {
    show({id,message,selectors=[],elements=[],preview=[],inlinePreview=null,equation=null,centered=false,mood=null,gesture:gestureKind=null,gestureSelector=null,nextLabel=null}) {
      const selected=[...elements,...selectors.flatMap(selector=>[...document.querySelectorAll(selector)])]
        .filter(node=>!node.closest('[hidden],[inert]')&&node.getClientRects().length);
      if(!selected.length&&!centered){hide();return false;}
      if(!centered&&(!selected.some(visibleBox)||gestureKind)) selected[0].scrollIntoView({block:'nearest',behavior:'instant'});
      clearTimeout(timer);root.classList.remove('is-leaving','is-text-complete');
      centeredMode=centered;
      guide.setAttribute('role',centered?'dialog':'region');
      if(centered)guide.setAttribute('aria-modal','true');else guide.removeAttribute('aria-modal');
      const parent=selected[0]?.closest('dialog[open]') || document.body;
      if(root.parentElement!==parent){root.hidePopover?.();parent.append(root);}
      targets=selected;gestureTarget=gestureSelector?document.querySelector(gestureSelector):selected[0];geometry='';resize.disconnect();resize.observe(guide);targets.forEach(node=>resize.observe(node));
      if (!root.contains(document.activeElement)) returnFocus=document.activeElement;
      if (!returnFocus?.isConnected) returnFocus=selected[0]||document.querySelector('[data-page=learn]');
      root.dataset.tourStep=id;root.hidden=false;
      const messageNode=root.querySelector('#rocky-app-tour-message');
      messageNode.setAttribute('aria-hidden','true');
      const previewSources=preview.map(selector=>document.querySelector(selector)).filter(Boolean);
      const fragment=document.createDocumentFragment();let letterIndex=0;
      const appendText=text=>{
        // Safari can break Arabic joining across separately animated letters.
        // Keep each word in one text node and preserve spaces between words.
        for(const segment of text.split(/(\s+)/u).filter(Boolean)){
          if(/^\s+$/u.test(segment)){fragment.append(document.createTextNode(segment));letterIndex+=segment.length;continue;}
          const span=document.createElement('span');span.className='rocky-letter';span.textContent=segment;
          span.style.setProperty('--letter-delay',`${letterIndex*22}ms`);letterIndex+=segment.length;fragment.append(span);
        }
      };
      const inlineAt=inlinePreview&&previewSources[0]?message.indexOf(inlinePreview):-1;
      if(inlineAt>=0){
        appendText(message.slice(0,inlineAt));
        const chip=controlPreview(previewSources[0]);chip.classList.add('rocky-inline-control','rocky-letter');
        if(previewSources[0].matches('[data-page]'))chip.classList.add('rocky-inline-navigation');
        chip.style.removeProperty('opacity');chip.style.setProperty('--letter-delay',`${letterIndex*22}ms`);
        letterIndex+=inlinePreview.length;fragment.append(chip);appendText(message.slice(inlineAt+inlinePreview.length));
      } else appendText(message);
      if(equation){
        appendText(' ');
        const value=document.createElement('bdi');value.className='rocky-inline-equation rocky-letter';value.dir='ltr';
        value.style.setProperty('--letter-delay',`${letterIndex++*22}ms`);
        const amount=document.createElement('span');amount.className='ui-number';amount.textContent=equation.amount;
        const icon=document.createElement('img');icon.src=equation.icon;icon.alt=equation.label;icon.width=22;icon.height=22;
        const equal=document.createElement('span');equal.textContent='=';
        const one=document.createElement('span');one.className='ui-number';one.textContent='1';
        const unit=document.createElement('span');unit.dir='rtl';unit.textContent=equation.unit;
        value.append(amount,icon,equal,one,unit);fragment.append(value);
        if(equation.after)appendText(equation.after);
      }
      messageNode.replaceChildren(fragment);
      root.querySelector('.rocky-control-previews').replaceChildren(...(inlineAt>=0?[]:previewSources.map(controlPreview)));
      root.querySelector('[data-rocky-announcement]').textContent=equation?`${message} ${equation.amount} ${equation.label} = 1 ${equation.unit}${equation.after||''}`:inlineAt>=0?message:[message,...previewSources.map(node=>node.getAttribute('aria-label')||node.textContent)].join(' ');
      root.dataset.gesture=gestureKind||'';
      const scrollSurface=selected[0]?.querySelector('.question-number-track')||selected[0];
      const swipeRight=scrollSurface&&getComputedStyle(scrollSurface).direction==='rtl';
      gestureImage=gestureKind==='swipe' ? (swipeRight?GESTURE_IMAGES.right:GESTURE_IMAGES.left) : GESTURE_IMAGES.click;
      if(gestureKind)showGesture();else hideGesture();
      next.hidden=!nextLabel;next.textContent=nextLabel||'';
      root.showPopover?.();position();
      const duration=Math.max(message.length*22+180,centered?2200:0);
      rocky.speak({duration,mood:mood||(id==='hard'?'reassure':'explain')});
      if(!prefersReducedMotion())guide.animate([{opacity:0,transform:'translateY(10px) scale(.98)'},{opacity:1,transform:'none'}],{duration:260,easing:'cubic-bezier(.22,1,.36,1)'});
      if(nextLabel)next.focus({preventScroll:true});
      else if(selected[0]?.matches('button,[tabindex]'))selected[0].focus({preventScroll:true});
      return true;
    },
    hide,stopGesture:hideGesture,reposition:queue,
    destroy(){gestureRevision+=1;clearTimeout(timer);clearTimeout(gestureExitTimer);cancelAnimationFrame(gestureFrame);cancelAnimationFrame(frame);controller.abort();resize.disconnect();root.hidePopover?.();root.remove();},
    get targets(){return targets;},
  };
}
