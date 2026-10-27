import DOMPurify from "../../node_modules/dompurify/dist/purify.es.mjs?v=acff67f262f3c107";
import hljs from "../../node_modules/@highlightjs/cdn-assets/es/highlight.min.js?v=acff67f262f3c107";
import { Marked } from "../../node_modules/marked/lib/marked.esm.js?v=acff67f262f3c107";
import { escapeHtml } from "../lib/dom.js?v=acff67f262f3c107";
import { getLessonUiCopy } from "../ui/lesson-ui-copy.js?v=acff67f262f3c107";
import { LESSON_CONTENT_DIRECTIVES } from "./lesson-authoring.js?v=acff67f262f3c107";
import { renderMathML, renderLatex } from "./math.js?v=acff67f262f3c107";

const GLOSSARY = new Map([
  ["api", "A defined way for software systems to request data or actions from each other."],
  ["http", "The protocol browsers and servers use to exchange requests and responses on the web."],
  ["origin", "The combination of a URL’s scheme, host, and port."],
  ["runtime", "The environment that executes a program while it is running."],
]);
const CONTENT_DIRECTIVE_TYPES = new Set(LESSON_CONTENT_DIRECTIVES);
const CALLOUT_KINDS = new Set(LESSON_CONTENT_DIRECTIVES.filter((kind) => kind !== "reveal"));
const mountedContainers = new WeakMap();
let technicalTermId = 0;

export function parseYouTubeUrl(value) {
  let url;
  try {
    url = new URL(value);
  } catch {
    return null;
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") return null;
  const host = url.hostname.toLowerCase().replace(/^www\./, "").replace(/^m\./, "");
  let videoId = "";
  if (host === "youtu.be") videoId = url.pathname.split("/").filter(Boolean)[0] || "";
  if (host === "youtube.com") {
    const path = url.pathname.split("/").filter(Boolean);
    if (url.pathname === "/watch") videoId = url.searchParams.get("v") || "";
    else if (["embed", "shorts", "live"].includes(path[0])) videoId = path[1] || "";
  }
  if (!/^[A-Za-z0-9_-]{11}$/.test(videoId)) return null;

  const timeValue = url.searchParams.get("t") || url.searchParams.get("start") || new URLSearchParams(url.hash.slice(1)).get("t") || "";
  const timeParts = /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/.exec(timeValue);
  const start = /^\d+$/.test(timeValue)
    ? Number(timeValue)
    : timeParts ? (Number(timeParts[1] || 0) * 3600) + (Number(timeParts[2] || 0) * 60) + Number(timeParts[3] || 0) : 0;
  const safeStart = Number.isSafeInteger(start) && start > 0 ? start : 0;
  const sourceUrl = new URL(`https://www.youtube.com/watch?v=${videoId}`);
  if (safeStart) sourceUrl.searchParams.set("t", `${safeStart}s`);
  return { videoId, start:safeStart, sourceUrl:sourceUrl.href };
}

function parseCodeMeta(info = "") {
  const language = info.trim().split(/\s+/)[0]?.toLowerCase() || "";
  const title = /(?:^|\s)title=(?:"([^"]*)"|'([^']*)'|([^\s]+))/.exec(info);
  const highlights = /(?:^|\s)highlight=(?:"([^"]*)"|'([^']*)'|([^\s]+))/.exec(info);
  const highlightedLines = new Set();
  (highlights?.[1] || highlights?.[2] || highlights?.[3] || "").split(",").forEach((part) => {
    const [start, end = start] = part.trim().split("-").map(Number);
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 1 || end < start || end - start > 200) return;
    for (let line = start; line <= end; line += 1) highlightedLines.add(line);
  });
  return { language, title:title?.[1] || title?.[2] || title?.[3] || "", highlightedLines };
}

const technicalTermExtension = {
  name:"technicalTerm",
  level:"inline",
  start(source) {
    const explicitIndex = source.toLowerCase().indexOf("[[term:");
    const shortIndex = source.indexOf("[[");
    if (explicitIndex < 0) return shortIndex >= 0 ? shortIndex : undefined;
    return shortIndex < 0 ? explicitIndex : Math.min(explicitIndex, shortIndex);
  },
  tokenizer(source) {
    const explicit = /^\[\[term:\s*([^|\]\n]{1,80}?)(?:\s*\|\s*([^\]\n]{1,420}?))?\s*\]\]/i.exec(source);
    const shorthand = /^\[\[([A-Za-z][A-Za-z0-9 .+#/-]{0,79})\]\]/.exec(source);
    const match = explicit || shorthand;
    if (!match) return undefined;
    const term = match[1].trim();
    const definition = explicit?.[2]?.trim() || GLOSSARY.get(term.toLowerCase());
    if (!definition) return undefined;
    return { type:"technicalTerm", raw:match[0], term, definition };
  },
  renderer(token, copy = getLessonUiCopy()) {
    technicalTermId += 1;
    const term = escapeHtml(token.term);
    const definitionId = `markdown-term-${technicalTermId}`;
    return `<dfn class="markdown-tech-term" tabindex="0" aria-describedby="${definitionId}"><span class="markdown-tech-label">${term}</span><span class="markdown-tech-card" id="${definitionId}" role="tooltip"><small>${escapeHtml(copy.glossaryLabel)}</small><strong dir="auto">${term}</strong><span dir="auto">${escapeHtml(token.definition)}</span></span></dfn>`;
  },
};

const lessonDirectiveExtension = {
  name:"lessonDirective",
  level:"block",
  start(source) {
    const index = source.indexOf(":::");
    return index >= 0 ? index : undefined;
  },
  tokenizer(source) {
    const match = /^:::([a-z][a-z0-9-]*)(?:[ \t]+([^\n]+))?\n([\s\S]*?)\n:::(?:\n|$)/i.exec(source);
    const kind = match?.[1]?.toLowerCase();
    if (!match || !CONTENT_DIRECTIVE_TYPES.has(kind)) return undefined;
    const title = match[2]?.trim() || (kind === "reveal" ? "Show explanation" : kind);
    const tokens = this.lexer.blockTokens(match[3].trim());
    return { type:"lessonDirective", raw:match[0], kind, title, tokens };
  },
  renderer(token) {
    const content = this.parser.parse(token.tokens);
    const title = escapeHtml(token.title);
    if (token.kind === "reveal") {
      return `<details class="markdown-reveal"><summary>${title}</summary><div>${content}</div></details>`;
    }
    const kind = CALLOUT_KINDS.has(token.kind) ? token.kind : "note";
    return `<aside class="markdown-callout markdown-callout--${kind}"><strong>${title}</strong><div>${content}</div></aside>`;
  },
  childTokens:["tokens"],
};

const youtubeVideoExtension = {
  name:"youtubeVideo",
  level:"block",
  start(source) {
    const match = /(?:^|\n)[ \t]{0,3}https?:\/\/(?:www\.|m\.)?(?:youtube\.com|youtu\.be)\//i.exec(source);
    if (!match) return undefined;
    return match.index + (match[0].startsWith("\n") ? 1 : 0);
  },
  tokenizer(source) {
    const match = /^[ \t]{0,3}(https?:\/\/[^\s<>]+)[ \t]*(?:\n|$)/i.exec(source);
    if (!match) return undefined;
    const video = parseYouTubeUrl(match[1]);
    if (!video) return undefined;
    return { type:"youtubeVideo", raw:match[0], sourceUrl:video.sourceUrl };
  },
  renderer(token) {
    return `<div class="markdown-youtube"><a class="markdown-youtube-source" href="${escapeHtml(token.sourceUrl)}">Watch this video on YouTube</a></div>`;
  },
};

function inlineMath(markup) {
  if (!markup.startsWith("<math")) return markup;
  const direction = /^<math\b[^>]*\bdir="ltr"/.test(markup) ? "ltr" : "rtl";
  return `<span class="lesson-inline-scroll lesson-math-scroll lesson-math-scroll--inline" dir="${direction}" tabindex="-1" role="group">${markup}</span>`;
}

function inlineImage(markup) {
  return `<span class="lesson-inline-scroll lesson-image-scroll--inline" dir="ltr" tabindex="-1" role="group">${markup}</span>`;
}

// Consume each complete native formula before Markdown can join adjacent
// closing/opening backticks into a multi-backtick code delimiter.
const mathmlInlineExtension = {
  name:"mathmlInline",
  level:"inline",
  start(source) {
    const index = source.indexOf("`mathml:");
    return index >= 0 ? index : undefined;
  },
  tokenizer(source) {
    const match = /^`mathml:\s*(<math\b[^\n]*?<\/math>)`/.exec(source);
    return match ? { type:"mathmlInline", raw:match[0], text:match[1] } : undefined;
  },
  renderer(token) { return renderMathML(token.text); },
};

const latexInlineExtension = {
  name:"latexInline",
  level:"inline",
  start(source) {
    const index = source.search(/\\\(|\$(?!\$)/);
    return index >= 0 ? index : undefined;
  },
  tokenizer(source) {
    const match = /^\\\(([\s\S]*?)\\\)/.exec(source)
      || /^\$(?![\s$])([^$\n]*?[^\s$\\])\$(?!\d)/.exec(source);
    return match ? { type:"latexInline", raw:match[0], text:match[1] } : undefined;
  },
  renderer(token) { return renderLatex(token.text); },
};

const highlightExtension = {
  name:"highlight",
  level:"inline",
  start(source) {
    const index = source.indexOf("==");
    return index >= 0 ? index : undefined;
  },
  tokenizer(source) {
    const match = /^==(?=\S)((?:[^=\n]|=(?!=))+?)(?<!\s)==(?![=])/.exec(source);
    if (!match) return undefined;
    return { type:"highlight", raw:match[0], tokens:this.lexer.inlineTokens(match[1]) };
  },
  renderer(token) { return `<mark>${this.parser.parseInline(token.tokens)}</mark>`; },
  childTokens:["tokens"],
};

const latexBlockExtension = {
  name:"latexBlock",
  level:"block",
  start(source) {
    const match = /(?:^|\n)[ \t]*(?:\\\[|\$\$)/.exec(source);
    return match ? match.index : undefined;
  },
  tokenizer(source) {
    const match = /^[ \t]*\\\[([\s\S]*?)\\\][ \t]*(?:\n|$)/.exec(source)
      || /^[ \t]*\$\$([\s\S]*?)\$\$[ \t]*(?:\n|$)/.exec(source);
    return match ? { type:"latexBlock", raw:match[0], text:match[1] } : undefined;
  },
  renderer(token) {
    return `<figure class="lesson-math-sample"><div class="lesson-math-scroll" dir="ltr" tabindex="0" role="region" aria-label="معادلة">${renderLatex(token.text, { display:true })}</div></figure>`;
  },
};

const codeRenderer = {
  codespan({ text }) {
    if (text.startsWith("mathml:")) return renderMathML(text.slice(7).trim());
    if (text.startsWith("latex:")) return renderLatex(text.slice(6).trim());
    const firstLetter = text.match(/[A-Za-z\p{Script=Arabic}]/u)?.[0] || "";
    const direction = /\p{Script=Arabic}/u.test(firstLetter) ? "rtl" : "ltr";
    return `<code dir="${direction}">${escapeHtml(text)}</code>`;
  },
  code({ text, lang }) {
    const { language, title, highlightedLines } = parseCodeMeta(lang);
    if (language === "latex") {
      return `<figure class="lesson-math-sample">${title ? `<figcaption>${escapeHtml(title)}</figcaption>` : ""}<div class="lesson-math-scroll" dir="ltr" tabindex="0" role="region" aria-label="معادلة">${renderLatex(text, { display:true })}</div></figure>`;
    }
    if (language === "mathml") {
      const caption = title ? `<figcaption>${escapeHtml(title)}</figcaption>` : "";
      const direction = /^<math\b[^>]*\bdir=["']ltr["']/.test(text.trim()) ? "ltr" : "rtl";
      return `<figure class="lesson-math-sample">${caption}<div class="lesson-math-scroll" dir="${direction}" tabindex="0" role="region" aria-label="معادلة">${renderMathML(text, { display:true })}</div></figure>`;
    }
    const hasLanguage = Boolean(language && hljs.getLanguage(language));
    const highlighted = hasLanguage
      ? hljs.highlight(text, { language, ignoreIllegals:true })
      : hljs.highlightAuto(text);
    const detectedLanguage = hasLanguage ? language : highlighted.language;
    const languageClass = detectedLanguage ? ` language-${escapeHtml(detectedLanguage)}` : "";
    const languageLabel = detectedLanguage ? escapeHtml(detectedLanguage.toUpperCase()) : "AUTO-DETECTED";
    const code = highlighted.value.split("\n").map((line, index) => {
      const highlightedClass = highlightedLines.has(index + 1) ? " is-highlighted" : "";
      return `<span class="markdown-code-line${highlightedClass}">${line || " "}</span>`;
    }).join("\n");
    const heading = title ? `<span>${escapeHtml(title)}</span>` : "<span>CODE</span>";
    return `<div class="markdown-code-block"><div class="markdown-code-head">${heading}<b>${languageLabel}</b></div><pre dir="ltr" tabindex="0"><code class="hljs${languageClass}">${code}</code></pre></div>`;
  },
};

const markdownByLocale = new Map();
function markdownFor(locale = "en") {
  const key = locale === "ar" ? "ar" : "en";
  if (markdownByLocale.has(key)) return markdownByLocale.get(key);
  const copy = getLessonUiCopy(key);
  const markdown = new Marked({
  async:false,
  breaks:false,
  extensions:[mathmlInlineExtension, latexInlineExtension, latexBlockExtension, highlightExtension, { ...technicalTermExtension, renderer(token) { return technicalTermExtension.renderer(token, copy); } }, lessonDirectiveExtension, youtubeVideoExtension],
  gfm:true,
  pedantic:false,
  renderer:codeRenderer,
  });
  markdownByLocale.set(key, markdown);
  return markdown;
}

function sanitize(html) {
  return DOMPurify.sanitize(html, {
    USE_PROFILES:{ html:true, mathMl:true },
    ALLOW_DATA_ATTR:false,
    FORBID_ATTR:["style"],
    FORBID_TAGS:["button", "embed", "form", "iframe", "object", "option", "script", "select", "style", "textarea"],
  });
}

// Arabic SQL names keep their own reading direction without reversing the
// surrounding assignment, punctuation, or left-to-right command structure.
function isolateArabicCode(markup) {
  return markup.replace(/(<code\b[^>]*>)([\s\S]*?)(<\/code>)/g, (_match, open, content, close) => {
    const isolated = content.split(/(<[^>]*>)/g).map((fragment, index) => index % 2 ? fragment :
      fragment.replace(/[\p{Script=Arabic}\p{Mark}]+(?:[ \t]+[\p{Script=Arabic}\p{Mark}]+)*/gu,
        text => `<bdi dir="rtl">${text}</bdi>`)).join("");
    return open + isolated + close;
  });
}

// Isolate technical phrases as a unit, so Arabic punctuation cannot reverse
// identifiers, operators or version numbers. MathML and code own their direction.
function directMixedText(markup, locale) {
  if (locale !== "ar" && !/\p{Script=Arabic}/u.test(markup)) return markup;
  const template = document.createElement("template");
  template.innerHTML = markup;
  const content = template.content;
  // A list owns its markers and their padding. Derive its direction before
  // child paragraphs become isolated, which would hide their strong letters.
  content.querySelectorAll("ul,ol").forEach(list => {
    if (list.hasAttribute("dir")) return;
    const firstLetter = list.textContent.match(/\p{Letter}/u)?.[0];
    if (firstLetter) list.dir = /\p{Script=Arabic}/u.test(firstLetter) ? "rtl" : "ltr";
  });
  content.querySelectorAll("li").forEach(item => {
    if (item.querySelector(":scope > :is(p,ul,ol,table,blockquote,pre,div,figure,aside,h1,h2,h3,h4,h5,h6)")) return;
    // Tight items need a reading-direction wrapper, just as loose items have p.
    const copy = document.createElement("span");
    copy.dir = "auto";
    copy.append(...item.childNodes);
    item.append(copy);
  });
  content.querySelectorAll("p,h1,h2,h3,h4,h5,h6,th,td,figcaption,summary").forEach(element => {
    if (!element.hasAttribute("dir") && !element.closest("math")) element.setAttribute("dir", "auto");
  });
  const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!node.parentElement?.closest("code,pre,math,bdi,kbd,samp")) nodes.push(node);
  }
  // A phrase can include programming names, simple formulas and file extensions.
  // Sentence punctuation stays outside the isolated phrase.
  const phrase = /(?:\.?[A-Za-z0-9][A-Za-z\p{Number}.+#/_:=<>*^%×÷−±≤≥≠≈→←⇌′″°-]*)(?:[ \t]+(?:[+*=<>/-][ \t]+)?\.?[A-Za-z0-9][A-Za-z\p{Number}.+#/_:=<>*^%×÷−±≤≥≠≈→←⇌′″°-]*)*(?:[ \t]+[+*=<>/-])?/gu;
  nodes.forEach(node => {
    const text = node.textContent;
    if (!/[A-Za-z]/.test(text)) return;
    const block = node.parentElement?.closest("p,li,h1,h2,h3,h4,h5,h6,th,td,figcaption,summary");
    // Let auto-direction read a whole English paragraph normally; isolating all
    // of its letters would hide its first strong character from dir=auto.
    if (block && !/\p{Script=Arabic}/u.test(block.textContent)) return;
    const fragment = document.createDocumentFragment();
    let end = 0;
    for (const match of text.matchAll(phrase)) {
      const value = match[0].replace(/[.:]+$/, "");
      if (!/[A-Za-z]/.test(value)) continue;
      fragment.append(text.slice(end, match.index));
      const isolated = document.createElement("bdi");
      isolated.dir = "ltr";
      isolated.textContent = value;
      fragment.append(isolated);
      end = match.index + value.length;
    }
    if (!end) return;
    fragment.append(text.slice(end));
    node.replaceWith(fragment);
  });
  return template.innerHTML;
}

export function renderMarkdownDocument(source, { locale = "en" } = {}) {
  return directMixedText(isolateArabicCode(sanitize(markdownFor(locale).parse(String(source)))), locale)
    .replace(/<math\b(?=[^>]*\bdisplay="inline")[\s\S]*?<\/math>/g, inlineMath);
}

export function renderMarkdownInline(source, { locale = "en" } = {}) {
  return directMixedText(isolateArabicCode(sanitize(markdownFor(locale).parseInline(String(source)))), locale);
}

export function renderLessonInline(source, options = {}) {
  return renderMarkdownInline(source, options)
    .replace(/<math\b[\s\S]*?<\/math>/g, inlineMath)
    .replace(/<img\b[^>]*>/g, inlineImage)
    .replaceAll("<code ", '<code class="lesson-inline-code" ');
}

function wrapTables(container, copy) {
  container.querySelectorAll(".markdown-rendered table").forEach((table) => {
    table.querySelectorAll("thead th:not([scope])").forEach(header => header.setAttribute("scope", "col"));
    if (table.parentElement?.classList.contains("markdown-table-scroll")) return;
    const wrapper = document.createElement("div");
    wrapper.className = "markdown-table-scroll";
    wrapper.tabIndex = 0;
    wrapper.setAttribute("role", "region");
    wrapper.setAttribute("aria-label", copy.scrollableTable);
    table.before(wrapper);
    wrapper.append(table);
  });
}

function mountYouTubeVideos(container, copy) {
  container.querySelectorAll(".markdown-youtube-source").forEach((link) => {
    const video = parseYouTubeUrl(link.href);
    if (!video) return;
    const source = new URL(`https://www.youtube-nocookie.com/embed/${video.videoId}`);
    source.searchParams.set("rel", "0");
    if (video.start) source.searchParams.set("start", String(video.start));
    const player = document.createElement("iframe");
    player.className = "markdown-youtube-player";
    player.src = source.href;
    player.title = copy.videoPlayer;
    player.loading = "lazy";
    player.referrerPolicy = "strict-origin-when-cross-origin";
    player.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    player.allowFullscreen = true;
    link.replaceWith(player);
  });
}

export function mountMarkdownFeatures(container, { signal, scrollSurface, locale = "en" } = {}) {
  const copy = getLessonUiCopy(locale);
  // Answer buttons own keyboard interaction; their scrollable content must not
  // create nested focus targets. Standalone formulas remain keyboard reachable.
  container.querySelectorAll("button .lesson-inline-scroll").forEach(region => {
    ["tabindex", "role", "aria-label", "aria-description"].forEach(attribute => region.removeAttribute(attribute));
  });
  container.querySelectorAll('.markdown-rendered li input[type="checkbox"]').forEach((input) => {
    if (!input.hasAttribute('aria-label') && !input.hasAttribute('aria-labelledby'))
      input.setAttribute('aria-label', input.closest("li").textContent.trim());
  });
  wrapTables(container, copy);
  mountYouTubeVideos(container, copy);
  if (mountedContainers.has(container) && mountedContainers.get(container) === signal) return;
  mountedContainers.set(container, signal);
  const inlineRegions = [...container.querySelectorAll(".lesson-inline-scroll")].filter(region => !region.closest("button"));
  if (inlineRegions.length) {
    const updateInlineFocus = () => inlineRegions.forEach(region => {
      const overflow = region.scrollWidth > region.clientWidth + 1;
      region.tabIndex = overflow ? 0 : -1;
      if (overflow) region.setAttribute("aria-description", locale === "ar"
        ? "استخدم السهمين الأيمن والأيسر لقراءة المحتوى كاملًا."
        : "Use the Left and Right Arrow keys to read the full content.");
      else region.removeAttribute("aria-description");
    });
    const observer = new ResizeObserver(updateInlineFocus);
    inlineRegions.forEach(region => { observer.observe(region); region.querySelectorAll("math,img").forEach(content => observer.observe(content)); });
    updateInlineFocus();
    signal?.addEventListener("abort", () => observer.disconnect(), { once:true });
  }
  const contentScrollButton = container.querySelector("[data-content-scroll]");
  if (contentScrollButton && scrollSurface) {
    const updateContentOverflow = () => {
      const hasOverflow = scrollSurface.scrollHeight > scrollSurface.clientHeight + 2;
      const hasMore = hasOverflow && scrollSurface.scrollTop + scrollSurface.clientHeight < scrollSurface.scrollHeight - 2;
      scrollSurface.classList.toggle("has-more-content", hasMore);
    };
    const overflowObserver = new ResizeObserver(updateContentOverflow);
    contentScrollButton.addEventListener("click", () => {
      scrollSurface.scrollBy({ top:Math.max(140, scrollSurface.clientHeight * .58), behavior:"smooth" });
    }, { signal });
    scrollSurface.addEventListener("scroll", updateContentOverflow, { signal, passive:true });
    overflowObserver.observe(scrollSurface);
    [...scrollSurface.children].forEach((child) => overflowObserver.observe(child));
    signal?.addEventListener("abort", () => overflowObserver.disconnect(), { once:true });
    window.requestAnimationFrame(updateContentOverflow);
  }
  const positionTermCard = (term) => {
    const card = term.querySelector(".markdown-tech-card");
    const surface = scrollSurface || term.closest(".markdown-preview-scroll,.lesson-stage") || container;
    if (!card || !surface) return;
    card.classList.remove("is-above");
    card.style.setProperty("--term-shift-x", "0px");
    window.requestAnimationFrame(() => {
      if (!term.isConnected) return;
      const bounds = surface.getBoundingClientRect();
      const termRect = term.getBoundingClientRect();
      if (termRect.bottom + card.offsetHeight + 24 > bounds.bottom && termRect.top - bounds.top > card.offsetHeight + 22) {
        card.classList.add("is-above");
      }
      const naturalLeft = termRect.left + (termRect.width - card.offsetWidth) / 2;
      const shift = naturalLeft < bounds.left + 12 ? bounds.left + 12 - naturalLeft
        : naturalLeft + card.offsetWidth > bounds.right - 12 ? bounds.right - 12 - naturalLeft - card.offsetWidth : 0;
      card.style.setProperty("--term-shift-x", `${shift}px`);
    });
  };
  ["pointerover", "focusin"].forEach((eventName) => container.addEventListener(eventName, (event) => {
    const term = event.target.closest?.(".markdown-tech-term");
    if (term) positionTermCard(term);
  }, { signal }));
}
