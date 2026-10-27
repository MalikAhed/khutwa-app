import assert from 'node:assert/strict';
import { chromium, firefox, webkit } from 'playwright';
import { startPreviewServer } from '../../scripts/preview-server.mjs';
import { findChrome } from './browser-session.mjs';

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
      console.log(`${name}: integral direction and square/cube/indexed/nested/tall root hooks and degrees passed at mobile/desktop widths.`);
    } finally { await browser.close(); }
  }
} finally { await server.close(); }
