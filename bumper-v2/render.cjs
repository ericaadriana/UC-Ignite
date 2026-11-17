// Render lapisan grafis lalu tempelkan ke video dasar, satu potongan frame.
// Pemakaian: node render.cjs <base.mp4> <out.mp4> <frameAwal> <frameAkhir>
// PNG transparan dialirkan langsung ke ffmpeg (tanpa file sementara).
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path');
(async () => {
  const [base, out, a, b] = process.argv.slice(2);
  const fps = 25, from = +a, to = +b;
  const ff = spawn('ffmpeg', ['-v', 'error', '-y',
    '-ss', String(from / fps), '-i', base,
    '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'png', '-i', '-',
    '-filter_complex', '[0:v][1:v]overlay=0:0:shortest=1,format=yuv420p',
    '-frames:v', String(to - from), '-c:v', 'libx264', '-crf', '15', '-preset', 'medium', out],
    { stdio: ['pipe', 'inherit', 'inherit'] });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('file://' + path.join(__dirname, 'overlay.html'));
  await page.evaluate(() => window.ready);
  for (let f = from; f < to; f++) {
    await page.evaluate(t => { window.seek(t); return new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))); }, f / fps);
    const buf = await page.screenshot({ type: 'png', omitBackground: true });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
  }
  ff.stdin.end();
  await browser.close();
  await new Promise(r => ff.on('close', r));
})();
