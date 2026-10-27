import assert from 'node:assert/strict';
import { chromium, firefox, webkit } from 'playwright';
import { startPreviewServer } from '../../scripts/preview-server.mjs';
import { findChrome } from './browser-session.mjs';

const server = await startPreviewServer({ root:process.cwd(), prefix:'/' });
try {
  for (const [name, engine] of Object.entries({ chromium, firefox, webkit })) {
    const browser = await engine.launch(name === 'chromium' ? { executablePath:await findChrome(), args:['--no-sandbox'] } : {});
    try {
      const page = await browser.newPage({ viewport:{ width:390, height:844 } });
      await page.route('**/math-check', route => route.fulfill({ contentType:'text/html', body:
        '<!doctype html><link rel="stylesheet" href="/src/styles/lesson/math.css"><style>body{background:white;color:black;font-size:40px}math{padding:20px}</style>' }));
      await page.goto(server.base + 'math-check');
      for (const direction of ['rtl', 'ltr']) for (const symbol of ['∫', '∬', '∭', '∮']) {
        await page.evaluate(async ({ direction, symbol }) => {
          const { renderMathML } = await import('/src/markdown/math.js');
          document.body.innerHTML = renderMathML(`<math dir="${direction}"><mo>${symbol}</mo></math>`);
          await document.fonts.ready;
        }, { direction, symbol });
        const image = await page.locator('mo').screenshot();
        const lean = await page.evaluate(async base64 => {
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
          if (!ink.length) throw new Error('Integral glyph is empty');
          const top = Math.min(...ink.map(p => p.y)), bottom = Math.max(...ink.map(p => p.y));
          const upper = ink.filter(p => p.y < top + (bottom - top) / 3);
          const lower = ink.filter(p => p.y > bottom - (bottom - top) / 3);
          const center = points => points.reduce((sum, p) => sum + p.x, 0) / points.length;
          return (center(lower) - center(upper)) / image.width;
        }, image.toString('base64'));
        assert.ok(direction === 'rtl' ? lean > .1 : lean < -.1,
          `${name}: ${direction} ${symbol} must face the correct way (${lean})`);
      }
      console.log(`${name}: all four integral glyphs face correctly in RTL and LTR.`);
    } finally { await browser.close(); }
  }
} finally { await server.close(); }
