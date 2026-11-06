import { COURSE_SUBJECTS } from '../data/course.js';
import { QUESTION_NAVIGATION_LIMIT_ENABLED } from './learner-resources.js';
import { QUESTION_JUMPS_REQUIRE_SUPER } from './free-practice.js';

const subjectCount = 9;
const subjectPriceIls = 15;
const bundlePriceIls = 100;
const separatePriceIls = subjectCount * subjectPriceIls;

export const SUPER_PLANS = Object.freeze([
  Object.freeze({id:'all-subjects',priceIls:bundlePriceIls,label:'جميع المواد',period:'سنة',recommended:true,
    subjectCount,separatePriceIls,savingsPercent:Math.round((1-bundlePriceIls/separatePriceIls)*100)}),
  Object.freeze({id:'one-subject',priceIls:subjectPriceIls,label:'مواد محددة',period:'سنة',recommended:false}),
]);
export const SUPER_BENEFITS = Object.freeze([
  Object.freeze({id:'questions',title:'أسئلة بلا حدود',label:'أسئلة يومية غير محدودة',icon:'assets/icons/nav-heart.svg'}),
  Object.freeze({id:'solutions',title:'شروح بلا حدود',label:'حلول مفصّلة خطوة بخطوة دون حدود',icon:'assets/icons/super-solutions.svg'}),
  Object.freeze({id:'skips',title:'تنقّل بلا حدود',label:'تنقّل غير محدود بين الأسئلة',icon:'assets/icons/super-skip.svg'}),
  Object.freeze({id:'offline',title:'دون إنترنت',label:'الوصول للدروس المحمّلة دون إنترنت',icon:'assets/icons/super-offline.svg'}),
].filter(benefit => QUESTION_NAVIGATION_LIMIT_ENABLED || QUESTION_JUMPS_REQUIRE_SUPER || benefit.id !== 'skips'));


// The offline invitation must be ready even before a free account opens it.
export const SUPER_PAYWALL_ASSETS = Object.freeze([
  'assets/illustrations/sky-mobile.webp', 'assets/illustrations/sky-desktop.webp',
  'assets/illustrations/clouds-foreground-mobile.webp', 'assets/illustrations/clouds-foreground-desktop.webp',
  'assets/illustrations/super-banner.svg', 'assets/mascot/rocky-floating-banner.svg',
  'assets/icons/nav-gem.svg', 'assets/icons/dashboard-levels.svg',
  ...SUPER_BENEFITS.map(benefit => benefit.icon),
  ...new Set(COURSE_SUBJECTS.filter(subject => subject.status === 'available')
    .map(subject => `assets/subjects/super-icons/${subject.artwork || subject.id}.webp`)),
]);
