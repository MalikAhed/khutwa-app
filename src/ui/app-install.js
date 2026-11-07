import { mountInstallMotion } from './app-install-motion.js';

const DISMISSED_KEY = 'khutwa:install-dismissed-day:v1';
const INSTALLED_KEY = 'khutwa:app-installed:v1';
const calendar = new Intl.DateTimeFormat('en-CA', {timeZone:'Asia/Hebron',year:'numeric',month:'2-digit',day:'2-digit'});
const today = () => calendar.format(new Date(Date.now()));

// Mount during bootstrap so the browser's one-use installation event is retained.
export function mountAppInstall() {
  const standalone = matchMedia('(display-mode: standalone)');
  const ios = /iPad|iPhone|iPod/.test(navigator.userAgent)
    || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  const android = /Android/i.test(navigator.userAgent);
  if (!ios && !android) return;
  let promptEvent, surface, ready = false, installed = false, offered = false, busy = false, dismissedDay = null;
  try {
    dismissedDay = localStorage.getItem(DISMISSED_KEY);
    installed = localStorage.getItem(INSTALLED_KEY) === 'true';
  } catch { /* Session-only preferences still work. */ }
  const confirmInstallation = () => {
    installed = true; promptEvent = null;
    try { localStorage.setItem(INSTALLED_KEY, 'true'); } catch { /* Still hide in this app session. */ }
  };
  const isInstalled = () => {
    if (!installed && (standalone.matches || navigator.standalone === true)) confirmInstallation();
    return installed;
  };
  let animateExit, leavingSurface;
  const hide = (dx = 0, dy = -1) => {
    if (!surface) return;
    leavingSurface = surface;
    animateExit(dx, dy); surface = null;
  };
  const dismiss = (dx = 0, dy = -1) => {
    dismissedDay = today();
    try { localStorage.setItem(DISMISSED_KEY, dismissedDay); } catch { /* Keep the in-memory choice. */ }
    hide(dx, dy);
  };
  const render = () => {
    // On Android, wait for the browser to confirm installation is available.
    // Already-installed apps generally do not receive beforeinstallprompt.
    if (!ready || isInstalled() || android && !offered || dismissedDay === today()) { hide(); return; }
    if (!surface) {
      // A new eligible opening can arrive before the previous outro finishes.
      leavingSurface?.remove(); leavingSurface = null;
      surface = document.createElement('aside');
      surface.className = 'app-install';
      surface.setAttribute('aria-labelledby', 'app-install-title');
      surface.innerHTML = `<img class="app-install__icon" src="/assets/mascot/rocky-wave.svg#no-shadow" alt="" width="96" height="104">
        <div class="app-install__copy"><strong id="app-install-title">ثبّت خطوة على جهازك</strong>
        <button class="app-install__action" type="button" aria-controls="app-install-help" aria-expanded="false"><img src="/assets/icons/app-install.svg" alt="" aria-hidden="true" width="20" height="20"><span data-install-label></span></button></div>
        <div id="app-install-help" class="app-install__help" hidden><ol>${ios
          ? '<li>افتح خطوة في Safari.</li><li>اضغط «مشاركة» (قد تكون داخل قائمة «المزيد»).</li><li>اختر «إضافة إلى الشاشة الرئيسية»، ثم «إضافة». فعّل «فتح كتطبيق ويب» إذا ظهر.</li>'
          : '<li>افتح خطوة في Chrome.</li><li>افتح قائمة المتصفح ⋮.</li><li>اختر «تثبيت التطبيق» أو «الإضافة إلى الشاشة الرئيسية»، ثم أكّد التثبيت.</li>'}</ol></div>
        <p class="app-install__status" role="status"></p>
        <button class="app-install__close" type="button" aria-label="إخفاء تذكير التثبيت حتى الغد">×</button>`;
      document.body.append(surface);
      animateExit = mountInstallMotion(surface, dismiss);
      surface.querySelector('.app-install__close').addEventListener('click', () => dismiss());
      surface.querySelector('.app-install__action').addEventListener('click', async () => {
        if (busy) return;
        const button = surface.querySelector('.app-install__action');
        if (!promptEvent) {
          const help = surface.querySelector('.app-install__help');
          help.hidden = !help.hidden;
          button.setAttribute('aria-expanded', String(!help.hidden));
          return;
        }
        // prompt() must run directly in the user's click, and each event is one-use.
        const pending = promptEvent;
        promptEvent = null; busy = true; button.disabled = true;
        try {
          await pending.prompt();
          await pending.userChoice;
          // Acceptance can precede installation. Only appinstalled or installed
          // display mode sets the permanent flag; otherwise remind tomorrow.
          dismiss();
        } catch {
          if (surface) surface.querySelector('.app-install__status').textContent = 'تعذّر فتح نافذة التثبيت. يمكنك استخدام قائمة المتصفح.';
        } finally { busy = false; render(); }
      });
    }
    const button = surface.querySelector('.app-install__action');
    button.disabled = busy;
    button.querySelector('[data-install-label]').textContent = promptEvent ? 'تثبيت التطبيق' : 'طريقة التثبيت';
    if (promptEvent) {
      surface.querySelector('.app-install__help').hidden = true;
      button.setAttribute('aria-expanded', 'false');
    }
  };
  window.addEventListener('beforeinstallprompt', event => {
    if (typeof event.prompt !== 'function') return;
    event.preventDefault(); offered = true; promptEvent = event; render();
  });
  window.addEventListener('appinstalled', () => { confirmInstallation(); hide(); });
  standalone.addEventListener('change', render);
  window.addEventListener('pageshow', render);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) render(); });
  window.addEventListener('storage', event => {
    if (event.key === INSTALLED_KEY && event.newValue === 'true') { installed = true; promptEvent = null; }
    else if (event.key === DISMISSED_KEY) dismissedDay = event.newValue;
    else return;
    render();
  });
  document.addEventListener('app:ready', () => { ready = true; render(); }, {once:true});
}
