// Render bumper frame demi frame: node render.cjs <outDir> <frameAwal> <frameAkhir> [fps]
// Lalu gabungkan dengan ffmpeg (lihat README.md).
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const [out, a, b, fps = 25] = process.argv.slice(2);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('file://' + path.join(__dirname, 'index.html'));
  await page.evaluate(() => window.ready);
  for (let f = +a; f < +b; f++) {
    await page.evaluate(t => { window.seek(t); return new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))); }, f / fps);
    await page.screenshot({ path: path.join(out, `f${String(f).padStart(5, '0')}.jpg`), type: 'jpeg', quality: 93 });
  }
  await browser.close();
})();
