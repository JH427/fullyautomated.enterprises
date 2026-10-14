import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
const html = (route = '') => readFileSync(join('dist', route, 'index.html'), 'utf8');

test('homepage presents a broader studio with evidence-backed selected work', () => {
  const home = html();
  for (const text of ['Tools for thinking.', 'Local AI', 'Machine-made media', 'Selected work', 'Horizon Code', 'Sloperator', 'GolfBench', 'Local prototype', 'Early alpha']) assert.ok(home.includes(text), `Missing ${text}`);
  for (const repo of ['horizon-code', 'sloperator']) assert.ok(home.includes(`https://github.com/JH427/${repo}`));
  assert.ok(!home.includes('Product Incubation'));
  assert.ok(home.includes('href="/work"'));
});

test('shared shell is accessible without JavaScript and has complete share metadata', () => {
  const home = html();
  for (const text of ['Skip to content', 'aria-label="Primary navigation"', 'aria-current="page"', '<summary', 'og:image', 'twitter:card', 'rel="canonical"', '/share.png']) assert.ok(home.includes(text), `Missing ${text}`);
  assert.ok(!home.includes('fonts.googleapis.com'));
  assert.ok(!home.includes('theme-toggle'));
  assert.ok(readFileSync('dist/favicon.svg', 'utf8').includes('FAE'));
});

test('work separates public source from local research and products remains a useful compatibility page', () => {
  assert.ok(existsSync('dist/work/index.html'), 'Work route must exist');
  const work = html('work');
  for (const text of ['GPU rendering', 'roadmap', 'Local prototype', 'Private research workflow', 'No public release', 'LLM Wiki']) assert.ok(work.includes(text), `Missing ${text}`);
  assert.ok(!work.includes('https://github.com/JH427/llm-wiki'));
  const products = html('products');
  assert.ok(products.includes('The work has a new home'));
  assert.ok(products.includes('href="/work"'));
  assert.ok(!products.includes('Automation Cost Meter'));
});

test('legacy demos are corrected in place and retired agent notes are historical', () => {
  for (const slug of ['autonomous-content-engine', 'multi-agent-research-pipeline', 'zero-oversight-automation']) {
    const page = html(`labs/${slug}`);
    assert.ok(page.includes('Unsupported demo'), `Correction missing: ${slug}`);
    assert.ok(page.includes('not measured results'));
    assert.ok(existsSync(`archive/legacy-content/labs/${slug}.md`));
  }
  for (const slug of ['agent-handoff-reliability-trial', 'research-analyst-operator-split', 'autonomous-website-maintenance-loop']) {
    const page = html(`labs/${slug}`);
    assert.ok(page.includes('Historical note'));
    assert.ok(page.includes('retired'));
    assert.ok(!page.includes('>Active<'));
  }
  const all = filesUnder('dist').filter(p => p.endsWith('.html')).map(p => readFileSync(p, 'utf8')).join(' ');
  for (const claim of ['127 pieces', '234 emails', '23 research tasks', '76%', '8.1/10', '94%']) assert.ok(!all.includes(claim), `Unsupported claim: ${claim}`);
  assert.ok(!existsSync('dist/archive'));
  assert.ok(html('labs').includes('Corrections'));
});

test('about and method describe a human-directed studio with a concrete evidence standard', () => {
  assert.ok(html('about').includes('Joshua'));
  assert.ok(html('about').includes('local AI'));
  assert.ok(html('about').includes('machine-made media'));
  for (const phrase of ['A plan is not a result', 'A repository is not a benchmark', 'Publication is a separate decision']) assert.ok(html('methodology').includes(phrase), `Missing ${phrase}`);
  assert.ok(html('contact').includes('mailto:contact@fullyautomated.enterprises'));
  assert.ok(!html('contact').includes('Client work of any kind'));
});

test('share metadata points to a raster image supported by social crawlers', () => {
  assert.ok(html().includes('https://fullyautomated.enterprises/share.png'));
  assert.ok(existsSync('dist/share.png'));
  assert.deepEqual([...readFileSync('dist/share.png').subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);
});

test('every built page has valid local links, fragments, assets, and basic document landmarks', () => {
  const origin = 'https://fullyautomated.enterprises';
  for (const file of filesUnder('dist').filter(p => p.endsWith('.html'))) {
    const source = readFileSync(file, 'utf8');
    assert.equal((source.match(/<h1[ >]/g) || []).length, 1, `${file}: one h1`);
    assert.equal((source.match(/<main[ >]/g) || []).length, 1, `${file}: one main`);
    assert.ok(source.includes('id="main-content"'), `${file}: skip target`);
    assert.ok(!/\/home\/|localhost|127\.0\.0\.1|Bearer\s|sk-[a-zA-Z0-9]{16}/.test(source), `${file}: private detail`);
    for (const [, , value] of source.matchAll(/\b(href|src)="([^"]+)"/g)) {
      const url = new URL(value.replaceAll('&amp;', '&'), `${origin}/${file.slice(5).replace(/index\.html$/, '')}`);
      if (url.origin !== origin) continue;
      let target = join('dist', decodeURIComponent(url.pathname));
      if (!/\.[a-z0-9]+$/i.test(target)) target = join(target, 'index.html');
      assert.ok(existsSync(target), `${file}: missing ${value}`);
      if (url.hash && target.endsWith('.html')) {
        assert.ok(readFileSync(target, 'utf8').includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${file}: missing fragment ${value}`);
      }
    }
  }
});

function filesUnder(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? filesUnder(join(dir, entry.name)) : [join(dir, entry.name)]);
}
