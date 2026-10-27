import DOMPurify from "../../node_modules/dompurify/dist/purify.es.mjs";
import katex from "../../assets/vendor/katex/katex.mjs";

const MATH_TAGS = ["math", "mrow", "mi", "mn", "mo", "mtext", "mspace", "ms", "mfrac", "msqrt", "mroot", "msub", "msup", "msubsup", "munder", "mover", "munderover", "mmultiscripts", "mprescripts", "none", "mtable", "mtr", "mtd", "mstyle", "mpadded", "mphantom", "menclose", "semantics", "annotation"];
const MATH_ATTRIBUTES = ["xmlns", "dir", "display", "aria-label", "mathvariant", "stretchy", "largeop", "movablelimits", "fence", "separator", "accent", "accentunder", "linethickness", "lspace", "rspace", "width", "height", "depth", "rowspacing", "columnspacing", "columnalign", "rowalign", "notation", "encoding", "displaystyle", "scriptlevel"];

function groupFences(parent) {
  [...parent.children].forEach(groupFences);
  const pairs = { "(":")", "[":"]", "{":"}", "|":"|", "∣":"∣" };
  const stack = [];
  for (const child of [...parent.children]) {
    const scripted = ["msup", "msub", "msubsup"].includes(child.localName);
    const operator = scripted ? child.firstElementChild : child;
    if (operator?.localName !== "mo") continue;
    const value = operator.textContent;
    const opening = stack.at(-1);
    if (opening && (pairs[opening.textContent] === value
      || (opening.textContent === "[" && value === ")") || (opening.textContent === "(" && value === "]"))) {
      stack.pop();
      for (const fence of [opening, operator]) {
        fence.setAttribute("fence", "true");
        fence.setAttribute("stretchy", "true");
        fence.setAttribute("symmetric", "true");
      }
      // A closing bracket's scripts apply to the enclosed expression. Grouping
      // it also lets native MathML stretch both fences around the same content.
      if (!scripted && opening === parent.firstElementChild && child === parent.lastElementChild
        && parent.localName === "mrow") continue;
      const group = parent.ownerDocument.createElementNS(parent.namespaceURI, "mrow");
      parent.insertBefore(group, opening);
      while (group.nextElementSibling !== child) group.append(group.nextElementSibling);
      group.append(operator);
      if (scripted) {
        child.prepend(group);
      }
    } else if (!scripted && Object.hasOwn(pairs, value)) stack.push(operator);
  }
}

function formatOperators(math) {
  const document = math.ownerDocument;
  const fence = (text) => {
    const node = document.createElementNS(math.namespaceURI, "mo");
    node.textContent = text;
    node.setAttribute("fence", "true");
    node.setAttribute("stretchy", "true");
    node.setAttribute("symmetric", "true");
    return node;
  };
  // Determinants use bars, including older solutions authored as det(matrix).
  math.querySelectorAll("mi, mtext").forEach(label => {
    if (!/^(det|محدد)$/.test(label.textContent)) return;
    const application = label.nextElementSibling?.textContent === "\u2061" ? label.nextElementSibling : null;
    const operand = (application || label).nextElementSibling;
    if (!operand) return;
    const first = operand.firstElementChild, last = operand.lastElementChild;
    if (operand.localName === "mrow" && first?.localName === "mo" && last?.localName === "mo"
      && ["()", "[]"].includes(first.textContent + last.textContent)) {
      first.replaceWith(fence("|"));
      last.replaceWith(fence("|"));
    } else {
      const group = document.createElementNS(math.namespaceURI, "mrow");
      operand.replaceWith(group);
      group.append(fence("|"), operand, fence("|"));
    }
    application?.remove();
    label.remove();
  });
  // Only paired fences immediately around a table identify a matrix/determinant.
  math.querySelectorAll("mtable").forEach(table => {
    const open = table.previousElementSibling, close = table.nextElementSibling;
    if (open?.localName !== "mo" || close?.localName !== "mo") return;
    const pair = open.textContent + close.textContent;
    if (!["()", "[]", "||", "∣∣"].includes(pair)) return;
    const determinant = pair === "||" || pair === "∣∣";
    open.replaceWith(fence(determinant ? "|" : "["));
    close.replaceWith(fence(determinant ? "|" : "]"));
  });
  // iOS 17 does not mirror large operators reliably. The tiny integral font
  // maps these codepoints to XITS's existing RTL glyphs, without CSS transforms.
  math.querySelectorAll("mo").forEach(operator => {
    if (!/^[∫∬∭∮]$/.test(operator.textContent)) return;
    operator.setAttribute("largeop", "true");
    // The display glyph is already tall. Stretching it makes Firefox select an
    // empty RTL glyph assembly instead of drawing the integral.
    operator.setAttribute("stretchy", "false");
    operator.setAttribute("symmetric", "true");
    const displayStyle = document.createElementNS(math.namespaceURI, "mstyle");
    displayStyle.setAttribute("displaystyle", "true");
    if (math.getAttribute("dir") === "rtl") {
      displayStyle.setAttribute("dir", "ltr");
      operator.setAttribute("class", "lesson-math-integral-rtl");
    }
    operator.replaceWith(displayStyle);
    displayStyle.append(operator);
    const script = displayStyle.parentElement;
    if (math.getAttribute("dir") === "rtl" && ["msub", "msubsup"].includes(script?.localName)
      && script.firstElementChild === displayStyle) {
      script.children[1].setAttribute("class", "lesson-math-integral-lower");
    }
  });
}

// LaTeX compiles to the same sanitized native MathML used by every question view.
export function renderLatex(source, { display = false } = {}) {
  try {
    const markup = katex.renderToString(source, {
      output:"mathml", displayMode:display, throwOnError:true, trust:false,
      strict:"error", maxExpand:1000, maxSize:20,
    });
    const math = /<math\b[\s\S]*?<\/math>/.exec(markup)?.[0];
    if (!math) throw new Error("Missing MathML output");
    // The outer Markdown sanitizer strips semantics/annotation elements. Remove
    // the TeX annotation first so its source cannot become visible formula text.
    const formula = math.replace(/<annotation\b[\s\S]*?<\/annotation>/g, "")
      .replace(/<\/?semantics>/g, "");
    return renderMathML(formula.replace("<math", '<math dir="ltr"'), { display });
  } catch {
    return '<span class="lesson-math-error" role="alert">صيغة LaTeX غير صالحة</span>';
  }
}

// One MathML path for lesson blocks, inline copy, answer choices and explanations.
export function renderMathML(source, { display = false } = {}) {
  const invalid = '<span class="lesson-math-error" role="alert">صيغة رياضية غير صالحة</span>';
  if (/<!/i.test(source)) return invalid;
  const parser = new DOMParser();
  const original = parser.parseFromString(source.trim(), "application/xml");
  if (original.querySelector("parsererror") || original.documentElement.localName !== "math") return invalid;
  if ([...original.querySelectorAll("*")].some(node => !MATH_TAGS.includes(node.localName))) return invalid;
  if ([...original.querySelectorAll("menclose")].some(node => node.getAttribute("notation") !== "box")) return invalid;
  // DOMPurify serializes nonbreaking spaces as HTML entities, rather than XML.
  const clean = DOMPurify.sanitize(source, {
    ALLOWED_TAGS:MATH_TAGS, ALLOWED_ATTR:MATH_ATTRIBUTES,
    ALLOW_DATA_ATTR:false, FORBID_ATTR:["style"],
  }).replaceAll("&nbsp;", "\u00a0");
  const document = parser.parseFromString(clean, "application/xml");
  const math = document.documentElement;
  if (document.querySelector("parsererror") || math.localName !== "math") return invalid;
  math.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML");
  math.setAttribute("class", "lesson-math");
  math.setAttribute("dir", math.getAttribute("dir") === "ltr" ? "ltr" : "rtl");
  math.setAttribute("display", display ? "block" : "inline");
  // Chromium lacks menclose layout. Keep orbital boxes in the native math row.
  math.querySelectorAll('menclose[notation="box"]').forEach(node => {
    const box = document.createElementNS(math.namespaceURI, "mrow");
    box.setAttribute("class", "lesson-math-box");
    box.append(...node.childNodes);
    node.replaceWith(box);
  });
  // An explicit row lets Firefox stretch operators against sibling fractions/tables.
  const row = document.createElementNS(math.namespaceURI, "mrow");
  row.append(...math.childNodes);
  math.append(row);
  math.querySelectorAll("mn").forEach(node => node.setAttribute("dir", "ltr"));
  math.querySelectorAll("mi").forEach(node => {
    if (/\p{Script=Arabic}/u.test(node.textContent) && !node.hasAttribute("mathvariant")) node.setAttribute("mathvariant", "normal");
  });
  groupFences(math);
  formatOperators(math);
  return math.outerHTML;
}
