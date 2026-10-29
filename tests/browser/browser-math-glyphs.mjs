import assert from 'node:assert/strict';
import { chromium, firefox, webkit } from 'playwright';
import { startPreviewServer } from '../../scripts/preview-server.mjs';
import { findChrome } from './browser-session.mjs';
import averageChange from '../../src/data/lessons/mathematics/average-change.js';

// Published question 27: include its real subtraction equations and fractions.
const question27 = averageChange.steps.find(step => step.id === 'math-kamel-u1-p005-r2').question;
const question27Formulas = question27.choices.find(choice => choice.id === question27.correctChoiceId)
  .feedback.match(/<math\b[\s\S]*?<\/math>/g).filter(formula => formula.includes('<mo>−</mo>'));
assert.ok(question27Formulas.length > 0);

async function checkOperatorInk(page, title) {
  const image = await page.screenshot({ fullPage:true });
  const operators = await page.evaluate(async base64 => {
    const image = new Image();
    image.src = `data:image/png;base64,${base64}`;
    await image.decode();
    const canvas = document.createElement('canvas');
    canvas.width = image.width; canvas.height = image.height;
    const ctx = canvas.getContext('2d'); ctx.drawImage(image, 0, 0);
    return [...document.querySelectorAll('mo')].map(node => {
      const box = node.getBoundingClientRect();
      const x = Math.floor(box.x + scrollX), y = Math.floor(box.y + scrollY);
      const width = Math.ceil(box.right + scrollX) - x, height = Math.ceil(box.bottom + scrollY) - y;
      const data = width && height ? ctx.getImageData(x, y, width, height).data : [];
      let ink = 0;
      for (let i = 0; i < data.length; i += 4) if (data[i] < 120) ink++;
      return { symbol:node.textContent, ink, font:getComputedStyle(node).fontFamily.split(',')[0].replaceAll('"', '') };
    });
  }, image.toString('base64'));
  assert.ok(operators.some(operator => operator.symbol === '−'), `${title}: exercises minus signs`);
  for (const operator of operators) {
    // New WebKit versions fixed fallback painting; also protect older iOS by
    // ensuring the bundled math font supplies the primary operator glyphs.
    assert.equal(operator.font, 'Lesson Math', `${title}: ${operator.symbol} must not depend on text-font fallback`);
    assert.ok(operator.ink > 2, `${title}: ${operator.symbol} must paint visible ink`);
  }
}

async function readInk(page, image) {
  return page.evaluate(async base64 => {
    const image = new Image();
    image.src = `data:image/png;base64,${base64}`;
    await image.decode();
    const canvas = document.createElement('canvas');
    canvas.width = image.width; canvas.height = image.height;
    const ctx = canvas.getContext('2d'); ctx.drawImage(image, 0, 0);
    const { data } = ctx.getImageData(0, 0, image.width, image.height);
    const ink = [];
    for (let y = 0; y < image.height; y++) for (let x = 0; x < image.width; x++) {
      if (data[(y * image.width + x) * 4] < 120) ink.push({ x, y });
    }
    if (!ink.length) throw new Error('Math glyph is empty');
    return { ink, width:image.width, height:image.height };
  }, image.toString('base64'));
}

const server = await startPreviewServer({ root:process.cwd(), prefix:'/' });
try {
  for (const [name, engine] of Object.entries({ chromium, firefox, webkit })) {
    const browser = await engine.launch(name === 'chromium' ? { executablePath:await findChrome(), args:['--no-sandbox'] } : {});
    try {
      const page = await browser.newPage({ viewport:{ width:390, height:844 } });
      await page.route('**/math-check', route => route.fulfill({ contentType:'text/html', body:
        '<!doctype html><link rel="stylesheet" href="/src/styles/amiri-digits.css"><link rel="stylesheet" href="/src/styles/lesson/math.css"><style>body{background:white;color:black;font-size:40px}math{padding:20px}</style>' }));
      await page.goto(server.base + 'math-check');
      for (const direction of ['rtl', 'ltr']) for (const symbol of ['∫', '∬', '∭', '∮']) {
        await page.evaluate(async ({ direction, symbol }) => {
          const { renderMathML } = await import('/src/markdown/math.js');
          document.body.innerHTML = renderMathML(`<math dir="${direction}"><mo>${symbol}</mo></math>`);
          await document.fonts.ready;
        }, { direction, symbol });
        const image = await page.locator('mo').screenshot();
        const { ink, width } = await readInk(page, image);
        const top = Math.min(...ink.map(p => p.y)), bottom = Math.max(...ink.map(p => p.y));
        const upper = ink.filter(p => p.y < top + (bottom - top) / 3);
        const lower = ink.filter(p => p.y > bottom - (bottom - top) / 3);
        const center = points => points.reduce((sum, p) => sum + p.x, 0) / points.length;
        const lean = (center(lower) - center(upper)) / width;
        assert.ok(direction === 'rtl' ? lean > .1 : lean < -.1,
          `${name}: ${direction} ${symbol} must face the correct way (${lean})`);
      }
      for (const width of [390, 1440]) {
        await page.setViewportSize({ width, height:900 });
        await page.evaluate(async formulas => {
          const { renderMathML } = await import('/src/markdown/math.js');
          const expressions = [
            '<mo>−</mo><mn>١٢</mn>',
            '<mn>٥</mn><mo>−</mo><mn>٢</mn>',
            '<mo>-</mo><mn>٣</mn>',
            '<msup><mi>س</mi><mrow><mo>−</mo><mn>٢</mn></mrow></msup>',
            '<mfrac><mrow><mn>٥</mn><mo>−</mo><mn>٢</mn></mrow><mrow><mo>−</mo><mn>٣</mn></mrow></mfrac>',
            ...['+', '=', '≠', '×', '÷', '±', '≤', '≥', '∞'].map(symbol => `<mo>${symbol}</mo>`),
          ];
          const samples = ['rtl', 'ltr'].flatMap(direction => expressions.map(expression =>
            `<math dir="${direction}">${expression}</math>`));
          document.body.innerHTML = '<div style="font-size:22px;display:flex;flex-wrap:wrap;gap:12px">'
            + samples.map(source => renderMathML(source)).join('') + '</div>'
            + formulas.map(source => `<div style="font-size:22px;width:max-content">${renderMathML(source)}</div>`).join('');
          await document.fonts.ready;
        }, question27Formulas);
        await checkOperatorInk(page, `${name} ${width}px operators and question 27`);
        for (const direction of ['rtl', 'ltr']) for (const [label, expression] of [
          ['square', '<msqrt><mrow><mi>س</mi><mo>+</mo><mn>٣</mn></mrow></msqrt>'],
          ['cube', '<mroot><mrow><mi>س</mi></mrow><mn>٣</mn></mroot>'],
          ['fifth', '<mroot><mrow><mi>س</mi></mrow><mn>٥</mn></mroot>'],
          ['tall', '<msqrt><mrow><mfrac><mn>١</mn><mi>س</mi></mfrac></mrow></msqrt>'],
          ['nested', '<msqrt><mrow><mn>١</mn><mo>+</mo><msqrt><mrow><mi>س</mi></mrow></msqrt></mrow></msqrt>'],
        ]) {
          await page.evaluate(async ({ direction, expression }) => {
            const { renderMathML } = await import('/src/markdown/math.js');
            document.body.innerHTML = renderMathML(`<math dir="${direction}">${expression}</math>`);
            await document.fonts.ready;
          }, { direction, expression });
          for (const root of await page.locator('msqrt,mroot').all()) {
            const bounds = await root.evaluate(node => {
              const rect = element => { const {x,y,width,height,right,bottom}=element.getBoundingClientRect(); return {x,y,width,height,right,bottom}; };
              return { root:rect(node), base:rect(node.children[0]), degree:node.localName==='mroot' ? rect(node.children[1]) : null };
            });
            const { root:box, base, degree } = bounds;
            // Inspect the lower hook beside the radicand, below the bar/index ink.
            // A line above the expression must not pass as a root symbol.
            const x = Math.ceil(direction === 'rtl' ? base.right + 1 : box.x);
            const right = Math.floor(direction === 'rtl' ? box.right : base.x - 1);
            const y = Math.ceil(box.y + box.height * .5);
            const bottom = Math.floor(box.bottom);
            const title = `${name} ${width}px ${direction} ${label}`;
            assert.ok(right-x > 3 && bottom-y > 3, `${title}: room for the radical hook`);
            const { ink } = await readInk(page, await page.screenshot({ clip:{x,y,width:right-x,height:bottom-y} }));
            const height = Math.max(...ink.map(p=>p.y)) - Math.min(...ink.map(p=>p.y));
            assert.ok(ink.length > 8 && height > (bottom-y)*.35, `${title}: visible radical hook below the bar`);
            if (degree) {
              assert.ok(degree.y < base.y + base.height/2, `${title}: degree is raised`);
              assert.ok(direction === 'rtl' ? degree.x >= base.right-2 : degree.right <= base.x+2, `${title}: degree sits outside the radicand`);
              await readInk(page, await root.locator(':scope > mn').screenshot());
            }
          }
        }
      }
      console.log(`${name}: operator ink, question 27 subtraction, integral direction and square/cube/indexed/nested/tall root hooks and degrees passed at mobile/desktop widths.`);
    } finally { await browser.close(); }
  }
} finally { await server.close(); }
