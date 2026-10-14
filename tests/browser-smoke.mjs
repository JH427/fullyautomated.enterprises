// Dependency-free browser checks. Requires Node 22+ and Chromium on PATH.
// Serves only dist/ on loopback; never starts a model or contacts a publishing API.
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, readdir, mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import { resolve, join, extname, sep } from 'node:path';
import { tmpdir } from 'node:os';
import { spawn } from 'node:child_process';
import { once } from 'node:events';

const root = resolve('dist');
const scratch = process.env.TMPDIR || tmpdir();
const profile = await mkdtemp(join(scratch, 'fae-browser-'));
const server = createServer(async (req, res) => {
  try {
    let path = resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://local').pathname));
    if (path !== root && !path.startsWith(root + sep)) throw new Error('Outside dist');
    if (!extname(path)) path = join(path, 'index.html');
    const body = await readFile(path);
    res.writeHead(200, { 'Content-Type': ({ '.html': 'text/html', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.js': 'text/javascript' })[extname(path)] || 'application/octet-stream' });
    res.end(body);
  } catch { res.writeHead(404); res.end('Not found'); }
});
await new Promise(done => server.listen(0, '127.0.0.1', done));
const origin = `http://127.0.0.1:${server.address().port}`;
const browser = spawn(process.env.CHROMIUM || 'chromium', ['--headless', '--disable-gpu', '--disable-extensions', '--no-first-run', '--no-default-browser-check', '--remote-debugging-port=0', `--user-data-dir=${profile}`, 'about:blank'], { stdio: 'ignore' });
let socket;
try {
  let debugPort;
  for (let attempt = 0; attempt < 100; attempt++) {
    try { debugPort = (await readFile(join(profile, 'DevToolsActivePort'), 'utf8')).split('\n')[0]; break; } catch { await new Promise(r => setTimeout(r, 100)); }
  }
  assert.ok(debugPort, 'Chromium did not start');
  const tabs = await (await fetch(`http://127.0.0.1:${debugPort}/json`)).json();
  socket = new WebSocket(tabs.find(tab => tab.type === 'page').webSocketDebuggerUrl);
  await once(socket, 'open');
  let id = 0;
  const waiting = new Map();
  const errors = [];
  socket.addEventListener('message', event => {
    const data = JSON.parse(event.data);
    if (data.id) { waiting.get(data.id)?.(data); waiting.delete(data.id); }
    if (data.method === 'Runtime.exceptionThrown') errors.push(data.params.exceptionDetails.text);
    if (data.method === 'Log.entryAdded' && data.params.entry.level === 'error') errors.push(data.params.entry.text);
  });
  async function cdp(method, params = {}) {
    const current = ++id;
    return new Promise((done, fail) => {
      const timer = setTimeout(() => { waiting.delete(current); fail(new Error(`Timed out: ${method}`)); }, 10000);
      waiting.set(current, data => { clearTimeout(timer); data.error ? fail(new Error(JSON.stringify(data.error))) : done(data.result); });
      socket.send(JSON.stringify({ id: current, method, params }));
    });
  }
  const evaluate = async expression => {
    const data = await cdp('Runtime.evaluate', { expression, returnByValue: true });
    assert.ok(!data.exceptionDetails, JSON.stringify(data.exceptionDetails));
    return data.result.value;
  };
  async function navigate(route) {
    await cdp('Page.navigate', { url: origin + route });
    for (let attempt = 0; attempt < 100; attempt++) {
      if (await evaluate(`location.pathname === ${JSON.stringify(route)} && document.readyState === 'complete'`)) return;
      await new Promise(r => setTimeout(r, 30));
    }
    throw new Error(`Page did not settle: ${route}`);
  }
  async function routesUnder(dir, prefix = '/') {
    const result = [];
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) result.push(...await routesUnder(join(dir, entry.name), prefix + entry.name + '/'));
      else if (entry.name === 'index.html') result.push(prefix);
    }
    return result;
  }
  await cdp('Runtime.enable');
  await cdp('Log.enable');
  // The entire site, including navigation, must work with page JavaScript disabled.
  await cdp('Emulation.setScriptExecutionDisabled', { value: true });
  const routes = await routesUnder(root);
  let checks = 0;
  for (const width of [320, 390, 768, 1440]) {
    await cdp('Emulation.setDeviceMetricsOverride', { width, height: 1000, deviceScaleFactor: 1, mobile: false });
    for (const route of routes) {
      await navigate(route);
      const state = await evaluate(`({ scroll: document.documentElement.scrollWidth, width: innerWidth, h1: document.querySelectorAll('h1').length, main: !!document.querySelector('#main-content'), images: [...document.images].every(image => image.complete && image.naturalWidth > 0) })`);
      assert.ok(state.scroll <= state.width, `${width}px ${route}: horizontal overflow ${state.scroll}`);
      assert.equal(state.h1, 1, `${route}: h1`);
      assert.ok(state.main && state.images, `${route}: landmark or image failed`);
      checks++;
    }
    if (process.env.SCREENSHOT_DIR) {
      await navigate('/');
      const height = await evaluate('document.documentElement.scrollHeight');
      const shot = await cdp('Page.captureScreenshot', { captureBeyondViewport: true, clip: { x: 0, y: 0, width, height, scale: 1 } });
      await mkdir(process.env.SCREENSHOT_DIR, { recursive: true });
      await writeFile(join(process.env.SCREENSHOT_DIR, `home-${width}.png`), Buffer.from(shot.data, 'base64'));
    }
  }
  await cdp('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: false });
  await navigate('/');
  // Keyboard-only activation exercises the native disclosure, not a scripted click.
  await evaluate('document.querySelector(".mobile-nav summary").focus()');
  await cdp('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Enter', code: 'Enter', text: '\r', windowsVirtualKeyCode: 13 });
  await cdp('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 });
  assert.equal(await evaluate('document.querySelector(".mobile-nav").open'), true, 'Keyboard menu opens');
  assert.ok(await evaluate('document.querySelector(".mobile-nav nav").getBoundingClientRect().width >= document.documentElement.clientWidth - 50'), 'Open menu spans the mobile content width');
  assert.ok(await evaluate('document.querySelector(".mobile-nav nav a").getBoundingClientRect().top >= document.querySelector(".mobile-nav summary").getBoundingClientRect().bottom + 8'), 'Open menu does not overlap its summary');
  assert.equal(await evaluate('[...document.querySelectorAll(".mobile-nav nav a")].filter(a => a.getBoundingClientRect().height >= 44).length'), 5, 'Mobile targets have 44px height');
  if (process.env.SCREENSHOT_DIR) {
    const shot = await cdp('Page.captureScreenshot');
    await writeFile(join(process.env.SCREENSHOT_DIR, 'mobile-menu.png'), Buffer.from(shot.data, 'base64'));
  }
  await evaluate('document.querySelector(".skip-link").focus()');
  assert.equal(await evaluate('document.activeElement.textContent'), 'Skip to content');
  assert.ok(await evaluate('document.activeElement.getBoundingClientRect().top >= 0'), 'Focused skip link is visible');
  assert.deepEqual(errors, [], 'Browser errors');
  console.log(`PASS: ${routes.length} routes × 4 widths = ${checks} layout checks; images, landmarks, native keyboard menu, touch targets, skip link; JavaScript disabled; no browser errors.`);
} finally {
  socket?.close();
  const stopped = once(browser, 'exit');
  browser.kill('SIGTERM');
  await Promise.race([stopped, new Promise(r => setTimeout(r, 3000))]);
  if (browser.exitCode === null) browser.kill('SIGKILL');
  server.close();
  await rm(profile, { recursive: true, force: true, maxRetries: 3, retryDelay: 200 });
}
