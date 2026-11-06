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
